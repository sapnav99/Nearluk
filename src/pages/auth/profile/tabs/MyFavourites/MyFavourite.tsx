import React, { useState } from "react";
// import "../MyGallery/MyGallery.css";
import PropertyFavourite from "./MyPropertyFavourite";
type Props = {};

const Favourite = (props: Props) => {
  const [activeTab, setActiveTab] = useState("property");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    // setSelectedAlbum(null);
    // setAlbumImages([]); // Clear album images when switching tabs
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-2 leftContainer">
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
          <div className="col-10">
            {activeTab === "property" ? (
              <div>
                <PropertyFavourite />
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

export default Favourite;
