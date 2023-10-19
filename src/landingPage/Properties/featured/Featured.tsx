import style from "../allproperties/Property.module.css";

import mahidhara from "../../../assets/images/mahidhara.png";
import right from "../../../assets/images/Right.png";
import left from "../../../assets/images/Left.png";
import { useState, useEffect } from "react";
import Apis from "../../../api/apiServices";
import "./Featured.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/hash-navigation";
import { useNavigate } from "react-router-dom";

const Featured = () => {
  const navigate = useNavigate();
  const handleFeatureClick = (featuredProperty: any) => {
    navigate("./viewall", { state: { featuredTrue: featuredProperty } });
  };
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Apis.get("/property/home");

        setProperties(response?.data?.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchData();
  }, []);
  console.log(properties);
  return (
    <div>
      <div className="gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="page-contents" className="row merged20">
                <div
                  className="prevfeatured col-lg-1"
                  slot="container-start"
                  style={{ marginTop: "160px" }}
                >
                  <img src={left} alt="" />
                </div>
                <div className="col-lg-10 ">
                  <div className="main-title">
                    Featured Projects
                    <a
                      title=""
                      href="viewall"
                      className="view-all"
                      style={{ fontSize: "14px" }}
                      onClick={handleFeatureClick}
                    >
                      View all
                    </a>
                  </div>
                  <Swiper
                    modules={[Pagination, Autoplay, Navigation, EffectFade]}
                    spaceBetween={-160}
                    slidesPerView={2}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    navigation={{
                      nextEl: ".nextfeatured",
                      prevEl: ".prevfeatured",
                    }}
                    pagination={{ clickable: true }}
                    loop={true}
                  >
                    <div className="main2">
                      {properties.length > 0
                        ? properties.map((item: any, i: any) =>
                            item.featuredTrue.length > 0 ? (
                              <SwiperSlide key={i}>
                                <div
                                  className="blog_posts col-lg-9 col-md-12 col-sm-12"
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    paddingRight: "20px",
                                  }}
                                >
                                  <figure className={style.figure}>
                                    {item?.property?.image_gallery && (
                                      <img
                                        className={style.images}
                                        src={
                                          item?.property?.image_gallery[0]
                                            ?.serveruri
                                        }
                                        alt=""
                                      />
                                    )}
                                  </figure>
                                  <div
                                    className={style.blogpostmeta}
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                    }}
                                  >
                                    <img
                                      src={mahidhara}
                                      alt=""
                                      style={{
                                        marginLeft: "-20px",
                                        marginBottom: "30px",
                                        marginTop: "-10px",
                                      }}
                                    />
                                    <div>
                                      <h5 style={{ lineHeight: "20px" }}>
                                        Mahidhara Paradise
                                      </h5>
                                      <br />
                                      <p
                                        style={{
                                          fontSize: "12px",
                                          lineHeight: "1px",
                                        }}
                                      >
                                        by Mahidhara Projects Pvt Ltd.
                                      </p>
                                      <p
                                        style={{
                                          fontSize: "12px",
                                          lineHeight: "1px",
                                        }}
                                      >
                                        Isnapur (Patancheru), Hyderabad
                                      </p>
                                      <p
                                        style={{
                                          fontSize: "12px",
                                          lineHeight: "1px",
                                        }}
                                      >
                                        Marketed by Mahidhara Projects Pvt Ltd.
                                      </p>
                                    </div>

                                    <div>
                                      <span>3 BHK Villas</span>
                                      <p>93.7 Lac onwards</p>

                                      <button
                                        style={{
                                          marginLeft: "28px",
                                          backgroundColor: "#3FDBD1",
                                          borderRadius: "25px",
                                          paddingBlock: "5px",
                                          width: "100px",
                                        }}
                                      >
                                        View Details
                                      </button>
                                    </div>
                                  </div>
                                  <div className="we-video-info">
                                    <ul>
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
                                      <li>
                                        <span
                                          className="share-pst"
                                          title="Share"
                                        >
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
                              </SwiperSlide>
                            ) : (
                              <h6>No featured properties available</h6>
                            )
                          )
                        : "no data found"}
                    </div>
                  </Swiper>
                </div>
                <div
                  className="nextfeatured col-lg-1"
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

export default Featured;
