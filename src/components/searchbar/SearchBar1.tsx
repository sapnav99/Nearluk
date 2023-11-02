import { useState } from "react";
import microphone from "../../assets/images/Microphone.png";
import { BsChevronDown } from "react-icons/bs";
import plus from "../../assets/images/plus.png";
import "./SearchBar1.css";

import { useNavigate } from "react-router-dom";
import Tabs from "./searchbarfields/Tabs";
import PropertyType from "./searchbarfields/PropertyType";
import Price from "./searchbarfields/Price";
import Location from "./searchbarfields/Location";
// import PropertySearchLocation from "../postproperty/PropertySearchLocation";
export default function SearchBarBeforeLogin() {
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState("");
  const [isDropdownVisible, setDropdownVisibility] = useState(false);
  const [searchCity, setSearchCity] = useState("");
  const [searchState, setSearchState] = useState("");
  const [searchLocality, setSearchLocality] = useState("");
  const [minSliderValue, setMinSliderValue] = useState<number>(0);
  const [maxSliderValue, setMaxSliderValue] = useState<number>(10000000);
  const [sliderValue, setSliderValue] = useState<any | undefined>([
    0, 10000000,
  ]);
  const [bhkStatus, setBHKStatus] = useState("");
  const [ConstrStatus, setConstrStatus] = useState("");
  const [PostedStatus, setPostedStatus] = useState("");
  const [isBHKDropdownOpen, setBHKDropdownOpen] = useState(false);
  const [isConstructionDropdownOpen, setConstructionDropdownOpen] =
    useState(false);
  const [isPostedByDropdownOpen, setPostedByDropdownOpen] = useState(false);

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
  };

  const collectUserData = () => {
    const selectedBHK = bhkStatus.toString();
    const selectedConstructionStatus = ConstrStatus.toString();
    const selectedPostedBy = PostedStatus.toString();

    const locationInputValue = searchCity || searchState || searchLocality;
    if (!locationInputValue) {
      return;
    }

    const userData = {
      bhk: `${selectedBHK}`,
      construction_status: `${selectedConstructionStatus}`,
      posted_by: `${selectedPostedBy}`,
      city: locationInputValue,
      selectedItems: selectedItems,
      minprise: minSliderValue,
      maxprise: maxSliderValue,
    };
    const selectedItemsString = selectedItems.toString();
    const queryString = `city=${locationInputValue}&priceRange=${sliderValue}&selectedItems=${selectedItemsString}&bhk=${selectedBHK}&construction_status=${selectedConstructionStatus}&posted_by=${selectedPostedBy}`;

    const mainUrl = `/searchresult/?${queryString}`;
    navigate(mainUrl, {
      state: { searchData: userData },
    });

    console.log(userData);

    return userData;
  };

  const toggleDropdown = () => {
    setDropdownVisibility(!isDropdownVisible);
  };

  return (
    <section
      className="searchbar__section"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="p-2">
        <div>
          <Tabs />
        </div>

        <div className="search__wrap">
          <div>
            <Location
              searchCity={searchCity}
              setSearchCity={setSearchCity}
              searchState={searchState}
              setSearchState={setSearchState}
              searchLocality={searchLocality}
              setSearchLocality={setSearchLocality}
            />
          </div>
          <div>
            <PropertyType
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
            />
          </div>
          <div>
            <Price
              minSliderValue={minSliderValue}
              maxSliderValue={maxSliderValue}
              setMinSliderValue={setMinSliderValue}
              setMaxSliderValue={setMaxSliderValue}
              sliderValue={sliderValue}
              setSliderValue={setSliderValue}
            />
          </div>
          <img
            src={microphone}
            alt=""
            style={{
              marginLeft: "30px",
              marginTop: "42px",
              height: "30px",
              width: "30px",
            }}
          />
          <div className="search__button">
            <div className="search_btn_wrap">
              {/* <span className="search__btn_icon">
                <i className="icofont-search"></i>
              </span> */}
              <span className="search__btn_text" onClick={collectUserData}>
                Search
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          paddingInline: "10px",
          paddingBlock: "2px",
          backgroundColor: "white",
          borderRadius: "25px",
          marginRight: "-695px",
          position: "relative",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <img src={plus} alt="" />
        <span onClick={toggleDropdown} style={{ cursor: "pointer" }}>
          Advanced Search
        </span>

        {isDropdownVisible && (
          <div className="advanced">
            <div className="clear-all">
              <a onClick={clearAll}>Clear All</a>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                float: "left",
                marginLeft: "-165px",
                marginTop: "15px",
              }}
            >
              <div className="bedrooms" style={{ marginLeft: "-100px" }}>
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
                    style={{ paddingTop: "15px" }}
                    className="searchlocation__propertyInput"
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
                    style={{ paddingTop: "15px" }}
                    className="searchlocation__propertyInput"
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
                        <a
                          onClick={() =>
                            handleconstrStatus("Under Construction")
                          }
                        >
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
                    style={{ paddingTop: "15px" }}
                    className="searchlocation__propertyInput"
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
        )}
      </div>
    </section>
  );
}
