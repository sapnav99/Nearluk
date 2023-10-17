import building from "../../assets/images/building1.png";
// import "../Properties/EventSpace.css";
import "../agents/AgentProperty.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/hash-navigation";
import right from "../../assets/images/Right.png";
import left from "../../assets/images/Left.png";

const NewlyLaunched = () => {
  const propertyArray = Array.from({ length: 8 });
  return (
    <div>
      <div className="gap" style={{ marginTop: "80px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="page-contents" className="row merged20">
                <div
                  className="prevlaunched col-lg-1"
                  slot="container-start"
                  style={{ marginTop: "4px" }}
                >
                  <img src={left} alt="" />
                </div>
                <div className="col-lg-10" style={{ marginTop: "-80px" }}>
                  <div className="main-title">Newly Launched Projects</div>
                  <Swiper
                    modules={[Pagination, Autoplay, Navigation, EffectFade]}
                    spaceBetween={-200}
                    slidesPerView={2}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    navigation={{
                      nextEl: ".nextlaunched",
                      prevEl: ".prevlaunched",
                    }}
                    pagination={{ clickable: true }}
                    loop={true}
                  >
                    <div style={{ display: "flex", marginBottom: "-60px" }}>
                      {propertyArray.map((_, index) => (
                        <SwiperSlide>
                          <div className="blog-posts col-lg-8 col-sm-12 col-md-12" key={index}>
                            <figure>
                              <img src={building} alt="" />
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
                              <label
                                style={{
                                  paddingRight: "35px",
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  lineHeight: "0px",
                                  paddingTop: "25px",
                                }}
                              >
                                Sreenidhi Serengeti
                              </label>
                              <label
                                style={{
                                  paddingRight: "35px",
                                  fontSize: "10px",
                                }}
                              >
                                Telangana, Hyderabad
                              </label>
                              <label
                                style={{
                                  paddingRight: "35px",
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  lineHeight: "0px",
                                }}
                              >
                                69.56 L to 1.5 Cr
                              </label>
                              <div className="we-video-info">
                                <ul style={{ width: "85%" }}>
                                  <li>
                                    <a
                                      style={{
                                        borderRadius: "25px",
                                        backgroundColor: "#3FDBD1",
                                        paddingBlock: "5px",
                                        paddingInline: "10px",

                                        fontSize: "12px",
                                        fontWeight: "400",
                                      }}
                                    >
                                      View Details
                                    </a>
                                  </li>
                                  <li>
                                    <span title="views" className="views">
                                      <i>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={16}
                                          height={16}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="feather feather-eye"
                                        >
                                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                          <circle cx={12} cy={12} r={3} />
                                        </svg>
                                      </i>
                                      <ins>1.2k</ins>
                                    </span>
                                  </li>
                                  <li>
                                    <span
                                      title="Comments"
                                      className="Recommend"
                                    >
                                      <i>
                                        <svg
                                          className="feather feather-message-square"
                                          strokeLinejoin="round"
                                          strokeLinecap="round"
                                          strokeWidth={2}
                                          stroke="currentColor"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          height={16}
                                          width={16}
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                        </svg>
                                      </i>
                                      <ins>54</ins>
                                    </span>
                                  </li>
                                  {/* <li>
                                  <span title="follow" className="Follow">
                                    <i>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-star"
                                      >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                      </svg>
                                    </i>
                                    <ins>5k</ins>
                                  </span>
                                </li> */}
                                  <li>
                                    <span className="share-pst" title="Share">
                                      <i>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={16}
                                          height={16}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="feather feather-share-2"
                                        >
                                          <circle cx={18} cy={5} r={3} />
                                          <circle cx={6} cy={12} r={3} />
                                          <circle cx={18} cy={19} r={3} />
                                          <line
                                            x1="8.59"
                                            y1="13.51"
                                            x2="15.42"
                                            y2="17.49"
                                          />
                                          <line
                                            x1="15.41"
                                            y1="6.51"
                                            x2="8.59"
                                            y2="10.49"
                                          />
                                        </svg>
                                      </i>
                                      <ins>205</ins>
                                    </span>
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
                  className="nextlaunched col-lg-1"
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

export default NewlyLaunched;
