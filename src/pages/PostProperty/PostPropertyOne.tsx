import React, { useState, useEffect, useMemo } from "react";
import {
  data,
  gatedCommunityData,
  transationTypeData,
  genderData,
  transationTypeforParkingData,
  eventSpaceFeaturesData,
  evnetTypeData,
  coworkingBookingData,
  coworkingSpaceData,
} from "./helper/PostPropertyData";
import SectionHoc from "../../components/Property/SectionHoc";
import Chip from "../../components/Chip/Chip";
import { activateItemByKey } from "./helper/PostPropertyHelper";
import PropInput from "../../components/Property/PropInput/PropInput";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import useDebounce from "../../hooks/useDebounce";
import { AutoComplete } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { postpropertyAction } from "./redux/action";
import { Button, message } from "antd";
import PropChipWithCheckBox from "../../components/Property/PropChipWithCheckBox/PropChipWithCheckBox";

type stepOneProps = {
  current: any;
  steps: any;
  setCurrent: any;
};

const PostPropertyOne: React.FC<stepOneProps> = ({
  current,
  steps,
  setCurrent,
}: stepOneProps) => {
  const [iwant, setIwant] = useState(data);
  const [ptype, setPtype] = useState([]);
  const [subptype, setSubptype] = useState([]);
  const [gatedCommunity, setGatedCommunity] = useState(gatedCommunityData);
  const [trasactionType, setTransationType] = useState(transationTypeData);
  const [currentPosition, setCurrentPosition] =
    useState<google.maps.LatLngLiteral | null>(null);
  const [map, setMap] = useState(/** @type google.maps.GoogleMap */ null);
  const [gender, setGender] = useState(genderData);
  const [parkingTransation, setParkingTransation] = useState(
    transationTypeforParkingData
  );
  const [eventSpaceFeatures, setEventSpaceFeatures] = useState(
    eventSpaceFeaturesData
  );
  const [eventType, setEventType] = useState(evnetTypeData);
  const [coworkingBooking, setCoworkingBooking] =
    useState(coworkingBookingData);
  const [coworkingSpaces, setCoworkingSpaces] = useState(coworkingSpaceData);
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
    gender: "",
    parking_transation_type: "",
    parking_name: "",
    event_type: "",
    other_evnet_type: "",
    hallone_seating: "",
    hallone_floating: "",
    halltwo_seating: "",
    halltwo_floating: "",
    hallthree_seating: "",
    hallthree_floating: "",
    hallfour_seating: "",
    hallfour_floating: "",
    lawnone_seating: "",
    lawnone_floating: "",
    lawntwo_seating: "",
    lawntwo_floating: "",
    lawnthree_seating: "",
    lawnthree_floating: "",
    lawnfour_seating: "",
    lawnfour_floating: "",
  });
  const propertyOwner = useSelector(
    (state: any) => state.loginReducer.user?.user?._id
  );
  // const propertyOwner = useSelector(
  //   (state: any) => state.loginReducer.user?.user
  // );
  // console.log(propertyOwner);
  console.log(map)
  const otherStepOneData = useMemo(
    () => ({
      location: [currentPosition?.lat, currentPosition?.lng],
      eaventspace_features: eventSpaceFeatures.filter(
        (item: any) => item.active === true
      ),
      coworking_booking: coworkingBooking.filter(
        (item: any) => item.active === true
      ),
      coworking_spaces: coworkingSpaces.filter(
        (item: any) => item.active === true
      ),
      property_owner: propertyOwner,
    }),
    [
      currentPosition,
      eventSpaceFeatures,
      coworkingBooking,
      coworkingSpaces,
      propertyOwner,
    ]
  );

  const totalStepOneData = { ...stepOneData, ...otherStepOneData };

  const dispatch = useDispatch();

  // const [toogleCity, setToogleCity] = useState(false);
  // const [toogleState, setToogleState] = useState(false);
  // const [toogleLocality, setToogleLocality] = useState(false);
  const [searchCity, setSearchCity] = useState("");
  const [searchState, setSearchState] = useState("");
  // const [searchLocality, setSeachLocality] = useState("");
  const debouncedSearchCity = useDebounce(searchCity, 500);
  const debouncedSearchState = useDebounce(searchState, 500);
  // const debouncedLocality = useDebounce(searchLocality, 500);

  // console.log(debouncedSearchCity)
  // const [options, setOptions] = useState<{ value: string }[]>([]);

  const citySearchData = useSelector(
    (state: any) => state?.PostpropertyReducer?.getCity
  );
  // console.log(citySearchData);
  const stateSearchData = useSelector(
    (state: any) => state?.PostpropertyReducer?.getState
  );
  // console.log(stateSearchData);
  // const localitySearchData = useSelector(
  //   (state: any) => state?.PostpropertyReducer?.getLocality
  // );

  // console.log("state data",stateSearchData)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position: any) => {
      const { latitude, longitude } = position.coords;
      // console.log(latitude, longitude);
      setCurrentPosition({ lat: latitude, lng: longitude });
    });
  }, []);
  useEffect(() => {
    if (debouncedSearchCity) {
      dispatch(
        postpropertyAction.fetchCityData({
          city: searchCity,
        })
      );
    }
    
  }, [debouncedSearchCity]);

  useEffect(() => {
    if (debouncedSearchState) {
      dispatch(
        postpropertyAction.fetchStateData({
          state: searchState,
        })
      );
    }
  }, [debouncedSearchState]);

  // useEffect(() => {
  //   if (debouncedLocality) {
  //     dispatch(postpropertyAction.fetchLocalityData(searchLocality));
  //   }
  // }, [debouncedLocality]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCEDp1k2rqt67lzxkvetaemDGp7ieO3rpg",
  });

  const handleMarkerDragEnd = (event: any) => {
    const newLat = event.latLng.lat();
    const newLng = event.latLng.lng();
    setCurrentPosition({ lat: newLat, lng: newLng });
  };
  //   console.log(stepOneData);

  const handleCitySelect = (value: string) => {
    setStepOneData({
      ...stepOneData,
      city: value,
    });
  };

  const handleStateHandler = (value: string) => {
    setStepOneData({
      ...stepOneData,
      state: value,
    });
  };

  const activateEventspaceFeature = (key: any) => {
    const shallowCopy = [...eventSpaceFeatures];
    const updatedArry = shallowCopy.map((item: any) => ({
      ...item,
      active: item.key === key ? !item.active : item.active,
    }));
    setEventSpaceFeatures(updatedArry);
  };

  const activateCoworkingBooking = (key: any) => {
    const shallowCopy = [...coworkingBooking];
    const updatedArry = shallowCopy.map((item: any) => ({
      ...item,
      active: item.key === key ? !item.active : item.active,
    }));
    setCoworkingBooking(updatedArry);
  };

  const activateCoworkingSpaces = (key: any) => {
    const shallowCopy = [...coworkingSpaces];
    const updatedArry = shallowCopy.map((item: any) => ({
      ...item,
      active: item.key === key ? !item.active : item.active,
    }));
    setCoworkingSpaces(updatedArry);
  };

  const activateEventType = (key: any) => {
    const shallowCopy = [...eventType];
    const updatedArry = shallowCopy.map((item: any) => ({
      ...item,
      active: item.key === key && !item.active,
    }));
    setEventType(updatedArry);
    setStepOneData({
      ...stepOneData,
      event_type: key,
    });
  };

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
      {ptype.length > 0 && (
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
      )}
      {subptype.length > 0 && (
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
      )}

      {stepOneData.property_type === "co-working-space" && (
        <div className="coworking__booking_container">
          <div className="coworking__booking_wrapper">
            {coworkingBooking.map((item: any) => (
              <PropChipWithCheckBox
                item={item}
                key={item.key}
                onChange={() => activateCoworkingBooking(item.key)}
              />
            ))}
          </div>
          <hr />
        </div>
      )}
      {stepOneData.property_type === "co-working-space" && (
        <div className="coworking__spaces__container">
          <h6 className="property__title">Co-Working Space Details</h6>
          <div className="coworking__spaces__wrapper">
            {coworkingSpaces.map((item: any) => (
              <PropChipWithCheckBox
                item={item}
                key={item.key}
                onChange={() => activateCoworkingSpaces(item.key)}
              />
            ))}
          </div>
          <hr />
        </div>
      )}
      <div
        style={{
          display:
            stepOneData.property_type === "parking" ||
            stepOneData.property_type === "event-spaces" ||
            stepOneData.property_type === "hostel" ||
            stepOneData.property_type === "co-working-space"
              ? "none"
              : "block",
        }}
      >
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
      {stepOneData.iwant === "find-a-flatemate" ||
        (stepOneData.property_type === "hostel" && (
          <SectionHoc title="Gender Type">
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {gender?.map((item: any, i) => {
                return (
                  <Chip
                    item={item}
                    key={i}
                    onClick={() => {
                      setGender(activateItemByKey(gender, item.key));
                      setStepOneData({
                        ...stepOneData,
                        gender: item.key,
                      });
                    }}
                  />
                );
              })}
            </div>
          </SectionHoc>
        ))}
      {stepOneData.property_type === "parking" ? (
        <>
          <SectionHoc title="Transaction Type">
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {parkingTransation?.map((item: any, i) => {
                return (
                  <Chip
                    item={item}
                    key={i}
                    onClick={() => {
                      setParkingTransation(
                        activateItemByKey(parkingTransation, item.key)
                      );
                      setStepOneData({
                        ...stepOneData,
                        parking_transation_type: item.key,
                      });
                    }}
                  />
                );
              })}
            </div>
          </SectionHoc>
        </>
      ) : stepOneData.property_type === "event-spaces" ? (
        <></>
      ) : stepOneData.property_type === "hostel" ? (
        <></>
      ) : stepOneData.property_type === "co-working-space" ? (
        <></>
      ) : (
        <>
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
        </>
      )}

      {/* laocality */}
      {stepOneData.property_type === "event-spaces" && (
        <div className="eventspace__features_container">
          <h6 className="property__title">Event Space Features</h6>
          <div className="eventspace__features_wrapper">
            {eventSpaceFeatures.map((item: any) => (
              <PropChipWithCheckBox
                item={item}
                key={item.key}
                onChange={() => activateEventspaceFeature(item.key)}
              />
            ))}
          </div>
          <hr />
        </div>
      )}

      {stepOneData.property_type === "event-spaces" && (
        <div className="eventspace__type_container">
          <h6 className="property__title">Event Type</h6>
          <div className="evnetspace__type_wrapper">
            {eventType.map((item: any) => (
              <PropChipWithCheckBox
                item={item}
                key={item.key}
                onChange={() => activateEventType(item.key)}
              />
            ))}
          </div>
          <div>
            <PropInput
              placeholder="Others"
              value={stepOneData.other_evnet_type}
              type="text"
              onChange={(e: any) => {
                setStepOneData({
                  ...stepOneData,
                  other_evnet_type: e.target.value,
                });
              }}
            />
          </div>
          <hr />
        </div>
      )}

      {stepOneData.property_type === "event-spaces" && (
        <div className="event__areatype_container">
          <h6 className="property__title">Area Type</h6>
          <div className="indoor__container">
            <h6>Indoor</h6>
            <hr />
            <div className="event__areatype_hallone_container">
              <h6>Hall 1</h6>
              <div className="hall__wrapper">
                <PropInput
                  placeholder="Seating"
                  value={stepOneData.hallone_seating}
                  type="text"
                  onChange={(e: any) => {
                    setStepOneData({
                      ...stepOneData,
                      hallone_seating: e.target.value,
                    });
                  }}
                />
                <PropInput
                  placeholder="Floating"
                  value={stepOneData.hallone_floating}
                  type="text"
                  onChange={(e: any) => {
                    setStepOneData({
                      ...stepOneData,
                      hallone_floating: e.target.value,
                    });
                  }}
                />
              </div>
              <hr />
            </div>
            <div className="evnet__areatype_halltwo_container">
              <h6>Hall 2</h6>
              <div className="hall__wrapper">
                <PropInput
                  placeholder="Seating"
                  value={stepOneData.halltwo_seating}
                  type="text"
                  onChange={(e: any) => {
                    setStepOneData({
                      ...stepOneData,
                      halltwo_seating: e.target.value,
                    });
                  }}
                />
                <PropInput
                  placeholder="Floating"
                  value={stepOneData.halltwo_floating}
                  type="text"
                  onChange={(e: any) => {
                    setStepOneData({
                      ...stepOneData,
                      halltwo_floating: e.target.value,
                    });
                  }}
                />
              </div>
              <hr />
            </div>
            <div className="evnet__areatype_hallthree_container">
              <h6>Hall 3</h6>
              <div className="hall__wrapper">
                <PropInput
                  placeholder="Seating"
                  value={stepOneData.hallthree_seating}
                  type="text"
                  onChange={(e: any) => {
                    setStepOneData({
                      ...stepOneData,
                      hallthree_seating: e.target.value,
                    });
                  }}
                />
                <PropInput
                  placeholder="Floating"
                  value={stepOneData.hallthree_floating}
                  type="text"
                  onChange={(e: any) => {
                    setStepOneData({
                      ...stepOneData,
                      hallthree_floating: e.target.value,
                    });
                  }}
                />
              </div>
              <hr />
            </div>
            <div className="evnet__areatype_hallfour_container">
              <h6>Hall 4</h6>
              <div className="hall__wrapper">
                <PropInput
                  placeholder="Seating"
                  value={stepOneData.hallfour_seating}
                  type="text"
                  onChange={(e: any) => {
                    setStepOneData({
                      ...stepOneData,
                      hallfour_seating: e.target.value,
                    });
                  }}
                />
                <PropInput
                  placeholder="Floating"
                  value={stepOneData.hallfour_floating}
                  type="text"
                  onChange={(e: any) => {
                    setStepOneData({
                      ...stepOneData,
                      hallfour_floating: e.target.value,
                    });
                  }}
                />
              </div>
              <hr />
            </div>
          </div>
          <div className="outdoor__conyainer">
            <h6>Outdoor</h6>
            <hr />
            <div className="event__areatype_lawnone_container">
              <h6>Lawn 1</h6>
              <div className="lawn__wrapper">
                <PropInput
                  placeholder="Seating"
                  value={stepOneData.lawnone_seating}
                  type="text"
                  onChange={(e: any) => {
                    setStepOneData({
                      ...stepOneData,
                      lawnone_seating: e.target.value,
                    });
                  }}
                />
                <PropInput
                  placeholder="Floating"
                  value={stepOneData.lawnone_floating}
                  type="text"
                  onChange={(e: any) => {
                    setStepOneData({
                      ...stepOneData,
                      lawnone_floating: e.target.value,
                    });
                  }}
                />
              </div>
              <hr />
            </div>
            <div className="event__areatype_lawntwo_container">
              <h6>Lawn 2</h6>
              <div className="lawn__wrapper">
                <PropInput
                  placeholder="Seating"
                  value={stepOneData.lawntwo_seating}
                  type="text"
                  onChange={(e: any) => {
                    setStepOneData({
                      ...stepOneData,
                      lawntwo_seating: e.target.value,
                    });
                  }}
                />
                <PropInput
                  placeholder="Floating"
                  value={stepOneData.lawntwo_floating}
                  type="text"
                  onChange={(e: any) => {
                    setStepOneData({
                      ...stepOneData,
                      lawntwo_floating: e.target.value,
                    });
                  }}
                />
              </div>
              <hr />
            </div>
            <div className="evant__areatype_lawnthree_container">
              <h6>Lawn 3</h6>
              <div className="lawn__wrapper">
                <PropInput
                  placeholder="Seating"
                  value={stepOneData.lawnthree_seating}
                  type="text"
                  onChange={(e: any) => {
                    setStepOneData({
                      ...stepOneData,
                      lawnthree_seating: e.target.value,
                    });
                  }}
                />
                <PropInput
                  placeholder="Floating"
                  value={stepOneData.lawnthree_floating}
                  type="text"
                  onChange={(e: any) => {
                    setStepOneData({
                      ...stepOneData,
                      lawnthree_floating: e.target.value,
                    });
                  }}
                />
              </div>
              <hr />
            </div>
            <div className="event__areatype_lawnfour_container">
              <h6>Lawn 4</h6>
              <div className="lawn__wrapper">
                <PropInput
                  placeholder="Seating"
                  value={stepOneData.lawnfour_seating}
                  type="text"
                  onChange={(e: any) => {
                    setStepOneData({
                      ...stepOneData,
                      lawnfour_seating: e.target.value,
                    });
                  }}
                />
                <PropInput
                  placeholder="Floating"
                  value={stepOneData.lawnfour_floating}
                  type="text"
                  onChange={(e: any) => {
                    setStepOneData({
                      ...stepOneData,
                      lawnfour_floating: e.target.value,
                    });
                  }}
                />
              </div>
              <hr />
            </div>
          </div>
        </div>
      )}

      <div className="prop__location">
        <h5 className="prop__title">Property Location</h5>
        <div className="prop__input_container">
          <div className="actocomplete">
            <AutoComplete
              id="actocomplete"
              options={citySearchData?.map((item: any) => ({
                value: item?.city,
              }))}
              // options={options}
              style={{ width: 218, margin: "10px" }}
              onSearch={(text) => setSearchCity(text)}
              placeholder="Select City"
              allowClear={false}
              onSelect={handleCitySelect}
            />
          </div>
          {/* <div style={{ margin: "10px" }}>
            <AutoComplete
              options={options}
              style={{ width: 218, margin: "10px" }}
              onSearch={(text) => setSeachLocality(text)}
              placeholder="Select Locality"
              allowClear={false}
            />
          </div> */}
          <div>
            <AutoComplete
              options={stateSearchData?.map((item: any) => ({
                value: item?.state,
              }))}
              style={{ width: 218, margin: "10px" }}
              onSearch={(text) => setSearchState(text)}
              placeholder="Select State"
              allowClear={false}
              onSelect={handleStateHandler}
            />
          </div>
          {stepOneData.property_type === "parking" ? (
            <PropInput
              placeholder="Parking Name"
              value={stepOneData.parking_name}
              type="text"
              onChange={(e: any) => {
                setStepOneData({
                  ...stepOneData,
                  parking_name: e.target.value,
                });
              }}
            />
          ) : (
            <PropInput
              placeholder="Project or Building Name"
              value={stepOneData.building_name}
              type="text"
              onChange={(e: any) => {
                setStepOneData({
                  ...stepOneData,
                  building_name: e.target.value,
                });
              }}
            />
          )}

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
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => {
              dispatch(postpropertyAction.SetPropertyState(totalStepOneData));
              setCurrent((prev: any) => prev + 1);
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

export default React.memo(PostPropertyOne);
