export function ComingSoon() {
  return (
    <div>
      <div className="theme-layout">
        <div className="coming-page">
          <div id="container-inside">
            <div id="circle-small"></div>
            <div id="circle-medium"></div>
            <div id="circle-large"></div>
            <div id="circle-xlarge"></div>
            <div id="circle-xxlarge"></div>
          </div>
          <div className="comesoon-wraper">
            <div className="logo top-left">
              <img src="/images/main-logo-pic.png" alt="" />
             
            </div>
            <div className="top-right">
              <a href="#" title="">
                Get In Touch
              </a>
            </div>
            <div className="come-soon">
              <h1>Coming Soon</h1>
              {/* <span>WE ARE CURRENTLY UNDER CONSTRUCTION!</span>
              <p>
                Our website is currently undergoing scheduled maintenance. We
                Should be back shortly. Thank you for your patience. Sign up now
                to get early notification of our lauch date!
              </p> */}
            </div>
            {/* <div className="left-bottom">
              <span>launching in</span>
              <ul className="countdown">
                <li>
                  <span className="days">00</span>
                  <p className="days_ref">days</p>
                </li>
                <li>
                  {" "}
                  <span className="hours">00</span>
                  <p className="hours_ref">hrs</p>
                </li>
                <li>
                  {" "}
                  <span className="minutes">00</span>
                  <p className="minutes_ref">min</p>
                </li>
                <li>
                  {" "}
                  <span className="seconds">00</span>
                  <p className="seconds_ref">sec</p>
                </li>
              </ul>
            </div> */}
            {/* <div className="right-bottom">
              <span>Follow Us</span>
              <ul>
                <li>
                  <a href="#" title="">
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    <i className="icofont-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    <i className="icofont-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    <i className="icofont-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
