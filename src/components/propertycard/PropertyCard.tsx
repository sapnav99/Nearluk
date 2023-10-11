import moment from "moment";
// import { useNavigate } from "react-router-dom";
import {fromateNumber} from "../../pages/propertydetailingpage/PropertyHelper"
import './propertycard.css'

const PropertyCard = ({ property }: any) => {
  // const navigate = useNavigate();
  return (
    <div
      className="col-lg-6 col-md-6 col-sm-6"
      onClick={() => {
        const url = `/proprtydetail/${property._id}`;
        window.open(url, '_blank');
      }}
    >
      <div className="course">
        <figure>
          <img
            src={
              property?.property?.image_gallery[0]?.serveruri?.data ||
              property?.property?.image_gallery[0]?.serveruri
            }
            alt="property image"
            style={{
              height: 260,
            }}
          />
          <i className="icofont-book-mark" title="bookmark" />
          <em>Verified</em>
          <span className="rate-result">
            <i className="icofont-star" /> 4.5
          </span>
        </figure>
        <div className="course-meta">
          <div className="post-by">
            <figure>
              <em>
                <svg
                  style={{ verticalAlign: "middle" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width={15}
                  height={15}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#7fba00"
                    stroke="#7fba00"
                    d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"
                  />
                </svg>
              </em>
              <img alt="" src="images/resources/user7.jpg" />
            </figure>
            <div className="friend-name">
              <div className="more">
                <div className="more-post-optns">
                  <i className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-more-horizontal"
                    >
                      <circle cx={12} cy={12} r={1} />
                      <circle cx={19} cy={12} r={1} />
                      <circle cx={5} cy={12} r={1} />
                    </svg>
                  </i>
                  <ul>
                    <li>
                      <i className="icofont-pen-alt-1" />
                      Edit Post
                      <span>Edit This Post within a Hour</span>
                    </li>
                    <li>
                      <i className="icofont-ban" />
                      Hide Post
                      <span>Hide This Post</span>
                    </li>
                    <li>
                      <i className="icofont-ui-delete" />
                      Delete Post
                      <span>If inappropriate Post By Mistake</span>
                    </li>
                    <li>
                      <i className="icofont-flag" />
                      Report
                      <span>Inappropriate content</span>
                    </li>
                  </ul>
                </div>
              </div>
              <ins>
                <a title="verified" href="time-line.html">
                  {property?.property_owner?.fname}
                </a>
              </ins>
              <span>
                <i className="icofont-globe" /> published:
                {moment(property?.property?.createdAt).format("DD-MM-YYYY")}
              </span>
            </div>
          </div>
          <div className="prise row">
            <div className="col-lg-8">
              <h5 className="course-title">
                <a
                  // onClick={() => navigate("/proprtydetail")}
                  title="course-details"
                >
                  {property?.property?.building_name || "N/A"}
                </a>
              </h5>
              <div className="locality__truncate">
              <p
              
                // style={{
                //   fontSize: "11px",
                //   marginBottom: "0",
                //   lineHeight: "15px",
                // }}
              >
                {property?.property?.locality}
                
              </p>
              <p>{property?.property?.city}, {property?.property?.state}</p>
              </div>
              
            </div>
            <div className="col-lg-4 mt-2 ">
              <span>
                <b>
                  <span>&#8377;</span> {fromateNumber(property?.property?.expected_price)} 
                </b>
              </span>
            </div>
          </div>
          {/* <div className="course-info">
            <span className="lecturez">
              <i className="icofont-film" /> 20 Lectures
            </span>

            <span className="lecturez">
              <i className="icofont-film" /> car Parking
            </span>
          </div> */}
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
                <span title="follow" className="Follow">
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
                      className="feather feather-star"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </i>
                  <ins>5k</ins>
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
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                    </svg>
                  </i>
                  <ins>205</ins>
                </span>
              </li>
            </ul>
            {/* <a href="post-detail.html" title="" className="reply">
              Reply <i className="icofont-reply" />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
