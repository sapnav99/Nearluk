
import { useState, useEffect } from "react";
import notification from "antd/lib/notification";
import { LoginActions } from "../redux/actions";
import useExternalScripts from "../../../hooks/useExternalScripts";
import { useDispatch, useSelector } from "react-redux";
import type { NotificationPlacement } from "antd/es/notification/interface";

import Signup1 from "./Signup1";
import Signup2 from "./Signup2";
import Signup3 from "./Signup3";

type NotificationType = "success" | "info" | "warning" | "error";

const Signup = () => {
  useExternalScripts({ urls: ["js/main.min.js", "js/script.js"] });
  const [api1, contextHolder] = notification.useNotification();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [step, setStep] = useState(1);
  const [otpDetails, setOtpDetails] = useState(null);
  const signupRes = useSelector(
    (state: any) => state?.loginReducer?.signupData
  );

  const dispatch = useDispatch();
  const openNotification = (
    placement: NotificationPlacement,
    type: NotificationType,
    msg: string
  ) => {
    api1[type]({
      message: "Authentication Message",
      description: <b>{`${msg}!`}</b>,
      placement,
      duration: 1.5,
    });
  };
  useEffect(() => {
    if (signupRes === "User already exists") {
      openNotification("topRight", "error", signupRes?.msg);
      dispatch(LoginActions.setSignup(null));
    }
 
  }, [dispatch, signupRes]);
console.log("signup")

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Signup1
            openNotification={openNotification}
            setStep={setStep}
            setPhone={setPhoneNumber}
       
            setOtpDetails={setOtpDetails}
          />
        );
      case 2:
        return (
          <Signup2
            setStep={setStep}
            openNotification={openNotification}
            otpDetails={otpDetails}
          />
        );
      case 3:
        return (
          <Signup3
            setStep={setStep}
            phoneNumber={phoneNumber}
            openNotification={openNotification}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="theme-layout">
      {contextHolder}

      <div className="gap no-gap signin whitish medium-opacity register">
        <div
          className="bg-image"
          style={{
            backgroundImage: "url(images/resources/theme-bg.jpg)",
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="big-ad">
                <figure>
                  <img
                    src="images/main-logo-pic.png"
                    alt=""
                    style={{ width: 325, marginLeft: "-20px" }}
                  />
                </figure>
                <h1>Welcome</h1>
                {/* <p>
                  Socimo is a social network that can be used to connect people.
                  We helps you connect and share with the people in your life.
                </p> */}
                <div className="barcode">
                  <figure>
                    <img src="images/resources/Barcode.jpg" alt="" />
                  </figure>
                  <div className="app-download">
                    <span>Download Mobile App and Scan QR Code to login</span>
                    <ul className="colla-apps">
                      <li>
                        <a title="" href="https://play.google.com/store?hl=en">
                          <img src="images/android.png" alt="" />
                          android
                        </a>
                      </li>
                      <li>
                        <a
                          title=""
                          href="https://www.apple.com/lae/ios/app-store/"
                        >
                          <img src="images/apple.png" alt="" />
                          iPhone
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="ver-center">
                <div className="reg-from">
                  <span>
                    <i className="icofont-lock"></i> Create an Account
                  </span>
                  <p>Its quick and Easy</p>

                  <div className="c-form">{renderStep()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
