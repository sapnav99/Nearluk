
import style from "./Property.module.css";
import project2 from "../../assets/images/project2.jpg";
import project1 from "../../assets/images/project1.jpg";
import vasavi from "../../assets/images/vasavi.jpg";
import abode from "../../assets/images/abode.jpg";
import './Featured.css'


const Featured = () => {
  return (
    <div>
      <div className="gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="page-contents" className="row merged20">
                <div className="col-lg-12 ">
                  
                    <div className="main-title">Featured Projects</div>
                    <div className="main2"
                      // style={{
                      //   display: "flex",
                      //   flexDirection: "row",
                      // }}
                    >
                      <div
                        className="blog_posts col-lg-6 col-md-12 col-sm-12"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          paddingRight: "20px",
                        }}
                      >
                        <figure className={style.figure}>
                          <img className={style.images} src={project1} alt="" />
                        </figure>
                        <div
                          className={style.blogpostmeta}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <img src={vasavi} alt="" />
                          <div>
                            <h5>Vasavi Atlantis</h5>
                            <p>by Vasavi Constructions</p>
                            <p>Narsingi Hyderabad</p>
                            <p>Marketed by Vasavi construction LLP</p>
                          </div>

                          <div>
                            <span>3, 4 BHK Flats</span>
                            <p>1.75 Cr onwards</p>
                            <a
                              href="blog-detail.html"
                              title=""
                              className="button primary circle"
                            >
                              View Details
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="blog_posts col-lg-6 col-md-12 col-sm-12"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          paddingRight: "20px",
                        }}
                      >
                        <figure className={style.figure}>
                          <img src={project2} alt="" className={style.images} />
                        </figure>
                        <div
                          className={style.blogpostmeta}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <img src={abode} alt="" />
                          <div>
                            <h5>Abode Lakeview</h5>
                            <p>by Vasavi Constructions</p>
                            <p>Narsingi Hyderabad</p>
                            <p>Marketed by Vasavi construction LLP</p>
                          </div>

                          <div>
                            <span>3, 4 BHK Flats</span>
                            <p>1.75 Cr onwards</p>
                            <a
                              href="blog-detail.html"
                              title=""
                              className="button primary circle"
                            >
                              View Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
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
