import bangalore from "../../../assets/images/bangalore.png";
import hyderabad from "../../../assets/images/hyderabad.png";
import mumbai from "../../../assets/images/Mumbai.png";
import chennai from "../../../assets/images/chennai.png";
import delhi from "../../../assets/images/delhi.png";
import pune from "../../../assets/images/pune.png";
import right from "../../../assets/images/Right.png";
import left from "../../../assets/images/Left.png";
import "./SearchProperty.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/hash-navigation";
import { useNavigate } from "react-router-dom";
const SearchProperty = () => {
  const navigate = useNavigate();
  const handleCityClick = (cityName: any) => {
    navigate("./viewall", { state: { city: cityName } });
  };
  return (
    <div>
      <section style={{ backgroundColor: "#E2FFFD" }}>
        <div className="gap">
          <div className="container ">
            <div className="row">
              <div className="col-lg-12">
                <div id="page-contents" className="row merged20">
                  <div
                    className="prevsearch col-lg-1"
                    style={{ marginTop: "60px" }}
                  >
                    <img src={left} alt="" />
                  </div>
                  <div className="col-lg-10 ">
                    <h3
                      style={{
                        textAlign: "center",
                        marginBottom: "25px",
                        marginTop: "-30px",
                      }}
                    >
                      Search properties by popular cities
                    </h3>
                    <Swiper
                      modules={[Pagination, Autoplay, Navigation, EffectFade]}
                      spaceBetween={20}
                      slidesPerView={6}
                      autoplay={{ delay: 2000, disableOnInteraction: false }}
                      navigation={{
                        nextEl: ".nextsearch",
                        prevEl: ".prevsearch",
                      }}
                      pagination={{ clickable: true }}
                      rewind={true}
                    >
                      <div
                        className="row col-xs-12 "
                        style={{ marginBottom: "-30px" }}
                      >
                        <div className="col-lg-2 col-md-4 col-sm-4">
                          <SwiperSlide>
                            <div className="group-box">
                              <figure>
                                <img
                                  className="cityImages"
                                  alt=""
                                  src={bangalore}
                                />
                              </figure>

                              <button
                                className="buttons"
                                onClick={() => handleCityClick("bangalore")}
                              >
                                Bangalore
                              </button>
                            </div>
                          </SwiperSlide>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4">
                          <SwiperSlide>
                            <div className="group-box">
                              <figure>
                                <img
                                  src={hyderabad}
                                  alt=""
                                  className="cityImages"
                                />
                              </figure>

                              <button
                                className="buttons"
                                onClick={() => handleCityClick("hyderabad")}
                              >
                                Hyderabad
                              </button>
                            </div>
                          </SwiperSlide>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4">
                          <SwiperSlide>
                            <div className="group-box">
                              <figure>
                                <img
                                  src={delhi}
                                  alt=""
                                  className="cityImages"
                                />
                              </figure>

                              <button
                                className="buttons"
                                onClick={() => handleCityClick("delhi")}
                              >
                                Delhi
                              </button>
                            </div>
                          </SwiperSlide>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4">
                          <SwiperSlide>
                            <div className="group-box">
                              <figure>
                                <img
                                  src={mumbai}
                                  alt=""
                                  className="cityImages"
                                />
                              </figure>

                              <button
                                className="buttons"
                                onClick={() => handleCityClick("mumbai")}
                              >
                                Mumbai
                              </button>
                            </div>
                          </SwiperSlide>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4">
                          <SwiperSlide>
                            <div className="group-box">
                              <figure>
                                <img src={pune} alt="" className="cityImages" />
                              </figure>

                              <button
                                className="buttons"
                                onClick={() => handleCityClick("pune")}
                              >
                                Pune
                              </button>
                            </div>
                          </SwiperSlide>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4">
                          <SwiperSlide>
                            <div className="group-box">
                              <figure>
                                <img
                                  src={chennai}
                                  alt=""
                                  className="cityImages"
                                />
                              </figure>

                              <button
                                className="buttons"
                                onClick={() => handleCityClick("chennai")}
                              >
                                Chennai
                              </button>
                            </div>
                          </SwiperSlide>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4">
                          <SwiperSlide>
                            <div className="group-box">
                              <figure>
                                <img
                                  className="cityImages"
                                  alt=""
                                  src={bangalore}
                                />
                              </figure>

                              <button
                                className="buttons"
                                onClick={() => handleCityClick("bangalore")}
                              >
                                Bangalore
                              </button>
                            </div>
                          </SwiperSlide>
                        </div>
                      </div>
                    </Swiper>
                  </div>
                  <div
                    className="nextsearch col-lg-1"
                    style={{ marginTop: "60px" }}
                  >
                    <img src={right} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchProperty;
