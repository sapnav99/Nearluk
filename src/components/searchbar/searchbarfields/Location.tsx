import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postpropertyAction } from "../../../pages/PostProperty/redux/action";


export default function Location({searchCity,setSearchCity,searchState,
  setSearchState,searchLocality,setSearchLocality}:any) {
  const dispatch = useDispatch();
  
  const [selectedValue, setSelectedValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false); 
  const [citySearchData, stateSearchData, localitySearchData] = useSelector(
    (state: any) => [
      state.PostpropertyReducer.getCity,
      state.PostpropertyReducer.getState,
      state.PostpropertyReducer.getLocality,
    ]
  );

  useEffect(() => {
    if (searchCity) {
      dispatch(postpropertyAction.fetchCityData({ city: searchCity }));
    }
    if (searchState) {
      dispatch(postpropertyAction.fetchStateData({ state: searchState }));
    }
    if (searchLocality) {
      dispatch(postpropertyAction.fetchLocalityData(searchLocality));
    }
  }, [searchCity, searchState, searchLocality]);

  const handleSelect = (value: any, dataType: any) => {
    setSelectedValue(value); 
    if (dataType === "city") {
      setSearchCity(value);
    } else if (dataType === "state") {
      setSearchState(value);
    } else {
      setSearchLocality(value);
    }
    setShowDropdown(false);
  };

  const combinedOptions = [
    ...(citySearchData || []).map((item: any) => ({
      value: item.city,
      dataType: "city",
    })),
    ...(stateSearchData || []).map((item: any) => ({
      value: item.state,
      dataType: "state",
    })),
    ...(localitySearchData || []).map((item: any) => ({
      value: item.locality,
      dataType: "locality",
    })),
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCity(e.target.value);
    setSearchState(e.target.value);
    setSearchLocality(e.target.value);
    setShowDropdown(true);
    setSelectedValue("")
  };

  return (
    <div className="search__location">
      <div className="search__location_wrap">
        <label style={{ fontSize: "14px", paddingLeft: "3px" }}>Location</label>
        <div
          style={{
            marginTop: "-5px",
            border: "solid 0.5px rgba(255, 210, 210, 1)",
            borderRadius: "10px",
            height: "40px",
            backgroundColor: "rgba(240, 240, 240, 1)",
          }}
        >
          <input
            className="searchlocation__input"
            type="text"
            value={selectedValue || searchCity || searchState || searchLocality}
            placeholder="Select City, State, or Locality"
            onChange={handleChange}
          />
          {showDropdown &&(searchCity || searchState || searchLocality) ? (
            <ul
              style={{
                position: "absolute",
                marginTop: "10px",
                zIndex: "1",
                backgroundColor: "white",
                width: "250px",
                maxHeight: "150px",
                overflowY: "scroll",
                listStyle: "none",
                padding: "0",
              }}
            >
              {combinedOptions.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(option.value, option.dataType)}
                  style={{ cursor: "pointer", padding: "5px" }}
                >
                  {option.value}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
      <hr />
    </div>
  );
}
