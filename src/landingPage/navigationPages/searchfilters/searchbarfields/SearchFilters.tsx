import "./Searchfilter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Col, InputNumber, Row, Slider } from "antd";
import { MultiSelect, MultiSelectChangeEvent } from "primereact/multiselect";
import { filterActions } from "../redux/action";
import { useDispatch } from "react-redux";

export default function SearchFilters() {
  const [selectedFacing, setselectedFacing] = useState(null);
  const [selectedFurnishing, setselectedFurnishing] = useState(null);
  const furnish = [
    { value: "unfurnished", name: "Unfurnished" },
    { value: "semifurnished", name: " Semi-Furnished" },
    { value: "furnished", name: "Furnished" },
  ];
  const facing = [
    { value: "east", name: "East" },
    { value: "west", name: " West" },
    { value: "north", name: "North" },
    { value: "south", name: "South" },
    { value: "southeast", name: "South-East" },
    { value: "southwest", name: "South-West" },
    { value: "northeast", name: "North-East" },
    { value: "northwest", name: "North-West" },
  ];
  const [isConstructionopen, setisConstructionopen] = useState(false);
  const [minValue, setMinValue] = useState<number | undefined>(undefined);
  const [maxValue, setMaxValue] = useState<number | undefined>(undefined);
  const [AreaDropdownOpen, setAreaDropdownOpen] = useState(false);
  const [constructionAge, setConstructionAge] = useState<number | undefined>(
    10
  );

  const [filterData, setFilterData] = useState({
    selectedFacing: null,
    selectedFurnishing: null,
    minValue: undefined,
    maxValue: undefined,
    constructionAge: 10,
  });
  const dispatch = useDispatch();
  const updateFiltersAndCallback = (newData: any) => {
    const updatedFilters = { ...filterData, ...newData };
    setFilterData(updatedFilters);
    filterActions.setFilters(updatedFilters);
    dispatch(filterActions.setSearchData(updatedFilters));
  };

  const toggleConstructionDropdown = () => {
    setisConstructionopen(!isConstructionopen);
  };
  const toggleAreaDropdown = () => {
    setAreaDropdownOpen(!AreaDropdownOpen);
  };
  const onSliderChange = (values: any) => {
    setMinValue(values[0]);
    setMaxValue(values[1]);
    updateFiltersAndCallback({ minValue: values[0], maxValue: values[1] });
  };
  const onConstrSliderChange = (value: number) => {
    setConstructionAge(value);
    updateFiltersAndCallback({ constructionAge: value.toString() });
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

  const handleFacingChange = (e: MultiSelectChangeEvent) => {
    setselectedFacing(e.value);
    updateFiltersAndCallback({ selectedFacing: e.value });
  };

  const handleFurnishingChange = (e: MultiSelectChangeEvent) => {
    setselectedFurnishing(e.value);
    updateFiltersAndCallback({ selectedFurnishing: e.value });
  };
  return (
    <div>
      <div
        className={`dropdown-container ${
          AreaDropdownOpen ? "budget-open" : ""
        }`}
      >
        <div>
          <div style={{ display: "flex" }} className="selector">
            <input
              type="text"
              className="selector"
              placeholder="Area"
              style={{ fontWeight: "400", paddingLeft: "10px" }}
              onClick={toggleAreaDropdown}
            />
            <FontAwesomeIcon
              icon={faAngleDown}
              style={{ fontSize: "17px", padding: "10px" }}
              onClick={toggleAreaDropdown}
            />
          </div>

          {AreaDropdownOpen && (
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
        <div className="selector">
          <MultiSelect
            value={selectedFurnishing}
            onChange={handleFurnishingChange}
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
            onChange={handleFacingChange}
            options={facing}
            optionLabel="name"
            placeholder="Facing"
            maxSelectedLabels={3}
          />
        </div>
      </div>
      <div className="dropdown-container">
        <div className="selector">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p onClick={toggleConstructionDropdown}>Construction Age</p>
            <FontAwesomeIcon
              icon={faAngleDown}
              style={{ fontSize: "17px", padding: "10px" }}
            />
          </div>

          {isConstructionopen && (
            <div className="ageslider">
              <Slider
                defaultValue={3}
                tooltip={{ open: true }}
                onChange={onConstrSliderChange}
                value={constructionAge}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
