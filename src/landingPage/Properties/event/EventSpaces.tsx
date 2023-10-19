import events1 from "../../../assets/images/events1.png";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/hash-navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/hash-navigation";
import right from "../../../assets/images/Right.png";
import left from "../../../assets/images/Left.png";
import car from "../../../assets/images/car 1.png";
import elevator from "../../../assets/images/elevator 1.png";
import swimming from "../../../assets/images/swimming 1.png";
import "./EventSpace.css";

const EventSpaces = () => {
  const propertyArray = Array.from({ length: 8 });

  return (
    <div>
      <div className="gap" style={{ backgroundColor: "#E2FFFD" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="page-contents" className="row merged20">
                <div
                  className="prevevent col-lg-1"
                  slot="container-start"
                  style={{ marginTop: "160px" }}
                >
                  <img src={left} alt="" />
                </div>
                {/* <div className="d-flex justify-content-center align-items-center "> */}
                <div className="col-lg-10 ">
                  {/* <div
                    className="main-wraper"
                    style={{ marginBottom: "-80px" }}
                  > */}
                  <h4 className="main-title">
                    Event spaces in Hyderabad{" "}
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
                      nextEl: ".nextevent",
                      prevEl: ".prevevent",
                    }}
                    pagination={{ clickable: true }}
                    rewind={true}
                  >
                    <div className="row slider-container">
                      {propertyArray.map((_, index) => (
                        <SwiperSlide>
                          <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="course slide" key={index}>
                              <figure>
                                <img src={events1} alt="" />
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
                                    Swagath Residency
                                  </a>
                                </h5>
                                <p>3BHK, Gachibowli</p>
                                <div className="we-video-info">
                                  <ul>
                                    <li>
                                      <img src={car} alt="" />
                                      Car parking
                                    </li>
                                    <li>
                                      <img src={elevator} alt="" />
                                      Lift
                                    </li>
                                    <li>
                                      <img src={swimming} alt="" />

                                      <span>Swimming pool</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </div>
                  </Swiper>
                </div>
                {/* </div> */}
                <div
                  className="nextevent col-lg-1"
                  slot="container-end"
                  style={{ marginTop: "160px" }}
                >
                  <img src={right} alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default EventSpaces;
