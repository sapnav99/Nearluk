import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { LoginActions } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import CommonButton from "../../../components/common/button/CommonButton";
import CommonInput from "../../../components/common/input/CommonInput";

import { useNavigate } from "react-router-dom";

import Inputs from "./Inputs";
import axios from "axios";
interface Values {
  fName: string;
  lName: string;
  mobile_no: string;
  userType: string;
  email: string;
}
type Signup3Props = {
  phoneNumber: string;
  openNotification: any;
  setStep: any;
};
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

const Signup3 = ({ phoneNumber, openNotification }: Signup3Props) => {
  const navigate = useNavigate();
  const initialValues: Values = {
    fName: "",
    lName: "",
    mobile_no: "",
    userType: "",
    email: "",
  };

  const signUpLoading = useSelector(
    (state: any) => state?.loginReducer?.signupLoading
  );
  const dispatch = useDispatch();
  const signUp = async (values: Values) => {
    try {
      const res = await axios.post(
        `https://5d28-183-82-109-169.ngrok-free.app/users/signup`,
        {
          fname: values.fName,
          lname: values.lName,
          email: values.email,
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
        dispatch(LoginActions.fetchSignup({
          fname: values.fName,
          lname: values.lName,
          email: values.email,
          mobile_no: phoneNumber,
          role: values.userType,
              }))
        navigate("/login");

      } else {
        openNotification("topRight", "error", " Please try again.");
      }
    } catch (error) {
      openNotification("topRight", "error", "Please try again later.");
    }
  };
  console.log("signup3");
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
          onSubmit={(values) => signUp(values)}
          //   (e: any) => {
          //   dispatch(
          //     LoginActions.fetchSignup({
          //       ...e,
          //       mobile_no: phoneNumber,
          //       userType: e.userType,
          //     })
          //   );
          // }
        
        >
          {({
            setFieldValue,
            
            handleBlur,
            handleChange,
            errors,
            touched,
            values,
          }) => (
            <div className="row merged-10">
              <Inputs
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
                errors={errors}
                touched={touched}
                setFieldValue={setFieldValue}
              />
              <div className="col-lg-4 col-md-6 mt-2">
                <CommonButton
                  onClick={() => signUp(values)}
                  loaderColor="white"
                  label="Sign up"
                  loader={signUpLoading}
                />
              </div>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default React.memo(Signup3);
