import React, { useState } from "react";
import "../MyGallery/MyGallery.css";
import "./MyLead.css";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space, Typography } from "antd";
type Props = {};

const ChatCard = (props: Props) => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Item 1",
    },
    {
      key: "2",
      label: "Item 2",
    },
    {
      key: "3",
      label: "Item 3",
    },
  ];
  const propertyArray = Array.from({ length: 10 });
  const [activeTab, setActiveTab] = useState("property");
  const [activeSecondTab, setActiveSecondTab] = useState("may");
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setActiveSecondTab(tab);
  };

  return (
    <div>
      <div className="leftContainer">
        <ul className="nav ">
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === "rent" ? "active" : ""}`}
              aria-current="page"
              href="#"
              onClick={() => handleTabClick("rent")}
            >
              Rent
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === "sell" ? "active" : ""}`}
              href="#"
              onClick={() => handleTabClick("sell")}
            >
              Sell
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === "sharing" ? "active" : ""}`}
              href="#"
              onClick={() => handleTabClick("sharing")}
            >
              Sharing
            </a>
          </li>
        </ul>
      </div>
      <div>
        {activeTab === "rent" ? (
          <div>
            <div className="col-lg-12 rightContainer">
              <div className="main-wraper">
                <div className="blog-posts">
                  <ul className="nav nav-tabs ">
                    <li className="nav-item">
                      <a
                        className={`nav-link ${
                          activeSecondTab === "may" ? "active" : ""
                        }`}
                        aria-current="page"
                        href="#"
                        onClick={() => setActiveSecondTab("may")}
                      >
                        May
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link ${
                          activeSecondTab === "april" ? "active" : ""
                        }`}
                        href="#"
                        onClick={() => setActiveSecondTab("april")}
                      >
                        April
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link ${
                          activeSecondTab === "march" ? "active" : ""
                        }`}
                        href="#"
                        onClick={() => setActiveSecondTab("march")}
                      >
                        March
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link ${
                          activeSecondTab === "feb" ? "active" : ""
                        }`}
                        href="#"
                        onClick={() => setActiveSecondTab("feb")}
                      >
                        February
                      </a>
                    </li>
                  </ul>
                </div>
                <div style={{ display: "flex", marginTop: -30 }}>
                  <input
                    placeholder="Search Responses by"
                    className="col-9"
                    style={{
                      backgroundColor: "#EAEAEA",
                      marginRight: 5,
                      border: "none",
                    }}
                  />
                  <div className="col-3" style={{ backgroundColor: "#EAEAEA" }}>
                    <Dropdown
                      menu={{
                        items,
                        selectable: true,
                        defaultSelectedKeys: ["3"],
                      }}
                    >
                      <Typography.Link>
                        <Space>
                          Filter Responses by
                          <DownOutlined />
                        </Space>
                      </Typography.Link>
                    </Dropdown>
                  </div>
                </div>
                {/* <div className="col-lg-6 col-sm-12"> */}
                {/* <h4 className="widget-title" style={{ color: "gray" }}>
                    Recent Contacts
                  </h4> */}
                {/* <div
                    style={{
                      boxShadow: "0 10px 30px 0px rgb(0 0 0 / 6%)",
                      height: 85,
                      paddingTop: 15,
                      marginBottom: 20,
                    }}
                  >
                    <div className="widget stick-widget">
                      <ul className="followers">
                        <li style={{ display: "flex" }}>
                          <figure>
                            <img
                              alt=""
                              src="images/resources/friend-avatar.jpg"
                            />
                          </figure>
                          <div className="friend-meta">
                            <h4>
                              <a title="" href="time-line.html">
                                Shahi Abbas <span>(An individual)</span>
                              </a>
                              <label>Contact : +91-1234567890</label>
                              <label>Email: xyz@gmial.com</label>
                              <label></label>
                              <label>Interested in: Apartment</label>
                              <label>Property id: ABC23346</label>
                              <label>Status: Contacted, Closed</label>
                              <label>Planning to buy within: 1 Month</label>
                            </h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        ) : null}

        {activeTab === "sell" ? <div> Sell tab</div> : null}
        {activeTab === "sharing" ? <div> Sharing tab</div> : null}
      </div>
    </div>
  );
};

export default ChatCard;
