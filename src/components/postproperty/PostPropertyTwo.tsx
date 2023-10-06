import React, { useState, useRef, useMemo, useEffect } from "react";

import Radio from "@mui/material/Radio";
import Chip from "@mui/material/Chip";
// import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { furnishedStatus } from "../../helper/PostPropertyObj";
import FurnishingStatusModal from "./FurnishingStatusModal";
import SemiFurnishingStatusModal from "./SemiFurnishingStatusModal";

import {
  furnitureRadio,
  aminity,
  ownerShiptype,
  availability,
} from "../../helper/PostPropertyObj";
import Checkbox from "@mui/material/Checkbox";
import Api from "../../api/apiServices";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { propertyAction } from "./redux/actions";
import { useNavigate } from "react-router-dom";

type proprtyTwoProps = {
  setStepOne: any;
  setStepTwo: any;
  stepOneData: any;
  setOpenModal: any;
  setStepOneData: any;
};


export default React.memo(function PostPropertyTwo({
  setStepOne,
  setStepTwo,

  setOpenModal,
  
}: proprtyTwoProps) {
  const [radioSelectValue, setRadioSelectvalue] = useState("");
  const [textareastr, setTextareastr] = useState("");
  const [imagePreview, setImagePreview] = useState<
    (File | { url: string; serveruri: any })[]
  >([]);
 
  const [addAminities, setAddAminities] = useState(aminity);
  const [addOwnerShip, setAddOwnerShip] = useState(ownerShiptype);
  const [addAvailability, setAddAvailability] = useState(availability);
  const [addFurnishingStatus, setAddFurnishingStatus] =
    useState(furnishedStatus);
  const [openFurnishingModal, setOpenFurnishingModal] = useState(false);
  const [openSemiFurnishedModal, setOpenSemiFurnishedModal] = useState(false);
  const [furnishingItemsObj, setFurnishingItemsObj] = useState([]);
  const [semiFurnishingItemsObj, setSemiFurnishingItemsObj] = useState(null);
  const [map, setMap] = useState(/** @type google.maps.GoogleMap */ null);
console.log(map)
  const [objectOne, setObjectOne] = useState({
    ownership: "",
    availablity: "",
    discription: "",
    furmished_status: "",
    expected_price: 0,
    maintainance_per_month: 0,
    negotiable: false,
    loan: "",
    all_inclusive_price: false,
    tax_excluded: false,
    anual_dues_pay: false,
    token_amount: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selectStepData = useSelector(
    (state: any) => state?.postPropertyReducer?.stepData
  );
  console.log("step One Data ==>", selectStepData);

  const [currentPosition, setCurrentPosition] =
    useState<google.maps.LatLngLiteral | null>(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCEDp1k2rqt67lzxkvetaemDGp7ieO3rpg",
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position: any) => {
      const { latitude, longitude } = position.coords;
      console.log(latitude, longitude);
      setCurrentPosition({ lat: latitude, lng: longitude });
    });
  }, []);

  const stepTwoData = useMemo(
    () => ({
      // frunishing: furnitureRadio.filter((item) => item.active === true),
      amenities: addAminities.filter((item: any) => item.active === true),
      image_gallery: imagePreview,
      ...objectOne,
      location: [currentPosition?.lat, currentPosition?.lng],
      furnishing: furnishingItemsObj?.filter((item: any) => item?.count > 0),
      semi_furnished: semiFurnishingItemsObj,
    }),
    [
      furnitureRadio,
      addAminities,
      imagePreview,
      objectOne,
      currentPosition,
      furnishingItemsObj,
      semiFurnishingItemsObj,
    ]
  );
  console.log("step two Data", stepTwoData);

  const hideInputRef: any = useRef();

  const handleMarkerDragEnd = (event: any) => {
    const newLat = event.latLng.lat();
    const newLng = event.latLng.lng();
    setCurrentPosition({ lat: newLat, lng: newLng });
  };

  // function for state values of radio buttons
  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioSelectvalue(event.target.value);
  };

  // function for uploading the images to server

  const uploadtoServer = async (file: File) => {
    try {
      const response = await Api.post("/property/uploadImage", file);
      return await response.data;
    } catch (err: any) {
      console.log(err.response);
    }
  };

  // function for handling images when change

  const handleImageSelect = async (e: any) => {
    const formData: any = new FormData();

    formData.append("file", e.target.files[0]);
    const urlOfSeerver = await uploadtoServer(formData);
    if (urlOfSeerver) {
      setImagePreview([
        ...imagePreview,
        {
          url: URL.createObjectURL(e.target.files[0]),
          serveruri: urlOfSeerver,
        },
      ]);
    }
  };

  const stepChangeHandler = () => {
    setStepOne(true);
    setStepTwo(false);
  };

  // const handleFurnishRadioChange = useCallback((value: string) => {
  //   const newArr = [...furnitureRadio];
  //   const updatedRadioOptions = newArr.map((item) => ({
  //     ...item,
  //     active: item.value === value ? !item.active : item.active,
  //   }));
  //   setAddFurnishingRadio(updatedRadioOptions);
  // }, []);

  const handleAddAminityRadio = (value: string) => {
    const newArry = [...addAminities];
    const updatedAminitiesOtion = newArry.map((item:any) => ({
      ...item,
      active: item.value === value ? !item.active : item.active,
    }));
    setAddAminities(updatedAminitiesOtion);
  };

  const handleAddOwnerShipType = (value: string) => {
    const newArry = [...addOwnerShip];
    const updatedArry = newArry.map((item:any) => ({
      ...item,
      active: item.value === value,
    }));
    setAddOwnerShip(updatedArry);
    setObjectOne({
      ...objectOne,
      ownership: value,
    });
  };

  const handleFurnishingStatus = (key: string) => {
    const newArry = [...addFurnishingStatus];
    const updatedArry = newArry.map((item:any) => ({
      ...item,
      active: item.key == key,
    }));
    setAddFurnishingStatus(updatedArry);
    if (key === "furnished") {
      setOpenFurnishingModal(true);
      setObjectOne({
        ...objectOne,
        furmished_status: key,
      });
    } else if (key === "semi_frunished") {
      setOpenFurnishingModal(true);
      setObjectOne({
        ...objectOne,
        furmished_status: key,
      });
    } else {
      setObjectOne({
        ...objectOne,
        furmished_status: key,
      });
    }
  };

  const handleAddAvailability = (value: string) => {
    const newArry = [...addAvailability];
    const updatedArry = newArry.map((item) => ({
      ...item,
      active: item.value === value,
    }));
    setAddAvailability(updatedArry);
    setObjectOne({
      ...objectOne,
      availablity: value,
    });
  };

  const handleSendData = async () => {
    dispatch(
      propertyAction.fetchPostProperty({ ...stepTwoData, ...selectStepData })
    );
  };

  const postingData = useSelector(
    (state: any) => state?.postPropertyReducer?.postingData
  );
  console.log("response =>", postingData);
  const postingLoader = useSelector(
    (state: any) => state?.postPropertyReducer?.postingLoader
  );
  console.log("stepOne data ==>", postingData);
  useEffect(() => {
    if (postingData?.status) {
      setOpenModal(false);
      alert(postingData?.message);
      navigate("/proprtydetail");
      setTimeout(() => {
        dispatch(propertyAction.setPostProperty(null));
      }, 1000);
    }
  }, [dispatch, postingData]);

  return (
    <div>
      {/* <div>
        <h6>Add Furnishing</h6>
        {furnitureRadio.map((item) => (
          <Chip
            key={item.value}
            label={item.label}
            sx={{ margin: "10px" }}
            clickable
            color={item.active ? "primary" : "default"}
            icon={
              <Checkbox
                checked={item.active}
                onChange={() => handleFurnishRadioChange(item.value)}
                color="default"
                size="small"
                value={item.value}
                aria-label={item.value}
              />
            }
          />
        ))}
        <hr />
      </div> */}
      <div>
        <h6>Add Amenities</h6>
        {addAminities.map((item: any) => (
          <Chip
            key={item.value}
            label={item.label}
            sx={{ margin: "10px" }}
            clickable
            color={item.active ? "primary" : "default"}
            icon={
              <Checkbox
                checked={item.active}
                onChange={() => handleAddAminityRadio(item.value)}
                color="default"
                size="small"
                value={item.value}
                aria-label={item.value}
              />
            }
          />
        ))}
        <hr />
      </div>
      <div>
        <h6>Fruinishing Status</h6>
        {addFurnishingStatus.map((item: any) => (
          <Chip
            key={item.key}
            style={{
              margin: "8px",
              backgroundColor: item.active ? "#82D7E0" : "",
            }}
            label={item.label}
            onClick={() => handleFurnishingStatus(item.key)}
          />
        ))}
        <FurnishingStatusModal
          openFurnishingModal={openFurnishingModal}
          setFurnishingItemsObj={setFurnishingItemsObj}
          setOpenFurnishingModal={setOpenFurnishingModal}
        />
        <SemiFurnishingStatusModal
          openFurnishingModal={openSemiFurnishedModal}
          setOpenFurnishingModal={setOpenSemiFurnishedModal}
          setSemiFurnishingItemsObj={setSemiFurnishingItemsObj}
        />
        <hr />
      </div>
      <div>
        <h6>Ownership type</h6>
        {addOwnerShip.map((item:any) => (
          <Chip
            key={item.value}
            style={{
              margin: "8px",
              backgroundColor: item.active ? "#82D7E0" : "",
            }}
            label={item.label}
            onClick={() => handleAddOwnerShipType(item.value)}
          />
        ))}
        <hr />
      </div>
      <div>
        <h6>Availability</h6>
        {addAvailability.map((item:any) => (
          <Chip
            style={{
              margin: "8px",
              backgroundColor: item.active ? "#82D7E0" : "",
            }}
            label={item.label}
            onClick={() => handleAddAvailability(item.value)}
          />
        ))}
        <hr />
      </div>
      <div>
        <h6>
          <strong>Price Details</strong>
        </h6>
        <div>
          <input
            type="number"
            placeholder="Expected Price"
            className="property__area_input m-1"
            value={objectOne.expected_price}
            onChange={(e:any) =>
              setObjectOne({
                ...objectOne,
                expected_price: parseFloat(e.target.value),
              })
            }
          />
          <input
            type="number"
            placeholder="Maintainence/Month"
            className="property__area_input m-1"
            value={objectOne.maintainance_per_month}
            onChange={(e: any) =>
              setObjectOne({
                ...objectOne,
                maintainance_per_month: e.target.value,
              })
            }
          />
        </div>
        <div className="d-flex fle-wrap align-item-center">
          <div style={{ width: "700px" }}>
            <input
              className="m-1"
              type="checkbox"
              value="yes"
              onChange={() =>
                setObjectOne({
                  ...objectOne,
                  negotiable: true,
                })
              }
            />
            <span>price negotialble</span>
          </div>
          <div style={{ width: "700px" }}>
            <input
              type="checkbox"
              value="yes"
              onChange={(e) =>
                setObjectOne({
                  ...objectOne,
                  loan: e.target.value,
                })
              }
            />
            <span>Currently Under Loan</span>
          </div>
          <div style={{ width: "700px" }}>
            <input
              type="checkbox"
              value="yes"
              onChange={() =>
                setObjectOne({
                  ...objectOne,
                  all_inclusive_price: true,
                })
              }
            />
            <span>All Inclusive Price</span>
          </div>
          <div style={{ width: "700px" }}>
            <input
              type="checkbox"
              value="yes"
              onChange={() =>
                setObjectOne({
                  ...objectOne,
                  all_inclusive_price: true,
                })
              }
            />
            <span>Tax Excluded</span>
          </div>
          <div style={{ width: "700px" }}>
            <input
              type="checkbox"
              value="yes"
              onChange={() =>
                setObjectOne({
                  ...objectOne,
                  anual_dues_pay: true,
                })
              }
            />
            <span>Anual Dues paid</span>
          </div>
        </div>
        <input
          type="number"
          placeholder="Token Amount"
          className="property__area_input m-1"
          onChange={(e) =>
            setObjectOne({
              ...objectOne,
              token_amount: e.target.value,
            })
          }
        />
        <hr />
      </div>
      <div>
        <h6>Property Photo</h6>
        <div className="property__photo_button_container">
          <button
            className="property_photo__button"
            onClick={() => hideInputRef?.current.click()}
          >
            +Add picture
          </button>
          <input
            type="file"
            ref={hideInputRef}
            onChange={handleImageSelect}
            style={{ display: "none" }}
          />
          <p className="property_photo_text">
            Property Listings with more than 5 images get 3x more views.
            <br />
            More Images = Higher chances of Leads.
            <br />
            Accepted formats are .jpg, .gif, .bmp & .png and Maximum size
            allowed 10 MB
          </p>
        </div>
      </div>
      <div>
        <h6>Choose tag</h6>
        <div className="row">
          {imagePreview.map((item: any, index: any) => (
            <div className="col-lg-4">
              <div className="choose_tag__image">
                <img src={item.url} alt={`item-${index}`} />
                {/* <FormControl
                  required
                  sx={{
                    m: 1,
                    minWidth: 110,
                    maxHeight: 31,
                    bgcolor: "#ECECEC",
                    borderRadius: "25px",
                    border: "none",
                    "&:hover": { border: "none", outline: "none" },
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                  }}
                >
                  <InputLabel
                    style={{ fontSize: "14px", top: "-9px" }}
                    id="demo-simple-select-required-label"
                  >
                    Units
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    value="null"
                    label="Age *"
                    onChange={() => console.log("hello")}
                    sx={{
                      minWidth: "inherit",
                      maxHeight: "inherit",
                      border: "none",
                      outlineColor: "none",
                      textAlign: "center", // Center text horizontally
                      paddingTop: "6px", // Adjust vertical alignment
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"hyderabad"}>Hyderabad</MenuItem>
                    <MenuItem value={"vijayawada"}>Vijayawada</MenuItem>
                    <MenuItem value={"guntur"}>Guntur</MenuItem>
                  </Select>
                </FormControl> */}
                {/* <div className="d-flex">
                  <Radio
                    checked={radioSelectValue === "a"}
                    onChange={handleChangeRadio}
                    value="a"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 28,
                      },
                    }}
                  />
                  <span>Set as Cover</span>
                  <DeleteForeverRoundedIcon />
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h6>Google Maps</h6>
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
              {/* <button onClick={() => map?.panTo(currentPosition)}>
                Pan Location
              </button> */}
            </>
          ) : (
            <h6>...Loading</h6>
          )}
        </div>
      </div>
      <div>
        <h6>Property Description</h6>
        <textarea
          name="postContent"
          rows={8}
          cols={70}
          className="textarea_text"
          style={{ backgroundColor: "#ECECEC" }}
          value={textareastr}
          onChange={(e) => {
            setTextareastr(e.target.value);
            setObjectOne({ ...objectOne, discription: e.target.value });
          }}
        />
      </div>
      <div>
        <div>
          <Radio
            checked={radioSelectValue === "a"}
            onChange={handleChangeRadio}
            value="a"
            name="radio-buttons"
            inputProps={{ "aria-label": "A" }}
          />
          <span>I agree terms & conditions of NearLuk</span>
        </div>
        <div>
          <Radio
            checked={radioSelectValue === "a"}
            onChange={handleChangeRadio}
            value="a"
            name="radio-buttons"
            inputProps={{ "aria-label": "A" }}
          />
          <span>I want to receive responses on whatsapp</span>
        </div>
      </div>
      <div>
        <button className="back__button" onClick={stepChangeHandler}>
          Back
        </button>
        <button
          className="post__button"
          onClick={handleSendData}
          disabled={postingLoader}
        >
          {postingLoader ? <Spinner /> : "Post Now"}
        </button>
      </div>
    </div>
  );
});
