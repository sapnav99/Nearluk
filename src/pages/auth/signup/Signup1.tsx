import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Formik, useFormikContext } from "formik";
import * as Yup from "yup";
import { message, notification } from "antd";
import { LoginActions } from "../redux/actions";
import useExternalScripts from "../../../hooks/useExternalScripts";
import { useDispatch, useSelector } from "react-redux";
import { FcGoogle } from "react-icons/fc";
import api from "../../../api/apiServices";
import Logo from "../../../assets/main-logo.png";
import { useNavigate } from "react-router-dom";
import CommonButton from "../../../components/common/button/CommonButton";
import CommonInput from "../../../components/common/input/CommonInput";
import type { NotificationPlacement } from "antd/es/notification/interface";
import { RadioValues } from "../../Constants/EnumValue";
import axios from "axios";

type NotificationType = "success" | "info" | "warning" | "error";

type Props = {};

const Signup1 = ({
  onNextStep,
  setPhoneNumber,
  phoneNumber,
}: {
  onNextStep: () => void;
}) => {
  const [otpSent, setOtpSent] = useState(false);
  // const [phoneNumber, setPhoneNumber] = useState("");

  const [otpDetails, setOtpDetails] = useState(null);
  const [sendOTPLoading, setSendOTPLoading] = useState(false);

  const [api1, contextHolder] = notification.useNotification();
  const [step, setStep] = useState(1);

  const handleButtonClick = async () => {
    await sendOTP();
    onNextStep(); // Call the function to move to the next step
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

  const sendOTP = async () => {
    setSendOTPLoading(true);
    try {
      if (!phoneNumber || phoneNumber.length < 10) {
        openNotification(
          "topRight",
          "error",
          "Please enter a valid mobile number."
        );

        return;
      }
      const response = await api.get(
        `/users/send-otp?mobile_no=${phoneNumber}`
      );

      if (response.data.Status === "Success") {
        openNotification("topRight", "success", "OTP sent successfully!");
        console.log(phoneNumber);

        setOtpSent(true);
        setSendOTPLoading(false);
        setOtpDetails(response.data.Details);
        console.log(response.data.Details);
        setStep((prevStep) => prevStep + 1);
      } else {
        setSendOTPLoading(false);
        openNotification(
          "topRight",
          "error",
          "Failed to send OTP. Please try again later."
        );
        console.log("else");
      }
    } catch (error: any) {
      console.log(error);
      setSendOTPLoading(false);
      openNotification("topRight", "error", error?.response?.data?.message);
      console.log("catch");
    }
  };

  return (
    <div>
      {contextHolder}
      <div>
        <div>
          <h4>
            <i className="icofont-key-hole"></i> Signup with Mobile Number
          </h4>
          <CommonInput
            placeholder="Enter your Mobile number"
            type="text"
            name="mobile_no"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <CommonButton
          label="Send OTP"
          onClick={handleButtonClick}
          loader={sendOTPLoading}
          style={{
            backgroundColor: sendOTPLoading ? "#e3e3e3" : "",
            border: sendOTPLoading ? "none" : "",
            marginTop: 5,
            marginBottom: 10,
          }}
        />
        <div>
          <p>
            Already have an account? <Link to={"/login"}>Login here</Link>
          </p>
        </div>
        <div className="col-lg-8 col-md-6 mt-2 d-flex">
          <p
            className="reg-with"
            style={{ marginRight: "-200px", color: "black" }}
          >
            Register With
          </p>
          <a href="#" title="" data-ripple="">
            <FcGoogle
              style={{
                fontSize: "30px",
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup1;
