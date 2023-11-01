import {useState} from 'react'
import { Slider } from "antd";
import { BsChevronDown } from "react-icons/bs";

export default function Price({ minSliderValue, maxSliderValue, setMinSliderValue, setMaxSliderValue,sliderValue, setSliderValue }:any) {
    const [isPriceDropdownOpen, setisPriceDropdownOpen] = useState(false);

   
    
  
    const handleChange = (value: number | any) => {
      if (Array.isArray(value)) {
        setSliderValue(value);
        setMinSliderValue(value[0]);
        setMaxSliderValue(value[1]);
      }
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
    <div>  <div className="search_property" style={{ marginLeft: "19px" }}>
    <div className="search__location_wrap">
      <label style={{ fontSize: "14px", paddingLeft: "3px" }}>
        Price
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
          onClick={togglePriceDropdown}
        >
          ₹ Select Price Range
        </p>

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
  </div></div>
  )
}