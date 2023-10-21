import { useState } from "react";
import microphone from "../../assets/images/Microphone.png";
import { BsChevronDown } from "react-icons/bs";
import plus from "../../assets/images/plus.png";
import "./SearchBar1.css";
import { Slider } from "antd";
import { useNavigate } from "react-router-dom";

export default function SearchBarBeforeLogin() {
  const navigate = useNavigate();

  const [isDropdownVisible, setDropdownVisibility] = useState(false);
  const [isPropertyDropdownOpen, setisPropertyDropdownOpen] = useState(false);
  const [isPriceDropdownOpen, setisPriceDropdownOpen] = useState(false);

  const [sliderValue, setSliderValue] = useState<[number, number] | undefined>([
    0, 10000000,
  ]);
  const [minSliderValue, setMinSliderValue] = useState<number>(0);
  const [maxSliderValue, setMaxSliderValue] = useState<number>(10000000);

  const handleChange = (value: number | [number, number]) => {
    if (Array.isArray(value)) {
      setSliderValue(value);
      setMinSliderValue(value[0]);
      setMaxSliderValue(value[1]);
    }
  };
  const [selectedItems, setSelectedItems] = useState("");
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
    setBHKDropdownOpen(false);
    setConstructionDropdownOpen(false);
    setPostedByDropdownOpen(false);
  };
  const handleItemClick = (item: any) => {
    setSelectedItems(item);
  };

  const collectUserData = () => {
    
    const selectedBHK = bhkStatus.toString();
    const selectedConstructionStatus = ConstrStatus.toString();
    const selectedPostedBy = PostedStatus.toString();

    const locationInput = document.querySelector(
      ".nl-searchlocation__input"
    ) as HTMLInputElement;

    if (!locationInput) {
      return;
    }

    const userData = {
      bhk: `${selectedBHK}`,
      construction_status: `${selectedConstructionStatus}`,
      posted_by: `${selectedPostedBy}`,
      city: locationInput.value.toString(),
      selectedItems: selectedItems,
      minprise: minSliderValue,
      maxprise: maxSliderValue,
    };
    const selectedItemsString = selectedItems.toString();
    const queryString = `city=${locationInput.value}&priceRange=${sliderValue}&selectedItems=${selectedItemsString}&bhk=${selectedBHK}&construction_status=${selectedConstructionStatus}&posted_by=${selectedPostedBy}`;

    const mainUrl = `/searchresult/?${queryString}`;
    navigate(mainUrl, {
      state: { searchData: userData },
    });

   

    console.log(userData);

    return userData;
  };

  const [activeTab, setActiveTab] = useState("buy");

  const handleTabClick = (tabName: any) => {
    setActiveTab(tabName);
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
      <div className="p-2">
        <div className="tabcontainer">
          <ul
            className={`nav  `}
            style={{ marginLeft: "65px", marginBottom: "-5px" }}
          >
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "buy" ? "active" : ""}`}
                href="#"
                data-toggle="tab"
                onClick={() => handleTabClick("buy")}
                style={{
                  backgroundColor:
                    activeTab === "buy" ? "rgba(63, 219, 209, 1)" : "white",
                  borderRadius: "5px 5px 0px 0px",
                  marginRight: "5px",
                }}
              >
                Buy
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "rent/lease" ? "active" : ""
                }`}
                href="#"
                data-toggle="tab"
                onClick={() => handleTabClick("rent/lease")}
                style={{
                  borderRadius: "5px 5px 0px 0px",
                  backgroundColor:
                    activeTab === "rent/lease"
                      ? "rgba(63, 219, 209, 1)"
                      : "white",
                  marginRight: "5px",
                }}
              >
                Rent/Lease
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "office" ? "active" : ""}`}
                href="#"
                data-toggle="tab"
                onClick={() => handleTabClick("office")}
                style={{
                  borderRadius: "5px 5px 0px 0px",
                  backgroundColor:
                    activeTab === "office" ? "rgba(63, 219, 209, 1)" : "white",
                  marginRight: "5px",
                }}
              >
                Office Spaces
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "commercial" ? "active" : ""
                }`}
                href="#"
                data-toggle="tab"
                onClick={() => handleTabClick("commercial")}
                style={{
                  borderRadius: "5px 5px 0px 0px",
                  backgroundColor:
                    activeTab === "commercial"
                      ? "rgba(63, 219, 209, 1)"
                      : "white",
                  marginRight: "5px",
                }}
              >
                Commercial
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "eventspace" ? "active" : ""
                }`}
                href="#"
                data-toggle="tab"
                onClick={() => handleTabClick("eventspace")}
                style={{
                  borderRadius: "5px 5px 0px 0px",
                  backgroundColor:
                    activeTab === "eventspace"
                      ? "rgba(63, 219, 209, 1)"
                      : "white",
                  marginRight: "5px",
                }}
              >
                Event Spaces
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "flatmate" ? "active" : ""
                }`}
                href="#"
                data-toggle="tab"
                onClick={() => handleTabClick("flatmate")}
                style={{
                  borderRadius: "5px 5px 0px 0px",
                  backgroundColor:
                    activeTab === "flatmate"
                      ? "rgba(63, 219, 209, 1)"
                      : "white",
                  marginRight: "5px",
                }}
              >
                Flatmate
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "pg" ? "active" : ""}`}
                href="#"
                data-toggle="tab"
                onClick={() => handleTabClick("pg")}
                style={{
                  borderRadius: "5px 5px 0px 0px",
                  backgroundColor:
                    activeTab === "pg" ? "rgba(63, 219, 209, 1)" : "white",
                  color: activeTab === "pg" ? "black" : "inherit",
                }}
              >
                PG
              </a>
            </li>
          </ul>
        </div>

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
                  onClick={togglePropertyDropdown}
                />
                <BsChevronDown
                  onClick={togglePropertyDropdown}
                  style={{ marginTop: "8px", marginRight: "6px" }}
                />
                {isPropertyDropdownOpen && (
                  <ul className="propertyDropdown">
                    <li
                      style={{
                        marginRight: "20px",
                        backgroundColor: selectedItems.includes("Flat")
                          ? "rgba(63, 219, 209, 1)"
                          : "transparent",
                      }}
                      onClick={() => handleItemClick("Flat")}
                    >
                      <a>Flat</a>
                    </li>
                    <li
                      style={{
                        marginRight: "20px",
                        backgroundColor: selectedItems.includes(
                          "Independent House"
                        )
                          ? "rgba(63, 219, 209, 1)"
                          : "transparent",
                      }}
                      onClick={() => handleItemClick("Independent House")}
                    >
                      <a>Independent House</a>
                    </li>
                    <li
                      style={{
                        marginRight: "20px",
                        backgroundColor: selectedItems.includes("Villa")
                          ? "rgba(63, 219, 209, 1)"
                          : "transparent",
                      }}
                      onClick={() => handleItemClick("Villa")}
                    >
                      <a>Villa</a>
                    </li>
                    <li
                      style={{
                        marginRight: "20px",
                        backgroundColor: selectedItems.includes("Guest House")
                          ? "rgba(63, 219, 209, 1)"
                          : "transparent",
                      }}
                      onClick={() => handleItemClick("Guest House")}
                    >
                      <a>Guest House</a>
                    </li>
                    <li
                      style={{
                        marginRight: "20px",
                        backgroundColor: selectedItems.includes(
                          "Studio Apartment"
                        )
                          ? "rgba(63, 219, 209, 1)"
                          : "transparent",
                      }}
                      onClick={() => handleItemClick("Studio Apartment")}
                    >
                      <a>Studio Apartment</a>
                    </li>
                    <li
                      style={{
                        marginRight: "20px",
                        backgroundColor: selectedItems.includes("Farm House")
                          ? "rgba(63, 219, 209, 1)"
                          : "transparent",
                      }}
                      onClick={() => handleItemClick("Farm House")}
                    >
                      <a>Farm House</a>
                    </li>
                    <li
                      style={{
                        marginRight: "20px",
                        backgroundColor: selectedItems.includes(
                          "Service Apartment"
                        )
                          ? "rgba(63, 219, 209, 1)"
                          : "transparent",
                      }}
                      onClick={() => handleItemClick("Service Apartment")}
                    >
                      <a>Service Apartment</a>
                    </li>
                    <li
                      style={{
                        marginRight: "20px",
                        backgroundColor: selectedItems.includes("Hostel")
                          ? "rgba(63, 219, 209, 1)"
                          : "transparent",
                      }}
                      onClick={() => handleItemClick("Hostel")}
                    >
                      <a>Hostel</a>
                    </li>
                    <li
                      style={{
                        marginRight: "20px",
                        backgroundColor: selectedItems.includes(
                          "Co-Working Spaces"
                        )
                          ? "rgba(63, 219, 209, 1)"
                          : "transparent",
                      }}
                      onClick={() => handleItemClick("Co-Working Spaces")}
                    >
                      <a>Co-Working Spaces</a>
                    </li>
                    <li
                      style={{
                        marginRight: "20px",
                        backgroundColor: selectedItems.includes("Event Spaces")
                          ? "rgba(63, 219, 209, 1)"
                          : "transparent",
                      }}
                      onClick={() => handleItemClick("Event Spaces")}
                    >
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
                  onClick={togglePriceDropdown}
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
                        {/* <input
                          placeholder=""
                          value=""
                          style={{
                            width: "70px",
                            border: "solid 0.5px rgba(255, 210, 210, 1)",
                            borderRadius: "5px",
                            backgroundColor: "white",
                          }}
                        /> */}
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
                        {/* <input
                          placeholder=""
                          value=""
                          style={{
                            width: "70px",
                            border: "solid 0.5px rgba(255, 210, 210, 1)",
                            borderRadius: "5px",
                            backgroundColor: "white",
                          }}
                        /> */}
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
                onClick={collectUserData}
              >
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
