import { FC } from "react";
import { Link } from "react-router-dom";

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
                  <p>NearLuk Technologies Private limited</p>
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
                    <span>
                      <i className="icofont-location-pin"></i> 202 & 203, 2nd
                      flooor, Block A, PSR Prime Towers, Beside DLF Cyber City,
                      Gachibowli, Hyderabad, Telangana, 500032
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
              <div className="col-lg-2 col-md-4 col-sm-6">
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
              </div>
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
                    <h5>Download App</h5>
                    <a href="#" title="">
                      <img src="/images/android.png" alt="" />
                    </a>
                    <a href="#" title="">
                      <img src="/images/apple.png" alt="" />
                    </a>
                    <a href="#" title="">
                      <img src="/images/windows.png" alt="" />
                    </a>
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
