import Apis from "../../api/apiServices";
import { useState, useEffect } from "react";
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
import "swiper/css/virtual";
import right from "../../assets/images/Right.png";
import left from "../../assets/images/Left.png";
import "./AgentProperty.css";

const AgentProperties = () => {
  const [propertyArray, setPropertyArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Apis.get(
          "/property/propertyByCategory?sub_category=Residential"
        );

        setPropertyArray(response?.data?.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(propertyArray);
  return (
    <div>
      <div className="gap" style={{ backgroundColor: "#E2FFFD" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="page-contents" className="row merged20">
                <div
                  className="prevagent col-lg-1"
                  slot="container-start"
                  style={{ marginTop: "90px" }}
                >
                  <img src={left} alt="" />
                </div>
                <div className="col-lg-10" style={{ marginTop: "40px" }}>
                  <div className="main-title">
                    Agent Properties{" "}
                    <a
                      title=""
                      href="#"
                      className="view-all"
                      style={{ fontSize: "14px" }}
                    >
                      View all
                    </a>
                  </div>
                  <Swiper
                    modules={[
                      Pagination,
                      Virtual,
                      Autoplay,
                      Navigation,
                      EffectFade,
                    ]}
                    spaceBetween={-500}
                    slidesPerView={1}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    navigation={{
                      nextEl: ".nextagent",
                      prevEl: ".prevagent",
                    }}
                    pagination={{ clickable: true }}
                    loop={true}
                    virtual
                  >
                    <div style={{ display: "flex", marginBottom: "-60px" }}>
                      {propertyArray.length > 0
                        ? propertyArray.map((item: any, i: any) => (
                            <SwiperSlide key={i}>
                              <div className="blog-posts col-lg-6 col-sm-12 col-md-12">
                                <figure>
                                  {item?.property?.image_gallery && (
                                    <img
                                      className="agentImages"
                                      src={
                                        item?.property?.image_gallery[0]
                                          ?.serveruri
                                      }
                                      alt=""
                                    />
                                  )}
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
                                      <img
                                        src="images/resources/user7.jpg"
                                        alt=""
                                      />
                                    </figure>
                                    <div className="course-cat">
                                      <span style={{ marginTop: "12px" }}>
                                        By: {item?.property_owner?.fname}
                                      </span>
                                    </div>
                                  </div>

                                  <h6>
                                    {item?.property?.building_name || "N/A"}
                                  </h6>
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "row",
                                    }}
                                  >
                                    <ul>
                                      {item?.amenities?.map(
                                        (amenity: any, index: any) => (
                                          <li key={index}>{amenity?.label}</li>
                                        )
                                      )}
                                    </ul>

                                    {/* <ul
                                      style={{
                                        width: "85%",
                                        display: "flex",
                                        flexDirection: "row",
                                        listStyle: "none",
                                        padding: 0,
                                        marginTop: "10px",
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
                                    </ul> */}
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>
                          ))
                        : "no data found"}
                    </div>
                  </Swiper>
                </div>
                <div
                  className="nextagent col-lg-1"
                  slot="container-end"
                  style={{ marginTop: "90px" }}
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
