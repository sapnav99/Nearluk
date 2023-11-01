import {useState} from 'react'



export default function Tabs() {
    const [activeTab, setActiveTab] = useState("buy");

    const handleTabClick = (tabName: any) => {
      setActiveTab(tabName);
    };
  return (
    <div>  <div className="tabcontainer">
    <ul
      className={`nav  `}
      style={{ marginLeft: "55px", marginBottom: "-5px" }}
    >
      <li className="nav-item">
        <a
          className={`nav-link ${activeTab === "buy" ? "active" : ""}`}
          href="#"
          data-toggle="tab"
          onClick={() => handleTabClick("buy")}
          style={{
            backgroundColor:
              activeTab === "buy" ? "rgba(63, 219, 209, 1)" : "white",
            borderRadius: "5px 5px 0px 0px",
            marginRight: "5px",
            paddingTop:"2px",
            paddingLeft:"20px",
            paddingRight:"10px",
            width:"65px",
            fontWeight:"500",
          }}
        >
          Buy
        </a>
      </li>

      <li className="nav-item">
        <a
          className={`nav-link ${
            activeTab === "rent/lease" ? "active" : ""
          }`}
          href="#"
          data-toggle="tab"
          onClick={() => handleTabClick("rent/lease")}
          style={{
            borderRadius: "5px 5px 0px 0px",
            backgroundColor:
              activeTab === "rent/lease"
                ? "rgba(63, 219, 209, 1)"
                : "white",
            marginRight: "5px",
            paddingTop:"2px", 
            paddingLeft:"20px",
            paddingRight:"10px",
            width:"110px",
            fontWeight:"500",
          }}
        >
          Rent/Lease
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link ${activeTab === "office" ? "active" : ""}`}
          href="#"
          data-toggle="tab"
          onClick={() => handleTabClick("office")}
          style={{
            borderRadius: "5px 5px 0px 0px",
            backgroundColor:
              activeTab === "office" ? "rgba(63, 219, 209, 1)" : "white",
            marginRight: "5px",
            paddingTop:"2px", 
            paddingLeft:"18px",
            paddingRight:"10px",
            width:"125px",
            fontWeight:"500",
          }}
        >
          Office Spaces
        </a>
      </li>

      <li className="nav-item">
        <a
          className={`nav-link ${
            activeTab === "commercial" ? "active" : ""
          }`}
          href="#"
          data-toggle="tab"
          onClick={() => handleTabClick("commercial")}
          style={{
            borderRadius: "5px 5px 0px 0px",
            backgroundColor:
              activeTab === "commercial"
                ? "rgba(63, 219, 209, 1)"
                : "white",
            marginRight: "5px",
            paddingTop:"2px",
            paddingLeft:"20px",
            paddingRight:"10px",
            width:"120px",
            fontWeight:"500",
          }}
        >
          Commercial
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link ${
            activeTab === "eventspace" ? "active" : ""
          }`}
          href="#"
          data-toggle="tab"
          onClick={() => handleTabClick("eventspace")}
          style={{
            borderRadius: "5px 5px 0px 0px",
            backgroundColor:
              activeTab === "eventspace"
                ? "rgba(63, 219, 209, 1)"
                : "white",
            marginRight: "5px",
            paddingTop:"2px",
            paddingLeft:"20px",
            paddingRight:"10px",
            width:"125px",
            fontWeight:"500",
          }}
        >
          Event Spaces
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link ${
            activeTab === "flatmate" ? "active" : ""
          }`}
          href="#"
          data-toggle="tab"
          onClick={() => handleTabClick("flatmate")}
          style={{
            borderRadius: "5px 5px 0px 0px",
            backgroundColor:
              activeTab === "flatmate"
                ? "rgba(63, 219, 209, 1)"
                : "white",
            marginRight: "5px",
            paddingTop:"2px",
            paddingLeft:"20px",
            paddingRight:"10px",
            width:"100px",
            fontWeight:"500",
          }}
        >
          Flatmate
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link ${activeTab === "pg" ? "active" : ""}`}
          href="#"
          data-toggle="tab"
          onClick={() => handleTabClick("pg")}
          style={{
            paddingLeft:"23px",
            paddingRight:"10px",
            width:"65px",
            fontWeight:"500",
            paddingTop:"2px",
            borderRadius: "5px 5px 0px 0px",
            backgroundColor:
              activeTab === "pg" ? "rgba(63, 219, 209, 1)" : "white",
            color: activeTab === "pg" ? "black" : "inherit",
          }}
        >
          PG
        </a>
      </li>
    </ul>
  </div></div>
  )
}