import rental from "../../assets/images/Rental.png";
import packers from "../../assets/images/Packers and movers.png";
import cleaning from "../../assets/images/Cleaning.png";
import plumbing from "../../assets/images/Plumbing.png";
import electrician from "../../assets/images/electrician 1.png";
import painting from "../../assets/images/Painting.png";
import "./Services.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination, Autoplay, Navigation, EffectFade} from 'swiper/modules';
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/hash-navigation"
import right from "../../assets/images/Right.png";
import left from "../../assets/images/Left.png";

const Services = () => {
  return (
    <div>
      <section>
        <div
          className="gap"
          style={{
            backgroundColor: "#eafaf1",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div id="page-contents" className="row merged20">
                  <div  slot="container-start" className="prevservice col-lg-1" style={{ marginTop: "60px" }}>
                    <img src={left} alt="" />
                  </div>

                  <div className="col-lg-10">
                    <h2
                      style={{
                        textAlign: "center",
                        marginBottom: "25px",
                        marginTop: "-30px",
                      }}
                    >
                      Nearluk exclusive services
                    </h2>
                    <Swiper
                     modules={[Pagination, Autoplay, Navigation, EffectFade]}
                      spaceBetween={20}
                      slidesPerView={6}
                      autoplay={{ delay: 2000, disableOnInteraction: false }}
                      navigation={{
                        nextEl: ".nextservice",
                        prevEl: ".prevservice",
                      }}
                      pagination={{ clickable: true }}
                    loop={true}
                    >
                      <div
                        className="row col-xs-6"
                        style={{ marginBottom: "-30px" }}
                      >
                        <div className="col-lg-2 col-md-4 col-sm-4">
                          <SwiperSlide>
                            <div className="group-box">
                              <figure>
                                <img
                                  alt=""
                                  src={rental}
                                  className="serviceImage"
                                />
                              </figure>
                              <button className="serviceButton">
                                Rental Agreement
                              </button>
                            </div>
                          </SwiperSlide>
                        </div>

                        <div className="col-lg-2 col-md-4 col-sm-4">
                          <SwiperSlide>
                            <div className="group-box">
                              <figure>
                                <img
                                  src={packers}
                                  alt=""
                                  className="serviceImage"
                                />
                              </figure>

                              <button className="serviceButton">
                                Packers & Movers
                              </button>
                            </div>
                          </SwiperSlide>
                        </div>

                        <div className="col-lg-2 col-md-4 col-sm-4">
                          <SwiperSlide>
                            <div className="group-box">
                              <figure>
                                <img
                                  src={cleaning}
                                  alt=""
                                  className="serviceImage"
                                />
                              </figure>

                              <button className="serviceButton">
                                Cleaning Services
                              </button>
                            </div>
                          </SwiperSlide>
                        </div>
                       
                        

                        <div className="col-lg-2 col-md-4 col-sm-4">
                          <SwiperSlide>
                            <div className="group-box">
                              <figure>
                                <img
                                  src={plumbing}
                                  alt=""
                                  className="serviceImage"
                                />
                              </figure>

                              <button className="serviceButton">
                                Plumbing Services
                              </button>
                            </div>
                          </SwiperSlide>
                        </div>

                        <div className="col-lg-2 col-md-4 col-sm-4">
                          <SwiperSlide>
                            <div className="group-box">
                              <figure>
                                <img
                                  src={electrician}
                                  alt=""
                                  className="serviceImage"
                                />
                              </figure>

                              <button className="serviceButton">
                                Electrician
                              </button>
                            </div>
                          </SwiperSlide>
                        </div>

                        <div className="col-lg-2 col-md-4 col-sm-4">
                          <SwiperSlide>
                            <div className="group-box">
                              <figure>
                                <img
                                  src={painting}
                                  alt=""
                                  className="serviceImage"
                                />
                              </figure>

                              <button className="serviceButton">
                                Painting Services
                              </button>
                            </div>
                          </SwiperSlide>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4">
                          <SwiperSlide>
                            <div className="group-box">
                              <figure>
                                <img
                                  alt=""
                                  src={rental}
                                  className="serviceImage"
                                />
                              </figure>
                              <button className="serviceButton">
                                Rental Agreement
                              </button>
                            </div>
                          </SwiperSlide>
                        </div>

                      </div>
                    
                    </Swiper>
                  </div>

                  <div slot="container-end" className="nextservice col-lg-1" style={{ marginTop: "60px" }}>
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

export default Services;
