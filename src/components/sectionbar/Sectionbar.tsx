
import { Link } from "react-router-dom";
import useExternalScripts from "../../hooks/useExternalScripts";
// import $ from "jquery"
	

export default function Sectionbar({}) {
  useExternalScripts({ urls: ["js/main.min.js", "js/script.js"] })
  // useEffect(() => {
  //   $(".page-caro").owlCarousel({
  //     loop: true,
  //     margin: 10,
  //     nav: true,
  //     responsive: {
  //       0: {
  //         items: 1,
  //       },
  //       600: {
  //         items: 3,
  //       },
  //       1000: {
  //         items: 5,
  //       },
  //     },
  //   });

  //   return () => {
  //     $(".page-caro").owlCarousel("destroy");
  //   };
  // }, []);

  return (
    <section>
      <div className="white-bg">
        <div className="container-fluid">
          <div className="menu-caro">
            <div className="row">
              {/* <div className="col-lg-2">
							<div className="sidemenu">
								<i>
									<svg id="side-menu"
									 xmlns="http://www.w3.org/2000/svg"
									 width="26"
									 height="26"
									 viewBox="0 0 24 24"
									 fill="none"
									 stroke="currentColor"
									 strokeWidth="2"
									 strokeLinecap="round"
									 strokeLinejoin="round"
									 className="feather feather-menu">
									<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></i>
							</div>
						</div> */}
              <div className="col-lg-8 m-auto">
                <div className="page-caro">
                  <div className="link-item">
                    <Link to="/" className="active" title="">
                      <i>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
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
                      <p>Home</p>
                    </Link>
                  </div>
                  <div className="link-item">
                    <Link to="/video">
                      <i className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-youtube"
                        >
                          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                        </svg>
                      </i>
                      <p>Videos</p>
                    </Link>
                  </div>
                  <div className="link-item">
                    <Link to="/courses">
                      <i className="">
                        <svg
                          className="feather feather-airplay"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                          height="24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
                          <polygon points="12 15 17 21 7 21 12 15" />
                        </svg>
                      </i>
                      <p>Courses</p>
                    </Link>
                  </div>
                  <div className="link-item">
                    <Link to="/books" title="">
                      <i className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-book"
                        >
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                        </svg>
                      </i>
                      <p>Books</p>
                    </Link>
                  </div>
                  <div className="link-item">
                    <Link to="/blog" title="">
                      <i className="">
                        <svg
                          className="feather feather-layout"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                          height="24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            ry="2"
                            rx="2"
                            height="18"
                            width="18"
                            y="3"
                            x="3"
                          />
                          <line y2="9" x2="21" y1="9" x1="3" />
                          <line y2="9" x2="9" y1="21" x1="9" />
                        </svg>
                      </i>
                      <p>Blog</p>
                    </Link>
                  </div>
                  <div className="link-item">
                    <Link to="/groups" title="">
                      <i className="">
                        <svg
                          className="feather feather-users"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                          height="24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle r="4" cy="7" cx="9" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </i>
                      <p>Groups</p>
                    </Link>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-2">
							<div className="user-inf">
								<div className="folowerz">Followers: 204</div>
								<ul className="stars">
									<li><i className="icofont-star"></i></li>
									<li><i className="icofont-star"></i></li>
									<li><i className="icofont-star"></i></li>
									<li><i className="icofont-star"></i></li>
									<li><i className="icofont-star"></i></li>
								</ul>
							</div>	
						</div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
