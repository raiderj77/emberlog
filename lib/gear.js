// Curated BBQ gear per protein, linked to Amazon via search URLs (Associate tag).
// Static curated links, no API needed, works on the static export.
// Amazon Associates pays on any qualifying purchase within 24h of the click,
// so category search links earn even when the buyer picks a different item.

export const AMAZON_TAG = "ytearnings-20";

const THERMO = { icon: "🌡️", label: "Instant-read thermometer", q: "instant read meat thermometer" };

export const GEAR = {
  "Brisket (packer)": [
    THERMO,
    { icon: "🪵", label: "Post oak wood chunks", q: "post oak smoking wood chunks" },
    { icon: "🧂", label: "Brisket rub (salt · pepper · garlic)", q: "brisket rub salt pepper garlic" },
    { icon: "🧻", label: "Pink butcher paper (for the wrap)", q: "pink butcher paper roll 18 inch" },
  ],
  "Pork shoulder / butt": [
    THERMO,
    { icon: "🪵", label: "Apple or hickory wood", q: "apple hickory smoking wood chunks" },
    { icon: "🧂", label: "Pork / BBQ rub", q: "pork bbq rub" },
    { icon: "💉", label: "Meat injector kit", q: "meat injector kit bbq" },
  ],
  "Spare ribs": [
    THERMO,
    { icon: "🪵", label: "Apple or hickory wood", q: "apple hickory smoking wood chunks" },
    { icon: "🧂", label: "Rib rub", q: "bbq rib rub" },
    { icon: "🧻", label: "Butcher paper / foil (for the wrap)", q: "pink butcher paper roll" },
  ],
  "Baby back ribs": [
    THERMO,
    { icon: "🪵", label: "Apple or cherry wood", q: "apple cherry smoking wood chunks" },
    { icon: "🧂", label: "Rib rub", q: "bbq rib rub" },
    { icon: "🗜️", label: "Rib rack for the smoker", q: "rib rack for smoker" },
  ],
  "Whole chicken": [
    THERMO,
    { icon: "🪵", label: "Apple or cherry wood", q: "apple cherry smoking wood chunks" },
    { icon: "🧂", label: "Poultry rub", q: "bbq chicken poultry rub" },
    { icon: "🪑", label: "Beer-can chicken stand", q: "beer can chicken holder stand" },
  ],
  "Turkey (whole)": [
    THERMO,
    { icon: "🪵", label: "Cherry or pecan wood", q: "cherry pecan smoking wood chunks" },
    { icon: "🧂", label: "Turkey brine kit", q: "turkey brine kit" },
    { icon: "💉", label: "Turkey injector", q: "turkey injector kit" },
  ],
  "Pork loin": [
    THERMO,
    { icon: "🪵", label: "Apple wood", q: "apple smoking wood chunks" },
    { icon: "🧂", label: "Pork rub", q: "pork loin rub" },
    { icon: "📡", label: "Leave-in probe thermometer", q: "leave in probe thermometer smoker" },
  ],
  "Beef short ribs": [
    THERMO,
    { icon: "🪵", label: "Oak or hickory wood", q: "oak hickory smoking wood chunks" },
    { icon: "🧂", label: "Beef rub (salt · pepper · garlic)", q: "beef rub salt pepper garlic" },
    { icon: "🧤", label: "Heat-resistant gloves", q: "bbq heat resistant gloves" },
  ],
};
