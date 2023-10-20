import searchlocation from "../../../assets/images/searchlocation.png";
import ToggleSwitch from "./Toggle";
import Apis from "../../../api/apiServices";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Searchresult.css";

import SearchTabs from "./searchbarfields/Searchtabs";
import SearchFilters from "./searchbarfields/SearchFilters";
import PropertyCard from "../../../components/propertycard/PropertyCard";
import { searchActions } from "../redux/action";
import SelectedItems from "./searchbarfields/Allfilters";
const SearchResult = () => {
  const searchResponse=useSelector(
    (state:any)=>state.searchReducer.searchRes
  )
  console.log(searchResponse)
  const [filters, setFilters] = useState({
    selectedFacing: "",
    selectedFurnishing: "",
    minValue: "",
    maxValue: "",
    constructionAge: "",
  });

  console.log(filters);
  const handleFiltersChange = (filters: any) => {
    setFilters(filters);
  };
  const dispatch = useDispatch();
  const { state } = useLocation();

  const searchData = state ? state.searchData : null;
  console.log(searchData);
  const [properties, setProperties] = useState([]);

  
    const fetchData = async () => {
      try {
        const response = await Apis.post("/property/search", {
          city: searchData.city,
          property_sub_type: searchData.selectedItems.join(","),
          max_price: searchData.maxprise,
          min_price: searchData.minprise,
          bhk: searchData.bhk,
          availability: searchData.construction_status,
          posted_by: searchData.posted_by,
          facing: filters.selectedFacing ,
          property_age: filters.constructionAge,
        });

        setProperties(response?.data?.data);

        dispatch(searchActions.fetchAllSearchdata([]));
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };
    useEffect(() => {
    fetchData();
  }, [searchData, filters]);

  console.log("data of 0", properties[0]);
  useEffect(() => {}, [properties]);

  return (
    <section>
      <div className="gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="page-contents" className="row merged20">
                <div className="col-lg-3">
                  <aside className="sidebar static left">
                    <div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          marginBottom: "15px",
                        }}
                      >
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <p className="line-with-reversedot"></p>
                          <p className="line-with-dot"></p>
                          <p className="line-with-reversedot"></p>
                        </div>

                        <h6 style={{ marginTop: "0px", marginLeft: "-50px" }}>
                          Applied Filters
                        </h6>
                        <a style={{ marginRight: "30px", color: "#2F9F72" }}>
                          Clear all
                        </a>
                      </div>

                      <div>
                        <SelectedItems searchData={searchData} />
                      </div>

                      <div>
                        <SearchFilters onFiltersChange={handleFiltersChange} />
                      </div>
                      {/* <div>
                        <button onClick={fetchData}>Apply Filters</button>
                      </div> */}
                    </div>
                  </aside>
                </div>
                <div className="col-lg-8">
                  <div
                    className="category-card "
                    style={{ marginLeft: "720px" }}
                  >
                    <img src={searchlocation} alt="" />
                    <div className="info">
                      <label style={{ color: "gray", paddingTop: "10px" }}>
                        Location: <span>Bachupally</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <div style={{ display: "flex" }}>
                      <h5>{properties.length} Properties near you</h5>
                      <div>
                        <span style={{ marginLeft: "90px", fontSize: "12px" }}>
                          With Photos <ToggleSwitch Name="photos" />
                        </span>
                        <span style={{ marginLeft: "12px", fontSize: "12px" }}>
                          Verified Only <ToggleSwitch Name="verified" />
                        </span>
                        <span style={{ marginLeft: "12px", fontSize: "12px" }}>
                          Hide Seen <ToggleSwitch Name="seen" />
                        </span>
                      </div>
                    </div>

                    <div style={{ marginLeft: "-46px" }}>
                      <SearchTabs />
                    </div>
                    <div
                      style={{
                        backgroundColor: "white",
                        boxShadow: "10px 10px 10px 10px #0000001a",
                        padding: "10px",
                        borderRadius: "10px",
                      }}
                    >
                      {/* <div style={{ marginTop: "80px" }}>
                        <ul className="nav ">
                          <li
                            className="nav-item"
                            style={{ marginRight: "15px" }}
                          >
                            <a
                              className={`nav-link ${
                                activeTab === "rent" ? "active" : ""
                              }`}
                              aria-current="page"
                              href="#"
                              onClick={() => handleTabClick("rent")}
                            >
                              Rent
                            </a>
                          </li>

                          <li
                            className="nav-item"
                            style={{ marginRight: "15px" }}
                          >
                            <a
                              className={`nav-link ${
                                activeTab === "sell" ? "active" : ""
                              }`}
                              href="#"
                              onClick={() => handleTabClick("sell")}
                            >
                              Sell
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className={`nav-link ${
                                activeTab === "sharing" ? "active" : ""
                              }`}
                              href="#"
                              onClick={() => handleTabClick("sharing")}
                            >
                              Sharing
                            </a>
                          </li>
                        </ul>
                      </div> */}
                      <div className="row" style={{ marginTop: "80px" }}>
                        {properties.length > 0
                          ? properties.map((item: any, i: any) => (
                              <PropertyCard property={item} key={i} />
                            ))
                          : "no data found"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchResult;
