import profile from "../../assets/images/profilePhoto.jpg";
// import './Agents.css'

const PopularAgents = () => {
  return (
    <div>
      <div className="gap" style={{backgroundColor:"rgba(226, 255, 253, 1)"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="page-contents" className="row" >
                <h4 className="main-title">Popular Agents</h4>
                <div className="widget stick-widget col-lg-3" style={{backgroundColor:"white"}}>
                  <ul className="followers">
                    <li>
                      <figure>
                        <img alt="" src="images/resources/friend-avatar.jpg" />
                      </figure>
                      <div className="friend-meta">
                        <h6>Mitra Spaces Pvt Ltd</h6>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", fontSize:"14px" }}>
                        <span>
                          Dealing in : Rent/Lease Original Booking, Resale
                        </span>
                        <span>Member Since: 2022</span>
                        <span>
                          Properties Dealing: 100 Villas | 37 Plots | 2 Flats |
                          1 House
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularAgents;
