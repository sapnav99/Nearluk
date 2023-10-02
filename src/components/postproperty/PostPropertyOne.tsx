import { useState, useEffect } from "react";
import PostPropertyChip from "./PostPropertyChip";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Dispatch, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";
import { propertyAction } from "./redux/actions";
import Chip from "@mui/material/Chip";
import { propertyAraeUnits, availability } from "../../helper/PostPropertyObj";
import PropertySearchLocation from "./PropertySearchLocation";

interface Category {
  label: string;
  child: any[]; // You can specify a more specific type if needed
  key: string;
}

interface PropertyOneProps {
  data: Category[];
  setStepOne: Dispatch<SetStateAction<boolean>>;
  setStepTwo: Dispatch<SetStateAction<boolean>>;
}

export default function PostPropertyOne({
  data,
  setStepOne,
  setStepTwo,
}: PropertyOneProps) {
  const [maindata, setMaindata] = useState(data);
  const [ptype, setPtype] = useState([]);
  const [propertyTypes, setPropertyTypes] = useState({});
  const [ptypeChild, setPtypeChild] = useState([]);
  const defaultSelction = "sell";
  const defaultPtyeSelection = "residential";
  const dispatch = useDispatch();
  const selectStepData = useSelector(
    (state: any) => state?.postPropertyReducer?.stepdata
  );
  // console.log("this is step data ==> ", selectStepData);
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  });

  const [otherPropertyDetails, setotherPropertyDetails] = useState({
    city: address,
    property_name: "",
    locality: "",
    bhk: "",
    beds: "",
    balconies: "",
    floor_no: "",
    total_floors: "",
    bathrooms: "",
    facing: "",
    property_age: "",
    pooja_rooms: "",
    servant_rooms: "",
    gated_community: "",
    builtup_area: "",
    builtup_units: "",
    carpet_area: "",
    carpet_units: "",
    undivided_share: "",
  });

  const stepOneData = { ...propertyTypes, ...otherPropertyDetails };
  // console.log("steponedata", stepOneData);

  useEffect(() => {
    const defaultData = data.find((item: any) => item.key === defaultSelction);
    setPtype(defaultData?.child);
    const defalutptypeChild = defaultData.child.find(
      (item: any) => item.key === defaultPtyeSelection
    );
    setPtypeChild(defalutptypeChild?.child);
  }, []);

  const stepOneChangeHndler = () => {
    setStepOne(false);
    setStepTwo(true);
    dispatch(propertyAction.takeStepData(stepOneData));
  };

  return (
    <div className="m-1">
      <div>
        <h6>
          <strong>I Want to</strong>
        </h6>
        <PostPropertyChip
          data={maindata}
          setPtype={setPtype}
          forLable="iwant"
          propertyTypes={propertyTypes}
          setPropertyTypes={setPropertyTypes}
        />
        <hr />
      </div>
      <div>
        <h6>
          <strong>Property Type</strong>
        </h6>
        {ptype.length > 0 && (
          <PostPropertyChip
            data={ptype}
            setPtype={setPtypeChild}
            forLable="property_type"
            propertyTypes={propertyTypes}
            setPropertyTypes={setPropertyTypes}
          />
        )}
        <hr />
      </div>
      <div>
        {ptypeChild.length > 0 && (
          <PostPropertyChip
            data={ptypeChild}
            forLable="property_sub_type"
            propertyTypes={propertyTypes}
            setPropertyTypes={setPropertyTypes}
          />
        )}
        <hr />
      </div>
      <div>
        <h6>
          <strong>Property Location</strong>
        </h6>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PropertySearchLocation
            address={address}
            setAddress={setAddress}
            setCoordinates={setCoordinates}
          />
          <FormControl
            required
            sx={{
              m: 1,
              minWidth: 151,
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
              Project/Building
            </InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={otherPropertyDetails.property_name}
              label="Project/Building"
              onChange={(e) => {
                setotherPropertyDetails({
                  ...otherPropertyDetails,
                  property_name: e.target.value,
                });
              }}
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
          </FormControl>
          <FormControl
            required
            sx={{
              m: 1,
              minWidth: 151,
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
              Locality
            </InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={otherPropertyDetails.locality}
              label="Locality"
              onChange={(e) => {
                setotherPropertyDetails({
                  ...otherPropertyDetails,
                  locality: e.target.value,
                });
              }}
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
          </FormControl>
        </div>

        <hr />
      </div>
      <div>
        <h6>Property Details</h6>
        <FormControl
          required
          sx={{
            m: 1,
            minWidth: 151,
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
            BHk
          </InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={otherPropertyDetails.bhk}
            label="No of  Bed Rooms"
            onChange={(e) => {
              setotherPropertyDetails({
                ...otherPropertyDetails,
                bhk: e.target.value,
              });
            }}
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
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          required
          sx={{
            m: 1,
            minWidth: 151,
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
            No of Balconies
          </InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={otherPropertyDetails.balconies}
            label="No of Balconies"
            onChange={(e) => {
              setotherPropertyDetails({
                ...otherPropertyDetails,
                balconies: e.target.value,
              });
            }}
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
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          required
          sx={{
            m: 1,
            minWidth: 151,
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
            Floor No
          </InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={otherPropertyDetails.floor_no}
            label="Floor No"
            onChange={(e) => {
              setotherPropertyDetails({
                ...otherPropertyDetails,
                floor_no: e.target.value,
              });
            }}
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
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          required
          sx={{
            m: 1,
            minWidth: 151,
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
            Total Floors
          </InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={otherPropertyDetails.total_floors}
            label="Total Floors"
            onChange={(e) => {
              setotherPropertyDetails({
                ...otherPropertyDetails,
                total_floors: e.target.value,
              });
            }}
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
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={40}>40</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          required
          sx={{
            m: 1,
            minWidth: 151,
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
            No of Bathrooms
          </InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={otherPropertyDetails.bathrooms}
            label="No of Bathrooms"
            onChange={(e) => {
              setotherPropertyDetails({
                ...otherPropertyDetails,
                bathrooms: e.target.value,
              });
            }}
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
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          required
          sx={{
            m: 1,
            minWidth: 151,
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
            Facing
          </InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={otherPropertyDetails.facing}
            label="Facing"
            onChange={(e) => {
              setotherPropertyDetails({
                ...otherPropertyDetails,
                facing: e.target.value,
              });
            }}
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
            <MenuItem value={"east"}>East</MenuItem>
            <MenuItem value={"west"}>West</MenuItem>
            <MenuItem value={"south"}>South</MenuItem>
            <MenuItem value={"north"}>North</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          required
          sx={{
            m: 1,
            minWidth: 151,
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
            Property Age
          </InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={otherPropertyDetails.property_age}
            label="property Age"
            onChange={(e) => {
              setotherPropertyDetails({
                ...otherPropertyDetails,
                property_age: e.target.value,
              });
            }}
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
            <MenuItem value={"1"}>1</MenuItem>
            <MenuItem value={"2"}>2</MenuItem>
            <MenuItem value={"3"}>3</MenuItem>
            <MenuItem value={"4"}>4</MenuItem>
            <MenuItem value={"5"}>5</MenuItem>
            <MenuItem value={"6"}>6</MenuItem>
            <MenuItem value={"7"}>7</MenuItem>
            <MenuItem value={"8"}>8</MenuItem>
            <MenuItem value={"9"}>9</MenuItem>
            <MenuItem value={"10"}>10</MenuItem>
            <MenuItem value={"10+"}>10+</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          required
          sx={{
            m: 1,
            minWidth: 151,
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
            pooja Room
          </InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={otherPropertyDetails.pooja_rooms}
            label="Pooja Room"
            onChange={(e) => {
              setotherPropertyDetails({
                ...otherPropertyDetails,
                pooja_rooms: e.target.value,
              });
            }}
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
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          required
          sx={{
            m: 1,
            minWidth: 151,
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
            Servent Room
          </InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={otherPropertyDetails.servant_rooms}
            label="Servent Room"
            onChange={(e) => {
              setotherPropertyDetails({
                ...otherPropertyDetails,
                servant_rooms: e.target.value,
              });
            }}
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
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          required
          sx={{
            m: 1,
            minWidth: 151,
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
            Gated Community
          </InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={otherPropertyDetails.gated_community}
            label="Facing"
            onChange={(e) => {
              setotherPropertyDetails({
                ...otherPropertyDetails,
                gated_community: e.target.value,
              });
            }}
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
            <MenuItem value={"yes"}>yes</MenuItem>
            <MenuItem value={"no"}>no</MenuItem>
          </Select>
        </FormControl>
        <hr />
      </div>
      <div>
        <h6>Property Area</h6>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            placeholder="Built Area Value"
            className="property__area_input"
            value={otherPropertyDetails.builtup_area}
            onChange={(e) => {
              setotherPropertyDetails({
                ...otherPropertyDetails,
                builtup_area: e.target.value,
              });
            }}
          />
          <FormControl
            required
            sx={{
              m: 1,
              minWidth: 151,
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
              value={otherPropertyDetails.builtup_units}
              label="Units"
              onChange={(e) => {
                setotherPropertyDetails({
                  ...otherPropertyDetails,
                  builtup_units: e.target.value,
                });
              }}
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
              {propertyAraeUnits.map((item, i) => (
                <MenuItem key={i} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            placeholder="Carpet Area value"
            className="property__area_input"
            value={otherPropertyDetails.carpet_area}
            onChange={(e) => {
              setotherPropertyDetails({
                ...otherPropertyDetails,
                carpet_area: e.target.value,
              });
            }}
          />
          <FormControl
            required
            sx={{
              m: 1,
              minWidth: 151,
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
              value={otherPropertyDetails.carpet_units}
              label="Units"
              onChange={(e) => {
                setotherPropertyDetails({
                  ...otherPropertyDetails,
                  carpet_units: e.target.value,
                });
              }}
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
              {propertyAraeUnits.map((item, i) => (
                <MenuItem key={i} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl
            required
            sx={{
              m: 1,
              minWidth: 151,
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
              Undevided Share
            </InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={otherPropertyDetails.undivided_share}
              label="Undevided Share"
              onChange={(e) => {
                setotherPropertyDetails({
                  ...otherPropertyDetails,
                  undivided_share: e.target.value,
                });
              }}
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
              {propertyAraeUnits.map((item, i) => (
                <MenuItem key={i} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <hr />
      </div>
      <div style={{ marginBottom: "10px", position: "relative" }}>
        <button
          type="button"
          className="post__button"
          onClick={stepOneChangeHndler}
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
}
