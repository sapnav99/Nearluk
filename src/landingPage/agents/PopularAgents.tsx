import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/hash-navigation";
import right from "../../assets/images/Right.png";
import left from "../../assets/images/Left.png";
import "./Agents.css";
import popular from "../../assets/images/popular.png";
const PopularAgents = () => {
  return (
    <div>
      <div
        className="gap"
        style={{ backgroundColor: "rgba(226, 255, 253, 1)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="page-contents" className="row merged20">
                <div
                  className="col-lg-1 prev"
                  slot="container-start"
                  style={{ marginTop: "60px" }}
                >
                  <img src={left} alt="" />
                </div>
                <div className="col-lg-10">
                <h4 className="main-title">Popular Agents</h4>
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={-400}
                  slidesPerView={2}
                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                  navigation={{
                    nextEl: ".next",
                    prevEl: ".prev",
                  }}
                >
                 
                    <SwiperSlide>
                      <div
                        className="widget stick-widget col-lg-5"
                        style={{
                          backgroundColor: "white",
                          borderRadius: "13px",
                        }}
                      >
                        <div className="followers">
                          <figure className="figurea">
                            <img alt="" src={popular} />
                          </figure>
                          <div className="popular">
                            <h6>Mitra Spaces Pvt Ltd</h6>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              fontSize: "12px",
                            }}
                          >
                            <span>
                              Dealing in : Rent/Lease Original Booking, Resale
                            </span>
                            <span>Member Since: 2022</span>
                            <span>
                              Properties Dealing: 100 Villas | 37 Plots | 2
                              Flats | 1 House
                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className="widget stick-widget col-lg-5"
                        style={{
                          backgroundColor: "white",
                          borderRadius: "13px",
                        }}
                      >
                        <div className="followers">
                          <figure className="figurea">
                            <img alt="" src={popular} />
                          </figure>
                          <div className="popular">
                            <h6>Mitra Spaces Pvt Ltd</h6>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              fontSize: "12px",
                            }}
                          >
                            <span>
                              Dealing in : Rent/Lease Original Booking, Resale
                            </span>
                            <span>Member Since: 2022</span>
                            <span>
                              Properties Dealing: 100 Villas | 37 Plots | 2
                              Flats | 1 House
                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className="widget stick-widget col-lg-5"
                        style={{
                          backgroundColor: "white",
                          borderRadius: "13px",
                        }}
                      >
                        <div className="followers">
                          <figure className="figurea">
                            <img alt="" src={popular} />
                          </figure>
                          <div className="popular">
                            <h6>Mitra Spaces Pvt Ltd</h6>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              fontSize: "12px",
                            }}
                          >
                            <span>
                              Dealing in : Rent/Lease Original Booking, Resale
                            </span>
                            <span>Member Since: 2022</span>
                            <span>
                              Properties Dealing: 100 Villas | 37 Plots | 2
                              Flats | 1 House
                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className="widget stick-widget col-lg-5"
                        style={{
                          backgroundColor: "white",
                          borderRadius: "13px",
                        }}
                      >
                        <div className="followers">
                          <figure className="figurea">
                            <img alt="" src={popular} />
                          </figure>
                          <div className="popular">
                            <h6>Mitra Spaces Pvt Ltd</h6>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              fontSize: "12px",
                            }}
                          >
                            <span>
                              Dealing in : Rent/Lease Original Booking, Resale
                            </span>
                            <span>Member Since: 2022</span>
                            <span>
                              Properties Dealing: 100 Villas | 37 Plots | 2
                              Flats | 1 House
                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className="widget stick-widget col-lg-5"
                        style={{
                          backgroundColor: "white",
                          borderRadius: "13px",
                        }}
                      >
                        <div className="followers">
                          <figure className="figurea">
                            <img alt="" src={popular} />
                          </figure>
                          <div className="popular">
                            <h6>Mitra Spaces Pvt Ltd</h6>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              fontSize: "12px",
                            }}
                          >
                            <span>
                              Dealing in : Rent/Lease Original Booking, Resale
                            </span>
                            <span>Member Since: 2022</span>
                            <span>
                              Properties Dealing: 100 Villas | 37 Plots | 2
                              Flats | 1 House
                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className="widget stick-widget col-lg-5"
                        style={{
                          backgroundColor: "white",
                          borderRadius: "13px",
                        }}
                      >
                        <div className="followers">
                          <figure className="figurea">
                            <img alt="" src={popular} />
                          </figure>
                          <div className="popular">
                            <h6>Mitra Spaces Pvt Ltd</h6>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              fontSize: "12px",
                            }}
                          >
                            <span>
                              Dealing in : Rent/Lease Original Booking, Resale
                            </span>
                            <span>Member Since: 2022</span>
                            <span>
                              Properties Dealing: 100 Villas | 37 Plots | 2
                              Flats | 1 House
                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    </Swiper>
                  </div>
               
                <div
                  className="next col-lg-1"
                  slot="container-end"
                  style={{ marginTop: "60px" }}
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

export default PopularAgents;
