// Article content. Each article renders at /guides/[slug]/.
// To add an article, append an object here. body is HTML rendered into the Prose component.
// answer = the answer-first summary box (AEO). faqs power FAQPage structured data.

import { SITE } from "./site";

export const ARTICLES = [
  {
    slug: "how-long-to-smoke-a-brisket",
    title: "How Long to Smoke a Brisket (Per Pound, and Why Time Lies)",
    description:
      "A realistic per-pound time estimate for smoking brisket at 225-275°F, why the stall wrecks your schedule, and why you should cook to temperature instead of the clock.",
    updated: "2026-05-20",
    readMins: 7,
    tool: "smoke-time",
    excerpt:
      "Plan on roughly 75-90 minutes per pound at 250°F, but the honest answer is: cook to probe-tender, not to a clock.",
    answer:
      "At a 250°F pit, budget about 75-90 minutes per pound of raw brisket, so a 13 lb packer often runs 12-16 hours. But brisket is done by feel, not time: pull it when a probe slides into the flat like warm butter, usually around 203°F internal. Always start hours early and hold it in a cooler if it finishes ahead of schedule.",
    body: `
<p>The single most common brisket question is also the most misleading one. People want a number, and there <em>is</em> a useful planning number, but if you cook brisket by the clock you will eventually serve a tough, underdone disappointment to a backyard full of people. Here is the realistic version.</p>

<h2>The planning estimate</h2>
<p>At a steady pit temperature of <strong>250°F</strong>, plan on roughly <strong>75 to 90 minutes per pound</strong> of raw, trimmed brisket. At a lower <strong>225°F</strong> pit you can push toward 90+ minutes per pound. Some rough examples at 250°F:</p>
<ul>
<li>10 lb brisket: about 12-15 hours</li>
<li>13 lb brisket: about 12-16 hours</li>
<li>16 lb brisket: about 15-20 hours</li>
</ul>
<p>That is a wide range on purpose. Two briskets of identical weight can finish hours apart depending on fat content, your cooker, the weather, how often you open the lid, and whether you wrap. Use our <a href="/tools/smoke-time/">Smoke Time Calculator</a> to turn your weight and pit temp into a start time, then treat the result as a planning window, not a promise.</p>

<h2>Why you cook to temperature, not time</h2>
<p>Brisket is a tough cut full of collagen and connective tissue. It does not become tender at a safe temperature; it becomes tender when that collagen melts into gelatin, which happens slowly in the <strong>195-205°F</strong> range. The USDA safe minimum for beef is <strong>145°F</strong> with a 3-minute rest, but a brisket pulled at 145°F would be inedibly tough. You are cooking far past safe, for texture.</p>
<p>The real doneness test is feel. When a temperature probe or skewer slides into the thickest part of the flat with almost no resistance, it is done, usually somewhere around <strong>203°F</strong>, but that exact number varies. See our <a href="/tools/doneness-temps/">doneness temperature chart</a> for safe minimums versus BBQ targets across every cut.</p>

<h2>Plan for the stall</h2>
<p>Somewhere around <strong>150-170°F internal</strong>, your brisket's temperature will stall and may not move for two, three, even four hours. This is normal evaporative cooling, not a broken cooker. The stall is the number-one reason briskets blow past their estimated finish time. You can ride it out or beat it by wrapping (the "Texas crutch"). We cover this in depth in <a href="/guides/the-brisket-stall/">The Brisket Stall</a>.</p>

<h2>Always finish early, then rest</h2>
<p>Because timing is unpredictable, experienced cooks aim to have brisket <em>done early</em> and then hold it. A finished brisket holds beautifully wrapped in towels inside a dry cooler for 1-4 hours, and many pitmasters insist the long rest improves it. The mistake is the opposite: a brisket that is not ready when dinner is. Start early. A brisket that finishes two hours ahead is a non-problem; one that finishes two hours late is a ruined dinner.</p>

<h2>A simple game plan</h2>
<ol>
<li>Weigh the trimmed brisket and estimate time with the <a href="/tools/smoke-time/">calculator</a>.</li>
<li>Add a 2-hour rest buffer and work backward from serving time.</li>
<li>Smoke at 225-275°F; insert a leave-in probe to watch the curve.</li>
<li>Push through or wrap during the stall.</li>
<li>Start checking for probe-tender feel around 198°F.</li>
<li>Rest wrapped in a cooler until serving.</li>
</ol>
<p>Log the whole thing, your weight, pit temp, wrap time, finish temp, and rest, in your <a href="/log/">cook log</a>. The second brisket is always easier than the first when you can read back exactly what happened.</p>
`,
    faqs: [
      { q: "How long does it take to smoke a brisket at 225°F?", a: "Plan on roughly 90+ minutes per pound at 225°F. A 13 lb brisket can run 16-20 hours. Cook to probe-tender (around 203°F), not to the clock, and start early." },
      { q: "What temperature is brisket done?", a: "Brisket is done by feel, not a fixed number, but probe-tender usually lands around 203°F internal. The USDA safe minimum for beef is 145°F; brisket is cooked far past that for tenderness." },
      { q: "Why is my brisket stuck at 160°F?", a: "That is the stall: evaporative cooling holds the temperature steady for hours around 150-170°F. It is normal. Wait it out or wrap the brisket to push through it." },
      { q: "Can I rest a brisket too long?", a: "A finished brisket holds safely and well for 1-4 hours wrapped in towels in a dry cooler. Many cooks find a long rest improves texture. Keep it above 140°F for food safety on long holds." },
    ],
  },

  {
    slug: "smoker-temperature-guide",
    title: "Smoker Temperature Guide: The Right Pit Temp for Every Meat",
    description:
      "What pit temperature to smoke at for brisket, ribs, pork butt, chicken, and turkey, and why 'low and slow' is not always the right call.",
    updated: "2026-05-12",
    readMins: 6,
    tool: "doneness-temps",
    excerpt:
      "Most low-and-slow BBQ lives at 225-275°F, but poultry wants a hotter pit. Here is the cheat sheet.",
    answer:
      "Smoke most tough cuts (brisket, pork butt, ribs, beef ribs) at 225-275°F. Smoke poultry hotter, 275-325°F, so the skin renders and the bird moves through the food-safety danger zone quickly. There is nothing magic about 225°F; 250-275°F finishes faster with nearly identical results for most cooks.",
    body: `
<p>"Low and slow" is good advice that gets over-applied. Different meats want different pit temperatures, and chasing the lowest possible number can actually hurt your results, especially with poultry. Here is what to set your cooker to and why.</p>

<h2>The quick cheat sheet</h2>
<table>
<thead><tr><th>Meat</th><th>Pit temp</th><th>Cook to</th></tr></thead>
<tbody>
<tr><td>Brisket</td><td>225-275°F</td><td>Probe-tender ~203°F</td></tr>
<tr><td>Pork shoulder / butt</td><td>225-275°F</td><td>Probe-tender ~203°F</td></tr>
<tr><td>Spare / baby back ribs</td><td>225-275°F</td><td>Bend test</td></tr>
<tr><td>Beef short ribs</td><td>250-285°F</td><td>Probe-tender ~203°F</td></tr>
<tr><td>Whole chicken</td><td>275-325°F</td><td>Breast 165°F</td></tr>
<tr><td>Turkey</td><td>275-325°F</td><td>Breast 165°F</td></tr>
<tr><td>Pork loin / tenderloin</td><td>225-250°F</td><td>145°F + rest</td></tr>
</tbody>
</table>

<h2>Why tough cuts like it low</h2>
<p>Brisket, pork shoulder, and ribs are full of collagen that needs time in the 195-205°F internal range to melt into gelatin. A moderate pit (225-275°F) gives that conversion time to happen before the exterior dries out, and leaves a wider margin for error. Within that band, higher is simply faster: a 275°F pit produces brisket nearly indistinguishable from a 225°F pit in blind tests, in less time. Pick the temperature that fits your schedule and your cooker's stability.</p>

<h2>Why poultry likes it hot</h2>
<p>Chicken and turkey are the exception. Two reasons to smoke them at <strong>275-325°F</strong>:</p>
<ul>
<li><strong>Skin.</strong> Poultry skin turns to rubber at low temperatures. Higher heat renders the fat and crisps the skin.</li>
<li><strong>Food safety.</strong> The USDA danger zone is <strong>40-140°F</strong>. Raw poultry should not loiter there. A hotter pit moves the bird through that range faster. All poultry is safe at an internal temperature of <strong>165°F</strong> (source: USDA FSIS).</li>
</ul>

<h2>Measure the pit where the meat is</h2>
<p>The temperature on your cooker's dome thermometer is often 25-50°F off from grate level where the food actually sits. Trust a probe placed at grate height next to the meat, not the lid gauge. Logging your real grate temperature over a cook, in your <a href="/log/">cook log</a>, quickly teaches you your cooker's personality and hot spots.</p>

<h2>Bottom line</h2>
<p>Use 225-275°F for the big tough cuts, go hotter for birds, and stop treating 225°F as sacred. Then dial in your specific cooker by logging results. Estimate your finish time with the <a href="/tools/smoke-time/">Smoke Time Calculator</a> and confirm doneness with the <a href="/tools/doneness-temps/">temperature chart</a>.</p>
`,
    faqs: [
      { q: "What is the best temperature to smoke a brisket?", a: "Anywhere from 225°F to 275°F works well. Higher in that range finishes faster with nearly identical results. Cook to probe-tender (~203°F), not to time." },
      { q: "Why smoke chicken at a higher temperature?", a: "Higher pit temps (275-325°F) render poultry skin so it is not rubbery and move the bird through the 40-140°F food-safety danger zone faster. All poultry is safe at 165°F per USDA." },
      { q: "Is 225 or 250 better for smoking?", a: "Both produce excellent results. 250°F finishes noticeably faster than 225°F with little difference in the final product, so many cooks default to 250-275°F." },
    ],
  },

  {
    slug: "meat-internal-temperature-chart",
    title: "Meat Internal Temperature Chart: Safe Minimums vs BBQ Targets",
    description:
      "USDA safe minimum internal temperatures for every protein, plus the higher probe-tender targets BBQ cooks actually use for brisket, ribs, and pork butt.",
    updated: "2026-06-01",
    readMins: 5,
    tool: "doneness-temps",
    excerpt:
      "Safe and 'done' are two different numbers. Here are both, side by side, with the USDA source.",
    answer:
      "USDA safe minimums: poultry 165°F, ground meat 160°F, and whole cuts of beef, pork, lamb, and veal 145°F with a 3-minute rest. BBQ cuts like brisket and pork butt are cooked far past safe, to about 203°F, for tenderness. Safe is the floor; probe-tender is the texture goal.",
    body: `
<p>Two numbers matter for any piece of meat, and people constantly confuse them. <strong>Safe</strong> is the temperature that makes the meat safe to eat, set by the USDA. <strong>Done</strong>, in barbecue, is often a much higher temperature you cook to for texture. Here is the full picture, with the safe numbers straight from USDA FSIS.</p>

<h2>USDA safe minimum internal temperatures</h2>
<table>
<thead><tr><th>Food</th><th>Safe minimum</th></tr></thead>
<tbody>
<tr><td>All poultry (whole or ground)</td><td>165°F</td></tr>
<tr><td>Ground beef, pork, lamb, veal</td><td>160°F</td></tr>
<tr><td>Beef, pork, lamb, veal (steaks, chops, roasts)</td><td>145°F + 3 min rest</td></tr>
<tr><td>Fish &amp; shellfish</td><td>145°F</td></tr>
<tr><td>Egg dishes</td><td>160°F</td></tr>
<tr><td>Leftovers / reheated</td><td>165°F</td></tr>
</tbody>
</table>
<p>Source: USDA Food Safety and Inspection Service. These are the floor. You can always cook hotter for preference, but never serve below the safe minimum for that category.</p>

<h2>BBQ probe-tender targets (texture, not safety)</h2>
<p>Tough, collagen-heavy cuts are cooked well past safe so the connective tissue melts:</p>
<table>
<thead><tr><th>Cut</th><th>BBQ target</th></tr></thead>
<tbody>
<tr><td>Brisket</td><td>Probe-tender ~200-205°F</td></tr>
<tr><td>Pork shoulder / butt (pulled)</td><td>~200-205°F</td></tr>
<tr><td>Spare / baby back ribs</td><td>Bend test, ~195-203°F</td></tr>
<tr><td>Beef short ribs</td><td>~200-205°F</td></tr>
<tr><td>Chicken thighs (for texture)</td><td>175-185°F</td></tr>
</tbody>
</table>
<p>These are not safety numbers; they are where the meat gets tender. A brisket is "safe" at 145°F but tough; it becomes barbecue at around 203°F.</p>

<h2>How to take an accurate reading</h2>
<ul>
<li>Insert the thermometer into the <strong>thickest part</strong>, away from bone, fat, and gristle.</li>
<li>Check more than one spot, especially on large or irregular cuts.</li>
<li>For probe-tender cuts, trust feel as much as the number: the probe should glide in.</li>
<li>Calibrate your thermometer in ice water (32°F) if readings seem off.</li>
</ul>
<p>Use the interactive <a href="/tools/doneness-temps/">doneness chart</a> to check a reading against the safe minimum, and keep a record of your finish temps in the <a href="/log/">cook log</a> so you can repeat your best results.</p>

<p class="text-sm text-muted"><em>This is general information based on USDA guidance, not a substitute for professional food-safety advice. When in doubt, follow current USDA FSIS guidelines.</em></p>
`,
    faqs: [
      { q: "What is the safe internal temperature for chicken?", a: "All poultry, whole or ground, is safe at 165°F internal, measured in the thickest part away from bone (source: USDA FSIS)." },
      { q: "What temperature should brisket and pulled pork reach?", a: "For tenderness, both are typically cooked to about 200-205°F internal, well above the 145°F safe minimum, so the collagen melts. Pull when probe-tender." },
      { q: "Do I need to rest meat after cooking?", a: "USDA recommends a 3-minute rest for whole cuts of beef, pork, lamb, and veal at 145°F. Large BBQ cuts benefit from much longer rests of 30 minutes to a few hours." },
    ],
  },

  {
    slug: "best-wood-for-smoking",
    title: "Best Wood for Smoking Each Meat (A Practical Pairing Guide)",
    description:
      "Which smoking wood to use for brisket, pork, ribs, poultry, and fish, how strong each wood is, and why 'more smoke' is usually a mistake.",
    updated: "2026-04-28",
    readMins: 6,
    tool: "wood-pairing",
    excerpt:
      "Match wood strength to the meat. Bold woods for beef, fruit woods for pork and poultry, delicate woods for fish.",
    answer:
      "Use strong woods (hickory, oak, mesquite) for beef and brisket; medium woods (pecan, oak) for pork and ribs; mild fruit woods (apple, cherry, peach) for pork and poultry; and delicate woods (alder, fruit) for fish. Mesquite is the easiest to overdo. When unsure, oak is the safe all-rounder.",
    body: `
<p>Smoking wood is a seasoning, and like any seasoning the goal is balance, not maximum intensity. The biggest beginner mistake is too much heavy smoke, which turns food bitter and acrid. Match the wood's strength to the meat and you season the smoke instead of drowning the food.</p>

<h2>Wood strength, from bold to delicate</h2>
<ul>
<li><strong>Very strong:</strong> Mesquite. Bold and earthy, burns fast and hot, very easy to overdo. Great for quick, hot beef cooks; risky for long smokes.</li>
<li><strong>Strong:</strong> Hickory. The classic savory, bacon-like BBQ smoke. The workhorse for pork and ribs.</li>
<li><strong>Medium:</strong> Oak (clean, balanced, long-burning) and pecan (rich, nutty, a softer cousin of hickory).</li>
<li><strong>Mild / fruit:</strong> Apple, cherry, peach, pear, maple. Sweet and subtle. Cherry also gives a beautiful mahogany color.</li>
<li><strong>Delicate:</strong> Alder. Light and slightly sweet, traditional for salmon and other fish.</li>
</ul>

<h2>Pairings by meat</h2>
<table>
<thead><tr><th>Meat</th><th>Good woods</th></tr></thead>
<tbody>
<tr><td>Brisket / beef</td><td>Oak, hickory, mesquite (blend mesquite with oak to tame it)</td></tr>
<tr><td>Pork shoulder / ribs</td><td>Hickory, apple, cherry, pecan</td></tr>
<tr><td>Poultry</td><td>Apple, cherry, maple, pecan</td></tr>
<tr><td>Fish / salmon</td><td>Alder, apple, peach</td></tr>
<tr><td>Lamb</td><td>Oak, cherry</td></tr>
<tr><td>Sausage</td><td>Hickory, oak</td></tr>
</tbody>
</table>
<p>Use the interactive <a href="/tools/wood-pairing/">Wood Pairing Finder</a> to go either direction: pick a meat to see its best woods, or pick a wood to see what it suits.</p>

<h2>Blending and a few rules of thumb</h2>
<ul>
<li><strong>Blend to balance.</strong> A common trick is cutting an aggressive wood with a neutral one, for example oak plus a little mesquite, or hickory plus apple.</li>
<li><strong>Match color expectations.</strong> Cherry darkens the bark; great on pork and poultry.</li>
<li><strong>Wood is preference, not safety.</strong> No wood pairing changes the temperature your meat must reach. Confirm doneness on the <a href="/tools/doneness-temps/">temperature chart</a>.</li>
<li><strong>Thin blue smoke, not white.</strong> Billowing white smoke means bitter food. You want a clean, almost invisible bluish smoke.</li>
</ul>
<p>Track which wood you used on each cook in your <a href="/log/">cook log</a>; after a few smokes you will know exactly which pairings your family likes best.</p>
`,
    faqs: [
      { q: "What is the best wood for smoking brisket?", a: "Oak is the classic balanced choice for brisket, with hickory for more punch. Mesquite works but is strong and best blended with oak to avoid bitterness." },
      { q: "What wood is best for pork and ribs?", a: "Hickory is the traditional choice, and fruit woods like apple and cherry add sweetness and color. Pecan is a milder, nutty alternative to hickory." },
      { q: "Can you use too much smoking wood?", a: "Yes. Too much heavy smoke makes food bitter and acrid. Aim for thin blue smoke rather than billowing white smoke, and match wood strength to the meat." },
    ],
  },

  {
    slug: "how-much-meat-per-person",
    title: "How Much Meat Per Person for BBQ (So Nobody Goes Hungry)",
    description:
      "How much raw meat to buy per guest for BBQ, with adjustments for appetite, kids, sides, bone-in cuts, and the big one: cooking yield.",
    updated: "2026-05-05",
    readMins: 5,
    tool: "meat-per-person",
    excerpt:
      "Plan ~1/3 to 1/2 lb of cooked meat per adult, then buy more raw to cover cooking loss, pulled pork loses about half its weight.",
    answer:
      "As a main, plan about 1/3 to 1/2 pound of cooked meat per adult (1/2 lb for big eaters), and half that for young kids. Then buy extra raw weight to cover cooking loss: pulled pork and brisket lose roughly 40-50%, so buy about 1 pound raw per person. Bone-in cuts need more raw weight still.",
    body: `
<p>Running out of food is the host's nightmare; massively overbuying expensive brisket is the wallet's. The math is simple once you account for the part most guides skip: cooking yield.</p>

<h2>Step 1: cooked meat per person</h2>
<ul>
<li><strong>As the main event:</strong> about <strong>1/2 lb cooked</strong> per adult.</li>
<li><strong>With lots of sides:</strong> about <strong>1/3 lb cooked</strong> per adult.</li>
<li><strong>Big eaters / a meat-forward crowd:</strong> 1/2 to 3/4 lb cooked.</li>
<li><strong>Young kids:</strong> roughly half an adult portion.</li>
</ul>

<h2>Step 2: the part everyone forgets, yield</h2>
<p>Raw weight is not finished weight. As meat cooks it loses moisture and renders fat, and tough cuts you pull or trim lose a lot:</p>
<table>
<thead><tr><th>Cut</th><th>Approx. yield</th><th>So buy raw…</th></tr></thead>
<tbody>
<tr><td>Pulled pork (shoulder)</td><td>~50%</td><td>~1 lb raw per 1/2 lb cooked</td></tr>
<tr><td>Brisket (packer, trimmed &amp; rendered)</td><td>~50%</td><td>~1 lb raw per 1/2 lb cooked</td></tr>
<tr><td>Ribs (bone-in)</td><td>by the rack, plan per person</td><td>1/2 to 1 rack per person</td></tr>
<tr><td>Chicken (bone-in)</td><td>~50-60% edible</td><td>buy more to cover bone weight</td></tr>
<tr><td>Steaks / boneless</td><td>~75%</td><td>~2/3 lb raw per 1/2 lb cooked</td></tr>
</tbody>
</table>
<p>This is why "buy a pound of brisket per person" is a real rule of thumb: half of it disappears in the cook.</p>

<h2>Step 3: let the calculator do it</h2>
<p>Rather than juggle this by hand, plug your headcount and cut into the <a href="/tools/meat-per-person/">Meat Per Person Calculator</a>. It accounts for adults vs kids, appetite, whether the meat is the main or one of several proteins, and the yield for your specific cut, then tells you how much raw meat to buy.</p>

<h2>Smart hosting tips</h2>
<ul>
<li><strong>Round up slightly on cheap proteins, not expensive ones.</strong> Extra pulled pork freezes and reheats great.</li>
<li><strong>More proteins means less of each.</strong> Two or three meats spread the load.</li>
<li><strong>Account for sides honestly.</strong> Heavy mac, beans, and bread genuinely reduce meat consumption.</li>
<li><strong>Leftovers are a feature.</strong> Pulled pork tacos, brisket hash, and chopped-beef sandwiches are the reward.</li>
</ul>
`,
    faqs: [
      { q: "How much pulled pork per person?", a: "Plan about 1/3 to 1/2 pound cooked per adult. Because pork shoulder yields roughly 50% after cooking, buy about 1 pound of raw shoulder per person." },
      { q: "How much brisket per person?", a: "Around 1/2 pound cooked per adult as the main. A trimmed packer brisket loses about half its weight, so buy roughly 1 pound of raw brisket per person." },
      { q: "How much meat per person if there are lots of sides?", a: "With plenty of sides, about 1/3 pound of cooked meat per adult is enough. Scale up to 1/2 pound or more for a meat-forward crowd." },
    ],
  },

  {
    slug: "dry-brine-guide",
    title: "Dry Brine, Done Right: How Much Salt and For How Long",
    description:
      "A simple, weight-based dry brine method, how much salt to use per pound (and why salt brand matters), timing by cut, and dry vs wet brine.",
    updated: "2026-04-15",
    readMins: 6,
    tool: "dry-brine",
    excerpt:
      "Salt by weight, not volume: about 0.5% of the meat's weight is a reliable starting point. Then give it time, uncovered, in the fridge.",
    answer:
      "A reliable dry brine is about 0.5% of the meat's weight in salt (roughly 2-2.5 grams of kosher salt per pound), applied and then rested uncovered in the fridge: a few hours for chicken pieces, overnight for a whole bird or roast, and up to 1-2 days for turkey or large cuts. Salt brands differ by volume, so weigh it.",
    body: `
<p>Dry brining, salting meat ahead and letting it rest, gives you seasoned-through, juicier meat with better browning and crispier poultry skin, with none of the hassle of a wet brine bucket. The whole technique comes down to two questions: how much salt, and how long.</p>

<h2>How much salt: weigh it</h2>
<p>The reliable way to dry brine is by <strong>weight</strong>, not teaspoons, because salt brands have wildly different crystal sizes. A tablespoon of Morton kosher salt weighs almost double a tablespoon of Diamond Crystal. A solid starting point:</p>
<ul>
<li><strong>0.5% of the meat's weight in salt</strong> for a balanced, everyday brine (about 2-2.5 g per pound).</li>
<li>Up to <strong>0.75-1%</strong> if you like things well-seasoned or for very thick cuts.</li>
</ul>
<p>The <a href="/tools/dry-brine/">Dry Brine Salt Calculator</a> does this for you: enter the meat weight and your salt brand and it gives you grams plus an approximate teaspoon equivalent for Diamond Crystal, Morton, or table salt.</p>

<h2>How long: by cut</h2>
<table>
<thead><tr><th>Cut</th><th>Dry brine time</th></tr></thead>
<tbody>
<tr><td>Chicken pieces, steaks, chops</td><td>1-12 hours (even 45 min helps)</td></tr>
<tr><td>Whole chicken</td><td>12-24 hours</td></tr>
<tr><td>Pork roast / large roast</td><td>12-24 hours</td></tr>
<tr><td>Turkey (whole)</td><td>24-48 hours</td></tr>
<tr><td>Brisket / pork butt</td><td>Overnight is plenty (rub usually does double duty)</td></tr>
</tbody>
</table>
<p>Rest it <strong>uncovered</strong> on a rack in the fridge if you can. The drying effect is exactly what gives poultry that crisp, rendered skin.</p>

<h2>How it works</h2>
<p>Salt first draws moisture out, dissolving into a concentrated brine on the surface, then that seasoned moisture is reabsorbed, carrying salt deep into the meat. Along the way salt restructures proteins so they hold more water during cooking. The result is meat seasoned all the way through that loses less moisture on the smoker.</p>

<h2>Dry vs wet brine</h2>
<ul>
<li><strong>Dry brine:</strong> easier, no equipment, concentrates flavor, crisps skin, does not dilute. Best for most BBQ.</li>
<li><strong>Wet brine:</strong> can add the most moisture insurance for very lean cuts, but takes space, can make skin soggy, and slightly dilutes flavor.</li>
</ul>
<p>For smoked poultry specifically, dry brining is usually the better choice because of the skin. Log your salt percentage and timing in your <a href="/log/">cook log</a> and adjust to your taste over a few cooks.</p>

<p class="text-sm text-muted"><em>Salt amounts are a starting point for flavor; always cook meat to its USDA safe minimum temperature regardless of brining. See the <a href="/tools/doneness-temps/">doneness chart</a>.</em></p>
`,
    faqs: [
      { q: "How much salt do I use to dry brine?", a: "About 0.5% of the meat's weight in salt is a reliable starting point, roughly 2-2.5 grams of kosher salt per pound. Weigh it, since salt brands differ a lot by volume." },
      { q: "How long should you dry brine a turkey?", a: "24 to 48 hours for a whole turkey, uncovered in the fridge, gives well-seasoned meat and crisp skin. Whole chicken needs 12-24 hours." },
      { q: "Is dry brining better than wet brining?", a: "For most BBQ, especially poultry, dry brining is easier, crisps the skin better, and concentrates rather than dilutes flavor. Wet brining can add slightly more moisture to very lean cuts but needs space and can soften skin." },
    ],
  },

  {
    slug: "the-brisket-stall",
    title: "The Brisket Stall: What It Is and How to Beat It",
    description:
      "Why your brisket's temperature stops climbing for hours around 150-170°F, and your options: wait it out, or wrap with the Texas crutch.",
    updated: "2026-03-30",
    readMins: 5,
    tool: "smoke-time",
    excerpt:
      "The stall is evaporative cooling, not a broken cooker. Wrap to power through it, or ride it out for more bark.",
    answer:
      "The stall is when a large cut's internal temperature stalls for hours, typically around 150-170°F, because surface moisture evaporating cools the meat as fast as the smoker heats it. It is completely normal. Wrap the meat in foil or butcher paper (the 'Texas crutch') to push through faster, or wait it out for thicker bark.",
    body: `
<p>You are four hours into a brisket, the internal temperature climbs to 158°F, and then it just... stops. For two, three, sometimes four hours, the number barely moves. Nothing is wrong. You have hit the stall, and understanding it is the difference between a calm cook and a panicked one.</p>

<h2>What causes the stall</h2>
<p>It is evaporative cooling, the same reason sweating cools you down. As the brisket heats, moisture is pushed to the surface and evaporates. Evaporation is strongly cooling, and at a certain point the heat the meat absorbs from the smoker roughly equals the heat lost to evaporation. The internal temperature plateaus until the surface finally dries enough for the temperature to start climbing again. It almost always happens in the <strong>150-170°F</strong> range and is most dramatic on big, wet cuts like brisket and pork shoulder.</p>

<h2>Your options</h2>
<h3>1. Wait it out ("no wrap")</h3>
<p>Do nothing and let it ride. You get the thickest, darkest bark this way because the surface keeps drying and forming crust. The cost is time, the stall can add hours, so this is the move when you have started early and are not against the clock.</p>

<h3>2. Wrap it (the "Texas crutch")</h3>
<p>Wrap the meat once it hits the stall to stop evaporative cooling and power through:</p>
<ul>
<li><strong>Aluminum foil:</strong> fastest push through the stall and the most moisture retention, but it softens the bark (a "braise").</li>
<li><strong>Butcher paper (peach/pink):</strong> the popular middle ground, it speeds things up while letting the bark breathe, so you keep more crust.</li>
</ul>
<p>Wrapping can cut an hour or more off the cook and makes timing far more predictable, which is why competition and busy backyard cooks rely on it.</p>

<h2>When to wrap</h2>
<p>Most cooks wrap when the meat reaches the stall and the bark looks set, the color is deep and the surface is no longer wet, commonly around 160-170°F internal. There is no single correct number; it is about the look of the bark.</p>

<h2>Plan around it</h2>
<p>The practical lesson: the stall is the main reason briskets miss their estimated finish time, so always pad your schedule. Estimate with the <a href="/tools/smoke-time/">Smoke Time Calculator</a>, add a rest buffer, and start early. If it finishes ahead, hold it wrapped in a cooler. Note your stall timing and wrap point in the <a href="/log/">cook log</a> so next time you know what your cooker does.</p>
`,
    faqs: [
      { q: "Why does brisket stall at 160 degrees?", a: "Evaporative cooling. Moisture evaporating from the surface cools the meat about as fast as the smoker heats it, so the internal temperature plateaus, usually around 150-170°F. It is normal." },
      { q: "Should I wrap my brisket?", a: "Wrapping (the Texas crutch) pushes the brisket through the stall faster and makes timing predictable. Foil is fastest but softens bark; butcher paper speeds things up while preserving more bark. Waiting unwrapped gives the thickest bark." },
      { q: "How long does the stall last?", a: "Typically one to several hours, depending on the cut size, moisture, and your cooker. Wrapping shortens it significantly." },
    ],
  },

  {
    slug: "first-smoke-beginners-guide",
    title: "Your First Smoke: A Beginner's Step-by-Step Guide",
    description:
      "A simple, confidence-building walkthrough for your first BBQ smoke, what to cook, what gear you actually need, and how not to mess it up.",
    updated: "2026-02-18",
    readMins: 7,
    tool: "smoke-time",
    excerpt:
      "Start with pork shoulder, buy a good thermometer before anything else, and cook to temperature. That is 90% of it.",
    answer:
      "For your first smoke, cook a pork shoulder (it is forgiving), keep your pit around 250°F, and use a reliable instant-read or leave-in thermometer, the single most important tool. Cook to internal temperature, not time, expect a multi-hour stall, and rest the meat before serving. Keep it simple and log what you do.",
    body: `
<p>Your first smoke feels intimidating and does not need to be. Barbecue forgives beginners far more than it gets credit for, especially if you pick the right first cook and respect one rule: cook to temperature, not the clock. Here is the no-stress version.</p>

<h2>Step 1: cook a pork shoulder</h2>
<p>Do not start with brisket. A <strong>pork shoulder (Boston butt)</strong> is fatty, cheap, and almost impossible to ruin, the perfect teacher. Plan on about 1.5 hours per pound at 250°F, and buy roughly 1 pound raw per person you are feeding (it loses about half its weight). Use the <a href="/tools/meat-per-person/">Meat Per Person Calculator</a> to size it.</p>

<h2>Step 2: buy a thermometer first</h2>
<p>Before fancy rubs or gadgets, get a <strong>good thermometer</strong>. A reliable instant-read plus a leave-in probe will do more for your barbecue than anything else you can buy. Lid gauges lie; the meat's internal temperature is the truth.</p>

<h2>Step 3: set up for steady heat</h2>
<ul>
<li>Target a pit temperature of <strong>250°F</strong>; anywhere in 225-275°F is fine.</li>
<li>Set up for indirect heat (fire/coals to one side, meat on the other), or just set your pellet grill to 250°F.</li>
<li>Add a couple chunks of a friendly wood, <strong>apple, cherry, or hickory</strong> for pork. See the <a href="/tools/wood-pairing/">wood guide</a>.</li>
<li>Resist opening the lid. "If you're lookin', you ain't cookin'."</li>
</ul>

<h2>Step 4: season simply</h2>
<p>Salt and pepper genuinely make great barbecue. For pork, a basic rub of salt, pepper, paprika, and a little brown sugar is plenty. Even better, dry brine with salt the night before, see the <a href="/guides/dry-brine-guide/">dry brine guide</a>.</p>

<h2>Step 5: cook to temperature and expect the stall</h2>
<p>Put the shoulder on, insert your probe, and let it ride. Around <strong>150-170°F</strong> the temperature will stall for hours, that is normal (here is <a href="/guides/the-brisket-stall/">why</a>). You can wrap in foil to speed it up. Pull the pork when it is <strong>probe-tender, around 203°F</strong> internal, when a probe slides in with no resistance.</p>

<h2>Step 6: rest, then pull</h2>
<p>Let it rest at least 30-60 minutes (wrapped, in a cooler is ideal). Then pull it apart, discarding the big fat pockets. Congratulations, you made barbecue.</p>

<h2>The mindset</h2>
<ul>
<li>Start early. Time is unpredictable; a finished butt holds for hours.</li>
<li>Trust the thermometer over the clock and the lid gauge.</li>
<li>Keep your first cook simple. Master one thing, then expand.</li>
<li><strong>Log it.</strong> Record weight, pit temp, wood, wrap time, finish temp, and how it turned out in your <a href="/log/">cook log</a>. That record is how you get better fast.</li>
</ul>
`,
    faqs: [
      { q: "What should I smoke first as a beginner?", a: "A pork shoulder (Boston butt). It is fatty, inexpensive, and very forgiving. Smoke at 250°F and pull it when probe-tender around 203°F." },
      { q: "What gear do I need to start smoking meat?", a: "Most importantly, a reliable thermometer (instant-read plus a leave-in probe). Beyond a smoker or grill set up for indirect heat and some wood, that is the essential tool that determines success." },
      { q: "What pit temperature should a beginner use?", a: "250°F is an easy, forgiving target for most low-and-slow cuts. Anywhere from 225°F to 275°F works well." },
    ],
  },

  {
    slug: "why-keep-a-bbq-cook-log",
    title: "Why Keep a BBQ Cook Log (and What to Write Down)",
    description:
      "The fastest way to get better at barbecue is to write down what you did. Here is exactly what to log on every cook, and why memory is not enough.",
    updated: "2026-06-08",
    readMins: 4,
    tool: null,
    excerpt:
      "Great pitmasters are not lucky; they are consistent. A cook log turns a good result into a repeatable one.",
    answer:
      "Keep a cook log so you can repeat your best results and learn from the misses. For every cook, record the cut and weight, pit temperature, wood, any wrap and when, total time, finish temperature, rest, and an honest verdict with one thing to change. Over a few cooks the patterns become obvious.",
    body: `
<p>Here is the uncomfortable truth about backyard barbecue: most people cook the same brisket slightly differently every time and never figure out which version was actually best. They remember "that one was great" but not the pit temp, the wood, or when they wrapped. A cook log fixes that, and it is the single highest-return habit a developing pitmaster can build.</p>

<h2>Why memory fails</h2>
<p>A long smoke has dozens of variables and happens over 12+ hours, often with a beer in hand. By next weekend you have lost the details that mattered. Was the great brisket 250°F or 275°F? Did you wrap at 165°F or 170°F? Oak or oak-and-hickory? Without a record, every cook is a fresh experiment instead of an iteration.</p>

<h2>What to log on every cook</h2>
<ul>
<li><strong>The cut and weight</strong> (raw, trimmed). Weight drives time.</li>
<li><strong>Pit temperature</strong> at grate level, ideally a few readings across the cook.</li>
<li><strong>Wood</strong> used.</li>
<li><strong>Prep:</strong> rub, dry brine percentage, injection, trim notes.</li>
<li><strong>Wrap:</strong> whether, what in, and at what internal temp.</li>
<li><strong>Timeline:</strong> on time, stall, wrap time, done time.</li>
<li><strong>Finish temperature</strong> and how it probed.</li>
<li><strong>Rest</strong> length and method.</li>
<li><strong>The verdict:</strong> a rating and, crucially, one thing to change next time.</li>
</ul>

<h2>Track multiple probes</h2>
<p>If you run more than one piece of meat, or a pit probe plus meat probes, log them separately over time. Seeing the pit temperature and each meat's curve side by side is how you learn your cooker's hot spots and how your specific smoker behaves in cold or wind.</p>

<h2>Make it effortless</h2>
<p>The best log is the one you will actually keep. That is exactly why we built the <a href="/log/">Pitmaster Log cook log</a>: it runs in your browser on any device, lets you log multiple meats and probe readings over time, plots the temperature curve, and saves everything on your device. No account, no upload, and you can export your whole history to CSV anytime, your data is yours.</p>

<h2>The payoff</h2>
<p>After three or four logged cooks, the patterns jump out: the wrap point that gave you the best bark, the pit temp that fit your schedule, the wood your family liked. You stop guessing and start repeating. That consistency, not luck, is what separates someone who "sometimes nails it" from someone you trust with the holiday brisket.</p>
`,
    faqs: [
      { q: "What should I write down when smoking meat?", a: "Record the cut and raw weight, pit temperature, wood, prep (rub or dry brine), whether and when you wrapped, the timeline, finish temperature, rest, and an honest verdict with one change for next time." },
      { q: "Does keeping a BBQ log actually help?", a: "Yes. Barbecue has many variables over a long cook, and memory loses the details. A log lets you repeat your best results and pinpoint what to adjust, which is the fastest way to improve." },
      { q: "Is there a free BBQ cook log app?", a: "Yes, the Pitmaster Log cook log is free, runs in any browser, logs multiple meats and probe readings, charts the temperature curve, stores data on your device, and exports to CSV." },
    ],
  },

  {
    slug: "how-to-smoke-ribs",
    title: "How to Smoke Ribs: Baby Backs, Spare Ribs, the 3-2-1 Method, and When They're Done",
    description:
      "A complete guide to smoking pork ribs: the difference between baby back and spare ribs, accurate cook times at 225-275°F, the 3-2-1 and 2-2-1 methods explained, and every doneness test a pitmaster uses.",
    updated: "2026-06-14",
    readMins: 8,
    tool: "smoke-time",
    excerpt:
      "Baby backs need about 5 hours at 225°F; spare ribs take 6-7 hours. The 3-2-1 method works for spare ribs, but use 2-2-1 for baby backs or they overcook.",
    answer:
      "Smoke spare ribs or St. Louis-cut ribs at 225-250°F for 6-7 hours, using the 3-2-1 method (3 hours unwrapped, 2 hours wrapped, 1 hour sauced). Baby back ribs are smaller and leaner, so use 2-2-1 at the same temps or they go mushy. Ribs are done when a toothpick slides through with no resistance, the rack bends into a deep U-shape, and the meat has pulled back roughly 1/4 inch from the bone tips. The USDA safe minimum for pork is 145°F, but BBQ ribs are cooked to 195-203°F for tenderness. Remove the membrane from the bone side before seasoning.",
    body: `
<p>Ribs are the most-smoked cut in American backyard BBQ, and also the one with the most confusion around it. Baby backs versus spare ribs, the 3-2-1 method versus just "go by feel," fall-off-the-bone versus bite-through, too much smoke versus not enough. This guide cuts through all of it with accurate times, verified temperatures, and the doneness tests that actually work.</p>

<h2>Baby back vs. spare ribs vs. St. Louis cut: what you are buying</h2>
<p>These are three different cuts from the same animal, and they cook differently enough that a recipe for one will not translate cleanly to the others.</p>

<table>
<thead>
  <tr>
    <th>Cut</th>
    <th>Where it comes from</th>
    <th>Rack weight</th>
    <th>Bone length</th>
    <th>Fat &amp; flavor</th>
    <th>Best method</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Baby back ribs</strong></td>
    <td>Upper loin, where rib meets spine</td>
    <td>1.5 to 2 lbs</td>
    <td>3 to 6 inches, curved</td>
    <td>Leaner, tender meat on top of bones</td>
    <td>2-2-1 at 225-250°F</td>
  </tr>
  <tr>
    <td><strong>Spare ribs</strong></td>
    <td>Lower belly side of the rib cage</td>
    <td>~3 lbs</td>
    <td>6 to 8+ inches, flatter</td>
    <td>More fat, more meat between bones, bolder flavor</td>
    <td>3-2-1 at 225-250°F</td>
  </tr>
  <tr>
    <td><strong>St. Louis cut</strong></td>
    <td>Spare ribs trimmed to a rectangle (sternum, tips, and flap removed)</td>
    <td>2.5 to 3 lbs</td>
    <td>Even, 5 to 6 inches</td>
    <td>Same as spare, but uniform for even cooking</td>
    <td>3-2-1 at 225-250°F</td>
  </tr>
</tbody>
</table>

<p><strong>The quick take:</strong> baby backs are smaller, leaner, and more expensive per pound. Spare ribs and St. Louis cut have more fat and connective tissue, which means more flavor and more margin for error. St. Louis is just a squared-off spare rib that cooks more evenly. If you are new to ribs, St. Louis cut is the most forgiving.</p>

<h2>Before you cook: remove the membrane</h2>
<p>On the bone side of every rack of ribs is a thin, papery membrane called the peritoneum (sometimes called the silver skin). It is made mostly of elastin, which does not break down during cooking the way collagen does. Leave it on and it turns tough and gummy and acts as a barrier against your rub and smoke.</p>
<p><strong>How to remove it:</strong> flip the rack bone-side up. Slide a butter knife or your fingertip under the membrane at one end to loosen a flap, grab it with a paper towel for grip, and pull it off in one slow, steady pull. It usually comes off in one piece. If the membrane has already been removed at the store, the bone side will look slightly rough and porous rather than shiny.</p>

<h2>Seasoning and prep</h2>
<p>Ribs do not need a complicated rub. Salt, pepper, paprika, garlic powder, and a little brown sugar is a reliable baseline that suits any wood. For a cleaner, competition-style bark, skip the sugar and go salt-heavy with a dry brine the night before. See the <a href="/guides/dry-brine-guide/">dry brine guide</a> for exact percentages. Apply the rub at least 30 minutes before the cook, or up to overnight.</p>

<h2>What wood to use for ribs</h2>
<p>Pork is a medium-flavored meat that suits a wide range of woods. The most reliable choices:</p>
<ul>
  <li><strong>Hickory:</strong> the traditional pick. Savory, bacon-like, strong. The workhorse of Southern BBQ rib culture.</li>
  <li><strong>Apple:</strong> mild, sweet, and fruity. Softens hickory when blended. Good on its own for a subtler smoke.</li>
  <li><strong>Cherry:</strong> slightly sweet, and it adds a deep reddish-brown mahogany color to the bark. Competition cooks often blend cherry with hickory for both color and depth.</li>
  <li><strong>Pecan:</strong> the milder cousin of hickory. Rich and nutty. A good middle ground if pure hickory is too aggressive for your taste.</li>
</ul>
<p>A common competition blend is hickory plus cherry, which gives you the savory backbone with color and a touch of sweetness. If you are on a pellet grill, a competition blend pellet achieves the same effect. Use the <a href="/tools/wood-pairing/">Wood Pairing Finder</a> to explore other options.</p>

<h2>Pit temperature and smoke times</h2>
<p>Ribs do well anywhere in the 225-275°F range. Lower temps give more time for smoke penetration and bark development. Higher temps finish faster with very similar results. Pick the temperature that fits your schedule, not the one that sounds most "authentic."</p>

<table>
<thead>
  <tr>
    <th>Cut</th>
    <th>225°F</th>
    <th>250°F</th>
    <th>275°F</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Baby back ribs</td>
    <td>5 to 6 hours</td>
    <td>4 to 5 hours</td>
    <td>3 to 4 hours</td>
  </tr>
  <tr>
    <td>Spare ribs (full slab)</td>
    <td>6 to 7 hours</td>
    <td>5 to 6 hours</td>
    <td>5 hours</td>
  </tr>
  <tr>
    <td>St. Louis cut</td>
    <td>6 to 7 hours</td>
    <td>5 to 6 hours</td>
    <td>4 to 5 hours</td>
  </tr>
</tbody>
</table>

<p>These are planning windows, not promises. Rack size and your specific cooker will vary the times. Use the <a href="/tools/smoke-time/">Smoke Time Calculator</a> to build a start-time plan from your target serving window. Treat the times above as a range and cook to doneness, not the clock.</p>

<h2>The 3-2-1 method (and why it is adjusted for baby backs)</h2>
<p>The 3-2-1 method is the most widely used structured timeline for smoking ribs. It breaks the cook into three phases at 225-250°F:</p>
<ol>
  <li><strong>3 hours unwrapped:</strong> smoke penetrates, bark begins to form, color develops.</li>
  <li><strong>2 hours wrapped:</strong> wrap the rack tightly in heavy-duty aluminum foil with a small splash of liquid (apple juice, apple cider vinegar, beer, or melted butter work well). The wrap traps steam, braises the meat slightly, and pushes it through the collagen-conversion zone faster.</li>
  <li><strong>1 hour unwrapped:</strong> remove from foil, apply sauce if desired, and firm the bark back up.</li>
</ol>

<p><strong>But do not use 3-2-1 on baby back ribs.</strong> Baby backs are leaner and lighter than spare ribs. Three hours of smoke plus two hours in a steam-braising wrap will overcook them and produce a mushy, fall-apart result. The correct method for baby backs is <strong>2-2-1</strong>: two hours unwrapped, two hours wrapped, one hour to finish. Some cooks go 3-1-1 on baby backs to get more bark. Both are correct; which you use depends on how you like the texture.</p>

<table>
<thead>
  <tr>
    <th>Method</th>
    <th>Best for</th>
    <th>Total time at 225°F</th>
    <th>Result</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>3-2-1</td>
    <td>Spare ribs, St. Louis cut</td>
    <td>~6 hours</td>
    <td>Very tender, slight pull-back, moist</td>
  </tr>
  <tr>
    <td>2-2-1</td>
    <td>Baby back ribs</td>
    <td>~5 hours</td>
    <td>Tender with more bite, better bark</td>
  </tr>
  <tr>
    <td>No wrap ("naked")</td>
    <td>Any cut, if time allows</td>
    <td>Longer by 1-2 hours</td>
    <td>Thickest bark, slightly firmer texture, more smoke ring</td>
  </tr>
</tbody>
</table>

<p>You do not have to wrap at all. Competition cooks who want a thick, crunchy bark often smoke naked the whole way through. It takes longer and the result is slightly firmer, which is a feature, not a defect. If bark matters more to you than maximum tenderness, skip the foil.</p>

<h2>How to tell when ribs are done</h2>
<p>Ribs do not have a single "done" temperature the way a brisket does. You use a combination of feel tests, and experienced cooks use at least two in agreement before pulling the rack.</p>

<h3>Safe minimum vs. BBQ target</h3>
<p>The USDA safe minimum for whole cuts of pork (including ribs) is <strong>145°F</strong> with a 3-minute rest (source: USDA Food Safety and Inspection Service). A rack of ribs will hit 145°F well before they are texturally ready. BBQ ribs are cooked to <strong>195-203°F</strong>, well past safe, so the collagen and connective tissue convert to gelatin and the meat becomes tender. Safe is the floor; 195-203°F is the texture goal. Use the <a href="/tools/doneness-temps/">doneness chart</a> for reference on any cut.</p>

<h3>The four doneness tests</h3>
<ul>
  <li><strong>Toothpick test (most reliable):</strong> Insert a toothpick or the tip of an instant-read thermometer into the meat between two bones. If it slides in with almost no resistance, like going into warm butter, the ribs are done. Resistance means more time.</li>
  <li><strong>Bend test:</strong> Pick up the rack with tongs at the center. Bounce it gently. Done ribs will bend into a deep U-shape and the surface will show a slight crack in the bark. A stiff rack that barely flexes needs more time.</li>
  <li><strong>Bone pullback:</strong> Look at the bone tips. When the meat has pulled back and exposed roughly 1/4 inch of clean bone at the ends, that is a good sign the rack is approaching done. Note that some ribs in the store have had the membrane scored, which causes pullback earlier, so use this as one signal, not the only one.</li>
  <li><strong>Bone twist test:</strong> Grip an exposed bone tip from the center of the rack and twist. If the bone rotates and starts to pull away from the meat cleanly, the ribs are done or very close.</li>
</ul>
<p>Do not rely on any single test. The combination of a toothpick that slides clean plus a rack that bends and bounces is the most reliable confirmation. Log the temperature when those tests pass, in the <a href="/log/">cook log</a>, and your second rack will be even easier to judge.</p>

<h2>"Fall-off-the-bone" vs. bite-through: which is right?</h2>
<p>This is a taste preference, not a food safety question. "Fall-off-the-bone" ribs are simply cooked longer, past the 195-203°F window. They are not unsafe, just softer. Most competition BBQ judges actually mark down ribs that fall apart because the standard is meat that comes clean off the bone with a single clean bite and leaves a neat arc. Neither style is wrong. If your family loves fall-off-the-bone ribs, extend the wrapped phase by 30-60 minutes. If you want the clean competition bite, pull them as soon as two doneness tests agree.</p>

<h2>A simple cook plan, start to finish</h2>
<ol>
  <li>The day before: remove the membrane, apply a dry brine or rub, refrigerate uncovered overnight.</li>
  <li>Two hours before cooking: pull the rack from the fridge and let it come closer to room temperature while you build your fire.</li>
  <li>Set your pit to 225-250°F and add your wood (hickory, cherry, apple, or a blend).</li>
  <li>Place ribs bone-side down. Insert a leave-in probe in the thickest meaty section if you want to track temperature.</li>
  <li>Smoke unwrapped for 3 hours (spare/St. Louis) or 2 hours (baby backs). Do not open the lid constantly.</li>
  <li>Wrap tightly in foil with a small splash of liquid. Return bone-side down.</li>
  <li>After the wrap phase, unwrap, sauce if desired, and return to the smoker for the final hour to set the bark and glaze.</li>
  <li>Start testing doneness about 30 minutes before the expected finish time. Pull when two tests agree.</li>
  <li>Rest for 10-15 minutes before cutting between the bones to serve.</li>
</ol>

<p>Log everything: your rub, wood, wrap time and liquid, finish temp when doneness tests passed, and your verdict. Ribs are one of the best cooks to iterate because you can run two racks side by side with slight variations and compare directly. Record it all in your <a href="/log/">cook log</a>.</p>

<p class="text-sm text-muted"><em>Safe temperature information is based on USDA FSIS guidance. The USDA safe minimum for whole cuts of pork is 145°F with a 3-minute rest. BBQ probe-tender targets listed above are for texture, not safety. Always verify doneness with a calibrated thermometer.</em></p>
`,
    faqs: [
      {
        q: "How long does it take to smoke baby back ribs?",
        a: "At 225°F, baby back ribs take about 5 to 6 hours. At 250°F, plan on 4 to 5 hours. Use the 2-2-1 method (2 hours unwrapped, 2 wrapped, 1 to finish) rather than 3-2-1 to avoid overcooking the leaner meat.",
      },
      {
        q: "How long does it take to smoke spare ribs or St. Louis cut ribs?",
        a: "At 225°F, spare ribs and St. Louis cut ribs take 6 to 7 hours. At 250°F, about 5 to 6 hours. The 3-2-1 method (3 hours unwrapped, 2 wrapped, 1 to finish) is the standard timeline for these larger, meatier cuts.",
      },
      {
        q: "What is the 3-2-1 method for ribs?",
        a: "The 3-2-1 method smokes ribs in three phases at 225-250°F: 3 hours unwrapped to build smoke and bark, 2 hours wrapped in foil with a splash of liquid to braise and push through the collagen conversion, and 1 final hour unwrapped to firm the bark and set any sauce. It is designed for spare ribs and St. Louis cut. Baby back ribs use a shortened 2-2-1 version.",
      },
      {
        q: "What temperature should ribs be when done?",
        a: "The USDA safe minimum for pork is 145°F with a 3-minute rest. BBQ ribs are cooked well past that, to about 195-203°F, for tenderness, as the collagen converts to gelatin in that range. However, most pitmasters rely on feel tests (toothpick, bend, bone twist) rather than a single temperature number.",
      },
      {
        q: "Should you remove the membrane from ribs before smoking?",
        a: "Yes. The membrane on the bone side is made of elastin, which does not break down during cooking. Leaving it on produces a tough, gummy layer and blocks rub and smoke from penetrating the meat. Loosen a corner with a knife, grab it with a dry paper towel, and pull it off in one piece.",
      },
      {
        q: "What is the difference between baby back ribs and spare ribs?",
        a: "Baby back ribs come from the upper loin near the spine, weigh about 1.5 to 2 lbs per rack, and are leaner with meat sitting on top of the bones. Spare ribs come from the belly side, weigh about 3 lbs, and have more fat and meat between the bones with bolder flavor. St. Louis cut is spare ribs trimmed into a neat rectangle for more even cooking.",
      },
      {
        q: "What is the best wood for smoking ribs?",
        a: "Hickory is the traditional pick for pork ribs: savory and strong. Apple wood adds mild sweetness. Cherry adds sweetness plus a deep reddish-brown color to the bark. A blend of hickory and cherry is a popular competition choice. Pecan is a milder alternative to hickory if you prefer a subtler smoke.",
      },
    ],
  },

  {
    slug: "how-to-smoke-a-pork-butt",
    title: "How to Smoke a Pork Butt: Times, Temps, the Stall, and Pulled Pork That Actually Shreds",
    description:
      "A complete guide to smoking pork butt for pulled pork: accurate smoke times at 225-275°F, how to handle the stall, when it is truly done, how long to rest it, and how much to buy.",
    updated: "2026-06-14",
    readMins: 9,
    tool: "smoke-time",
    excerpt:
      "Budget about 1.5 hours per pound at 250°F, but cook to probe-tender around 200-205°F, not the clock. Plan for the stall and rest it at least an hour before you pull.",
    answer:
      "Smoke a pork butt (Boston butt) at 225-275°F until probe-tender, typically around 200-205°F internal. At 250°F, budget about 1.5 hours per pound. A 8-pound butt often takes 10-14 hours. Expect a stall at 150-170°F where the temperature plateaus for hours; wrap in foil or butcher paper to push through it. Rest wrapped in a cooler for at least 1-2 hours before pulling. The USDA safe minimum for pork is 145°F, but pulled pork is cooked far past that for the tenderness needed to shred.",
    body: `
<p>Pork butt is the single most forgiving cut in barbecue. It has enough fat and collagen that it practically tells you when it is done, it holds in a cooler for hours without suffering, and it turns one cook into multiple meals. It is also the cut we recommend in the <a href="/guides/first-smoke-beginners-guide/">beginner's guide</a> for a reason: cook one correctly and you will understand how low-and-slow BBQ works from the inside out. Here is how to do it right.</p>

<h2>Pork butt vs. pork shoulder: what to buy</h2>
<p>These names get used interchangeably in recipes and at the meat counter, but they are two different cuts from the same front leg of the pig, and they are not equal for pulled pork.</p>

<table>
<thead>
  <tr>
    <th>Cut</th>
    <th>Also called</th>
    <th>Where it sits</th>
    <th>Fat content</th>
    <th>Best for</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Pork butt</strong></td>
    <td>Boston butt</td>
    <td>Upper front leg, near the blade</td>
    <td>High, well-marbled throughout</td>
    <td>Pulled pork, smoking</td>
  </tr>
  <tr>
    <td><strong>Pork shoulder</strong></td>
    <td>Picnic shoulder, picnic roast</td>
    <td>Lower front leg, below the butt</td>
    <td>Leaner, more connective tissue, skin on</td>
    <td>Roasting, braising</td>
  </tr>
</tbody>
</table>

<p><strong>Buy the butt.</strong> The fat marbling in a Boston butt gives pulled pork its richness and makes it very hard to dry out on the smoker. The picnic shoulder is leaner, has skin on one side, and is less forgiving. When a recipe or pitmaster says "pork shoulder" for pulled pork, they almost always mean the Boston butt.</p>
<p>Butts are sold bone-in or boneless. Bone-in is the traditional choice and the bone makes a useful handle when doing the pull test later. Boneless is easier to tie, cooks slightly more evenly, and yields a few more ounces of usable meat per pound. Either works.</p>

<h2>How much to buy: yield and planning</h2>
<p>Raw pork butt loses roughly <strong>35-50% of its weight</strong> during a long smoke. Moisture evaporates, fat renders out, and you trim away big fat pockets before pulling. The conservative planning number used by most cooks is <strong>50% yield</strong>, meaning you get about half the raw weight back as finished pulled pork. That gives you:</p>

<table>
<thead>
  <tr>
    <th>Raw weight</th>
    <th>Finished pulled pork (approx.)</th>
    <th>Feeds (as main, with sides)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>5 lbs</td>
    <td>~2.5 lbs</td>
    <td>5-6 people</td>
  </tr>
  <tr>
    <td>8 lbs</td>
    <td>~4 lbs</td>
    <td>8-10 people</td>
  </tr>
  <tr>
    <td>10 lbs</td>
    <td>~5 lbs</td>
    <td>10-12 people</td>
  </tr>
</tbody>
</table>

<p>The quick rule: <strong>buy 1 pound of raw pork butt per person</strong> you plan to feed as a main. It gives you a comfortable margin. Use the <a href="/tools/meat-per-person/">Meat Per Person Calculator</a> for a more precise number adjusted for crowd size, kids, and how heavy the sides are.</p>

<h2>Prep: trim, rub, and optional injection</h2>

<h3>Trimming</h3>
<p>Pork butt usually arrives with a thick fat cap on one side, up to an inch or more. Trim it down to about 1/4 inch. You want some fat for basting and bark development, but a thick cap prevents rub and smoke from reaching the meat underneath. Trim away any hard, white fat chunks on the sides, they will not render and will just sit there.</p>

<h3>Rub</h3>
<p>A basic rub of salt, black pepper, paprika, garlic powder, and a little brown sugar is all you need. Salt is the most important part. For the best bark and seasoning depth, apply the salt component the night before as a dry brine, then add the rest of the rub the morning of the cook. See the <a href="/guides/dry-brine-guide/">dry brine guide</a> for exact salt amounts by weight. Apply the rub generously and press it into the surface; do not just dust it on.</p>

<h3>Injection (optional but worth knowing)</h3>
<p>Injecting is not required for great pulled pork, especially bone-in butts that have enough fat to stay moist. But if you want an edge on moisture and flavor, a simple injection of apple juice, melted butter, and Worcestershire sauce works well. Inject in a grid pattern, about an inch apart, in the thickest sections. Do it right before the cook or up to 12 hours ahead (refrigerate if ahead). If you skip the injection, you will still make excellent pulled pork.</p>

<h2>Wood for pork butt</h2>
<p>Pork butt is on the smoker for a long time, so wood choice matters. Strong woods like mesquite can become harsh over a 12-hour cook. The proven picks for pork:</p>
<ul>
  <li><strong>Hickory:</strong> the classic American BBQ choice for pork. Savory, bacon-like. Use it in moderation on a long cook; a few chunks or a couple of hours of heavy hickory smoke is usually enough.</li>
  <li><strong>Apple:</strong> mild and sweet. Works beautifully on pork and will not go bitter over a long cook. A safe choice for those who do not want an aggressive smoke flavor.</li>
  <li><strong>Cherry:</strong> similar sweetness to apple with the added bonus of giving the bark a deep reddish-brown color.</li>
  <li><strong>Pecan:</strong> a milder, nuttier cousin of hickory. Good on long cooks where you want savory depth without the intensity of full hickory.</li>
</ul>
<p>A popular approach: start with hickory or pecan for the first few hours, then switch to apple or cherry for the rest of the cook. Use the <a href="/tools/wood-pairing/">Wood Pairing Finder</a> to explore other options.</p>

<h2>Pit temperature and smoke times</h2>
<p>Pork butt is one of the most flexible cuts for pit temperature. It does well anywhere from 225°F to 275°F, and some cooks run hot-and-fast at 300-325°F for a faster result. The low-and-slow range gives more bark time and a longer smoke ring, but 250-275°F is what most experienced cooks use because it balances time and results without babysitting all night.</p>

<table>
<thead>
  <tr>
    <th>Pit temp</th>
    <th>Per pound estimate</th>
    <th>8 lb butt</th>
    <th>10 lb butt</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>225°F</td>
    <td>~2 hrs/lb</td>
    <td>14-16 hours</td>
    <td>16-20 hours</td>
  </tr>
  <tr>
    <td>250°F</td>
    <td>~1.5 hrs/lb</td>
    <td>10-14 hours</td>
    <td>13-16 hours</td>
  </tr>
  <tr>
    <td>275°F</td>
    <td>~1-1.25 hrs/lb</td>
    <td>8-10 hours</td>
    <td>10-13 hours</td>
  </tr>
</tbody>
</table>

<p>These are planning windows, not promises. Two identical butts can finish an hour or two apart. Use the <a href="/tools/smoke-time/">Smoke Time Calculator</a> to work backward from your serving time, then start earlier than the estimate tells you. A finished pork butt that rests an extra hour is no problem; one that is not ready at serving time is a disaster.</p>

<h2>The stall: what it is and how to handle it</h2>
<p>Somewhere around <strong>150-170°F internal temperature</strong>, your pork butt's temperature will stall and barely move for hours. This is the same evaporative cooling phenomenon as the <a href="/guides/the-brisket-stall/">brisket stall</a>: moisture pushed to the meat's surface evaporates and cools it at roughly the same rate the smoker is heating it. The plateau can last two to four hours on a large butt. Nothing is wrong. It is part of the process.</p>
<p>Your two options:</p>
<ul>
  <li><strong>Wait it out.</strong> Do nothing. You get maximum bark development as the surface keeps drying. This is the move when you started early and have time.</li>
  <li><strong>Wrap it.</strong> Once the bark looks set and has a deep mahogany color (usually around 160-170°F), wrap tightly in heavy-duty foil or butcher paper. Foil pushes through the stall fastest and retains the most moisture. Butcher paper moves things along while letting the bark breathe more. Wrapping can cut an hour or more off the cook.</li>
</ul>
<p>There is no wrong choice. Bark lovers wrap later or not at all. Cooks on a schedule wrap early.</p>

<h2>How to tell when a pork butt is done</h2>
<p>The USDA safe minimum internal temperature for whole cuts of pork is <strong>145°F with a 3-minute rest</strong> (source: USDA Food Safety and Inspection Service). A pork butt will hit 145°F hours before it is ready to pull. Pulled pork needs to reach <strong>195-205°F internal temperature</strong>, well past safe, so the collagen converts to gelatin and the muscle fibers loosen enough to shred. Do not stop at 145°F expecting to pull the pork; it will not cooperate.</p>
<p>But even within that 195-205°F range, temperature alone is not the full story. The probe-tender test is the most reliable confirmation:</p>
<ul>
  <li><strong>Probe-tender test:</strong> Insert a temperature probe or thin skewer into the thickest part of the meat. It should slide in with almost no resistance, like pushing into warm peanut butter or softened butter. If you feel any tightness or the probe is working to get through, give it more time.</li>
  <li><strong>Bone wiggle (bone-in only):</strong> On a bone-in butt, grab the exposed bone and wiggle or rotate it. When the pork is done, the bone will move freely and start to pull away from the meat cleanly. This is one of the most reliable and satisfying doneness signals in all of BBQ.</li>
  <li><strong>Temperature as a starting point:</strong> Start probing for tenderness at 195°F. Most butts hit their sweet spot between 200-203°F. Stop before 205°F; past that the meat can turn mushy.</li>
</ul>
<p>Check the <a href="/tools/doneness-temps/">doneness temperature chart</a> any time you need to confirm the safe minimum versus the BBQ target for any cut.</p>

<h2>The rest: do not skip it</h2>
<p>Resting is not optional. A long rest is one of the most impactful steps in the whole cook, and it is the one most beginners skip when they are hungry and impatient.</p>
<p>When meat cooks, muscle fibers contract and squeeze moisture toward the surface. During the rest, those fibers relax and the moisture redistributes throughout the meat. Pull a pork butt straight off the smoker with no rest and you will notice the meat is drier and tighter. Rest it properly and it shreds more easily and tastes noticeably juicier.</p>
<p><strong>Minimum rest:</strong> 30 minutes, lightly tented or wrapped.<br/>
<strong>Recommended rest:</strong> 1-2 hours, wrapped in foil, wrapped again in a towel, placed in a dry empty cooler with the lid closed. This "faux cambro" holds the internal temperature safely above 140°F for 2-4 hours with no problem. Many experienced cooks aim for a 2-hour rest as the standard.</p>
<p>A pork butt that finishes two hours early is a gift, not a crisis. Hold it in the cooler and serve it on schedule.</p>

<h2>Pulling the pork</h2>
<p>Once rested, set the butt in a large pan and start pulling. A well-cooked butt will pull apart easily with two forks, a pair of bear claws, or your hands (let it cool a few minutes first). As you pull:</p>
<ul>
  <li>Remove and discard large fat pockets and any connective tissue that did not fully render.</li>
  <li>Keep the dark, crunchy exterior pieces (the bark) and mix them through the pulled pork. That is where much of the flavor lives.</li>
  <li>Add a small splash of the juices from the pan or wrap back into the pulled pork if it looks dry.</li>
  <li>If you sauce it, toss lightly. The bark will soften quickly if it sits in sauce, so sauce at serving time, not during the pull.</li>
</ul>

<h2>A simple start-to-finish game plan</h2>
<ol>
  <li><strong>The night before:</strong> trim the fat cap to 1/4 inch, apply salt as a dry brine, refrigerate uncovered.</li>
  <li><strong>Day of the cook:</strong> apply your rub, inject if desired, let it rest at room temperature for about an hour while you build your fire.</li>
  <li>Set the pit to 250°F and add your wood.</li>
  <li>Place the butt fat-side up or down (both work; fat-side up bastes the meat as the fat renders, fat-side down protects the meat from direct heat). Insert a leave-in probe in the thickest section, away from the bone.</li>
  <li>Smoke unwrapped until the bark looks set and deep, usually 160-170°F internal.</li>
  <li>Wrap in foil or butcher paper and return to the smoker.</li>
  <li>Start testing for probe-tenderness at 195°F. Pull when the probe slides in with no resistance, usually 200-203°F.</li>
  <li>Rest for at least 1-2 hours in a cooler before pulling.</li>
  <li>Pull, mix in the bark, and serve.</li>
</ol>

<p>Log the whole cook in your <a href="/log/">cook log</a>: raw weight, pit temp, wood, wrap time and what you wrapped in, finish temperature, rest time, and your verdict. The second pork butt is always better than the first when you have a record of exactly what you did.</p>

<p class="text-sm text-muted"><em>Safe temperature information is based on USDA FSIS guidance. The USDA safe minimum for whole cuts of pork is 145°F with a 3-minute rest. BBQ pulled pork targets of 195-205°F are for texture, not safety. Always verify doneness with a calibrated thermometer. Source: USDA Food Safety and Inspection Service, fsis.usda.gov.</em></p>
`,
    faqs: [
      {
        q: "How long does it take to smoke a pork butt?",
        a: "At 250°F, budget about 1.5 hours per pound. An 8-pound Boston butt typically takes 10-14 hours. At 225°F, plan closer to 2 hours per pound. Cook to probe-tender (around 200-203°F internal), not the clock, and always start earlier than your estimate to allow for the stall and a proper rest.",
      },
      {
        q: "What internal temperature should pulled pork reach?",
        a: "The USDA safe minimum for pork is 145°F with a 3-minute rest, but pulled pork is cooked to 195-205°F so the collagen converts and the meat shreds. Start checking for probe-tenderness at 195°F and pull when a probe slides in with almost no resistance. Do not push past 205°F or the meat can turn mushy.",
      },
      {
        q: "What is the difference between pork butt and pork shoulder?",
        a: "Both come from the front leg of the pig. Pork butt (Boston butt) is the upper portion and is more heavily marbled with fat, making it the better choice for pulled pork. Pork shoulder (picnic shoulder) is the lower, leaner portion that is better suited to roasting. When a BBQ recipe calls for pork shoulder for pulled pork, it almost always means the Boston butt.",
      },
      {
        q: "Should I wrap a pork butt when smoking?",
        a: "Wrapping is optional but helpful for timing. Once the bark is set and deep-colored (around 160-170°F internal), wrapping in foil pushes the meat through the stall faster and retains more moisture. Butcher paper does the same with slightly more bark preservation. If you have time and want maximum bark, smoke it unwrapped the whole way through.",
      },
      {
        q: "How long should I rest a pork butt before pulling?",
        a: "At minimum 30 minutes, but 1-2 hours is the standard recommendation. Wrap the finished butt in foil, wrap it again in a towel, and place it in a dry empty cooler with the lid closed. It will hold safely and improve in texture for 2-4 hours this way, as long as the internal temperature stays above 140°F.",
      },
      {
        q: "How much pork butt do I need per person?",
        a: "Plan about 1 pound of raw pork butt per person as the main dish. Pork butt yields roughly 50% after cooking and pulling, so 1 pound raw gives you about half a pound of finished pulled pork per person, which is a solid serving with sides. Use the Meat Per Person Calculator for precise amounts based on your crowd.",
      },
      {
        q: "What wood is best for smoking pork butt?",
        a: "Hickory is the traditional choice: savory and bold. Apple and cherry add sweetness and color without overpowering the meat on a long cook. Pecan is a milder, nuttier alternative to hickory. A common approach is to use hickory or pecan for the first few hours for depth, then switch to apple or cherry for the rest of the cook.",
      },
    ],
  },

  {
    slug: "how-to-smoke-a-whole-chicken",
    title: "How to Smoke a Whole Chicken: Temperature, Times, and How to Fix the Skin",
    description:
      "A complete guide to smoking whole chicken: why you must smoke it hotter than other cuts, how to get skin that is not rubbery, spatchcock vs. whole bird, accurate cook times, and where to probe for doneness.",
    updated: "2026-06-14",
    readMins: 8,
    tool: "doneness-temps",
    excerpt:
      "Smoke chicken at 300-325°F, not 225°F. Lower temps cause rubbery skin. Dry brine uncovered overnight, skip the water pan, and pull when the thigh hits 165°F.",
    answer:
      "Smoke a whole chicken at 300-325°F, not the low 225-250°F used for pork and brisket. Lower pit temps cause the fat under the skin to stay soft and rubbery rather than rendering out. A 4-5 lb bird takes about 1.5-2 hours at 300°F. The USDA safe minimum for all poultry is 165°F, measured in the thickest part of the thigh away from the bone. Dry brine uncovered in the fridge overnight to dry the skin before it hits the smoker, and skip the water pan.",
    body: `
<p>Smoked chicken is the cut that trips up more pitmasters than any other, not because it is complicated, but because almost every BBQ instinct you have built up from cooking brisket and pork butt is wrong for chicken. Low and slow at 225°F makes chicken skin rubbery. A water pan makes it worse. Wrapping does not help. Chicken wants heat, a dry environment, and a quick cook. Once you understand why, it all makes sense.</p>

<h2>The one rule that changes everything: chicken needs a hotter pit</h2>
<p>Chicken skin has a layer of fat directly underneath it. For the skin to turn crispy and golden, that fat has to render out, which requires heat. At 225-250°F, the fat never fully renders. The skin stays soft and turns into a pale, rubbery barrier. At 300-325°F, the fat renders properly, the skin dries and crisps, and the bird still gets plenty of smoke.</p>
<p>This is why the <a href="/guides/smoker-temperature-guide/">smoker temperature guide</a> lists poultry at 275-325°F while everything else runs at 225-275°F. It is not a typo. Chicken is the exception to low-and-slow, and understanding it makes you a better all-around pitmaster.</p>

<h2>Whole bird vs. spatchcock: choose your method</h2>
<p>You have two good options for how the bird goes on the smoker:</p>

<table>
<thead>
  <tr>
    <th>Method</th>
    <th>What it is</th>
    <th>Cook time (4-5 lb bird)</th>
    <th>Best for</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Whole bird</strong></td>
    <td>Bird goes on as-is, upright or breast-up</td>
    <td>1.5-2.5 hours at 300-325°F</td>
    <td>Presentation, simplicity, easy to carve</td>
  </tr>
  <tr>
    <td><strong>Spatchcock (butterfly)</strong></td>
    <td>Backbone removed, bird flattened</td>
    <td>1.25-1.75 hours at 300-325°F</td>
    <td>Faster cook, more even doneness, more skin exposed for crispiness</td>
  </tr>
</tbody>
</table>

<p><strong>Spatchcock is the better technique</strong> for the smoker and is worth learning. Removing the backbone and flattening the bird exposes more surface area to heat and smoke, reduces the height difference between the breast and thigh, and cuts roughly 25-30% off the cook time. The breast and thigh finish closer together in temperature, so you are less likely to overcook the white meat while waiting for the dark meat to catch up.</p>

<h3>How to spatchcock a chicken</h3>
<ol>
  <li>Place the bird breast-side down on a cutting board.</li>
  <li>Use sharp kitchen shears to cut along both sides of the backbone and remove it. (Save it for stock.)</li>
  <li>Flip the bird breast-side up and press firmly down on the breastbone until it cracks flat. The bird should now lie flat.</li>
  <li>Tuck the wingtips behind the breast to keep them from burning.</li>
</ol>
<p>That is the whole process. It takes about two minutes once you have done it once.</p>

<h2>Prep: the dry brine is not optional</h2>
<p>The single biggest thing you can do for smoked chicken skin is dry brine it and leave it uncovered in the fridge overnight. Here is what happens: salt draws moisture out of the skin to the surface. That moisture dissolves the salt into a brine, which is then reabsorbed. The skin itself dries out and starts to look a little papery. That is exactly what you want. Dry skin renders and crisps. Wet skin steams and goes rubbery.</p>
<ul>
  <li>Apply about <strong>1 teaspoon of kosher salt per pound</strong> of bird, or use the weight-based method from the <a href="/guides/dry-brine-guide/">dry brine guide</a> for precision.</li>
  <li>Season under the skin as well, especially over the breast and thighs, for flavor all the way through the meat.</li>
  <li>Set the bird on a rack over a sheet pan and refrigerate <strong>uncovered</strong> for 4-24 hours. Overnight is the sweet spot.</li>
  <li>When you pull it from the fridge, the skin should look dry and slightly tightened. Do not pat it dry or rinse it. Leave it as-is.</li>
</ul>
<p>If you are short on time, even 30-60 minutes of uncovered air-drying in the fridge makes a noticeable difference over going straight from package to smoker.</p>

<h2>Rub and seasoning</h2>
<p>Keep it simple. A basic rub of black pepper, garlic powder, paprika, and onion powder over the dry-brined bird is all you need. For more color and sweetness, add a little brown sugar or smoked paprika. Apply the rub just before the bird goes on the smoker, not the night before with the salt brine.</p>
<p>A light coat of oil or softened butter over the skin helps the rub adhere and adds to the browning. Some cooks rub softened herb butter under the skin directly over the breast meat, which adds flavor and keeps the breast moist.</p>

<h2>Wood choice for chicken</h2>
<p>Chicken is a mild-flavored meat and it picks up smoke quickly. Heavy woods like hickory or mesquite can easily overpower a bird, especially at the higher pit temps chicken requires. Stick to lighter woods:</p>
<ul>
  <li><strong>Apple:</strong> mild, sweet, and fruity. The most forgiving wood for chicken. Hard to overdo.</li>
  <li><strong>Cherry:</strong> slightly sweeter than apple and gives the skin a beautiful deep reddish-brown color. Excellent on chicken.</li>
  <li><strong>Pecan:</strong> nutty and mild. Adds a subtle richness without overpowering.</li>
  <li><strong>Maple:</strong> lightly sweet, very clean-burning. A good match for poultry.</li>
</ul>
<p>If you want to use hickory, blend it heavily with apple or cherry so it does not dominate. One small chunk of hickory alongside two chunks of apple gives you depth without bitterness. Use the <a href="/tools/wood-pairing/">Wood Pairing Finder</a> to explore other options.</p>

<h2>Pit temperature and smoke times</h2>
<p>Run your pit at <strong>300-325°F</strong> for chicken. Do not use a water pan; the steam it produces is the enemy of crispy skin. At 275°F you can still get good results but need to watch the skin more carefully and may want to finish with higher heat.</p>

<table>
<thead>
  <tr>
    <th>Bird weight</th>
    <th>275°F (whole)</th>
    <th>300°F (whole)</th>
    <th>325°F (whole)</th>
    <th>300°F (spatchcock)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>3.5 lbs</td>
    <td>~1.75 hrs</td>
    <td>~1.25 hrs</td>
    <td>~1 hr</td>
    <td>~1 hr</td>
  </tr>
  <tr>
    <td>4.5 lbs</td>
    <td>~2.25 hrs</td>
    <td>~1.5-1.75 hrs</td>
    <td>~1.25 hrs</td>
    <td>~1.25 hrs</td>
  </tr>
  <tr>
    <td>5.5 lbs</td>
    <td>~2.75 hrs</td>
    <td>~2-2.25 hrs</td>
    <td>~1.5 hrs</td>
    <td>~1.5 hrs</td>
  </tr>
  <tr>
    <td>6.5 lbs</td>
    <td>~3.25 hrs</td>
    <td>~2.5 hrs</td>
    <td>~2 hrs</td>
    <td>~1.75 hrs</td>
  </tr>
</tbody>
</table>

<p>These are estimates. A leave-in probe is the only reliable way to know when a whole bird is done. Start checking temperature about 20 minutes before the low end of your estimated time. Use the <a href="/tools/smoke-time/">Smoke Time Calculator</a> to build a start time from your serving window.</p>

<h2>Where to probe and when to pull</h2>
<p>This is the most important step for both food safety and serving quality. The USDA requires all poultry to reach <strong>165°F</strong> in the thickest part of the thigh and wing, and the thickest part of the breast (source: USDA Food Safety and Inspection Service). Three spots, not one.</p>
<ul>
  <li><strong>The thigh is your primary probe point.</strong> The thigh is the densest, slowest-cooking part of the bird. If the thigh is at 165°F, the rest is done or past done. Insert the probe into the thickest part of the inner thigh, aiming toward the hip joint, and keep it away from the bone. Bone conducts heat and will give you a falsely high reading.</li>
  <li><strong>Check the breast second.</strong> The breast cooks faster than the thigh. If the thigh is at 165°F, the breast will typically be 165-175°F. That is fine. Breast meat starts losing moisture significantly above 165°F, so a well-timed cook targets pulling the moment the thigh clears 165°F.</li>
  <li><strong>Check the wing joint last.</strong> The wing joint is another dense area the USDA specifically calls out. If the thigh and breast are at 165°F, the wing joint almost always is too, but it is worth a quick check on larger birds.</li>
</ul>
<p>Use the <a href="/tools/doneness-temps/">doneness temperature chart</a> to verify the safe minimum for any cut. There is no "BBQ target" above 165°F for chicken the way there is for brisket or pork butt. For poultry, <strong>safe and done are the same number</strong>.</p>

<p>One note: chicken thighs cooked to <strong>175-185°F</strong> have a noticeably better texture than thighs pulled right at 165°F. The extra heat breaks down some of the connective tissue and makes the meat more tender and juicy. This is a texture preference, not a safety requirement. Pulling a whole bird at 165°F in the thigh is safe and correct. If you want more tender thighs and do not mind the breast being slightly drier, you can run to 175°F in the thigh.</p>

<h2>The skin problem and how to fix it</h2>
<p>Even with a hot pit, rubbery skin can still happen. Here is the full checklist for crispy skin:</p>
<ul>
  <li><strong>Dry brine uncovered overnight.</strong> This is the highest-impact step. Wet skin will never get crispy.</li>
  <li><strong>No water pan.</strong> Steam is the enemy of crispiness. Remove the water pan or do not use one.</li>
  <li><strong>No spritzing.</strong> Spritzing chicken during the cook adds moisture back to the skin. Skip it entirely.</li>
  <li><strong>Run the pit at 300-325°F.</strong> If your smoker struggles to hold that temperature, run it as hot as it will go.</li>
  <li><strong>Do not wrap the bird.</strong> Wrapping traps steam. Never wrap chicken.</li>
  <li><strong>Finish with a sear if needed.</strong> If the skin is still soft when the bird hits 165°F, move it to a screaming hot grill or cast iron skillet, skin-side down, for 60-90 seconds. The skin crisps up almost immediately.</li>
</ul>

<h2>Rest and carve</h2>
<p>Rest a whole smoked chicken for <strong>10-15 minutes</strong> before carving. This is shorter than pork or brisket because chicken has less mass and the fibers are finer. A long rest will soften the skin you worked hard to crisp, so do not overdo it. Tent loosely with foil or just leave it uncovered on a cutting board.</p>
<p>Carve by removing the legs and thighs first, then the breast. Pull the wings. The entire bird yields quickly. Leftovers hold well refrigerated for 3-4 days and work excellent in tacos, sandwiches, salads, or chicken stock.</p>

<h2>Simple start-to-finish game plan</h2>
<ol>
  <li><strong>The night before:</strong> spatchcock or leave whole, apply the salt dry brine, set on a rack uncovered in the fridge.</li>
  <li><strong>Before cooking:</strong> apply the rub and a light coat of oil or butter. Let the bird sit at room temperature for 20-30 minutes while the pit comes up to temperature.</li>
  <li>Set the pit to 300-325°F. No water pan. Add two or three chunks of apple, cherry, or pecan wood.</li>
  <li>Place the bird breast-side up (whole) or flat (spatchcock). Insert a leave-in probe into the thickest part of the thigh, avoiding bone.</li>
  <li>Do not spritz, baste, or open the lid repeatedly. Let the heat work.</li>
  <li>Start checking temperature at the low end of your estimated time. Pull when the thigh reaches 165°F. Verify the breast and wing joint.</li>
  <li>Rest 10-15 minutes, then carve.</li>
  <li>Log the bird weight, pit temp, wood, finish time, and skin quality in your <a href="/log/">cook log</a> so you can repeat it.</li>
</ol>

<p class="text-sm text-muted"><em>All poultry must reach a safe minimum internal temperature of 165°F as measured with a calibrated food thermometer in the thickest part of the thigh, the thickest part of the breast, and the wing joint. Source: USDA Food Safety and Inspection Service, fsis.usda.gov. This is not a preference; it is the safety standard. Never serve chicken below 165°F internal.</em></p>
`,
    faqs: [
      {
        q: "What temperature should I smoke a whole chicken at?",
        a: "300-325°F is the recommended pit temperature for a whole smoked chicken. Unlike brisket and pork, chicken needs higher heat so the fat under the skin renders and crisps. At 225-250°F, the skin turns rubbery and pale.",
      },
      {
        q: "How long does it take to smoke a whole chicken?",
        a: "At 300°F, a 4-5 lb whole chicken takes about 1.5-2 hours. A spatchcocked (flattened) bird of the same size takes roughly 1.25-1.75 hours. Always cook to temperature, not time: the thigh must reach 165°F internal before the bird is safe to serve.",
      },
      {
        q: "What temperature is smoked chicken done?",
        a: "All poultry is safe at 165°F internal temperature, measured in the thickest part of the thigh away from the bone, the thickest part of the breast, and the wing joint (source: USDA FSIS). Unlike beef or pork, there is no higher 'BBQ target' for chicken on a safety basis. Pull a whole bird when the thigh hits 165°F.",
      },
      {
        q: "Why is my smoked chicken skin rubbery?",
        a: "Rubbery skin is almost always caused by too low a pit temperature. At 225-250°F the fat under the skin never fully renders, leaving it soft and gummy. Fix: smoke at 300-325°F, dry brine the bird uncovered overnight in the fridge so the skin is dry going in, remove any water pan, and never spritz the bird during the cook.",
      },
      {
        q: "What is spatchcock chicken and why is it better for smoking?",
        a: "Spatchcocking means removing the backbone and pressing the bird flat. On the smoker it reduces cook time by about 25-30%, exposes more skin surface to direct heat for better crispiness, and helps the breast and thigh reach temperature at a closer time so you are less likely to overcook the white meat waiting for the dark meat.",
      },
      {
        q: "Where do you put the thermometer in a whole chicken?",
        a: "The primary probe point is the thickest part of the inner thigh, aiming toward the hip joint and away from the bone. The bone conducts heat and gives a falsely high reading. Also check the thickest part of the breast and the wing joint. The USDA requires 165°F in all three locations for a whole bird.",
      },
      {
        q: "What is the best wood for smoking chicken?",
        a: "Mild fruit woods work best: apple, cherry, and pecan are the top picks. Cherry also adds a deep reddish-brown color to the skin. Avoid heavy woods like mesquite or large amounts of hickory, which can overpower the delicate flavor of chicken. A small amount of hickory blended with apple is a good middle ground if you want a slightly more savory smoke.",
      },
    ],
  },
];

export function getArticle(slug) {
  return ARTICLES.find((a) => a.slug === slug);
}
