import { useState, useEffect } from "react";
import Apis from "../../../../api/apiServices";
import { useDispatch } from "react-redux";
import { allpropdataactions } from "../../../../pages/Home/redux/action";
import PropertyCard from "../../../../components/propertycard/PropertyCard";

interface SearchTabsProps {
  onTabClick: (tab: string) => void;
  searchData:any;
  updatePropertyLength: (length: number) => void;
}

const SearchTabs: React.FC<SearchTabsProps> = ({ onTabClick, searchData, updatePropertyLength }: any) => {
  const [activeTab, setActiveTab] = useState("");

  const handleTabClick = (tab: string) => {
    onTabClick(tab);
    setActiveTab(tab);
  };
  const dispatch = useDispatch();
 
  const [properties, setProperties] = useState([]);
 
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);
  const [page, setPage] = useState(1);
  const handlePageChange = (newPage: any) => {
    setPage(newPage);
  };
  useEffect(() => {
    const fetchData = async (tab: string) => {
      try {
        setLoading(true);
        
        const response = await Apis.get(`/property/propertyByCategory?sub_category=${tab}&pageNumber=${page}&pageSize=10`
        );
        setLoading(false);
        setProperties(response?.data?.data);
        setNoData(response?.data?.data.length === 0);
        const response1 = await Apis.post(
          "/property/search",
          {
            city: searchData.city,
            property_sub_type: searchData.selectedItems,
            max_price: searchData.maxPrise,
            min_price: searchData.minPrise,
            bhk: searchData.bhk,
            availability: searchData.construction_status,
            posted_by: searchData.posted_by,
           
          }
         
        );
        setProperties(response1?.data?.data)
        setNoData(response1?.data?.data.length === 0);
       
      } catch (error) {
        setLoading(false);
        setNoData(true);
        console.error("Error fetching properties:", error);
      }
    };

    fetchData(activeTab); 
    dispatch(allpropdataactions.fetchAllProperty([]));
  }, [activeTab, dispatch, page]);

  const propertyLength = properties.length;

  // When the properties length changes, update the length in the parent component (SearchResult)
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
                  <div className="pagination">
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
