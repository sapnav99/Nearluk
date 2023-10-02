import React, { useState, useEffect } from "react";

import { Formik } from "formik";
import * as Yup from "yup";
import { notification } from "antd";
import { LoginActions } from "../redux/actions";
import useExternalScripts from "../../../hooks/useExternalScripts";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import CommonButton from "../../../components/common/button/CommonButton";
import CommonInput from "../../../components/common/input/CommonInput";
import type { NotificationPlacement } from "antd/es/notification/interface";
import { RadioValues } from "../../Constants/EnumValue";
import axios from "axios";

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

const Signup3 = ({ phoneNumber }) => {
  useExternalScripts({ urls: ["js/main.min.js", "js/script.js"] });
  // console.log("phoneNumber in Signup3:", phoneNumber);
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1929 + 1 },
    (_, index) => currentYear - index
  );
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  useExternalScripts({ urls: ["js/main.min.js", "js/script.js"] });

  const [signup, setSignup] = useState(false);
  const [api1, contextHolder] = notification.useNotification();

  const navigate = useNavigate();

  const initialValues: Values = {
    fName: "",
    lName: "",
    mobile_no: "",
    userType: "",
    email: "",
    showEmailField: false,
  };

  const signupRes = useSelector(
    (state: any) => state?.loginReducer?.signupData
  );
  console.log(signupRes);
  const signUpLoading = useSelector(
    (state: any) => state?.loginReducer?.signupLoading
  );
  console.log(signUpLoading);
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

  const signUp = async (values: Values) => {
    try {
      const res = await axios.post(
        `http://65.0.108.54:2000/users/signup`,
        {
          fname: values.fName,
          lname: values.lName,
          email: values.email,
          // name: `${values.fName} ${values.lName}`,
          mobile_no: phoneNumber,
          role: values.userType,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      if (res.data.Status === "success") {
        openNotification("topRight", "success", "Signed up successfully");
        setSignup(true);
      } else {
        openNotification("topRight", "error", " Please try again.");
      }
    } catch (error) {
      openNotification("topRight", "error", "Please try again later.");
    }
  };

  return (
    <div>
      <div>
        <div className="row merged-10">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <CommonInput
              value={phoneNumber}
              disabled={true}
              className="mb-2"
              type="text"
              placeholder="Mobile number"
              label="Mobile number"
            />
          </div>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(e) => {
            console.log(e);
            dispatch(
              LoginActions.fetchSignup({
                ...e,
                mobile_no: phoneNumber,
                userType: e.userType,
              })
            );
          }}
        >
          {({
            setFieldValue,
            isValid,
            handleBlur,
            handleChange,
            errors,
            touched,
            values,
            handleSubmit,
          }) => (
            // <div className="c-form">
            <div className="row merged-10">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <CommonInput
                  className="mb-2"
                  onChange={handleChange("fName")}
                  onBlur={handleBlur("fName")}
                  value={values.fName}
                  type="text"
                  errors={errors.fName}
                  touched={touched.fName}
                  placeholder="First-Name"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <CommonInput
                  className="mb-2"
                  onChange={handleChange("lName")}
                  onBlur={handleBlur("lName")}
                  value={values.lName}
                  type="text"
                  errors={errors.lName}
                  touched={touched.lName}
                  placeholder="Last-Name"
                />
              </div>

              <div className="col-lg-12 col-md-12 col-sm-12">
                <CommonInput
                  className="mb-2"
                  onChange={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  type="email"
                  errors={errors.email}
                  touched={touched.email}
                  placeholder="Email"
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <label>Date of Birth</label>
                <CommonInput className="mb-2" type="text" placeholder="Date" />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <label>Year</label>
                <select className="mb-2">
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <label>Month</label>
                <select className="mb-2">
                  {months.map((month, index) => (
                    <option key={index} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="gender mb-2">
                  <label>Gender</label>
                  <div className="form-radio">
                    <div className="radio">
                      <label>
                        <CommonInput type="radio" name="radio" />
                        <i className="check-box"></i>Male
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <CommonInput type="radio" name="radio" />
                        <i className="check-box"></i>Female
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <CommonInput type="radio" name="radio" />
                        <i className="check-box"></i>Custom
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="gender mb-2">
                  <label>User Type</label>
                  <div className="form-radio">
                    <div className="radio">
                      <label>
                        <CommonInput
                          type="radio"
                          name="userType"
                          value={RadioValues.BUYER}
                          checked={values.userType === RadioValues.BUYER}
                          onChange={() =>
                            setFieldValue("userType", RadioValues.BUYER)
                          }
                        />
                        <i className="check-box"></i>Buyer/Seller
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <CommonInput
                          type="radio"
                          name="userType"
                          value={RadioValues.SELLER}
                          checked={values.userType === RadioValues.SELLER}
                          onChange={() =>
                            setFieldValue("userType", RadioValues.SELLER)
                          }
                        />
                        <i className="check-box"></i>Agent
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <CommonInput
                          type="radio"
                          name="userType"
                          value={RadioValues.BUSINESS_OWNER}
                          checked={
                            values.userType === RadioValues.BUSINESS_OWNER
                          }
                          onChange={() =>
                            setFieldValue(
                              "userType",
                              RadioValues.BUSINESS_OWNER
                            )
                          }
                        />
                        <i className="check-box"></i>Business Owner
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 mb-2">
                <div className="checkbox mb-1">
                  <input type="checkbox" id="checkbox" />
                  <label htmlFor="checkbox">
                    <span>
                      By clicking Sign Up, you agree to our Terms, Data Policy
                      and Cookie Policy. You may receive SMS notifications from
                      us and can opt out at any time.
                    </span>
                  </label>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mt-2">
                <CommonButton
                  // onChange={(e) =>
                  //   formik.setFieldValue("signup", e.target.value)
                  // }
                  onChange={(e) => setSignup(e.target.value)}
                  // disabled={
                  //   !isValid ||
                  //   Object.values(values).some((value) =>
                  //     value !== "" ? false : true
                  //   )
                  // }
                  // onClick={handleButtonClick}
                  onClick={() => signUp(values)}
                  loaderColor="white"
                  label="Sign up"
                  // style={{
                  //   backgroundColor:
                  //     !isValid || signUpLoading ? "#e3e3e3" : "",
                  //   border: !isValid || signUpLoading ? "none" : "",
                  //   marginTop: 20,
                  // }}
                  loader={signUpLoading}
                  // onClick={() => navigate("/login")}
                />
              </div>
            </div>
            // </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup3;
