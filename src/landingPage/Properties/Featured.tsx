import style from "./Property.module.css";
import buildings from "../../assets/images/buildings.png";
import mahidhara from "../../assets/images/mahidhara.png";
import right from "../../assets/images/Right.png";
import left from "../../assets/images/Left.png";
import "./Featured.css";

const Featured = () => {
  const propertyArray = Array.from({ length: 4 });
  return (
    <div>
      <div className="gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="page-contents" className="row merged20">
                <div className="col-lg-1" style={{ marginTop: "60px" }}>
                  <img src={left} alt="" />
                </div>
                <div className="col-lg-10 ">
                  <div className="main-title">Featured Projects</div>
                  <div className="main2">
                    {propertyArray.map((_, index) => (
                      <div
                        className="blog_posts col-lg-6 col-md-12 col-sm-12"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          paddingRight: "20px",
                        }}
                      >
                        <figure className={style.figure}>
                          <img
                            className={style.images}
                            src={buildings}
                            alt=""
                            key={index}
                          />
                        </figure>
                        <div
                          className={style.blogpostmeta}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <img src={mahidhara} alt="" style={{marginLeft:"-20px", marginBottom:"30px", marginTop:"-10px"}}/>
                          <div>
                            <h5 style={{lineHeight:"20px"}}>Mahidhara Paradise</h5>
                            <br/>
                            <p style={{fontSize:"12px", lineHeight:"1px"}}>by Mahidhara Projects Pvt Ltd.</p>
                            <p style={{fontSize:"12px", lineHeight:"1px"}}>Isnapur (Patancheru), Hyderabad</p>
                            <p style={{fontSize:"12px", lineHeight:"1px"}}>Marketed by Mahidhara Projects Pvt Ltd.</p>
                          </div>

                          <div>
                            <span>3 BHK Villas</span>
                            <p>93.7 Lac onwards</p>
                            <a
                              href="blog-detail.html"
                              title=""
                              className="button primary circle"
                              style={{paddingBlock:"10px", paddingInline:"10px"}}
                            >
                              View Details
                            </a>
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
                          <span title="Comments" className="Recommend">
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
                    ))}
                  </div>
                </div>
                <div className="col-lg-1" style={{ marginTop: "60px" }}>
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
