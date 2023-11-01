
import { useNavigate } from "react-router-dom";

import locationSymbol from "../../assets/images/Location.png";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import "./Header.css";

const HeaderBeforeLogin = () => {
  const navigate = useNavigate();
  

  // const [latitude, setLatitude] = useState<number | null>(null);
  // const [longitude, setLongitude] = useState<number | null>(null);

  // useEffect(() => {
  //   if ("geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         setLatitude(position.coords.latitude);
  //         setLongitude(position.coords.longitude);
  //       },
  //       (error) => {
  //         console.error("Error getting location:", error);
  //       }
  //     );
  //   } else {
  //     console.error("Geolocation is not supported by your browser.");
  //   }
  // }, []);

  
  return (
    <>
      
      <div className="responsive-header">
        <div className="logo res">
          <img
            src="images/main-logo-pic.png"
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
                onClick={() => navigate("/login")}
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
                {/* <div >
                  {latitude !== null && longitude !== null ? (
                    <p>
                      Your current location is: {latitude}, {longitude}
                    </p>
                  ) : (
                    <p>Loading location...</p>
                  )}
                </div> */}
                <input
                  type="text"
                  className="nl-searchlocation-input"
                  placeholder="Hyderabad"
                />
              </div>
            </div>
          </div>
          <div className="sidemenu" style={{ float: "right", marginRight:"10px", marginLeft:"10px" }}>
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
            
            <BiSupport
              style={{ marginLeft: "10px", height: "20px", width: "20px" }}
            />

            <li>
              <div className="add-prop">
                
                  <div>
                    <button
                      type="button"
                      className="btn  "
                      style={{
                        backgroundColor: "rgba(63, 219, 209, 1)",
                        borderRadius: "8px",
                        fontWeight: "600",
                        fontSize: "14px",
                        marginRight: "10px",
                        width: "118px",
                      }}
                      onClick={() => navigate("/login")}
                    >
                      Post Property
                    </button>
                    <button
                      type="button"
                      className="btn "
                      style={{
                        backgroundColor: "rgba(63, 219, 209, 1)",
                        borderRadius: "8px",
                        color: "black",
                        fontWeight: "600",
                        fontSize: "14px",
                        width: "121px",
                      }}
                      onClick={() => navigate("/login")}
                    >
                      Login/Signup
                    </button>
                  </div>
              
              </div>
            </li>
          </ul>
         
          <ul className="web_elements list2">
            <li > <a href="/">Home</a></li>          
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
                      <a href="/comingsoon">Rent</a>
                    </li>
                    <li>
                      <a href="/comingsoon">Maintanance</a>
                    </li>
                    <li>
                      <a href="/comingsoon">Advance Amount</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>
                    Creditluk <BsChevronRight />
                  </a>
                  <ul className="dropdown3">
                    <li>
                      <a href="/comingsoon">Loans</a>
                    </li>
                    <li>
                      <a href="/comingsoon">Loan Calculator</a>
                    </li>
                    <li>
                      <a href="/comingsoon">CIBIL</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/comingsoon">Insights</a>
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
                  <a href="/comingsoon">For Business Owners</a>
                </li>
                <li>
                  <a href="/comingsoon">For Builders </a>
                </li>
                <li>
                  <a href="/comingsoon">For Property Consultants</a>
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

            <li>
              <a 
                style={{ paddingRight: "6px" }}
                href="/comingsoon"
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

export default HeaderBeforeLogin;
