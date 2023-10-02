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
import Signup1 from "./Signup1";

interface Values {
  fName: string;
  lName: string;
  mobile_no: string;
  userType: string;
  email: string;
  showEmailField: boolean;
}

const validationSchema = Yup.object().shape({
  fName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  mobile_no: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});
type NotificationType = "success" | "info" | "warning" | "error";

type Props = {};

const Signup2 = ({ onNextStep }: { onNextStep: () => void }) => {
  const [enteredOTP, setEnteredOTP] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpDetails, setOtpDetails] = useState(null);
  const [sendOTPLoading, setSendOTPLoading] = useState(false);
  const [verifyOTPLoading, setVerifyOTPLoading] = useState(false);

  const [api1, contextHolder] = notification.useNotification();
  const [step, setStep] = useState(1);

  const handleButtonClick = async () => {
    await verifyOTP();
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
  const verifyOTP = async () => {
    setVerifyOTPLoading(true);
    try {
      if (!enteredOTP || enteredOTP.length === 0) {
        message.error("Please enter the OTP.");
        return;
      }
      const idParam = otpDetails ? `id=${encodeURIComponent(otpDetails)}` : "";
      console.log(idParam);
      const res = await api.get(
        `/users/verify-otp?id=${otpDetails}&otp=${enteredOTP}`,
        {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      if (res.data.Status === "Success") {
        openNotification("topRight", "success", "OTP verified successfully!");

        setOtpVerified(true);
        setVerifyOTPLoading(false);
        setStep((prevStep) => prevStep + 1);
      } else {
        openNotification(
          "topRight",
          "error",
          "OTP verification failed. Please try again."
        );
        setVerifyOTPLoading(false);
      }
    } catch (error) {
      openNotification(
        "topRight",
        "error",
        "An error occurred while verifying OTP. Please try again later."
      );
      console.error("Error verifying OTP:", error);
      setVerifyOTPLoading(false);
    }
  };

  return (
    <div>
      {" "}
      <div>
        <h4>
          <i className="icofont-key-hole"></i> Verify mobile number
        </h4>

        <CommonInput
          placeholder="Enter OTP"
          type="text"
          value={enteredOTP}
          onChange={(e) => setEnteredOTP(e.target.value)}
        />

        {otpVerified ? (
          ""
        ) : (
          <CommonButton
            onClick={handleButtonClick}
            label="Verify OTP"
            loader={verifyOTPLoading}
            style={{
              backgroundColor: sendOTPLoading ? "#e3e3e3" : "",
              border: sendOTPLoading ? "none" : "",
              marginTop: 20,
              marginBottom: 10,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Signup2;
