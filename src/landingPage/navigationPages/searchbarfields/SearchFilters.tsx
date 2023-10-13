import { useState } from "react";
import './Searchfilter.css'
import { BsChevronDown } from "react-icons/bs";
export default function SearchFilters() {
  const [bhkStatus, setBHKStatus] = useState("");
  const [ConstrStatus, setConstrStatus] = useState("");
  const [PostedStatus, setPostedStatus] = useState("");
  const [isBHKDropdownOpen, setBHKDropdownOpen] = useState(false);
  const [isConstructionDropdownOpen, setConstructionDropdownOpen] =
    useState(false);
  const [isPostedByDropdownOpen, setPostedByDropdownOpen] = useState(false);
  const [flatChecked, setFlatChecked] = useState(false);
  const [villaChecked, setVillaChecked] = useState(false);
  const [houseChecked, setHouseChecked] = useState(false);
  const [studioChecked, setStudioChecked] = useState(false);
  const [guestChecked, setGuestChecked] = useState(false);
  const [serviceChecked, setServiceChecked] = useState(false);

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

  return (
    <div>
      <div>
        <h6>Property Type</h6>
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
      </div>

      <div className="bedrooms" >
        <div>
          <h6> No. of Bedrooms</h6>
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
            <ul className="searchfilter">
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
      <div className="construction" >
        <div>
          <h6> Construction Status</h6>
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
            <ul className="searchfilter">
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
      <div className="posted" >
        <div>
          <h6> Posted By</h6>
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
            <ul className="searchfilter">
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
  );
}
