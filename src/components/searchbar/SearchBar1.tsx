import { useState } from "react";
import microphone from "../../assets/images/Microphone.png";
import { BsChevronDown } from "react-icons/bs";
import plus from "../../assets/images/plus.png";
import right from "../../assets/images/right (2).png";
import "./SearchBar1.css";
import { Slider } from "antd";
import { useNavigate } from "react-router-dom";

export default function SearchBarBeforeLogin() {
  const navigate = useNavigate();
  const [isDropdownVisible, setDropdownVisibility] = useState(false);
  const [isPropertyDropdownOpen, setisPropertyDropdownOpen] = useState(false);
  const [isPriceDropdownOpen, setisPriceDropdownOpen] = useState(false);
  const [bhkStatus, setBHKStatus] = useState("");
  const [ConstrStatus, setConstrStatus] = useState("");
  const [PostedStatus, setPostedStatus] = useState("");
  const [isBHKDropdownOpen, setBHKDropdownOpen] = useState(false);
  const [isConstructionDropdownOpen, setConstructionDropdownOpen] =
    useState(false);
  const [isPostedByDropdownOpen, setPostedByDropdownOpen] = useState(false);
  const [sliderValue, setSliderValue] = useState<[number, number] | undefined>([
    500000, 10000000,
  ]);
  const [minSliderValue, setMinSliderValue] = useState<number>(500000);
  const [maxSliderValue, setMaxSliderValue] = useState<number>(10000000);
  const [activeTab, setActiveTab] = useState('Buy');

  const handleTabClick = (tab:any) => {
    setActiveTab(tab);
  };

  const handleChange = (value: number | [number, number]) => {
    if (Array.isArray(value)) {
      setSliderValue(value);
      setMinSliderValue(value[0]);
      setMaxSliderValue(value[1]);
    }
  };
  const toggleBHKDropdown = () => {
    setBHKDropdownOpen(!isBHKDropdownOpen);
  };

  const toggleConstructionDropdown = () => {
    setConstructionDropdownOpen(!isConstructionDropdownOpen);
  };
  const handleBHKStatus = (status: string) => {
    setBHKStatus(status);
    setBHKDropdownOpen(false);
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
    setPostedByDropdownOpen(!isPropertyDropdownOpen);
  };

  const toggleDropdown = () => {
    setDropdownVisibility(!isDropdownVisible);
  };
  const togglePropertyDropdown = () => {
    setisPropertyDropdownOpen(!isPropertyDropdownOpen);
  };
  const togglePriceDropdown = () => {
    setisPriceDropdownOpen(!isPriceDropdownOpen);
  };
  const formatValue = (value: any) => {
    if (value >= 10000000) {
      return `${value / 10000000} Cr`;
    } else if (value >= 100000) {
      return `${value / 100000} L`;
    } else {
      return value.toString();
    }
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
      <div
        className="p-2"
        // style={{ backgroundColor: "white", borderRadius: "20px" }}
      >
        <ul
          className="nav nav-tabs "
          style={{
            width: "725px",
            marginLeft: "60px",
            marginBottom: "-5px",
            gap: "10px",
          }}
        >
          <li className={`nav-item bg-light rounded `}>
        <a className={`nav-link ${activeTab === 'Buy' ? 'active' : ''}`} onClick={() => handleTabClick('Buy')}>
          Buy
        </a>
      </li>
      <li className={`nav-item bg-light rounded `}>
        <a className={`nav-link ${activeTab === 'Rent/Lease' ? 'active' : ''}`} onClick={() => handleTabClick('Rent/Lease')}>
        Rent/Lease
        </a>
      </li>
      <li className={`nav-item bg-light rounded `}>
        <a className={`nav-link ${activeTab === 'Office Space' ? 'active' : ''}`} onClick={() => handleTabClick('Office Space')}>
        Office Space
        </a>
      </li>
      <li className={`nav-item bg-light rounded `}>
        <a className={`nav-link ${activeTab === 'Commercial' ? 'active' : ''}`} onClick={() => handleTabClick('Commercial')}>
        Commercial
        </a>
      </li>
      <li className={`nav-item bg-light rounded `}>
        <a className={`nav-link ${activeTab === 'Event Space' ? 'active' : ''}`} onClick={() => handleTabClick('Event Space')}>
        Event Space
        </a>
      </li>
      <li className={`nav-item bg-light rounded `}>
        <a className={`nav-link ${activeTab === 'Flatmate' ? 'active' : ''}`} onClick={() => handleTabClick('Flatmate')}>
        Flatmate
        </a>
      </li>
      <li className={`nav-item bg-light rounded `}>
        <a className={`nav-link ${activeTab === 'PG' ? 'active' : ''}`} onClick={() => handleTabClick('PG')}>
        PG
        </a>
      </li>
        </ul>
        <div className="nl-search__wrap">
          <div className="nl-search__location">
            <div className="nl-search__location_wrap">
              <label style={{ fontSize: "16px" }}>Location</label>
              <div
                style={{
                  border: "solid 0.5px rgba(255, 210, 210, 1)",
                  borderRadius: "13px",
                  height: "37px",
                  backgroundColor: "rgba(240, 240, 240, 1)",
                }}
              >
                {/* <span style={{ marginTop: "-3px" }}>
                  <IoIosSearch style={{ fontSize: "1em" }} />
                </span> */}

                <input
                  type="text"
                  className="nl-searchlocation__input"
                  placeholder="City/Location/Landmark/Pincode"
                />
              </div>
            </div>
          </div>
          <div className="nl-search__property" style={{ marginLeft: "-40px" }}>
            <div className="nl-search__location_wrap">
              <label style={{ fontSize: "16px" }}>Property Type</label>
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
                  placeholder="Flat/Plot/Shop/Hostel"
                />
                <BsChevronDown
                  onClick={togglePropertyDropdown}
                  style={{ marginTop: "8px", marginRight: "6px" }}
                />
                {isPropertyDropdownOpen && (
                  <ul className="propertyDropdown">
                    <li style={{ marginRight: "20px" }}>
                      <a>Flat</a>
                    </li>
                    <li style={{ marginRight: "20px" }}>
                      <a>Independent House</a>
                    </li>
                    <li style={{ marginRight: "20px" }}>
                      <a>Villa</a>
                    </li>
                    <li style={{ marginRight: "20px" }}>
                      <a>Guest House</a>
                    </li>
                    <li style={{ marginRight: "23px" }}>
                      <a>Studio Apartment</a>
                    </li>
                    <li style={{ marginRight: "22px" }}>
                      <a>Farm House</a>
                    </li>
                    <li style={{ marginRight: "20px" }}>
                      <a>Service Apartment</a>
                    </li>
                    <li style={{ marginRight: "20px" }}>
                      <a>Hostel</a>
                    </li>
                    <li style={{ marginRight: "20px" }}>
                      <a>Co-Working Spaces</a>
                    </li>
                    <li style={{ marginRight: "20px" }}>
                      <a>Event Spaces</a>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div className="nl-search__property" style={{ marginLeft: "19px" }}>
            <div className="nl-search__location_wrap">
              <label style={{ fontSize: "16px" }}>Price</label>
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
                  placeholder="₹  Select Price Range"
                />
                <BsChevronDown
                  onClick={togglePriceDropdown}
                  style={{ marginTop: "8px", marginRight: "6px" }}
                />
                {isPriceDropdownOpen && (
                  <div className="pricedropdown">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        className="min"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginLeft: "20px",
                          marginTop: "15px",
                          order: 1,
                        }}
                      >
                        <label>Min</label>
                        <label>{formatValue(minSliderValue)}</label>
                        <input
                          placeholder=""
                          style={{
                            width: "70px",
                            border: "solid 0.5px rgba(255, 210, 210, 1)",
                            borderRadius: "5px",
                            backgroundColor: "white",
                          }}
                        />
                      </div>
                      <div
                        className="max"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginRight: "20px",
                          marginTop: "15px",
                          order: 2,
                        }}
                      >
                        <label>Max</label>
                        <label>{formatValue(maxSliderValue)}</label>
                        <input
                          placeholder=""
                          style={{
                            width: "70px",
                            border: "solid 0.5px rgba(255, 210, 210, 1)",
                            borderRadius: "5px",
                            backgroundColor: "white",
                          }}
                        />
                      </div>
                    </div>
                    <Slider
                      className="slider"
                      range={{ draggableTrack: true }}
                      value={sliderValue}
                      min={0}
                      max={50000000}
                      onChange={handleChange}
                      onAfterChange={handleChange}
                      tooltip={{
                        formatter: (value) => formatValue(value as number),
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <img
            src={microphone}
            alt=""
            style={{
              marginLeft: "30px",
              marginTop: "50px",
              height: "30px",
              width: "30px",
            }}
          />
          <div className="nl-search__button">
            <div className="nl-search_btn_wrap">
              <span className="nl-search__btn_icon">
                <i className="icofont-search"></i>
              </span>
              <span
                className="nl-search__btn_text"
                onClick={() => navigate("/searchresult")}
              >
                Search
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          paddingInline:"10px",
          paddingBlock:"2px",
          backgroundColor: "white",
          borderRadius: "25px",
          marginRight: "-695px",
          position: "relative",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <img src={plus} alt=""  />
        <span onClick={toggleDropdown} style={{ cursor: "pointer" }}>
          Advanced Search
        </span>

        {isDropdownVisible && (
          <div className="advanced">
            <div className="clear-all">
              <a>Clear All</a>
            </div>
            <div>
              <img src={right} alt="" />
              <span>Flat/Apartment</span>
            </div>
            <div>
              <img src={right} alt="" />
              <span>Independent House/Villa</span>
            </div>
            <div>
              <img src={right} alt="" />
              <span>Studio Apartment</span>
            </div>

            <div>
              <img src={right} alt="" />
              <span>Guest House</span>
            </div>
            <div>
              <img src={right} alt="" />
              <span>Service Apartment</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "55px",
              }}
            >
              <div className="bedrooms" style={{ marginLeft: "-400px" }}>
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
                    className="nl-searchlocation__propertyInput"
                    placeholder=""
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
                        <a onClick={() => handlePostedStatus("ABC")}>ABC</a>
                      </li>
                      <li>
                        <a onClick={() => handlePostedStatus("XYZ")}>XYZ</a>
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
