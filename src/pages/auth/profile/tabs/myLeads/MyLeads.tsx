import { useState } from "react";
// import "../MyGallery/MyGallery.css";
import ChatCard from "./MyChartCard";



const MyLeads = () => {
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
          <div className="col-1 leftContainer">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeTab === "property" ? "active" : ""
                  }`}
                  aria-current="page"
                  href="#"
                  onClick={() => handleTabClick("property")}
                  style={{ marginLeft: -35 }}
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
                  style={{ marginLeft: -35 }}
                >
                  Investment
                </a>
              </li>
            </ul>
          </div>
          <div className="col-11">
            {activeTab === "property" ? (
              <div>
                <ChatCard />
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

export default MyLeads;
