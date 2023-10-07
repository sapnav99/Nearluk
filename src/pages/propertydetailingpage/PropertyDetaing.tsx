import React from "react";
import "./proprtydetails.css";
import Chip from "@mui/material/Chip";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import PublicIcon from "@mui/icons-material/Public";
import LocationOnIcon from "@mui/icons-material/LocationOn";

type Props = {};
export default function PropertyDetailinng({}: Props) {
  return (
    <div className="gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div id="page-contents" className="row merged20">
              <div className="col-lg-9">
                <div className="main-wraper">
                  <div className="row">
                    <div className="col-lg-5 col-md-5 col-sm-5">
                      <div className="full-book">
                        <div className="propdetail__image_container">
                          <div className="row">
                            <div className="col-12 p-0">
                              <img
                                src="/images/propertyimages/propertyimage_01.png"
                                alt="property-image"
                              />
                            </div>
                            <div className="col-4 p-1">
                              <img
                                src="/images/propertyimages/propertyimage_01.png"
                                alt=""
                              />
                            </div>
                            <div className="col-4 p-1">
                              <img
                                src="/images/propertyimages/propertyimage_02.jpg"
                                alt=""
                              />
                            </div>
                            <div className="col-4 p-1">
                              <img
                                src="/images/propertyimages/propertyimage_01.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="prod-stat">
                          <ul>
                            <li>
                              <span>Visited:</span> 130
                            </li>
                            <li>
                              <span>Downloads:</span> 1.3k
                            </li>
                            <li>
                              <span>Availablity:</span> Available
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-7">
                      <div className="prod-detail">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="property__icon_cards_container">
                              <div className="property__header">
                                <div className="property__header_right">
                                  <Chip
                                    label="Newly Constructed"
                                    variant="outlined"
                                    style={{
                                      margin: "4px",
                                    }}
                                    classes={{
                                      label: "customLabelColor",
                                      outlined: "customNoBorderRadius",
                                      outlinedPrimary: "customBorderColor",
                                    }}
                                  />
                                  <Chip
                                    label="Owner Property"
                                    variant="outlined"
                                    style={{
                                      margin: "4px",
                                    }}
                                    classes={{
                                      label: "customLabelColor",
                                      outlined: "customNoBorderRadius",
                                      outlinedPrimary: "customBorderColor",
                                    }}
                                  />
                                  <Chip
                                    label="Ready to Move"
                                    variant="outlined"
                                    style={{
                                      margin: "4px",
                                    }}
                                    classes={{
                                      label: "customLabelColor",
                                      outlined: "customNoBorderRadius",
                                      outlinedPrimary: "customBorderColor",
                                    }}
                                  />
                                  <Chip
                                    label="Residential"
                                    variant="outlined"
                                    style={{
                                      margin: "4px",
                                    }}
                                    classes={{
                                      label: "customLabelColor",
                                      outlined: "customNoBorderRadius",
                                      outlinedPrimary: "customBorderColor",
                                    }}
                                  />
                                </div>
                                <div className="property__header__left">
                                  <button className="property__social__buttons">
                                    Share{" "}
                                    <ShareIcon style={{ color: "none" }} />
                                  </button>
                                  <button className="property__social__buttons">
                                    Favourite <FavoriteBorderIcon />
                                  </button>
                                </div>
                              </div>
                              <div className="property__namimg_container">
                                <div className="property__naming_rigth">
                                  <h1 className="property__name">
                                    Rosewood Villa
                                  </h1>
                                  <div className="property__naming_contacted">
                                    <p>
                                      32 People Contacted Owner for this
                                      Property
                                    </p>
                                  </div>
                                  <p className="property__naming_address">
                                    <LocationOnIcon />
                                    40, Srinagar Colony Main Rd, Sagar Society,
                                    Srinagar Colony Hyderabad, Telangana, INDIA.
                                  </p>
                                  <div>
                                    <PublicIcon />
                                    <p>Posted On: 17-09-2023</p>
                                  </div>
                                </div>
                                <div className="property__naming_left">
                                  <div className="property__pricing">
                                    <h4> &#8377; 29 Crore</h4>
                                    <p>Negotiable</p>
                                  </div>
                                </div>
                              </div>
                              <div className="property__user_profile_container">
                                <div className="property__avtar_container">
                                  <div className="property__avtar">
                                    <Avatar
                                      alt="Cindy Baker"
                                      src="images/elements/avatar-3.jpg"
                                    />
                                  </div>
                                  <div className="owner__container">
                                    <PersonIcon />
                                    <span className="owner">Owner</span>
                                    <h6>Mayank Takur</h6>
                                    <p>Member Since 2006</p>
                                  </div>
                                </div>
                                <div></div>
                                <div></div>
                              </div>
                            </div>

                            <div className="property__buttons>">
                              <button className=" book__site_button">
                                <img
                                  src="/images/elements/calendar_img.png"
                                  alt="calendar"
                                />{" "}
                                Book Site Visit
                              </button>
                              <button className="request__button">
                                {" "}
                                <img
                                  src="/images/elements/phone-icon.png"
                                  alt=""
                                />{" "}
                                Request Callback
                              </button>
                              {/* <button className="tag__button">
                                {""}
                                <img src="/images/group-1.png" alt="" />
                                {""}
                                Tag for Investment Sharing
                                {""}
                                <img src="images/elements/i.png" alt="" />
                              </button> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="book-description">
 <p>
 Lorem ipsum dolor sit amet, consectetuer adipiscing
 elit, sed diam nonummy nibh euismod tincidunt ut laoreet
 dolore magna aliquam erat volutpat. Ut wisi enim ad
 minim veniam, quis nostrud exerci tation ullamcorper
 </p>
 </div> */}
                    {/* <div className="comment-area product mt-5">
 <h4 className="comment-title">03 Feedback</h4>
 <ul className="comments">
 <li>
 <div className="comment-box">
 <div className="commenter-photo">
 <img src="images/resources/commenter-1.jpg" />
 </div>
 <div className="commenter-meta">
 <div className="comment-titles">
 <h6>willimes doe</h6>
 <span>12 june 2017</span>
 <ins>
 <i className="icofont-star" /> 4.5
 </ins>
 </div>
 <p>
 Quis autem velum iure reprehe nderit. Lorem
 ipsum dolor sit amet adipiscing egetmassa
 pulvinar eu aliquet nibh dapibus.
 </p>
 </div>
 </div>
 </li>
 <li>
 <div className="comment-box">
 <div className="commenter-photo">
 <img src="images/resources/commenter-2.jpg" />
 </div>
 <div className="commenter-meta">
 <div className="comment-titles">
 <h6>Qlark Jack</h6>
 <span>22 july 2017</span>
 <ins>
 <i className="icofont-star" /> 4.5
 </ins>
 </div>
 <p>
 Quis autem velum iure reprehe nderit. Lorem
 ipsum dolor sit amet adipiscing egetmassa
 pulvinar eu aliquet nibh dapibus.
 </p>
 </div>
 </div>
 </li>
 <li>
 <div className="comment-box">
 <div className="commenter-photo">
 <img src="images/resources/commenter-3.jpg" />
 </div>
 <div className="commenter-meta">
 <div className="comment-titles">
 <h6>Olivia Take</h6>
 <span>15 jan 2016</span>
 <ins>
 <i className="icofont-star" /> 4.5
 </ins>
 </div>
 <p>
 Quis autem velum iure reprehe nderit. Lorem
 ipsum dolor sit amet adipiscing egetmassa
 pulvinar eu aliquet nibh dapibus.
 </p>
 </div>
 </div>
 </li>
 </ul>
 <div className="add-comment">
 <span>Give Your Rating</span>
 <ul className="stars">
 <li>
 <i className="icofont-star" />
 </li>
 <li>
 <i className="icofont-star" />
 </li>
 <li>
 <i className="icofont-star" />
 </li>
 <li>
 <i className="icofont-star" />
 </li>
 <li>
 <i className="icofont-star" />
 </li>
 </ul>
 <form method="post" className="c-form">
 <input type="text" placeholder="Name" />
 <input type="text" placeholder="Email" />
 <textarea
 rows={4}
 placeholder="Write Message"
 defaultValue={""}
 />
 <button className="main-btn" type="submit">
 Add Review
 </button>
 </form>
 </div>
 </div> */}
                  </div>
                  {/* <div className="main-wraper">
 <h4 className="main-title">
 Related Books{" "}
 <a className="view-all" href="#">
 view all
 </a>
 </h4>
 <div className="books-caro">
 <div className="book-post">
 <figure>
 <a href="book-detail.html">
 <img src="images/resources/book1.jpg" />
 </a>
 </figure>
 <a href="book-detail.html">Html5 Brick Breaker</a>
 </div>
 <div className="book-post">
 <figure>
 <a href="book-detail.html">
 <img src="images/resources/book3.jpg" />
 </a>
 </figure>
 <a href="book-detail.html">Python Tricks</a>
 </div>
 <div className="book-post">
 <figure>
 <a href="book-detail.html">
 <img src="images/resources/book5.jpg" />
 </a>
 </figure>
 <a href="book-detail.html">Technology Wants</a>
 </div>
 <div className="book-post">
 <figure>
 <a href="book-detail.html">
 <img src="images/resources/book2.jpg" />
 </a>
 </figure>
 <a href="book-detail.html">The Aesthetic Ideology</a>
 </div>
 <div className="book-post">
 <figure>
 <a href="book-detail.html">
 <img src="images/resources/book4.jpg" />
 </a>
 </figure>
 <a href="book-detail.html">Holy Bible Old</a>
 </div>
 </div>
 </div> */}
                  {/* <PropertyDetailCard />
                  <PropertyDetailOverviewCard />
                  <PropertyDetailAminitiesCard />
                  <PropertyDetailFurnishingCard />
                  <PropertyNearbyCard /> */}
                  <div className="mt-5">
                    <div className="card property__detail_card">
                      <div className="card-body">
                        <h5 className="card-titel">Details</h5>
                        <div className="mt-3">
                          <img src="/images/elements/area_icon.png" alt="" />
                          <span className="detail__area">Area</span>
                        </div>
                        <div className="card__top">
                          <div className="card__top_left">
                            <h6>Built Area: 1500sqft</h6>
                            <h6>Gated Community: Yes</h6>
                          </div>
                          <div className="card__top_right">
                            <h6>Carpet Area: 1200sqft</h6>
                            <h6>Undevided Share: 40sqft</h6>
                            <h6>Property Age: Newly Constructed</h6>
                          </div>
                        </div>
                        <hr />
                        <div className="mt-3">
                          <img src="images/elements/price-tag-1.png" alt="" />
                          <span className="detail__area">Pricing</span>
                        </div>
                        <div className="card__bottom">
                          <div className="card__top_left">
                            <h6>Expected Price: 30Lacs</h6>
                            <h6>Brokerage: No</h6>
                          </div>
                          <div className="card__top_right">
                            <h6>Maintenance Charges : Rs.1500/- P/M</h6>
                            <h6>Govt Charges & Tax Included : Yes</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="card property__cards">
                      <div className="card-body">
                        <h5 className="card-titel">Over View</h5>
                        <div className="property__card_contents">
                          <div>
                            <img
                              src="images/elements/double-bed-8.png"
                              alt=""
                            />
                            <span>2 Bed Rooms</span>
                          </div>
                          <div>
                            <img src="images/elements/balcony-1.png" alt="" />
                            <span>2 Balconies</span>
                          </div>
                          <div>
                            <img src="images/elements/compass-1.png" alt="" />
                            <span>East Facing</span>
                          </div>
                          <div>
                            <img src="images/elements/building-1.png" alt="" />
                            <span>3rd Floor Out of 5 Floors</span>
                          </div>
                          <div>
                            <img src="images/elements/pooja-1.png" alt="" />
                            <span>Pooja Room</span>
                          </div>
                          <div>
                            <img src="images/elements/bathtub-1.png" alt="" />
                            <span>3 Bath Rooms</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="card property__cards">
                      <div className="card-body">
                        <h5 className="card-titel">Amenities</h5>
                        <div className="property__card_contents">
                          <div>
                            <img src="images/elements/parking-1.png" alt="" />
                            <span>1 Car parking</span>
                          </div>
                          <div>
                            <img src="images/elements/elevator-1.png" alt="" />
                            <span>Lift</span>
                          </div>
                          <div>
                            <img src="images/elements/generator-1.png" alt="" />
                            <span>Power Backup</span>
                          </div>
                          <div>
                            <img
                              src="images/elements/water-control-1.png"
                              alt=""
                            />
                            <span>Manjeera Water</span>
                          </div>
                          <div>
                            <img src="images/elements/ground-1.png" alt="" />
                            <span>Ground Water</span>
                          </div>
                          <div>
                            <img
                              src="images/elements/surveillance-1.png"
                              alt=""
                            />
                            <span>CCTV surveillance</span>
                          </div>
                          <div>
                            <img src="images/elements/guard-1.png" alt="" />
                            <span>24/7 Security</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="card property__cards">
                      <div className="card-body">
                        <h5 className="card-titel">Furnishing</h5>
                        <div className="property__card_contents">
                          <div>
                            <img src="/images/elements/lightbulb-1.png" alt="" />
                            <span>12 Lights</span>
                          </div>
                          <div>
                            <img
                              src="/images/elements/ceiling-fan-1.png"
                              alt=""
                            />
                            <span>4 Fans</span>
                          </div>
                          <div>
                            <img
                              src="/images/elements/air-conditioner-1.png"
                              alt=""
                            />
                            <span>AC</span>
                          </div>
                          <div>
                            <img src="/images/elements/kitchen-1.png" alt="" />
                            <span>Modular Kitchen</span>
                          </div>
                          <div>
                            <img src="/images/elements/ground-1.png" alt="" />
                            <span>Ground Water</span>
                          </div>
                          <div>
                            <img
                              src="/images/elements/surveillance-1.png"
                              alt=""
                            />
                            <span>CCTV surveillance</span>
                          </div>
                          <div>
                            <img src="images/elements/guard-1.png" alt="" />
                            <span>24/7 Security</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <aside className="sidebar static right">
                  <div className="widget">
                    <h4 className="widget-title">Popular Books</h4>
                    <div className="popular-book">
                      <figure>
                        <img src="images/resources/book10.jpg" />
                      </figure>
                      <div className="book-about">
                        <h6>
                          <a href="#">Vu.js 2 Basics</a>
                        </h6>
                        <span>Richard Ali</span>
                        <a href="#" title="Book Mark">
                          <i>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-bookmark"
                            >
                              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                            </svg>
                          </i>
                        </a>
                      </div>
                    </div>
                    <div className="popular-book">
                      <figure>
                        <img src="images/resources/book9.jpg" />
                      </figure>
                      <div className="book-about">
                        <h6>
                          <a href="#">Css3 for Bigners</a>
                        </h6>
                        <span>Richard Ali</span>
                        <a href="#" title="Book Mark">
                          <i>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-bookmark"
                            >
                              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                            </svg>
                          </i>
                        </a>
                      </div>
                    </div>
                    <div className="popular-book">
                      <figure>
                        <img src="images/resources/book5.jpg" />
                      </figure>
                      <div className="book-about">
                        <h6>
                          <a href="#">Technology Wants 2020</a>
                        </h6>
                        <span>Richard Ali</span>
                        <a href="#" title="Book Mark">
                          <i>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-bookmark"
                            >
                              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                            </svg>
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="widget">
                    <h4 className="widget-title">Ask Research Question?</h4>
                    <div className="ask-question">
                      <i className="icofont-question-circle" />
                      <h6>
                        Ask questions in Q&amp;A to get help from experts in
                        your field.
                      </h6>
                      <a className="ask-qst" href="#">
                        Ask a question
                      </a>
                    </div>
                  </div>
                  <div className="widget">
                    <h4 className="widget-title">
                      Explor Events{" "}
                      <a className="see-all" href="#">
                        See All
                      </a>
                    </h4>
                    <div className="rec-events bg-purple">
                      <i className="icofont-gift" />
                      <h6>
                        <a>BZ University good night event in columbia</a>
                      </h6>
                      <img src="images/clock.png" />
                    </div>
                    <div className="rec-events bg-blue">
                      <i className="icofont-microphone" />
                      <h6>
                        <a>The 3rd International Conference 2020</a>
                      </h6>
                      <img src="images/clock.png" />
                    </div>
                  </div>
                  <div className="widget stick-widget">
                    <h4 className="widget-title">Who's follownig</h4>
                    <ul className="followers">
                      <li>
                        <figure>
                          <img src="images/resources/friend-avatar.jpg" />
                        </figure>
                        <div className="friend-meta">
                          <h4>
                            <a href="time-line.html">Kelly Bill</a>
                            <span>Dept colleague</span>
                          </h4>
                          <a className="underline" href="#">
                            Follow
                          </a>
                        </div>
                      </li>
                      <li>
                        <figure>
                          <img src="images/resources/friend-avatar2.jpg" />
                        </figure>
                        <div className="friend-meta">
                          <h4>
                            <a href="time-line.html">Issabel</a>
                            <span>Dept colleague</span>
                          </h4>
                          <a className="underline" href="#">
                            Follow
                          </a>
                        </div>
                      </li>
                      <li>
                        <figure>
                          <img src="images/resources/friend-avatar3.jpg" />
                        </figure>
                        <div className="friend-meta">
                          <h4>
                            <a href="time-line.html">Andrew</a>
                            <span>Dept colleague</span>
                          </h4>
                          <a className="underline" href="#">
                            Follow
                          </a>
                        </div>
                      </li>
                      <li>
                        <figure>
                          <img src="images/resources/friend-avatar4.jpg" />
                        </figure>
                        <div className="friend-meta">
                          <h4>
                            <a href="time-line.html">Sophia</a>
                            <span>Dept colleague</span>
                          </h4>
                          <a className="underline" href="#">
                            Follow
                          </a>
                        </div>
                      </li>
                      <li>
                        <figure>
                          <img src="images/resources/friend-avatar5.jpg" />
                        </figure>
                        <div className="friend-meta">
                          <h4>
                            <a href="time-line.html">Allen</a>
                            <span>Dept colleague</span>
                          </h4>
                          <a className="underline" href="#">
                            Follow
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
