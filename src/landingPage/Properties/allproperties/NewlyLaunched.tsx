import "../../agents/AgentProperty.css";
import { useState, useEffect } from "react";
import "./NewlyLaunched.css";
import Apis from "../../../api/apiServices";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Autoplay,
  Navigation,
  EffectFade,
  Virtual,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/hash-navigation";
import right from "../../../assets/images/Right.png";
import left from "../../../assets/images/Left.png";
import { useNavigate } from "react-router-dom";

const NewlyLaunched = () => {
  const navigate = useNavigate();
  const handleNewlyClick = (newLaunch: any) => {
    navigate("./viewall", { state: { newlyLaunched: newLaunch } });
  };

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Apis.get("/property/home?city=hyderabad");

        setProperties(response?.data?.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchData();
  }, []);

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
                  <div className="main-title">
                    Newly Launched Projects{" "}
                    <a
                      title=""
                      href="viewall"
                      className="view-all"
                      style={{ fontSize: "14px" }}
                      onClick={()=>handleNewlyClick("newProperty")}
                    >
                      View all
                    </a>
                  </div>
                  <Swiper
                    modules={[
                      Pagination,
                      Autoplay,
                      Navigation,
                      EffectFade,
                      Virtual,
                    ]}
                    spaceBetween={-550}
                    slidesPerView={1}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    navigation={{
                      nextEl: ".nextlaunched",
                      prevEl: ".prevlaunched",
                    }}
                    pagination={{ clickable: true }}
                    loop={true}
                    virtual
                  >
                    <div style={{ display: "flex", marginBottom: "-60px" }}>
                      {properties.length > 0
                        ? properties.slice(0, 5).map((item: any, i: any) =>
                            item.newProperty.length > 0
                              ? item.newProperty.map(
                                  (newItem: any, index: any) => (
                                    <SwiperSlide key={i + index}>
                                      <div className="blog-posts col-lg-6 col-sm-12 col-md-12">
                                        <figure>
                                          {newItem?.property?.image_gallery && (
                                            <img
                                              className="newlylaunchedimages"
                                              src={
                                                newItem?.property
                                                  ?.image_gallery[0]?.serveruri
                                              }
                                              alt=""
                                            />
                                          )}
                                        </figure>
                                        <div
                                          className="blog-post_meta"
                                          style={{
                                            display: "flex",
                                            alignItems: "start",
                                            justifyContent: "start",
                                            flexDirection: "column",
                                            width: "100%",
                                          }}
                                        >
                                          <h6
                                            style={{
                                              marginTop: "10px",
                                              width: "100%",
                                            }}
                                          >
                                            {newItem?.property?.building_name ||
                                              "N/A"}
                                          </h6>
                                          <label
                                            style={{
                                              paddingLeft: "5px",
                                              fontSize: "12px",
                                            }}
                                          >
                                            {newItem.property.locality}
                                          </label>
                                          <div
                                            className="we-video-info"
                                            style={{
                                              display: "flex",
                                              flexDirection: "row",
                                              justifyContent: "start",
                                              alignItems: "start",
                                            }}
                                          >
                                            <ul>
                                              {newItem?.amenities?.map(
                                                (amenity: any, index: any) => (
                                                  <li key={index}>
                                                    {amenity?.label}
                                                  </li>
                                                )
                                              )}
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </SwiperSlide>
                                  )
                                )
                              : "No featured properties available"
                          )
                        : "no data found"}
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
