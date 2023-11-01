import { useState, useEffect } from "react";
import useDebounce from "../../../hooks/useDebounce";
import { useDispatch, useSelector } from "react-redux";
import { postpropertyAction } from "../../../pages/PostProperty/redux/action";


export default function Location ()  {

    const dispatch = useDispatch();
    const [searchCity, setSearchCity] = useState("");
    const [searchState, setSearchState] = useState("");
    const [currentPosition, setCurrentPosition] =
    useState<google.maps.LatLngLiteral | null>(null);
    // const [searchLocality, setSeachLocality] = useState("");
    const debouncedSearchCity = useDebounce(searchCity, 500);
    const debouncedSearchState = useDebounce(searchState, 500);
    // const debouncedLocality = useDebounce(searchLocality, 500);
  
    // console.log(debouncedSearchCity)
    // const [options, setOptions] = useState<{ value: string }[]>([]);
  
    const citySearchData = useSelector(
      (state: any) => state?.PostpropertyReducer?.getCity
    );
    console.log(citySearchData);
    const stateSearchData = useSelector(
      (state: any) => state?.PostpropertyReducer?.getState
    );
    console.log(stateSearchData);
    // const localitySearchData = useSelector(
    //   (state: any) => state?.PostpropertyReducer?.getLocality
    // );
  
    // console.log("state data",stateSearchData)
  
    useEffect(() => {
      navigator.geolocation.getCurrentPosition((position: any) => {
        const { latitude, longitude } = position.coords;
        // console.log(latitude, longitude);
        setCurrentPosition({ lat: latitude, lng: longitude });
      });
    }, []);
    useEffect(() => {
      if (debouncedSearchCity) {
        dispatch(
          postpropertyAction.fetchCityData({
            city: searchCity,
          })
        );
      }
      
    }, [debouncedSearchCity]);
  
    useEffect(() => {
      if (debouncedSearchState) {
        dispatch(
          postpropertyAction.fetchStateData({
            state: searchState,
          })
        );
      }
    }, [debouncedSearchState]);
  
    // useEffect(() => {
    //   if (debouncedLocality) {
    //     dispatch(postpropertyAction.fetchLocalityData(searchLocality));
    //   }
    // }, [debouncedLocality]);
  return (
    <div> <div className="search__location">
    <div className="search__location_wrap">
      <label style={{ fontSize: "14px", paddingLeft: "3px" }}>
        Location
      </label>
      <div
        style={{
          marginTop: "-5px",
          border: "solid 0.5px rgba(255, 210, 210, 1)",
          borderRadius: "10px",
          height: "40px",
          backgroundColor: "rgba(240, 240, 240, 1)",
        }}
      >
        {/* <span style={{ marginTop: "-3px" }}>
          <IoIosSearch style={{ fontSize: "1em" }} />
        </span> */}

        <input
          type="text"
          className="searchlocation__input"
          placeholder="City/Location/Landmark/Pincode"
        />
      </div>
    </div>
  </div></div>
  )
}
