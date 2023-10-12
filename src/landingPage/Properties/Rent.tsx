import "./Rent.css";
import house from "../../assets/images/House.jpg";
import villa from "../../assets/images/villa3.jpg";
import apartment from "../../assets/images/Apartment.jpg";
import office from "../../assets/images/office.jpg";
import "./EventSpace.css";

const Rent = () => {
  return (
    <div>
      <div className="gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="page-contents" className="row merged20"></div>
              <div className=" col-lg-10">
                <h4 className="main-title">
                  Categories{" "}
                  <a title="" href="#" className="view-all">
                    view all
                  </a>
                </h4>
                <div className="row">
				<div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="rents">
                      <i>
                        <img src={house} alt="" />
                      </i>
                      
                      <div className="overlay-text">
                        <label>Houses for Rent</label>
                        <p>1929 properties</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="rents">
                      <i>
                        <img src={villa} alt="" />
                      </i>
                      <div className="overlay-text">
                        <label>Villas for Rent</label>
                        <p>1929 properties</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="rents">
                      <i>
                        <img src={office} alt="" />
                      </i>
                      <div className="overlay-text">
                        <label>Commercial Spaces for Rent</label>
                        <p>1929 properties</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="rents">
                      <i>
                        <img src={apartment} alt="" />
                      </i>
                      <div className="overlay-text">
                        <label>Apartments for Rent</label>
                        <p>1929 properties</p>
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
  );
};

export default Rent;
