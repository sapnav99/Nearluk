interface Category {
  label: string;
  child: Category[]; // You can specify a more specific type if needed
  key: string;
  active: boolean;
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
            active: true,
          },
          {
            label: "Villa",
            child: [],
            key: "villa",
            active: false,
          },
          {
            label: "Plot",
            child: [],
            key: "plot",
            active: false,
          },
          {
            label: "Builder Floor",
            child: [],
            key: "builder-floor",
            active: false,
          },
          {
            label: "Pent House",
            child: [],
            key: "pent-house",
            active: false,
          },
          {
            label: "Land",
            child: [],
            key: "land",
            active: false,
          },
          {
            label: "Studio Appartment",
            child: [],
            key: "studio-appartment",
            active: false,
          },
          {
            label: "Independent House",
            child: [],
            key: "independent-house",
            active: false,
          },
        ],
        key: "residential",
        active: true,
      },
      {
        label: "Commertial",
        child: [
          {
            label: "Land",
            child: [],
            key: "land",
            active: false,
          },
          {
            label: "Appartment",
            child: [],
            key: "appartment",
            active: false,
          },
          {
            label: "Villa",
            child: [],
            key: "villa",
            active: false,
          },
          {
            label: "Studio Appartment",
            child: [],
            key: "studio-appartment",
            active: false,
          },
          {
            label: "Independent House",
            child: [],
            key: "independent-house",
            active: false,
          },
          {
            label: "Plot",
            child: [],
            key: "plot",
            active: false,
          },
        ],
        key: "commeritial",
        active: false,
      },
      {
        label: "Agricultural",
        child: [
          {
            label: "Villa",
            child: [],
            key: "villa",
            active: false,
          },
          {
            label: "Independent House",
            child: [],
            key: "independent-house",
            active: false,
          },
          {
            label: "Appartment",
            child: [],
            key: "appartment",
            active: false,
          },
          {
            label: "Land",
            child: [],
            key: "land",
            active: false,
          },
        ],
        key: "agricultural",
        active: false,
      },
    ],
    key: "sell",
    active: true,
  },
  {
    label: "Rent/Lease",
    child: [
      {
        label: "Residential",
        child: [],
        key: "residential",
        active: false,
      },
      {
        label: "Commertial",
        child: [],
        key: "commeritial",
        active: false,
      },
      {
        label: "Agricultural",
        child: [],
        key: "agricultural",
        active: false,
      },
    ],
    key: "rent/lease",
    active: false,
  },
  {
    label: "Property Sharring",
    child: [
      {
        label: "Residential",
        child: [],
        key: "residential",
        active: false,
      },
      {
        label: "Agricultural",
        child: [],
        key: "agricultural",
        active: false,
      },
    ],
    key: "property_sharing",
    active: false,
  },
  {
    label: "Investment Sharing",
    child: [
      {
        label: "Residential",
        child: [],
        key: "residential",
        active: false,
      },
      {
        label: "Commertial",
        child: [],
        key: "commeritial",
        active: false,
      },
    ],
    key: "investment_sharing",
    active: false,
  },
  {
    label: "Find a Flatemate",
    child: [
      {
        label: "Residential",
        child: [],
        key: "residential",
        active: false,
      },
    ],
    key: "find_flate_mate",
    active: false,
  },
];

export const gatedCommunityData = [
  {
    label: "Yes",
    key: "Yes",
    active: false,
  },
  {
    label: "No",
    key: "No",
    active: false,
  },
];

export const transationTypeData = [
  {
    label: "New",
    key: "New",
    active: false,
  },
  {
    label: "Pre-Owned",
    key: "Pre-Owned",
    active: false,
  },
];

export const propertyDetailsData = [
  {
    label: "1BHK",
    key: "1bhk",
    active: false,
  },
  {
    label: "2BHK",
    key: "2bhk",
    active: false,
  },
  {
    label: "3BHK",
    key: "3bhk",
    active: false,
  },
  {
    label: "4BHK",
    key: "4bhk",
    active: false,
  },
  {
    label: "4+BHK",
    key: "4+bhk",
    active: false,
  },
];
