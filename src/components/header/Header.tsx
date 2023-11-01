import React from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { LoginActions } from "../../pages/auth/redux/actions";
import locationSymbol from "../../assets/images/Location.png";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";

import { BiSupport } from "react-icons/bi";

// import { GrLocation } from "react-icons/gr";
import "./Header.css";
type Props = {};

const Header: React.FC<Props> = ({}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const isLoggedIn = useSelector(
  //   (state: any) => state?.loginReducer?.isLoggedIn
  // );

  const handleButtonClick = () => {
    navigate("/login");
    dispatch(LoginActions.loggedOut());
  };
  return (
    <>
      <div className="responsive-header">
        <div className="logo res">
          <img
            src="/images/main-logo-pic.png"
            alt=""
            onClick={() => navigate("/")}
          />
        </div>

        <div className="right-compact">
          <div className="sidemenu">
            <i>
              <svg
                id="side-menu2"
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-menu"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </i>
          </div>
          <div className="add-prop">
            <button
              type="button"
              className="btn button "
              style={{
                backgroundColor: "#84D7E8",
                borderRadius: "25px",
                fontWeight: "700",
              }}
              onClick={() => {
                navigate("/postproperty");
              }}
            >
              Post Property
            </button>

            <div>
              <button
                type="button"
                className="btn "
                style={{
                  backgroundColor: "white",
                  borderRadius: "25px",
                  color: "black",
                  fontWeight: "700",
                  width: 150,
                  border: "solid 0.5px #03B6C3",
                }}
                onClick={() => navigate("/login")}
                // onClick={() => setOpenModal(true)}
              >
                Login
              </button>
            </div>
          </div>
        </div>
        <div className="restop-search">
          <span className="hide-search">
            <i className="icofont-close-circled"></i>
          </span>
          <form method="post">
            <input type="text" placeholder="Search..." />
          </form>
        </div>
      </div>

      <header className="">
        <div className="topbar stick">
          <div className="logo">
            <a href="/">
              <img
                src="images/main-logo-pic.png"
                alt=""
                style={{ height: "45px", width: "145px" }}
              />
            </a>
          </div>

          <div className="nl-search-location">
            <div className="searchicon">
              <div className="nl-search-location_wrap">
                <input
                  type="text"
                  className="nl-searchlocation-input"
                  placeholder="Hyderabad"
                />
              </div>
            </div>
          </div>
          <div className="sidemenu" style={{ float: "right" }}>
            <i>
              <svg
                id="side-menu"
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-menu"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </i>
          </div>
          <ul className="web-elements">
            <li>
              <div className="add-prop">
                <button
                  type="button"
                  className="btn button "
                  style={{
                    backgroundColor: "#84D7E8",
                    borderRadius: "25px",
                    fontWeight: "500",
                    letterSpacing: "1px",
                  }}
                  onClick={() => {
                    navigate("/postproperty");
                  }}
                >
                  Post Property
                </button>
              </div>
            </li>
            <li>
              <a
                className="mesg-notif"
                href="#"
                title="Notifications"
                data-toggle="tooltip"
                style={{
                  border: "none",
                  background: "none",
                }}
              >
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-bell"
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>
                </i>
              </a>
              <span></span>
            </li>
            <BiSupport />

            <li>
              <a href="#" title="">
                <img
                  src="/images/profilepic/profilepic_01.jpg"
                  alt="name"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",
                    borderRadius: "50%",
                  }}
                />
                <i></i>
              </a>
              <ul className="dropdown">
                <li>
                  <a href="userprofile" title="">
                    <i className="icofont-user-alt-3"></i> Your Profile
                  </a>
                </li>
                <li>
                  <a href="add-new-course.html" title="">
                    <i className="icofont-plus"></i> New Course
                  </a>
                </li>
                <li>
                  <a className="invite-new" href="#" title="">
                    <i className="icofont-brand-slideshare"></i> Invite Collegue
                  </a>
                </li>
                <li>
                  <a href="pay-out.html" title="">
                    <i className="icofont-price"></i> Payout
                  </a>
                </li>
                <li>
                  <a href="price-plan.html" title="">
                    <i className="icofont-flash"></i> Upgrade
                  </a>
                </li>
                <li>
                  <a href="help-faq.html" title="">
                    <i className="icofont-question-circle"></i> Help
                  </a>
                </li>
                <li>
                  <a href="settings.html" title="">
                    <i className="icofont-gear"></i> Setting
                  </a>
                </li>
                <li>
                  <a href="privacy-n-policy.html" title="">
                    <i className="icofont-notepad"></i> Privacy
                  </a>
                </li>
                <li>
                  <a className="dark-mod" href="#" title="">
                    <i className="icofont-moon"></i> Dark Mode
                  </a>
                </li>
                <li className="logout">
                  <a href="/login" title="" onClick={handleButtonClick}>
                    <i className="icofont-power"></i> Logout
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <div className="add-prop"></div>
            </li>
          </ul>
          <ul className="web_elements list2">
            <li>
              {" "}
              <a href="/">Home</a>
            </li>
            <li>
              <a>
                Properties <BsChevronDown />
              </a>
            </li>
            <li>
              <a>
                Services
                <BsChevronDown />{" "}
              </a>
              <ul className="dropdown2">
                <li>
                  <a>
                    Rent Pay <BsChevronRight />
                  </a>
                  <ul className="dropdown3">
                    <li>
                      <a href="">Rent</a>
                    </li>
                    <li>
                      <a href="">Maintanance</a>
                    </li>
                    <li>
                      <a href="">Advance Amount</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>
                    Creditluk <BsChevronRight />
                  </a>
                  <ul className="dropdown3">
                    <li>
                      <a href="">Loans</a>
                    </li>
                    <li>
                      <a href="">Loan Calculator</a>
                    </li>
                    <li>
                      <a href="">CIBIL</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Insights</a>
                </li>
              </ul>
            </li>
            <li >
              <a>
                More
                <BsChevronDown />{" "}
              </a>
              <ul className="dropdown2">
                <li>
                  <a>For Business Owners</a>
                </li>
                <li>
                  <a>For Builders </a>
                </li>
                <li>
                  <a>For Property Consultants</a>
                </li>
              </ul>
            </li>

            <li>
              <a style={{ marginLeft: "-6px" }}>
                <i>
                  <span className="heartbeat"></span>
                  <span className="location">
                    <img
                      src={locationSymbol}
                      alt=""
                      style={{
                        width: "16px",
                        height: "16px",
                        marginRight: "5px",
                      }}
                    />
                  </span>
                </i>
              </a>
              <a>Near U</a>
            </li>

            <li style={{ marginRight: "25px" }}>
              <a
                style={{ paddingRight: "6px" }}
                href="live-stream.html"
                title="Go Live"
                data-toggle="tooltip"
              >
                <span
                  className="heartbeat"
                  style={{
                    marginLeft: "1px",
                    marginTop: "17px",
                  }}
                ></span>
                <span className="location ">
                  <i>
                    <svg
                      fill="#f00"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      width="18px"
                      height="18px"
                    >
                      <path
                        d="M 6.1015625 6.1015625 C 3.5675625 8.6345625 2 12.134 2 16 C 2 19.866 3.5675625 
                      23.365437 6.1015625 25.898438 L 7.5195312 24.480469 C 5.3465312 22.307469 4 19.308 4 16 
                      C 4 12.692 5.3465312 9.6925313 7.5195312 7.5195312 L 6.1015625 6.1015625 z M 25.898438 6.1015625 
                      L 24.480469 7.5195312 C 26.653469 9.6925312 28 12.692 28 16 C 28 19.308 26.653469 22.307469 
                      24.480469 24.480469 L 25.898438 25.898438 C 28.432437 23.365437 30 19.866 30 16 C 30 12.134 
                      28.432437 8.6345625 25.898438 6.1015625 z M 9.6367188 9.6367188 C 8.0077188 11.265719 7 13.515 
                      7 16 C 7 18.485 8.0077187 20.734281 9.6367188 22.363281 L 11.052734 20.947266 C 9.7847344 19.680266
                       9 17.93 9 16 C 9 14.07 9.7847344 12.319734 11.052734 11.052734 L 9.6367188 9.6367188 z M 22.363281
                        9.6367188 L 20.947266 11.052734 C 22.215266 12.319734 23 14.07 23 16 C 23 17.93 22.215266 
                        19.680266 20.947266 20.947266 L 22.363281 22.363281 C 23.992281 20.734281 25 18.485 25 16 
                        C 25 13.515 23.992281 11.265719 22.363281 9.6367188 z M 16 12 A 4 4 0 0 0 16 20 A 4 4 0 0 0 
                        16 12 z"
                      />
                    </svg>
                  </i>
                </span>
              </a>
              <a>Auctions</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
