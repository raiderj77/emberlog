// Programmatic landing pages for the Smoke Time Calculator, one per protein the
// calculator supports. Each preset gets a unique, search-intent URL
// (e.g. /tools/smoke-time/brisket/) with the calculator pre-set to that protein,
// substantive protein-specific copy, FAQs, and a link to the matching guide.
// Imported by both the [preset] route and the sitemap so the two never drift.
//
// `protein` MUST match a SMOKE_TIMES entry in lib/woods.js exactly.

import { BRISKET_PLANNING } from "./brisketTiming.js";

export const SMOKE_PRESETS = [
  {
    slug: "brisket",
    protein: "Brisket (packer)",
    weight: 13,
    h1: "Brisket Smoke Time Calculator",
    title: "Brisket Smoke Time Calculator, How Long to Smoke a Brisket",
    desc: "Calculate how long to smoke a brisket by weight and pit temp, and get a start time so it rests and is ready when you serve. Plan around the stall.",
    keywords: ["brisket smoke time", "how long to smoke a brisket", "brisket cook time calculator", "when to start a brisket"],
    intro: `For a packer at ${BRISKET_PLANNING.pitLabel}, use ${BRISKET_PLANNING.minMinutesPerPound}-${BRISKET_PLANNING.maxMinutesPerPound} minutes per pound only as a sourced planning range. Verify 145°F followed by a 3-minute rest, then use probe feel in several parts of the flat for the higher texture finish.`,
    howLong: "At 225-250°F, the sourced 1-1.5 hour-per-pound planning range puts a 13 lb brisket at roughly 13-20 hours before resting or hot holding. Thickness, actual grate temperature, airflow, wrapping, and the stall can move the finish.",
    tips: [
      "Plan for a stall between 150–170°F. Wrapping in butcher paper or foil pushes through it faster and protects the bark.",
      "Verify the USDA whole-beef endpoint of 145°F followed by a 3-minute rest, then check several parts of the flat for the higher texture finish.",
      "Rest at least an hour. For a longer hold, use equipment designed for hot holding, keep the meat at or above 140°F, and verify with a food thermometer.",
      "Start early. If you finish ahead, monitor a controlled hot hold rather than relying on an unverified cooler.",
    ],
    faqs: [
      { q: "How long to smoke a 13 lb brisket?", a: "Using the sourced 1-1.5 hour-per-pound range at 225-250°F, allow roughly 13-20 hours before the rest or hot hold. This is not a guarantee; verify safety and then check the flat for texture." },
      { q: "How long per pound to smoke a brisket?", a: "Use 1-1.5 hours per pound at 225-250°F as a planning range, not a promised finish. Thickness, grate temperature, airflow, wrapping, and the stall change the schedule." },
      { q: "Should I smoke brisket at 225°F or 250°F?", a: "Use a temperature approved by your cooker manual and the recipe you are following. At either setting, verify 145°F followed by a 3-minute rest, then use probe feel in several parts of the flat for texture." },
    ],
    guide: { href: "/guides/how-to-smoke-a-brisket/", label: "How to Smoke a Brisket" },
  },
  {
    slug: "pork-butt",
    protein: "Pork shoulder / butt",
    weight: 8,
    h1: "Pork Butt Smoke Time Calculator",
    title: "Pork Butt Smoke Time Calculator, Pulled Pork Cook Time",
    desc: "Work out how long to smoke a pork butt (Boston butt) for pulled pork by weight and pit temp, with a start time that includes the stall and rest.",
    keywords: ["pork butt smoke time", "how long to smoke a pork butt", "pulled pork cook time", "boston butt smoking time"],
    intro: "Pork shoulder is the most forgiving big smoke there is. Estimate the cook by weight and pit temp, then back-time it from dinner. At 250°F it runs about 75–105 minutes per pound and pulls best around 203°F.",
    howLong: "At 250°F, a bone-in pork butt takes roughly 75–105 minutes per pound, so an 8 lb butt usually runs 10–14 hours. The wide range is the stall, pork shoulder has plenty of fat and connective tissue, so it can park in the 150–170°F range for a good while.",
    tips: [
      "It's hard to overcook. Pull when it's probe-tender and the bone wiggles free, around 203°F.",
      "Wrap once the bark is set (around the stall) to speed things up and keep it moist.",
      "Rest 30–60 minutes before pulling so the juices redistribute.",
      "Buying for a crowd? Pulled pork loses ~40–50% of its raw weight, check the meat-per-person calculator.",
    ],
    faqs: [
      { q: "How long to smoke an 8 lb pork butt?", a: "At 250°F, plan on about 10–14 hours (roughly 75–105 minutes per pound) plus a 30–60 minute rest. Cook to ~203°F probe-tender, not a set time." },
      { q: "How long per pound to smoke pork shoulder?", a: "About 75–105 minutes per pound at 225–250°F. The stall around 150–170°F is the main reason times vary." },
      { q: "Can you overcook pulled pork?", a: "It's very forgiving, but pushed far past 205°F it can turn mushy. Pull at probe-tender around 203°F for the best texture." },
    ],
    guide: { href: "/guides/how-to-smoke-a-pork-butt/", label: "How to Smoke a Pork Butt" },
  },
  {
    slug: "spare-ribs",
    protein: "Spare ribs",
    weight: 3,
    h1: "Spare Ribs Smoke Time Calculator",
    title: "Spare Ribs Smoke Time Calculator, How Long to Smoke Ribs",
    desc: "How long to smoke spare ribs at 250°F, with a start time worked back from your meal. Roughly 5–6 hours total; the 3-2-1 method is a common starting point.",
    keywords: ["spare ribs smoke time", "how long to smoke spare ribs", "3-2-1 ribs time", "st louis ribs smoke time"],
    intro: "Spare ribs (including St. Louis cut) are timed by the rack, not by the pound. At 250°F, use 5–6 hours only as a planning range. Verify the USDA whole-pork endpoint of 145°F followed by a 3-minute rest, then use the bend test for the higher texture finish.",
    howLong: "At a 250°F pit, a rack of spare ribs takes roughly 5–6 hours total. The popular 3-2-1 method (3 hours open, 2 hours wrapped, 1 hour saucing unwrapped) is a reliable starting point you can dial in to your cooker.",
    tips: [
      "Verify at least 145°F, then complete the USDA-required 3-minute rest for whole pork cuts before serving.",
      "Judge doneness with the bend test: lift the rack and it should crack on the surface and bow, not snap.",
      "3-2-1 is a guideline, trim the wrapped stage if you like more bite, extend it for fall-off-the-bone.",
      "Spritz during the open stage to keep the surface from drying before the bark sets.",
      "St. Louis-cut spares are more even than full spares and finish a touch faster.",
    ],
    faqs: [
      { q: "How long does it take to smoke spare ribs?", a: "About 5–6 hours at 250°F. The 3-2-1 method (3 hrs open, 2 hrs wrapped, 1 hr unwrapped) is a common framework." },
      { q: "What is the 3-2-1 method for ribs?", a: "Three hours smoking unwrapped, two hours wrapped to tenderize, then about one hour unwrapped to set the sauce and bark. It's tuned for spare ribs; baby backs need less wrapped time." },
      { q: "How do you know when ribs are done?", a: "First verify the USDA minimum for whole pork cuts, 145°F followed by a 3-minute rest. Ribs are commonly cooked farther for texture; use the bend test after the safety check." },
    ],
    guide: { href: "/guides/how-to-smoke-ribs/", label: "How to Smoke Ribs" },
  },
  {
    slug: "baby-back-ribs",
    protein: "Baby back ribs",
    weight: 2,
    h1: "Baby Back Ribs Smoke Time Calculator",
    title: "Baby Back Ribs Smoke Time Calculator, Cook Time & 2-2-1",
    desc: "How long to smoke baby back ribs at 250°F, roughly 4–5 hours, with a start time worked back from your meal. Try the 2-2-1 method and the bend test.",
    keywords: ["baby back ribs smoke time", "how long to smoke baby back ribs", "2-2-1 ribs", "baby back ribs 250"],
    intro: "Baby back ribs are leaner and shorter than spares, so they often cook faster. At 250°F, use 4–5 hours only as a planning range. Verify the USDA whole-pork endpoint of 145°F followed by a 3-minute rest, then use the bend test for texture.",
    howLong: "At a 250°F pit, baby back ribs take roughly 4–5 hours total. The 2-2-1 method (2 hours open, 2 hours wrapped, 1 hour unwrapped) suits them better than the longer 3-2-1 used for spare ribs, because they have less connective tissue.",
    tips: [
      "Verify at least 145°F, then complete the USDA-required 3-minute rest for whole pork cuts before serving.",
      "Use 2-2-1, not 3-2-1, baby backs overcook faster than spares.",
      "Check with the bend test: a good rack cracks on top and bows when lifted.",
      "Pull the membrane off the bone side so the rub and smoke penetrate.",
      "Cut back the wrapped stage if you prefer ribs with a little tooth.",
    ],
    faqs: [
      { q: "How long to smoke baby back ribs at 250?", a: "About 4–5 hours. The 2-2-1 method (2 hrs open, 2 hrs wrapped, 1 hr unwrapped) is a solid starting point." },
      { q: "Are baby back ribs faster than spare ribs?", a: "Yes. Baby backs are leaner and shorter, so they finish roughly an hour sooner, use 2-2-1 instead of 3-2-1." },
      { q: "Do you smoke baby backs to a temperature?", a: "Yes for safety: verify at least 145°F and complete the required 3-minute rest for whole pork cuts. For the higher barbecue texture finish, use bend and probe feel rather than one fixed number." },
    ],
    guide: { href: "/guides/how-to-smoke-ribs/", label: "How to Smoke Ribs" },
  },
  {
    slug: "whole-chicken",
    protein: "Whole chicken",
    weight: 5,
    h1: "Whole Chicken Smoke Time Calculator",
    title: "Smoked Whole Chicken Time Calculator, How Long & What Temp",
    desc: "Plan a whole smoked chicken and verify 165°F in the thickest breast and innermost thigh and wing with a food thermometer.",
    keywords: ["smoked whole chicken time", "how long to smoke a whole chicken", "smoked chicken temp", "whole chicken 275"],
    intro: "Whole chicken often cooks faster than large barbecue cuts. If the cooker manual permits 275°F, use 30–45 minutes per pound only for planning. Remove the bird only after the thickest breast and innermost thigh and wing each verify 165°F.",
    howLong: "At a 275°F pit, a 5 lb whole chicken takes roughly 2.5–3.75 hours. Running the pit hotter than low-and-slow helps render the skin so it isn't rubbery, while the meat still picks up plenty of smoke.",
    tips: [
      "Smoke hotter (275–300°F), low temps leave chicken skin rubbery.",
      "Verify 165°F in the thickest breast and the innermost thigh and wing (USDA FSIS).",
      "Dry-brine the day before for seasoned, crispier skin.",
      "Spatchcock (remove the backbone) for faster, more even cooking.",
    ],
    faqs: [
      { q: "How long to smoke a whole chicken?", a: "About 2.5–3.75 hours for a 5 lb bird at 275°F (roughly 30–45 minutes per pound). Always confirm 165°F in the thickest breast and innermost thigh and wing." },
      { q: "What temperature do you smoke a whole chicken at?", a: "Around 275–300°F. Higher than typical low-and-slow temps so the skin renders and crisps instead of turning rubbery." },
      { q: "What internal temp is smoked chicken done?", a: "USDA lists 165°F for poultry. For a whole bird, verify it in the thickest breast and innermost thigh and wing without touching bone." },
    ],
    guide: { href: "/guides/how-to-smoke-a-whole-chicken/", label: "How to Smoke a Whole Chicken" },
  },
  {
    slug: "turkey",
    protein: "Turkey (whole)",
    weight: 12,
    h1: "Smoked Turkey Time Calculator",
    title: "Smoked Turkey Time Calculator, How Long to Smoke a Turkey",
    desc: "Plan a fully thawed, unstuffed 8-12 lb smoked turkey at 225-300°F, using USDA timing and 165°F checks in the thickest breast and innermost thigh and wing.",
    keywords: ["smoked turkey time", "how long to smoke a turkey", "smoked turkey per pound", "turkey smoke temp"],
    intro: "USDA smoking guidance covers a fully thawed, unstuffed 8-12 lb turkey in a smoker held at 225-300°F, with about 20-30 minutes per pound for planning. Verify 165°F in the thickest breast and innermost thigh and wing.",
    howLong: "At a 300°F pit, a fully thawed 12 lb turkey takes roughly 4-6 hours using the USDA 20-30 minute-per-pound planning range. Time is only an estimate; three-location thermometer checks determine safety.",
    tips: [
      "Keep the smoker between 225°F and 300°F and follow the manufacturer’s operating and supervision instructions.",
      "On a charcoal smoker with separate charcoal and liquid pans, fill the built-in liquid pan and replenish it as needed. For gas or electric smokers, use only the pan configuration specified by the manual.",
      "Verify 165°F in the thickest breast and the innermost thigh and wing without touching bone.",
      "Brine or dry-brine ahead for a juicier, well-seasoned bird.",
      "Use a fully thawed, unstuffed turkey weighing 8-12 lb; use another USDA-approved method outside that range.",
    ],
    faqs: [
      { q: "How long does a 12 lb turkey take to smoke?", a: "USDA’s planning estimate is 20-30 minutes per pound, or roughly 4-6 hours for a 12 lb turkey, in a smoker held at 225-300°F. Verify 165°F in the thickest breast and innermost thigh and wing." },
      { q: "What temperature should I use to smoke a turkey?", a: "USDA guidance says to maintain the smoker between 225°F and 300°F for a fully thawed, unstuffed 8-12 lb turkey. Follow the smoker manual's setup and supervision instructions." },
      { q: "Can I stuff a turkey before smoking it?", a: "No. USDA smoking guidance says not to stuff a turkey being smoked. Cook stuffing separately and verify its safe temperature." },
    ],
    guide: { href: "/guides/how-to-smoke-a-turkey/", label: "How to Smoke a Turkey" },
  },
  {
    slug: "pork-loin",
    protein: "Pork loin",
    weight: 3,
    h1: "Smoked Pork Loin Time Calculator",
    title: "Smoked Pork Loin Time Calculator, How Long & What Temp",
    desc: "How long to smoke a pork loin without drying it out. Verify 145°F with a food thermometer, then rest at least 3 minutes before slicing.",
    keywords: ["smoked pork loin time", "how long to smoke a pork loin", "pork loin smoke temp", "pork loin 145"],
    intro: "Pork loin is lean, so use 30–45 minutes per pound at 250°F only for planning. Continue cooking until a food thermometer verifies 145°F, then rest at least 3 minutes before slicing.",
    howLong: "At a 250°F pit, a 3 lb pork loin takes roughly 1.5–2.25 hours. Because it is lean, use a thermometer and continue cooking until the center verifies 145°F, then rest at least 3 minutes.",
    tips: [
      "Don't confuse pork loin with pork shoulder/butt, loin is lean and cooks fast.",
      "Verify 145°F with a food thermometer, then rest at least 3 minutes before slicing.",
      "A light dry brine can improve seasoning. Orient any fat cap toward the cooker’s primary heat source for surface protection, following the cooker manual.",
      "Skip wrapping, there's no long stall to push through on a lean cut.",
    ],
    faqs: [
      { q: "How long to smoke a pork loin?", a: "About 1.5–2.25 hours for a 3 lb loin at 250°F (roughly 30–45 minutes per pound). Continue until a food thermometer verifies 145°F, then rest at least 3 minutes." },
      { q: "What temp is smoked pork loin done?", a: "Verify 145°F internal, then rest at least 3 minutes (USDA FSIS). Pork loin is lean, so much higher temperatures can dry it out." },
      { q: "Is pork loin the same as pork butt?", a: "No. Pork loin is a lean roast that must verify 145°F and then rest at least 3 minutes; pork butt is commonly cooked to about 203°F for pulled-pork texture. They are not interchangeable." },
    ],
    guide: { href: "/guides/how-to-smoke-a-pork-loin/", label: "How to Smoke a Pork Loin" },
  },
  {
    slug: "beef-short-ribs",
    protein: "Beef short ribs",
    weight: 4,
    h1: "Beef Short Ribs Smoke Time Calculator",
    title: "Beef Short Ribs Smoke Time Calculator, Cook Time & Temp",
    desc: "How long to smoke beef short ribs (plate ribs), with a start time for your meal. Treat them like mini briskets, cook to probe-tender around 203°F.",
    keywords: ["beef short ribs smoke time", "how long to smoke beef ribs", "plate ribs smoke time", "beef short ribs 203"],
    intro: "Beef short ribs, especially meaty plate ribs, smoke like miniature briskets. At 275°F they run about 60–90 minutes per pound and finish probe-tender around 203°F, with the same kind of stall.",
    howLong: "At a 275°F pit, a 4 lb plate of beef short ribs takes roughly 4–6 hours. Like brisket, they have heavy connective tissue and will stall, so cook to feel, probe-tender near 203°F, rather than to a clock.",
    tips: [
      "Treat them like small briskets: low-and-slow to probe-tender around 203°F.",
      "Expect a stall; you can wrap to push through it, though many cook plate ribs unwrapped for bark.",
      "Leave the fat cap and membrane choices to the cut, plate ribs render beautifully.",
      "They're done when a probe slides between the bones like warm butter.",
    ],
    faqs: [
      { q: "How long to smoke beef short ribs?", a: "About 4–6 hours for a 4 lb plate at 275°F (roughly 60–90 minutes per pound). Cook to probe-tender around 203°F, not a set time." },
      { q: "What temp are beef short ribs done?", a: "Around 203°F probe-tender, the same target as brisket. The connective tissue needs to render for that signature texture." },
      { q: "Are beef short ribs like brisket?", a: "Very much so, heavy marbling and connective tissue, a stall, and a ~203°F probe-tender finish. They're often called 'brisket on a stick.'" },
    ],
    guide: { href: "/guides/how-to-smoke-beef-ribs/", label: "How to Smoke Beef Ribs" },
  },
];

export const SMOKE_PRESET_SLUGS = SMOKE_PRESETS.map((p) => p.slug);

export function getSmokePreset(slug) {
  return SMOKE_PRESETS.find((p) => p.slug === slug);
}
