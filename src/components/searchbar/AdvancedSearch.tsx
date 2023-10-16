import { useState} from "react";
import { BsChevronDown } from "react-icons/bs";
import "./SearchBar1.css";

const AdvancedSearch = () => {
  const [bhkStatus, setBHKStatus] = useState("");
  const [ConstrStatus, setConstrStatus] = useState("");
  const [PostedStatus, setPostedStatus] = useState("");
  const [isBHKDropdownOpen, setBHKDropdownOpen] = useState(false);
  const [isConstructionDropdownOpen, setConstructionDropdownOpen] =
    useState(false);
  const [isPostedByDropdownOpen, setPostedByDropdownOpen] = useState(false);
  const [flatChecked, setFlatChecked] = useState(false);
  const [villaChecked, setVillaChecked] = useState(false);
const [houseChecked, setHouseChecked]= useState(false);
const [studioChecked , setStudioChecked]=useState(false);
const [guestChecked, setGuestChecked] = useState(false);
const[serviceChecked, setServiceChecked]=useState(false);

  const toggleBHKDropdown = () => {
    setBHKDropdownOpen(!isBHKDropdownOpen);
  };
  const handleBHKStatus = (status: string) => {
    setBHKStatus(status);
    setBHKDropdownOpen(false);
  };
  const toggleConstructionDropdown = () => {
    setConstructionDropdownOpen(!isConstructionDropdownOpen);
  };

  const handleconstrStatus = (status: string) => {
    setConstrStatus(status);
    setConstructionDropdownOpen(false);
  };
  const handlePostedStatus = (status: string) => {
    setPostedStatus(status);
    setPostedByDropdownOpen(false);
  };

  const togglePostedByDropdown = () => {
    setPostedByDropdownOpen(!isPostedByDropdownOpen);
  };
 
  
  const clearAll = () => {
    setBHKStatus("");
    setConstrStatus("");
    setPostedStatus("");
    setBHKDropdownOpen(false);
    setConstructionDropdownOpen(false);
    setPostedByDropdownOpen(false);
    setFlatChecked(false);
    setVillaChecked(false);
    setGuestChecked(false);
    setHouseChecked(false);
    setStudioChecked(false);
    setServiceChecked(false);
  };
  
  return (
    <div>
      <div className="advanced">
        <div className="clear-all">
          <a onClick={clearAll}>Clear All</a>
        </div>
        <div className="form-check">
        <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="checkedflat"
            checked={flatChecked}
            onChange={() => setFlatChecked(!flatChecked)}
          />
          <label className="form-check-label" htmlFor="checkedflat">
            Flat/Apartment
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="checkedhouse"
            checked={houseChecked}
            onChange={() => setHouseChecked(!houseChecked)}
          />
          <label className="form-check-label" htmlFor="checkedhouse">
            Independent House
          </label>
        </div>
        <div className="form-check">
        <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="checkedvilla"
            checked={villaChecked}
            onChange={() => setVillaChecked(!villaChecked)}
          />
          <label className="form-check-label" htmlFor="checkedvilla">
            Villa
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="checkedstudio"
            checked={studioChecked}
            onChange={() => setStudioChecked(!studioChecked)}
          />
          <label className="form-check-label" htmlFor="checkedstudio">
            Studio Apartment
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="checkedguest"
            checked={guestChecked}
            onChange={() => setGuestChecked(!guestChecked)}
          />
          <label className="form-check-label" htmlFor="checkedguest">
            Guest House
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="checkedservice"
            checked={serviceChecked}
            onChange={() => setServiceChecked(!serviceChecked)}
          />
          <label className="form-check-label" htmlFor="checkedservice">
            Service Apartment
          </label>
        </div>
        
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft:"-185px",
            marginTop: "25px",
          }}
        >
          <div className="bedrooms" style={{marginLeft:"-100px"}}>
            <div>
              <label> BHK</label>
            </div>
            <div
              style={{
                width: "178px",
                marginTop: "4px",
                display: "flex",
                
                border: "solid 0.5px rgba(255, 210, 210, 1)",
                borderRadius: "13px",
                height: "35px",
                backgroundColor: "rgba(240, 240, 240, 1)",
              }}
            >
              <input
                type="text"
                className="nl-searchlocation__propertyInput"
                placeholder=""
                onClick={toggleBHKDropdown}
                value={bhkStatus}
                readOnly
              />
              <BsChevronDown
                style={{ marginTop: "8px", marginRight: "6px" }}
                onClick={toggleBHKDropdown}
              />
              {isBHKDropdownOpen && (
                <ul className="advanced2">
                  <li>
                    <a onClick={() => handleBHKStatus("1BHK")}>1 BHK</a>
                  </li>
                  <li>
                    <a onClick={() => handleBHKStatus("2BHK")}>2 BHK</a>
                  </li>
                  <li>
                    <a onClick={() => handleBHKStatus("3BHK")}>3 BHK</a>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="construction" style={{ marginLeft: "15px" }}>
            <div>
              <label> Construction Status</label>
            </div>
            <div
              style={{
                width: "178px",
                marginTop: "4px",
                display: "flex",
                border: "solid 0.5px rgba(255, 210, 210, 1)",
                borderRadius: "13px",
                height: "35px",
                backgroundColor: "rgba(240, 240, 240, 1)",
              }}
            >
              <input
                type="text"
                className="nl-searchlocation__propertyInput"
                placeholder=""
                onClick={toggleConstructionDropdown}
                value={ConstrStatus}
                readOnly
              />
              <BsChevronDown
                style={{ marginTop: "8px", marginRight: "6px" }}
                onClick={toggleConstructionDropdown}
              />
              {isConstructionDropdownOpen && (
                <ul className="advanced2">
                  <li>
                    <a onClick={() => handleconstrStatus("Under Construction")}>
                      Under Construction
                    </a>
                  </li>
                  <li>
                    <a onClick={() => handleconstrStatus("Ready to move")}>
                      Ready to move
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="posted" style={{ marginLeft: "15px" }}>
            <div>
              <label> Posted By</label>
            </div>
            <div
              style={{
                width: "178px",
                marginTop: "4px",
                display: "flex",
                border: "solid 0.5px rgba(255, 210, 210, 1)",
                borderRadius: "13px",
                height: "35px",
                backgroundColor: "rgba(240, 240, 240, 1)",
              }}
            >
              <input
                type="text"
                className="nl-searchlocation__propertyInput"
                placeholder=""
                onClick={togglePostedByDropdown}
                value={PostedStatus}
                readOnly
              />
              <BsChevronDown
                style={{ marginTop: "8px", marginRight: "6px" }}
                onClick={togglePostedByDropdown}
              />
              {isPostedByDropdownOpen && (
                <ul className="advanced2">
                  <li>
                    <a onClick={() => handlePostedStatus("Owner")}>Owner</a>
                  </li>
                  <li>
                    <a onClick={() => handlePostedStatus("Agent")}>Agent</a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSearch;
