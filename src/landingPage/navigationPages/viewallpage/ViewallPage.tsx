import { useState, useEffect } from "react";
import Apis from "../../../api/apiServices";
import { useDispatch } from "react-redux";
import { allpropdataactions } from "../../../pages/Home/redux/action";
import { useLocation } from "react-router-dom";
import PropertyCard from "../../../components/propertycard/PropertyCard";

const Viewall = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const {
    city,
    recentProperty,
    featuredTrue,
    propertyCategory,
    newlyLaunched,
    propertyTrending,
    ownerProperty,
  } = location.state || {};

  useEffect(() => {
    dispatch(allpropdataactions.fetchAllProperty([]));
  }, []);

  const [propertyArray, setPropertyArray] = useState([]);

  const [properties, setProperties] = useState([]);

  const [homeProperties, setHomeProperties] = useState([]);
  const [propertyCategories, setPropertyCategories] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchDataSearch = async () => {
      try {
        const response = await Apis.post("/property/search", {
          params: {
            city: city,
          },
        });

        setPropertyArray(response?.data?.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataSearch();
  }, []);

  const fetchDataGetall = async () => {
    try {
      const response = await Apis.get(
        `/property/getAllProperty?city=hyderabad&pageNumber=${page}&pageSize=10`
      );

      setProperties(response?.data?.data);
      console.log(properties);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDataGetall();
  }, [page]);
  const handlePageChange = (newPage: any) => {
    setPage(newPage);
  };

  useEffect(() => {
    const fetchDataHome = async () => {
      try {
        const response = await Apis.get("/property/home");

        setHomeProperties(response?.data?.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchDataHome();
  }, []);
  console.log(homeProperties);
  useEffect(() => {
    const fetchDataCategory = async () => {
      try {
        const response = await Apis.get(
          `/property/propertyByCategory?sub_category=${propertyCategory}&pageNumber=${page}&pageSize=10`
        );

        setPropertyCategories(response?.data?.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataCategory();
  }, [page]);
  console.log(propertyCategories);

  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="col-lg-8">
        <div className="row" style={{ marginTop: "80px" }}>
          {city && propertyArray.length > 0
            ? propertyArray.map((item: any, i: any) => (
                <PropertyCard property={item} key={i} />
              ))
            : recentProperty && properties.length > 0
            ? properties.map((item: any, i: any) => (
                <PropertyCard property={item} key={i} />
              ))
            : featuredTrue && homeProperties.length > 0
            ? homeProperties.map((item: any, i: any) => (
                <PropertyCard property={item} key={i} />
              ))
            : newlyLaunched && homeProperties.length > 0
            ? homeProperties.map(
                (item: any, i: any) =>
                  item.newProperty.length > 0 &&
                  item.newProperty.map((newItem: any, index: any) => (
                    <PropertyCard property={newItem} key={i + index} />
                  ))
              )
            : propertyCategory && propertyCategories.length > 0
            ? propertyCategories.map((item: any, i: any) => (
                <PropertyCard property={item} key={i} />
              ))
            : propertyTrending && properties.length > 0
            ? properties.map((item: any, i: any) => (
                <PropertyCard property={item} key={i} />
              ))
            : ownerProperty && properties.length > 0
            ? properties.map((item: any, i: any) => (
                <PropertyCard property={item} key={i} />
              ))
            : "No data found"}
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
    </div>
  );
};

export default Viewall;
