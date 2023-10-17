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

export const balconiesData = [
  {
    label: "1",
    key: "1",
    active: false
  },
  {
    label: "2",
    key: "2",
    active: false
  },
  {
    label: "3",
    key: "3",
    active: false
  },
  {
    label: "4",
    key: "4",
    active: false
  },
  {
    label: "5",
    key: "5",
    active: false
  },
  {
    label: "5+",
    key: "5+",
    active: false
  },
]

export const bathroomsData = [
  {
    label: "1",
    key: "1",
    active: false
  },
  {
    label: "2",
    key: "2",
    active: false
  },
  {
    label: "3",
    key: "3",
    active: false
  },
  {
    label: "4",
    key: "4",
    active: false
  },
  {
    label: "5",
    key: "5",
    active: false
  },
  {
    label: "5+",
    key: "5+",
    active: false
  },
]

export const selectFloorData = [
  {
    label: "1",
    value: "1",
    key: "1"
  },
  {
    label: "2",
    value: "2",
    key: "2"
  },
  {
    label: "3",
    value: "3",
    key: "3"
  },
  {
    label: "4",
    value: "4",
    key: "4"
  },
  {
    label: "6",
    value: "6",
    key: "6"
  },
  {
    label: "7",
    value: "7",
    key: "7"
  },
  {
    label: "8",
    value: "8",
    key: "8"
  },
  {
    label: "9",
    value: "9",
    key: "9"
  },
  {
    label: "10",
    value: "10",
    key: "10"
  },
  {
    label: "10+",
    value: "10+",
    key: "10+"
  },
]

export const facingData = [
  {
    label: "East",
    value: "East",
    key: "east"
  },
  {
    label: "West",
    value: "West",
    key: "west"
  },
  {
    label: "South",
    value: "South",
    key: "south"
  },
  {
    label: "North",
    value: "North",
    key: "north"
  },
  {
    label: "North-East",
    value: "North-East",
    key: "north-east"
  },
  {
    label: "South-East",
    value: "South-East",
    key: "south-east"
  },
  {
    label: "South-West",
    value: "South-West",
    key: "south-west"
  },
  {
    label: "West-North",
    value: "West-North",
    key: "west-north"
  }
]

export const availabilityData = [
  {
    label: "Ready to Move ",
    key: "ready_to_move",
    active: false
  },
  {
    label: "Under Construction",
    key: "under_construction",
    active: false
  },
]