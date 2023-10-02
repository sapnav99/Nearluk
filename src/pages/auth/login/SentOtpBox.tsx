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
const SentOtpBox = ({
  step,
  setStep,
  navigate,
  setOtpDetails,
  otpDetails,
  mobnum,
  setMobNum,
  notification,
  openNotification,
  dispatch,
}: any) => {
  const [otpLoader, setOtpLoader] = useState(false);
  const mobSchema = Yup.object().shape({
    mobile_no: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
  });
  const sendOTP = async (phoneNumber: any) => {
    setMobNum(phoneNumber);
    setOtpLoader(true);
    try {
      if (!phoneNumber || phoneNumber.length < 10) {
        openNotification(
          "topRight",
          "error",
          "Please enter a valid mobile number."
        );

        return;
      }
      const response = await axios.post(`http://65.0.108.54:2000/users/login`, {
        mobile_no: phoneNumber,
        isOtp: true,
      });

      if (response.data.Status === "Success") {
        console.log("succs", response.data);
        openNotification("topRight", "success", "OTP sent successfully!");
        setStep((step: any) => step + 1);
        setOtpLoader(false);
        setOtpDetails(response.data.Details);
      } else {
        console.log("else");

        setOtpLoader(false);

        openNotification(
          "topRight",
          "error",
          "Failed to send OTP. Please try again later."
        );
      }
    } catch (error: any) {
      console.log("catch");

      setOtpLoader(false);
      openNotification("topRight", "error", error.response.data.msg);
    }
  };
  return (
    <>
      <Formik
        initialValues={{
          mobile_no: "",
        }}
        validationSchema={mobSchema}
        validateOnMount={true}
        onSubmit={(e) => {
          console.log(e);
          sendOTP(e.mobile_no);
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
            <div>
              <h4>
                <i className="icofont-key-hole"></i> Login with Mobile Number
              </h4>
              <CommonInput
                placeholder="Enter your Mobile number"
                type="text"
                name="mobile_no"
                value={values.mobile_no}
                onBlur={handleBlur("mobile_no")}
                onChange={handleChange("mobile_no")}
              />
              {errors.mobile_no && touched.mobile_no && (
                <b
                  style={{
                    color: "red",
                    marginTop: -50,
                  }}
                >
                  {errors.mobile_no}
                </b>
              )}
            </div>
            <CommonButton
              disabled={!isValid}
              onClick={handleSubmit}
              label="Send OTP"
              loader={otpLoader}
              style={{
                backgroundColor: otpLoader || !isValid ? "#e3e3e3" : "",
                border: otpLoader || !isValid ? "none" : "",
                marginTop: 10,
                marginBottom: 10,
              }}
            />
            <div>
              <p>
                Have not any account? <Link to={"/signup"}>Register Now</Link>
              </p>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default SentOtpBox;
