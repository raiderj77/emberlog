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
<p>The best log is the one you will actually keep. That is exactly why we built the <a href="/log/">EmberLog cook log</a>: it runs in your browser on any device, lets you log multiple meats and probe readings over time, plots the temperature curve, and saves everything on your device. No account, no upload, and you can export your whole history to CSV anytime, your data is yours.</p>

<h2>The payoff</h2>
<p>After three or four logged cooks, the patterns jump out: the wrap point that gave you the best bark, the pit temp that fit your schedule, the wood your family liked. You stop guessing and start repeating. That consistency, not luck, is what separates someone who "sometimes nails it" from someone you trust with the holiday brisket.</p>
`,
    faqs: [
      { q: "What should I write down when smoking meat?", a: "Record the cut and raw weight, pit temperature, wood, prep (rub or dry brine), whether and when you wrapped, the timeline, finish temperature, rest, and an honest verdict with one change for next time." },
      { q: "Does keeping a BBQ log actually help?", a: "Yes. Barbecue has many variables over a long cook, and memory loses the details. A log lets you repeat your best results and pinpoint what to adjust, which is the fastest way to improve." },
      { q: "Is there a free BBQ cook log app?", a: "Yes, the EmberLog cook log is free, runs in any browser, logs multiple meats and probe readings, charts the temperature curve, stores data on your device, and exports to CSV." },
    ],
  },
];

export function getArticle(slug) {
  return ARTICLES.find((a) => a.slug === slug);
}
