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
            label: "Flat",
            child: [],
            key: "flat",
            active: true,
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
            label: "Service Apartments",
            child: [],
            key: "service-apartments",
            active: false,
          },
          {
            label: "Farm House",
            child: [],
            key: "farm-house",
            active: false,
          },
          {
            label: "Guest House",
            child: [],
            key: "guest-house",
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
        label: "Land/Plot",
        child: [
          {
            label: "Residential",
            child: [],
            key: "residential",
            active: false,
          },
          {
            label: "Commercial",
            child: [],
            key: "commercial",
            active: false,
          },
          {
            label: "Industrial",
            child: [],
            key: "industrial",
            active: false,
          },
          {
            label: "Agricultural",
            child: [],
            key: "agricultural",
            active: false,
          },
          {
            label: "Farm",
            child: [],
            key: "farm",
            active: false,
          },
          {
            label: "Institution",
            child: [],
            key: "institution",
            active: false,
          },
        ],
        key: "land_plot",
        active: false,
      },
      {
        label: "Office Space",
        child: [
          {
            label: "Ready to use",
            child: [],
            key: "ready-to-use",
            active: false,
          },
          {
            label: "Bare-Shell",
            child: [],
            key: "bare-shell",
            active: false,
          },
          {
            label: "Co-working",
            child: [],
            key: "co-working",
            active: false,
          },
        ],
        key: "office_space",
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
        label: "Flat",
        child: [],
        key: "flat",
        active: false,
      },
      {
        label: "Independent House",
        child: [],
        key: "independent-house",
        active: false,
      },
      {
        label: "Villa",
        child: [],
        key: "villa",
        active: false,
      },
      {
        label: "Service Apartment",
        child: [],
        key: "service-apartment",
        active: false,
      },
      {
        label: "Studio Apartment",
        child: [],
        key: "studio-apartment",
        active: false,
      },
    ],
    key: "find-a-flatemate",
    active: false,
  },
  {
    label: "List a Business",
    child: [
      {
        label: "Event Spaces",
        child: [],
        key: "event-spaces",
        active: false,
      },
      {
        label: "Parking",
        child: [
          {
            label: "2&3 Vehicle Parking",
            child: [],
            key: "2&3-vehicle-parking",
            active: false,
          },
          {
            label: "4&6 Vehicle Parking",
            child: [],
            key: "4&6-vehicle-parking",
            active: false,
          },
          {
            label: "Bus/Truck/Heavy Vehicle",
            child: [],
            key: "bus/truck/heavy-vehicle",
            active: false,
          },
        ],
        key: "parking",
        active: false,
      },
      {
        label: "Play Ground",
        child: [
          {
            label: "In-door",
            child: [],
            key: "in-door",
            active: false,
          },
          {
            label: "Out-door",
            child: [],
            key: "out-door",
            active: false,
          },
        ],
        key: "play-ground",
        active: false,
      },
      {
        label: "Hostel",
        child: [],
        key: "hostel",
        active: false,
      },
      {
        label: "Co-Working Space",
        child: [],
        key: "co-working-space",
        active: false,
      },
    ],
    key: "list-a-bussiness",
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
    active: false,
  },
  {
    label: "2",
    key: "2",
    active: false,
  },
  {
    label: "3",
    key: "3",
    active: false,
  },
  {
    label: "4",
    key: "4",
    active: false,
  },
  {
    label: "5",
    key: "5",
    active: false,
  },
  {
    label: "5+",
    key: "5+",
    active: false,
  },
];

export const bathroomsData = [
  {
    label: "1",
    key: "1",
    active: false,
  },
  {
    label: "2",
    key: "2",
    active: false,
  },
  {
    label: "3",
    key: "3",
    active: false,
  },
  {
    label: "4",
    key: "4",
    active: false,
  },
  {
    label: "5",
    key: "5",
    active: false,
  },
  {
    label: "5+",
    key: "5+",
    active: false,
  },
];

export const selectFloorData = [
  {
    label: "1",
    value: "1",
    key: "1",
  },
  {
    label: "2",
    value: "2",
    key: "2",
  },
  {
    label: "3",
    value: "3",
    key: "3",
  },
  {
    label: "4",
    value: "4",
    key: "4",
  },
  {
    label: "6",
    value: "6",
    key: "6",
  },
  {
    label: "7",
    value: "7",
    key: "7",
  },
  {
    label: "8",
    value: "8",
    key: "8",
  },
  {
    label: "9",
    value: "9",
    key: "9",
  },
  {
    label: "10",
    value: "10",
    key: "10",
  },
  {
    label: "10+",
    value: "10+",
    key: "10+",
  },
];

export const facingData = [
  {
    label: "East",
    value: "East",
    key: "east",
  },
  {
    label: "West",
    value: "West",
    key: "west",
  },
  {
    label: "South",
    value: "South",
    key: "south",
  },
  {
    label: "North",
    value: "North",
    key: "north",
  },
  {
    label: "North-East",
    value: "North-East",
    key: "north-east",
  },
  {
    label: "South-East",
    value: "South-East",
    key: "south-east",
  },
  {
    label: "South-West",
    value: "South-West",
    key: "south-west",
  },
  {
    label: "West-North",
    value: "West-North",
    key: "west-north",
  },
];

export const availabilityData = [
  {
    label: "Ready to Move ",
    key: "ready_to_move",
    active: false,
  },
  {
    label: "Under Construction",
    key: "under_construction",
    active: false,
  },
];

export const propertyAraeUnits = [
  {
    label: "Sq ft",
    value: "Sq ft",
    key: "Sq-ft",
  },
  {
    label: "Sq yards",
    value: "Sq yards",
    key: "Sq-yards",
  },
  {
    label: "Acres",
    value: "Acres",
    key: "acres",
  },
  {
    label: "Marla",
    value: "Marla",
    key: "marla",
  },
  {
    label: "Cents",
    value: "Cents",
    key: "cents",
  },
  {
    label: "Bigha",
    value: "Bigha",
    key: "bigha",
  },
  {
    label: "Kottah",
    value: "Kottah",
    key: "kottah",
  },
  {
    label: "Kanal",
    value: "Kanal",
    key: "kanal",
  },
  {
    label: "Grounds",
    value: "Grounds",
    key: "grounds",
  },
  {
    label: "Ares",
    value: "Ares",
    key: "ares",
  },
  {
    label: "Biswa",
    value: "Biswa",
    key: "biswa",
  },
  {
    label: "Guntha",
    value: "Guntha",
    key: "guntha",
  },
  {
    label: "Aankadam",
    value: "Aankadam",
    key: "aankadam",
  },
  {
    label: "Hectares",
    value: "Hectares",
    key: "Hectares",
  },
  {
    label: "Rood",
    value: "Rood",
    key: "rood",
  },
  {
    label: "Chataks",
    value: "Chataks",
    key: "chataks",
  },
  {
    label: "Perch",
    value: "Perch",
    key: "perch",
  },
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

export const otherRoomsData = [
  {
    label: "Pooja Room",
    key: "pooja_room",
    active: false,
  },
  {
    label: "Servant Room ",
    key: "servent_room",
    active: false,
  },
  {
    label: "Study Room",
    key: "study_room",
    active: false,
  },
  {
    label: "Store Room",
    key: "store_room",
    active: false,
  },
];

export const propertyFeaturesData = [
  {
    label: "High Ceiling height",
    key: "high_ceiling_height",
    active: false,
  },
  {
    label: "Piped gas",
    key: "piped_gas",
    active: false,
  },
  {
    label: "False Ceiling Lighting",
    key: "false_ceiling_lighting",
    active: false,
  },
  {
    label: "Airy Rooms",
    key: "airy_rooms",
    active: false,
  },
  {
    label: "Internet/Wi-Fi connectivity",
    key: "internet/Wi-Fi_connectivity",
    active: false,
  },
  {
    label: "Recently Renovated",
    key: "recently_renovated",
    active: false,
  },
  {
    label: "Spacious Interiors",
    key: "spacious_interiors",
    active: false,
  },
  {
    label: "Water Purifier",
    key: "water_purifier",
    active: false,
  },
  {
    label: "Private Garden",
    key: "private_garden",
    active: false,
  },
  {
    label: "Natural Light",
    key: "natural_light",
    active: false,
  },
  {
    label: "Central AC ",
    key: "central-ac ",
    active: false,
  },
];

export const SocietyBuildingFeaturesData = [
  {
    label: "Fitness Center",
    key: "fitness_center",
    active: false,
  },
  {
    label: "Swimming Pool",
    key: "swimming_pool",
    active: false,
  },
  {
    label: "Security Personnel",
    key: "security_personnel",
    active: false,
  },
  {
    label: "Club House",
    key: "club_house",
    active: false,
  },
  {
    label: "Gated Society",
    key: "gated_society",
    active: false,
  },
  {
    label: "Corner Property",
    key: "corner_property",
    active: false,
  },
  {
    label: "Pet Friendly",
    key: "pet_friendly",
    active: false,
  },
  {
    label: "Park/Garden",
    key: "park/garden",
    active: false,
  },
  {
    label: "Pool",
    key: "pool",
    active: false,
  },
  {
    label: "Main Road",
    key: "main_road",
    active: false,
  },
];

export const waterSourcesData = [
  {
    label: "24/7 Water Supply",
    key: "24/7_water_supply",
    active: false,
  },
  {
    label: "Tank/Borewell",
    key: "tank/borewell",
    active: false,
  },
  {
    label: "Municipal Corporation",
    key: "municipal_corporation",
    active: false,
  },
];

export const typeOfFloorData = [
  {
    label: "Marble",
    value: "Marble",
    key: "marble",
  },
  {
    label: "Concrete",
    value: "Concrete",
    key: "concrete",
  },
  {
    label: "Polished Concrete",
    value: "Polished Concrete",
    key: "polished_concrete",
  },
  {
    label: "Granite",
    value: "Granite",
    key: "granite",
  },
  {
    label: "Ceramic",
    value: "Ceramic",
    key: "ceramic",
  },
  {
    label: "Stone",
    value: "Stone",
    key: "stone",
  },
  {
    label: "Vinyl",
    value: "Vinyl",
    key: "vinyl",
  },
  {
    label: "Wood",
    value: "Wood",
    key: "wood",
  },
  {
    label: "Vitrified",
    value: "Vitrified",
    key: "vitrified",
  },
  {
    label: "Spartex",
    value: "Spartex",
    key: "spartex",
  },
  {
    label: "IPS Finish",
    value: "IPS Finish",
    key: "ips_finish",
  },
  {
    label: "Other",
    value: "Other",
    key: "other",
  },
];

export const widthOfFacingRoadData = [
  {
    label: "Ft",
    value: "Ft",
    key: "ft",
  },
  {
    label: "Meter",
    value: "Meter",
    key: "meter",
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

export const parkingData = [
  {
    label: "Car Parking",
    count: 0,
    key: "car_parking",
  },
];
export const visitorParkingData = [
  {
    label: "Visitor Parking",
    count: 0,
    key: "visitor_parking",
  },
];

export const ownerShipData = [
  {
    label: "Self Owned",
    key: "self_owned",
    active: false,
  },
  {
    label: "On Lease",
    key: "on_lease",
    active: false,
  },
  {
    label: "POA",
    key: "poa",
    active: false,
  },
  {
    label: "Multiple Owners",
    key: "multiple_owners",
    active: false,
  },
  {
    label: "Co-operative Society",
    key: "co-operative_society",
    active: false,
  },
];

export const proximityFeaturesData = [
  { key: "close_to_school", label: "Close to School", active: false },
  { key: "close_to_hospital", label: "Close to Hospital", active: false },
  {
    key: "close_to_metro_station",
    label: "Close to Metro Station",
    active: false,
  },
  { key: "close_to_airport", label: "Close to Airport", active: false },
  { key: "close_to_mall", label: "Close to Mall", active: false },
  {
    key: "close_to_railway_station",
    label: "Close to Railway Station",
    active: false,
  },
  { key: "close_to_highway", label: "Close to Highway", active: false },
  { key: "close_to_market", label: "Close to Market", active: false },
  {
    key: "good_air_quality",
    label: "Good Air Quality (Air Quality Rating)",
    active: false,
  },
  {
    key: "good_water_quality",
    label: "Good Water Quality (Water Quality Rating)",
    active: false,
  },
  {
    key: "walk_friendly_community",
    label: "Walk Friendly Community",
    active: false,
  },
  { key: "noise_free_community", label: "Noise Free Community", active: false },
];

export const propertyDocumentsData = [
  {
    key: "sale_deed",
    label: "Sale Deed",
    uploaded: false,
    status: false,
    uploadOn: "",
  },
  {
    key: "link_documents",
    label: "Link Documents",
    uploaded: false,
    status: false,
    uploadOn: "",
  },
  {
    key: "market_value_certificate",
    label: "Market Value Certificate",
    uploaded: false,
    status: false,
    uploadOn: "",
  },
  {
    key: "latest_ec",
    label: "Latest EC",
    uploaded: false,
    status: false,
    uploadOn: "",
  },
  {
    key: "approved_plan_copy",
    label: "Approved Plan Copy",
    uploaded: false,
    status: false,
    uploadOn: "",
  },
  {
    key: "electricity_bill",
    label: "Electricity Bill",
    uploaded: false,
    status: false,
    uploadOn: "",
  },
  {
    key: "property_tax",
    label: "Property Tax",
    uploaded: false,
    status: false,
    uploadOn: "",
  },
  {
    key: "owner_aadhar_card",
    label: "Owner Aadhar Card",
    uploaded: false,
    status: false,
    uploadOn: "",
  },
  {
    key: "owner_pan_card",
    label: "Owner Pan Card",
    uploaded: false,
    status: false,
    uploadOn: "",
  },
  {
    key: "others",
    label: "Others",
    uploaded: false,
    status: false,
    uploadOn: "",
  },
];

export const imgCategory = [
  {
    label: "BATHROOM",
    value: "BATHROOM",
    key: "bathroom",
  },
  {
    label: "HALL",
    value: "HALL",
    key: "hall",
  },
  {
    label: "BEDROOM",
    value: "BEDROOM",
    key: "bedroom",
  },
  {
    label: "DRAWING ROOM",
    value: "DRAWING ROOM",
    key: "drawing_room",
  },
  {
    label: "DINING HALL",
    value: "DINING HALL",
    key: "dining_hall",
  },
  {
    label: "GUEST ROOM",
    value: "GUEST ROOM",
    key: "guest_room",
  },
  {
    label: "KITCHEN",
    value: "KITCHEN",
    key: "kichen",
  },
  {
    label: "BASEMENT",
    value: "BASEMENT",
    key: "basement",
  },
];

export const bedRoomsForStudioAppartmentsData = [
  {
    label: "1BHK",
    key: "1bhk",
    active: false,
  },
];

export const bathRoomForStudioAppartmentData = [
  {
    label: "1",
    key: "1",
    active: false,
  },
];

export const noiseLevelData = [
  {
    label: "High",
    key: "high",
    active: false,
  },
  {
    label: "Medium",
    key: "medium",
    active: false,
  },
  {
    label: "Low",
    key: "low",
    active: false,
  },
];

export const genderData = [
  {
    label: "Male",
    key: "male",
    active: false,
  },
  {
    label: "Female",
    key: "female",
    active: false,
  },
  {
    label: "Other",
    key: "other",
    active: false,
  },
];

export const availabilityForFindaFlatemateData = [
  {
    label: "Ready to move",
    key: "ready-to-move",
    active: false,
  },
];

export const propensityData = [
  {
    label: "Vegetarian",
    key: "vegetarian",
    active: false,
  },
  {
    label: "Non-Vegetarian",
    key: "non-vegetarian",
    active: false,
  },
  {
    label: "Vegan",
    key: "vegan",
    active: false,
  },
];

export const professionDetailsData = [
  {
    label: "IT-Software",
    key: "it-software",
    active: false,
  },
  {
    label: "Non-IT",
    key: "non-it",
    active: false,
  },
  {
    label: "Business",
    key: "business",
    active: false,
  },
  {
    label: "Student",
    key: "student",
    active: false,
  },
  {
    label: "Others",
    key: "others",
    active: false,
  },
];

export const transationTypeforParkingData = [
  {
    label: "Book Days",
    key: "book-days",
    active: false,
  },
  {
    label: "Book Hourly",
    key: "book-hourly",
    active: false,
  },
  {
    label: "Book Monthly",
    key: "book-monthly",
    active: false,
  },
];

export const propertyDetailsForparkingData = [
  {
    label: "Open Parking",
    key: "open-parking",
    active: false,
  },
  {
    label: "Closed Parking",
    key: "closed-parking",
    active: false,
  },
];

export const parkingRoomsData = [
  {
    label: "Locker Room",
    key: "locker-room",
    active: false,
  },
];

export const parkingAvailabilityData = [
  {
    label: "Available to park",
    key: "available-to-park",
    active: false,
  },
];

export const selectOpenGroundsData = [
  {
    label: "1",
    value: "1",
    key: "1",
  },
  {
    label: "2",
    value: "2",
    key: "2",
  },
  {
    label: "3",
    value: "3",
    key: "3",
  },
  {
    label: "4",
    value: "4",
    key: "4",
  },
  {
    label: "6",
    value: "6",
    key: "6",
  },
  {
    label: "7",
    value: "7",
    key: "7",
  },
  {
    label: "8",
    value: "8",
    key: "8",
  },
  {
    label: "9",
    value: "9",
    key: "9",
  },
  {
    label: "10",
    value: "10",
    key: "10",
  },
  {
    label: "10+",
    value: "10+",
    key: "10+",
  },
];
export const selectBoxGroundsData = [
  {
    label: "1",
    value: "1",
    key: "1",
  },
  {
    label: "2",
    value: "2",
    key: "2",
  },
  {
    label: "3",
    value: "3",
    key: "3",
  },
  {
    label: "4",
    value: "4",
    key: "4",
  },
  {
    label: "6",
    value: "6",
    key: "6",
  },
  {
    label: "7",
    value: "7",
    key: "7",
  },
  {
    label: "8",
    value: "8",
    key: "8",
  },
  {
    label: "9",
    value: "9",
    key: "9",
  },
  {
    label: "10",
    value: "10",
    key: "10",
  },
  {
    label: "10+",
    value: "10+",
    key: "10+",
  },
];
export const selectPavilianData = [
  {
    label: "1",
    value: "1",
    key: "1",
  },
  {
    label: "2",
    value: "2",
    key: "2",
  },
  {
    label: "3",
    value: "3",
    key: "3",
  },
  {
    label: "4",
    value: "4",
    key: "4",
  },
  {
    label: "6",
    value: "6",
    key: "6",
  },
  {
    label: "7",
    value: "7",
    key: "7",
  },
  {
    label: "8",
    value: "8",
    key: "8",
  },
  {
    label: "9",
    value: "9",
    key: "9",
  },
  {
    label: "10",
    value: "10",
    key: "10",
  },
  {
    label: "10+",
    value: "10+",
    key: "10+",
  },
];

export const selectChangingRoomData = [
  {
    label: "1",
    value: "1",
    key: "1",
  },
  {
    label: "2",
    value: "2",
    key: "2",
  },
  {
    label: "3",
    value: "3",
    key: "3",
  },
  {
    label: "4",
    value: "4",
    key: "4",
  },
  
];
export const selectWashRoomData = [
  {
    label: "1",
    value: "1",
    key: "1",
  },
  {
    label: "2",
    value: "2",
    key: "2",
  },
  {
    label: "3",
    value: "3",
    key: "3",
  },
  {
    label: "4",
    value: "4",
    key: "4",
  },
];

export const playGroundAvailabilityData = [
  {
    label: "Available",
    key: "available",
    active: false,
  },
];
