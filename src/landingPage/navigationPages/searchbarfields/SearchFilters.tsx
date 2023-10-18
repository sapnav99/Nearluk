import "./Searchfilter.css";
import "./MultiselectDropdown.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { Col, InputNumber, Row, Slider } from "antd";
import { MultiSelect, MultiSelectChangeEvent } from "primereact/multiselect";

interface City {
  name: string;
  value: string;
}
export default function SearchFilters() {
  const [selectedFacing, setselectedFacing] = useState<City | null>(null);
  const [selectedFurnishing, setselectedFurnishing] = useState<City | null>(
    null
  );
  const furnish: City[] = [
    { value: "1", name: "Unfurnished" },
    { value: "2", name: " Semi-Furnished" },
    { value: "3", name: "Furnished" },
  ];
  const facing: City[] = [
    { value: "1", name: "East" },
    { value: "2", name: " West" },
    { value: "3", name: "North" },
    { value: "4", name: "South" },
  ];
  const [isConstructionopen, setisConstructionopen] = useState(false);
  const [minValue, setMinValue] = useState<number | undefined>(undefined);
  const [maxValue, setMaxValue] = useState<number | undefined>(undefined);
  const [budgetDropdownOpen, setBudgetDropdownOpen] = useState(false);
  const toggleConstructionDropdown = () => {
    setisConstructionopen(!isConstructionopen);
  };
  const togglePriceDropdown = () => {
    setBudgetDropdownOpen(!budgetDropdownOpen);
  };
  const onSliderChange = (values: [number, number]) => {
    setMinValue(values[0]);
    setMaxValue(values[1]);
  };

  const onMinChange = (newValue: number | null | undefined) => {
    if (newValue !== null && newValue !== undefined) {
      setMinValue(newValue);
    }
  };

  const onMaxChange = (newValue: number | null | undefined) => {
    if (newValue !== null && newValue !== undefined) {
      setMaxValue(newValue);
    }
  };

  return (
    <div>
      <div
        className={`dropdown-container ${
          budgetDropdownOpen ? "budget-open" : ""
        }`}
      >
        <div>
          <div style={{ display: "flex" }} className="selector">
            <input
              type="text"
              className="selector"
              placeholder="Area"
              style={{ fontWeight: "400", paddingLeft:"10px", color:"black" }}
              onClick={togglePriceDropdown}
            />
            <FontAwesomeIcon icon={faAngleDown} style={{fontSize:"17px", padding:"10px"}} onClick={togglePriceDropdown}/>
            
          </div>

          {budgetDropdownOpen && (
            <div className="areadropdown">
              <Row>
                <Col span={20}>
                  <Slider
                    range
                    min={1}
                    max={10000}
                    style={{ marginLeft: "30px"}}
                    onChange={onSliderChange}
                    value={[
                      minValue !== undefined ? minValue : 1,
                      maxValue !== undefined ? maxValue : 10000,
                    ]}
                  />
                </Col>
              </Row>
              <Row>
                <Col span={4}>
                  <InputNumber
                    min={1}
                    max={10000}
                    style={{ margin: "0 0 0 10px", width: "70px" }}
                    value={
                      minValue !== undefined ? Number(minValue) : undefined
                    }
                    onChange={onMinChange}
                  />
                </Col>
                <Col span={4}>
                  <InputNumber
                    min={1}
                    max={10000}
                    style={{ margin: "1px 0px 2px 130px", width: "70px" }}
                    value={
                      maxValue !== undefined ? Number(maxValue) : undefined
                    }
                    onChange={onMaxChange}
                  />
                </Col>
              </Row>
            </div>
          )}
        </div>
        
      </div>

      <div className="dropdown-container">
        <div className="selector">
          <MultiSelect
            value={selectedFurnishing}
            onChange={(e: MultiSelectChangeEvent) =>
              setselectedFurnishing(e.value)
            }
            options={furnish}
            optionLabel="name"
            placeholder="Furnishing Status"
            maxSelectedLabels={3}
          />
        </div>
      </div>

      <div className="dropdown-container">
        <div className="selector">
          <MultiSelect
            value={selectedFacing}
            onChange={(e: MultiSelectChangeEvent) => setselectedFacing(e.value)}
            options={facing}
            optionLabel="name"
            placeholder="Facing"
            maxSelectedLabels={3}
          />
        </div>
      </div>
      <div className="dropdown-container">
        <div className="selector">
          <div style={{display:"flex", justifyContent:"space-between"}}>
          <p onClick={toggleConstructionDropdown}>Construction Age</p>
          <FontAwesomeIcon icon={faAngleDown} style={{fontSize:"17px", padding:"10px"}}/>
          </div>
         
          {isConstructionopen && (
            <div className="ageslider">
              <Slider defaultValue={30} tooltip={{ open: true }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
