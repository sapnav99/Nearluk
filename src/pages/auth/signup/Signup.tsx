import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Formik, useFormikContext } from "formik";
import * as Yup from "yup";
import { message, notification } from "antd";
import { LoginActions } from "../redux/actions";
import useExternalScripts from "../../../hooks/useExternalScripts";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import type { NotificationPlacement } from "antd/es/notification/interface";

import Signup1 from "./Signup1";
import Signup2 from "./Signup2";
import Signup3 from "./Signup3";

interface Values {
  fName: string;
  lName: string;
  mobile_no: string;
  userType: string;
  email: string;
  showEmailField: boolean;
}

type NotificationType = "success" | "info" | "warning" | "error";

const Signup = () => {
  useExternalScripts({ urls: ["js/main.min.js", "js/script.js"] });

  const [api1, contextHolder] = notification.useNotification();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const signupRes = useSelector(
    (state: any) => state?.loginReducer?.signupData
  );
  console.log(signupRes);
  const signUpLoading = useSelector(
    (state: any) => state?.loginReducer?.signupLoading
  );
  console.log(signUpLoading);
  const dispatch = useDispatch();

  useExternalScripts({
    urls: [
      "assets/js/script.js", // Your main script should be the last in the array
    ],
  });
  const initialValues: Values = {
    fName: "",
    lName: "",
    mobile_no: "",
    userType: "",
    email: "",
    showEmailField: false,
  };

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

  console.log(signupRes);
  useEffect(() => {
    if (signupRes?.code === 400 || signupRes?.code === 500) {
      openNotification("topRight", "error", signupRes?.error?.msg);
      dispatch(LoginActions.setSignup(null));
    } else if (signupRes?.code === 200) {
      setStep((prevStep) => prevStep + 1);
    }
  }, [dispatch, signupRes]);

  // const handleButtonClick = async () => {
  //   await signUp(formik.values);
  //   navigate("/login");
  // };
  console.log(phoneNumber);
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Signup1
            setPhoneNumber={setPhoneNumber}
            phoneNumber={phoneNumber}
            onNextStep={nextStep}
          />
        );
      case 2:
        return <Signup2 onNextStep={nextStep} />;
      case 3:
        return <Signup3 phoneNumber={phoneNumber} />;
      default:
        return null;
    }
  };

  return (
    <div className="theme-layout">
      {/* {contextHolder} */}

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
                <p>
                  Socimo is a social network that can be used to connect people.
                  We helps you connect and share with the people in your life.
                </p>
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
