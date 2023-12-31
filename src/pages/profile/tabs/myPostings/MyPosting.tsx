import React, { useState } from "react";
import "../MyGallery/MyGallery.css";
import Property from "./MyPostProperty";

const Posting:React.FC = () => {
  const [activeTab, setActiveTab] = useState("property");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
   
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-2  col-sm-8 leftContainer">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeTab === "property" ? "active" : ""
                  }`}
                  aria-current="page"
                  href="#"
                  onClick={() => handleTabClick("property")}
                >
                  Property
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeTab === "investment" ? "active" : ""
                  }`}
                  aria-current="page"
                  href="#"
                  onClick={() => handleTabClick("investment")}
                >
                  Investment
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-10 col-sm-12">
            {activeTab === "property" ? (
              <div>
                <Property />
              </div>
            ) : (
              <div>investment</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posting;
