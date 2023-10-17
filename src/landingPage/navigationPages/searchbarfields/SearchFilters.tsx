import "./Searchfilter.css";
import { useState } from "react";
import { Col, InputNumber, Row, Slider } from "antd";
import { BsChevronDown } from "react-icons/bs";
export default function SearchFilters() {
  const [minValue, setMinValue] = useState<number | undefined>(undefined);
  const [maxValue, setMaxValue] = useState<number | undefined>(undefined);
  const [budgetDropdownOpen, setBudgetDropdownOpen] = useState(false);
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
              placeholder="Budget"
              style={{ fontWeight: 400 }}
              onClick={togglePriceDropdown}
            />
            <BsChevronDown
              onClick={togglePriceDropdown}
              style={{
                marginTop: "10px",
                marginRight: "6px",
                fontSize: "12px",
                color: "black",
              }}
            />
          </div>

          {budgetDropdownOpen && (
            <div className="areadropdown">
              <Row>
                <Col span={20}>
                  <Slider
                    range
                    min={1}
                    max={10000}
                    style={{ marginLeft: "30px" }}
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
        <div>
          <select className="selector">
            <option value="1" className="options">
              Furnishing Status
            </option>
            <option value="2" className="options">
              Unfurnished
            </option>
            <option value="3" className="options">
              Semi-Furnished
            </option>
            <option value="4" className="options">
              Furnished
            </option>
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
