interface Category {
  label: string;
  child: any[]; // You can specify a more specific type if needed
  key: string;
}

interface furnish {
  label: string;
  value: string;
}

export const data: Category[] = [
  {
    label: "Sell",
    child: [
      {
        label: "Residential",
        child: [
          {
            label: "Appartment",
            child: [],
            key: "appartment",
          },
          {
            label: "Villa",
            child: [],
            key: "villa",
          },
          {
            label: "Plot",
            child: [],
            key: "plot",
          },
          {
            label: "Builder Floor",
            child: [],
            key: "builder-floor",
          },
          {
            label: "Pent House",
            child: [],
            key: "pent-house",
          },
          {
            label: "Land",
            child: [],
            key: "land",
          },
          {
            label: "Studio Appartment",
            child: [],
            key: "studio-appartment",
          },
          {
            label: "Independent House",
            child: [],
            key: "independent-house",
          },
        ],
        key: "residential",
      },
      {
        label: "Commertial",
        child: [
          {
            label: "Land",
            child: [],
            key: "land",
          },
          {
            label: "Appartment",
            child: [],
            key: "appartment",
          },
          {
            label: "Villa",
            child: [],
            key: "villa",
          },
          {
            label: "Studio Appartment",
            child: [],
            key: "studio-appartment",
          },
          {
            label: "Independent House",
            child: [],
            key: "independent-house",
          },
          {
            label: "Plot",
            child: [],
            key: "plot",
          },
        ],
        key: "commeritial",
      },
      {
        label: "Agricultural",
        child: [
          {
            label: "Villa",
            child: [],
            key: "villa",
          },
          {
            label: "Independent House",
            child: [],
            key: "independent-house",
          },
          {
            label: "Appartment",
            child: [],
            key: "appartment",
          },
          {
            label: "Land",
            child: [],
            key: "land",
          },
        ],
        key: "agricultural",
      },
    ],
    key: "sell",
  },
  {
    label: "Rent/Lease",
    child: [
      {
        label: "Residential",
        child: [],
        key: "residential",
      },
      {
        label: "Commertial",
        child: [],
        key: "commeritial",
      },
      {
        label: "Agricultural",
        child: [],
        key: "agricultural",
      },
    ],
    key: "rent/lease",
  },
  {
    label: "Property Sharring",
    child: [
      {
        label: "Residential",
        child: [],
        key: "residential",
      },
      {
        label: "Agricultural",
        child: [],
        key: "agricultural",
      },
    ],
    key: "property_sharing",
  },
  {
    label: "Investment Sharing",
    child: [
      {
        label: "Residential",
        child: [],
        key: "residential",
      },
      {
        label: "Commertial",
        child: [],
        key: "commeritial",
      },
    ],
    key: "investment_sharing",
  },
  {
    label: "Find a Flatemate",
    child: [
      {
        label: "Residential",
        child: [],
        key: "residential",
      },
    ],
    key: "find_flate_mate",
  },
];

export const furnitureRadio: furnish[] = [
  {
    label: "Sofa",
    value: "sofa",
  },
  {
    label: "Refrigerator",
    value: "refrigerator",
  },
  {
    label: "ding table",
    value: "dining_table",
  },
  {
    label: "gas connection",
    value: "gas_connection",
  },
  {
    label: "Microwave",
    value: "micro_wave",
  },
  {
    label: "modular kitchen",
    value: "modular_kitchen",
  },
  {
    label: "washing machine",
    value: "washing_machine",
  },
];

export const aminity: furnish[] = [
  {
    label: "gym",
    value: "gym",
  },
  {
    label: "24X7 Security",
    value: "24x7_security",
  },
  {
    label: "Power Backup",
    value: "power_backup",
  },
  {
    label: "car parking",
    value: "car_parking",
  },
  {
    label: "Micerowave",
    value: "macro_wave",
  },
  {
    label: "Swimming Pool",
    value: "swimming_pool",
  },
  {
    label: "Spa",
    value: "spa",
  },
  {
    label: "Convenience Store",
    value: "convenience_store",
  },
  {
    label: "Visitor Parking",
    value: "visitor_parking",
  },
  {
    label: "Kids Play Area",
    value: "kids_play_area",
  },
  {
    label: "Badminton Court",
    value: "badminton_court",
  },
  {
    label: "Walking Track",
    value: "walking_track",
  },
  {
    label: "Park",
    value: "park",
  },
  {
    label: "Outdoor Play Area",
    value: "outdoor_play_area",
  },
  {
    label: "Table Tennis",
    value: "table_tennis",
  },
  {
    label: "Indoor Party Hall",
    value: "indoor_party_hall",
  },
  {
    label: "Garden Area",
    value: "garden_area",
  },
  {
    label: "Solar Fencing",
    value: "solar_fencing",
  },
];

export const ownerShiptype: furnish[] = [
  {
    label: "Freehold",
    value: "freehold",
  },
  {
    label: "Power of Attorney",
    value: "power_of_attorney",
  },
  {
    label: "Lasehold",
    value: "lease_hold",
  },
  {
    label: "co-operative society",
    value: "co_operative_society",
  },
];

export const availability: furnish[] = [
  {
    label: "Under Contruction",
    value: "under_construction",
  },
  {
    label: "Ready to Move",
    value: "ready_to_move",
  },
];

export const propertyAraeUnits = [
  "Sq ft",
  "Sq yards",
  "Acres",
  "Marla",
  "Cents",
  "Bigha",
  "Kottah",
  "Kanal",
  "Grounds",
  "Ares",
  "Biswa",
  "Guntha",
  "Aankadam",
  "Hectares",
  "Rood",
  "Chataks",
  "Perch",
];

export const furnishedStatus = [
  {
    label: "Furnished",
    key: "furnished",
    active: false,
  },
  {
    label: "Semi Furnished",
    key: "semi_frunished",
    active: false,
  },
  {
    label: "Un Furnished",
    key: "un_furnished",
    active: false,
  },
];

export const furnishingItems = [
  { key: "lights", label: "Lights", count: 0 },
  { key: "fans", label: "Fans", count: 0 },
  { key: "air_conditioner", label: "Air Conditioner", count: 0 },
  { key: "tv", label: "TV", count: 0 },
  { key: "beds", label: "Beds", count: 0 },
  { key: "wardrobe", label: "Wardrobe", count: 0 },
  { key: "geyser", label: "Geyser", count: 0 },
  { key: "modular_kitchen", label: "Modular Kitchen", count: 0 },
  { key: "dining_table", label: "Dining Table", count: 0 },
  { key: "stove", label: "Stove", count: 0 },
  { key: "fridge", label: "Fridge", count: 0 },
  { key: "water_purifier", label: "Water Purifier", count: 0 },
  { key: "sofa", label: "Sofa", count: 0 },
  { key: "washing_machine", label: "Washing Machine", count: 0 },
  { key: "microwave", label: "Microwave", count: 0 },
  { key: "chimney", label: "Chimney", count: 0 },
  { key: "exhaust_fan", label: "Exhaust Fan", count: 0 },
  { key: "curtains", label: "Curtains", count: 0 },
  { key: "matress", label: "Matress", count: 0 },
  { key: "fall_ceiling", label: "Fall Ceiling", count: 0 },
];
