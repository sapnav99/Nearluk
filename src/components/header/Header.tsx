import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostProperty from "../postproperty/PostProperty";
import { useSelector, useDispatch } from "react-redux";
import { LoginActions } from "../../pages/auth/redux/actions";
import { BsFillGeoAltFill } from "react-icons/bs";
import "./Header.css";
type Props = {};

const Header: React.FC<Props> = ({}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const isLoggedIn = useSelector(
    (state: any) => state?.loginReducer?.isLoggedIn
  );

  console.log(isLoggedIn);
  const handleButtonClick = () => {
    navigate("/");
    dispatch(LoginActions.loggedOut());
  };
  return (
    <>
      <PostProperty openModal={openModal} setOpenModal={setOpenModal} />
      <div className="responsive-header">
        <div className="logo res">
          <img
            src="images/main-logo-pic.png"
            alt=""
            onClick={() => navigate("/")}
          />
        </div>
        {/* <div className="user-avatar mobile">
          <a href="profile.html" title="View Profile">
            <img alt="" src="images/resources/user.jpg" />
          </a>
          <div className="name">
            <h4>Danial Cardos</h4>
            <span>Ontario, Canada</span>
          </div>
        </div> */}
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
            {isLoggedIn ? (
              <button
                type="button"
                className="btn button "
                style={{
                  backgroundColor: "#84D7E8",
                  borderRadius: "25px",
                  fontWeight: "700",
                }}
                onClick={() => setOpenModal(true)}
              >
                Post Property
              </button>
            ) : (
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
            )}
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
            {isLoggedIn ? (
              <a href="/">
                <img
                  src="images/main-logo-pic.png"
                  alt=""
                  style={{ height: "45px", width: "145px" }}
                />
              </a>
            ) : (
              <a href="/">
                <img
                  src="images/main-logo-pic.png"
                  alt=""
                  style={{ height: "45px", width: "145px" }}
                />
              </a>
            )}

            {/* <span>Socimo</span> */}
          </div>

          <div className="nl-search-location">
            <div className="searchicon">
              <span>
                <BsFillGeoAltFill
                  style={{
                    marginLeft: "10px",
                    color: "gray",
                    fontSize: "3em",
                    paddingRight: "20px",
                  }}
                />
              </span>
              <div className="nl-search-location_wrap">
                <input
                  type="text"
                  className="nl-searchlocation-input"
                  placeholder="Enter City, Location"
                />
              </div>
            </div>

            {/* <div className="nl-search__error"></div> */}
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
                {isLoggedIn && (
                  <button
                    type="button"
                    className="btn button "
                    style={{
                      backgroundColor: "#84D7E8",
                      borderRadius: "25px",
                      fontWeight: "700",
                    }}
                    onClick={() => setOpenModal(true)}
                  >
                    Post Property
                  </button>
                )}
              </div>
            </li>
            {isLoggedIn ? (
              <li>
                <a href="index.html" title="Home" data-toggle="tooltip">
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
                      className="feather feather-home"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  </i>
                </a>
              </li>
            ) : (
              ""
            )}
            {isLoggedIn ? (
              <li>
                <a
                  className="mesg-notif"
                  href="#"
                  title="Messages"
                  data-toggle="tooltip"
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
                      className="feather feather-message-square"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </i>
                </a>
                <span></span>
              </li>
            ) : (
              ""
            )}
            {isLoggedIn ? (
              <li>
                <a
                  className="mesg-notif"
                  href="#"
                  title="Notifications"
                  data-toggle="tooltip"
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
            ) : (
              ""
            )}
            {isLoggedIn ? (
              <li>
                <a
                  className="create"
                  href="#"
                  title="Add New"
                  data-toggle="tooltip"
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
                      className="feather feather-plus"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </i>
                </a>
              </li>
            ) : (
              ""
            )}
            {isLoggedIn ? (
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
                  <i>
                    {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-grid"
                  >
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg> */}
                  </i>
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
                      <i className="icofont-brand-slideshare"></i> Invite
                      Collegue
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
                    <a href="/" title="" onClick={handleButtonClick}>
                      <i className="icofont-power"></i> Logout
                    </a>
                  </li>
                </ul>
              </li>
            ) : (
              ""
            )}

            <li>
              <div className="add-prop">
                {isLoggedIn ? (
                  // <button
                  //   type="button"
                  //   className="btn button "
                  //   style={{
                  //     backgroundColor: "#84D7E8",
                  //     borderRadius: "25px",
                  //     fontWeight: "700",
                  //   }}
                  //   onClick={() => navigate("/login")}
                  //   // onClick={() => setOpenModal(true)}
                  // >
                  //   Logout
                  // </button>
                  ""
                ) : (
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
                  >
                    Login
                  </button>
                )}
              </div>
            </li>
            <li>
              {/* <div className="add-prop">
                <button
                  type="button"
                  className="btn  "
                  style={{
                    backgroundColor: "#7ED7CF",
                    borderRadius: "25px",
                    fontWeight: "500",
                    width: 160,
                  }}
                  onClick={() => navigate("/login")}
                >
                  Post Property
                </button>
              </div> */}
            </li>
          </ul>

          <ul
            className="web_elements list2"
            // style={{
            //   color: "black",
            //   fontWeight: 500,
            //   fontSize: "14px",
            //   marginRight: "-10px",
            // }}
          >
            {/* <li>{isLoggedIn ? <a href="/">Home</a> : <a href="/">Home</a>}</li> */}

            <li>
              <a>Rent Pay</a>
              <ul className="dropdown2">
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
              <a>Creditluk</a>
              <ul className="dropdown2">
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
              <a>Near U</a>
            </li>
            {/* <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li> */}
            <li>
              <a>More</a>
              <ul className="dropdown1">
                <li>
                  <a href="#" title="">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Auctions
                  </a>
                </li>
                <li>
                  <a className="invite-new" href="#" title="">
                    Fo Business Owners
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Fo Builders
                  </a>
                </li>
                <li>
                  <a href="" title="">
                    For Poperty Consultants
                  </a>
                </li>
                <li>
                  <a href="" title="">
                    Notifications
                  </a>
                </li>
                <li>
                  <a href="" title="">
                    Insights
                  </a>
                </li>
                <li>
                  <a href="" title="">
                    Sales Support
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
