import { useState, useEffect } from "react";
import Apis from "../../../../api/apiServices";
import { useDispatch, useSelector } from "react-redux";
import { allpropdataactions } from "../../../../pages/Home/redux/action";
import PropertyCard from "../../../../components/propertycard/PropertyCard";

interface SearchTabsProps {
  onTabClick: (tab: string) => void;
  
  updatePropertyLength: (length: number) => void;
  activeTab: string;
  setActiveTab: any;
}

const SearchTabs = ({
  onTabClick,
  
  updatePropertyLength,
  setActiveTab,
  activeTab,
}: SearchTabsProps) => {
  const handleTabClick = (tab: string) => {
    onTabClick(tab);
    setActiveTab(tab);
  };
  console.log(activeTab)
  const dispatch = useDispatch();
const searchdata = useSelector((state:any)=>state.filtersReducer)
// console.log("tab", searchdata)
  const [properties, setProperties] = useState([]);

  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const pageSize = 10;
  useEffect(() => {
    dispatch(allpropdataactions.fetchAllProperty({ pageNumber, pageSize }));
  }, [pageNumber]);
  useEffect(() => {
    const fetchData = async (tab: string) => {
      try {
        setLoading(true);

        const response = await Apis.get(
          `/property/propertyByCategory?sub_category=${tab}&pageNumber=${pageNumber}&pageSize=${pageSize}`
        );
        setLoading(false);
        setPageNumber(pageNumber);
        setProperties(response?.data?.data);
        setNoData(response?.data?.data.length === 0);
        console.log("total", response?.data?.data)
        const response1 = await Apis.post("/property/search", {
          city: searchdata.city,
          property_sub_type: searchdata.selectedItems || tab,
          max_price: searchdata.maxPrise,
          min_price: searchdata.minPrise,
          bhk: searchdata.bhk,
          availability: searchdata.construction_status,
          posted_by: searchdata.posted_by,
        });
        setProperties(response1?.data?.data);
        setNoData(response1?.data?.data.length === 0);
      } catch (error) {
        setLoading(false);
        setNoData(true);
        console.error("Error fetching properties:", error);
      }
    };

    fetchData(activeTab);
  }, [activeTab, pageNumber, pageSize]);

  const propertyLength = properties.length;

  // console.log(properties)
  useEffect(() => {
    updatePropertyLength(propertyLength);
  }, [propertyLength, updatePropertyLength]);

  return (
    <div>
      <div>
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 col-sm-8 leftContainer"
              style={{
                marginLeft: "15px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <ul className="nav flex-row">
                {[
                  "commercial",
                  "event",
                  "hostel",
                  "office",
                  "residential",
                  "playground",
                  "parking Spaces",
                ].map((tabName, index) => (
                  <li
                    className="nav-item"
                    key={index}
                    style={{ marginRight: "15px" }}
                  >
                    <a
                      className={`nav-link ${
                        activeTab === tabName ? "active" : ""
                      }`}
                      aria-current="page"
                      href="#"
                      onClick={() => handleTabClick(tabName)}
                    >
                      {tabName.charAt(0).toUpperCase() + tabName.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-12 col-sm-12">
              {activeTab === "commercial" && (
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
            <div className="col-lg-12 col-sm-12">
              {activeTab === "event" && (
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
            <div className="col-lg-12 col-sm-12">
              {activeTab === "hostel" && (
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
            <div className="col-lg-12 col-sm-12">
              {activeTab === "office" && (
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
            <div className="col-lg-12 col-sm-12">
              {activeTab === "residential" && (
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
            <div className="col-lg-12 col-sm-12">
              {activeTab === "playground" && (
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
            <div className="col-lg-12 col-sm-12">
              {activeTab === "parkingspaces" && (
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
  );
};

export default SearchTabs;
