import { useState } from "react";
import "./Searchfilter.css"
import { BsChevronDown } from "react-icons/bs";

export default function SearchFilters() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleCheckboxChange = (value: string) => {
    const updatedSelection = [...selectedItems];
    if (updatedSelection.includes(value)) {
      updatedSelection.splice(updatedSelection.indexOf(value), 1);
    } else {
      updatedSelection.push(value);
    }
    setSelectedItems(updatedSelection);
  };

  return (
    <div>
      <div className="dropdown_container">
        <div className="custom-dropdown">
          
          <div className="dropdowns">
            <span className="dropdown-placeholder">
              Property Type
              <BsChevronDown
                style={{
                  fontSize: "10px",
                  fontWeight:'800',
                  marginLeft: "145px",
                  marginTop: "-45px",
                }}
              />
            </span>
            <div className="options-container">
              <label>
                <input
                  type="checkbox"
                  value="Flat/Apartment"
                  onChange={() => handleCheckboxChange("Flat/Apartment")}
                />
                Flat/Apartment
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Independent House"
                  onChange={() => handleCheckboxChange("Independent House")}
                />
                Independent House
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Flat/Apartment"
                  onChange={() => handleCheckboxChange("Flat/Apartment")}
                />
                Villa
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Flat/Apartment"
                  onChange={() => handleCheckboxChange("Flat/Apartment")}
                />
                Guest House
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Flat/Apartment"
                  onChange={() => handleCheckboxChange("Flat/Apartment")}
                />
                Studio Apartment
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Flat/Apartment"
                  onChange={() => handleCheckboxChange("Flat/Apartment")}
                />
                Farm House
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Flat/Apartment"
                  onChange={() => handleCheckboxChange("Flat/Apartment")}
                />
                Service Apartment
              </label>
            </div>
          </div>
        </div>
      </div>
      

      <div className="dropdown-container">
        <div >
        <select className="selector">
          <option value="1">No. of Bedrooms</option>
          <option value="2">1 BHK</option>
          <option value="3">2 BHK</option>
          <option value="4">3 BHK</option>
        </select>
        </div>
       
      </div>
      <div className="dropdown-container">
        <select className="selector">
          <option value="1">Construction Status</option>
          <option value="2">Under Construction</option>
          <option value="3">Ready to move</option>
        </select>
      </div>
      <div className="dropdown-container">
        <select className="selector">
          <option value="1">Posted By</option>
          <option value="2">Owner</option>
          <option value="3">Agent</option>
        </select>
      </div>
      <div className="dropdown-container">
        <div>
          <select className="selector">
            <option value="1">Furnishing Status</option>
            <option value="2">Unfurnished</option>
            <option value="3">Semi-Furnished</option>
            <option value="4">Furnished</option>
          </select>
        </div>
      </div>
      <div className="dropdown-container">
        <div>
          <select className="selector">
            <option value="1">Localities</option>
            <option value="2">Unfurnished</option>
            <option value="3">Semi-Furnished</option>
            <option value="4">Furnished</option>
          </select>
        </div>
      </div>
      <div className="dropdown-container">
        <div>
          <select className="selector">
            <option value="1">Aminities</option>
            <option value="2">Water Storage</option>
            <option value="3">Power Backup</option>
            <option value="4">Security/Fire Alarm</option>
          </select>
        </div>
      </div>
      <div className="dropdown-container">
        <div>
          <select className="selector">
            <option value="1">Facing</option>
            <option value="2">East</option>
            <option value="3">West</option>
            <option value="4">North</option>
            <option value="4">South</option>
            <option value="4">North West</option>
            <option value="4">North East</option>
            <option value="4">South West</option>
            <option value="4">South East</option>
          </select>
        </div>
      </div>
      <div className="dropdown-container">
        <div>
          <select className="selector">
            <option value="1">Sale Type</option>
            <option value="2">Unfurnished</option>
            <option value="3">Semi-Furnished</option>
            <option value="4">Furnished</option>
          </select>
        </div>
      </div>
      <div className="dropdown-container">
        <div>
          <select className="selector">
            <option value="1">Construction Age</option>
            <option value="2">10 years</option>
            <option value="3">20 Years</option>
            <option value="4">30 Years</option>
          </select>
        </div>
      </div>
    </div>
  );
}
