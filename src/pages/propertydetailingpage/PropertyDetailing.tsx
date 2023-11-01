import { useEffect, useState } from "react";
import "./proprtydetails.css";
import Chip from "@mui/material/Chip";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import useExternalScripts from "../../hooks/useExternalScripts";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allUserPropDetailsActions } from "./redux/action";
import { fromateNumber } from "./PropertyHelper";
import moment from "moment";
import { AiOutlineGlobal } from "react-icons/ai";
import Maps from "../../components/Maps/Maps";
import { ThreeCircles } from "react-loader-spinner";
import ImageGalleryModal from "../../components/ImageGalleryModal/ImageGalleryModal";

type latlngLiteral = google.maps.LatLngLiteral;
type Props = {};
export default function PropertyDetaing({}: Props) {
  const dispatch = useDispatch();
  const params = useParams();
  // useExternalScripts({
  //   urls: [
  //     "js/script.js",
  //     "./css/main.min.css",
  //     "./css/style.css",
  //     "./css/color.css",
  //     "./css/responsive.css",
  //   ],
  // });
  const [openModal, setOpenModal] = useState<boolean>(false);
  const userdata = useSelector((state: any) => state?.loginReducer);

  useEffect(() => {
    dispatch(
      allUserPropDetailsActions.fecthPropDetails({
        property: params.id,
        user: userdata?.user?.user?._id,
      })
    );
  }, [params.id]);

  const loader = useSelector(
    (state: any) => state?.userPropDetailsReducer?.userPropLoader
  );

  const data = useSelector(
    (state: any) => state?.userPropDetailsReducer?.userProperty
  );

  // console.log("data",data)
  // if(data.property?.image_gallery){
  //   console.log("wanted data", data.property?.image_gallery)

  // }

  const propertyPosition: latlngLiteral = {
    lat: data?.location?.coordinates[0],
    lng: data?.location?.coordinates[1],
  };

  const formatedValue = fromateNumber(data?.property?.expected_price);
  const amenities = data?.property?.amenities;
  const furnishing = data?.property?.furnishing;

  if (loader)
    return (
      <div className="full-screen-loader">
        <ThreeCircles
          height="50"
          width="100"
          color="#4fa94d"
          wrapperStyle={{
            display: "flex",
            alignItem: "center",
            justifyContent: "center",
          }}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </div>
    );

  // const groupedData = data.property?.image_gallery?.reduce(
  //   (result: any, item: any) => {
  //     const category = item.category;
  //     if (!result[category]) {
  //       result[category] = [];
  //     }
  //     result[category].push(item);
  //     return result;
  //   },
  //   {}
  // );
  // console.log(groupedData);

  return (
    <>
      <ImageGalleryModal openModal={openModal} setOpenModal={setOpenModal} />
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
                                  src={
                                    data?.property?.feature_image ||
                                    (data?.property?.image_gallery &&
                                      data?.property?.image_gallery[0].serveruri)
                                  }
                                  alt="property-image"
                                  style={{
                                    objectFit: "cover",
                                    borderRadius: "5px",
                                  }}
                                />
                              </div>

                              {data?.property?.image_gallery &&
                                data?.property?.image_gallery
                                  .slice(0, 3)
                                  .map((item: any, i: number) => (
                                    <div className="col-4 p-0" key={item.id}>
                                      <div style={{ width: "100%" }}>
                                        <img
                                          src={item?.serveruri}
                                          alt=""
                                          style={{
                                            objectFit: "cover",
                                            borderRadius: "5px",
                                            padding: "2px",
                                            width: "100%",
                                          }}
                                          className={
                                            (i == 2 && "last__img") || ""
                                          }
                                          onClick={() => {
                                            if (i == 2) {
                                              setOpenModal(true);
                                            }
                                          }}
                                        />
                                        {i == 2 ? (
                                          <div className="img__text_centered">
                                            {
                                              data.property?.image_gallery
                                                ?.length
                                            }{" "}
                                            +
                                          </div>
                                        ) : null}
                                      </div>
                                    </div>
                                  ))}
                            </div>
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
                                        borderRadius: "10px",
                                        height: "27px",
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
                                        borderRadius: "10px",
                                        height: "27px",
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
                                        borderRadius: "10px",
                                        height: "27px",
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
                                        borderRadius: "10px",
                                        height: "27px",
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
                                      {data?.property?.building_name}
                                    </h1>
                                    <div className="property__naming_contacted">
                                      <p>
                                        32 People Contacted Owner for this
                                        Property
                                      </p>
                                    </div>
                                    <div className="property__naming_address">
                                      <span>
                                        <LocationOnIcon />
                                      </span>
                                      <p>{data?.property?.locality}</p>
                                    </div>
                                  </div>
                                  <div className="property__naming_left">
                                    <div className="property__pricing">
                                      <h4> &#8377; {formatedValue}</h4>
                                      {data?.property?.negotiable ? (
                                        <p>Negotiable</p>
                                      ) : (
                                        <p>Fixed</p>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                <div className="property__user_profile_container">
                                  <div className="property__avtar_container">
                                    <div className="property__avtar">
                                      <Avatar
                                        alt="Cindy Baker"
                                        src="/images/elements/avatar-3.jpg"
                                      />
                                    </div>
                                    <div className="owner__container">
                                      <PersonIcon />
                                      <span className="owner">Owner</span>
                                      <h6>
                                        {data?.property_owner?.fname}{" "}
                                        {data?.property_owner?.lname}
                                      </h6>
                                      <p>
                                        Member Since{" "}
                                        {moment(
                                          data?.property_owner?.createdAt
                                        ).format("DD-MM-YYYY")}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="property__post_date">
                                    <AiOutlineGlobal
                                      color="#646262"
                                      size={18}
                                    />
                                    <span>
                                      Posted On:{" "}
                                      {moment(data?.property?.createdAt).format(
                                        "DD-MM-YYYY"
                                      )}
                                    </span>
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
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="card prop__detail_card">
                      <div className="card-body">
                        <h5 className="card-title">Details</h5>
                        <div className="prop__detail_top">
                          <h6>
                            {" "}
                            <img
                              src="/images/elements/area_icon.png"
                              alt=""
                            />{" "}
                            Area
                          </h6>
                          <div className="prop__detail_top_items">
                            <p>
                              Built Area: {data?.property?.builtup_area}{" "}
                              {data?.property?.builtup_units}
                            </p>
                            <p>
                              Carpet Area : {data?.property?.carpet_area}{" "}
                              {data?.property?.carpet_units}
                            </p>
                            <p>
                              Undivided Share :{" "}
                              {data?.property?.undivided_share}{" "}
                              {data?.property?.undivided_share_units}
                            </p>
                            <p>Property Age : {data?.property?.property_age}</p>
                            <p>
                              Gated Community :{" "}
                              {data?.property?.gated_community}
                            </p>
                          </div>
                        </div>
                        <hr />
                        <div className="prop__detail_top">
                          <h6>
                            {" "}
                            <img
                              src="/images/elements/price-tag.png"
                              alt=""
                            />{" "}
                            Pricing
                          </h6>
                          <div className="prop__detail_top_items">
                            <p>Expected Price : &#8377; {formatedValue}</p>
                            <p>
                              Maintenance Charges :{" "}
                              {data?.property?.maintainance_per_month}/- per
                              Month
                            </p>
                            <p>
                              Govt Charges & Tax Included :{" "}
                              {data?.property?.all_inclusive_price ? (
                                <span>Yes</span>
                              ) : (
                                <span>No</span>
                              )}
                            </p>
                            <p>Brokerage : No</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="card prop__overviw_card">
                      <div className="card-body">
                        <h6 className="card-title">Overview</h6>
                        <div className="prop__overview_container">
                          <div className="prop__overview_item">
                            <img
                              src="/images/elements/double-bed_icon.png"
                              alt=""
                            />{" "}
                            <span>Bed Room: {data?.property?.bhk}</span>
                          </div>
                          <div className="prop__overview_item">
                            <img
                              src="/images/elements/balcony_icon.png"
                              alt=""
                            />{" "}
                            <span>Balconies: {data?.property?.balconies}</span>
                          </div>
                          <div className="prop__overview_item">
                            <img
                              src="/images/elements/compass_icon.png"
                              alt=""
                            />{" "}
                            <span>{data?.property?.facing} Facing</span>
                          </div>
                          <div className="prop__overview_item">
                            <img
                              src="/images/elements/building_icon.png"
                              alt=""
                            />{" "}
                            <span>
                              {data?.property?.floor_no} Floor out of{" "}
                              {data?.property?.total_floors} Floors
                            </span>
                          </div>
                          <div className="prop__overview_item">
                            <img src="/images/elements/pooja_icon.png" alt="" />{" "}
                            <span>
                              Pooja Room: {data?.property?.pooja_rooms}
                            </span>
                          </div>
                          <div className="prop__overview_item">
                            <img
                              src="/images/elements/bathtub_icon.png"
                              alt=""
                            />{" "}
                            <span>Bathrooms: {data?.property?.bathrooms}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="card prop__overviw_card">
                      <div className="card-body">
                        <h6 className="card-title">Amenities</h6>
                        <div className="prop__overview_container">
                          {amenities?.map((item: any) => {
                            return (
                              <div
                                key={item.key}
                                className="prop__aminities_item"
                              >
                                <span>{item?.label}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="card prop__overviw_card">
                      <div className="card-body">
                        <h6 className="card-title">Furnishing</h6>
                        <div className="prop__overview_container">
                          {furnishing?.map((item: any) => (
                            <div>
                              <img
                                src="/images/elements/lightbulb_icon.png"
                                alt=""
                              />{" "}
                              <span>{item?.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="card property__cards">
                      <div className="nearby__card_wrapper">
                        <div className="card-boby">
                          <h5 className="card-title">Near By</h5>
                          <div className="row">
                            <div className="col-12">
                              {propertyPosition.lat && (
                                <Maps propertyPosition={propertyPosition} />
                              )}
                            </div>
                            <div className="col-12 mt-2">
                              <div className="card nearby__public_info_card">
                                <div className="nearby__public_info_card_carousel">
                                  <Chip
                                    label={
                                      <>
                                        {/* <img
                                        src="images/elements/train-1.png"
                                        alt=""
                                      /> */}
                                        Metro Station
                                      </>
                                    }
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
                                    label={
                                      <>
                                        {/* <img
                                        src="images/elements/bus 1.png"
                                        alt=""
                                      /> */}
                                        Bus Station
                                      </>
                                    }
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
                                    label={
                                      <>
                                        {/* <img
                                        src="images/elements/bus-2.png"
                                        alt=""
                                      /> */}
                                        Railway Station
                                      </>
                                    }
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
                                    label={
                                      <>
                                        {/* <img
                                        src="images/elements/bus-2.png"
                                        alt=""
                                      /> */}
                                        Hospitals
                                      </>
                                    }
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
                                    label={
                                      <>
                                        {/* <img
                                        src="images/elements/bus-2.png"
                                        alt=""
                                      /> */}
                                        Schools
                                      </>
                                    }
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
                                    label={
                                      <>
                                        {/* <img
                                        src="images/elements/bus-2.png"
                                        alt=""
                                      /> */}
                                        {""}Shopping
                                      </>
                                    }
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
                                <hr />
                                <div className="info_container">
                                  <div className="info">
                                    <h4>Ameerpet</h4>
                                    <h4>2.1km/6mints</h4>
                                  </div>
                                  <div className="info">
                                    <h4>Panjagutta</h4>
                                    <h4>5.1km/6mints</h4>
                                  </div>
                                  <div className="info">
                                    <h4>SR Nagar</h4>
                                    <h4>2km/2mints</h4>
                                  </div>
                                  <div className="info">
                                    <h4>Yousafguda</h4>
                                    <h4>1km/1mints</h4>
                                  </div>
                                  <div className="info">
                                    <h4>Irru Manzil</h4>
                                    <h4>2.1km/6mints</h4>
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
                <div className="col-lg-3">
                  <aside className="sidebar static right">
                    <div className="widget">
                      <h4 className="widget-title">Popular Books</h4>
                      <div className="popular-book">
                        <figure>
                          <img src="/images/resources/book10.jpg" />
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
                          <img src="/images/resources/book9.jpg" />
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
                          <img src="/images/resources/book5.jpg" />
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
                        <img src="/images/clock.png" />
                      </div>
                      <div className="rec-events bg-blue">
                        <i className="icofont-microphone" />
                        <h6>
                          <a>The 3rd International Conference 2020</a>
                        </h6>
                        <img src="/images/clock.png" />
                      </div>
                    </div>
                    <div className="widget stick-widget">
                      <h4 className="widget-title">Who's follownig</h4>
                      <ul className="followers">
                        <li>
                          <figure>
                            <img src="/images/resources/friend-avatar.jpg" />
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
                            <img src="/images/resources/friend-avatar2.jpg" />
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
                            <img src="/images/resources/friend-avatar3.jpg" />
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
                            <img src="/images/resources/friend-avatar4.jpg" />
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
                            <img src="/images/resources/friend-avatar5.jpg" />
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
    </>
  );
}