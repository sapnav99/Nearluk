import React, { useState, useMemo } from "react";
import SectionHoc from "../../components/Property/SectionHoc";
import Chip from "../../components/Chip/Chip";
import {
  propertyDetailsData,
  balconiesData,
  bathroomsData,
  selectFloorData,
  facingData,
  availabilityData,
  propertyAraeUnits,
  furnishedStatus,
  otherRoomsData,
  propertyFeaturesData,
  SocietyBuildingFeaturesData,
  waterSourcesData,
  typeOfFloorData,
  widthOfFacingRoadData,
  parkingData,
  visitorParkingData,
  bedRoomsForStudioAppartmentsData,
  bathRoomForStudioAppartmentData,
  noiseLevelData,
  availabilityForFindaFlatemateData,
  propensityData,
  professionDetailsData,
  propertyDetailsForparkingData,
  parkingRoomsData,
  parkingAvailabilityData,
  selectOpenGroundsData,
  selectBoxGroundsData,
  selectPavilianData,
  selectChangingRoomData,
  selectWashRoomData,
  playGroundAvailabilityData,
  decorationData,
  djData,
  photoShootData,
  eventSpacingAmenitiesData,
  foodTypeData,
  beverageData,
  eventSpaceBookingTypeData,
  hostelSharingData,
  selectHostelRoomsData,
  hostelAvailabilityData,
  foodDetailsData,
  hostelRoomAmenitiesData,
  coworkingAmenitiesData,
  furnishingItems,
} from "./helper/PostPropertyData";
import { activateItemByKey } from "./helper/PostPropertyHelper";
import PropInput from "../../components/Property/PropInput/PropInput";
import { Select } from "antd";
import PropChipWithCheckBox from "../../components/Property/PropChipWithCheckBox/PropChipWithCheckBox";
import FurnishingStatusModal from "./helper/FurnishingStatusModal.tsx/FurnishingStatusModal";
import SemiFurnishedStatusModal from "./helper/SemiFurnishedStatusModal/SemiFurnishedStatusModal";
import { Button, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { DatePicker } from "antd";
import type { DatePickerProps } from "antd";
import { postpropertyAction } from "./redux/action";

// type animitiestype = { label: string; key: string; active: boolean }[];

type stepTwoProps = {
  current: any;
  steps: any;
  setCurrent: any;
};

const PostPropertyTwo: React.FC<stepTwoProps> = ({
  current,
  steps,
  setCurrent,
}: stepTwoProps) => {
  const [propertyDetails, setPropertyDetails] = useState(propertyDetailsData);
  const [balconies, setBalconies] = useState(balconiesData);
  const [bathRooms, setBatchRooms] = useState(bathroomsData);
  const [availability, setAvailability] = useState(availabilityData);
  const [furnished, setFurnished] = useState(furnishedStatus);
  const [otherRooms, setOtherRooms] = useState(otherRoomsData);
  const [propertyFeatures, setPropertyFeatures] =
    useState(propertyFeaturesData);
  const [societyBuildingFeatures, setSocietyBuildingFeatures] = useState(
    SocietyBuildingFeaturesData
  );
  const [furnishingItemsObj, setFurnishingItemsObj]: any = useState([]);
  // const [semiFurnishedItemObj, setSemiFurnishedItemObj] = useState([]);
  const [waterSources, setWaterSources] = useState(waterSourcesData);
  const [openFurnishingModal, setOpenFurnishingModal] = useState(false);
  const [openSemiFurnishedModal, setSemiFurnishedModal] = useState(false);
  const [parkingConut, setParkingCount] = useState(parkingData);
  const [visitorCount, setVisitorCount] = useState(visitorParkingData);
  const [bedRoomForStudioAppartment, setBedRoomForStuidioAppartment] = useState(
    bedRoomsForStudioAppartmentsData
  );
  const [availabilityForFindaFlatemate, setAvailabilityForFindaFlatemate] =
    useState(availabilityForFindaFlatemateData);
  const [bathRoomForStudioAppartment, setBathRoomForStudioAppartment] =
    useState(bathRoomForStudioAppartmentData);
  const [noiseLevel, setNoiseLevel] = useState(noiseLevelData);
  const [propensity, setPropensity] = useState(propensityData);
  const [professionDetails, setProfessionDetails] = useState(
    professionDetailsData
  );
  const [parkingPropertyDetails, setParkingPropertyDetails] = useState(
    propertyDetailsForparkingData
  );
  const [parkingRooms, setParkingRooms] = useState(parkingRoomsData);
  const [parkingAvailability, setParkingAvailability] = useState(
    parkingAvailabilityData
  );
  const [playGroundAvailability, setPlayGroundAvailability] = useState(
    playGroundAvailabilityData
  );
  const [decoration, setDecoration] = useState(decorationData);
  const [dj, setDj] = useState(djData);
  const [photoShoots, setPhotoShoots] = useState(photoShootData);
  const [eventSpacingAmenities, setEventSpacingAmenities] = useState(
    eventSpacingAmenitiesData
  );
  const [foodType, setFoodType] = useState(foodTypeData);
  const [beverages, setBeverages] = useState(beverageData);
  const [bookingType, setBookingType] = useState(eventSpaceBookingTypeData);
  const [hostelSharing, setHostelSharing] = useState(hostelSharingData);
  const [hostelAvailability, setHostelAvailability] = useState(
    hostelAvailabilityData
  );
  const [foodDetails, setFoodDetails] = useState(foodDetailsData);
  const [hostelRoomAmenities, setHostelRoomAmenities] = useState(
    hostelRoomAmenitiesData
  );
  const [coworkingAmenities, setCoworkingAmenities] = useState(
    coworkingAmenitiesData
  );
  const [itemToShow, setItemToShow] = useState(6);
  const [stepTwoData, setStepTwoData] = useState({
    builtup_area: "",
    carpet_area: "",
    availability: "",
    undivided_share: "",
    undivided_share_units: "",
    builtup_units: "",
    carpet_units: "",
    furnished_status: "",
    bhk: "",
    balconies: "",
    bathrooms: "",
    floor_no: "",
    total_floors: "",
    facing: "",
    property_age: "",
    possession_date: "",
    water_source: "",
    floor_types: "",
    width_of_facing_road: "",
    width_of_facing_road_units: "",
    noise: "",
    propensity: "",
    drinking: false,
    smoking: false,
    profession: "",
    parking_details: "",
    parking_area: "",
    parking_capacity: "",
    parking_price_per_hour: "",
    parking_price_per_day: "",
    parking_price_per_month: "",
    parking_other_price: "",
    parking_booking_amount: "",
    parking_price_per_charging: "",
    no_of_open_ground: "",
    no_of_box_grouunds: "",
    pavilian: "",
    changing_rooms: "",
    wash_rooms: "",
    ground_area: "",
    ground_area_units: "",
    ground_seating_capacity: "",
    ground_seating_units: "",
    ac_rooms: "",
    non_ac_rooms: "",
    event_spacing_car_parking: "",
    event_spacing_2wheel_parking: "",
    event_spacing_visitor_parking: "",
    event_spacing_wallet_parking: "",
    booking_type: "",
    hotel_sharing: "",
    rooms_on_floor: "",
    hostel_room_area: "",
    hostel_room_units: "",
    no_of_seats: "",
    total_seating_capacity: "",
    seating_capacity_units: "",
  });

  const dispatch = useDispatch();
  // console.log("propensity :", propensity);

  const stepOneData = useSelector(
    (state: any) => state?.PostpropertyReducer?.propertyState
  );
  // console.log("step one data from step two", stepOneData);

  const otherStepTwoData = useMemo(
    () => ({
      property_extras: otherRooms.filter((item: any) => item.active === true),
      property_features: propertyFeatures.filter(
        (item: any) => item.active === true
      ),
      property_building_features: societyBuildingFeatures.filter(
        (item: any) => item.active === true
      ),
      furnishing: furnishingItemsObj?.filter((item: any) => item?.count > 0),
      visitor_parking: visitorCount[0].count,
      car_parking: parkingConut[0].count,
      parking_rooms: parkingRooms.filter((item: any) => item.active === true),
      decorations: decoration.filter((item: any) => item.active === true),
      dj: dj.filter((item: any) => item.active === true),
      photoshoots: photoShoots.filter((item: any) => item.active === true),
      event_spacing_amenities: eventSpacingAmenities.filter(
        (item: any) => item.active === true
      ),
      food_type: foodType.filter((item: any) => item.active === true),
      beverages: beverages.filter((item: any) => item.active === true),
      fooddetails: foodDetails.filter((item: any) => item.active === true),
      hostel_room_amenities: hostelRoomAmenities.filter(
        (item: any) => item.active === true
      ),
      coworking_amenities: coworkingAmenities.filter(
        (item: any) => item.active === true
      ),
    }),
    [
      otherRooms,
      propertyFeatures,
      societyBuildingFeatures,
      furnishingItemsObj,
      visitorCount,
      parkingConut,
      parkingRooms,
      dj,
      photoShoots,
      eventSpacingAmenities,
      foodType,
      beverages,
      foodDetails,
      hostelRoomAmenities,
      coworkingAmenities,
    ]
  );

  const totalState = { ...stepOneData, ...stepTwoData, ...otherStepTwoData };

  const handleChange = (value: { value: string; label: React.ReactNode }) => {
    setStepTwoData({
      ...stepTwoData,
      floor_no: value.value,
    });
  };

  const handlecoworkingfloorChange = (value: {
    value: string;
    label: React.ReactNode;
  }) => {
    setStepTwoData({
      ...stepTwoData,
      floor_no: value.value,
    });
  };

  const handleHostelRoomChange = (value: {
    value: string;
    label: React.ReactNode;
  }) => {
    setStepTwoData({
      ...stepTwoData,
      rooms_on_floor: value.value,
    });
  };

  const handleOpenGroundChange = (value: {
    value: string;
    label: React.ReactNode;
  }) => {
    setStepTwoData({
      ...stepTwoData,
      no_of_open_ground: value.value,
    });
  };

  const handleWalletParkingChange = (value: {
    value: string;
    label: React.ReactNode;
  }) => {
    setStepTwoData({
      ...stepTwoData,
      event_spacing_wallet_parking: value.value,
    });
  };

  const handleBoxGroundChange = (value: {
    value: string;
    label: React.ReactNode;
  }) => {
    setStepTwoData({
      ...stepTwoData,
      no_of_box_grouunds: value.value,
    });
  };

  const handlePavilianChange = (value: {
    value: string;
    label: React.ReactNode;
  }) => {
    setStepTwoData({
      ...stepTwoData,
      pavilian: value.value,
    });
  };

  const handleChangingRoomsChange = (value: {
    value: string;
    label: React.ReactNode;
  }) => {
    setStepTwoData({
      ...stepTwoData,
      changing_rooms: value.value,
    });
  };

  const handleWashRoomsChange = (value: {
    value: string;
    label: React.ReactNode;
  }) => {
    setStepTwoData({
      ...stepTwoData,
      wash_rooms: value.value,
    });
  };

  const propertyAgeChangeHandle = (value: {
    value: string;
    label: React.ReactNode;
  }) => {
    setStepTwoData({
      ...stepTwoData,
      property_age: value.value,
    });
  };

  const propertyFacingChangeHandler = (value: {
    value: string;
    label: React.ReactNode;
  }) => {
    setStepTwoData({
      ...stepTwoData,
      facing: value.value,
    });
  };

  const propertySmokingChangeHandler = (value: {
    value: boolean;
    label: React.ReactNode;
  }) => {
    // console.log(value.value);
    setStepTwoData({
      ...stepTwoData,
      smoking: value.value,
    });
  };

  const propertyDrinkingChangeHandler = (value: {
    value: boolean;
    label: React.ReactNode;
  }) => {
    setStepTwoData({
      ...stepTwoData,
      drinking: value.value,
    });
  };

  const buidupAreaChangeHandler = (value: {
    value: string;
    label: React.ReactNode;
  }) => {
    setStepTwoData({
      ...stepTwoData,
      builtup_units: value.value,
    });
  };
  const HostelRoomAreaChangeHandler = (value: {
    value: string;
    label: React.ReactNode;
  }) => {
    setStepTwoData({
      ...stepTwoData,
      hostel_room_units: value.value,
    });
  };

  const groundAreaChangeHandler = (value: {
    value: string;
    label: React.ReactNode;
  }) => {
    setStepTwoData({
      ...stepTwoData,
      ground_area_units: value.value,
    });
  };

  const groundSeatingCapacityChangeHandler = (value: {
    value: string;
    label: React.ReactNode;
  }) => {
    setStepTwoData({
      ...stepTwoData,
      ground_seating_units: value.value,
    });
  };

  const carpetAreaChangeHandler = (value: {
    value: string;
    label: React.ReactNode;
  }) => {
    setStepTwoData({
      ...stepTwoData,
      carpet_units: value.value,
    });
  };

  const coworkingSeatingAreaChangeHandler = (value: {
    value: string;
    label: React.ReactNode;
  }) => {
    setStepTwoData({
      ...stepTwoData,
      seating_capacity_units: value.value,
    });
  };

  const undividedAreaChangeHandler = (value: {
    value: string;
    label: React.ReactNode;
  }) => {
    setStepTwoData({
      ...stepTwoData,
      undivided_share_units: value.value,
    });
  };

  const activeCheckboxForOtherRooms = (key: any) => {
    const shallowCopy = [...otherRooms];
    const updatedArry = shallowCopy.map((item: any) => ({
      ...item,
      active: item.key === key ? !item.active : item.active,
    }));
    setOtherRooms(updatedArry);
  };

  const activeCheckboxForParkingRooms = (key: any) => {
    const shallowCopy = [...parkingRooms];
    const updatedArry = shallowCopy.map((item: any) => ({
      ...item,
      active: item.key === key ? !item.active : item.active,
    }));
    setParkingRooms(updatedArry);
  };

  const activeCheckboxFordecorations = (key: any) => {
    const shallowCopy = [...decoration];
    const updatedArry = shallowCopy.map((item: any) => ({
      ...item,
      active: item.key === key ? !item.active : item.active,
    }));
    setDecoration(updatedArry);
  };

  const activeCheckboxForcoworkingAmenities = (key: any) => {
    const shallowCopy = [...coworkingAmenities];
    const updatedArry = shallowCopy.map((item: any) => ({
      ...item,
      active: item.key === key ? !item.active : item.active,
    }));
    setCoworkingAmenities(updatedArry);
  };

  const activeCheckboxFordj = (key: any) => {
    const shallowCopy = [...dj];
    const updatedArry = shallowCopy.map((item: any) => ({
      ...item,
      active: item.key === key ? !item.active : item.active,
    }));
    setDj(updatedArry);
  };
  const activeCheckboxForPhotoShoots = (key: any) => {
    const shallowCopy = [...photoShoots];
    const updatedArry = shallowCopy.map((item: any) => ({
      ...item,
      active: item.key === key ? !item.active : item.active,
    }));
    setPhotoShoots(updatedArry);
  };

  const activeCheckboxForEventSpacingAmenities = (key: any) => {
    const shallowCopy = [...eventSpacingAmenities];
    const updatedArry = shallowCopy.map((item: any) => ({
      ...item,
      active: item.key === key ? !item.active : item.active,
    }));
    setEventSpacingAmenities(updatedArry);
  };

  const activeCheckboxForFoodTypes = (key: any) => {
    const shallowCopy = [...foodType];
    const updatedArry = shallowCopy.map((item: any) => ({
      ...item,
      active: item.key === key ? !item.active : item.active,
    }));
    setFoodType(updatedArry);
  };

  const activeCheckboxForBeverages = (key: any) => {
    const shallowCopy = [...beverages];
    const updatedArry = shallowCopy.map((item: any) => ({
      ...item,
      active: item.key === key ? !item.active : item.active,
    }));
    setBeverages(updatedArry);
  };

  const activeCheckboxpropertyFeatures = (key: any) => {
    const shallowCopy = [...propertyFeatures];
    const updatedArry = shallowCopy.map((item: any) => ({
      ...item,
      active: item.key === key ? !item.active : item.active,
    }));
    setPropertyFeatures(updatedArry);
  };

  const activeCheckboxhostelAmenities = (key: any) => {
    const shallowCopy = [...hostelRoomAmenities];
    const updatedArry = shallowCopy.map((item: any) => ({
      ...item,
      active: item.key === key ? !item.active : item.active,
    }));
    setHostelRoomAmenities(updatedArry);
  };

  const activeCheckboxSocietyBuildingFeatures = (key: any) => {
    const shallowCopy = [...societyBuildingFeatures];
    const updatedArry = shallowCopy.map((item: any) => ({
      ...item,
      active: item.key === key ? !item.active : item.active,
    }));
    setSocietyBuildingFeatures(updatedArry);
  };

  const activeCheckboxWaterSources = (key: any) => {
    const shallowCopy = [...waterSources];
    const updatedArry = shallowCopy.map((item: any) => ({
      ...item,
      active: item.key === key && !item.active,
    }));
    setWaterSources(updatedArry);
    setStepTwoData({
      ...stepTwoData,
      water_source: key,
    });
  };

  const activeCheckboxNoiseLevel = (key: any) => {
    const shallowCopy = [...noiseLevel];
    const updatedArry = shallowCopy.map((item: any) => ({
      ...item,
      active: item.key === key && !item.active,
    }));
    setNoiseLevel(updatedArry);
    setStepTwoData({
      ...stepTwoData,
      noise: key,
    });
  };

  const activeCheckboxPropensity = (key: any) => {
    const shallowCopy = [...propensity];
    const updatedArry = shallowCopy.map((item: any) => ({
      ...item,
      active: item.key === key && !item.active,
    }));
    setPropensity(updatedArry);
    setStepTwoData({
      ...stepTwoData,
      propensity: key,
    });
  };

  const activeCheckboxFoodDetails = (key: any) => {
    const shallowCopy = [...foodDetails];
    const updatedArry = shallowCopy.map((item: any) => ({
      ...item,
      active: item.key === key ? !item.active : item.active,
    }));
    setFoodDetails(updatedArry);
  };

  const activeCheckboxProfessionDetails = (key: any) => {
    const shallowCopy = [...professionDetails];
    const updatedArry = shallowCopy.map((item: any) => ({
      ...item,
      active: item.key === key && !item.active,
    }));
    setProfessionDetails(updatedArry);
    setStepTwoData({
      ...stepTwoData,
      profession: key,
    });
  };

  const onChange: DatePickerProps["onChange"] = (_, dateString) => {
    setStepTwoData({
      ...stepTwoData,
      possession_date: dateString,
    });
  };

  const typeOfFloorChangeHandler = (value: {
    value: string;
    label: React.ReactNode;
  }) => {
    setStepTwoData({
      ...stepTwoData,
      floor_types: value.value,
    });
  };

  const widthOfFacingRoadChangeHandler = (value: {
    value: string;
    label: React.ReactNode;
  }) => {
    setStepTwoData({
      ...stepTwoData,
      width_of_facing_road_units: value.value,
    });
  };

  const decrementParkingCount = (key: any) => {
    const newArry = [...parkingConut];
    const updatedArry = newArry.map((item) => {
      if (item.key === key) {
        return {
          ...item,
          count: item.count - 1,
        };
      }
      return item;
    });
    setParkingCount(updatedArry);
  };

  const incrementParkingCount = (key: any) => {
    const newArry = [...parkingConut];
    const updatedArry = newArry.map((item) => {
      if (item.key === key) {
        return {
          ...item,
          count: item.count + 1,
        };
      }
      return item;
    });
    setParkingCount(updatedArry);
  };

  const vistorParkingDecrement = (olditem: any) => {
    const newArry = [...visitorCount];
    const updatedArry = newArry.map((item: any) => {
      if (item.key === olditem.key) {
        return {
          ...item,
          count: item.count - 1,
        };
      }
      return item;
    });
    setVisitorCount(updatedArry);
  };

  const visitorParkingIncrement = (olditem: any) => {
    const newArry = [...visitorCount];
    const updatedArry = newArry.map((item: any) => {
      if (item.key === olditem.key) {
        return {
          ...item,
          count: item.count + 1,
        };
      }
      return item;
    });
    setVisitorCount(updatedArry);
  };

  // console.log("step two Data", stepTwoData);
  return (
    <div>
      {stepOneData.property_type === "play-ground" && (
        <div className="play__ground_details_container">
          <h6 className="property__title">Play Ground Details</h6>
          <div className="paly__gorund_details_wrapper">
            <div className="play__ground_details_select_container">
              <label
                style={{ margin: 0, fontWeight: 700 }}
                htmlFor="openGroundsSelect"
              >
                No of open grounds
              </label>
              <Select
                id="openGroundsSelect"
                labelInValue
                defaultValue={{
                  label: "No. of Open Grounds",
                  value: "",
                  key: "",
                }}
                style={{ width: 160, margin: 5, borderRadius: 25 }}
                onChange={handleOpenGroundChange}
                options={selectOpenGroundsData}
              />
            </div>
            <div className="play__ground_details_select_container">
              <label
                style={{ margin: 0, fontWeight: 700 }}
                htmlFor="boxGroundsSelect"
              >
                No of open grounds
              </label>
              <Select
                id="boxGroundsSelect"
                labelInValue
                defaultValue={{
                  label: "No. of box grounds",
                  value: "",
                  key: "",
                }}
                style={{ width: 160, margin: 5, borderRadius: 25 }}
                onChange={handleBoxGroundChange}
                options={selectBoxGroundsData}
              />
            </div>
            <div className="play__ground_details_select_container">
              <label style={{ margin: 0, fontWeight: 700 }} htmlFor="pavilian">
                Pavilian
              </label>
              <Select
                id="pavilian"
                labelInValue
                defaultValue={{
                  label: "pavilian",
                  value: "",
                  key: "",
                }}
                style={{ width: 160, margin: 5, borderRadius: 25 }}
                onChange={handlePavilianChange}
                options={selectPavilianData}
              />
            </div>
            <div className="play__ground_details_select_container">
              <label
                style={{ margin: 0, fontWeight: 700 }}
                htmlFor="changingRoom"
              >
                Changing Rooms
              </label>
              <Select
                id="changingRoom"
                labelInValue
                defaultValue={{
                  label: "Changing rooms",
                  value: "",
                  key: "",
                }}
                style={{ width: 160, margin: 5, borderRadius: 25 }}
                onChange={handleChangingRoomsChange}
                options={selectChangingRoomData}
              />
            </div>
            <div className="play__ground_details_select_container">
              <label style={{ margin: 0, fontWeight: 700 }} htmlFor="washRoom">
                Wash Rooms
              </label>
              <Select
                id="washRoom"
                labelInValue
                defaultValue={{
                  label: "wash rooms",
                  value: "",
                  key: "",
                }}
                style={{ width: 160, margin: 5, borderRadius: 25 }}
                onChange={handleWashRoomsChange}
                options={selectWashRoomData}
              />
            </div>
          </div>
          <hr />
        </div>
      )}
      {!(
        stepOneData.property_type === "play-ground" ||
        stepOneData.property_type === "event-spaces" ||
        stepOneData.property_type === "hostel" ||
        stepOneData.property_type === "co-working-space"
      ) && (
        <SectionHoc title="Property Details">
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {stepOneData.property_sub_type === "studio-appartment"
              ? bedRoomForStudioAppartment?.map((item: any, i) => {
                  return (
                    <Chip
                      item={item}
                      key={i}
                      onClick={() => {
                        setBedRoomForStuidioAppartment(
                          activateItemByKey(
                            bedRoomForStudioAppartment,
                            item.key
                          )
                        );
                        setStepTwoData({
                          ...stepTwoData,
                          bhk: item.key,
                        });
                      }}
                    />
                  );
                })
              : stepOneData.property_type === "parking"
              ? parkingPropertyDetails?.map((item: any, i) => {
                  return (
                    <Chip
                      item={item}
                      key={i}
                      onClick={() => {
                        setParkingPropertyDetails(
                          activateItemByKey(parkingPropertyDetails, item.key)
                        );
                        setStepTwoData({
                          ...stepTwoData,
                          parking_details: item.key,
                        });
                      }}
                    />
                  );
                })
              : propertyDetails?.map((item: any, i) => {
                  return (
                    <Chip
                      item={item}
                      key={i}
                      onClick={() => {
                        setPropertyDetails(
                          activateItemByKey(propertyDetails, item.key)
                        );
                        setStepTwoData({
                          ...stepTwoData,
                          bhk: item.key,
                        });
                      }}
                    />
                  );
                })}
          </div>
        </SectionHoc>
      )}

      {stepOneData.property_type === "hostel" && (
        <div>
          <h6 className="property__title">Hostel Details</h6>
          <SectionHoc title="Sharing Type">
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {hostelSharing?.map((item: any, i) => {
                return (
                  <Chip
                    item={item}
                    key={i}
                    onClick={() => {
                      setHostelSharing(
                        activateItemByKey(hostelSharing, item.key)
                      );
                      setStepTwoData({
                        ...stepTwoData,
                        hotel_sharing: item.key,
                      });
                    }}
                  />
                );
              })}
            </div>
          </SectionHoc>
        </div>
      )}

      {!(
        stepOneData.property_type === "parking" ||
        stepOneData.property_type === "play-ground" ||
        stepOneData.property_type === "event-spaces" ||
        stepOneData.property_type === "co-working-space"
      ) && (
        <SectionHoc title="Balconies">
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {balconies?.map((item: any, i) => {
              return (
                <Chip
                  item={item}
                  key={i}
                  onClick={() => {
                    setBalconies(activateItemByKey(balconies, item.key));
                    setStepTwoData({
                      ...stepTwoData,
                      balconies: item.key,
                    });
                  }}
                />
              );
            })}
          </div>
        </SectionHoc>
      )}
      {!(
        stepOneData.property_type === "parking" ||
        stepOneData.property_type === "play-ground" ||
        stepOneData.property_type === "event-spaces" ||
        stepOneData.property_type === "co-working-space"
      ) && (
        <SectionHoc title="Bath Rooms">
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {stepOneData.property_sub_type === "studio-appartment"
              ? bathRoomForStudioAppartment?.map((item: any, i) => {
                  return (
                    <Chip
                      item={item}
                      key={i}
                      onClick={() => {
                        setBathRoomForStudioAppartment(
                          activateItemByKey(
                            bathRoomForStudioAppartment,
                            item.key
                          )
                        );
                        setStepTwoData({
                          ...stepTwoData,
                          bathrooms: item.key,
                        });
                      }}
                    />
                  );
                })
              : bathRooms?.map((item: any, i) => {
                  return (
                    <Chip
                      item={item}
                      key={i}
                      onClick={() => {
                        setBatchRooms(activateItemByKey(bathRooms, item.key));
                        setStepTwoData({
                          ...stepTwoData,
                          bathrooms: item.key,
                        });
                      }}
                    />
                  );
                })}
          </div>
        </SectionHoc>
      )}
      {!(
        stepOneData.property_type === "event-spaces" ||
        stepOneData.property_type === "hostel" ||
        stepOneData.property_type === "co-working-space"
      ) && (
        <>
          <div
            style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
          >
            <PropInput
              placeholder="Type No of Floors"
              value={stepTwoData.total_floors}
              type="number"
              onChange={(e: any) => {
                setStepTwoData({
                  ...stepTwoData,
                  total_floors: e.target.value,
                });
              }}
            />
            <Select
              labelInValue
              defaultValue={{
                label: "Select Fllor No ",
                value: "",
                key: "",
              }}
              style={{ width: 160, margin: 10 }}
              onChange={handleChange}
              options={selectFloorData}
            />
            <Select
              labelInValue
              defaultValue={{
                label: "Property Age",
                value: "",
                key: "",
              }}
              style={{ width: 160, margin: 10 }}
              onChange={propertyAgeChangeHandle}
              options={selectFloorData}
            />
            {!(stepOneData.property_type === "play-ground") && (
              <Select
                labelInValue
                defaultValue={{
                  label: "Select Facing",
                  value: "",
                  key: "",
                }}
                style={{ width: 160, margin: 10 }}
                onChange={propertyFacingChangeHandler}
                options={facingData}
              />
            )}
          </div>
          <hr />
        </>
      )}
      {stepOneData.property_type === "co-working-space" && (
        <div className="coworking__sapces_floors_container">
          <div className="coworking__spaces__wrapper">
            <PropInput
              placeholder="Type No of Floors"
              value={stepTwoData.total_floors}
              type="number"
              onChange={(e: any) => {
                setStepTwoData({
                  ...stepTwoData,
                  total_floors: e.target.value,
                });
              }}
            />
            <Select
              labelInValue
              defaultValue={{
                label: "Property On Floor",
                value: "",
                key: "",
              }}
              style={{ width: 160, margin: 10 }}
              onChange={handlecoworkingfloorChange}
              options={selectFloorData}
            />
          </div>
          <hr />
          <div>
            <Select
              labelInValue
              defaultValue={{
                label: "Property Age",
                value: "",
                key: "",
              }}
              style={{ width: 160, margin: 10 }}
              onChange={propertyAgeChangeHandle}
              options={selectFloorData}
            />
          </div>
          <hr />
        </div>
      )}

      {stepOneData.property_type === "hostel" && (
        <div className="hostel__room_container">
          <div className="hostel__room_wrapper">
            <PropInput
              placeholder="Type No of Floors"
              value={stepTwoData.total_floors}
              type="number"
              onChange={(e: any) => {
                setStepTwoData({
                  ...stepTwoData,
                  total_floors: e.target.value,
                });
              }}
            />
            <Select
              labelInValue
              defaultValue={{
                label: "Rooms on Floor",
                value: "",
                key: "",
              }}
              style={{ width: 160, margin: 10 }}
              onChange={handleHostelRoomChange}
              options={selectHostelRoomsData}
            />
            <Select
              labelInValue
              defaultValue={{
                label: "Property Age",
                value: "",
                key: "",
              }}
              style={{ width: 160, margin: 10 }}
              onChange={propertyAgeChangeHandle}
              options={selectFloorData}
            />
          </div>
          <hr />
        </div>
      )}

      <div
        className="other__rooms_container"
        style={{
          display:
            stepOneData.property_type === "event-spaces" ? "none" : "block",
        }}
      >
        <div className="other__rooms_wrapper">
          {stepOneData.property_type === "parking"
            ? parkingRooms.map((item) => (
                <PropChipWithCheckBox
                  item={item}
                  key={item.key}
                  onChange={() => activeCheckboxForParkingRooms(item.key)}
                />
              ))
            : otherRooms.map((item) => (
                <PropChipWithCheckBox
                  item={item}
                  key={item.key}
                  onChange={() => activeCheckboxForOtherRooms(item.key)}
                />
              ))}
        </div>
      </div>
      <hr />
      {!(stepOneData.property_type === "event-spaces") && (
        <SectionHoc title="Availability">
          {stepOneData.iwant === "find-a-flatemate" ? (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {availabilityForFindaFlatemate?.map((item: any, i) => {
                return (
                  <Chip
                    item={item}
                    key={i}
                    onClick={() => {
                      setAvailabilityForFindaFlatemate(
                        activateItemByKey(
                          availabilityForFindaFlatemate,
                          item.key
                        )
                      );
                      setStepTwoData({
                        ...stepTwoData,
                        availability: item.key,
                      });
                    }}
                  />
                );
              })}
              <DatePicker onChange={onChange} />
            </div>
          ) : stepOneData.property_type === "parking" ? (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {parkingAvailability?.map((item: any, i) => {
                return (
                  <Chip
                    item={item}
                    key={i}
                    onClick={() => {
                      setParkingAvailability(
                        activateItemByKey(parkingAvailability, item.key)
                      );
                      setStepTwoData({
                        ...stepTwoData,
                        availability: item.key,
                      });
                    }}
                  />
                );
              })}
              <DatePicker onChange={onChange} />
            </div>
          ) : stepOneData.property_type === "play-ground" ? (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {playGroundAvailability?.map((item: any, i) => {
                return (
                  <Chip
                    item={item}
                    key={i}
                    onClick={() => {
                      setPlayGroundAvailability(
                        activateItemByKey(playGroundAvailability, item.key)
                      );
                      setStepTwoData({
                        ...stepTwoData,
                        availability: item.key,
                      });
                    }}
                  />
                );
              })}
              <DatePicker onChange={onChange} />
            </div>
          ) : stepOneData.property_type === "hostel" ? (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {hostelAvailability?.map((item: any, i) => {
                return (
                  <Chip
                    item={item}
                    key={i}
                    onClick={() => {
                      setHostelAvailability(
                        activateItemByKey(hostelAvailability, item.key)
                      );
                      setStepTwoData({
                        ...stepTwoData,
                        availability: item.key,
                      });
                    }}
                  />
                );
              })}
              <DatePicker onChange={onChange} />
            </div>
          ) : stepOneData.property_type === "co-working-space" ? (
            <div className="coworking__availability_container">
              <div className="coworking__availability_wrapper">
                <PropInput
                  placeholder="No. of Seatings Available"
                  value={stepTwoData.no_of_seats}
                  type="number"
                  onChange={(e: any) => {
                    setStepTwoData({
                      ...stepTwoData,
                      no_of_seats: e.target.value,
                    });
                  }}
                />
                <DatePicker onChange={onChange} />
              </div>
            </div>
          ) : (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {availability?.map((item: any, i) => {
                return (
                  <Chip
                    item={item}
                    key={i}
                    onClick={() => {
                      setAvailability(
                        activateItemByKey(availability, item.key)
                      );
                      setStepTwoData({
                        ...stepTwoData,
                        availability: item.key,
                      });
                    }}
                  />
                );
              })}
              <DatePicker onChange={onChange} />
            </div>
          )}
        </SectionHoc>
      )}
      {stepOneData.property_type === "hostel" && (
        <div className="food__details__container">
          <h6 className="property__title">Food Details</h6>
          <div className="food_details_wrapper">
            {foodDetails.map((item: any) => (
              <PropChipWithCheckBox
                item={item}
                key={item.key}
                onChange={() => activeCheckboxFoodDetails(item.key)}
              />
            ))}
          </div>
          <hr />
        </div>
      )}
      {stepOneData.iwant === "find-a-flatemate" ||
        stepOneData.property_type === "hostel" ||
        (stepOneData.property_type === "co-working-space" && (
          <div className="propensity">
            <h5 className="property__title">Propensity</h5>
            <div className="propensity__container">
              <div className="propensity__wrapper">
                {propensity.map((item: any) => (
                  <PropChipWithCheckBox
                    item={item}
                    key={item.key}
                    onChange={() => activeCheckboxPropensity(item.key)}
                  />
                ))}
              </div>
              <hr />
            </div>
            <div className="somking__container">
              <Select
                labelInValue
                defaultValue={{
                  label: "Smoking",
                  value: false,
                  key: "",
                }}
                style={{ width: 160, margin: 10 }}
                onChange={propertySmokingChangeHandler}
                options={[
                  {
                    label: "Yes",
                    value: true,
                    key: "yes",
                  },
                  {
                    label: "No",
                    value: false,
                    key: "no",
                  },
                ]}
              />
              <Select
                labelInValue
                defaultValue={{
                  label: "Drinking",
                  value: false,
                  key: "",
                }}
                style={{ width: 160, margin: 10 }}
                onChange={propertyDrinkingChangeHandler}
                options={[
                  {
                    label: "Yes",
                    value: true,
                    key: "yes",
                  },
                  {
                    label: "No",
                    value: false,
                    key: "no",
                  },
                ]}
              />
              <hr />
            </div>
          </div>
        ))}
      {stepOneData.iwant === "find-a-flatemate" ||
        (stepOneData.property_type === "hostel" && (
          <div className="profession__details_container">
            <h5 className="property__title">Profession Details</h5>
            <div className="profession_details_wrapper">
              {professionDetails.map((item: any) => (
                <PropChipWithCheckBox
                  item={item}
                  key={item.key}
                  onChange={() => activeCheckboxProfessionDetails(item.key)}
                />
              ))}
            </div>
            <hr />
          </div>
        ))}

      {stepOneData.property_type === "hostel" && (
        <div className="room__area__container">
          <h6 className="property__title">Room Area</h6>
          <div className="room__area_wrapper">
            <PropInput
              placeholder="Room Area"
              value={stepTwoData.hostel_room_area}
              type="number"
              onChange={(e: any) => {
                setStepTwoData({
                  ...stepTwoData,
                  hostel_room_area: e.target.value,
                });
              }}
            />
            <Select
              labelInValue
              defaultValue={{
                label: "units",
                value: "",
                key: "",
              }}
              style={{ width: 160, margin: 10 }}
              onChange={HostelRoomAreaChangeHandler}
              options={propertyAraeUnits}
            />
          </div>
          <hr />
        </div>
      )}
      {stepOneData.property_type === "hostel" && (
        <div className="hostel__room_amenity_container">
          <h6 className="property__title">Room Amenities</h6>
          <div className="hostel__room_amenity_wrapper">
            {hostelRoomAmenities.map((item: any) => (
              <PropChipWithCheckBox
                item={item}
                onChange={() => activeCheckboxhostelAmenities(item.key)}
              />
            ))}
          </div>
          <hr />
        </div>
      )}
      <div
        style={{
          display:
            stepOneData.property_type === "event-spaces" ||
            stepOneData.property_type === "hostel"
              ? "none"
              : "block",
        }}
      >
        <h5 className="property__title">Property Area</h5>
        <div className="propertyarea__container">
          {stepOneData.property_type === "parking" ? (
            <>
              <div className="proparea__values_wrapper">
                <PropInput
                  placeholder="Total Parking Area"
                  value={stepTwoData.parking_area}
                  type="number"
                  onChange={(e: any) => {
                    setStepTwoData({
                      ...stepTwoData,
                      parking_area: e.target.value,
                    });
                  }}
                />
                <Select
                  labelInValue
                  defaultValue={{
                    label: "units",
                    value: "",
                    key: "",
                  }}
                  style={{ width: 160, margin: 10 }}
                  onChange={buidupAreaChangeHandler}
                  options={propertyAraeUnits}
                />
              </div>
              <div className="proparea__values_wrapper">
                <PropInput
                  placeholder="Total Parking Capacity"
                  value={stepTwoData.parking_capacity}
                  type="number"
                  onChange={(e: any) => {
                    setStepTwoData({
                      ...stepTwoData,
                      parking_capacity: e.target.value,
                    });
                  }}
                />
                <Select
                  labelInValue
                  defaultValue={{
                    label: "units",
                    value: "",
                    key: "",
                  }}
                  style={{ width: 160, margin: 10 }}
                  onChange={buidupAreaChangeHandler}
                  options={propertyAraeUnits}
                />
              </div>
            </>
          ) : stepOneData.property_type === "play-ground" ? (
            <>
              <div className="proparea__values_wrapper">
                <PropInput
                  placeholder="Ground Area"
                  value={stepTwoData.ground_area}
                  type="number"
                  onChange={(e: any) => {
                    setStepTwoData({
                      ...stepTwoData,
                      ground_area: e.target.value,
                    });
                  }}
                />
                <Select
                  labelInValue
                  defaultValue={{
                    label: "units",
                    value: "",
                    key: "",
                  }}
                  style={{ width: 160, margin: 10 }}
                  onChange={groundAreaChangeHandler}
                  options={propertyAraeUnits}
                />
              </div>
              <div className="proparea__values_wrapper">
                <PropInput
                  placeholder="Ground seating capacity"
                  value={stepTwoData.ground_seating_capacity}
                  type="number"
                  onChange={(e: any) => {
                    setStepTwoData({
                      ...stepTwoData,
                      ground_seating_capacity: e.target.value,
                    });
                  }}
                />
                <Select
                  labelInValue
                  defaultValue={{
                    label: "units",
                    value: "",
                    key: "",
                  }}
                  style={{ width: 160, margin: 10 }}
                  onChange={groundSeatingCapacityChangeHandler}
                  options={propertyAraeUnits}
                />
              </div>
            </>
          ) : stepOneData.property_type === "co-working-space" ? (
            <>
              <PropInput
                placeholder="Carpet Area"
                value={stepTwoData.carpet_area}
                type="number"
                onChange={(e: any) => {
                  setStepTwoData({
                    ...stepTwoData,
                    carpet_area: e.target.value,
                  });
                }}
              />
              <Select
                labelInValue
                defaultValue={{
                  label: "units",
                  value: "",
                  key: "",
                }}
                style={{ width: 160, margin: 10 }}
                onChange={carpetAreaChangeHandler}
                options={propertyAraeUnits}
              />
              <PropInput
                placeholder="Total Seating Capacity"
                value={stepTwoData.total_seating_capacity}
                type="number"
                onChange={(e: any) => {
                  setStepTwoData({
                    ...stepTwoData,
                    total_seating_capacity: e.target.value,
                  });
                }}
              />
              <Select
                labelInValue
                defaultValue={{
                  label: "units",
                  value: "",
                  key: "",
                }}
                style={{ width: 160, margin: 10 }}
                onChange={coworkingSeatingAreaChangeHandler}
                options={propertyAraeUnits}
              />
            </>
          ) : (
            <>
              <div className="proparea__values_wrapper">
                <PropInput
                  placeholder="Build Area"
                  value={stepTwoData.builtup_area}
                  type="number"
                  onChange={(e: any) => {
                    setStepTwoData({
                      ...stepTwoData,
                      builtup_area: e.target.value,
                    });
                  }}
                />
                <Select
                  labelInValue
                  defaultValue={{
                    label: "units",
                    value: "",
                    key: "",
                  }}
                  style={{ width: 160, margin: 10 }}
                  onChange={buidupAreaChangeHandler}
                  options={propertyAraeUnits}
                />
              </div>
              <div className="proparea__values_wrapper">
                <PropInput
                  placeholder="Carpet Area"
                  value={stepTwoData.carpet_area}
                  type="number"
                  onChange={(e: any) => {
                    setStepTwoData({
                      ...stepTwoData,
                      carpet_area: e.target.value,
                    });
                  }}
                />
                <Select
                  labelInValue
                  defaultValue={{
                    label: "units",
                    value: "",
                    key: "",
                  }}
                  style={{ width: 160, margin: 10 }}
                  onChange={carpetAreaChangeHandler}
                  options={propertyAraeUnits}
                />
              </div>
              <div
                className="proparea__values_wrapper"
                style={{
                  display:
                    stepOneData.iwant === "find-a-flatemate" ? "none" : "flex",
                }}
              >
                <PropInput
                  placeholder="Undivided Share"
                  value={stepTwoData.undivided_share}
                  type="number"
                  onChange={(e: any) => {
                    setStepTwoData({
                      ...stepTwoData,
                      undivided_share: e.target.value,
                    });
                  }}
                />
                <Select
                  labelInValue
                  defaultValue={{
                    label: "units",
                    value: "",
                    key: "",
                  }}
                  style={{ width: 160, margin: 10 }}
                  onChange={undividedAreaChangeHandler}
                  options={propertyAraeUnits}
                />
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {!(
        stepOneData.property_type === "parking" ||
        stepOneData.property_type === "play-ground" ||
        stepOneData.property_type === "event-spaces" ||
        stepOneData.property_type === "hostel" ||
        stepOneData.property_type === "co-working-space"
      ) && (
        <SectionHoc title="Furnishing Status">
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {furnished?.map((item: any, i) => {
              return (
                <Chip
                  item={item}
                  key={i}
                  onClick={() => {
                    setFurnished(activateItemByKey(furnished, item.key));
                    setStepTwoData({
                      ...stepTwoData,
                      furnished_status: item.key,
                    });
                    if (item.key === "furnished") {
                      setOpenFurnishingModal(true);
                      setFurnishingItemsObj(furnishingItems);
                    } else if (item.key === "semi_frunished") {
                      setSemiFurnishedModal(true);
                      setFurnishingItemsObj(furnishingItems);
                    }
                  }}
                />
              );
            })}
            <div>
              <FurnishingStatusModal
                openFurnishingModal={openFurnishingModal}
                setOpenFurnishingModal={setOpenFurnishingModal}
                setFurnishingItemsObj={setFurnishingItemsObj}
              />
              <SemiFurnishedStatusModal
                openSemiFurnishedModal={openSemiFurnishedModal}
                setSemiFurnishedModal={setSemiFurnishedModal}
                setFurnishingItemsObj={setFurnishingItemsObj}
              />
            </div>
          </div>
        </SectionHoc>
      )}

      {stepOneData.property_type === "parking" && (
        <div className="parking__price_details_container">
          <h6 className="property__title">Price Details</h6>
          <div className="parking__price_details_wrapper">
            <PropInput
              placeholder="Price per Hour"
              value={stepTwoData.parking_price_per_hour}
              type="number"
              onChange={(e: any) => {
                setStepTwoData({
                  ...stepTwoData,
                  parking_price_per_hour: e.target.value,
                });
              }}
            />
            <PropInput
              placeholder="Price per Day"
              value={stepTwoData.parking_price_per_day}
              type="number"
              onChange={(e: any) => {
                setStepTwoData({
                  ...stepTwoData,
                  parking_price_per_day: e.target.value,
                });
              }}
            />
            <PropInput
              placeholder="Price per Month"
              value={stepTwoData.parking_price_per_month}
              type="number"
              onChange={(e: any) => {
                setStepTwoData({
                  ...stepTwoData,
                  parking_price_per_month: e.target.value,
                });
              }}
            />
            <PropInput
              placeholder="Other price"
              value={stepTwoData.parking_other_price}
              type="number"
              onChange={(e: any) => {
                setStepTwoData({
                  ...stepTwoData,
                  parking_other_price: e.target.value,
                });
              }}
            />
            <PropInput
              placeholder="Booking Amount"
              value={stepTwoData.parking_booking_amount}
              type="number"
              onChange={(e: any) => {
                setStepTwoData({
                  ...stepTwoData,
                  parking_booking_amount: e.target.value,
                });
              }}
            />
            <PropInput
              placeholder="Price per Charging"
              value={stepTwoData.parking_price_per_charging}
              type="number"
              onChange={(e: any) => {
                setStepTwoData({
                  ...stepTwoData,
                  parking_price_per_charging: e.target.value,
                });
              }}
            />
          </div>
        </div>
      )}

      <div
        className="property__features"
        style={{
          display:
            stepOneData.property_type === "parking" ||
            stepOneData.property_type === "play-ground" ||
            stepOneData.property_type === "event-spaces" ||
            stepOneData.property_type === "hostel" ||
            stepOneData.property_type === "co-working-space"
              ? "none"
              : "block",
        }}
      >
        <h5 className="property__title">Property Features</h5>
        <div className="property__features_wrapper">
          {propertyFeatures.map((item) => (
            <PropChipWithCheckBox
              key={item.key}
              item={item}
              onChange={() => activeCheckboxpropertyFeatures(item.key)}
            />
          ))}
        </div>
        {stepOneData.property_sub_type === "studio-appartment" && (
          <>
            <h6>Noise Level</h6>
            <div className="property__features_wrapper">
              {noiseLevel.map((item: any) => (
                <PropChipWithCheckBox
                  key={item.key}
                  item={item}
                  onChange={() => activeCheckboxNoiseLevel(item.key)}
                />
              ))}
            </div>
          </>
        )}
        <hr />
      </div>
      <div
        className="property__building_features"
        style={{
          display:
            stepOneData.property_type === "parking" ||
            stepOneData.property_type === "play-ground" ||
            stepOneData.property_type === "event-spaces" ||
            stepOneData.property_type === "hostel" ||
            stepOneData.property_type === "co-working-space"
              ? "none"
              : "block",
        }}
      >
        <h5 className="property__title">Society Building Features</h5>
        <div className="property__building_features_container">
          {societyBuildingFeatures.map((item: any) => (
            <PropChipWithCheckBox
              key={item.key}
              item={item}
              onChange={() => activeCheckboxSocietyBuildingFeatures(item.key)}
            />
          ))}
        </div>
        <hr />
      </div>
      <div
        className="water_sources"
        style={{
          display:
            stepOneData.property_type === "parking" ||
            stepOneData.property_type === "play-ground" ||
            stepOneData.property_type === "event-spaces" ||
            stepOneData.property_type === "co-working-space"
              ? "none"
              : "block",
        }}
      >
        <h5 className="property__title">Water Sources</h5>
        <div className="water__sources_container">
          {waterSources.map((item: any) => (
            <PropChipWithCheckBox
              item={item}
              key={item.key}
              onChange={() => activeCheckboxWaterSources(item.key)}
            />
          ))}
        </div>
        <hr />
      </div>
      <div
        className="parking"
        style={{
          display:
            stepOneData.property_type === "parking" ||
            stepOneData.property_type === "event-spaces"
              ? "none"
              : "block",
        }}
      >
        <h5 className="property__title">Parking</h5>
        <div className="parking__container">
          {parkingConut.map((item: any) => (
            <div className="car__parking">
              <h6>{item.label}</h6>
              <div className="counter__part">
                <button
                  disabled={item.count === 0}
                  onClick={() => decrementParkingCount(item.key)}
                >
                  -
                </button>
                {item.count}
                <button onClick={() => incrementParkingCount(item.key)}>
                  +
                </button>
              </div>
            </div>
          ))}

          {visitorCount.map((item: any) => (
            <div className="visitor__parking">
              <h6>{item.label}</h6>
              <div className="counter__part">
                <button
                  disabled={item.conut === 0}
                  onClick={() => vistorParkingDecrement(item)}
                >
                  -
                </button>
                {item.count}
                <button onClick={() => visitorParkingIncrement(item)}>+</button>
              </div>
            </div>
          ))}
        </div>
        <hr />
      </div>
      {stepOneData.property_type === "co-working-space" ? (
        <div className="coworking__amenities_container">
          <h6 className="property__title">Add Amenities</h6>
          <div className="coworking__amenities_wrapper">
            {coworkingAmenities.slice(0, itemToShow).map((item: any) => (
              <PropChipWithCheckBox
                item={item}
                key={item.key}
                onChange={() => activeCheckboxForcoworkingAmenities(item.key)}
              />
            ))}
          </div>
          {itemToShow < coworkingAmenities.length && (
            <p
              className="add__more_button"
              onClick={() => setItemToShow(coworkingAmenities.length)}
            >
              Add More+..
            </p>
          )}
          <hr />
        </div>
      ) : (
        <></>
      )}
      <div
        className="type__of_floor"
        style={{
          display:
            stepOneData.property_type === "parking" ||
            stepOneData.property_type === "play-ground" ||
            stepOneData.property_type === "event-spaces"
              ? "none"
              : "block",
        }}
      >
        <h6 className="property__title">Type of Flooring</h6>
        <Select
          labelInValue
          defaultValue={{
            label: "Type of Floor",
            value: "",
            key: "",
          }}
          style={{ width: 160, margin: 10 }}
          onChange={typeOfFloorChangeHandler}
          options={typeOfFloorData}
        />
        <hr />
      </div>
      <div
        className="width__of_roadfacing"
        style={{
          display:
            stepOneData.property_type === "parking" ||
            stepOneData.property_type === "play-ground" ||
            stepOneData.property_type === "event-spaces" ||
            stepOneData.property_type === "hostel" ||
            stepOneData.property_type === "co-working-space"
              ? "none"
              : "block",
        }}
      >
        <h6 className="property__title">Width of Road Facing</h6>
        <div className="width__of_roadfacing_container">
          <PropInput
            placeholder="Enter Value"
            value={stepTwoData.width_of_facing_road}
            type="number"
            onChange={(e: any) => {
              setStepTwoData({
                ...stepTwoData,
                width_of_facing_road: e.target.value,
              });
            }}
          />
          <Select
            labelInValue
            defaultValue={{
              label: "units",
              value: "",
              key: "",
            }}
            style={{ width: 160, margin: 10 }}
            onChange={widthOfFacingRoadChangeHandler}
            options={widthOfFacingRoadData}
          />
        </div>
      </div>
      {stepOneData.property_type === "event-spaces" && (
        <div className="event__spaces__steptwo_container">
          <div className="venue__amenities_container">
            <h6 className="property__title">Venue Amenities</h6>
            <div className="room__details_container">
              <h6>Room Details</h6>
              <div className="details_wrapper">
                <PropInput
                  placeholder="AC Rooms"
                  value={stepTwoData.ac_rooms}
                  type="number"
                  onChange={(e: any) => {
                    setStepTwoData({
                      ...stepTwoData,
                      ac_rooms: e.target.value,
                    });
                  }}
                />
                <PropInput
                  placeholder="Non AC Rooms"
                  value={stepTwoData.non_ac_rooms}
                  type="number"
                  onChange={(e: any) => {
                    setStepTwoData({
                      ...stepTwoData,
                      non_ac_rooms: e.target.value,
                    });
                  }}
                />
              </div>
              <hr />
            </div>
            <div className="decoration__container">
              <h6>Decoration</h6>
              <div className="details_wrapper">
                {decoration.map((item: any) => (
                  <PropChipWithCheckBox
                    item={item}
                    key={item.key}
                    onChange={() => activeCheckboxFordecorations(item.key)}
                  />
                ))}
              </div>
              <hr />
            </div>
            <div className="dj__container">
              <h6>DJ</h6>
              <div className="details_wrapper">
                {dj.map((item: any) => (
                  <PropChipWithCheckBox
                    item={item}
                    key={item.key}
                    onChange={() => activeCheckboxFordj(item.key)}
                  />
                ))}
              </div>
              <hr />
            </div>
            <div className="photoshoot__container">
              <h6>Photoshoot</h6>
              <div className="details_wrapper">
                {photoShoots.map((item: any) => (
                  <PropChipWithCheckBox
                    item={item}
                    key={item.key}
                    onChange={() => activeCheckboxForPhotoShoots(item.key)}
                  />
                ))}
              </div>
              <hr />
            </div>
            <div className="amenities__container">
              <div className="details_wrapper">
                {eventSpacingAmenities.map((item: any) => (
                  <PropChipWithCheckBox
                    item={item}
                    key={item.key}
                    onChange={() =>
                      activeCheckboxForEventSpacingAmenities(item.key)
                    }
                  />
                ))}
              </div>
              <hr />
            </div>
            <div className="food__type_container">
              <h6 className="property__title">Food Type</h6>
              <div className="details_wrapper">
                {foodType.map((item: any) => (
                  <PropChipWithCheckBox
                    item={item}
                    key={item.key}
                    onChange={() => activeCheckboxForFoodTypes(item.key)}
                  />
                ))}
              </div>
              <hr />
            </div>
            <div className="beverage__container">
              <h6 className="property__title">Beverage Details</h6>
              <div className="details_wrapper">
                {beverages.map((item: any) => (
                  <PropChipWithCheckBox
                    item={item}
                    key={item.key}
                    onChange={() => activeCheckboxForBeverages(item.key)}
                  />
                ))}
              </div>
              <hr />
            </div>
            <div className="eventspacing__parking__container">
              <h6 className="property__title">Parking</h6>
              <div className="details_wrapper">
                <PropInput
                  placeholder="No.of Car Parking"
                  value={stepTwoData.event_spacing_car_parking}
                  type="number"
                  onChange={(e: any) => {
                    setStepTwoData({
                      ...stepTwoData,
                      event_spacing_car_parking: e.target.value,
                    });
                  }}
                />
                <PropInput
                  placeholder="No.of 2 Wheel Parking"
                  value={stepTwoData.event_spacing_2wheel_parking}
                  type="number"
                  onChange={(e: any) => {
                    setStepTwoData({
                      ...stepTwoData,
                      event_spacing_2wheel_parking: e.target.value,
                    });
                  }}
                />
                <PropInput
                  placeholder="No.of Visitor Parking"
                  value={stepTwoData.event_spacing_visitor_parking}
                  type="number"
                  onChange={(e: any) => {
                    setStepTwoData({
                      ...stepTwoData,
                      event_spacing_visitor_parking: e.target.value,
                    });
                  }}
                />
                <div className="play__ground_details_select_container">
                  <label
                    style={{ margin: 0, fontWeight: 700 }}
                    htmlFor="walletparkingSelect"
                  >
                    Wallet Parking
                  </label>
                  <Select
                    id="walletparkingSelect"
                    labelInValue
                    defaultValue={{
                      label: "Wallet Parking",
                      value: "",
                      key: "",
                    }}
                    style={{ width: 160, margin: 5, borderRadius: 25 }}
                    onChange={handleWalletParkingChange}
                    options={[
                      {
                        label: "Yes",
                        value: "Yes",
                        key: "yes",
                      },
                      {
                        label: "No",
                        value: "No",
                        key: "no",
                      },
                    ]}
                  />
                </div>
              </div>
              <hr />
            </div>
          </div>
          <div className="booking__type__container">
            <SectionHoc title="Booking Type">
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {bookingType?.map((item: any, i) => {
                  return (
                    <Chip
                      item={item}
                      key={i}
                      onClick={() => {
                        setBookingType(
                          activateItemByKey(bookingType, item.key)
                        );
                        setStepTwoData({
                          ...stepTwoData,
                          booking_type: item.key,
                        });
                      }}
                    />
                  );
                })}
              </div>
            </SectionHoc>
          </div>
        </div>
      )}
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => {
              dispatch(postpropertyAction.SetPropertyState(totalState));
              dispatch(postpropertyAction.clearApiResponse())
              setCurrent((prev: any) => prev + 1);
              // console.log(" step two data", {...stepTwoData,...otherStepTwoData})
            }}
          >
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{ margin: "0 8px" }}
            onClick={() => setCurrent((prev: any) => prev - 1)}
          >
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};

export default PostPropertyTwo;
