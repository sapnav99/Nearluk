import villa3 from "../../assets/images/villa3.jpg";

import profile from "../../assets/images/profilePhoto.jpg";
import car from "../../assets/images/car 1.png";
import elevator from "../../assets/images/elevator 1.png";
import swimming from "../../assets/images/swimming 1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/hash-navigation";
import right from "../../assets/images/Right.png";
import left from "../../assets/images/Left.png";
// import "../Properties/EventSpace.css";
import "./AgentProperty.css";

const AgentProperties = () => {
  const propertyArray = Array.from({ length: 4 });
  return (
    <div>
      <div className="gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="page-contents" className="row merged20">
                <div
                  className="prevagent col-lg-1"
                  slot="container-start"
                  style={{ marginTop: "4px" }}
                >
                  <img src={left} alt="" />
                </div>
                <div className="col-lg-10" style={{ marginTop: "-80px" }}>
                  <div className="main-title">Agent Properties</div>
                  <Swiper
                    modules={[Pagination, Autoplay, Navigation, EffectFade]}
                    spaceBetween={-500}
                    slidesPerView={1}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    navigation={{
                      nextEl: ".nextagent",
                      prevEl: ".prevagent",
                    }}
                    pagination={{ clickable: true }}
                    loop={true}
                  >
                    <div style={{ display: "flex", marginBottom: "-60px" }}>
                    {propertyArray.map((_, index) => (
                      <SwiperSlide>
                        <div className="blog-posts col-lg-6 col-sm-12 col-md-12" key={index}>
                          <figure>
                            <img src={villa3} alt="" />
                          </figure>
                          <div
                            className="blog-post_meta"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexDirection: "column",
                            }}
                          >
                            <div className="post-by">
                              <figure>
                                <img src={profile} alt="" />
                              </figure>
                              <div className="course-cat">
                                <span style={{ marginTop: "12px" }}>
                                  By: Sarah K
                                </span>
                              </div>
                            </div>

                            <h6>Modern villa with pool</h6>
                            <div
                              style={{ display: "flex", flexDirection: "row" }}
                            >
                              <ul
                                style={{
                                  width: "85%",
                                  display: "flex",
                                  flexDirection: "row",
                                  listStyle: "none",
                                  padding: 0,
                                  marginTop:"10px"
                                }}
                              >
                                <li style={{ marginRight: "20px" }}>
                                  <img src={car} alt="" />
                                  Car parking
                                </li>
                                <li style={{ marginRight: "20px" }}>
                                  <img src={elevator} alt="" />
                                  Lift
                                </li>
                                <li style={{ marginRight: "20px" }}>
                                  <img src={swimming} alt="" />

                                  <span>Swimming pool</span>
                                </li>
                                
                              </ul>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                       ))}
                    </div>
                  </Swiper>
                </div>
                <div
                  className="nextagent col-lg-1"
                  slot="container-end"
                  style={{ marginTop: "4px" }}
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

export default AgentProperties;
