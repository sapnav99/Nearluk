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
} from "./helper/PostPropertyData";
import { activateItemByKey } from "./helper/PostPropertyHelper";
import PropInput from "../../components/Property/PropInput/PropInput";
import { Select } from "antd";
import PropChipWithCheckBox from "../../components/Property/PropChipWithCheckBox/PropChipWithCheckBox";
import FurnishingStatusModal from "./helper/FurnishingStatusModal.tsx/FurnishingStatusModal";
import SemiFurnishedStatusModal from "./helper/SemiFurnishedStatusModal/SemiFurnishedStatusModal";
import { Button, message, } from "antd";
import {useSelector,useDispatch} from "react-redux"
import { DatePicker } from 'antd';
import type { DatePickerProps } from 'antd';
import { postpropertyAction } from "./redux/action";

// type animitiestype = { label: string; key: string; active: boolean }[];

type stepTwoProps = {
  current: any;
  steps: any;
  setCurrent: any
}

const PostPropertyTwo: React.FC<stepTwoProps> = ({current,steps,setCurrent}:stepTwoProps) => {
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
  const [furnishingItemsObj, setFurnishingItemsObj] = useState([]);
  const [semiFurnishedItemObj, setSemiFurnishedItemObj] = useState([]);
  const [waterSources, setWaterSources] = useState(waterSourcesData);
  const [openFurnishingModal, setOpenFurnishingModal] = useState(false);
  const [openSemiFurnishedModal, setSemiFurnishedModal] = useState(false);
  const [parkingConut, setParkingCount] = useState(parkingData);
  const [visitorCount, setVisitorCount] = useState(visitorParkingData);
  const [stepTwoData, setStepTwoData] = useState({
    builtup_area: "",
    carpet_area: "",
    availablity: "",
    undivided_share: "",
    undivided_share_units: "",
    builtup_units: "",
    carpet_units: "",
    furnishing_status: "",
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
  });

  const dispatch = useDispatch()
  // console.log(stepTwoData);

  const stepOneData = useSelector((state: any) => state?.PostpropertyReducer?.propertyState)
  // console.log("step one data from step two", stepOneData)

  const otherStepTwoData = useMemo(
    () => ({
      aminities: otherRooms.filter((item: any) => item.active === true),
      property_features: propertyFeatures.filter(
        (item: any) => item.active === true
      ),
      property_building_features: societyBuildingFeatures.filter(
        (item: any) => item.active === true
      ),
      furnishing: furnishingItemsObj?.filter((item: any) => item?.count > 0),
      semi_furnished: semiFurnishedItemObj?.filter(
        (item: any) => item?.count > 0
      ),
      visito_parking: visitorCount[0].count,
      car_parking: parkingConut[0].count,
    }),
    [
      otherRooms,
      propertyFeatures,
      societyBuildingFeatures,
      furnishingItemsObj,
      semiFurnishedItemObj,
      visitorCount,
      parkingConut,
    ]
  );
  
  const totalState = {...stepOneData,...stepTwoData,...otherStepTwoData}

  const handleChange = (value: { value: string; label: React.ReactNode }) => {
    setStepTwoData({
      ...stepTwoData,
      floor_no: value.value,
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

  const buidupAreaChangeHandler = (value: {
    value: string;
    label: React.ReactNode;
  }) => {
    setStepTwoData({
      ...stepTwoData,
      builtup_units: value.value,
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

  const activeCheckboxpropertyFeatures = (key: any) => {
    const shallowCopy = [...propertyFeatures];
    const updatedArry = shallowCopy.map((item: any) => ({
      ...item,
      active: item.key === key ? !item.active : item.active,
    }));
    setPropertyFeatures(updatedArry);
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

  const onChange: DatePickerProps['onChange'] = (_, dateString) => {
    setStepTwoData({
      ...stepTwoData,
      possession_date: dateString
    })
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
      <SectionHoc title="Property Details">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {propertyDetails?.map((item: any, i) => {
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
      <SectionHoc title="Bath Rooms">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {bathRooms?.map((item: any, i) => {
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
      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
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
      </div>
      <hr />
      <div className="other__rooms_container">
        {otherRooms.map((item) => (
          <PropChipWithCheckBox
            item={item}
            onChange={() => activeCheckboxForOtherRooms(item.key)}
          />
        ))}
      </div>
      <SectionHoc title="Availability">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {availability?.map((item: any, i) => {
            return (
              <Chip
                item={item}
                key={i}
                onClick={() => {
                  setAvailability(activateItemByKey(availability, item.key));
                  setStepTwoData({
                    ...stepTwoData,
                    availablity: item.key,
                  });
                }}
              />
            );
          })}
          <DatePicker onChange={onChange} />
        </div>
      </SectionHoc>
      <div>
        <h5>Property Area</h5>
        <div className="propertyarea__container">
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
          <div className="proparea__values_wrapper">
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
        </div>
      </div>
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
                    furnishing_status: item.key,
                  });
                  if (item.key === "furnished") {
                    setOpenFurnishingModal(true);
                  } else if (item.key === "semi_frunished") {
                    setSemiFurnishedModal(true);
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
              setSemiFurnishedItemObj={setSemiFurnishedItemObj}
            />
          </div>
        </div>
      </SectionHoc>
      <div className="property__features">
        <h5>Property Features</h5>
        <div className="property__features_wrapper">
          {propertyFeatures.map((item) => (
            <PropChipWithCheckBox
              item={item}
              onChange={() => activeCheckboxpropertyFeatures(item.key)}
            />
          ))}
        </div>
        <hr />
      </div>
      <div className="property__building_features">
        <h5>Society Building Features</h5>
        <div className="property__building_features_container">
          {societyBuildingFeatures.map((item: any) => (
            <PropChipWithCheckBox
              item={item}
              onChange={() => activeCheckboxSocietyBuildingFeatures(item.key)}
            />
          ))}
        </div>
        <hr />
      </div>
      <div className="water_sources">
        <h5>Water Sources</h5>
        <div className="water__sources_container">
          {waterSources.map((item: any) => (
            <PropChipWithCheckBox
              item={item}
              onChange={() => activeCheckboxWaterSources(item.key)}
            />
          ))}
        </div>
        <hr />
      </div>
      <div className="parking">
        <h5>Parking</h5>
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
      <div className="type__of_floor">
        <h6>Type of Flooring</h6>
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
      <div className="width__of_roadfacing">
        <h6>Width of Road Facing</h6>
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
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => {
            dispatch(postpropertyAction.SetPropertyState(totalState))
            setCurrent((prev: any) => prev + 1)
            // console.log(" step two data", {...stepTwoData,...otherStepTwoData})
            }}>
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
