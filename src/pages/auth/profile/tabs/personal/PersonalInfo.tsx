import React from "react";
import "./PersonalInfo.css";
import Recent from "./Recent";
import email from "../../../../../assets/images/email 1.png";
import facebook from "../../../../../assets/images/facebook 1.png";
import instagram from "../../../../../assets/images/instagram 1.png";
import linkedin from "../../../../../assets/images/linkedin 1.png";
import location from "../../../../../assets/images/location 1.png";
import check from "../../../../../assets/images/Mask group.png";
import edit from "../../../../../assets/images/Mode edit.png";
import phone from "../../../../../assets/images/phone-call 1.png";
import twitter from "../../../../../assets/images/twitter 1.png";
import youtube from "../../../../../assets/images/youtube 1.png";


const PersonalInfo:React.FC = () => {
  return (
    <div>
      <label>Contact Information</label>
      <div className="category-inner">
        <ul className="category-inner-card">
          <div className="category-card">
            <img src={phone} alt="" className="icon" />
            <div className="info">
              <label style={{ color: "gray", paddingTop: "10px" }}>
                Mobile Number: <span>+91-1234567890</span>
              </label>
            </div>
            {/* <img src={edit} alt="" className="edit-icon" /> */}
          </div>
          <div className="category-card">
            <img src={email} alt="" className="icon" />
            <div className="info">
              <label style={{ color: "gray", paddingTop: "10px" }}>
                Email: <span>+91-1234567890</span>
              </label>
            </div>

            {/* <img src={edit} alt="" className="edit-icon" /> */}
          </div>
          <div className="category-card">
            <img src={location} alt="" className="icon" />
            <div className="info">
              <label style={{ color: "gray", paddingTop: "10px" }}>
                Location: <span>+91-1234567890</span>
              </label>
            </div>
            <img src={edit} alt="" className="edit-icon" />
          </div>
          <div className="category-card">
            <div className="info">
              <label style={{ color: "gray", paddingLeft: "20px" }}>
                Aadhaar No.: <span>+91-1234567890</span>
              </label>
            </div>

            <img
              src={check}
              className="check-icon"
              style={{ paddingLeft: "60px" }}
            />
          </div>
          <div className="category-card">
            <div className="info">
              <label style={{ color: "gray", paddingLeft: "20px" }}>
                Pan No.: <span>+91-1234567890</span>
              </label>
            </div>
            <img src={check} className="check-icon" />
          </div>
        </ul>
        {/* Social links */}
        <ul className="category-inner-card">
          <div className="category-card">
            <img src={facebook} alt="" className="icon" />
            <div className="info">
              <label style={{ color: "gray", paddingTop: "10px" }}>
                Facebook Id: <span>xyz@gmail.com</span>
              </label>
            </div>

            <img src={edit} alt="" className="edit-icon" />
          </div>
          <div className="category-card">
            <img src={instagram} alt="" className="icon" />
            <div className="info">
              <label style={{ color: "gray", paddingTop: "10px" }}>
                Insta Id: <span>xyz@gmail.com</span>
              </label>
            </div>

            <img src={edit} alt="" className="edit-icon" />
          </div>
          <div className="category-card">
            <img src={twitter} alt="" className="icon" />
            <div className="info">
              <label style={{ color: "gray", paddingTop: "10px" }}>
                Twitter Id: <span>xyz@gmail.com</span>
              </label>
            </div>
            <img src={edit} alt="" className="edit-icon" />
          </div>
          <div className="category-card">
            <img src={linkedin} alt="" className="icon" />
            <div className="info">
              <label style={{ color: "gray", paddingTop: "10px" }}>
                LinkedIn Id: <span>xyz@gmail.com</span>
              </label>
            </div>
            <img src={edit} alt="" className="edit-icon" />
          </div>
          <div className="category-card">
            <img src={youtube} alt="" className="icon" />
            <div className="info">
              <label style={{ color: "gray", paddingTop: "10px" }}>
                Youtube Channel: <span>abc</span>
              </label>
            </div>
            <img src={edit} alt="" className="edit-icon" />
          </div>
        </ul>
      </div>
      <Recent />
    </div>
  );
};

export default PersonalInfo;
