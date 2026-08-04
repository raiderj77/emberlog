export const BRISKET_PLANNING = Object.freeze({
  pitLabel: "225-250°F",
  minMinutesPerPound: 60,
  maxMinutesPerPound: 90,
  sourceLabel: "Reynolds Brands planning range",
});

export function brisketPlanningMinutes(weight) {
  return {
    min: weight * BRISKET_PLANNING.minMinutesPerPound,
    max: weight * BRISKET_PLANNING.maxMinutesPerPound,
  };
}
