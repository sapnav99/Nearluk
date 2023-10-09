import { useState } from "react";
import microphone from "../../assets/images/Microphone.png";
import { BsChevronDown } from "react-icons/bs";
import plus from "../../assets/images/plus.png";
import right from "../../assets/images/right (2).png";
import './SearchBar1.css'
export default function SearchBarBeforeLogin() {
  const [isDropdownVisible, setDropdownVisibility] = useState(false);

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
      <div
        className="p-2"
        // style={{ backgroundColor: "white", borderRadius: "20px" }}
      >
        <ul
          className="nav nav-pills "
          style={{
            width: "725px",
            marginLeft: "60px",
            marginBottom: "-5px",
            gap: "10px",
          }}
        >
          <li className="nav-item bg-light rounded">
            <a className="nav-link " aria-current="page">
              PG
            </a>
          </li>
          <li className="nav-item bg-light rounded">
            <a className="nav-link">Rent/Lease</a>
          </li>
          <li className="nav-item bg-light rounded">
            <a className="nav-link">Buy</a>
          </li>
          <li className="nav-item bg-light rounded">
            <a className="nav-link ">Commercial</a>
          </li>
          <li className="nav-item bg-light rounded">
            <a className="nav-link ">Event Space</a>
          </li>
          <li className="nav-item bg-light rounded">
            <a className="nav-link ">Flatmate</a>
          </li>
          <li className="nav-item bg-light rounded">
            <a className="nav-link ">Office Space</a>
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
                  style={{ marginTop: "8px", marginRight: "6px" }}
                />
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
                  style={{ marginTop: "8px", marginRight: "6px" }}
                />
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
              <span className="nl-search__btn_text">Search</span>
            </div>
          </div>
        </div>
      </div>
      <div
      
      style={{ backgroundColor: 'white', borderRadius: '25px', marginRight: '-695px', position: 'relative' }}
    >
      <img src={plus} alt="" />
      <span onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
        Advanced Search
      </span>

      {isDropdownVisible && (
        <div className="advanced" >
          <div >
          <img src={right} alt="" />
          <span >Flat/Apartment</span>
          </div>
          <div style={{marginLeft:"150px", marginTop:"-21px"}}>
          <img src={right} alt="" />
          <span >Independent House/Villa</span>
          </div>
          <div style={{marginLeft:"360px", marginTop:"-21px"}}>
          <img src={right} alt="" />
          <span >Studio Apartment</span>
          </div>
         
          <div style={{marginTop:"15px"}}>
          <img src={right} alt="" />
          <span >Guest House</span>
          </div>
          <div style={{marginLeft:"150px", marginTop:"-18px"}}>
          <img src={right} alt="" />
          <span >Service Apartment</span>
          </div>
          <div style={{display:"flex", flexDirection:"row"}}>
          <div className="nl-search__property" style={{ marginLeft: "-40px" }}>
            <div className="nl-search__location_wrap">
              <label style={{ fontSize: "16px" }}>BHK</label>
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
                  style={{ marginTop: "8px", marginRight: "6px" }}
                />
              </div>
            </div>
          </div>
          <div className="nl-search__property" style={{ marginLeft: "-40px" }}>
            <div className="nl-search__location_wrap">
              <label style={{ fontSize: "16px" }}>Construction Status</label>
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
                  style={{ marginTop: "8px", marginRight: "6px" }}
                />
              </div>
            </div>
          </div>
          <div className="nl-search__property" style={{ marginLeft: "-40px" }}>
            <div className="nl-search__location_wrap">
              <label style={{ fontSize: "16px" }}>Posted By</label>
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
                  style={{ marginTop: "8px", marginRight: "6px" }}
                />
              </div>
            </div>
          </div>
          </div>
          
        </div>
      )}
    </div>
    </section>
  );
}
