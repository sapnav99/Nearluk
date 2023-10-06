import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import api from "../../../api/apiServices";
import CommonButton from "../../../components/common/button/CommonButton";
import CommonInput from "../../../components/common/input/CommonInput";
import { debounce } from "lodash";

const Signup1 = ({
  setPhone,
  openNotification,
  setOtpDetails,
  setStep,
}: any) => {
  const [sendOTPLoading, setSendOTPLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const debouncedSendOTP = debounce((phoneNumber: string) => {
    if (phoneNumber.length === 10) {
      sendOTP(phoneNumber);
    }
  }, 300);

  const sendOTP = async (phoneNumber: any) => {
    setSendOTPLoading(true);
    setPhone(phoneNumber);
    try {
      if (!phoneNumber || phoneNumber.length !== 10) {
        openNotification(
          "topRight",
          "error",
          "Please enter a valid 10-digit mobile number."
        );
        return;
      }

      const response = await api.get(
        `users/send-otp?mobile_no=${phoneNumber}`,
        {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      if (response.data.Status === "Success") {
        openNotification("topRight", "success", "OTP sent successfully!");
        setSendOTPLoading(false);
        setOtpDetails(response.data.Details);
        setStep((step: any) => step + 1);
      }
    } catch (error: any) {
      setSendOTPLoading(false);
      openNotification("topRight", "error", error.response.data.message);
    }
  };

  console.log("signup1");
  return (
    <div>
      <h3>Signup</h3>
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
            onChange={(e: any) => {
              setPhoneNumber(e.target.value);
              debouncedSendOTP(e.target.value);
            }}
          />
        </div>

        <CommonButton
          label="Send OTP"
          onClick={() => sendOTP(phoneNumber)}
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
            style={{ marginRight: "-150px", color: "black" }}
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

export default React.memo(Signup1);
