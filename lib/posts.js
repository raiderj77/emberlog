import fs from "fs";
import path from "path";

const DIR = path.join(process.cwd(), "content", "published");

function parseFm(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return { data: {}, body: text };
  const data = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z][\w-]*):\s*(.*)$/);
    if (!kv) continue;
    let value = kv[2].trim();
    if (
      value.length >= 2 &&
      ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'")))
    ) {
      value = value.slice(1, -1);
    }
    data[kv[1]] = value;
  }
  return { data, body: text.slice(m[0].length) };
}

function fileToSlug(f) {
  return f.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, "");
}

function detectCategory(slug) {
  if (/brisket|flat/.test(slug))           return "brisket";
  if (/pork|rib|butt|shoulder/.test(slug)) return "pork";
  if (/chicken|turkey/.test(slug))         return "poultry";
  if (/salmon|fish|seafood/.test(slug))    return "seafood";
  if (/wood|reference/.test(slug))         return "reference";
  return "technique";
}

function wpm(text) {
  return Math.max(3, Math.round(text.split(/\s+/).length / 200));
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatInlineText(value) {
  return escapeHtml(value)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>");
}

function safeExternalUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:" ? url.href : null;
  } catch {
    return null;
  }
}

function inline(value) {
  const linkPattern = /\[([^\]]+)\]\(([^)\s]+)\)/g;
  let html = "";
  let cursor = 0;

  for (const match of value.matchAll(linkPattern)) {
    html += formatInlineText(value.slice(cursor, match.index));
    const href = safeExternalUrl(match[2]);
    html += href
      ? `<a href="${escapeHtml(href)}" rel="noopener noreferrer" target="_blank">${formatInlineText(match[1])}</a>`
      : formatInlineText(match[0]);
    cursor = match.index + match[0].length;
  }

  return html + formatInlineText(value.slice(cursor));
}

export function markdownToHtml(md) {
  const src = md.trim();
  const out = [];
  let buf = [];
  let ul = false;

  function closeList() {
    if (!ul) return;
    out.push("</ul>");
    ul = false;
  }

  function flush() {
    const t = buf.splice(0).join(" ").trim();
    if (t) {
      closeList();
      out.push("<p>" + inline(t) + "</p>");
    }
  }

  for (const raw of src.split("\n")) {
    const s = raw.trim();
    if (!s)                { flush(); closeList(); continue; }
    if (s === "---")       { flush(); closeList(); out.push("<hr />"); continue; }
    if (s.startsWith("# "))   { flush(); closeList(); continue; }
    if (s.startsWith("## "))  { flush(); closeList(); out.push("<h2>" + inline(s.slice(3)) + "</h2>"); continue; }
    if (s.startsWith("### ")) { flush(); closeList(); out.push("<h3>" + inline(s.slice(4)) + "</h3>"); continue; }
    if (s.startsWith("- ") || s.startsWith("* ")) {
      flush();
      if (!ul) { out.push("<ul>"); ul = true; }
      out.push("<li>" + inline(s.slice(2)) + "</li>");
      continue;
    }
    closeList();
    buf.push(s);
  }
  flush();
  closeList();
  return out.join("\n");
}

function parseFaqs(section) {
  return section
    .split(/\r?\n(?=### )/)
    .filter((b) => b.startsWith("###"))
    .map((b) => {
      const [head, ...rest] = b.split(/\r?\n/);
      return { q: head.replace(/^###\s*/, "").trim(), a: rest.join(" ").trim() };
    })
    .filter((f) => f.q && f.a);
}

function removeEmbeddedSchema(value) {
  const lines = value.replaceAll("\r\n", "\n").split("\n");
  const marker = '<script type="application/ld+json">';
  const start = lines.findIndex((line) => line.trim() === marker);
  if (start === -1) return value;

  let end = lines.length - 1;
  while (end > start && !lines[end].trim()) end -= 1;

  // These legacy blocks are complete trailing document sections in reviewed,
  // repository-owned Markdown. Anything malformed or embedded elsewhere is
  // left in place and safely rendered as escaped text by markdownToHtml.
  if (lines[end].trim() !== "</script>") return value;
  return lines.slice(0, start).join("\n").trimEnd();
}

function plainMarkdownText(value) {
  return value
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\*(.+?)\*/g, "$1")
    .replace(/`(.+?)`/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function extractAnswer(markdown) {
  const match = markdown.match(/^([\s\S]*?)(?:\r?\n\s*\r?\n|$)/);
  if (!match) return { answer: "", remainder: markdown };

  const paragraph = match[1].trim();
  if (!paragraph || /^(?:##|---|-\s)/.test(paragraph)) {
    return { answer: "", remainder: markdown };
  }

  return {
    answer: plainMarkdownText(paragraph),
    remainder: markdown.slice(match[0].length).trim(),
  };
}

function parse(filename) {
  const raw = fs.readFileSync(path.join(DIR, filename), "utf8");
  const { data, body } = parseFm(raw);
  const content = removeEmbeddedSchema(body);
  const slug = data.slug || fileToSlug(filename);

  let md = content.replace(/^# .+\r?\n?/m, "").trim();
  const extracted = extractAnswer(md);
  const answer = extracted.answer;
  md = extracted.remainder;

  const faqM = md.match(/^## Frequently asked questions\r?\n([\s\S]*)$/im);
  const bodyMd = faqM ? md.slice(0, faqM.index).trim() : md;
  const faqSec = faqM ? faqM[1] : "";

  const description = data.description || answer.slice(0, 160);
  return {
    slug,
    title:        data.title || slug,
    description,
    excerpt:      answer.slice(0, 120) || description,
    answer,
    published:    data.date || "",
    updated:      data.updated || data.date || "",
    category:     detectCategory(slug),
    readMins:     wpm(raw),
    body:         markdownToHtml(bodyMd),
    faqs:         parseFaqs(faqSec),
    fromMarkdown: true,
  };
}

export function getAllPosts() {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(DIR, f), "utf8");
      const { data, body } = parseFm(raw);
      const slug = data.slug || fileToSlug(f);
      const stripped = body.replace(/^# .+\r?\n?/m, "").trim();
      const boldM = stripped.match(/^\*\*([\s\S]+?)\*\*\n?/);
      const answer = boldM ? boldM[1].replace(/\n/g, " ").trim() : "";
      const excerpt = data.description || answer.slice(0, 120);
      return {
        slug,
        title:        data.title || slug,
        description:  data.description || answer.slice(0, 160),
        excerpt,
        published:    data.date || "",
        updated:      data.updated || data.date || "",
        category:     detectCategory(slug),
        readMins:     wpm(raw),
        fromMarkdown: true,
      };
    })
    .sort((a, b) => b.updated.localeCompare(a.updated));
}

export function getPost(slug) {
  if (!fs.existsSync(DIR)) return null;
  for (const f of fs.readdirSync(DIR).filter((f) => f.endsWith(".md"))) {
    const post = parse(f);
    if (post.slug === slug) return post;
  }
  return null;
}
