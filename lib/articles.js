// Article content. Each article renders at /guides/[slug]/.
// To add an article, append an object here. body is HTML rendered into the Prose component.
// answer = the answer-first summary box (AEO). faqs power FAQPage structured data.

import { SITE } from "./site.js";
import { BRISKET_TIMING_ARTICLE } from "./brisket-timing-article.js";

export const ARTICLES = [
  BRISKET_TIMING_ARTICLE,

  {
    slug: "smoker-temperature-guide",
    category: "technique",
    title: "Smoker Temperature Guide: The Right Pit Temp for Every Meat",
    description:
      "What pit temperature to smoke at for brisket, ribs, pork butt, chicken, and turkey, and why 'low and slow' is not always the right call.",
    updated: "2026-08-03",
    readMins: 6,
    tool: "doneness-temps",
    excerpt:
      "Most low-and-slow BBQ uses 225-275°F. Chicken often benefits from more heat; smoked 8-12 lb turkey has a separate USDA 225-300°F standard.",
    answer:
      "Use 225-275°F as a planning range for many tough BBQ cuts. Chicken often uses 275-325°F for better skin. For smoked turkey, USDA guidance covers a fully thawed, unstuffed 8-12 pound bird, a smoker held at 225-300°F, and 165°F checks in the thickest breast and innermost thigh and wing. Cooker temperatures affect timing and texture; a food thermometer determines safety.",
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
<tr><td>Whole chicken</td><td>Often 275-325°F for skin</td><td>165°F in thickest breast and innermost thigh and wing</td></tr>
<tr><td>Turkey, 8-12 lb</td><td>USDA: 225-300°F</td><td>165°F in thickest breast and innermost thigh and wing</td></tr>
<tr><td>Pork loin / tenderloin</td><td>225-250°F</td><td>145°F + at least 3-minute rest</td></tr>
</tbody>
</table>

<h2>Why tough cuts like it low</h2>
<p>Brisket, pork shoulder, and ribs contain collagen that needs time at elevated internal temperatures to soften. A moderate pit (225-275°F) is a common planning range. Higher settings within that range usually shorten the cook, but bark, moisture, fuel, airflow, and cooker behavior vary. Pick a temperature your cooker can hold and use tenderness plus a food thermometer.</p>

<h2>Poultry temperature depends on the bird</h2>
<p>Chicken often benefits from 275-325°F for skin rendering. Smoked turkey has narrower official limits: use a fully thawed, unstuffed bird weighing 8-12 pounds and maintain 225-300°F. In both cases:</p>
<ul>
<li><strong>Skin.</strong> Poultry skin turns to rubber at low temperatures. Higher heat renders the fat and crisps the skin.</li>
<li><strong>Food safety.</strong> Verify <strong>165°F</strong> in the thickest breast and innermost thigh and wing without touching bone. Time and skin appearance are not safety tests.</li>
</ul>

<h2>Measure the pit where the meat is</h2>
<p>The temperature on your cooker's dome thermometer is often 25-50°F off from grate level where the food actually sits. Trust a probe placed at grate height next to the meat, not the lid gauge. Logging your real grate temperature over a cook, in your <a href="/log/">cook log</a>, quickly teaches you your cooker's personality and hot spots.</p>

<h2>Bottom line</h2>
<p>Use common pit ranges only for planning, apply the specific turkey limits when relevant, and follow your cooker manufacturer’s instructions. Estimate a finish window with the <a href="/tools/smoke-time/">Smoke Time Calculator</a> and verify safety with the <a href="/tools/doneness-temps/">temperature chart</a> and a food thermometer.</p>
`,
    faqs: [
      { q: "What is the best temperature to smoke a brisket?", a: "Anywhere from 225°F to 275°F works well. Higher in that range finishes faster with nearly identical results. Cook to probe-tender (~203°F), not to time." },
      { q: "Why smoke chicken at a higher temperature?", a: "A 275-325°F pit often renders chicken skin better than low-and-slow temperatures. Regardless of pit setting, verify 165°F in the thickest breast and innermost thigh and wing." },
      { q: "Is 225 or 250 better for smoking?", a: "Both are common planning temperatures for many tough cuts; 250°F usually cooks faster. Results vary by cooker, cut, airflow, and wrapping, so log the outcome and cook to verified safety and texture rather than time." },
    ],
  },

  {
    slug: "meat-internal-temperature-chart",
    category: "reference",
    title: "Meat Internal Temperature Chart: Safe Minimums vs BBQ Targets",
    description:
      "USDA safe minimum internal temperatures for the supported foods, plus common texture checkpoints for brisket, ribs, and pork butt.",
    updated: "2026-08-03",
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
<tr><td>Fish</td><td>145°F or until opaque and separating easily</td></tr>
<tr><td>Shrimp, lobster, crab, scallops</td><td>Cook until pearly or white and opaque</td></tr>
<tr><td>Clams, oysters, mussels</td><td>Cook until shells open; discard any that stay closed</td></tr>
<tr><td>Egg dishes</td><td>160°F</td></tr>
<tr><td>Leftovers / reheated</td><td>165°F</td></tr>
</tbody>
</table>
<p>Source: USDA Food Safety and Inspection Service. Use the listed thermometer minimum or visual endpoint for the specific food rather than applying one number to every category.</p>

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
<p>These are not safety numbers; they are where the meat gets tender. Whole-cut beef meets the USDA minimum at 145°F followed by a 3-minute rest, while brisket often does not become tender until around 203°F.</p>

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
      { q: "What is the safe internal temperature for chicken?", a: "All poultry must reach 165°F. For a whole bird, verify the thickest breast and innermost thigh and wing without touching bone. For pieces and ground poultry, measure the thickest or center portion as applicable (source: USDA FSIS)." },
      { q: "What temperature should brisket and pulled pork reach?", a: "For tenderness, both are typically cooked to about 200-205°F internal, well above the 145°F plus 3-minute-rest minimum for whole cuts, so the collagen melts. Pull when probe-tender." },
      { q: "Do I need to rest meat after cooking?", a: "USDA recommends a 3-minute rest for whole cuts of beef, pork, lamb, and veal at 145°F. Large BBQ cuts benefit from much longer rests of 30 minutes to a few hours." },
    ],
  },

  {
    slug: "best-wood-for-smoking",
    category: "reference",
    title: "Best Wood for Smoking Each Meat (A Practical Pairing Guide)",
    description:
      "Which smoking wood to use for brisket, pork, ribs, poultry, and fish, how strong each wood is, and why 'more smoke' is usually a mistake.",
    updated: "2026-08-03",
    readMins: 6,
    tool: "wood-pairing",
    excerpt:
      "Match wood strength to the meat. Bold woods for beef, fruit woods for pork and poultry, delicate woods for fish.",
    answer:
      "Use only clean, untreated cooking wood or fuel approved by the cooker manufacturer. Oak and hickory are bolder; fruit woods are milder; alder is delicate. Pairing is a flavor preference, not a food-safety control.",
    body: `
<p>Smoking wood is a seasoning, and like any seasoning the goal is balance, not maximum intensity. The biggest beginner mistake is too much heavy smoke, which turns food bitter and acrid. Match the wood's strength to the meat and you season the smoke instead of drowning the food.</p>

<p><strong>Fuel safety comes first.</strong> Use only clean, untreated wood or packaged smoking fuel identified for cooking and approved by your cooker manual. Never burn treated, painted, stained, glued, moldy, rotten, construction-scrap, pallet, or unknown wood. Avoid resinous softwoods such as pine, fir, cedar, and spruce as smoking fuel. Follow the manufacturer's fuel-size, airflow, fire-clearance, and supervision instructions.</p>

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
      { q: "Can I use any firewood in a smoker?", a: "No. Use only clean, untreated cooking wood or packaged fuel approved by the cooker manufacturer. Never use treated, painted, glued, moldy, pallet, construction-scrap, unknown, or resinous softwood fuel." },
    ],
  },

  {
    slug: "how-much-meat-per-person",
    category: "reference",
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
    category: "technique",
    title: "Dry Brine, Done Right: How Much Salt and For How Long",
    description:
      "A simple, weight-based dry brine method, how much salt to use per pound (and why salt brand matters), timing by cut, and dry vs wet brine.",
    updated: "2026-08-03",
    readMins: 6,
    tool: "dry-brine",
    excerpt:
      "Salt by weight, not volume: about 0.5% of the meat's weight is a reliable starting point. Then give it time, uncovered, in the fridge.",
    answer:
      "Start around 0.5% of the meat's weight in salt, then refrigerate at 40°F or colder on a rack over a rimmed pan or in another drip-containing setup. Keep raw meat below ready-to-eat food and clean and sanitize hands, tools, and surfaces.",
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
<p>Keep the refrigerator at <strong>40°F or colder</strong>. Set the rack over a rimmed pan or inside another food-safe setup that contains drips, and place raw meat on a low shelf below ready-to-eat food. Wash hands and clean and sanitize tools, counters, and refrigerator surfaces that contact raw juices.</p>

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
      { q: "How long should you dry brine a turkey?", a: "A 24-48 hour refrigerated window is a common planning range. Keep it at 40°F or colder on a rack over a rimmed pan, below ready-to-eat food, and contain all raw-poultry drips." },
      { q: "Is dry brining better than wet brining?", a: "For most BBQ, especially poultry, dry brining is easier, crisps the skin better, and concentrates rather than dilutes flavor. Wet brining can add slightly more moisture to very lean cuts but needs space and can soften skin." },
    ],
    steps: [
      { name: "Weigh the meat", text: "Determine the total weight of the meat you plan to cook, trimmed and ready." },
      { name: "Calculate salt amount", text: "Use about 0.5% of the meat's weight in salt, roughly 2-2.5 grams of kosher salt per pound. Use a scale since salt brands differ by volume." },
      { name: "Apply salt to all surfaces", text: "Apply the measured salt and any additional seasonings to all surfaces of the meat, pressing it in firmly." },
      { name: "Refrigerate with drip containment", text: "At 40°F or colder, place the meat on a rack over a rimmed pan on a low shelf below ready-to-eat food. Use the timing range for the cut and clean and sanitize raw-meat contact surfaces." },
      { name: "Cook without rinsing", text: "Remove the meat from the fridge with a dry, slightly tightened surface. Do not rinse or pat dry; proceed directly to cooking or apply your full rub." },
    ],
  },

  {
    slug: "the-brisket-stall",
    category: "brisket",
    title: "The Brisket Stall: What It Is and How to Beat It",
    description:
      "Why your brisket's temperature stops climbing for hours around 150-170°F, and your options: wait it out, or wrap with the Texas crutch.",
    updated: "2026-08-03",
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
<p>The practical lesson: the stall is the main reason briskets miss their estimated finish time, so always pad your schedule. Estimate with the <a href="/tools/smoke-time/">Smoke Time Calculator</a>, add a rest buffer, and start early. If it finishes well ahead, use equipment designed for hot holding and verify with a food thermometer that the brisket remains at 140°F or warmer. An insulated cooler alone does not establish a safe holding temperature. Note your stall timing and wrap point in the <a href="/log/">cook log</a> so next time you know what your cooker does.</p>
`,
    faqs: [
      { q: "Why does brisket stall at 160 degrees?", a: "Evaporative cooling. Moisture evaporating from the surface cools the meat about as fast as the smoker heats it, so the internal temperature plateaus, usually around 150-170°F. It is normal." },
      { q: "Should I wrap my brisket?", a: "Wrapping (the Texas crutch) pushes the brisket through the stall faster and makes timing predictable. Foil is fastest but softens bark; butcher paper speeds things up while preserving more bark. Waiting unwrapped gives the thickest bark." },
      { q: "How long does the stall last?", a: "Typically one to several hours, depending on the cut size, moisture, and your cooker. Wrapping shortens it significantly." },
    ],
  },

  {
    slug: "first-smoke-beginners-guide",
    category: "technique",
    title: "Your First Smoke: A Beginner's Step-by-Step Guide",
    description:
      "A simple, confidence-building walkthrough for your first BBQ smoke, what to cook, what gear you actually need, and how not to mess it up.",
    updated: "2026-08-03",
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
<p>Let it rest at least 30-60 minutes, lightly tented or wrapped. For a longer hold, use controlled hot-holding equipment and verify the food stays at or above 140°F. Then pull it apart, discarding the big fat pockets.</p>

<h2>The mindset</h2>
<ul>
<li>Start early. For a longer hold, use controlled hot-holding equipment and verify 140°F or warmer with a food thermometer.</li>
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
    howToTime: "PT12H",
    steps: [
      { name: "Choose pork shoulder to start", text: "Start with a pork shoulder (Boston butt), a fatty and forgiving cut. Plan on about 1.5 hours per pound at 250°F." },
      { name: "Get a leave-in thermometer", text: "Before anything else, buy a reliable thermometer with an instant-read probe and a leave-in probe. Lid gauges are unreliable; internal temperature is the truth." },
      { name: "Set up for indirect heat at 250°F", text: "Target a pit temperature of 250°F, anywhere from 225-275°F is fine. Set up for indirect heat and add a couple chunks of wood like apple, cherry, or hickory." },
      { name: "Season simply", text: "Apply a basic rub of salt, pepper, and paprika, or dry brine with salt the night before. Simple seasoning makes great barbecue." },
      { name: "Smoke to probe-tender through the stall", text: "Put the shoulder on, insert your probe, and let it ride. Around 150-170°F the temperature will stall for hours; this is normal. Wrap in foil to speed through it or wait it out." },
      { name: "Pull when probe slides in cleanly", text: "Pull the pork when probe-tender, around 203°F internal. The USDA minimum for whole pork cuts is 145°F followed by a 3-minute rest, but pulled pork needs the higher temperature for shreddable texture." },
      { name: "Rest then pull", text: "Rest at least 30-60 minutes, lightly tented or wrapped. For a longer hold, use controlled equipment and verify 140°F or warmer. Pull apart and serve." },
    ],
  },

  {
    slug: "why-keep-a-bbq-cook-log",
    category: "technique",
    title: "Why Keep a BBQ Cook Log (and What to Write Down)",
    description:
      "The fastest way to get better at barbecue is to write down what you did. Here is exactly what to log on every cook, and why memory is not enough.",
    updated: "2026-08-03",
    readMins: 4,
    tool: null,
    excerpt:
      "Great pitmasters are not lucky; they are consistent. A cook log turns a good result into a repeatable one.",
    answer:
      "Keep a cook log so you can repeat your best results and learn from the misses. For every cook, record the cut and weight, pit temperature, wood, any wrap and when, total time, finish temperature, rest, and an honest verdict with one thing to change. Over a few cooks the patterns become obvious.",
    body: `
<p>Backyard cooks often change several variables from one brisket to the next and then lose the details behind a good result. A cook log preserves the pit temperature, wood, wrap point, and outcome so later cooks can build on evidence instead of memory.</p>

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
<p>A cook record has one protein field, but each reading can identify a named probe or piece. Use clear names such as "pit," "flat," "point," or "rack 2" so the chart and exported readings remain understandable.</p>

<h2>Make it effortless</h2>
<p>The best log is the one you will actually keep. The <a href="/log/">Pitmaster Log cook log</a> runs in your browser, keeps cook records and named probe readings on your device, and plots the readings over time. Export JSON for a complete backup and later restore; export CSV when you want the probe-reading rows for a spreadsheet. No account or upload is required.</p>

<h2>The payoff</h2>
<p>After three or four logged cooks, the patterns jump out: the wrap point that gave you the best bark, the pit temp that fit your schedule, the wood your family liked. You stop guessing and start repeating. That consistency, not luck, is what separates someone who "sometimes nails it" from someone you trust with the holiday brisket.</p>
`,
    faqs: [
      { q: "What should I write down when smoking meat?", a: "Record the cut and raw weight, pit temperature, wood, prep (rub or dry brine), whether and when you wrapped, the timeline, finish temperature, rest, and an honest verdict with one change for next time." },
      { q: "Does keeping a BBQ log actually help?", a: "Yes. Barbecue has many variables over a long cook, and memory loses the details. A log lets you repeat your best results and pinpoint what to adjust, which is the fastest way to improve." },
      { q: "Is there a free BBQ cook log app?", a: "Pitmaster Log is free and browser-based. Each cook has one protein field plus named probe readings. Data stays on the device; JSON provides a complete backup and restore file, while CSV exports the probe-reading rows." },
    ],
  },

  {
    slug: "how-to-smoke-ribs",
    category: "pork",
    title: "How to Smoke Ribs: Baby Backs, Spare Ribs, the 3-2-1 Method, and When They're Done",
    description:
      "Plan pork ribs by cut and pit temperature, use 3-2-1 or 2-2-1 as adjustable templates, verify the USDA minimum, then check texture.",
    updated: "2026-08-03",
    readMins: 8,
    tool: "smoke-time",
    excerpt:
      "Use rib times and 3-2-1 or 2-2-1 only as planning templates. Verify whole-pork 145°F plus a 3-minute rest, then check bend and probe feel for texture.",
    answer:
      "Smoke spare ribs or St. Louis-cut ribs at 225-250°F for 6-7 hours, using the 3-2-1 method as an adjustable planning template. Baby back ribs are smaller and leaner, so shorten the stages and check earlier. Verify the USDA minimum for whole pork cuts, 145°F followed by a 3-minute rest, then use bend and probe feel for the higher texture finish. Remove the membrane from the bone side before seasoning if preferred.",
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
<p>Verify the whole-pork safety endpoint first: the rack must reach at least 145°F and then complete a 3-minute rest. Ribs are commonly cooked farther for tenderness; after the safety check, use a combination of feel tests to judge the higher texture finish.</p>

<h3>Safe minimum vs. BBQ target</h3>
<p>The USDA safe minimum for whole cuts of pork (including ribs) is <strong>145°F</strong> with a 3-minute rest (source: USDA Food Safety and Inspection Service). A rack of ribs will hit 145°F well before they are texturally ready. BBQ ribs are cooked to <strong>195-203°F</strong>, well past safe, so the collagen and connective tissue convert to gelatin and the meat becomes tender. Safe is the floor; 195-203°F is the texture goal. Use the <a href="/tools/doneness-temps/">doneness chart</a> for reference on any cut.</p>

<h3>The four doneness tests</h3>
<ul>
  <li><strong>Toothpick test (most reliable):</strong> Insert a toothpick or the tip of an instant-read thermometer into the meat between two bones. If it slides in with almost no resistance, like going into warm butter, the ribs are done. Resistance means more time.</li>
  <li><strong>Bend test:</strong> Pick up the rack with tongs at the center. Bounce it gently. Done ribs will bend into a deep U-shape and the surface will show a slight crack in the bark. A stiff rack that barely flexes needs more time.</li>
  <li><strong>Bone pullback:</strong> Look at the bone tips. When the meat has pulled back and exposed roughly 1/4 inch of clean bone at the ends, that is a good sign the rack is approaching done. Note that some ribs in the store have had the membrane scored, which causes pullback earlier, so use this as one signal, not the only one.</li>
  <li><strong>Bone twist test:</strong> Grip an exposed bone tip from the center of the rack and twist. If the bone rotates and starts to pull away from the meat cleanly, the ribs are done or very close.</li>
</ul>
<p>Do not rely on texture tests for safety. First verify at least 145°F with a food thermometer and complete the required 3-minute rest. For the higher texture finish, the combination of a toothpick that slides clean plus a rack that bends and bounces is a useful confirmation. Log the verified temperature and texture observations in the <a href="/log/">cook log</a>.</p>

<h2>"Fall-off-the-bone" vs. bite-through: which is right?</h2>
<p>This is a taste preference, not a food safety question. "Fall-off-the-bone" ribs are simply cooked longer, past the 195-203°F window. They are not unsafe, just softer. Most competition BBQ judges actually mark down ribs that fall apart because the standard is meat that comes clean off the bone with a single clean bite and leaves a neat arc. Neither style is wrong. If your family loves fall-off-the-bone ribs, extend the wrapped phase by 30-60 minutes. If you want the clean competition bite, pull them as soon as two doneness tests agree.</p>

<h2>A simple cook plan, start to finish</h2>
<ol>
  <li>The day before: remove the membrane, apply a dry brine or rub, refrigerate uncovered overnight.</li>
  <li>Keep the rack refrigerated at 40°F or colder until the smoker is ready; move it directly from refrigeration to final prep and cooking.</li>
  <li>Set your pit to 225-250°F and add your wood (hickory, cherry, apple, or a blend).</li>
  <li>Place ribs bone-side down. Insert a leave-in probe in the thickest meaty section if you want to track temperature.</li>
  <li>Smoke unwrapped for 3 hours (spare/St. Louis) or 2 hours (baby backs). Do not open the lid constantly.</li>
  <li>Wrap tightly in foil with a small splash of liquid. Return bone-side down.</li>
  <li>After the wrap phase, unwrap, sauce if desired, and return to the smoker for the final hour to set the bark and glaze.</li>
  <li>Start checking about 30 minutes before the expected finish time. Verify at least 145°F; the whole-pork endpoint also requires a 3-minute rest before serving. Ribs are commonly cooked farther, so use bend and probe feel only for the higher texture finish.</li>
  <li>Complete at least the required 3-minute rest; a 10-15 minute culinary rest is common before cutting between the bones.</li>
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
    howToTime: "PT5H30M",
    steps: [
      { name: "Remove membrane and dry brine", text: "Peel the silverskin membrane from the bone side of the rack. Apply a dry rub or dry brine and refrigerate uncovered overnight." },
      { name: "Set up smoker at 225-250°F", text: "Set your pit to 225-250°F and use approved fuel. Follow the smoker manual's required water-pan, vent, placement, and supervision configuration." },
      { name: "Smoke unwrapped for 2-3 hours", text: "Place ribs bone-side down. Smoke unwrapped for 3 hours (spare or St. Louis) or 2 hours (baby backs) without opening the lid repeatedly." },
      { name: "Wrap with liquid", text: "Wrap tightly in foil with a small splash of apple juice or butter. Return bone-side down and smoke for another 1-2 hours." },
      { name: "Unwrap and finish", text: "Open the wrap, sauce the ribs if desired, and return to the smoker for 30-60 minutes to set the glaze and firm up the bark." },
      { name: "Verify temperature, then test texture", text: "First verify at least 145°F; the whole-pork endpoint also requires a 3-minute rest before serving. Ribs are commonly cooked farther, so use a deep bend and low probe resistance only to judge the higher texture finish." },
      { name: "Rest and slice", text: "Complete at least the required 3-minute rest; a 10-15 minute culinary rest is common before cutting between the bones." },
    ],
  },

  {
    slug: "how-to-smoke-a-pork-butt",
    category: "pork",
    title: "How to Smoke a Pork Butt: Times, Temps, the Stall, and Pulled Pork That Actually Shreds",
    description:
      "Plan a smoked pork butt at 225-275°F, manage the stall, verify the USDA minimum, then use probe feel for the higher pulled-pork texture finish.",
    updated: "2026-08-03",
    readMins: 9,
    tool: "smoke-time",
    excerpt:
      "Use time only for planning. Verify whole-pork 145°F plus a 3-minute rest, then continue until probe-tender for pulled texture and monitor any longer hot hold.",
    answer:
      "Smoke a pork butt (Boston butt) at 225-275°F until probe-tender, typically around 200-205°F internal. At 250°F, budget about 1.5 hours per pound. An 8-pound butt often takes 10-14 hours. Expect a stall at 150-170°F where the temperature plateaus for hours; wrap in foil or butcher paper to push through it. Rest at least 30 minutes. For a longer hold, use controlled hot-holding equipment and verify 140°F or warmer. The USDA safe minimum for pork is 145°F with a 3-minute rest, but pulled pork is cooked farther for shreddable texture.",
    body: `
<p>Pork butt is one of the most forgiving cuts in barbecue. It has enough fat and collagen to make tenderness easy to test, works well with a monitored hot hold, and turns one cook into multiple meals. It is also the cut we recommend in the <a href="/guides/first-smoke-beginners-guide/">beginner's guide</a> for a reason: cook one correctly and you will understand how low-and-slow BBQ works from the inside out.</p>

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
<p>Pork butt usually arrives with a thick fat cap on one side, up to an inch or more. Trim it down to about 1/4 inch. A thin surface layer can shield the side facing the cooker’s primary heat, while a thick cap blocks seasoning and bark formation on the covered surface. Rendered surface fat does not baste the interior. Trim away dense, hard fat that is unlikely to soften during the cook.</p>

<h3>Rub</h3>
<p>A basic rub of salt, black pepper, paprika, garlic powder, and a little brown sugar is a useful starting point. For deeper seasoning, apply the salt component the night before as a dry brine, then add the rest of the rub before cooking. See the <a href="/guides/dry-brine-guide/">dry brine guide</a> for salt-by-weight estimates. Apply the rub evenly and press it into the surface.</p>

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
  <strong>Longer rest:</strong> wrap the pork in foil, then use a controlled warmer or an insulated cooler while checking the internal temperature with a food thermometer. USDA says hot food should remain at 140°F or warmer; a closed cooler does not guarantee that temperature.</p>
<p>A pork butt that finishes early is easier to manage than one that finishes late, but any hold still needs temperature monitoring.</p>

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
  <li><strong>Day of the cook:</strong> apply your rub and inject if desired, then keep the pork refrigerated until the smoker is preheated and ready.</li>
  <li>Set the pit to 250°F and add your wood.</li>
  <li>Orient the fat cap toward the cooker’s primary heat source when practical so it can shield that surface; rendered fat does not self-baste the meat’s interior. Insert a leave-in probe in the thickest section, away from the bone.</li>
  <li>Smoke unwrapped until the bark looks set and deep, usually 160-170°F internal.</li>
  <li>Wrap in foil or butcher paper and return to the smoker.</li>
  <li>Start testing for probe-tenderness at 195°F. Pull when the probe slides in with no resistance, usually 200-203°F.</li>
  <li>Rest before pulling; for a long hold, use a food thermometer and keep the pork at 140°F or warmer.</li>
  <li>Pull, mix in the bark, and serve.</li>
</ol>

<p>Log the whole cook in your <a href="/log/">cook log</a>: raw weight, pit temp, wood, wrap time and material, finish temperature, rest time, and your verdict. A complete record makes it easier to identify what to repeat or change on the next pork butt.</p>

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
        a: "Rest for at least 30 minutes before pulling. For a longer hold, wrap the finished butt and use a controlled warmer or insulated cooler while checking with a food thermometer. USDA says hot food should remain at 140°F or warmer; the cooler alone does not guarantee that temperature.",
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
    howToTime: "PT12H",
    steps: [
      { name: "Trim and dry brine overnight", text: "Trim the fat cap to about 1/4 inch. Apply salt as a dry brine and refrigerate uncovered overnight to form a dry surface for bark." },
      { name: "Apply rub and keep chilled", text: "Apply your rub and any injection the day of the cook, then keep the butt refrigerated until the smoker is preheated and ready." },
      { name: "Set up smoker at 250°F", text: "Set the pit to 250°F and add your wood. Hickory or a hickory-apple blend is traditional for pork." },
      { name: "Smoke until bark sets", text: "Place the butt fat-side up and insert a leave-in probe away from the bone. Smoke unwrapped until the bark looks dark and set, usually around 165-170°F internal." },
      { name: "Wrap and continue smoking", text: "Wrap tightly in foil or butcher paper and return to the smoker. The internal temperature will push through the stall faster." },
      { name: "Test for probe-tenderness", text: "Start probing for tenderness at 195°F. The butt is done when a probe slides in with no resistance anywhere in the meat, usually around 200-205°F." },
      { name: "Rest, monitor, then pull", text: "Rest at least 30 minutes. For a longer hold, use controlled hot-holding equipment and verify 140°F or warmer with a food thermometer. Pull, mix in the bark, and serve." },
    ],
  },

  {
    slug: "how-to-smoke-a-whole-chicken",
    category: "poultry",
    title: "How to Smoke a Whole Chicken: Temperature, Times, and How to Fix the Skin",
    description:
      "A complete guide to smoking whole chicken: why you must smoke it hotter than other cuts, how to get skin that is not rubbery, spatchcock vs. whole bird, accurate cook times, and where to probe for doneness.",
    updated: "2026-08-03",
    readMins: 8,
    tool: "doneness-temps",
    excerpt:
      "Smoke chicken around 300-325°F for better skin, dry brine uncovered in the refrigerator, and verify 165°F in the thickest breast and innermost thigh and wing.",
    answer:
      "Smoke a whole chicken at 300-325°F for better skin. A 4-5 lb bird often takes about 1.5-2 hours at 300°F, but time is only a planning estimate. Verify 165°F in the thickest part of the breast and the innermost thigh and wing, avoiding bone. Dry brine uncovered in the refrigerator and follow the cooker manufacturer's instructions for water-pan use.",
    body: `
<p>Chicken often benefits from a hotter pit and a drier surface than brisket or pork butt. Added humidity can soften skin, but water-pan and vent configurations vary by cooker. Follow the manufacturer’s required setup and never remove or bypass a component the manual requires.</p>

<h2>The one rule that changes everything: chicken needs a hotter pit</h2>
<p>Chicken skin has fat beneath it, and higher pit temperatures generally support more rendering, drying, and browning. A 225-250°F cook often leaves softer skin, while 300-325°F can improve texture when that range is approved for the cooker. Skin results still vary with surface moisture, airflow, bird size, and equipment.</p>
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
<p>A refrigerated uncovered dry brine can help chicken skin dry. Set the bird on a rack over a rimmed pan on the lowest practical shelf, keep the refrigerator at 40°F or colder, contain every drip, and clean and sanitize hands, utensils, counters, and refrigerator surfaces that contact raw poultry.</p>
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
<p>Run your pit at <strong>300-325°F</strong> for chicken if that range is approved for your cooker. Lower humidity can support crisper skin. If the water pan is optional, follow the manual before changing it; never remove a required pan or alter the cooker’s intended configuration.</p>

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
<p>This is the most important step for both food safety and serving quality. The USDA requires a whole bird to reach <strong>165°F</strong> in the thickest part of the breast and the innermost parts of the thigh and wing (source: USDA Food Safety and Inspection Service). Three spots, not one.</p>
<ul>
  <li><strong>Check the innermost thigh.</strong> Insert the thermometer into the innermost thigh area and keep it away from bone, which can distort the reading. Verify 165°F; do not use this one spot as proof that the other required locations are ready.</li>
  <li><strong>Check the thickest breast.</strong> Verify 165°F in the thickest part of the breast. Breast and thigh temperatures can differ, so neither reading substitutes for the other.</li>
  <li><strong>Check the innermost wing.</strong> Verify 165°F in the innermost wing area on every whole bird, not only on larger birds.</li>
</ul>
<p>Use the <a href="/tools/doneness-temps/">doneness temperature chart</a> to verify the safe minimum for the supported food. For chicken, 165°F in the required location or locations is the USDA minimum. A higher temperature may be a personal texture preference, but it is not required for safety.</p>

<p>Some cooks prefer a higher thigh temperature for texture. Treat that as an optional preference only after the thickest breast and innermost thigh and wing have each verified at least 165°F. A thigh reading alone does not establish that a whole bird is ready.</p>

<h2>The skin problem and how to fix it</h2>
<p>Even with a hot pit, rubbery skin can still happen. Here is the full checklist for crispy skin:</p>
<ul>
  <li><strong>Dry brine uncovered overnight.</strong> This is the highest-impact step. Wet skin will never get crispy.</li>
  <li><strong>Use the manufacturer-approved setup.</strong> If a water pan is optional, lower humidity may support crisper skin. Never remove a pan or component the manual requires.</li>
  <li><strong>No spritzing.</strong> Spritzing chicken during the cook adds moisture back to the skin. Skip it entirely.</li>
  <li><strong>Use only an approved pit range.</strong> If the cooker cannot maintain 300-325°F within its manual's limits, use a supported setting and accept that the skin texture may differ. Never exceed the manufacturer's rated range.</li>
  <li><strong>Do not wrap the bird.</strong> Wrapping traps steam. Never wrap chicken.</li>
  <li><strong>Use an approved high-heat finish if desired.</strong> After all three whole-bird locations verify 165°F, use only a grill, pan, temperature, and transfer method approved by the equipment manufacturer, and monitor continuously to prevent burns or fire.</li>
</ul>

<h2>Rest and carve</h2>
<p>Rest a whole smoked chicken for <strong>10-15 minutes</strong> before carving. This is shorter than pork or brisket because chicken has less mass and the fibers are finer. A long rest will soften the skin you worked hard to crisp, so do not overdo it. Tent loosely with foil or just leave it uncovered on a cutting board.</p>
<p>Refrigerate leftovers in shallow, covered containers within 2 hours, or within 1 hour when the ambient temperature is above 90°F. Use refrigerated leftovers within 3-4 days and reheat them to 165°F in the center.</p>

<h2>Simple start-to-finish game plan</h2>
<ol>
  <li><strong>The night before:</strong> dry brine on a rack over a rimmed pan at 40°F or colder, on a low shelf below ready-to-eat food. Contain drips and sanitize raw-poultry contact surfaces.</li>
  <li><strong>Before cooking:</strong> apply the rub and a light coat of oil or butter, then keep the bird refrigerated until the pit is preheated and ready.</li>
  <li>Set the pit to 300-325°F if the cooker supports it. Use only approved fuel and the water-pan and vent configuration required by the manual.</li>
  <li>Place the bird breast-side up (whole) or flat (spatchcock). Insert a leave-in probe into the innermost thigh area without touching bone, then verify all three required locations before removal.</li>
  <li>Do not spritz, baste, or open the lid repeatedly. Let the heat work.</li>
  <li>Start checking at the low end of the estimated time. Remove the bird only after the breast, innermost thigh, and innermost wing each verify 165°F.</li>
  <li>Rest 10-15 minutes, then carve.</li>
  <li>Log the bird weight, pit temp, wood, finish time, and skin quality in your <a href="/log/">cook log</a> so you can repeat it.</li>
</ol>

<p class="text-sm text-muted"><em>A whole bird must reach a safe minimum internal temperature of 165°F as measured with a calibrated food thermometer in the thickest part of the breast and the innermost parts of the thigh and wing. Source: USDA Food Safety and Inspection Service, fsis.usda.gov. This is not a preference; it is the safety standard. Never serve chicken below 165°F internal.</em></p>
`,
    faqs: [
      {
        q: "What temperature should I smoke a whole chicken at?",
        a: "300-325°F is the recommended pit temperature for a whole smoked chicken. Unlike brisket and pork, chicken needs higher heat so the fat under the skin renders and crisps. At 225-250°F, the skin turns rubbery and pale.",
      },
      {
        q: "How long does it take to smoke a whole chicken?",
        a: "At 300°F, a 4-5 lb whole chicken may take about 1.5-2 hours, while a spatchcocked bird can cook faster. Use time only for planning. Remove a whole bird only after the thickest breast and innermost thigh and wing each verify 165°F.",
      },
      {
        q: "What temperature is smoked chicken done?",
        a: "All poultry must reach 165°F internal temperature. For a whole bird, verify the thickest part of the breast and the innermost thigh and wing, keeping the thermometer away from bone (source: USDA FSIS). Remove the bird only after all three locations reach 165°F.",
      },
      {
        q: "Why is my smoked chicken skin rubbery?",
        a: "Soft skin can result from low pit heat or a wet surface. If the cooker manual permits 300-325°F, that range and a refrigerated uncovered dry brine can support browning. Follow the manual's required water-pan and vent setup, and avoid unnecessary lid opening or spritzing.",
      },
      {
        q: "What is spatchcock chicken and why is it better for smoking?",
        a: "Spatchcocking means removing the backbone and pressing the bird flat. On the smoker it reduces cook time by about 25-30%, exposes more skin surface to direct heat for better crispiness, and helps the breast and thigh reach temperature at a closer time so you are less likely to overcook the white meat waiting for the dark meat.",
      },
      {
        q: "Where do you put the thermometer in a whole chicken?",
        a: "Check the innermost part of the thigh and keep the thermometer away from bone, which can distort the reading. Also check the thickest part of the breast and the innermost part of the wing. The USDA requires 165°F in all three locations for a whole bird.",
      },
      {
        q: "What is the best wood for smoking chicken?",
        a: "Mild fruit woods work best: apple, cherry, and pecan are the top picks. Cherry also adds a deep reddish-brown color to the skin. Avoid heavy woods like mesquite or large amounts of hickory, which can overpower the delicate flavor of chicken. A small amount of hickory blended with apple is a good middle ground if you want a slightly more savory smoke.",
      },
    ],
    howToTime: "PT2H",
    steps: [
      { name: "Dry brine with drip containment", text: "At 40°F or colder, place the salted bird on a rack over a rimmed pan on a low shelf below ready-to-eat food. Contain drips and sanitize raw-poultry contact surfaces." },
      { name: "Apply rub and keep chilled", text: "Apply the rub and a light coat of oil or butter, then keep the bird refrigerated until the pit is preheated and ready." },
      { name: "Set up smoker at 300-325°F", text: "Use this range only if the cooker supports it. Use approved fuel and the water-pan and vent configuration required by the manual." },
      { name: "Smoke breast-side up without opening", text: "Place the bird breast-side up directly on the grate. Insert a leave-in probe into the innermost thigh area without touching bone. Do not spritz, baste, or open the lid repeatedly." },
      { name: "Verify 165°F in all three locations", text: "Remove the bird only after the thickest breast and innermost thigh and wing each reach 165°F. Keep the thermometer away from bone." },
      { name: "Rest and carve", text: "Rest 10-15 minutes on a cutting board, then carve by removing legs and thighs first, then the breast lobes, then the wings." },
    ],
  },

  {
    slug: "how-to-smoke-beef-ribs",
    category: "beef",
    title: "How to Smoke Beef Ribs: Dino Ribs vs. Back Ribs, Times, Temps, and Doneness",
    description:
      "Compare beef plate and back ribs, use cook times only for planning, verify the USDA whole-beef minimum, then check probe feel for texture.",
    updated: "2026-08-03",
    readMins: 7,
    tool: "smoke-time",
    excerpt:
      "Plate and back ribs differ in size and timing. Verify whole-beef 145°F plus a 3-minute rest, then use 200-205°F only as a checkpoint and finish by probe feel.",
    answer:
      "Beef plate short ribs are thick three-bone slabs, while beef back ribs carry less meat above the bones and usually cook faster. Use time and 200-205°F only as texture-planning checkpoints. The USDA minimum for whole beef cuts is 145°F followed by a 3-minute rest; after verifying that endpoint, use probe feel for the higher barbecue texture finish.",
    body: `
<p>Beef ribs are having a moment in backyard BBQ, and for good reason. A full rack of beef plate ribs done right is one of the most impressive things you can pull off a smoker, big enough to look like something out of a cartoon, with brisket-level bark and collagen-rich meat that slides off the bone. But buying the wrong cut is a common and expensive mistake. Here is what to look for and how to cook both main types.</p>

<h2>The two cuts: know what you are buying</h2>
<p>When your grocery store or butcher says "beef ribs," they could mean one of two very different cuts. The experience at the table is not even close to the same.</p>

<table>
<thead>
  <tr>
    <th>Cut</th>
    <th>Also called</th>
    <th>Where it comes from</th>
    <th>Meat location</th>
    <th>Rack size</th>
    <th>What it cooks like</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Beef plate short ribs</strong></td>
    <td>Dino ribs, plate ribs, 3-bone beef ribs</td>
    <td>Short plate section, ribs 6-8, near the belly</td>
    <td>Thick cap of meat ON TOP of the bones</td>
    <td>3 large bones, 8-12+ lbs per rack</td>
    <td>Like brisket on a bone: long cook, probe-tender, spectacular</td>
  </tr>
  <tr>
    <td><strong>Beef back ribs</strong></td>
    <td>Dinosaur back ribs, beef spare ribs (misnomer)</td>
    <td>Upper rib cage near the spine, where the ribeye was</td>
    <td>Most meat BETWEEN the bones, not on top</td>
    <td>7-8 bones, 3-5 lbs per rack</td>
    <td>Faster cook, less meat per bone, still excellent</td>
  </tr>
</tbody>
</table>

<p><strong>Beef plate short ribs are the BBQ prize.</strong> They come from the belly side of the cow and have a thick, deep cap of well-marbled meat sitting on top of large bones. They are what you see in competition photos and at high-end Texas BBQ joints. Because the ribeye muscle has already been removed from beef back ribs at the butcher, back ribs have most of their meat between the bones, which means less of it and a different eating experience. Both are good; they are just not the same cook.</p>

<p><strong>When buying plate ribs:</strong> ask specifically for "beef plate short ribs," "short plate ribs," or "3-bone beef ribs." If the label just says "beef ribs" or "beef short ribs," ask your butcher exactly which section they came from. Chuck short ribs are yet another cut and not what you want for this style of cook.</p>

<h2>Membrane: different rules for each cut</h2>
<ul>
  <li><strong>Beef back ribs:</strong> remove the membrane. The thin silverskin on the back side of back ribs is tough, does not break down in the cook, and blocks rub and smoke. Slide a knife under a corner, grip with a paper towel, and pull it off. Same method as pork ribs.</li>
  <li><strong>Beef plate short ribs (dino ribs):</strong> leave the membrane. The membrane on the bottom of plate ribs helps hold the thick meat together during the long cook. Without it, the meat can separate from the bone before it is done. You can easily cut it away after cooking if you want, but leave it on during the smoke.</li>
</ul>

<h2>Rub for beef ribs</h2>
<p>Beef ribs want the same treatment as brisket: a coarse salt-and-pepper rub. The coarse grind of both the salt and pepper creates surface texture that smoke adheres to, building the dark, crackling bark that makes these ribs worth the effort. A 1:1 ratio of coarse kosher salt to coarsely ground black pepper (16-mesh if you can find it) applied generously over every surface is all you need. Let it sit uncovered in the fridge for a few hours or overnight for the salt to penetrate.</p>
<p>Some cooks add a small amount of garlic powder. Some add a little paprika for color. Both are fine additions. What you do not want is a sweet, sugar-heavy rub, it burns on the long cook and fights the natural beefy flavor that is the whole point of beef ribs.</p>

<h2>Wood for beef ribs</h2>
<p>Beef is a bold-flavored meat that can handle stronger wood than pork or poultry. Oak is the Texas standard and the best all-around choice for beef ribs: clean, long-burning, and balanced. Hickory adds more punch and a savory depth. Pecan is a milder alternative with a nutty richness. Avoid fruit woods on their own for beef ribs; they tend to make the flavor too sweet. A blend of oak and a little hickory is hard to beat. Use the <a href="/tools/wood-pairing/">Wood Pairing Finder</a> to explore other options.</p>

<h2>Pit temperature and cook times</h2>
<p>Beef ribs do best at 250-275°F. Too low and the cook becomes extremely long with diminishing returns on bark quality. Too high and the exterior dries out before the collagen has converted. The 250-275°F range gives you the time the collagen needs while still building a great bark.</p>

<table>
<thead>
  <tr>
    <th>Cut</th>
    <th>250°F</th>
    <th>275°F</th>
    <th>Done when</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Beef plate short ribs (dino ribs)</td>
    <td>9-11 hours</td>
    <td>7-9 hours</td>
    <td>Probe-tender, ~200-205°F</td>
  </tr>
  <tr>
    <td>Beef back ribs</td>
    <td>5-7 hours</td>
    <td>4-6 hours</td>
    <td>Probe-tender, ~200-205°F</td>
  </tr>
</tbody>
</table>

<p>These are planning windows. Start early. If the ribs finish well ahead, use controlled hot-holding equipment and verify 140°F or warmer with a food thermometer. Use the <a href="/tools/smoke-time/">Smoke Time Calculator</a> to build a start time from your serving window.</p>

<h2>The stall</h2>
<p>Beef plate ribs will hit a stall around <strong>160-170°F internal temperature</strong>, same as brisket and pork butt, for the same reason: evaporative cooling. On a large rack of plate ribs this stall can last two to four hours. See the full explanation in <a href="/guides/the-brisket-stall/">The Brisket Stall</a>.</p>
<p>Most serious beef rib cooks smoke plate ribs unwrapped the entire cook. The bark is a major part of the appeal, and wrapping softens it. If you are pressed for time, wrap in butcher paper once the bark is fully set and dark, usually around 170°F. Avoid foil if you can; the steam kills the bark on beef ribs even more noticeably than on pork.</p>

<h2>How to tell when beef ribs are done</h2>
<p>The USDA minimum for whole cuts of beef is <strong>145°F followed by a 3-minute rest</strong> (source: USDA Food Safety and Inspection Service). Beef ribs are commonly cooked farther for texture. A 200-205°F reading is only a checkpoint; tenderness still varies by cut.</p>
<p>Temperature is a starting point, not a finish line. The real test is the probe:</p>
<ul>
  <li><strong>Probe-tender test:</strong> Push a temperature probe or skewer into the thickest part of the meat cap on plate ribs, or between the bones on back ribs. When done, it should slide in with almost no resistance, like warm butter. Start checking at 200°F. Many plate rib racks need to run to 203-205°F before they pass this test.</li>
  <li><strong>Feel of the rack:</strong> Pick up the rack with tongs. A done rack of plate ribs will flex and feel heavy with moisture. The meat will have a slight jiggle. If it is still stiff, it needs more time.</li>
</ul>
<p>Check the <a href="/tools/doneness-temps/">doneness temperature chart</a> for the safe minimum reference on any cut.</p>

<h2>Rest and serve</h2>
<p>Rest beef plate ribs for at least <strong>30-60 minutes</strong>, wrapped in butcher paper or foil, before slicing. For a longer hold, use equipment designed for hot holding and verify with a food thermometer that the ribs remain at 140°F or warmer. An insulated cooler alone does not establish a safe temperature.</p>
<p>Slice between the bones to serve individual ribs. Each bone from a rack of plate ribs is a single, substantial serving. Log the whole cook in your <a href="/log/">cook log</a>: the cut name and source, weight, pit temp, stall time, finish temp, and how the probe felt. Beef ribs vary enough between sources that your notes from one cook directly inform the next.</p>

<p class="text-sm text-muted"><em>The USDA safe minimum internal temperature for whole cuts of beef is 145°F with a 3-minute rest. The BBQ doneness targets of 200-205°F listed above are for texture and collagen conversion, not food safety. Source: USDA Food Safety and Inspection Service, fsis.usda.gov.</em></p>
`,
    faqs: [
      {
        q: "What are dino ribs?",
        a: "Dino ribs are beef plate short ribs, cut from ribs 6-8 of the short plate section near the belly of the cow. They have a thick cap of meat sitting on top of 3 large bones and are the premium beef rib cut for BBQ. They are not the same as beef back ribs, which come from near the spine and have most of their meat between the bones.",
      },
      {
        q: "How long does it take to smoke beef ribs?",
        a: "Beef plate short ribs (dino ribs) take 7-9 hours at 275°F and 9-11 hours at 250°F. Beef back ribs take 4-6 hours at 275°F. Both are done when probe-tender at 200-205°F, not by time alone. Always start earlier than your estimate to allow for the stall.",
      },
      {
        q: "What temperature should beef ribs be smoked at?",
        a: "250-275°F is a common planning range when the cooker manual permits it. Verify the USDA minimum for whole beef cuts, 145°F followed by a 3-minute rest, then use 200-205°F only as a checkpoint while testing tenderness with a probe.",
      },
      {
        q: "Should you remove the membrane from beef ribs?",
        a: "It depends on the cut. Remove the membrane from beef back ribs: it is tough, does not break down during cooking, and blocks rub and smoke. Leave the membrane on beef plate short ribs (dino ribs): it holds the thick meat cap together during the long cook and can be cut away after.",
      },
      {
        q: "What rub should I use on beef ribs?",
        a: "A coarse salt-and-pepper rub is the Texas standard and the best choice for beef ribs. Equal parts coarse kosher salt and coarsely ground black pepper, applied generously. The coarse grind creates surface texture that smoke adheres to, building a proper bark. Avoid heavy sweet or sugary rubs on a long cook.",
      },
      {
        q: "What wood is best for smoking beef ribs?",
        a: "Oak is the top choice for beef ribs: clean, balanced, long-burning, and the Texas standard for beef. Hickory adds more punch. A blend of oak and hickory is hard to beat. Avoid using only fruit woods on beef ribs; they are too mild for the bold flavor of beef and tend to make the result too sweet.",
      },
    ],
    howToTime: "PT9H",
    steps: [
      { name: "Know your cut and prep", text: "Identify whether you have beef plate short ribs (dino ribs) or beef back ribs; they cook differently. Apply coarse salt-and-pepper rub to all surfaces and refrigerate uncovered a few hours or overnight." },
      { name: "Set up smoker at 250-275°F", text: "Use this range only if approved for your cooker, use approved fuel, and follow the manual's water-pan, vent, placement, and supervision requirements." },
      { name: "Smoke bone-side down unwrapped", text: "Place ribs bone-side down on the grate. Insert a leave-in probe in the thickest part of the meat. Most beef rib cooks skip wrapping to preserve the dark bark." },
      { name: "Push through the stall", text: "Expect a stall around 160-175°F that can last several hours. Maintain pit temperature and do not open the lid. The bark will look dark and dry when the stall ends." },
      { name: "Test for probe-tenderness", text: "Start testing at 200°F. The ribs are done when the probe slides in with almost no resistance, typically 203-208°F, and the rack feels heavy and flexes when lifted." },
      { name: "Rest before slicing", text: "Rest beef plate ribs for at least 30-60 minutes wrapped in butcher paper. Slice between the bones and serve." },
    ],
  },

  {
    slug: "brisket-rub-guide",
    category: "brisket",
    title: "Brisket Rub: The Salt-and-Pepper Method, What Else to Add, and How to Build Real Bark",
    description:
      "Everything about seasoning a brisket: why Central Texas pitmasters use only salt and pepper, why the grind matters, when to apply the rub, what binders do, and how bark actually forms.",
    updated: "2026-08-03",
    readMins: 6,
    tool: "smoke-time",
    excerpt:
      "Start with equal parts coarse kosher salt and coarse black pepper. That is the foundation every serious brisket rub is built on, and for most cooks, it is enough.",
    answer:
      "The classic Central Texas brisket rub is a 1:1 ratio of coarse kosher salt and coarsely ground black pepper, nothing else. The coarse grind is not cosmetic: it creates surface texture that smoke particles adhere to, forming the dark, crackling bark that defines great brisket. Apply the rub right before the cook or up to 24 hours ahead. Avoid the 1-3 hour window where salt draws out moisture without fully reabsorbing. Binders like mustard or Worcestershire help the rub stick but do not change the flavor.",
    body: `
<p>The most important thing about a brisket rub is not what is in it. It is what the rub does to the surface of the meat over 12+ hours on the smoker. Understanding that changes how you think about every ingredient you reach for.</p>

<h2>The foundation: salt and pepper</h2>
<p>The most respected brisket tradition in the United States, Central Texas barbecue, uses a rub of nothing but equal parts coarse kosher salt and coarsely ground black pepper. Aaron Franklin, whose Franklin Barbecue in Austin is widely considered the benchmark for brisket in America, uses this formula: roughly half Morton kosher salt, half coarsely ground pepper, in equal proportions by volume.</p>
<p>This is not minimalism for its own sake. The reasoning is direct: high-quality beef has a complex flavor that a heavy spice rub can easily mask. Salt amplifies what is already there. Pepper adds earthiness and is a structural component of the bark. Everything else is optional.</p>
<p>If you have never cooked a brisket with only salt and pepper, do it once before you start experimenting. You may find you never go back.</p>

<h2>Why coarse grind matters</h2>
<p>This is the detail most home cooks get wrong. The grind of both the salt and the pepper is not aesthetic. It is functional.</p>
<p>Coarse particles create surface texture on the meat. As the fat begins to render and the Maillard reaction begins on the outer surface, those coarse particles of pepper get locked into the fat and become part of the developing bark. They provide physical structure for smoke particles to adhere to. The result is a dark, deeply seasoned crust with real bite.</p>
<p>Fine-ground pepper does the opposite. It sits like a powder on the surface, does not create texture, and can actually impede bark formation by sealing the surface rather than opening it up. The same logic applies to salt: very fine table salt dissolves too quickly and does not give you the same crust as a coarser kosher salt.</p>
<p><strong>What to buy:</strong> Look for 16-mesh coarsely ground black pepper, which is the standard used in Central Texas BBQ. If you only have standard pre-ground black pepper, crack it yourself in a pepper grinder set to coarse, or use a mortar and pestle to rough-crack whole peppercorns.</p>

<h2>The ratio</h2>
<table>
<thead>
  <tr>
    <th>Preference</th>
    <th>Salt</th>
    <th>Pepper</th>
    <th>Notes</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Classic Central Texas</td>
    <td>1 part</td>
    <td>1 part</td>
    <td>The baseline. Try this first.</td>
  </tr>
  <tr>
    <td>Pepper-forward</td>
    <td>1 part</td>
    <td>1.5-2 parts</td>
    <td>More bark, deeper crust, bolder flavor</td>
  </tr>
  <tr>
    <td>Milder bark</td>
    <td>1 part</td>
    <td>0.5-0.75 parts</td>
    <td>Softer crust, more of the beef coming through</td>
  </tr>
</tbody>
</table>

<h2>What to add beyond salt and pepper</h2>
<p>Once you understand the foundation, additions make sense. These are the most common and why they are used:</p>
<ul>
  <li><strong>Garlic powder:</strong> adds savory depth without competing with the beef. A small amount goes a long way. Use powder, not granules, which can burn on a long cook.</li>
  <li><strong>Onion powder:</strong> similar role to garlic. Often used together with garlic powder in a 1:1 addition.</li>
  <li><strong>Smoked paprika or regular paprika:</strong> contributes a deep red color to the bark and a mild, sweet earthiness. Does not meaningfully affect flavor on a 12-hour cook but looks great on the sliced brisket.</li>
  <li><strong>Cayenne or chili powder:</strong> a small pinch of heat. Keep it subtle; it builds as the rub concentrates during the cook.</li>
  <li><strong>Brown sugar:</strong> adds sweetness and helps the bark darken. Use sparingly, and only if you want a slightly sweeter profile. Too much sugar on a long low-and-slow cook can burn and turn bitter.</li>
</ul>
<p>A reliable expanded rub: <strong>4 parts coarse pepper, 4 parts coarse salt, 1 part garlic powder, 1 part smoked paprika</strong>. That is it. Mix in whatever quantity you need and store the rest in an airtight jar.</p>

<h2>Binders: do you need them?</h2>
<p>A binder is a thin coating applied to the meat before the rub to help it stick. Common choices:</p>
<ul>
  <li><strong>Yellow mustard:</strong> the most popular. Tastes like nothing on the finished brisket (the flavor cooks off), but gives the rub a surface to grip. Works well.</li>
  <li><strong>Worcestershire sauce:</strong> adds a savory, umami layer under the rub. Slightly wetter than mustard so the rub can shift during application.</li>
  <li><strong>Olive oil or beef tallow:</strong> a thin coat helps rub stick and promotes browning on the surface.</li>
  <li><strong>Nothing:</strong> a dry surface or light dampening with water also holds a rub adequately. Many Texas pitmasters use no binder at all on refrigerator-cold brisket because the surface is naturally slightly tacky.</li>
</ul>
<p>Binders are a convenience, not a requirement. If the rub is sticking to your hand when you press it in, it is sticking to the meat.</p>

<h2>When to apply the rub</h2>
<p>Timing matters more than most people realize. There are two good windows and one bad one:</p>
<ul>
  <li><strong>Right before the cook:</strong> apply the rub and go straight to the smoker. The surface is dry, rub adheres well, and the cook takes over from there. Completely valid and what many competition teams do.</li>
  <li><strong>12-24 hours ahead (overnight):</strong> apply the rub and refrigerate uncovered. The salt draws moisture out, which then slowly reabsorbs back into the meat with the seasoning dissolved in it. The surface dries in the fridge, which helps bark formation. This is a dry brine applied with the full rub. See the <a href="/guides/dry-brine-guide/">dry brine guide</a> for the salt-by-weight approach.</li>
  <li><strong>1-3 hours ahead (the problem window):</strong> salt draws moisture to the surface but does not have enough time to fully reabsorb before the cook begins. The result is a wet exterior that takes longer to form bark and can steam rather than crust. Avoid this window. Either season just before cooking or plan enough lead time for a proper overnight rest.</li>
</ul>

<h2>How much rub to apply</h2>
<p>Apply the rub generously but not so heavily that you cannot see the meat underneath. Press it in firmly on all surfaces, including the sides and the fat cap. After applying, you should see the texture of both the meat and the rub, not a thick caked layer. A thin, even coat beats a thick dumped-on layer every time. The rub is a seasoning layer, not armor.</p>

<h2>How bark actually forms</h2>
<p>Bark is the dark, crackling crust that forms on the outside of a smoked brisket, and it is the most misunderstood part of the cook. It is not char, and it is not a dry crust from being overcooked. Bark forms through two connected processes:</p>
<ol>
  <li><strong>The Maillard reaction:</strong> proteins and sugars on the surface of the meat react with heat to create dark, complex flavors. This is the same reaction responsible for a good sear on a steak.</li>
  <li><strong>Dehydration and smoke adhesion:</strong> as the surface dries, smoke particles and the rub components bind into a concentrated layer. Coarse pepper and salt create the physical surface texture that makes this possible.</li>
</ol>
<p>A wet surface, frequent lid opening, early wrapping, and low pit heat can soften bark. Water pans and humidity behave differently across cooker designs, so follow the manufacturer's required configuration rather than removing or bypassing equipment.</p>
<p>Once you have your rub dialed in, log it in your <a href="/log/">cook log</a> with exact amounts. "Salt and pepper, roughly equal" is not a recipe you can reproduce. "4 tbsp pepper, 4 tbsp kosher salt, 1 tbsp garlic powder, 1 tbsp paprika" is.</p>
`,
    faqs: [
      {
        q: "What is the best rub for brisket?",
        a: "A 1:1 ratio of coarse kosher salt and coarsely ground black pepper is the Central Texas standard and the foundation of every serious brisket rub. The coarse grind creates surface texture that smoke adheres to and builds real bark. Start here before adding anything else.",
      },
      {
        q: "Do I need to use a binder on brisket before applying the rub?",
        a: "No, but it helps. Binders like yellow mustard, Worcestershire sauce, or a thin coat of oil give the rub a surface to grip. Yellow mustard is the most popular because its flavor cooks off completely. A refrigerator-cold brisket has a naturally tacky surface and often holds a rub without any binder.",
      },
      {
        q: "How far in advance should I apply brisket rub?",
        a: "Apply the rub either right before the cook or 12-24 hours ahead and refrigerate uncovered. Avoid the 1-3 hour window: salt draws moisture to the surface but does not have enough time to reabsorb, leaving you with a wet exterior that delays bark formation.",
      },
      {
        q: "Why does the pepper grind matter for brisket rub?",
        a: "Coarse pepper creates surface texture that smoke particles physically adhere to during the long cook, which is how bark forms. Fine-ground pepper sits like a powder on the surface and can actually impede bark formation. Use 16-mesh coarsely ground pepper or crack whole peppercorns yourself.",
      },
      {
        q: "How do you get a good bark on brisket?",
        a: "Bark forms through the Maillard reaction and smoke adhesion on a dry, textured surface. The keys: use a coarse salt-and-pepper rub, keep the pit temperature in the 250-275°F range, minimize lid opening and spritzing in the first several hours, and do not wrap until the bark looks fully set and dark. Early wrapping before bark develops is the most common reason for pale, soft bark.",
      },
      {
        q: "Can I add sugar to a brisket rub?",
        a: "Yes, but use it sparingly. A small amount of brown sugar adds sweetness and helps the bark darken. Too much sugar on a 12+ hour low-and-slow cook can burn and turn bitter before the brisket is done. If you want sweetness, keep the sugar component at 10-15% of the total rub by volume at most.",
      },
    ],
  },

  {
    slug: "how-to-smoke-a-turkey",
    category: "poultry",
    title: "How to Smoke a Turkey: USDA Limits, Timing, and Temperature Checks",
    description:
      "USDA-aligned guide to smoking a fully thawed, unstuffed 8-12 lb turkey at 225-300°F, with the required pan setup and three-location checks.",
    updated: "2026-08-03",
    readMins: 8,
    tool: "doneness-temps",
    excerpt:
      "Use a fully thawed, unstuffed 8-12 lb turkey. Maintain a 225-300°F smoker, follow its required pan configuration, and verify 165°F in the thickest breast and innermost thigh and wing.",
    answer:
      "USDA smoking guidance covers a fully thawed, unstuffed 8-12 pound turkey in a smoker held at 225-300°F, with roughly 20-30 minutes per pound only for planning. On a charcoal smoker designed with separate charcoal and liquid pans, fill the built-in liquid pan and replenish it as needed. For gas or electric smokers, use only the setup specified by the manufacturer. Verify 165°F with a food thermometer in the thickest breast and innermost thigh and wing without touching bone.",
    body: `
<p>Smoked-turkey texture varies with surface moisture, pit temperature, airflow, bird shape, and the individual cooker. Use the USDA smoking limits and thermometer checks for safety, then treat skin texture as a separate culinary outcome.</p>

<h2>USDA limits and the skin-quality tradeoff</h2>
<p>USDA’s turkey smoking table covers a <strong>fully thawed, unstuffed bird weighing 8-12 pounds</strong> in a smoker maintained between <strong>225°F and 300°F</strong>. Within that range, the upper end generally renders skin better. Keep safety requirements separate from culinary preference:</p>
<ul>
  <li><strong>Food safety.</strong> Stay within 225-300°F, use an 8-12 pound bird, thaw it completely, do not stuff it, and verify 165°F in three locations.</li>
  <li><strong>Smoker configuration.</strong> USDA directs users of charcoal smokers with separate charcoal and liquid pans to fill the built-in liquid pan and replenish it as needed. Gas and electric smoker setups vary; follow the manufacturer’s pan, operating, placement, and supervision instructions rather than adding or removing a pan.</li>
  <li><strong>Skin quality.</strong> A pit near 300°F usually renders skin better than the bottom of the approved range. That is a texture preference, not a different safety standard.</li>
</ul>
<p>For a bird outside the 8-12 pound range, use another USDA-approved cooking method rather than extrapolating this smoking table.</p>

<h2>Whole bird vs. spatchcock</h2>
<p>Spatchcocking removes the backbone and flattens the turkey. It is an optional preparation that changes the bird’s shape and may change cooking time and skin exposure:</p>
<ul>
  <li>A flatter bird may cook faster, so begin thermometer checks earlier rather than applying a fixed percentage.</li>
  <li>Bringing the breast and thigh closer to the same height can support more even heating, although all three required locations still need separate checks.</li>
  <li>More skin can face the heat, which may improve browning when surface moisture and cooker conditions cooperate.</li>
  <li>The lower profile may fit some smoker grates more easily.</li>
</ul>
<p>A spatchcocked bird has a different presentation and timing profile from an intact bird. Choose the shape that fits the cooker, recipe, and presentation you want.</p>
<p><strong>How to spatchcock a turkey:</strong> place the bird breast-side down. Use heavy-duty kitchen shears to cut along both sides of the backbone and remove it. Flip breast-side up and press firmly down on the breastbone until it cracks flat. Tuck the wingtips behind the breast. Done.</p>

<h2>Brine: dry vs. wet</h2>
<p>Dry or wet brining can change seasoning, surface moisture, and storage needs. Both are optional; choose a tested recipe that fits your refrigerator space and skin-texture goal.</p>

<table>
<thead>
  <tr>
    <th></th>
    <th>Dry brine</th>
    <th>Wet brine</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>How it works</strong></td>
    <td>Salt draws moisture out then reabsorbs, seasoning the meat; skin dries out</td>
    <td>Bird submerged in salted water, absorbs extra moisture throughout</td>
  </tr>
  <tr>
    <td><strong>Salt amount</strong></td>
    <td>About 1 tablespoon kosher salt per 5 lbs of turkey</td>
    <td>1 cup kosher salt per gallon of water, plus aromatics</td>
  </tr>
  <tr>
    <td><strong>Time needed</strong></td>
    <td>24-48 hours uncovered on a rack in the fridge</td>
    <td>1 hour per pound, submerged in brine under refrigeration at 40°F or colder</td>
  </tr>
  <tr>
    <td><strong>Skin result</strong></td>
    <td>Drier skin that renders and crisps better on the smoker</td>
    <td>Wetter skin that is harder to crisp; better for roasting than smoking</td>
  </tr>
  <tr>
    <td><strong>Flavor</strong></td>
    <td>Concentrates and amplifies natural turkey flavor</td>
    <td>Can dilute flavor slightly; good for adding aromatics (citrus, herbs, garlic)</td>
  </tr>
  <tr>
    <td><strong>Best for</strong></td>
    <td>Smoking (recommended)</td>
    <td>Roasting or smoking when you want maximum moisture insurance</td>
  </tr>
</tbody>
</table>

<p>If you wet brine, keep the turkey fully submerged in a covered, food-safe container under refrigeration at <strong>40°F or colder throughout</strong>. Store it on a low shelf below ready-to-eat food and contain any raw-poultry drips. Discard the used brine; do not reuse it. Pat the bird dry with disposable paper towels rather than rinsing it, then clean and sanitize hands, tools, the container, and contact surfaces.</p>
<p><strong>For smoking, dry brine is the better choice.</strong> The drier skin that results from 24-48 hours uncovered in the fridge is what makes the difference between rubbery and crispy. If you wet brine, pat the bird completely dry and let it air-dry uncovered in the fridge for at least 4 hours before smoking.</p>

<h2>Seasoning</h2>
<p>After dry brining, apply a rub or seasoning just before the bird goes on the smoker. Keep it simple: black pepper, garlic powder, onion powder, and smoked paprika work well. Softened herb butter rubbed under the skin directly over the breast adds flavor and helps keep the white meat moist. Apply a thin coat of oil or butter over the skin itself for color and browning. Do not add more salt to the rub if you have already dry brined; the bird is seasoned.</p>

<h2>Wood for turkey</h2>
<p>Turkey is a mild-flavored bird. Use light woods that add a subtle background smoke rather than competing with the flavor of the meat:</p>
<ul>
  <li><strong>Apple:</strong> mild, sweet, almost impossible to overdo. The safest choice for a large bird on a long cook.</li>
  <li><strong>Cherry:</strong> slightly sweet with excellent color contribution. Gives the skin a beautiful mahogany tone.</li>
  <li><strong>Pecan:</strong> nutty and mild. Adds a pleasant richness without overpowering.</li>
  <li><strong>Maple:</strong> lightly sweet and clean-burning.</li>
</ul>
<p>Use two or three chunks of wood at the start of the cook. A large turkey on a 3-4 hour cook does not need constant heavy smoke. The goal is a background note, not a smoke-forward result that overwhelms the bird. Use the <a href="/tools/wood-pairing/">Wood Pairing Finder</a> for reference.</p>

<h2>Pit temperature and planning times</h2>
<p>Maintain the smoker between <strong>225°F and 300°F</strong>. USDA’s planning range is about <strong>20-30 minutes per pound</strong>; temperature checks, not the clock, determine when the bird is ready.</p>
<p><strong>Use the correct pan configuration for the appliance.</strong> A charcoal smoker with separate charcoal and liquid pans should have its built-in liquid pan filled with water, wine, apple juice, or another suitable liquid and replenished as needed. For gas or electric smokers, follow the manual’s required pan arrangement; do not retrofit a pan or remove a required component. Follow the manual’s operating and active-supervision instructions throughout the cook.</p>

<table>
<thead><tr><th>Fully thawed, unstuffed bird</th><th>USDA planning range</th></tr></thead>
<tbody>
  <tr><td>8 lb</td><td>About 2 hr 40 min to 4 hr</td></tr>
  <tr><td>10 lb</td><td>About 3 hr 20 min to 5 hr</td></tr>
  <tr><td>12 lb</td><td>About 4-6 hr</td></tr>
</tbody>
</table>

<p>These are estimates. Check all three required locations near the early end of the range and continue cooking until each reaches 165°F. Use the <a href="/tools/smoke-time/">Smoke Time Calculator</a> only to plan a start time.</p>

<h2>Where to probe and when to pull</h2>
<p>The USDA requires all poultry to reach a safe minimum internal temperature of <strong>165°F</strong>, checked in three locations (source: USDA Food Safety and Inspection Service, turkey-basics-safe-cooking):</p>
<ol>
  <li><strong>Innermost part of the thigh.</strong> Keep the thermometer away from bone and verify 165°F independently at this location.</li>
  <li><strong>Thickest part of the breast.</strong> Verify 165°F directly. Do not infer the breast temperature from a thigh reading.</li>
  <li><strong>Innermost part of the wing.</strong> Verify 165°F independently at this third required location.</li>
</ol>
<p>Check all three locations before removing the bird: 165°F in the thickest breast and innermost thigh and wing is the required minimum. A higher culinary preference may vary by cook, but it is not required for food safety. Use the <a href="/tools/doneness-temps/">doneness temperature chart</a> for the supported foods.</p>

<h2>Rest and carve</h2>
<p>Rest a smoked turkey for <strong>20-30 minutes</strong> before carving. Tent loosely with foil or leave uncovered on a cutting board. A long rest will soften the skin, so do not push it much past 30 minutes if the skin matters to you.</p>
<p>Carve by removing the legs and thighs first at the joint, then the breast in whole lobes away from the breastbone, then the wings. Slicing the breast off the bone and then cutting across the grain gives you clean, moist slices rather than ragged pieces.</p>

<h2>Simple start-to-finish game plan</h2>
<ol>
  <li><strong>48 hours before:</strong> dry brine on a rack over a rimmed pan at 40°F or colder, on a low shelf below ready-to-eat food. Contain drips and sanitize raw-poultry contact surfaces.</li>
  <li><strong>Day of cook:</strong> confirm the unstuffed bird is fully thawed and weighs 8-12 pounds. Keep it refrigerated until final prep.</li>
  <li>Set the pit within 225-300°F. For a charcoal smoker with separate pans, fill the built-in liquid pan and replenish it as needed. For gas or electric smokers, use only the manufacturer-specified pan configuration. Follow all operating and active-supervision instructions.</li>
  <li>Place the bird on the smoker. Insert a leave-in probe into the innermost thigh area without touching bone.</li>
  <li>Do not spritz or baste the bird. Let the heat do the work.</li>
  <li>Check temperature at the low end of the estimated range. Remove the turkey only after the thickest breast and innermost thigh and wing each verify 165°F.</li>
  <li>Rest 20-30 minutes, then carve.</li>
  <li>Log the cook in your <a href="/log/">cook log</a>: bird weight, brine method, pit temp, finish time, and skin quality rating. Turkey is often a once-a-year cook, so notes from this year set you up for next year.</li>
</ol>

<p class="text-sm text-muted"><em>USDA’s smoking table covers a fully thawed, unstuffed 8-12 pound turkey, a smoker held at 225-300°F, the cooker’s specified drip/liquid-pan setup, and 165°F in the innermost thigh, thickest breast, and innermost wing. See the current <a href="https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/poultry/turkey-alternate-routes-table">USDA turkey smoking table</a>.</em></p>
`,
    faqs: [
      {
        q: "What temperature should I smoke a turkey at?",
        a: "USDA guidance covers a fully thawed, unstuffed 8-12 pound turkey in a smoker maintained between 225°F and 300°F. Follow the manufacturer’s operating, pan-configuration, and active-supervision instructions.",
      },
      {
        q: "How long does it take to smoke a turkey?",
        a: "USDA’s smoking table estimates about 20-30 minutes per pound. A fully thawed, unstuffed 12-pound bird therefore takes roughly 4-6 hours. Verify 165°F in the breast, thigh, and wing rather than relying on time.",
      },
      {
        q: "What is the safe internal temperature for smoked turkey?",
        a: "Verify 165°F in the innermost thigh away from bone, the thickest breast, and the innermost wing. That three-location result is the required USDA minimum. A higher culinary preference may vary, but it is not required for food safety.",
      },
      {
        q: "Should I dry brine or wet brine a turkey before smoking?",
        a: "Dry brining is the better choice for smoking. Salt the bird at about 1 tablespoon of kosher salt per 5 pounds, then refrigerate uncovered on a rack for 24-48 hours. Wet brining works but leaves the skin wetter. Keep a wet-brining turkey submerged in a covered, food-safe container under refrigeration at 40°F or colder throughout, discard the used brine, then pat the bird dry without rinsing and air-dry it uncovered in the refrigerator for at least 4 hours before smoking.",
      },
      {
        q: "Why is my smoked turkey skin rubbery?",
        a: "Wet skin and lower pit temperatures can reduce rendering. Keep the bird refrigerated while drying it, then use a smoker temperature near the upper end of USDA’s 225-300°F range if your equipment supports it.",
      },
      {
        q: "Does a turkey smoker need a liquid or drip pan?",
        a: "For a charcoal smoker designed with separate charcoal and liquid pans, USDA says to fill the built-in liquid pan and replenish it as needed. Gas and electric smokers vary, so use only the pan configuration in the manufacturer’s manual; do not add or remove a component on your own.",
      },
      {
        q: "Should I spatchcock a turkey for smoking?",
        a: "Spatchcocking is optional. Flattening the bird may shorten cooking time and expose more skin to heat, so begin checking earlier, but do not assume a fixed percentage. Verify 165°F separately in the thickest breast and innermost thigh and wing. Choose the shape that fits your cooker, recipe, and presentation.",
      },
    ],
    howToTime: "PT4H",
    steps: [
      { name: "Dry brine with drip containment", text: "At 40°F or colder, place the salted turkey on a rack over a rimmed pan on a low shelf below ready-to-eat food. Contain drips and sanitize raw-poultry contact surfaces." },
      { name: "Confirm the bird meets the smoking limits", text: "Use a fully thawed, unstuffed turkey weighing 8-12 pounds. Keep it refrigerated until final prep." },
      { name: "Set up smoker at 225-300°F", text: "For a charcoal smoker with separate pans, fill the built-in liquid pan and replenish it as needed. For gas or electric smokers, use only the manufacturer-specified pan configuration. Maintain 225-300°F and actively supervise according to the manual." },
      { name: "Smoke and do not baste", text: "Place the bird on the smoker with a leave-in probe in the innermost thigh area without touching bone. Do not spritz or baste; let the heat do the work." },
      { name: "Verify 165°F in all three spots", text: "Remove the turkey only after the thickest breast and innermost thigh and wing each verify 165°F without touching bone." },
      { name: "Rest and carve", text: "Rest 20-30 minutes tented loosely with foil. Carve by removing legs and thighs, then breast lobes, then wings." },
    ],
  },

  {
    slug: "how-to-smoke-a-brisket",
    category: "brisket",
    title: "How to Smoke a Brisket: Full Guide from Trim to Slice",
    description:
      "The complete guide to smoking a brisket: choosing flat vs packer, trimming, rub, pit temperature, cook times, the stall, wrapping, probe placement, when it is done, how long to rest, and how to slice.",
    updated: "2026-08-03",
    readMins: 10,
    tool: "smoke-time",
    excerpt:
      "Use time only for planning. Verify whole-beef 145°F plus a 3-minute rest, then use 200-205°F only as a checkpoint and finish by probe feel in the flat.",
    answer:
      "Smoke a packer brisket at 250-275°F. Plan on roughly 1 to 1.25 hours per pound at 225°F, or 45-55 minutes per pound at 275°F. The brisket is done when a probe slides into the thickest part of the flat with no resistance, typically around 200-205°F internal temperature. The USDA minimum for whole-cut beef is 145°F with a 3-minute rest, but brisket often needs to reach 200-205°F for the collagen to convert and the meat to become tender. Wrap once the bark is fully set, then rest before slicing and monitor any long hot hold at 140°F or warmer.",
    body: `
<p>A whole brisket is the benchmark cook in American BBQ. It takes patience, a good thermometer, and a solid grasp of what is actually happening inside the meat. Get those three things right and brisket is less difficult than its reputation suggests. Get them wrong and no amount of luck will rescue it.</p>

<h2>Choosing your brisket</h2>
<p>A packer brisket is a whole untrimmed brisket, typically 12-18 pounds, and it includes both muscles:</p>

<table>
<thead>
  <tr>
    <th>Muscle</th>
    <th>Also called</th>
    <th>Location</th>
    <th>Fat content</th>
    <th>How it eats</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Flat</strong></td>
    <td>Deckle-off, first cut</td>
    <td>Long, thin, rectangular end</td>
    <td>Lean</td>
    <td>Sliced thin for sandwiches</td>
  </tr>
  <tr>
    <td><strong>Point</strong></td>
    <td>Deckle, second cut, nose</td>
    <td>Thick, irregular end on top of flat</td>
    <td>Well-marbled</td>
    <td>Richer flavor; cubed for burnt ends</td>
  </tr>
</tbody>
</table>

<p>A full packer gives you both the lean flat and richer point in one cook, while a flat alone is leaner and has less margin against overcooking. The point and fat cap do not baste liquid through the flat. Moisture depends more on the flat’s marbling, thickness, cooking conditions, finish point, and hold. Look for visible marbling through the flat, a fat cap that is not excessively thick, and an even flat that is not paper-thin at one end.</p>

<h2>Trimming</h2>
<p>Trim the brisket cold, straight from the refrigerator. Cold fat is firmer and much easier to control with a knife. Trim with purpose:</p>
<ul>
  <li><strong>Fat cap:</strong> trim to approximately 1/4 inch. Thicker than that and the fat acts as a heat shield that prevents the rub from reaching the meat and slows bark formation. Thinner than that and the flat loses the protection it needs on a long cook.</li>
  <li><strong>Hard white fat:</strong> the dense, waxy fat layer between the flat and the point does not render during the cook. Trim most of it away where obvious, but do not dig so deep that you separate the flat from the point entirely.</li>
  <li><strong>Thin edge flaps:</strong> any thin uneven flaps of meat on the flat will overcook long before the rest of the brisket is done. Trim them away or fold and secure with a toothpick so they do not become dry scraps.</li>
</ul>
<p>A well-trimmed brisket has as uniform a profile as possible so heat reaches all parts at similar rates.</p>

<h2>Seasoning</h2>
<p>The full case for the salt-and-pepper rub, grind selection, binder options, and application timing is in the <a href="/guides/brisket-rub-guide/">Brisket Rub Guide</a>. In brief: equal parts coarse kosher salt and coarsely ground black pepper applied generously on all surfaces, either right before the cook or 12-24 hours ahead. Avoid the 1-3 hour window where salt draws moisture out without fully reabsorbing.</p>

<h2>Pit temperature and cook times</h2>
<p>Brisket is smoked at 225-275°F. Lower temperatures allow more time for smoke penetration and a longer smoke ring. Higher temperatures push through the stall faster with nearly identical results for most home cooks.</p>

<table>
<thead>
  <tr>
    <th>Pit temp</th>
    <th>Time per pound</th>
    <th>12 lb brisket</th>
    <th>15 lb brisket</th>
    <th>18 lb brisket</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>225°F</td>
    <td>1.0-1.25 hrs/lb</td>
    <td>12-15 hrs</td>
    <td>15-19 hrs</td>
    <td>18-22 hrs</td>
  </tr>
  <tr>
    <td>250°F</td>
    <td>0.9-1.1 hrs/lb</td>
    <td>11-13 hrs</td>
    <td>13-17 hrs</td>
    <td>16-20 hrs</td>
  </tr>
  <tr>
    <td>275°F</td>
    <td>0.75-0.9 hrs/lb</td>
    <td>9-11 hrs</td>
    <td>11-14 hrs</td>
    <td>13-16 hrs</td>
  </tr>
</tbody>
</table>

<p>These are planning windows, not guarantees. The same 15-pound brisket can take 14 hours or 18 hours at the same pit temperature depending on the individual animal, your smoker's true temperature, how long the stall lasts, and whether you wrap. Start earlier than you think you need to. If it finishes early, monitor a controlled hot hold with a food thermometer and keep the brisket at 140°F or warmer. Use the <a href="/tools/smoke-time/">Smoke Time Calculator</a> to work backward from your serving time.</p>

<h2>Wood for brisket</h2>
<p>Beef is a bold-flavored meat that handles strong wood well. Post oak is the Texas standard: clean-burning, long-lasting, and what most serious brisket cooks use. White oak is equally valid. Hickory adds a more pungent, savory punch. Pecan gives a milder, nuttier note. Avoid fruit woods as the only wood on a brisket cook; they are too mild for the bold flavor of beef over a 12+ hour cook, though a small amount of cherry blended with oak adds pleasant color. Use the <a href="/tools/wood-pairing/">Wood Pairing Finder</a> for specific pairings.</p>

<h2>The stall</h2>
<p>Somewhere between 160-170°F, the brisket will stop climbing in temperature. This stall can last 2-5 hours. The full explanation is in <a href="/guides/the-brisket-stall/">The Brisket Stall</a>. The short version: evaporative cooling is counteracting your smoker. Do not raise the pit temperature. Do not open the lid repeatedly. Decide whether you want to wrap. The stall ends on its own when the surface moisture is depleted.</p>

<h2>Wrapping options</h2>
<p>Wrapping is the most discussed decision in a brisket cook. The full breakdown of each option with trade-offs is at <a href="/guides/how-to-wrap-brisket/">How to Wrap Brisket</a>. In brief:</p>
<ul>
  <li><strong>Pink butcher paper:</strong> breathable, softens the bark less than foil, pushes through the stall faster than no wrap. The best balance for most home cooks.</li>
  <li><strong>Aluminum foil (Texas Crutch):</strong> fastest through the stall, retains the most moisture, softens bark the most.</li>
  <li><strong>No wrap:</strong> hardest, darkest bark possible; longest cook; higher risk of the flat drying out.</li>
</ul>
<p>Wrap when the bark is fully set: dark, dry to the touch, and firm. That is typically around 165-170°F, but look at the bark, not just the thermometer. Wrapping too early, before the bark has formed, will prevent the bark from ever fully forming.</p>

<h2>Where to probe</h2>
<p>Insert the probe into the thickest part of the flat, avoiding fat seams and pockets. The flat is the slowest-cooking muscle and the most prone to drying out. When the flat is probe-tender, the point is done. Do not probe only the point; the higher fat content there makes it pass the probe test well before the flat is ready.</p>

<h2>How to tell when brisket is done</h2>
<p>The USDA safe minimum for whole cuts of beef is <strong>145°F</strong> with a 3-minute rest (source: USDA Food Safety and Inspection Service). Brisket is cooked far past that for texture. The collagen in the connective tissue converts to gelatin in the 195-205°F range over time, which is what creates the soft, yielding texture that makes brisket worth the effort. Safe is 145°F. Tender is 200-205°F.</p>
<p>Temperature is a starting point, not a finish line. The real test is the probe. When it slides into the thickest part of the flat with no resistance, like pushing into warm butter, the brisket is done. Start checking at 195°F. Many briskets need to reach 200-205°F before they pass this test. Some need to go slightly higher. Let the feel of the probe tell you, not only the number on the screen.</p>

<h2>Rest</h2>
<p>Rest the brisket before slicing. For a longer hold, keep it wrapped in a controlled warmer or insulated cooler and verify with a food thermometer that it remains at 140°F or warmer. The internal temperature will continue to rise slightly on the pull, then slowly fall. Resting gives the juices time to settle and can improve slicing, but an insulated cooler alone does not establish a safe holding temperature.</p>

<h2>Slicing</h2>
<p>Always slice across the grain. The flat and the point have grain running in nearly perpendicular directions, which means the slicing direction must change when you transition between them.</p>
<ol>
  <li>Place the rested brisket fat-side down on the cutting board.</li>
  <li>Slice the flat first, cutting across its grain into slices about 1/4 inch thick.</li>
  <li>When you reach the point, either separate it to make burnt ends or rotate 90 degrees and continue slicing across the point grain.</li>
  <li>For burnt ends: cube the point into 1-inch pieces, toss in sauce, and return to a smoker or covered pan at 275°F for 45-60 minutes until caramelized and sticky.</li>
</ol>
<p>Slice only what you are serving immediately. Unsliced brisket holds far better than sliced. Log the full cook in your <a href="/log/">cook log</a>: weight and source, pit temp, stall duration and when it started, finish temp, probe feel, rest time, and how it ate. No two briskets are exactly the same and your notes from this cook directly inform the next.</p>

<p class="text-sm text-muted"><em>The USDA safe minimum internal temperature for whole cuts of beef is 145°F with a 3-minute rest. The 195-205°F targets listed above are for collagen conversion and texture, not food safety. Source: USDA Food Safety and Inspection Service, fsis.usda.gov.</em></p>
`,
    faqs: [
      {
        q: "How long does it take to smoke a brisket?",
        a: "At 225-250°F, use 1 to 1.5 hours per pound only as a planning range. A 12-pound brisket may need roughly 12-18 hours before the rest or hot hold. Thickness, actual grate temperature, airflow, wrapping, and the stall can move the finish.",
      },
      {
        q: "What temperature should I smoke a brisket at?",
        a: "Follow the temperature range approved by the cooker manual and the recipe you are using. Pit temperature affects timing and texture, but no setting guarantees a result. Verify the USDA safety endpoint, then use probe feel in several parts of the flat for texture.",
      },
      {
        q: "What temperature is brisket done?",
        a: "The USDA minimum for whole cuts of beef is 145°F with a 3-minute rest, but brisket is not done at 145°F in the BBQ sense. It often needs to reach 200-205°F for the collagen to convert to gelatin and the meat to become tender. More importantly, the probe must slide into the thickest part of the flat with no resistance. Temperature is a guide; the probe feel is the real test.",
      },
      {
        q: "Should I wrap my brisket?",
        a: "Yes for most home cooks. Wrapping helps push through the stall and retains moisture. Pink butcher paper is the best balance: it is breathable so the bark softens less than under foil, while still helping through the stall. Wrap when the bark is fully set, dark, and dry to the touch, typically around 165-170°F. See the full comparison in the Brisket Wrapping Guide.",
      },
      {
        q: "How long should brisket rest after smoking?",
        a: "Rest the brisket before slicing. For a longer hold, keep it wrapped in a controlled warmer or insulated cooler and use a food thermometer to verify it remains at 140°F or warmer. A cooler alone does not guarantee a safe holding temperature.",
      },
      {
        q: "What is the difference between brisket flat and point?",
        a: "The flat is the long, lean, rectangular muscle. It slices well and is what most people picture when they think of brisket slices. The point sits on top of the flat and is much fattier and more irregular. It is richer in flavor and is the cut used for burnt ends. A whole packer brisket includes both; a pre-trimmed flat does not include the point.",
      },
      {
        q: "How do I get a good bark on brisket?",
        a: "Bark forms through the Maillard reaction on a dry, textured surface. Use a coarse salt-and-pepper rub, smoke at 250-275°F, and minimize opening the smoker in the early hours. Do not wrap until the bark is visibly dark, dry, and firm. Wrapping too early permanently prevents the bark from fully forming.",
      },
    ],
    howToTime: "PT14H",
    steps: [
      { name: "Choose and trim the brisket", text: "Select a packer brisket with visible flat marbling and a fat cap that is not excessively thick. Trim fat cap to 1/4 inch cold, remove hard white fat between flat and point, and square off thin flap edges." },
      { name: "Season and dry brine overnight", text: "Apply a coarse salt-and-pepper rub generously on all surfaces. Refrigerate uncovered overnight for the best bark development." },
      { name: "Set up smoker at 225-275°F", text: "Fire the smoker to 225-275°F with post oak, white oak, or hickory. Place the brisket fat-side up or down depending on your smoker's heat source." },
      { name: "Smoke until bark sets", text: "Smoke unwrapped until the bark is dark, dry, and firm to the touch, typically around 165-170°F internal. Do not open the smoker frequently in the early hours." },
      { name: "Wrap and push through the stall", text: "Wrap in pink butcher paper (preferred) or foil and return to the smoker. The internal temperature will push through the stall faster." },
      { name: "Test for probe-tenderness", text: "Start probing the flat at 195°F. The brisket is done when the probe slides into the thickest part of the flat with no resistance, typically 200-205°F." },
      { name: "Rest with temperature control", text: "Rest before slicing. For a longer hold, use controlled hot-holding equipment and verify with a food thermometer that the brisket remains at 140°F or warmer." },
      { name: "Slice across the grain", text: "Slice the flat into 1/4-inch slices across the grain. Rotate when you reach the point and slice across the point grain, or cube the point for burnt ends." },
    ],
  },

  {
    slug: "smoked-chicken-wings",
    category: "poultry",
    title: "Smoked Chicken Wings: How to Improve Crispy Skin",
    description:
      "How to smoke chicken wings with crispy rendered skin: the baking powder method, single-stage vs two-stage cooking, wood choice, sauce timing, and why temperature matters more than technique.",
    updated: "2026-08-03",
    readMins: 5,
    tool: "doneness-temps",
    excerpt:
      "Higher heat and a dry surface can improve smoked chicken-wing skin. If the cooker manual permits it, use 375-400°F for a single-stage cook or smoke at 250°F and finish near 400°F. A small amount of baking powder in the rub is optional; oil is also optional and should be used sparingly if chosen.",
    answer:
      "Smoke chicken wings at 375-400°F for 45-60 minutes, or use a two-stage method: 250°F for 45-60 minutes to build smoke flavor, then 400°F for 20-25 minutes to crisp the skin. Pat wings completely dry before seasoning and add 1 teaspoon of aluminum-free baking powder per pound of wings to your rub. The USDA safe minimum for all poultry is 165°F. Do not sauce wings until the last 10-15 minutes or the raw sauce will burn.",
    body: `
<p>Smoked chicken wings are one of the most popular cooks on a backyard smoker, and they are completely different from smoking a whole chicken. The goal is not just smoke penetration but crispy, rendered skin that holds up to a sauce or stands on its own. That requires heat, dry prep, and knowing which method fits your setup.</p>

<h2>The skin problem and how to solve it</h2>
<p>Chicken skin is primarily fat. For it to crisp, that fat must render, and rendering requires heat. At 225°F, the fat stays soft and the skin turns pale and rubbery no matter how long the wings cook. Higher temperature is the first and most important fix.</p>
<p>Pat wings dry with disposable paper towels. If refrigerating them uncovered, use a rack over a rimmed pan at 40°F or colder on a low shelf below ready-to-eat food. Contain every drip, discard the towels, and clean and sanitize hands, utensils, counters, and refrigerator surfaces that contact raw poultry.</p>

<h2>The baking powder method</h2>
<p>Adding a small amount of aluminum-free baking powder to your wing rub is one of the most effective home techniques for crispy skin. The baking powder raises the pH of the surface slightly, accelerating the Maillard reaction and helping the skin dry out faster. Use <strong>1 teaspoon of baking powder per pound of wings</strong>, mixed into your dry rub before applying.</p>
<p>Two important notes:</p>
<ul>
  <li>Use <strong>aluminum-free baking powder only</strong>. Standard baking powder with aluminum can leave a metallic taste on the skin.</li>
  <li>Do not confuse baking powder with baking soda. Baking soda is much more alkaline and will make the skin taste soapy. The correct ingredient is baking powder.</li>
</ul>

<h2>Two methods compared</h2>

<table>
<thead>
  <tr>
    <th></th>
    <th>Single-stage high heat</th>
    <th>Two-stage (smoke then sear)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Pit temp</strong></td>
    <td>375-400°F throughout</td>
    <td>250°F for smoke, then 400°F+ to finish</td>
  </tr>
  <tr>
    <td><strong>Total time</strong></td>
    <td>45-60 minutes</td>
    <td>~60 min smoke + ~20-25 min high heat</td>
  </tr>
  <tr>
    <td><strong>Smoke flavor</strong></td>
    <td>Lighter (less time for smoke to develop)</td>
    <td>Deeper smoke penetration in the low phase</td>
  </tr>
  <tr>
    <td><strong>Skin quality</strong></td>
    <td>Crispy</td>
    <td>Very crispy; excellent color</td>
  </tr>
  <tr>
    <td><strong>Best for</strong></td>
    <td>Weeknight cook, simpler setup</td>
    <td>Best overall result; parties</td>
  </tr>
</tbody>
</table>

<p>For the two-stage method: smoke at 250°F for 45-60 minutes with the wings fully cooked through but skin still soft, then crank the pit to 400°F or transfer to a hot charcoal grill and finish 10-15 minutes per side. The USDA requires all poultry to reach <strong>165°F</strong> internal temperature. After both stages at these temperatures, the wings are well past safe, but verify with a probe in the thickest part of the drumette to confirm before serving.</p>

<h2>Wood for wings</h2>
<p>Wings are small and cook fast. Use mild woods that add flavor without overpowering a short cook. Cherry is the top choice: slightly sweet, adds a mahogany color to the skin, and pairs naturally with poultry. Apple is similarly mild. Pecan adds a quiet nuttiness. Avoid hickory or mesquite on wings: the cook time is too short to mellow their aggressiveness, and the result can be bitter. One or two small chunks is enough for a batch of wings. Use the <a href="/tools/wood-pairing/">Wood Pairing Finder</a> for more options.</p>

<h2>Seasoning and sauce timing</h2>
<p>Apply dry rub before the cook. If you want sauced wings, brush the sauce on in the last 10-15 minutes of high-heat cooking and let it caramelize. Raw sauce applied from the start of a cook will burn before the wings are done.</p>
<p>A reliable wing rub: brown sugar, smoked paprika, garlic powder, onion powder, black pepper, cayenne, salt, and your baking powder. The sugar promotes browning; the paprika adds color; the cayenne level is your preference. Mix the rub thoroughly so the baking powder is evenly distributed, not clumped.</p>
<p>Consider keeping a plain batch with rub and no sauce so guests can compare the unsauced skin and smoke flavor.</p>

<h2>Doneness and food safety</h2>
<p>The USDA safe minimum for all poultry is <strong>165°F</strong> in the thickest part of the meat away from the bone (source: USDA Food Safety and Inspection Service). On a drumette, probe into the thickest section. On a flat, probe between the two bones. There is no higher BBQ target for wings; 165°F is both safe and fully cooked. Pull when the probe hits 165°F, rest two or three minutes, and serve immediately for the crispiest result.</p>
<p>Log the cook in your <a href="/log/">cook log</a>: method, pit temps, baking powder ratio, total time, wood used, and skin quality. Wings are fast and high-iteration; a few sessions of notes will get you dialed in.</p>

<p class="text-sm text-muted"><em>The USDA safe minimum internal temperature for all poultry, including chicken wings, is 165°F measured in the thickest part away from bone. Source: USDA Food Safety and Inspection Service, fsis.usda.gov.</em></p>
`,
    faqs: [
      {
        q: "What temperature do you smoke chicken wings at?",
        a: "375-400°F for a single-stage cook (45-60 min total), or 250°F for the smoke phase followed by 400°F+ to finish for the two-stage method. Do not smoke wings at 225°F: the skin will not render or crisp at that temperature, and you get rubbery pale skin instead.",
      },
      {
        q: "How long do you smoke chicken wings?",
        a: "At 375-400°F, wings take 45-60 minutes. With the two-stage method, 45-60 minutes at 250°F plus 20-25 minutes at 400°F. Always verify with a probe: the USDA safe minimum for poultry is 165°F in the thickest part of the meat away from the bone.",
      },
      {
        q: "How do I get crispy skin on smoked chicken wings?",
        a: "Drying the wings and using a higher temperature approved by the cooker manual can improve skin texture. One teaspoon of aluminum-free baking powder per pound is an optional starting point. Oil is not required; if used, apply only a very light coat because excess surface moisture or fat can slow drying.",
      },
      {
        q: "What does baking powder do for chicken wings?",
        a: "Baking powder raises the pH of the chicken skin slightly, which speeds up the Maillard reaction and helps the skin dry out faster, producing a crisper result. Use aluminum-free baking powder at 1 teaspoon per pound mixed into your rub. Do not use baking soda, which is far more alkaline and will make the skin taste soapy.",
      },
      {
        q: "What wood is best for smoked chicken wings?",
        a: "Cherry is the top choice: mild, slightly sweet, and gives the skin a great mahogany color. Apple is similarly mild. Pecan adds a nutty note. Avoid hickory or mesquite on wings: the short cook time does not mellow aggressive woods, and the result can turn bitter. One or two small chunks is enough for a full batch.",
      },
      {
        q: "Should I sauce wings before or after smoking?",
        a: "After. Apply dry rub before the cook. If you want sauced wings, brush sauce on in the last 10-15 minutes of high-heat cooking and let it caramelize. Raw sauce applied from the start will burn before the wings are done, turning bitter and darkening unevenly.",
      },
    ],
    howToTime: "PT1H15M",
    steps: [
      { name: "Dry and season the wings", text: "Pat wings dry with disposable paper towels. Optionally mix 1 teaspoon of aluminum-free baking powder per pound into the dry rub. Oil is not required; if used, apply only a very light coat." },
      { name: "Set up smoker", text: "Fire the smoker to 375-400°F for a single-stage cook, or 250°F for the smoke phase of a two-stage cook. Use cherry, apple, or pecan wood." },
      { name: "Smoke wings", text: "For single-stage: smoke at 375-400°F for 45-60 minutes total. For two-stage: smoke at 250°F for 45-60 minutes for flavor, then raise to 400°F for 20-25 minutes to crisp." },
      { name: "Sauce in the last 10-15 minutes", text: "If saucing, apply sauce only in the final 10-15 minutes at high heat. Sauce applied earlier will burn and turn bitter." },
      { name: "Pull at 165°F and serve", text: "Pull when wings reach 165°F internal, the USDA safe minimum for all poultry. Serve immediately for the crispiest result." },
    ],
  },

  {
    slug: "how-to-wrap-brisket",
    category: "brisket",
    title: "How to Wrap Brisket: Butcher Paper vs Foil vs No Wrap",
    description:
      "When and how to wrap a brisket during the smoke: what foil, butcher paper, and no wrap each do to the bark, moisture, and cook time, and how to decide which is right for your cook.",
    updated: "2026-08-03",
    readMins: 5,
    tool: null,
    excerpt:
      "Wrap in pink butcher paper once the bark is fully set, usually around 165-170°F. Foil pushes through the stall fastest but softens the bark most. No wrap gives the hardest bark but the longest cook.",
    answer:
      "The three options for wrapping a brisket are foil (Texas Crutch), pink butcher paper, or no wrap. Foil pushes through the stall fastest and retains the most moisture but softens the bark significantly. Pink butcher paper is breathable, softens the bark less than foil, and is the best balance for most home cooks. No wrap produces the hardest bark but the longest cook and the highest risk of the flat drying out. Wrap only when the bark is fully set and dark, typically at 165-170°F. Wrapping too early prevents the bark from ever fully forming.",
    body: `
<p>Wrapping a brisket mid-cook is one of the most consequential decisions you will make on a long smoke. It affects bark texture, moisture level, how long the cook takes, and how the finished brisket eats. Understanding what each option actually does makes the decision straightforward instead of a guess.</p>

<h2>Why wrapping exists: the stall</h2>
<p>Around 160-170°F internal temperature, a brisket stalls. The temperature stops climbing for an extended period because moisture evaporating from the surface cools the meat as fast as the smoker heats it. The full explanation is in <a href="/guides/the-brisket-stall/">The Brisket Stall</a>. On a large packer this stall can last 2-5 hours.</p>
<p>Wrapping traps that moisture instead of letting it evaporate. Without evaporative cooling, the temperature climbs again. This is what is meant by "pushing through the stall." The trade-off is that trapped moisture creates a humid, steamy environment inside the wrap, and steam softens bark.</p>

<h2>The three options compared</h2>

<table>
<thead>
  <tr>
    <th></th>
    <th>Foil (Texas Crutch)</th>
    <th>Pink butcher paper</th>
    <th>No wrap</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Bark</strong></td>
    <td>Softens significantly; surface steams</td>
    <td>Softens slightly; paper breathes</td>
    <td>Hardest, darkest possible</td>
  </tr>
  <tr>
    <td><strong>Stall speed</strong></td>
    <td>Fastest through</td>
    <td>Faster than naked</td>
    <td>Full stall duration</td>
  </tr>
  <tr>
    <td><strong>Moisture retention</strong></td>
    <td>Highest; brisket braises in its own juices</td>
    <td>Good; some escapes through paper</td>
    <td>Lowest; moisture escapes throughout</td>
  </tr>
  <tr>
    <td><strong>Meat texture</strong></td>
    <td>Very tender; point can be pot-roast-like</td>
    <td>Tender with a slightly firmer bite</td>
    <td>Firm exterior; maximum bark contrast</td>
  </tr>
  <tr>
    <td><strong>Total cook time</strong></td>
    <td>Shortest</td>
    <td>Middle</td>
    <td>Longest</td>
  </tr>
  <tr>
    <td><strong>Risk</strong></td>
    <td>Over-steaming if opened; bark never recovers</td>
    <td>Low when wrapped correctly</td>
    <td>Flat drying out if smoker runs hot</td>
  </tr>
</tbody>
</table>

<h2>Foil: the Texas Crutch</h2>
<p>Wrapping in two layers of heavy-duty aluminum foil creates a sealed environment. The brisket essentially braises in its own rendered fat and released juices for the remainder of the cook. The stall is pushed through quickly, moisture is maximized, and the meat comes out very tender. The bark, however, softens considerably from contact with steam. This is not a failure: it is a different result. Many people strongly prefer the texture that foil wrapping produces, especially in the point. It is simply a softer, wetter eat than butcher paper or naked.</p>
<p>Once in foil, do not open the wrap to check or spritz. Every time you open it, steam escapes and moisture is lost. Insert the probe through the foil without opening it, and leave it until probe-tender.</p>

<h2>Pink butcher paper</h2>
<p>Unbleached, unlined butcher paper, sometimes called peach paper, is permeable. Some of the steam generated inside escapes through the paper rather than recirculating onto the meat. The bark softens less than under foil. The stall is pushed through faster than cooking naked. For most home cooks, butcher paper gives the best balance of bark quality and practical time management.</p>
<p><strong>What to buy:</strong> look for food-grade, unwaxed, uncoated butcher paper. Do not use parchment paper, which has a silicone coating and is not the same material. Do not use waxed butcher paper. The paper should be labeled food-safe or be sold specifically for cooking. Pink (unbleached) is the standard; white uncoated food-grade paper also works.</p>
<p>Wrap tightly. Tear off enough paper to completely enclose the brisket with room to fold the edges. Place the brisket fat-side down near one edge, fold the paper over the top, tuck the ends under, and roll into a snug package. Air pockets inside the wrap reduce its effectiveness.</p>

<h2>No wrap</h2>
<p>Smoking the entire brisket unwrapped produces a firm, dark bark because the surface remains exposed to heat and smoke. The trade-off is a longer cook, more monitoring, and a higher risk of drying the flat. Use no-wrap only while following the cooker manufacturer’s operating and active-supervision instructions. Do not plan an unsupervised overnight cook; automated temperature control does not remove fire-safety requirements.</p>

<h2>When to wrap</h2>
<p>Timing is the most important part of this decision. Wrapping too early is the most common and least recoverable mistake. If the bark has not fully formed before you wrap, it will not form afterward. Steam from the wrap prevents any further bark development.</p>
<p>Wrap when the bark is:</p>
<ul>
  <li><strong>Dark.</strong> The surface should be visibly dark brown to almost black in places, not tan or gray.</li>
  <li><strong>Dry to the touch.</strong> The surface should feel firm and dry, not tacky or wet.</li>
  <li><strong>Firm and set.</strong> Press the bark gently; it should not dent in or feel soft.</li>
</ul>
<p>Most briskets are ready to wrap somewhere between <strong>165-175°F</strong> internal temperature, but look at the bark, not the thermometer. A brisket at 170°F with pale, tacky bark needs more time uncovered. A brisket at 160°F with a dark, dry, set bark is ready to wrap. The stall will create pressure to wrap early; resist it.</p>

<h2>Wrapping through the rest</h2>
<p>Keep the brisket wrapped during its rest. For a longer hold, use a controlled warmer or another device designed for hot holding and verify 140°F or warmer with a food thermometer. A cooler can slow heat loss but does not establish a safe temperature. Open the wrap only when you are ready to slice. For more on the full brisket process, see the <a href="/guides/how-to-smoke-a-brisket/">How to Smoke a Brisket</a> guide.</p>
`,
    faqs: [
      {
        q: "Should I wrap my brisket in foil or butcher paper?",
        a: "Butcher paper is the better choice for most home cooks. It is permeable so the bark softens less than under foil, while still helping the brisket push through the stall faster than no wrap. Foil is faster and retains more moisture but softens the bark significantly. Both produce a good result; it comes down to whether you prioritize bark texture or maximum moisture and speed.",
      },
      {
        q: "When should I wrap a brisket?",
        a: "When the bark is fully set: dark, dry to the touch, and firm. That is typically around 165-175°F, but look at the bark, not just the temperature. A brisket with pale or tacky bark at 170°F needs more time unwrapped. Wrapping too early prevents the bark from ever fully forming.",
      },
      {
        q: "What is the Texas Crutch?",
        a: "The Texas Crutch is wrapping a brisket in aluminum foil during the cook to push through the stall. It became popular in competition BBQ where time windows are fixed. Foil creates a sealed, steamy environment that eliminates evaporative cooling and raises the temperature again quickly. It retains the most moisture but softens the bark more than butcher paper.",
      },
      {
        q: "What kind of butcher paper should I use for brisket?",
        a: "Use food-grade, unwaxed, unlined butcher paper, often sold as pink or peach butcher paper. Do not use parchment paper (it has a silicone coating and behaves differently), waxed butcher paper, or any paper with a lining or coating. The paper must be food-safe and heat-resistant. It is sold at restaurant supply stores, BBQ specialty shops, and online.",
      },
      {
        q: "Can I smoke a brisket without wrapping it?",
        a: "Yes. No-wrap brisket produces the hardest, darkest bark. The trade-off is a longer cook, more monitoring required, and higher risk of the flat drying out, especially on a smoker that runs hot or fluctuates. It works best on a well-controlled smoker and when you can be present throughout the cook.",
      },
      {
        q: "Does wrapping brisket ruin the bark?",
        a: "Wrapping in foil softens the bark significantly because of the steam it traps. Wrapping in butcher paper softens it less because the paper is breathable. No wrap gives the best bark but requires the longest cook. Wrapping at the right time, after the bark is already fully set and dark, minimizes the softening effect on both foil and paper.",
      },
    ],
    howToTime: "PT15H",
    steps: [
      { name: "Smoke until bark is fully set", text: "Smoke the brisket unwrapped until the bark is dark, dry to the touch, and firm, typically around 165-175°F internal. Never wrap before the bark has fully formed." },
      { name: "Choose your wrap material", text: "Decide between aluminum foil (fastest through stall, softens bark most), pink butcher paper (best balance, breathable), or no wrap (best bark, longest cook)." },
      { name: "Wrap tightly", text: "Lay out enough paper or foil to completely enclose the brisket. Place fat-side down, fold over the top, tuck ends under, and roll into a tight package." },
      { name: "Continue smoking wrapped", text: "Return the wrapped brisket to the smoker. Insert the probe through the material without opening the wrap. Continue cooking until probe-tender at 200-205°F." },
      { name: "Keep wrapped through a monitored rest", text: "Rest the brisket wrapped. For a longer hold, use controlled hot-holding equipment and verify 140°F or warmer; an insulated cooler alone does not establish a safe temperature." },
    ],
  },

  {
    slug: "how-to-smoke-salmon",
    category: "seafood",
    title: "How to Smoke Salmon: Dry Brine, Pellicle, Times, Temps, and Wood",
    description:
      "A complete guide to hot smoked salmon: the difference between hot and cold smoking, dry brine method and timing, forming a pellicle, pit temperature, cook times by thickness, and the USDA 145°F safe minimum for fish.",
    updated: "2026-08-03",
    readMins: 6,
    tool: "doneness-temps",
    excerpt:
      "Dry brine salmon in the refrigerator, remove the cure with splash control, and refrigerate uncovered at 40°F or colder until a tacky pellicle forms. Smoke until the thickest part verifies 145°F.",
    answer:
      "Hot smoked salmon is done when the thickest part verifies 145°F. Dry brine in the refrigerator, remove excess cure without splashing raw juices, pat dry, and refrigerate uncovered at 40°F or colder until a tacky pellicle forms. Follow the cooker manual for approved fuel and operation.",
    body: `
<p>Hot smoked salmon done right is one of the most rewarding cooks on a backyard smoker. It has deep smoke flavor, a flaky texture, and a lightly glazed surface that carries the seasoning and holds the smoke. It is faster than most BBQ cooks and the process is almost entirely hands-off once the prep is done.</p>

<h2>Hot smoked vs. cold smoked: a critical distinction</h2>
<p>When people say "smoked salmon," they can mean two entirely different products:</p>

<table>
<thead>
  <tr>
    <th></th>
    <th>Hot smoked</th>
    <th>Cold smoked</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Pit temperature</strong></td>
    <td>180-225°F</td>
    <td>Below 90°F</td>
  </tr>
  <tr>
    <td><strong>Result</strong></td>
    <td>Fully cooked, flaky, firm</td>
    <td>Technically raw, silky, lox-style texture</td>
  </tr>
  <tr>
    <td><strong>Food safety</strong></td>
    <td>Reaches 145°F internal; safe without additional curing</td>
    <td>Requires proper salt cure before and during; higher risk if done incorrectly</td>
  </tr>
  <tr>
    <td><strong>Standard BBQ smoker?</strong></td>
    <td>Yes</td>
    <td>Requires separate cold smoke generator; specialized setup</td>
  </tr>
</tbody>
</table>

<p>This guide covers hot smoked salmon. Cold smoking is a separate technique requiring precise temperature control below 90°F, a cold smoke generator, and careful curing protocols to prevent bacterial growth. It is not done on a standard backyard smoker and is beyond the scope of a general BBQ guide.</p>

<h2>Choosing the salmon</h2>
<p>Buy a skin-on fillet. The skin protects the bottom of the fish from direct heat and holds the fillet together on the grate. A center-cut section of even thickness cooks more evenly than a tail piece that tapers thin at the end.</p>
<p>Wild-caught species (king/Chinook, sockeye, coho) are leaner and more intensely flavored. Farmed Atlantic salmon is higher in fat, which provides more insurance against drying out on the smoker. Both work well. If starting from frozen, thaw completely in the refrigerator and pat completely dry before brining.</p>

<h2>Dry brine</h2>
<p>A dry brine seasons the fish, draws excess surface moisture out, and starts the pellicle formation process. The standard mixture:</p>
<ul>
  <li>Equal parts kosher salt and brown sugar</li>
  <li>Optional additions that work well: coarsely ground black pepper, garlic powder, dried dill, lemon zest</li>
</ul>
<p>Coat the fillet and brine it in the refrigerator in a covered, food-safe container. Remove excess cure with disposable towels when practical. If the recipe requires a rinse, use low-flow cold water in an empty sink, prevent splashing, pat dry with disposable towels, and immediately clean and sanitize the sink, faucet, counters, hands, and utensils.</p>

<h2>The pellicle: do not skip this step</h2>
<p>After rinsing and drying, place the salmon skin-side down on a rack and refrigerate uncovered at 40°F or colder for 1-3 hours. A shiny, slightly tacky surface layer called the pellicle will form as the proteins dry on the surface. Do not form the pellicle at room temperature.</p>
<p>This step is not optional. The pellicle is what allows smoke particles to bond to the fish. Without it:</p>
<ul>
  <li>Smoke cannot adhere properly and the smoke flavor will be faint and uneven</li>
  <li>The surface of the salmon will be dull rather than glossy</li>
  <li>The fillet is more likely to fall apart on the grate</li>
</ul>
<p>When the pellicle is properly formed, the surface of the fish will feel slightly sticky to the touch, not wet, not dry, but tacky. That is the right texture. The wait is 1-3 hours and it is worth every minute.</p>

<h2>Wood for salmon</h2>
<p>Salmon is a delicate fish that calls for mild wood. The classic choice is alder, the traditional Pacific Northwest pairing for salmon: clean, lightly sweet, and subtle enough to enhance rather than overpower the fish. Apple and cherry are similarly mild and complementary. Pecan adds a quiet nuttiness. Do not use hickory, mesquite, or other strong woods on salmon; they will overpower the delicate flavor of the fish entirely. Two or three small chunks or a handful of wood chips is all you need. Salmon absorbs smoke quickly and does not need heavy continuous smoke throughout the cook. Use the <a href="/tools/wood-pairing/">Wood Pairing Finder</a> for alternatives.</p>

<h2>Pit temperature and cook times</h2>
<p>Smoke salmon at 180-225°F. Some traditional approaches start at the low end and gradually increase over the course of the cook; constant 225°F from the start also works well and is simpler. Place the salmon skin-side down on the grate. Do not flip it at any point: the skin protects the bottom and will release cleanly when the fish is done. Flipping risks breaking the fillet.</p>

<table>
<thead>
  <tr>
    <th>Fillet thickness</th>
    <th>At 180-200°F</th>
    <th>At 225°F</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Under 1 inch (thin fillet)</td>
    <td>1-1.5 hours</td>
    <td>45-75 minutes</td>
  </tr>
  <tr>
    <td>1 to 1.5 inches (medium)</td>
    <td>1.5-2.5 hours</td>
    <td>1-2 hours</td>
  </tr>
  <tr>
    <td>Over 1.5 inches (thick)</td>
    <td>2.5-3.5 hours</td>
    <td>2-3 hours</td>
  </tr>
</tbody>
</table>

<h2>Doneness and food safety</h2>
<p>The USDA safe minimum internal temperature for fish is <strong>145°F</strong>, measured in the thickest part of the fillet (source: USDA Food Safety and Inspection Service, fsis.usda.gov). At 145°F, the salmon flakes easily with a fork, is fully opaque throughout, and is safely cooked. This is the correct pull temperature for hot smoked salmon.</p>
<p>Begin checking early to limit overshoot, but keep cooking until the thickest part verifies the USDA endpoint of 145°F. Pitmaster Log does not recommend the lower pull temperatures sometimes used for a softer texture because they are below that federal safety endpoint.</p>
<p>Refrigerate cooked salmon in a shallow, covered container within 2 hours, or within 1 hour when the ambient temperature is above 90°F. Use it within 3-4 days and reheat leftovers to 165°F in the center. Log the cook in your <a href="/log/">cook log</a>: fillet weight, thickness, brine time, pellicle time, pit temp, finish temp, and how the smoke level tasted.</p>

<p class="text-sm text-muted"><em>The USDA safe minimum internal temperature for fish, including salmon, is 145°F measured in the thickest part of the fillet. Source: USDA Food Safety and Inspection Service, fsis.usda.gov.</em></p>
`,
    faqs: [
      {
        q: "What temperature do you smoke salmon at?",
        a: "180-225°F. This low temperature range allows smoke to penetrate the fish before the surface fully sets and prevents the salmon from drying out. Constant 225°F from the start works well for most home cooks. Do not go higher than 225°F: the fillet will dry out before smoke has time to work.",
      },
      {
        q: "What temperature is smoked salmon done?",
        a: "145°F internal temperature, the USDA safe minimum for fish. At 145°F, the fillet flakes easily with a fork and is fully opaque. Do not push well above 145°F; salmon dries out quickly past this point. Source: USDA Food Safety and Inspection Service.",
      },
      {
        q: "What is a pellicle and why does it matter for smoked salmon?",
        a: "A pellicle is the shiny, tacky surface layer that forms on salmon after brining and air-drying for 1-3 hours. It forms when proteins on the surface dry and concentrate. The pellicle gives smoke particles a surface to bond to, which is what creates deep smoke flavor and the characteristic glossy surface of well-smoked salmon. Skipping the pellicle step produces faint, uneven smoke flavor.",
      },
      {
        q: "What wood is best for smoking salmon?",
        a: "Alder is the classic choice for salmon: clean, lightly sweet, and the traditional wood in Pacific Northwest salmon smoking. Apple and cherry are mild alternatives. Pecan adds a subtle nutty note. Avoid hickory, mesquite, and other strong woods on salmon; they overpower the delicate flavor of the fish.",
      },
      {
        q: "How long does it take to smoke salmon?",
        a: "Roughly 1-1.5 hours for thin fillets (under 1 inch) at 225°F, and 2-3 hours for thick fillets (over 1.5 inches). Time varies by thickness, pit temperature, and individual fish. Cook to temperature (145°F internal) rather than by time. Use a leave-in probe for accurate results.",
      },
      {
        q: "What is the difference between hot smoked and cold smoked salmon?",
        a: "Hot smoked salmon is cooked at 180-225°F to a safe internal temperature of 145°F: fully cooked, flaky, and firm. Cold smoked salmon is processed below 90°F, leaving the fish technically raw with a silky, lox-like texture. Cold smoking requires a specialized setup, careful curing for food safety, and is not done on a standard BBQ smoker.",
      },
    ],
    howToTime: "PT5H",
    steps: [
      { name: "Dry brine with salt and sugar", text: "Coat all surfaces with equal parts kosher salt and brown sugar. Refrigerate for 1-4 hours depending on thickness of the fillet." },
      { name: "Remove cure and form the pellicle", text: "Remove excess cure without splashing raw juices. If rinsing is required, use low-flow cold water in an empty sink and sanitize immediately. Refrigerate on a contained rack at 40°F or colder until tacky." },
      { name: "Set up smoker at 180-225°F", text: "Set the pit to 180-225°F with alder, apple, or cherry wood. Two or three small chunks is enough; salmon absorbs smoke quickly." },
      { name: "Smoke skin-side down without flipping", text: "Place salmon skin-side down on the grate. Do not flip it at any point. The skin protects the fillet and will release cleanly when done." },
      { name: "Pull at 145°F internal", text: "Smoke until the thickest part reaches 145°F, the USDA safe minimum for fish. Thin fillets (under 1 inch) take about 1-1.5 hours at 225°F; thick fillets take 2-3 hours." },
      { name: "Rest, serve, and refrigerate promptly", text: "Refrigerate leftovers in a shallow, covered container within 2 hours, or 1 hour above 90°F. Use within 3-4 days and reheat leftovers to 165°F." },
    ],
  },

  {
    slug: "how-to-smoke-pork-tenderloin",
    category: "pork",
    title: "How to Smoke Pork Tenderloin: Times, Temps, and Why 145°F Is the Target",
    description:
      "Guide to smoking pork tenderloin: silverskin removal, seasoning, planning times, the USDA 145°F plus 3-minute-rest endpoint, and a reverse sear.",
    updated: "2026-08-03",
    readMins: 5,
    tool: "doneness-temps",
    excerpt:
      "Smoke pork tenderloin at 225-250°F until a food thermometer verifies 145°F, then rest at least 3 minutes. Unlike pork butt, this lean cut does not need a much higher pulled-pork texture target. Remove the silverskin first or it will curl on the smoker.",
    answer:
      "Smoke pork tenderloin at 225-250°F until the thickest part reaches a verified 145°F, then rest for at least 3 minutes, matching the USDA minimum for whole cuts of pork. A 1-pound tenderloin often takes about 1.5-2 hours at 225°F. Unlike pork shoulder, this lean cut does not benefit from a 195-205°F pulled-pork texture target. Always remove the silverskin before cooking. Slightly pink meat can remain at 145°F.",
    body: `
<p>Pork tenderloin is the most tender muscle on a pig and one of the quickest smokes you can do on a backyard cooker. Done right it is excellent. Done wrong, meaning overcooked by even 15°F, it turns dry and chalky with nothing to rescue it. The key is understanding exactly why the target temperature is what it is and tracking it precisely.</p>

<h2>Pork tenderloin vs. pork loin: not the same cut</h2>
<p>These cuts are frequently confused at the store because they sound similar. They are very different:</p>

<table>
<thead>
  <tr>
    <th></th>
    <th>Pork tenderloin</th>
    <th>Pork loin</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Weight</strong></td>
    <td>3/4 to 1.5 lbs per piece</td>
    <td>3-8+ lbs per roast</td>
  </tr>
  <tr>
    <td><strong>Shape</strong></td>
    <td>Long, thin, tapered cylinder</td>
    <td>Thick, rectangular roast</td>
  </tr>
  <tr>
    <td><strong>Fat</strong></td>
    <td>Very lean, minimal fat</td>
    <td>Fat cap on top, some marbling</td>
  </tr>
  <tr>
    <td><strong>Cook time at 225°F</strong></td>
    <td>1.5-2.5 hours</td>
    <td>2.5-4+ hours</td>
  </tr>
  <tr>
    <td><strong>Done at</strong></td>
    <td>145°F internal</td>
    <td>145°F internal</td>
  </tr>
</tbody>
</table>

<p>Pork tenderloins are often sold in two-packs. Both pieces go on the smoker at the same time; they may finish a few minutes apart depending on their individual sizes, so probe each one separately.</p>

<h2>Remove the silverskin</h2>
<p>Every pork tenderloin has a strip of silverskin, a tough, pearlescent connective tissue sheath running along one side. Silverskin does not render or break down during cooking. It shrinks when heated, which causes the tenderloin to curl and cook unevenly, and it creates a tough, chewy band in what should be a uniformly tender cut. Remove it before the cook.</p>
<p>To remove: slide the tip of a sharp boning or paring knife under the edge of the silverskin, working it slightly loose from the meat. Grip the freed end with a paper towel for traction and pull firmly while angling the knife beneath it at a shallow angle, moving the blade away as you pull the skin toward you. It releases in one or two passes. The meat underneath should be clean and smooth.</p>

<h2>Marinade or dry rub</h2>
<p>Pork tenderloin is lean, so careful seasoning and temperature control matter. A dry rub seasons the surface; rendered fat does not travel through the meat as a self-basting liquid.</p>
<p>A simple marinade can combine olive oil, soy sauce, minced garlic, black pepper, and a touch of honey or brown sugar. Marinate the tenderloin for 30 minutes to 4 hours in a covered, food-safe container under refrigeration at <strong>40°F or colder</strong>. Keep it chilled until the smoker is preheated and ready, then discard the used marinade; do not reuse it.</p>
<p>If using a dry rub instead, apply it 30 minutes before the cook or overnight in the fridge. A sweet rub (brown sugar, smoked paprika, garlic powder, onion powder, black pepper, a little cayenne, and salt) pairs naturally with pork and promotes browning on a short cook.</p>

<h2>Pit temperature and cook times</h2>
<p>Set the pit to 225-250°F. This range allows the smoke to penetrate before the thin tenderloin is done. At 275°F the cook finishes so quickly that meaningful smoke flavor barely has time to develop.</p>

<table>
<thead>
  <tr>
    <th>Piece weight</th>
    <th>At 225°F</th>
    <th>At 250°F</th>
    <th>Target pull temp</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>3/4 lb</td>
    <td>1-1.5 hours</td>
    <td>45-60 min</td>
    <td>145°F, then 3-minute rest</td>
  </tr>
  <tr>
    <td>1 lb</td>
    <td>1.5-2 hours</td>
    <td>1-1.5 hours</td>
    <td>145°F, then 3-minute rest</td>
  </tr>
  <tr>
    <td>1.25-1.5 lbs</td>
    <td>2-2.5 hours</td>
    <td>1.5-2 hours</td>
    <td>145°F, then 3-minute rest</td>
  </tr>
</tbody>
</table>

<p>Use a leave-in probe and watch it. Pork tenderloin is thin and has very little thermal mass. It moves from 130°F to 155°F quickly, especially as the surface temperature of the smoker reaches the meat. Do not step away and assume you have another hour. Check it.</p>

<h2>Doneness: verify 145°F, then rest</h2>
<p>The USDA safe minimum for whole cuts of pork is <strong>145°F with a 3-minute rest</strong> (source: USDA Food Safety and Inspection Service, 2011 revision). This applies to pork tenderloin.</p>
<p>Pork tenderloin is much leaner and has far less connective tissue than shoulder or ribs, so it does not need a 195-205°F pulled-pork texture target. Continuing far beyond the USDA endpoint can make it noticeably drier.</p>
<p>Keep cooking until the thickest part reaches a verified <strong>145°F</strong>, then remove it from the heat and rest for at least 3 minutes. Use a fast thermometer and begin checking early to limit overshoot. Do not rely on predicted carry-over heat to reach the USDA endpoint after removal.</p>
<p>At 145°F, properly rested pork tenderloin will be slightly pink in the center. This is correct and safe. The USDA revised the whole-pork safe temperature from 160°F to 145°F in 2011 specifically to recognize that whole-muscle pork at 145°F is safe even when still slightly pink. Do not cook to 160°F chasing a fully gray interior; that produces inferior, dryer pork.</p>

<h2>Reverse sear option</h2>
<p>A reverse sear adds a browned exterior to the smoked interior. Smoke at 225°F until the thickest part reaches about 135-140°F, then transfer to very high heat. Sear while checking the center frequently and continue until a food thermometer verifies 145°F. Remove from the heat and rest at least 3 minutes. Do not rely on predicted carry-over heat to reach the USDA endpoint.</p>

<h2>Wood for pork tenderloin</h2>
<p>Use light wood on a short cook. Apple and peach are both excellent on pork tenderloin: mild, slightly sweet, and complementary to either a sweet rub or a savory marinade. Cherry adds a slight tartness and very good color. Pecan gives a quiet nuttiness. One or two small chunks is all you need for a 1.5-2 hour cook. Use the <a href="/tools/wood-pairing/">Wood Pairing Finder</a> for pairing ideas.</p>

<p>Rest for the full 3 minutes, then slice across the grain into medallions about 1/2 to 3/4 inch thick. Serve immediately. Pork tenderloin does not hold or reheat as gracefully as fattier cuts. Log the cook in your <a href="/log/">cook log</a>: piece weight, marinade or rub, pit temp, pull temp, rest time, and texture. Tenderloin is a fast enough cook to iterate on in a single season.</p>

<p class="text-sm text-muted"><em>The USDA minimum for whole cuts of pork is 145°F followed by a 3-minute rest. Pork tenderloin does not require the much higher texture target used for pork shoulder. A slightly pink center can remain at 145°F. Source: USDA Food Safety and Inspection Service.</em></p>
`,
    faqs: [
      {
        q: "What temperature do you smoke pork tenderloin at?",
        a: "225-250°F. This range gives smoke enough time to penetrate before the lean tenderloin is done. At 275°F or higher, the cook finishes so fast that meaningful smoke flavor barely has time to develop. Use a leave-in probe: tenderloin moves through temperature quickly and can overcook before you notice.",
      },
      {
        q: "How long does it take to smoke pork tenderloin?",
        a: "At 225°F, plan on 1.5-2 hours for a 1-pound piece and 2-2.5 hours for a 1.25-1.5 pound piece. At 250°F, those times shorten to 1-1.5 hours and 1.5-2 hours respectively. Always cook to temperature rather than time: verify 145°F, then rest at least 3 minutes.",
      },
      {
        q: "What temperature is pork tenderloin done?",
        a: "145°F internal followed by at least a 3-minute rest is the USDA minimum for whole cuts of pork. Verify 145°F before removing the tenderloin from the heat. Unlike pork shoulder or ribs, this lean cut does not need a much higher texture target.",
      },
      {
        q: "Is it OK if pork tenderloin is still pink?",
        a: "Yes. A slightly pink center can remain after the pork has reached 145°F and completed the required 3-minute rest. Cooking higher is a preference, not part of the USDA minimum, and can produce a drier result.",
      },
      {
        q: "Do I need to remove the silverskin from pork tenderloin?",
        a: "Yes, always. Silverskin is a tough connective tissue that does not render or break down during cooking. It shrinks when heated, which causes the tenderloin to curl on the smoker and cook unevenly. It also creates a chewy, unpleasant band in what should be a uniformly tender cut. Slide a sharp knife under the silverskin, grip with a paper towel, and pull it away before seasoning.",
      },
      {
        q: "What is the difference between pork tenderloin and pork loin?",
        a: "They are different cuts. Pork tenderloin is a thin, lean cylinder, while pork loin is a larger, thicker roast. Cook times differ, but both must verify 145°F and then rest at least 3 minutes. Use time only for planning.",
      },
    ],
    howToTime: "PT2H",
    steps: [
      { name: "Remove silverskin", text: "Slide a sharp knife under the silverskin on one side. Grip the freed end with a paper towel and pull firmly while angling the knife beneath it. Leaving it on causes the tenderloin to curl and cook unevenly." },
      { name: "Season or marinate", text: "Either marinate in olive oil, soy, garlic, and brown sugar for 30 minutes to 4 hours in a covered, food-safe container under refrigeration at 40°F or colder, or apply a sweet dry rub and refrigerate. Keep the pork chilled until the smoker is ready and discard used marinade." },
      { name: "Set up smoker at 225-250°F", text: "Set the pit to 225-250°F with apple, cherry, or pecan wood. Avoid heavy woods like hickory on this delicate cut." },
      { name: "Smoke with a probe to 145°F", text: "Place the tenderloin on the grate with a leave-in probe in the thickest part. Verify 145°F with a food thermometer before removing it from the heat." },
      { name: "Rest at least 3 minutes", text: "After the tenderloin has reached 145°F, remove it from the heat and rest for at least 3 minutes before slicing." },
      { name: "Slice across the grain and serve", text: "Slice crosswise into 1/2 to 3/4-inch medallions and serve immediately. Pork tenderloin does not hold well and is best eaten right away." },
    ],
  },

  {
    slug: "burnt-ends",
    category: "brisket",
    title: "How to Make Burnt Ends: Brisket Point Cubes Done Right",
    description: "Step-by-step guide to making burnt ends from a brisket point. Covers separating the point, the second smoke, saucing, and why the point needs to reach 200-205°F before cubing.",
    updated: "2026-08-03",
    readMins: 8,
    tool: null,
    excerpt: "Cube the fully-rendered brisket point, toss in sauce, and smoke a second time uncovered. The point must be probe-tender before you cut it.",
    answer: "Smoke a full packer brisket until the flat is probe-tender, using 200-205°F only as a texture checkpoint. The USDA minimum for whole beef cuts is 145°F followed by a 3-minute rest. Separate the point, cube it, sauce it, and return it to the smoker until the sauce sets, following the cooker's approved temperature and fuel instructions.",
    body: `
<h2>What are burnt ends</h2>
<p>Burnt ends come from the <strong>point</strong> (also called the deckle) of a beef brisket. The point is the thick, heavily marbled muscle that sits on top of the flat. It has far more intramuscular fat and connective tissue than the flat, which means it can handle longer cooking and rewards it with a concentrated, rich flavor that the flat cannot match.</p>
<p>The Kansas City method: smoke a full packer brisket until the flat is done, separate the point, cube it, toss in sauce, and smoke it a second time uncovered. The second smoke turns the exterior of each cube into a dark, sticky crust while the inside stays moist and pull-apart tender. The result is somewhere between a bite of beef and candy.</p>

<h2>Temperatures to know</h2>
<ul>
  <li><strong>USDA safe minimum for beef:</strong> 145°F internal with a 3-minute rest (per USDA FSIS).</li>
  <li><strong>Full brisket target before separating the point:</strong> 200-205°F probe-tender in the flat. The point will be at or above this by then.</li>
  <li><strong>Burnt ends finish:</strong> 205-210°F in the cubes, or until the sauce is set and edges have gone deep mahogany.</li>
</ul>

<h2>What you need</h2>
<ul>
  <li>1 whole packer brisket (12-16 lb), or just the point if you can source it separately</li>
  <li>Brisket rub: equal parts kosher salt and coarse black pepper</li>
  <li>1 cup BBQ sauce (Kansas City-style works best; thin slightly with beef broth)</li>
  <li>2 tbsp unsalted butter</li>
  <li>2 tbsp brown sugar (optional, for extra caramelization)</li>
  <li>An aluminum half-pan or disposable foil pan</li>
</ul>

<h2>Step 1: smoke the full brisket</h2>
<p>Season the packer brisket with your rub and refrigerate uncovered overnight. Set your smoker to 225-275°F with oak or hickory. Smoke until the flat is probe-tender at 200-205°F. Depending on pit temp and brisket size, this takes 10-18 hours. Wrap in butcher paper or foil at the stall if you want to push through faster. See the <a href="/guides/how-to-smoke-a-brisket/">full brisket guide</a> for the complete walkthrough.</p>

<h2>Step 2: separate the point</h2>
<p>Let the brisket rest unwrapped for 20-30 minutes so it is easier to handle. Find the thick seam of fat between the point and flat and use a sharp boning knife to follow that fat layer and separate the two muscles. The point will pull away cleanly. Set the flat aside wrapped in foil to rest while you finish the burnt ends.</p>

<h2>Step 3: cube and sauce</h2>
<p>Cut the point into 1.5-inch cubes. Do not go smaller or they will dry out in the second smoke; do not go larger or the sauce will not penetrate. Transfer to the aluminum pan. Add BBQ sauce, butter, and brown sugar and toss until every cube is coated. You want each piece glazed, not swimming in liquid.</p>

<h2>Step 4: the second smoke</h2>
<p>Raise the smoker to 250-275°F. Place the uncovered pan back on the smoker for 60-90 minutes, stirring once at the halfway point. You are looking for the sauce to reduce and set, the edges of each cube to go deep mahogany, and the fat to finish rendering. Pull when the cubes look lacquered and the sauce has thickened to a glaze on each piece.</p>

<h2>Chuck roast burnt ends</h2>
<p>A beef chuck roast smoked to probe-tender (around 205°F) then cubed and sauced follows the same process at a fraction of the cost. It will not have the same depth of flavor as a brisket point, but it is a legitimate option for a smaller cook or when you want the burnt end experience without committing to a full packer brisket. Season and smoke exactly the same way.</p>

<h2>Common mistakes</h2>
<ul>
  <li><strong>Cubing too early:</strong> The point must be fully probe-tender before you cube it. If the fat has not fully rendered, the texture will be dense and chewy. Wait until the flat hits 200°F and the probe slides in easily.</li>
  <li><strong>Too much sauce:</strong> You want a glaze, not a braise. Start with less sauce than you think you need and add more after the first 30 minutes if the cubes look dry.</li>
  <li><strong>Covering the pan:</strong> Keep the pan uncovered the entire second smoke. Covering it steams the cubes and prevents the bark from caramelizing.</li>
  <li><strong>Using the flat:</strong> Burnt ends are a point dish. The flat does not have enough fat to survive the second smoke without drying out. Point only.</li>
</ul>
    `,
    faqs: [
      {
        q: "Can I make burnt ends without a whole brisket?",
        a: "Yes. Some butchers sell just the point (deckle) separately. You can also use a beef chuck roast smoked to probe-tender at 205°F for a similar result at lower cost. The process is identical: cube, sauce, return to the smoker uncovered for 60-90 minutes.",
      },
      {
        q: "What internal temperature should burnt ends reach?",
        a: "The point needs to be fully probe-tender before cubing, typically 200-205°F in the surrounding flat. After the second smoke, individual cubes will be 205-210°F. USDA sets the safe minimum for beef at 145°F with a 3-minute rest, but burnt ends go well beyond that for texture and fat rendering.",
      },
      {
        q: "What BBQ sauce works best for burnt ends?",
        a: "A Kansas City-style sauce with a ketchup and molasses base is traditional. Thin it slightly with beef broth or apple cider vinegar so it coats without pooling. Avoid very sweet sauces that burn easily during the second smoke.",
      },
      {
        q: "How long does the second smoke take?",
        a: "Usually 60-90 minutes at 250-275°F uncovered, stirring once around the 45-minute mark. The goal is visual: the sauce should be set and lacquered on each cube, not wet. Pull when the edges have gone dark mahogany.",
      },
      {
        q: "Can I make burnt ends ahead of time?",
        a: "Yes. Refrigerate burnt ends in shallow, covered containers within 2 hours, or within 1 hour when the ambient temperature is above 90°F, and use them within 3-4 days. Reheat covered while stirring as needed until a food thermometer verifies 165°F in the center.",
      },
    ],
    howToTime: "PT15H",
    steps: [
      { name: "Smoke the full packer brisket", text: "Season the brisket and smoke at 225-275°F until the flat is probe-tender at 200-205°F, typically 10-18 hours. Wrap at the stall to push through faster." },
      { name: "Separate the point", text: "Let the brisket rest 20-30 minutes. Use a boning knife to follow the fat seam between the point and flat and separate the two muscles. Set the flat aside wrapped in foil." },
      { name: "Cube and sauce the point", text: "Cut the point into 1.5-inch cubes. Toss in an aluminum pan with BBQ sauce, butter, and brown sugar until every cube is coated." },
      { name: "Second smoke uncovered", text: "Raise the smoker to 250-275°F. Place the uncovered pan on the smoker for 60-90 minutes, stirring once at the halfway point, until the sauce caramelizes and each cube is lacquered." },
    ],
  },

  {
    slug: "how-to-smoke-a-pork-loin",
    category: "pork",
    title: "How to Smoke a Pork Loin",
    description: "Complete guide to smoking a pork loin roast, including brining, smoker temperature, and the 145°F plus 3-minute-rest endpoint.",
    updated: "2026-08-03",
    readMins: 6,
    tool: "smoke-time",
    excerpt: "Pork loin is a lean roast. Verify 145°F, rest at least 3 minutes, and slice; much higher temperatures can dry it out.",
    answer: "Set your smoker to 225-250°F and smoke the pork loin until a food thermometer verifies 145°F, then rest for at least 3 minutes before slicing. A 3-4 lb loin often takes roughly 1.5-2 hours at 225°F, but use time only for planning. Pork loin is lean and does not benefit from the high pulled-pork texture target used for shoulder. The USDA minimum for whole pork cuts is 145°F followed by a 3-minute rest.",
    body: `
<h2>Pork loin vs pork tenderloin</h2>
<p>These are two different cuts that cook very differently. Confusing them is one of the most common mistakes in pork cookery.</p>
<ul>
  <li><strong>Pork loin:</strong> a large roast (3-8 lb), wide and flat, from the back of the pig. Can be bone-in (a rack of pork) or boneless. Cooks in 1.5-3 hours at 225°F depending on size.</li>
  <li><strong>Pork tenderloin:</strong> a small, tapered cylinder (usually under 1.5 lb) from along the spine. Very different shape, cooks in about 1.5-2 hours at 225°F, and is even leaner and easier to overcook than the loin.</li>
</ul>
<p>This guide covers the loin roast. If you have a tenderloin, see the <a href="/guides/how-to-smoke-pork-tenderloin/">smoked pork tenderloin guide</a> instead.</p>

<h2>Temperature targets</h2>
<ul>
  <li><strong>USDA safe minimum for pork:</strong> 145°F internal with a 3-minute rest (per USDA FSIS). This is the safe eating temperature for whole muscle pork.</li>
  <li><strong>Verified endpoint:</strong> keep cooking until the thickest center verifies 145°F, then rest at least 3 minutes. Pork loin is lean and can dry as its temperature rises, so use a food thermometer rather than relying on time or carry-over heat.</li>
</ul>

<h2>Brining for moisture</h2>
<p>A brine makes a meaningful difference on a lean cut like pork loin. Even a short brine helps the meat hold moisture through the smoke. It is worth the extra step.</p>
<p><strong>Basic brine:</strong> Follow a measured recipe, submerge the loin in a covered food-safe container, and refrigerate at 40°F or colder. Drain and discard the brine, then pat the pork dry with disposable paper towels; do not rinse raw pork. Clean and sanitize the container, sink area, hands, and contact surfaces.</p>
<p>If you skip the brine, at minimum dry-brine by salting the loin the night before and leaving it uncovered on a rack in the refrigerator. The surface will dry out, which improves the exterior texture on the smoker.</p>

<h2>Rub</h2>
<p>Pork loin takes a rub well. A reliable combination: brown sugar, smoked paprika, garlic powder, onion powder, kosher salt, and black pepper. The brown sugar aids color and crust. If you wet-brined, reduce the salt in your rub since the meat already has plenty.</p>

<h2>Step by step</h2>
<ol>
  <li><strong>Prep:</strong> Brine or dry-brine in the refrigerator. Pat completely dry, apply the rub, and keep the loin refrigerated until the smoker is preheated and ready.</li>
  <li><strong>Fire the smoker:</strong> 225-250°F. Apple, cherry, or pecan work well. These mild woods complement pork without overpowering it. Hickory is fine in moderation. Avoid mesquite on a delicate lean cut.</li>
  <li><strong>Smoke:</strong> Place the loin directly on the grate. Insert a leave-in probe into the thickest part of the center, avoiding fat or bone. Keep cooking until the center verifies 145°F, then rest at least 3 minutes.</li>
  <li><strong>Time estimate:</strong> Roughly 20-25 minutes per pound at 225°F. A 3 lb loin takes about 1.5 hours; a 5 lb loin takes about 2-2.5 hours. Use the <a href="/tools/smoke-time/">Smoke Time Calculator</a> to plan your start time. Always cook to temperature, not time.</li>
  <li><strong>Rest:</strong> Tent loosely with foil and rest 10-15 minutes before slicing. Carryover will add a few degrees and the juices need time to redistribute.</li>
</ol>

<h2>Slicing</h2>
<p>Slice across the grain into 3/4-inch rounds. Thinner and the slices fall apart; thicker and each piece starts to feel like too much of the same texture. If bone-in, slice between the bones.</p>

<h2>Serving</h2>
<p>Smoked pork loin pairs naturally with apple-based sauces, roasted vegetables, or a simple pan sauce made from the drippings. It is excellent the next day sliced thin for sandwiches.</p>

<h2>Common mistakes</h2>
<ul>
  <li><strong>Overshooting:</strong> Pork loin is much leaner than butt or ribs and can dry as its temperature climbs. Watch the probe and remove it after a verified 145°F, then complete the required rest.</li>
  <li><strong>Skipping the brine:</strong> The difference between a brined and unbrined pork loin on the smoker is noticeable. It is the most impactful prep step for this cut.</li>
  <li><strong>Heavy wood:</strong> Mesquite overwhelms pork loin's mild flavor. Stick to apple, cherry, pecan, or a light oak.</li>
</ul>
    `,
    faqs: [
      {
        q: "What temperature should smoked pork loin reach?",
        a: "Pull it at 145°F internal, then rest at least 3 minutes (USDA FSIS minimum) or 10-15 minutes for better results. Pork loin is very lean and dries out above 155°F, so accurate temperature monitoring matters more than it does with fattier cuts.",
      },
      {
        q: "How long does it take to smoke a pork loin?",
        a: "At 225-250°F, use roughly 20-25 minutes per pound only for planning. Keep cooking until the center verifies 145°F, then rest at least 3 minutes.",
      },
      {
        q: "Should I wrap pork loin while smoking?",
        a: "No. Pork loin cooks quickly enough that wrapping is not needed to push through a stall. If the exterior is browning too fast, lower the smoker temperature slightly. Wrapping would soften any bark that has formed.",
      },
      {
        q: "What is the difference between pork loin and pork tenderloin?",
        a: "Pork loin is a large roast from the back of the pig, while pork tenderloin is a small, tapered muscle. They cook at different rates, but both must verify 145°F and then rest at least 3 minutes.",
      },
      {
        q: "Can I smoke a frozen pork loin?",
        a: "No. Always fully thaw the pork loin before smoking. Cooking from frozen leads to uneven cooking where the outside dries out before the center reaches a safe temperature. Thaw in the refrigerator 24-48 hours depending on size.",
      },
    ],
    howToTime: "PT2H",
    steps: [
      { name: "Brine under refrigeration", text: "Use a measured brine in a covered food-safe container at 40°F or colder. Discard the brine, pat dry with disposable towels, do not rinse raw pork, and sanitize contact surfaces." },
      { name: "Apply rub and keep chilled", text: "Coat all surfaces with your rub, then keep the loin refrigerated until the smoker is preheated and ready." },
      { name: "Set up smoker at 225-250°F", text: "Fire to 225-250°F with apple, cherry, or pecan wood. Mild woods complement pork loin's delicate flavor." },
      { name: "Verify 145°F, then rest", text: "Place the loin on the grate with a leave-in probe in the thickest center section. Keep cooking until a food thermometer verifies 145°F, then rest at least 3 minutes. Use time per pound only for planning." },
      { name: "Rest and slice", text: "Tent loosely with foil and rest 10-15 minutes. Slice crosswise into 3/4-inch rounds against the grain and serve." },
    ],
  },

  {
    slug: "how-to-smoke-tri-tip",
    category: "beef",
    title: "How to Smoke Tri-Tip",
    description: "Step-by-step guide to smoking a tri-tip roast using the reverse sear method. Covers seasoning, pull temperature, the sear, how to slice against the changing grain, and why this cut is nothing like brisket.",
    updated: "2026-08-03",
    readMins: 7,
    tool: "doneness-temps",
    excerpt: "Tri-tip is a steak-style roast. Smoke it gently, reverse sear until a food thermometer verifies 145°F, then rest at least 3 minutes.",
    answer: "Smoke tri-tip at 225-250°F until it reaches about 135-140°F, then sear over a very hot grill or cast-iron pan while checking the center. Keep cooking until a food thermometer verifies 145°F, then rest at least 3 minutes before slicing thin against the grain, which changes direction partway through the roast. The USDA minimum for whole beef cuts is 145°F followed by a 3-minute rest. Tri-tip is not a collagen-rich cut and is not meant to be cooked to probe-tender.",
    body: `
<h2>What is tri-tip</h2>
<p>Tri-tip is a triangular cut from the bottom sirloin of the beef, typically 2-3 lbs with a distinct shape that tapers from a thick end to a thin one. It is popular across the western United States, particularly in California where the Santa Maria BBQ tradition uses red oak and a simple salt-pepper-garlic rub.</p>
<p>Unlike brisket or pork butt, tri-tip has minimal connective tissue and is cooked like a thick steak rather than to a probe-tender BBQ target. A reverse sear builds a dark exterior while the smoker adds flavor. This guide uses the USDA endpoint of 145°F followed by a 3-minute rest.</p>

<h2>Temperature targets</h2>
<ul>
  <li><strong>USDA safe minimum for beef:</strong> 145°F internal with a 3-minute rest (per USDA FSIS).</li>
  <li><strong>Temperature before sear:</strong> about 135-140°F, leaving room for the high-heat finish.</li>
  <li><strong>Verified finished target:</strong> 145°F, followed by at least a 3-minute rest. Do not rely on predicted carry-over heat to reach the endpoint.</li>
</ul>

<h2>The reverse sear method</h2>
<p>The reverse sear is the right technique for tri-tip: low smoke first to build flavor and bring the interior to near-target evenly, then a high-heat sear at the end to build crust.</p>
<ol>
  <li><strong>Smoke low:</strong> Set smoker to 225-250°F. Place the tri-tip directly on the grate with a leave-in probe inserted into the thickest part. Smoke to about 135-140°F.</li>
  <li><strong>Sear hot:</strong> Move the tri-tip to a very hot grill or cast-iron pan. Sear the broad sides and edges while checking the thickest center with a food thermometer. Continue until it reaches 145°F.</li>
  <li><strong>Rest:</strong> Rest on a clean cutting board for at least 3 minutes before slicing.</li>
</ol>

<h2>Seasoning</h2>
<p><strong>Santa Maria style:</strong> kosher salt, coarse black pepper, and garlic powder in roughly equal parts. Apply generously 1-4 hours before smoking or immediately before if short on time. That simple rub is hard to beat, and the crust from the sear amplifies whatever is in it.</p>
<p>For more complexity, add onion powder, smoked paprika, or a small amount of cayenne. Avoid sugary rubs that will burn during the high-heat sear.</p>

<h2>Wood choice</h2>
<p>Red oak is the traditional choice for Santa Maria-style tri-tip. White oak is equally good. Cherry adds mild sweetness and a darker color. Avoid mesquite and hickory, which can overpower the beef during what is a relatively short cook time.</p>

<h2>How to slice tri-tip</h2>
<p>This is the most important step after cooking. The grain of a tri-tip changes direction partway through the roast, usually somewhere near the middle. Slicing with the grain produces tough, chewy slices. You must always cut perpendicular to the grain.</p>
<p>After resting, identify where the grain changes direction by looking at the surface of the meat. Cut the roast roughly in half at that point. Then slice each half against its own grain at about 1/4 inch thickness. This gives you uniformly tender slices from both sections.</p>

<h2>Serving</h2>
<p>Tri-tip is excellent sliced thin and served on a platter, or piled onto sandwiches. Santa Maria tradition pairs it with pinquito beans, salsa, and garlic bread. A simple chimichurri or horseradish cream also works well with the smoky beef.</p>

<h2>Common mistakes</h2>
<ul>
  <li><strong>Slicing with the grain:</strong> The most common reason tri-tip tastes tough. The grain changes direction in the middle of the cut. Always check and cut perpendicular.</li>
  <li><strong>Not monitoring the sear:</strong> Temperature moves quickly over high heat. Check the thickest center frequently and remove it after a verified 145°F.</li>
  <li><strong>Skipping the sear:</strong> You can smoke tri-tip directly to 145°F and then rest it, but the reverse sear gives the exterior a darker crust.</li>
</ul>
    `,
    faqs: [
      {
        q: "What temperature should tri-tip be cooked to?",
        a: "USDA sets the minimum for whole beef cuts at 145°F followed by at least a 3-minute rest. For a reverse sear, smoke to about 135-140°F, then sear while monitoring until the thickest center reaches 145°F.",
      },
      {
        q: "How long does it take to smoke a tri-tip?",
        a: "A 2-3 lb tri-tip often takes roughly 1.5-2 hours including the reverse sear and rest, but cooker and roast geometry vary. Use time only for planning and verify 145°F before the required rest.",
      },
      {
        q: "Can I smoke tri-tip without a sear?",
        a: "Yes. Smoke it directly until a food thermometer verifies 145°F, then rest at least 3 minutes. The exterior will be softer than a reverse-seared roast.",
      },
      {
        q: "What wood is best for smoking tri-tip?",
        a: "Red oak is traditional for Santa Maria-style tri-tip. White oak, cherry, or a light pecan also work well. Avoid mesquite and hickory, which can overpower the beef during a short cook.",
      },
      {
        q: "Why is my tri-tip tough?",
        a: "Usually because it was sliced with the grain instead of against it. The grain changes direction partway through the roast so the slicing angle must change too. Overcooking past medium-well also toughens tri-tip significantly.",
      },
    ],
    howToTime: "PT2H",
    steps: [
      { name: "Season with Santa Maria rub", text: "Apply kosher salt, coarse black pepper, and garlic powder generously to all surfaces 1-4 hours before smoking." },
      { name: "Smoke to about 135-140°F", text: "Set the smoker to 225-250°F with red oak, white oak, or cherry. Smoke until the thickest center reaches about 135-140°F." },
      { name: "Sear to a verified 145°F", text: "Sear over high heat, turning to brown the broad sides and edges. Monitor the thickest center and keep cooking until a food thermometer verifies 145°F." },
      { name: "Rest at least 3 minutes", text: "Rest on a clean cutting board for at least 3 minutes before slicing." },
      { name: "Slice against the changing grain", text: "Identify where the grain changes direction and cut the roast in two at that point. Slice each half about 1/4 inch thick, perpendicular to its own grain." },
    ],
  },

  {
    slug: "how-to-smoke-prime-rib",
    category: "beef",
    title: "How to Smoke Prime Rib",
    description: "Complete guide to smoking a prime rib roast (standing rib roast). Covers the dry brine, bone-in vs boneless, pull temperature, carryover cooking, the rest, and the optional high-heat finish for crust.",
    updated: "2026-08-03",
    readMins: 10,
    tool: "doneness-temps",
    excerpt: "Smoke prime rib until a food thermometer verifies 145°F, then rest at least 3 minutes. Dry brine 24-48 hours ahead for better seasoning and crust.",
    answer: "Set your smoker to 225-250°F and smoke the prime rib until a food thermometer verifies 145°F in the center away from bone, then rest at least 3 minutes. Use time only for planning because roast size and cooker conditions vary. For more crust, apply a brief high-heat finish while monitoring so the roast does not overshoot. Dry-brine the roast with kosher salt 1-3 days ahead for deeper seasoning.",
    body: `
<h2>What you are working with</h2>
<p>Prime rib, formally a standing rib roast, is cut from ribs 6-12 of the beef -- the same section as ribeye steaks. It is one of the most prized cuts you can put on a smoker. The goal is a smoke-kissed exterior with a deeply crusted surface and an even, rosy interior from edge to edge. Low and slow smoking achieves both far more reliably than a hot oven, because the gentle heat equalizes temperature throughout the roast without overcooking the outer layers before the center catches up.</p>
<p>A full standing rib roast covers 7 ribs and can weigh 14-16 lbs. Most home cooks work with a 2-4 bone roast (4-9 lbs), which is more practical and still serves 4-8 people generously.</p>

<h2>Bone-in vs boneless</h2>
<ul>
  <li><strong>Bone-in:</strong> The bones act as a natural roasting rack and insulate the underside of the roast from direct heat. Many cooks believe bone-in has better flavor. Slightly more complex to carve.</li>
  <li><strong>Boneless (ribeye roast):</strong> Easier to carve and more surface area to season. Will cook slightly faster since there is no bone mass to heat. Both produce excellent results.</li>
</ul>

<h2>Temperature targets</h2>
<ul>
  <li><strong>USDA safe minimum for beef:</strong> 145°F internal with a 3-minute rest (per USDA FSIS).</li>
  <li><strong>Verified endpoint:</strong> 145°F in the center away from bone, followed by at least a 3-minute rest.</li>
  <li><strong>Monitoring:</strong> Begin checking early, but do not rely on carry-over heat to reach the USDA endpoint after removal.</li>
  <li><strong>Reference:</strong> See the <a href="/tools/doneness-temps/">doneness temperature chart</a> and current USDA guidance.</li>
</ul>

<h2>The dry brine</h2>
<p>Dry-brining is the single most impactful prep step for prime rib. Salt the roast all over at approximately 1 teaspoon kosher salt per pound of meat. Place it on a rack uncovered in the refrigerator for 24-72 hours. The salt draws out surface moisture, then reabsorbs into the meat, seasoning deep into the muscle and drying the surface for a dramatically better crust.</p>
<p>Do not skip this step. An unsalted or same-day-salted prime rib will have a pale, soft exterior compared to one that has been dry-brined. If you are short on time, even 12 hours helps.</p>

<h2>Herb crust</h2>
<p>On cook day, mix softened butter with fresh rosemary, fresh thyme, minced garlic, coarse black pepper, and a teaspoon of Dijon mustard to make a paste. Coat the roast, then keep it refrigerated until the smoker is preheated and ready. Starting with a chilled roast can lengthen the cook, so use the thermometer rather than a fixed timeline.</p>

<h2>Step by step</h2>
<ol>
  <li><strong>Dry brine:</strong> 1-3 days ahead, salt all surfaces generously, rack uncovered in the refrigerator.</li>
  <li><strong>Apply herb crust:</strong> coat with the butter-herb paste on cook day, then keep refrigerated until the smoker is ready.</li>
  <li><strong>Fire the smoker:</strong> 225-250°F. Oak, hickory, or cherry all pair well with beef without overpowering it.</li>
  <li><strong>Smoke bone-side down:</strong> the bones act as a rack. Insert a leave-in probe into the center of the roast, aimed away from any bone.</li>
  <li><strong>Cook to the verified endpoint:</strong> use a food thermometer in the center away from bone and continue until it reads 145°F. Time-per-pound estimates are not a safety test.</li>
  <li><strong>Rest:</strong> Tent loosely with foil and rest at least 3 minutes before carving. A longer culinary rest is optional.</li>
  <li><strong>Optional sear for crust:</strong> apply a brief high-heat finish while monitoring closely. If searing after the rest, use clean utensils and a clean surface.</li>
</ol>

<h2>Timing it for a meal</h2>
<p>The most stressful part of prime rib is timing the finish to a specific serve time. Start early, then use equipment designed for hot holding and verify with a food thermometer that the roast remains at 140°F or warmer. A well-insulated cooler alone does not establish a safe holding temperature. If the roast is not held at 140°F or warmer, refrigerate it within 2 hours, or within 1 hour when the ambient temperature is above 90°F.</p>

<h2>Carving</h2>
<p>Stand the roast on the cut end with bones facing up. Use a long carving knife to cut along the bones to free them as a rack, then set the bones aside. Slice the roast crosswise to the desired thickness (3/4 inch is typical for prime rib). To serve individual rib portions, cut between the bones before removing them.</p>

<h2>Common mistakes</h2>
<ul>
  <li><strong>Skipping the dry brine:</strong> The exterior of a properly dry-brined prime rib is in a different category than same-day salted. Do it 1-3 days ahead.</li>
  <li><strong>Relying on carry-over for safety:</strong> Carry-over varies by roast and conditions. Verify 145°F before removal, then complete the required rest.</li>
  <li><strong>Not resting long enough:</strong> Carving a prime rib that has not rested will release a significant amount of juice. 30 minutes minimum, 45 is better on a large roast.</li>
</ul>
    `,
    faqs: [
      {
        q: "What temperature should prime rib reach?",
        a: "USDA sets the minimum for whole beef cuts at 145°F followed by at least a 3-minute rest. Verify 145°F in the center away from bone before removing the roast from the heat.",
      },
      {
        q: "How long does it take to smoke prime rib?",
        a: "Roast size, starting temperature, smoker recovery, and weather make time-per-pound estimates unreliable. Build in a buffer and use a food thermometer to verify 145°F in the center away from bone.",
      },
      {
        q: "Should I cover prime rib while it smokes?",
        a: "No. Smoke it uncovered the full time to build bark and allow smoke penetration. If the exterior is darkening too fast, tent loosely with foil or lower the smoker temperature by 10-15 degrees.",
      },
      {
        q: "How do I get a crust on smoked prime rib?",
        a: "After the 30-45 minute rest, place the roast in a 500°F oven or on a very hot grill for 10-15 minutes. The dry surface from the rest and the dry brine will crust quickly. Carve immediately after the sear -- no second rest needed.",
      },
      {
        q: "Can I smoke prime rib the day before?",
        a: "Yes. Refrigerate within 2 hours of cooking, or within 1 hour above 90°F. Reheat leftovers to a verified 165°F before serving. The crust will be softer than on a freshly finished roast.",
      },
    ],
    howToTime: "PT4H",
    steps: [
      { name: "Dry brine 1-3 days ahead", text: "Apply about 1 teaspoon kosher salt per pound to all surfaces and refrigerate uncovered on a rack for 1-3 days. This is the most impactful prep step." },
      { name: "Apply herb crust and keep chilled", text: "On cook day, coat with a butter, rosemary, thyme, garlic, black pepper, and Dijon paste, then keep refrigerated until the smoker is ready." },
      { name: "Smoke bone-side down at 225-250°F", text: "Set the smoker to 225-250°F with oak, hickory, or cherry. Place the roast bone-side down with a probe aimed away from bone." },
      { name: "Cook to a verified 145°F", text: "Smoke until a food thermometer in the center away from bone verifies 145°F. Use time only for planning." },
      { name: "Rest at least 3 minutes", text: "Tent loosely with foil and rest at least 3 minutes before carving. A longer culinary rest is optional." },
      { name: "Optional high-heat finish", text: "For a darker crust, apply a brief high-heat finish while monitoring closely to limit overshoot." },
    ],
  },

  {
    slug: "smoked-mac-and-cheese",
    category: "sides",
    title: "Smoked Mac and Cheese",
    description: "How to make smoked mac and cheese on the smoker. Covers pasta shape, building a thick roux-based cheese sauce, which cheeses hold up to smoke, wood choice, and how long to leave it uncovered.",
    updated: "2026-08-03",
    readMins: 6,
    tool: null,
    excerpt: "Cook pasta al dente, make a thick cheese sauce, and smoke uncovered at 225-250°F until the center reaches 165°F, usually about 60-90 minutes.",
    answer: "Cook your pasta one minute short of al dente. Make a thick roux-based cheese sauce using freshly grated sharp cheddar and a meltable secondary cheese like gouda or gruyere. Combine in a cast-iron skillet or aluminum pan and smoke uncovered at 225-250°F, stirring once at the 30-minute mark, until a food thermometer verifies 165°F in the center. Add buttered breadcrumbs near the end. Use apple, cherry, or pecan wood; strong wood can overpower the cheese.",
    body: `
<h2>Why smoke mac and cheese</h2>
<p>Smoked mac and cheese picks up a layer of flavor that stovetop and oven versions cannot replicate. The smoke settles into the cheese sauce and the top surface firms up into a slightly set crust. It is one of the most popular BBQ side dishes for good reason: it holds well in a covered pan, scales up easily for a large cook, and pairs with almost everything that comes off the smoker.</p>

<h2>Cheese selection</h2>
<p>Two things matter: flavor that holds up to smoke, and meltability. Pre-shredded cheese contains anti-caking agents (usually potato starch or cellulose) that prevent smooth melting. Buy blocks and grate them yourself.</p>
<ul>
  <li><strong>Base (50-60% of the total):</strong> Sharp cheddar. The sharpness holds up to smoke where mild cheddar fades. Extra-sharp is even better.</li>
  <li><strong>Secondary (30-40%):</strong> Gouda, gruyere, colby, or fontina. These melt smoothly and add depth. Smoked gouda adds another layer of smokiness.</li>
  <li><strong>Optional accent (10-20%):</strong> Pepper jack for heat, cream cheese for richness, or parmesan for sharpness stirred in off heat.</li>
</ul>
<p>Avoid mozzarella (goes stringy and flavorless) and American cheese singles (too mild, disappears against smoke).</p>

<h2>Pasta shape</h2>
<p>Cavatappi (corkscrew) holds the most sauce in its ridges and is the best choice. Elbow macaroni is traditional and works well. Large shells are another option. Avoid smooth pasta like ziti or penne -- the sauce slides off instead of coating.</p>

<h2>The recipe (serves 8-10 as a side)</h2>
<h3>Ingredients</h3>
<ul>
  <li>1 lb cavatappi or elbow macaroni</li>
  <li>4 tbsp unsalted butter</li>
  <li>1/4 cup all-purpose flour</li>
  <li>2 cups whole milk</li>
  <li>1 cup heavy cream</li>
  <li>2 cups sharp cheddar, freshly grated</li>
  <li>1 cup gouda or gruyere, freshly grated</li>
  <li>1 tsp dry mustard powder</li>
  <li>1/2 tsp garlic powder</li>
  <li>1/2 tsp smoked paprika</li>
  <li>Salt and black pepper to taste</li>
  <li>1 cup panko breadcrumbs (optional)</li>
  <li>2 tbsp melted butter (for the breadcrumbs)</li>
</ul>

<h3>Steps</h3>
<ol>
  <li><strong>Cook the pasta.</strong> Boil until one full minute short of al dente. It continues cooking on the smoker. Drain and do not rinse.</li>
  <li><strong>Make the roux.</strong> Melt butter in a large pot over medium heat. Whisk in flour and cook 2 minutes until slightly nutty smelling. Slowly whisk in the milk and cream to prevent lumps.</li>
  <li><strong>Build the sauce.</strong> Cook over medium heat, whisking, until thick enough to coat a spoon, about 5-7 minutes. Remove from heat. Whisk in the mustard powder, garlic powder, and smoked paprika. Stir in cheese in batches until fully melted and smooth. Season with salt and pepper. The sauce should be noticeably thick at this stage -- it will thin slightly as it heats on the smoker before eventually setting.</li>
  <li><strong>Combine.</strong> Toss drained pasta with the cheese sauce until evenly coated. Transfer to a cast iron skillet or 9x13 aluminum pan.</li>
  <li><strong>Smoke.</strong> Set smoker to 225-250°F with apple, cherry, or pecan wood. Place the uncovered pan on the smoker, stir once at the 30-minute mark, and continue until a food thermometer verifies 165°F in the center. A freshly assembled pan often takes 60-90 minutes; a refrigerated pan takes longer.</li>
  <li><strong>Breadcrumb topping.</strong> Toss panko with melted butter and scatter over the top during the last 20-25 minutes. The crumbs will crisp slightly and add texture.</li>
  <li><strong>Serve.</strong> After the center reaches 165°F and the surface is set, serve from the pan. Keep it at 140°F or warmer for service, or refrigerate within 2 hours (1 hour above 90°F).</li>
</ol>

<h2>Wood choice</h2>
<p>This matters more than most people expect. Heavy woods overpower the cheese and can make the sauce taste bitter. Use mild woods only: apple, cherry, pecan, or alder. The smoke should register as a background note alongside the cheese, not as the dominant flavor.</p>

<h2>Tips for a better result</h2>
<ul>
  <li><strong>Make the sauce thicker than you think:</strong> It will thin as it heats on the smoker before eventually setting. Start thicker than a stovetop mac and cheese sauce.</li>
  <li><strong>Grate your own cheese:</strong> Pre-shredded cheese does not melt smoothly. The textural difference in the final sauce is noticeable.</li>
  <li><strong>Keep it uncovered the full time:</strong> Covering the pan steams the pasta and prevents smoke from reaching the surface. Leave it open.</li>
  <li><strong>Cast iron holds heat better:</strong> It gives a crispier bottom layer. An aluminum pan is fine for convenience, especially for larger batches.</li>
</ul>

<h2>Make ahead</h2>
<p>Assemble through step 4 the night before and refrigerate promptly, covered, at 40°F or colder. Keep it refrigerated until the smoker is ready, allow extra cooking time, and verify 165°F in the center before serving. Refrigerate leftovers within 2 hours, or within 1 hour when the ambient temperature is above 90°F, and reheat leftovers to 165°F.</p>
    `,
    faqs: [
      {
        q: "How long do you smoke mac and cheese?",
        a: "A freshly assembled pan often takes 60-90 minutes uncovered at 225-250°F, but a refrigerated pan takes longer. Stir once and use a food thermometer to verify 165°F in the center before serving.",
      },
      {
        q: "What temperature for smoked mac and cheese?",
        a: "225-250°F smoker temperature. Higher heat will dry out the pasta before it picks up smoke flavor. Low and slow gives the smoke time to settle in while the sauce thickens gradually.",
      },
      {
        q: "What wood is best for smoked mac and cheese?",
        a: "Apple, cherry, or pecan. All are mild enough to complement the cheese without overpowering it. Avoid mesquite and hickory, which can make the sauce taste bitter and overwhelm the dairy.",
      },
      {
        q: "Can I use pre-shredded cheese?",
        a: "Technically yes, but the result is less creamy. Pre-shredded cheese contains anti-caking agents that prevent smooth melting. Buy blocks and grate them yourself for the best sauce texture.",
      },
      {
        q: "Can you make smoked mac and cheese ahead of time?",
        a: "Yes. Assemble, cover, and refrigerate at 40°F or colder. Keep it refrigerated until the smoker is ready, then cook until the center reaches 165°F. Refrigerate leftovers promptly and reheat them to 165°F.",
      },
    ],
    howToTime: "PT2H",
    steps: [
      { name: "Cook pasta al dente", text: "Boil pasta one full minute short of package directions. Drain but do not rinse; it continues cooking on the smoker." },
      { name: "Make roux and cheese sauce", text: "Melt butter, whisk in flour, cook 2 minutes, then slowly add milk and cream. Cook until thick enough to coat a spoon. Remove from heat and stir in freshly grated cheese until smooth." },
      { name: "Combine and transfer to pan", text: "Toss pasta with cheese sauce until evenly coated. Transfer to a cast iron skillet or aluminum pan. The sauce should look loose at this stage." },
      { name: "Smoke uncovered to 165°F", text: "Set the smoker to 225-250°F with apple, cherry, or pecan wood. Stir once at 30 minutes and continue until a food thermometer verifies 165°F in the center." },
      { name: "Add breadcrumb topping", text: "Toss panko breadcrumbs with melted butter and scatter over the top for the last 20-25 minutes. The crumbs will crisp slightly." },
      { name: "Verify and serve", text: "After the center reaches 165°F and the surface is set, serve from the pan. Maintain 140°F or warmer during service or refrigerate promptly." },
    ],
  },
];

export function getArticle(slug) {
  return ARTICLES.find((a) => a.slug === slug);
}
