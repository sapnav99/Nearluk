import searchlocation from "../../../assets/images/searchlocation.png";

import Apis from "../../../api/apiServices";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Searchresult.css";
import "../searchfilters/searchbarfields/Searchfilter.css";
import SearchTabs from "./searchbarfields/Searchtabs";

import PropertyCard from "../../../components/propertycard/PropertyCard";
import { searchActions } from "../redux/action";
import SearchpageSidebar from "./searchbarfields/SearchpageSidebar";
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


  // const clearAll = () => {
  //   setFilters("");
  // };
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
  // const [page, setPage] = useState(1);
  // const handlePageChange = (newPage: any) => {
  //   setPage(newPage);
  // };
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
  const [propertiesWithImages, setPropertiesWithImages] = useState<any[]>([]);

  const handleToggleChange = (toggleName: string, value: boolean) => {
    const tempPropertiesWithImages: any[] = [];

    if (toggleName === "photos" && value && properties.length > 0) {
      properties.forEach((item: any) => {
        const imageGalleryLength = item.property.image_gallery.length;

        if (imageGalleryLength > 0) {
          tempPropertiesWithImages.push(item);
        }
      });
    }

    setPropertiesWithImages(tempPropertiesWithImages);
  };

  const [showLowerDiv, setShowLowerDiv] = useState(true);
  const handleClick = () => {
    setShowLowerDiv(false);
  };
  const [tabPropertyLength, setTabPropertyLength] = useState(0);
  console.log(tabPropertyLength);

  const updateTabPropertyLength = (length: number) => {
    setTabPropertyLength(length);
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
                    <SearchpageSidebar
                      handleToggleChange={handleToggleChange}
                      handleFiltersChange={handleFiltersChange}
                    />
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
                      <h5>
                        {propertiesWithImages.length > 0 && (
                          <span>
                            {propertiesWithImages.length} Properties with Photos
                          </span>
                        )}
                        {!propertiesWithImages.length && (
                          <span>{properties.length} Properties near you</span>
                        )}
                      </h5>
                    </div>

                    <div style={{ marginLeft: "-46px" }}>
                      <SearchTabs
                        onTabClick={handleClick}
                        searchData={searchData}
                        updatePropertyLength={updateTabPropertyLength}
                      />
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
                            (propertiesWithImages.length === 0
                              ? properties.map((item: any, i: any) => (
                                  <PropertyCard property={item} key={i} />
                                ))
                              : propertiesWithImages.map(
                                  (item: any, i: any) => (
                                    <PropertyCard property={item} key={i} />
                                  )
                                ))}
                        </div>
                        {/* <div className="pagination">
                          <button
                            onClick={() => handlePageChange(page - 1)}
                            disabled={page === 1}
                          >
                            Previous
                          </button>
                          <span>Page {page}</span>
                          <button
                            onClick={() => handlePageChange(page + 1)}
                            disabled={properties.length < 1}
                          >
                            Next
                          </button>
                        </div> */}
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
