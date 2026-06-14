// Food-safety temperatures are from USDA FSIS (fsis.usda.gov).
// "safeMin" = USDA safe minimum internal temperature.
// "bbqTarget" = texture / probe-tender target from common BBQ practice (NOT a safety number).
// Always verify the safe minimum on a thermometer first.

export const SAFE_MIN_NOTE =
  "Safe minimum internal temperatures are published by USDA FSIS. BBQ target temperatures are texture goals from common practice, not food-safety numbers. Always confirm the USDA safe minimum with a thermometer before serving.";

export const TEMPS = [
  {
    group: "Poultry",
    items: [
      { name: "Chicken (whole or pieces)", safeMin: 165, rest: 0, bbqTarget: "Breast 165°F; thighs are juicier pulled at 175-185°F", category: "poultry" },
      { name: "Turkey (whole)", safeMin: 165, rest: 0, bbqTarget: "Breast 165°F; dark meat 175°F+", category: "poultry" },
      { name: "Ground poultry", safeMin: 165, rest: 0, bbqTarget: "165°F", category: "poultry" },
    ],
  },
  {
    group: "Beef, Pork, Lamb, Veal (whole cuts)",
    items: [
      { name: "Steaks, chops, roasts", safeMin: 145, rest: 3, bbqTarget: "Doneness by preference: rare ~125°F, medium ~135-145°F (still rest to satisfy safety)", category: "redmeat" },
      { name: "Pork tenderloin / loin", safeMin: 145, rest: 3, bbqTarget: "145°F then rest", category: "redmeat" },
      { name: "Fresh ham", safeMin: 145, rest: 3, bbqTarget: "145°F; reheat fully-cooked ham to 165°F", category: "redmeat" },
    ],
  },
  {
    group: "Ground meats",
    items: [
      { name: "Ground beef, pork, lamb, veal", safeMin: 160, rest: 0, bbqTarget: "Burgers 160°F", category: "ground" },
      { name: "Sausage (fresh, raw)", safeMin: 160, rest: 0, bbqTarget: "160°F", category: "ground" },
    ],
  },
  {
    group: "Low-and-slow BBQ (cook past safe minimum for tenderness)",
    items: [
      { name: "Brisket", safeMin: 145, rest: 3, bbqTarget: "Probe-tender ~200-205°F (≈203°F), then rest 1+ hr", category: "lowslow" },
      { name: "Pork shoulder / butt (pulled)", safeMin: 145, rest: 3, bbqTarget: "Probe-tender ~200-205°F, then rest", category: "lowslow" },
      { name: "Pork spare / St. Louis ribs", safeMin: 145, rest: 3, bbqTarget: "Bend/toothpick test, ~195-203°F", category: "lowslow" },
      { name: "Baby back ribs", safeMin: 145, rest: 3, bbqTarget: "Bend test, ~195-200°F", category: "lowslow" },
      { name: "Beef short ribs / chuck", safeMin: 145, rest: 3, bbqTarget: "Probe-tender ~200-205°F", category: "lowslow" },
    ],
  },
  {
    group: "Seafood & eggs",
    items: [
      { name: "Fish & shellfish", safeMin: 145, rest: 0, bbqTarget: "145°F or until opaque and flakes", category: "other" },
      { name: "Egg dishes", safeMin: 160, rest: 0, bbqTarget: "160°F", category: "other" },
    ],
  },
  {
    group: "Reheating & holding",
    items: [
      { name: "Leftovers / reheated food", safeMin: 165, rest: 0, bbqTarget: "165°F", category: "other" },
      { name: "Hot-holding (keep above)", safeMin: 140, rest: 0, bbqTarget: "Hold at 140°F+; danger zone is 40-140°F", category: "other" },
    ],
  },
];
