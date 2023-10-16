import React, { useState, useEffect } from "react";
import {
  data,
  gatedCommunityData,
  transationTypeData,
} from "./helper/PostPropertyData";
import SectionHoc from "../../components/Property/SectionHoc";
import Chip from "../../components/Chip/Chip";
import { activateItemByKey } from "./helper/PostPropertyHelper";
import PropInput from "../../components/Property/PropInput/PropInput";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const PostPropertyOne: React.FC = () => {
  const [iwant, setIwant] = useState(data);
  const [ptype, setPtype] = useState([]);
  const [subptype, setSubptype] = useState([]);
  const [gatedCommunity, setGatedCommunity] = useState(gatedCommunityData);
  const [trasactionType, setTransationType] = useState(transationTypeData);
  const [currentPosition, setCurrentPosition] =
    useState<google.maps.LatLngLiteral | null>(null);
  const [map, setMap] = useState(/** @type google.maps.GoogleMap */ null);
  const [stepOneData, setStepOneData] = useState({
    city: "",
    building_name: "",
    locality: "",
    block_no: "",
    road_street_no: "",
    state: "",
    pincode: "",
    landmark: "",
    iwant: "",
    transaction_type: "",
    property_type: "",
    property_sub_type: "",
    gated_community: "",
    location: [currentPosition?.lat, currentPosition?.lng],
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position: any) => {
      const { latitude, longitude } = position.coords;
      console.log(latitude, longitude);
      setCurrentPosition({ lat: latitude, lng: longitude });
    });
  }, []);
  console.log(currentPosition);
  //   const currentLocation = useCurrentLocation()
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCEDp1k2rqt67lzxkvetaemDGp7ieO3rpg",
  });

  const handleMarkerDragEnd = (event: any) => {
    const newLat = event.latLng.lat();
    const newLng = event.latLng.lng();
    setCurrentPosition({ lat: newLat, lng: newLng });
  };
  //   console.log(stepOneData);
  return (
    <div>
      <SectionHoc title="I Want to">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {iwant?.map((item: any, i) => {
            return (
              <Chip
                item={item}
                key={i}
                onClick={() => {
                  setPtype(item?.child);
                  setIwant(activateItemByKey(iwant, item.key));
                  setStepOneData({
                    ...stepOneData,
                    iwant: item.key,
                    property_type: "",
                    property_sub_type: "",
                  });
                }}
              />
            );
          })}
        </div>
      </SectionHoc>
      <SectionHoc title="Property Type">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {ptype?.map((item: any, i) => {
            return (
              <Chip
                item={item}
                key={i}
                onClick={() => {
                  setSubptype(item?.child);
                  setPtype(activateItemByKey(ptype, item.key));
                  setStepOneData({
                    ...stepOneData,
                    property_type: item.key,
                    property_sub_type: "",
                  });
                }}
              />
            );
          })}
        </div>
      </SectionHoc>
      <SectionHoc title="">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {subptype?.map((item: any, i) => {
            return (
              <Chip
                item={item}
                key={i}
                onClick={() => {
                  setSubptype(item?.child);
                  setSubptype(activateItemByKey(subptype, item.key));
                  setStepOneData({
                    ...stepOneData,
                    property_sub_type: item.key,
                  });
                }}
              />
            );
          })}
        </div>
      </SectionHoc>
      <div>
        <div
          style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}
        >
          <h5 className="gatedcommunity__title">Gated Community</h5>
          {gatedCommunity.map((item: any, i) => (
            <Chip
              item={item}
              key={i}
              onClick={() => {
                setGatedCommunity(activateItemByKey(gatedCommunity, item.key));
                setStepOneData({
                  ...stepOneData,
                  gated_community: item.key,
                });
              }}
            />
          ))}
        </div>
        <hr />
      </div>
      <SectionHoc title="Transaction Type">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {trasactionType?.map((item: any, i) => {
            return (
              <Chip
                item={item}
                key={i}
                onClick={() => {
                  setTransationType(
                    activateItemByKey(trasactionType, item.key)
                  );
                  setStepOneData({
                    ...stepOneData,
                    transaction_type: item.key,
                  });
                }}
              />
            );
          })}
        </div>
      </SectionHoc>

      {/* laocality */}

      <div className="prop__location">
        <h5 className="prop__title">Property Location</h5>
        <div className="prop__input_container">
          <PropInput
            placeholder="Project or Build Name"
            value={stepOneData.building_name}
            type="text"
            onChange={(e: any) => {
              setStepOneData({
                ...stepOneData,
                building_name: e.target.value,
              });
            }}
          />
          <PropInput
            placeholder="Block NO"
            value={stepOneData.block_no}
            type="number"
            onChange={(e: any) => {
              setStepOneData({
                ...stepOneData,
                block_no: e.target.value,
              });
            }}
          />
          <PropInput
            placeholder="Street No/Road No"
            value={stepOneData.road_street_no}
            type="number"
            onChange={(e: any) => {
              setStepOneData({
                ...stepOneData,
                road_street_no: e.target.value,
              });
            }}
          />
          <PropInput
            placeholder="Pincode"
            value={stepOneData.pincode}
            type="number"
            onChange={(e: any) => {
              setStepOneData({
                ...stepOneData,
                pincode: e.target.value,
              });
            }}
          />
          <PropInput
            placeholder="Landmark"
            value={stepOneData.landmark}
            type="text"
            onChange={(e: any) => {
              setStepOneData({
                ...stepOneData,
                landmark: e.target.value,
              });
            }}
          />
        </div>
        <hr />
      </div>
      <div className="googlemap__container">
        {isLoaded ? (
          <>
            <GoogleMap
              mapContainerClassName="map-container"
              center={currentPosition || undefined}
              zoom={15}
              onLoad={(map: any) => setMap(map)}
            >
              {currentPosition && (
                <Marker
                  position={currentPosition}
                  draggable={true}
                  onDragEnd={handleMarkerDragEnd}
                />
              )}
            </GoogleMap>
          </>
        ) : (
          <h6>...Loading</h6>
        )}
      </div>
    </div>
  );
};

export default PostPropertyOne;
