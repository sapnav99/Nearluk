import { useState, useEffect } from "react";
import Apis from "../../../api/apiServices";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/hash-navigation";
import right from "../../../assets/images/Right.png";
import left from "../../../assets/images/Left.png";

import topbuilders1 from "../../../assets/images/Topbuilders1.png";
import topbuilders2 from "../../../assets/images/Topbuilders2.png";
import topbuilders3 from "../../../assets/images/Topbuilders3.png";

import "../event/EventSpace.css";

const Plots = () => {
  const [plots, setPlots] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Apis.get(
          "/property/propertyByCategory?sub_category=plot"
        );

        setPlots(response?.data?.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(plots);

  return (
    <div>
      <div className="gap" style={{ backgroundColor: "#E2FFFD" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="page-contents" className="row merged20">
                <div
                  className="prevplot col-lg-1"
                  slot="container-start"
                  style={{ marginTop: "160px" }}
                >
                  <img src={left} alt="" />
                </div>
                {/* <div className="d-flex justify-content-center align-items-center "> */}
                <div className="col-lg-10 ">
                  <h4 className="main-title">
                    Plots for Sale in Hyderabad{" "}
                    <a
                      title=""
                      href="#"
                      className="view-all"
                      style={{ fontSize: "14px" }}
                    >
                      View all
                    </a>
                  </h4>
                  <Swiper
                    modules={[Pagination, Autoplay, Navigation, EffectFade]}
                    spaceBetween={-650}
                    slidesPerView={1}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    navigation={{
                      nextEl: ".nextplot",
                      prevEl: ".prevplot",
                    }}
                    pagination={{ clickable: true }}
                    rewind={true}
                  >
                    <div className="row" style={{ marginBottom: "-80px" }}>
                      <SwiperSlide>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                          <div className="course">
                            <figure>
                              <img src={topbuilders1} alt="" />
                              <i
                                className="icofont-book-mark"
                                title="bookmark"
                              ></i>
                              <em>Best seller</em>
                              <span className="rate-result">
                                <i className="icofont-star"></i> 4.5
                              </span>
                            </figure>
                            <div className="course-meta">
                              <div style={{ display: "flex" }}></div>
                              <h5 className="course-title">
                                <a href="course-detail.html" title="">
                                  TMR Group Venture
                                </a>
                              </h5>
                              <p>250Sqd, Gachibowli</p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                          <div className="course">
                            <figure>
                              <img src={topbuilders2} alt="" />
                              <i
                                className="icofont-book-mark"
                                title="bookmark"
                              ></i>
                              <em>Best seller</em>
                              <span className="rate-result">
                                <i className="icofont-star"></i> 4.5
                              </span>
                            </figure>
                            <div className="course-meta">
                              <div style={{ display: "flex" }}></div>
                              <h5 className="course-title">
                                <a href="course-detail.html" title="">
                                  TMR Group Venture
                                </a>
                              </h5>
                              <p>250Sqd, Gachibowli</p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                          <div className="course">
                            <figure>
                              <img src={topbuilders3} alt="" />
                              <i
                                className="icofont-book-mark"
                                title="bookmark"
                              ></i>
                              <em>Best seller</em>
                              <span className="rate-result">
                                <i className="icofont-star"></i> 4.5
                              </span>
                            </figure>
                            <div className="course-meta">
                              <div style={{ display: "flex" }}></div>
                              <h5 className="course-title">
                                <a href="course-detail.html" title="">
                                  TMR Group Venture
                                </a>
                              </h5>
                              <p>250Sqd, Gachibowli</p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </div>
                  </Swiper>
                </div>
                <div
                  className="nextplot col-lg-1"
                  slot="container-end"
                  style={{ marginTop: "160px" }}
                >
                  <img src={right} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plots;
