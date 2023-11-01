import {useState} from 'react'
import { BsChevronDown } from "react-icons/bs";


export default function PropertyType({selectedItems,setSelectedItems}:any) {
    const [isPropertyDropdownOpen, setisPropertyDropdownOpen] = useState(false);
 
   
    const handleItemClick = (item: any) => {
        setSelectedItems(item);
      };
    const togglePropertyDropdown = () => {
        setisPropertyDropdownOpen(!isPropertyDropdownOpen);
      };
  return (
    <div><div className="search_property" style={{ marginLeft: "-40px" }}>
    <div className="search__location_wrap">
      <label style={{ fontSize: "14px", paddingLeft: "3px" }}>
        Property Type
      </label>
      <div
        style={{
          width: "178px",
          marginTop: "-2px",
          display: "flex",
          border: "solid 0.5px rgba(255, 210, 210, 1)",
          borderRadius: "8px",
          height: "40px",
          backgroundColor: "rgba(240, 240, 240, 1)",
        }}
      >
        <p
          className="searchlocation__propertyInput"
          onClick={togglePropertyDropdown}
        >
          Flat/Plot/Shop/Hostel
        </p>

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
                  : "rgb(204, 204, 204, 1)",
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
                  : "rgb(204, 204, 204, 1)",
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
                  : "rgb(204, 204, 204, 1)",
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
                  : "rgb(204, 204, 204, 1)",
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
                  : "rgb(204, 204, 204, 1)",
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
                  : "rgb(204, 204, 204, 1)",
              }}
              onClick={() => handleItemClick("Farm House")}
            >
              <a>Farm House</a>
            </li>
            <li
              style={{
                marginRight: "25px",
                backgroundColor: selectedItems.includes(
                  "Service Apartment"
                )
                  ? "rgba(63, 219, 209, 1)"
                  : "rgb(204, 204, 204, 1)",
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
                  : "rgb(204, 204, 204, 1)",
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
                  : "rgb(204, 204, 204, 1)",
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
                  : "rgb(204, 204, 204, 1)",
              }}
              onClick={() => handleItemClick("Event Spaces")}
            >
              <a>Event Spaces</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  </div></div>
  )
}