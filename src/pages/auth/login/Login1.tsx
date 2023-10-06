import React, { useState, useEffect } from "react";
import login1 from "../../../assets/images/Login-page1.jpg";
import login2 from "../../../assets/images/Login-page2.jpg";
import { notification } from "antd";
import type { NotificationPlacement } from "antd/es/notification/interface";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginActions } from "../redux/actions";
import useExternalScripts from "../../../hooks/useExternalScripts";
import SentOtpBox from "./SentOtpBox";
import VerifyOTPBox from "./VerifyOTPBox";

type NotificationType = "success" | "info" | "warning" | "error";

const Login1:React.FC = () => {
  useExternalScripts({ urls: ["js/main.min.js", "js/script.js"] });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [step, setStep]:any = useState(1);
  const [otpDetails, setOtpDetails] = useState(null);
  const [mobnum, setMobNum] = useState("");
  const [api1, contextHolder] = notification.useNotification();

  const loginResponse = useSelector(
    (state: any) => state?.loginReducer?.logRes
  );

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
    if (
      loginResponse === "user not found" ||
      loginResponse === "invalid credentials"
    ) {
      openNotification("topRight", "error", loginResponse?.msg);
      dispatch(LoginActions.loginReqFailed(null));
    }
  }, [dispatch, loginResponse]);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SentOtpBox
            setStep={setStep}
            setOtpDetails={setOtpDetails}
            setMobNum={setMobNum}
            openNotification={openNotification}
        
          />
        );
      case 2:
        return (
          <VerifyOTPBox
            step={step}
            setStep={setStep}
            navigate={navigate}
            otpDetails={otpDetails}
            mobnum={mobnum}
            setMobNum={setMobNum}
            openNotification={openNotification}
            dispatch={dispatch}
          />
        );
      case 3:
        return (
          <div>
            <button onClick={() => navigate("/")}>Previous</button>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <>
      <div className="theme-layout">
        {contextHolder}
        <div className="authtication bluesh high-opacity">
          <div
            className="bg-image"
            style={{
              backgroundImage: " url(images/resources/login-bg3.jpg)",
            }}
          ></div>
          <ul className="welcome-caro">
            <li className="welcome-box">
              <figure>
                <img src={login1} alt="" />
              </figure>
              {/* <h4>Ask questions with seniors Researchers</h4>
              <p>
                Ask questions and get the experienced answer by researchers and
                others fellows.
              </p> */}
            </li>
            <li className="welcome-box">
              <figure>
                <img src={login2} alt="" />
              </figure>
              {/* <h4>Find New Researchers or Friends</h4>
              <p>
                Join Socimo and make your network of university or college
                fellows.
              </p> */}
            </li>
            <li className="welcome-box">
              <figure>
                <img src={login1} alt="" />
              </figure>
              {/* <h4>Sell Your Online paid Content</h4>
              <p>
                Sell your online lectures, videos, books and many more with
                Socimo.
              </p> */}
            </li>
          </ul>
        </div>
        <div className="auth-login">
          <div className="" style={{ width: 265, marginLeft: "85px" }}>
            <img src="images/main-logo-pic.png" alt="" />
            {/* <span>Nearluk</span> */}
          </div>
          <div className="mockup left-bottom">
            <img src="images/mockup.png" alt="" />
          </div>
          <div className="verticle-center">
            <div className="login-form">
              <div className="c-form">{renderStep()}</div>
            </div>
          </div>
          <div className="mockup right">
            <img src="images/star-shape.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
  //   return <div>{renderStep()}</div>;
};

export default Login1;
