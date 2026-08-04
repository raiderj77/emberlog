// Food-safety temperatures are from USDA FSIS (fsis.usda.gov).
// "safeMin" = USDA safe minimum internal temperature.
// "bbqTarget" = texture / probe-tender target from common BBQ practice (NOT a safety number).
// Always verify the safe minimum on a thermometer first.

export const SAFE_MIN_NOTE =
  "Safe minimum internal temperatures and shellfish visual endpoints are published by USDA FSIS. BBQ target temperatures are texture goals from common practice, not food-safety numbers. Always confirm the applicable USDA endpoint before serving.";

export const TEMPS = [
  {
    group: "Poultry",
    items: [
      { name: "Chicken (whole or pieces)", safeMin: 165, rest: 0, bbqTarget: "Whole bird: verify the thickest breast and innermost thigh and wing", category: "poultry" },
      { name: "Turkey (whole)", safeMin: 165, rest: 0, bbqTarget: "Verify the thickest breast and innermost thigh and wing", category: "poultry" },
      { name: "Ground poultry", safeMin: 165, rest: 0, bbqTarget: "165°F", category: "poultry" },
    ],
  },
  {
    group: "Beef, Pork, Lamb, Veal (whole cuts)",
    items: [
      { name: "Steaks, chops, roasts", safeMin: 145, rest: 3, bbqTarget: "Verify 145°F, then allow the required 3-minute rest", category: "redmeat" },
      { name: "Pork tenderloin / loin", safeMin: 145, rest: 3, bbqTarget: "Verify 145°F, then rest at least 3 minutes", category: "redmeat" },
      { name: "Fresh or cook-before-eating ham", safeMin: 145, rest: 3, bbqTarget: "Verify 145°F, then rest 3 minutes", category: "redmeat" },
      { name: "Fully cooked ham (USDA-inspected plant package)", safeMin: 140, rest: 0, bbqTarget: "Reheat to 140°F; follow the package instructions", category: "redmeat" },
      { name: "Fully cooked ham (other source or repackaged)", safeMin: 165, rest: 0, bbqTarget: "Reheat to 165°F", category: "redmeat" },
    ],
  },
  {
    group: "Ground meats",
    items: [
      { name: "Ground beef, pork, lamb, veal", safeMin: 160, rest: 0, bbqTarget: "Burgers 160°F", category: "ground" },
      { name: "Sausage (fresh beef, pork, lamb, veal)", safeMin: 160, rest: 0, bbqTarget: "160°F", category: "ground" },
      { name: "Sausage (fresh poultry)", safeMin: 165, rest: 0, bbqTarget: "165°F", category: "poultry" },
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
      { name: "Fish", safeMin: 145, rest: 0, bbqTarget: "145°F or until the flesh is opaque and separates easily", category: "other" },
      { name: "Shrimp, lobster, crab, scallops", safeMin: null, safeLabel: "USDA visual endpoint", rest: 0, bbqTarget: "Cook until the flesh is pearly or white and opaque", category: "other" },
      { name: "Clams, oysters, mussels", safeMin: null, safeLabel: "USDA visual endpoint", rest: 0, bbqTarget: "Cook until shells open; discard any that stay closed", category: "other" },
      { name: "Egg dishes", safeMin: 160, rest: 0, bbqTarget: "160°F", category: "other" },
    ],
  },
  {
    group: "Reheating & holding",
    items: [
      { name: "Leftovers / reheated food", safeMin: 165, rest: 0, bbqTarget: "165°F", category: "other" },
      { name: "Casseroles", safeMin: 165, rest: 0, bbqTarget: "Verify 165°F in the center", category: "other" },
      { name: "Hot-holding (keep at or above)", safeMin: 140, rest: 0, bbqTarget: "Hold at 140°F or warmer; danger zone is 40-140°F", category: "other" },
    ],
  },
];
