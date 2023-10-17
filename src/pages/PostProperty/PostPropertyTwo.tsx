import React, { useState } from "react";
import SectionHoc from "../../components/Property/SectionHoc";
import Chip from "../../components/Chip/Chip";
import { propertyDetailsData, balconiesData, bathroomsData, selectFloorData, facingData, availabilityData } from "./helper/PostPropertyData";
import {activateItemByKey} from "./helper/PostPropertyHelper"
import PropInput from "../../components/Property/PropInput/PropInput";
import { Select } from 'antd'

const PostPropertyTwo: React.FC = () => {
  const [propertyDetails, setPropertyDetails] = useState(propertyDetailsData)
  const [balconies, setBalconies] = useState(balconiesData)
  const [bathRooms, setBatchRooms] = useState(bathroomsData)
  const [availability, setAvailability] = useState(availabilityData)
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
    property_extras: "",
    possession_date: "",
  })
  console.log(stepTwoData)

  const handleChange = (value: { value: string; label: React.ReactNode }) => {
    console.log(value.value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
    setStepTwoData({
      ...stepTwoData,
      
    })
  };

  const propertyAgeChangeHandle = (value: { value: string; label: React.ReactNode }) => {
    console.log(value.value);
  }

  const propertyFacingChangeHandler = (value: { value: string; label: React.ReactNode }) => {
    console.log(value.value)
  }

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
                  setPropertyDetails(activateItemByKey(propertyDetails, item.key));
                  setStepTwoData({
                    ...stepTwoData,
                    bhk: item.key
                  })
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
                    balconies: item.key
                  })
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
                    bathrooms: item.key
                  })
                }}
              />
            );
          })}
        </div>
      </SectionHoc>
      <div style={{display: "flex", alignItems: "center", flexWrap: "wrap"}}>
        <PropInput placeholder="Type No of Floors" value={stepTwoData.total_floors} type="number" onChange={(e: any) => {
          setStepTwoData({
            ...stepTwoData,
            total_floors: e.target.value
          })
        }}/>
        <Select
          labelInValue
          defaultValue={{
            label: "Select Fllor No ",
            value: "",
            key: ""
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
            key: ""
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
            key: ""
          }}
          style={{ width: 160, margin: 10 }}
          onChange={propertyFacingChangeHandler}
          options={facingData}
        />
        
      </div>
      <hr/>
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
                    availablity: item.key
                  })
                }}
              />
            );
          })}
        </div>
      </SectionHoc>
      
  </div>
  );
};

export default PostPropertyTwo;
