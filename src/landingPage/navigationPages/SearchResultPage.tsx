import searchlocation from "../../assets/images/searchlocation.png";
import ToggleSwitch from "./Toggle";
import Apis from "../../api/apiServices";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import menu from "../../assets/images/menu.png";
import "./Searchresult.css";
import SearchTabs from "./searchbarfields/Searchtabs";
import SearchFilters from "./searchbarfields/SearchFilters";
import PropertyCard from "../../components/propertycard/PropertyCard";
import { searchActions } from "./redux/action";
import SelectedItems from "./searchbarfields/Allfilters";

const SearchResult = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  
  const searchData = state ? state.searchData : null;
  console.log(searchData);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Apis.get("/property/search", {
          params: {
            city: searchData.city,
          },
        });

        setProperties(response?.data?.data);
        dispatch(searchActions.fetchAllSearchdata([]));
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchData();
  }, [searchData]);

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
                        }}
                      >
                        <img src={menu} alt="" />
                        <h6>Applied Properties</h6>
                        <a>Clear all</a>
                      </div>

                      <div>
                        <SelectedItems searchData={searchData} />
                      </div>

                      <div>
                        <SearchFilters />
                      </div>
                    </div>
                  </aside>
                </div>
                <div className="col-lg-9">
                  <div className="category-card">
                    <img src={searchlocation} alt="" className="icon" />
                    <div className="info">
                      <label style={{ color: "gray", paddingTop: "10px" }}>
                        Location: <span>Bachupally</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <div style={{ display: "flex" }}>
                      <h5>38 Properties near you</h5>
                      <div>
                        <span style={{ marginLeft: "20px", fontSize: "12px" }}>
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
                    <div className="row" style={{ marginTop: "85px" }}>
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
    </section>
  );
};

export default SearchResult;
