import React, { useState } from "react";
import api from "../../../api/apiServices";
import CommonButton from "../../../components/common/button/CommonButton";
import CommonInput from "../../../components/common/input/CommonInput";

const Signup2 = ({
  openNotification,
  setStep,
  otpDetails,
}: {
  openNotification: any;
  setStep: any;
  otpDetails: any;
}) => {
  const [enteredOTP, setEnteredOTP] = useState("");

  const [verifyOTPLoading, setVerifyOTPLoading] = useState(false);

  const verifyOTP = async () => {
    setVerifyOTPLoading(true);
    try {
      if (!enteredOTP || enteredOTP.length === 0) {
        openNotification("topRight", "success", "Please enter OTP.");
        return;
      }
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

        setVerifyOTPLoading(false);
        setStep((step: any) => step + 1);
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
      setVerifyOTPLoading(false);
    }
  };
  console.log("signup2");
  return (
    <div>
      <h4>
        <i className="icofont-key-hole"></i> Verify mobile number
      </h4>
      <div>
        <CommonInput
          placeholder="Enter OTP"
          type="text"
          value={enteredOTP}
          onChange={(e: any) => setEnteredOTP(e.target.value)}
        />

        <CommonButton
          onClick={verifyOTP}
          label="Verify OTP"
          loader={verifyOTPLoading}
          style={{
            backgroundColor: verifyOTPLoading ? "#e3e3e3" : "",
            border: verifyOTPLoading ? "none" : "",
            marginTop: 20,
            marginBottom: 10,
          }}
        />
      </div>
    </div>
  );
};

export default React.memo(Signup2);
