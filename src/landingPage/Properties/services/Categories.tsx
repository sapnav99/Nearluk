import "./Categories.css";
import { useState, useEffect } from "react";
import house from "../../../assets/images/House.jpg";
import villa from "../../../assets/images/villa3.jpg";
import apartment from "../../../assets/images/Apartment.jpg";
import office from "../../../assets/images/office.jpg";
import "../event/EventSpace.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/hash-navigation";
import right from "../../../assets/images/Right.png";
import left from "../../../assets/images/Left.png";
import { useDispatch } from "react-redux";
import { allpropdataactions } from "../../../pages/Home/redux/action";
import Apis from "../../../api/apiServices";
import { useNavigate } from "react-router-dom";

const Rent = () => {
  const navigate = useNavigate();
  const handleCategoryClick = (category: any) => {
    navigate("./viewall", { state: { propertyCategory: category } });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allpropdataactions.fetchAllProperty([]));
  }, []);
  const [propertyArray, setPropertyArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Apis.get(
          "/property/getAllProperty?city=hyderabad"
        );

        setPropertyArray(response?.data?.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  // console.log(propertyArray);
  const commercialProperties = propertyArray.filter(
    (item: any) => item.property_type === "Commercial"
  );
  const commercialPropertiesLength = commercialProperties.length;
  const residentialProperties = propertyArray.filter(
    (item: any) => item.property_type === "Residential"
  );
  const residentialpropertyLength = residentialProperties.length;

  return (
    <div>
      <div className="gap" style={{ backgroundColor: "#E2FFFD" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="page-contents" className="row merged20">
                <div
                  className="prev col-lg-1"
                  slot="container-start"
                  style={{ marginTop: "60px" }}
                >
                  <img src={left} alt="" />
                </div>

                <div className="col-lg-10 ">
                  {/* <h4 className="main-title">
                    Categories
                    <a title="" href="#" className="view-all">
                      view all
                    </a>
                  </h4> */}
                  <Swiper
                    modules={[Pagination, Autoplay, Navigation, EffectFade]}
                    spaceBetween={-750}
                    slidesPerView={1}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    navigation={{
                      nextEl: ".next",
                      prevEl: ".prev",
                    }}
                    pagination={{ clickable: true }}
                    rewind={true}
                  >
                    <div className="row" style={{ marginBottom: "-80px" }}>
                      <div>
                        <SwiperSlide>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="rents">
                              <i>
                                <img
                                  src={house}
                                  alt=""
                                  onClick={() =>
                                    handleCategoryClick("Residential")
                                  }
                                />
                              </i>

                              <div className="overlay-text">
                                <label
                                  onClick={() =>
                                    handleCategoryClick("Residential")
                                  }
                                >
                                  Houses for Rent
                                </label>
                                <p
                                  onClick={() =>
                                    handleCategoryClick("Residential")
                                  }
                                >
                                  {residentialpropertyLength} properties
                                </p>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="rents">
                              <i>
                                <img
                                  src={villa}
                                  alt=""
                                  onClick={() =>
                                    handleCategoryClick("Residential")
                                  }
                                />
                              </i>
                              <div className="overlay-text">
                                <label
                                  onClick={() =>
                                    handleCategoryClick("Residential")
                                  }
                                >
                                  Villas for Rent
                                </label>
                                <p
                                  onClick={() =>
                                    handleCategoryClick("Residential")
                                  }
                                >
                                  {residentialpropertyLength} properties
                                </p>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="rents">
                              <i>
                                <img
                                  src={office}
                                  alt=""
                                  onClick={() =>
                                    handleCategoryClick("Commercial")
                                  }
                                />
                              </i>
                              <div className="overlay-text">
                                <label
                                  onClick={() =>
                                    handleCategoryClick("Commercial")
                                  }
                                >
                                  Commercial Spaces for Rent
                                </label>
                                <p
                                  onClick={() =>
                                    handleCategoryClick("Commercial")
                                  }
                                >
                                  {commercialPropertiesLength} properties
                                </p>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="rents">
                              <i>
                                <img
                                  src={apartment}
                                  alt=""
                                  onClick={() =>
                                    handleCategoryClick("Residential")
                                  }
                                />
                              </i>
                              <div className="overlay-text">
                                <label
                                  onClick={() =>
                                    handleCategoryClick("Residential")
                                  }
                                >
                                  Apartments for Rent
                                </label>
                                <p
                                  onClick={() =>
                                    handleCategoryClick("Residential")
                                  }
                                >
                                  {residentialpropertyLength} properties
                                </p>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      </div>
                    </div>
                  </Swiper>
                </div>
                <div
                  className="next col-lg-1"
                  slot="container-end"
                  style={{ marginTop: "60px" }}
                >
                  <img src={right} alt="" />
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rent;
