import { useState, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import login1 from "../../../assets/images/Login-page1.jpg";
import login2 from "../../../assets/images/Login-page2.jpg";
import CommonButton from "../../../components/common/button/CommonButton";
import CommonInput from "../../../components/common/input/CommonInput";
import { message, notification } from "antd";
import type { NotificationPlacement } from "antd/es/notification/interface";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginActions } from "../redux/actions";
import useExternalScripts from "../../../hooks/useExternalScripts";
import axios from "axios";

const otpSchema = Yup.object().shape({
  otp: Yup.string().required("Phone number is required"),
});
const VerifyOTPBox = ({
  step,
  setStep,
  navigate,
  setOtpDetails,
  otpDetails,
  mobnum,
  setMobNum,
  openNotification,
  dispatch,
}: any) => {
  const [otpLoader, setOtpLoader] = useState(false);

  const verifyOTP = async (enteredOTP: any) => {
    console.log({
      id: otpDetails,
      mobile_no: mobnum,
      otp: enteredOTP,
      isOtp: false,
    });

    setOtpLoader(true);
    try {
      if (!enteredOTP || enteredOTP.length === 0) {
        message.error("Please enter the OTP.");
        return;
      }

      const res = await axios.post(`http://65.0.108.54:2000/users/login`, {
        id: otpDetails,
        mobile_no: mobnum,
        otp: enteredOTP,
        isOtp: false,
      });

      console.log(res.data);
      openNotification("topRight", "success", "OTP verified successfully!");
      dispatch(LoginActions.loginReqSuccess(res.data));
      navigate("/");

      setOtpLoader(false);
      setStep(step + 1);
    } catch (error) {
      openNotification(
        "topRight",
        "error",
        "An error occurred while verifying OTP. Please try again later."
      );
      console.error("Error verifying OTP:", error);
      setOtpLoader(false);
    }
  };
  return (
    <div>
      <h4>
        <i className="icofont-key-hole"></i> Verify mobile number
      </h4>
      <Formik
        initialValues={{
          otp: "",
        }}
        validationSchema={otpSchema}
        validateOnMount={true}
        onSubmit={(e) => {
          console.log(e);
          verifyOTP(e.otp);
          console.log(otpDetails, e.otp);
        }}
      >
        {({
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          isValid,
        }) => (
          <div>
            <CommonInput
              placeholder="Enter OTP"
              type="text"
              value={values.otp}
              onBlur={handleBlur("otp")}
              onChange={handleChange("otp")}
            />
            <CommonButton
              onClick={handleSubmit}
              label="Verify OTP"
              loader={otpLoader}
              disabled={!isValid || otpLoader}
              style={{
                backgroundColor: otpLoader ? "#e3e3e3" : "",
                border: otpLoader ? "none" : "",
                marginTop: 20,
                marginBottom: 10,
              }}
            />
          </div>
        )}
      </Formik>
    </div>
  );
};

export default VerifyOTPBox;
