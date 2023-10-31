import { FC } from "react";
import { Link } from "react-router-dom";
import "./footer.css";

type Props = {};

const Footer: FC<Props> = ({}) => {
  return (
    <div>
      <footer>
        <div className="gap">
          <div
            className="bg-image"
            style={{
              backgroundImage: "url(/images/resources/footer-bg.png)",
            }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="web-info" style={{ marginTop: "-22px" }}>
                  <div className="logo">
                    <img
                      src="/images/main-logo-pic.png"
                      alt=""
                      style={{ maxWidth: "200px", marginBottom: "-17px" }}
                    />
                    {/* <span>Nearluk</span> */}
                  </div>
                  <p className="nearluk__title">
                    <strong>NearLuk Technologies Private Limited</strong>
                  </p>
                  <p>
                    Subscribe our newsletter for getting notifications and
                    alerts
                  </p>
                  <div className="contact-little">
                    <span>
                      <i className="icofont-phone-circle"></i> 040-66445777
                    </span>
                    <span>
                      <i className="icofont-email"></i> contact@nearluk.com
                    </span>
                    <span style={{ display: "flex", alignItems: "center" }}>
                      <i
                        className="icofont-location-pin"
                        style={{ marginRight: "10px", marginBottom: "65px" }}
                      ></i>
                      <span>
                        202 & 203, 2nd floor, Block A, PSR Prime Towers, Beside
                        DLF Cyber City, Gachibowli, Hyderabad, Telangana, 500032
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="widget">
                  <div className="widget-title">
                    <h4>Company</h4>
                  </div>
                  <ul className="quick-links">
                    <li>
                      <a href="#" title="">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        Career
                      </a>
                    </li>
                    <li>
                      <Link to="/privacyandpolicy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/termsandconditions">Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link to="/cancellationandrefundpolicy">
                        Cancellation & Refund Policy
                      </Link>
                    </li>
                    <li>
                      <a href="#" title="">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="widget">
                  <div className="widget-title">
                    <h4>Quick Links</h4>
                  </div>
                  <ul className="quick-links">
                    <li>
                      <a href="#" title="">
                        Product
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        Market
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        Courses
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        Enterprise
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        Sitemap
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="widget">
                  <div className="widget-title">
                    <h4>Follow Us</h4>
                  </div>
                  <ul className="quick-links">
                    <li>
                      <a href="#" title="">
                        <i className="icofont-facebook"></i>facebook
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        <i className="icofont-twitter"></i>twitter
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        <i className="icofont-instagram"></i>instagram
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        <i className="icofont-google-plus"></i>google +
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        <i className="icofont-whatsapp"></i>whatsapp
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        <i className="icofont-reddit"></i>reddit
                      </a>
                    </li>
                  </ul>
                </div>
              </div> */}
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="widget">
                  <div className="widget-title">
                    <h4>Newsletter</h4>
                  </div>
                  <div className="news-lettr">
                    <form className="newsletter">
                      <input type="text" placeholder="Email Address" />
                      <button type="submit">
                        <i className="icofont-paper-plane"></i>
                      </button>
                    </form>
                    <p>
                      it is a long established fact that a reader will be
                      distracted by.
                    </p>
                    <h5>Follow Us</h5>
                    <div style={{marginBottom:"10px"}}>
                    <a href="#" title="" style={{paddingRight:"15px"}}>
                      <i className="icofont-facebook"></i>
                    </a>

                    <a href="#" title="" style={{paddingRight:"15px"}}>
                      <i className="icofont-twitter"></i>
                    </a>

                    <a href="#" title="" style={{paddingRight:"15px"}}>
                      <i className="icofont-instagram"></i>
                    </a>
                    
                    </div>
                  

                    
                    <h5>Download App</h5>
                    <a href="#" title="">
                      <img src="/images/android.png" alt="" />
                    </a>
                    <a href="#" title="">
                      <img src="/images/apple.png" alt="" />
                    </a>
<<<<<<< HEAD
                    {/* <a href="#" title="">
                      <img src="images/windows.png" alt="" />
                    </a> */}
=======
                    <a href="#" title="">
                      <img src="/images/windows.png" alt="" />
                    </a>
>>>>>>> c2168557dbbff43624c391e5688c0923aa2b99fc
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="bottombar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <span className="">
                &copy; copyright All rights reserved by Nearluk Technologies
                Private Limited
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
