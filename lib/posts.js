import fs from "fs";
import path from "path";

const DIR = path.join(process.cwd(), "content", "published");

function parseFm(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) return { data: {}, body: text };
  const data = {};
  for (const line of m[1].split("\n")) {
    const kv = line.match(/^(\w+):\s*"?(.*?)"?\s*$/);
    if (kv) data[kv[1]] = kv[2];
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

function inline(t) {
  return t
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" rel="noopener noreferrer" target="_blank">$1</a>'
    );
}

function toHtml(md) {
  const src = md.replace(/<script[\s\S]*?<\/script>/gi, "").trim();
  const out = [];
  let buf = [];
  let ul = false;

  function flush() {
    const t = buf.splice(0).join(" ").trim();
    if (t) out.push("<p>" + inline(t) + "</p>");
  }

  for (const raw of src.split("\n")) {
    const s = raw.trim();
    if (!s)                { flush(); continue; }
    if (s === "---")       { flush(); out.push("<hr />"); continue; }
    if (s.startsWith("# "))   { flush(); continue; }
    if (s.startsWith("## "))  { flush(); out.push("<h2>" + inline(s.slice(3)) + "</h2>"); continue; }
    if (s.startsWith("### ")) { flush(); out.push("<h3>" + inline(s.slice(4)) + "</h3>"); continue; }
    if (s.startsWith("- ") || s.startsWith("* ")) {
      flush();
      if (!ul) { out.push("<ul>"); ul = true; }
      out.push("<li>" + inline(s.slice(2)) + "</li>");
      continue;
    }
    if (ul) { out.push("</ul>"); ul = false; }
    buf.push(s);
  }
  flush();
  if (ul) out.push("</ul>");
  return out.join("\n");
}

function parseFaqs(section) {
  return section
    .split(/\n(?=### )/)
    .filter((b) => b.startsWith("###"))
    .map((b) => {
      const [head, ...rest] = b.split("\n");
      return { q: head.replace(/^###\s*/, "").trim(), a: rest.join(" ").trim() };
    })
    .filter((f) => f.q && f.a);
}

function parse(filename) {
  const raw = fs.readFileSync(path.join(DIR, filename), "utf8");
  const { data, body: content } = parseFm(raw);
  const slug = data.slug || fileToSlug(filename);

  let md = content.replace(/^# .+\n?/m, "").trim();
  const boldM = md.match(/^\*\*([\s\S]+?)\*\*\n?/);
  const answer = boldM ? boldM[1].replace(/\n/g, " ").trim() : "";
  if (boldM) md = md.slice(boldM[0].length).trim();

  const faqM = md.match(/^## Frequently asked questions\n([\s\S]*)$/im);
  const bodyMd = faqM ? md.slice(0, faqM.index).trim() : md;
  const faqSec = faqM ? faqM[1] : "";

  const description = data.description || answer.slice(0, 160);
  return {
    slug,
    title:        data.title || slug,
    description,
    excerpt:      answer.slice(0, 120) || description,
    answer,
    updated:      data.date || "",
    category:     detectCategory(slug),
    readMins:     wpm(raw),
    body:         toHtml(bodyMd),
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
      const stripped = body.replace(/^# .+\n?/m, "").trim();
      const boldM = stripped.match(/^\*\*([\s\S]+?)\*\*\n?/);
      const answer = boldM ? boldM[1].replace(/\n/g, " ").trim() : "";
      const excerpt = data.description || answer.slice(0, 120);
      return {
        slug,
        title:        data.title || slug,
        description:  data.description || answer.slice(0, 160),
        excerpt,
        updated:      data.date || "",
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
