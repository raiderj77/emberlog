// Wood pairing is flavor preference, not food safety. Guidance reflects common BBQ practice.

export const WOODS = [
  { name: "Hickory", strength: "Strong", flavor: "Classic bacon-y, savory smoke", pairs: ["Pork", "Ribs", "Brisket", "Sausage"] },
  { name: "Oak", strength: "Medium-Strong", flavor: "Balanced, clean, long-burning workhorse", pairs: ["Brisket", "Beef", "Lamb", "Sausage"] },
  { name: "Mesquite", strength: "Very Strong", flavor: "Bold, earthy, fast; easy to overdo", pairs: ["Beef", "Brisket", "Game"] },
  { name: "Apple", strength: "Mild", flavor: "Sweet, fruity, subtle", pairs: ["Pork", "Poultry", "Ham", "Fish"] },
  { name: "Cherry", strength: "Mild", flavor: "Sweet, mild, deep mahogany color", pairs: ["Pork", "Poultry", "Beef", "Lamb"] },
  { name: "Pecan", strength: "Medium", flavor: "Rich, nutty, sweeter than hickory", pairs: ["Pork", "Poultry", "Beef", "Baking"] },
  { name: "Maple", strength: "Mild", flavor: "Mild, sweet", pairs: ["Poultry", "Pork", "Vegetables", "Cheese"] },
  { name: "Alder", strength: "Mild", flavor: "Delicate, slightly sweet", pairs: ["Fish", "Salmon", "Poultry"] },
  { name: "Peach / Pear", strength: "Mild", flavor: "Light, sweet, fruity", pairs: ["Poultry", "Pork", "Fish"] },
];

export const MEATS_FOR_WOOD = ["Brisket", "Beef", "Pork", "Ribs", "Poultry", "Fish", "Lamb", "Sausage", "Game"];

// Smoke-time rules of thumb (hours per pound) at a given pit temp.
// These are PLANNING ESTIMATES ONLY. Cook to internal temperature, never to a clock.
export const SMOKE_TIMES = [
  { protein: "Brisket (packer)", pit: 250, minPerLb: 75, maxPerLb: 90, done: "Probe-tender ~203°F", note: "Plan for a stall around 150-170°F that can last hours." },
  { protein: "Pork shoulder / butt", pit: 250, minPerLb: 75, maxPerLb: 105, done: "Probe-tender ~203°F", note: "Very forgiving. Expect a stall." },
  { protein: "Spare ribs", pit: 250, minPerLb: 0, maxPerLb: 0, fixedMin: 300, fixedMax: 360, done: "Bend test", note: "Roughly 5-6 hrs total; the 3-2-1 method is a common starting point." },
  { protein: "Baby back ribs", pit: 250, minPerLb: 0, maxPerLb: 0, fixedMin: 240, fixedMax: 300, done: "Bend test", note: "Roughly 4-5 hrs; try 2-2-1." },
  { protein: "Whole chicken", pit: 275, minPerLb: 30, maxPerLb: 45, done: "Breast 165°F", note: "Higher pit temp helps render skin." },
  { protein: "Turkey (whole)", pit: 300, minPerLb: 25, maxPerLb: 35, done: "Breast 165°F", note: "Smoke hotter to avoid rubbery skin and the danger zone." },
  { protein: "Pork loin", pit: 250, minPerLb: 30, maxPerLb: 45, done: "145°F + rest", note: "Lean; do not overshoot." },
  { protein: "Beef short ribs", pit: 275, minPerLb: 60, maxPerLb: 90, done: "Probe-tender ~203°F", note: "Like mini briskets." },
];
