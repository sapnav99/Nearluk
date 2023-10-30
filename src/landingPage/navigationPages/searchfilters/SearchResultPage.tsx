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

interface AllData {
  city?: string;
  selectedItems?: string;
  bhk?: string;
  construction_status?: string;
  posted_by?: string;
  selectedFacing?: string;
  constructionAge?: string;
  maxPrise?: any;
  minPrise?: any;
}
interface Property {
  // Define the structure of your property object
  // For instance:
  id: number;
  name: string;
  // Other properties...
  image_gallery: [];
}

const SearchResult = () => {
  const searchResponse = useSelector(
    (state: any) => state?.searchReducer?.searchRes
  );
  console.log(searchResponse);

  const queryParams = new URLSearchParams(location.search);
  const [filters, setFilters] = useState(() => {
    const storedFilters = localStorage.getItem("filters");
    return storedFilters
      ? JSON.parse(storedFilters)
      : {
          selectedFacing: "",
          selectedFurnishing: "",
          minValue: "",
          maxValue: "",
          constructionAge: "",
        };
  });

  console.log(filters);

  const handleFiltersChange = (newFilters: any) => {
    setFilters(newFilters);

    localStorage.setItem("filters", JSON.stringify(newFilters));

    queryParams.set("selectedFacing", newFilters.selectedFacing);
    queryParams.set("constructionAge", newFilters.constructionAge);

    window.history.replaceState(null, "", `?${queryParams.toString()}`);
  };
  useEffect(() => {
    return () => {
      localStorage.removeItem("filters");
    };
  }, []);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchActions.fetchAllSearchdata([]));
  }, []);
  const { state } = useLocation();

  const searchData =
    state && state.searchData !== undefined ? state.searchData : null;

  console.log("filter", searchData);

  let allData: AllData = {};

  if (searchData && searchData.city !== undefined && searchData.city !== "") {
    allData.city = searchData.city;
  }
  if (
    searchData &&
    searchData.selectedItems !== undefined &&
    searchData.selectedItems != ""
  ) {
    allData.selectedItems = searchData.selectedItems;
  }
  if (searchData && searchData.bhk !== undefined && searchData.bhk != "") {
    allData.bhk = searchData.bhk;
  }
  if (
    searchData &&
    searchData.construction_status !== undefined &&
    searchData.construction_status != ""
  ) {
    allData.construction_status = searchData.construction_status;
  }
  if (
    searchData &&
    searchData.posted_by !== undefined &&
    searchData.posted_by != ""
  ) {
    allData.posted_by = searchData.posted_by;
  }
  if (
    searchData &&
    searchData.maxPrise !== undefined &&
    searchData.maxPrise != ""
  ) {
    allData.maxPrise = searchData.maxPrise;
  }
  if (
    searchData &&
    searchData.minPrise !== undefined &&
    searchData.minPrise != ""
  ) {
    allData.minPrise = searchData.minPrise;
  }
  if (filters.selectedFacing != "") {
    allData.selectedFacing = filters.selectedFacing;
  }
  if (filters.constructionAge != "") {
    allData.constructionAge = filters.constructionAge;
  }
  console.log(allData);

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);
  const [showPhotosOnly, setShowPhotosOnly] = useState(true);
  const[photos, setPhotos]=useState<Property[]>([]);
  console.log(photos);
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await Apis.post("/property/search", {
        city: allData.city,
        property_sub_type: allData.selectedItems,
        max_price: allData.maxPrise,
        min_price: allData.minPrise,
        bhk: allData.bhk,
        availability: allData.construction_status,
        posted_by: allData.posted_by,
        facing: allData.selectedFacing?.toString(),
        property_age: allData.constructionAge,
      });
      setLoading(false);

      let propertiesData: Property[] = response?.data?.data || [];
     console.log("property", propertiesData[0].amenities[0].image_gallery?.length > 0);

      if (showPhotosOnly) {
        propertiesData = propertiesData.filter((property: Property) => {
          // Check if image_gallery exists and has a length greater than 0
          return Array.isArray(property.image_gallery) && property?.image_gallery.length > 0;
        });
      
        console.log("Filtered data with photos:", propertiesData);
      }
      
      setProperties(response?.data?.data);
      setNoData(response?.data?.data.length === 0);
    } catch (error) {
      setLoading(false);
      setNoData(true);
      console.error("Error fetching properties:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [searchData, filters]);

  console.log("data of 0", properties[0]);
  useEffect(() => {}, [properties]);
  const handleToggleChange = (toggleName: string, value: boolean) => {
    if (toggleName === "photos") {
      setShowPhotosOnly(value);
    }
    // Add more handlers for other toggle switches if needed
  };

  const [showLowerDiv, setShowLowerDiv] = useState(true);

  const handleTabClick = () => {
    setShowLowerDiv(false);
  };
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
                      <div>
                        <SearchFilters onFiltersChange={handleFiltersChange} />
                      </div>
                    </div>
                  </aside>
                </div>
                <div className="col-lg-8">
                  <div
                    className="category-card "
                    style={{ marginLeft: "720px", marginTop: "-57px" }}
                  >
                    <img src={searchlocation} alt="" />
                    <div className="info">
                      <label style={{ color: "gray", paddingTop: "10px" }}>
                        Location: <span></span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <div style={{ display: "flex" }}>
                      <h5>{properties.length} Properties near you</h5>
                      <div>
                        <span style={{ marginLeft: "90px", fontSize: "12px" }}>
                          With Photos{" "}
                          <ToggleSwitch
                            Name="photos"
                            onChange={(value) =>
                              handleToggleChange("photos", value)
                            }
                          />
                        </span>
                        {/* <span style={{ marginLeft: "12px", fontSize: "12px" }}>
                          Verified Only <ToggleSwitch Name="verified" />
                        </span>
                        <span style={{ marginLeft: "12px", fontSize: "12px" }}>
                          Hide Seen <ToggleSwitch Name="seen" />
                        </span> */}
                      </div>
                    </div>

                    <div style={{ marginLeft: "-46px" }}>
                      <SearchTabs onTabClick={handleTabClick} />
                    </div>
                    {showLowerDiv && (
                      <div
                        style={{
                          backgroundColor: "white",
                          boxShadow: "10px 10px 10px 10px #0000001a",
                          padding: "10px",
                          borderRadius: "10px",
                        }}
                      >
                        <div style={{ textAlign: "center", marginTop: "20px" }}>
                          {loading && (
                            <p style={{ color: "black", fontWeight: 400 }}>
                              Loading...
                            </p>
                          )}
                          {!loading && noData && (
                            <p style={{ color: "black", fontWeight: 400 }}>
                              No properties found
                            </p>
                          )}
                        </div>
                        <div className="row" style={{ marginTop: "10px" }}>
                          {properties.length > 0 &&
                            properties.map((item: any, i: any) => (
                              <PropertyCard property={item} key={i} />
                            ))}
                        </div>
                      </div>
                    )}
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
