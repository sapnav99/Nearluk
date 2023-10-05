import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { LoginActions } from "../redux/actions";
import CommonButton from "../../../components/common/button/CommonButton";
import CommonInput from "../../../components/common/input/CommonInput";
import { message } from "antd";

import axios from "axios";

const otpSchema = Yup.object().shape({
  otp: Yup.string().required("Phone number is required"),
});
const VerifyOTPBox = ({
  step,
  setStep,
  navigate,
  
  otpDetails,
  mobnum,
 
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

      const res = await axios.post(`https://de00-183-82-109-169.ngrok-free.app/users/login`, {
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
