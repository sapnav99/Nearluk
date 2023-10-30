import { useState, useEffect } from "react";
import Apis from "../../../../api/apiServices";
import { useDispatch } from "react-redux";
import { allpropdataactions } from "../../../../pages/Home/redux/action";
import PropertyCard from "../../../../components/propertycard/PropertyCard";

interface SearchTabsProps {
  onTabClick: (tab: string) => void;
}

const SearchTabs: React.FC<SearchTabsProps> = ({ onTabClick }: any) => {
  const [activeTab, setActiveTab] = useState("");

  const handleTabClick = (tab: string) => {
    onTabClick(tab);
    setActiveTab(tab);
  };
  const dispatch = useDispatch();
  
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);
  useEffect(() => {
    const fetchData = async (tab: string) => {
      try {
        setLoading(true);
        const response = await Apis.get(`/property/propertyByCategory?sub_category=${tab}`);
        setLoading(false);
        setProperties(response?.data?.data);
        setNoData(response?.data?.data.length === 0);
      } catch (error) {
        setLoading(false);
        setNoData(true);
        console.error("Error fetching properties:", error);
      }
    };

    fetchData(activeTab); 
    dispatch(allpropdataactions.fetchAllProperty([]));
  }, [activeTab, dispatch]);

  console.log(properties);
  
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
              
              {['commercial', 'event', 'hostel', 'office', 'residential', 'playground', 'parking Spaces'].map((tabName, index) => (
                <li className="nav-item" key={index} style={{ marginRight: '15px' }}>
                  <a
                    className={`nav-link ${activeTab === tabName ? 'active' : ''}`}
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
