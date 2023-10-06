import React, {useCallback} from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { LoginActions } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import CommonButton from "../../../components/common/button/CommonButton";
import CommonInput from "../../../components/common/input/CommonInput";
import { useNavigate } from "react-router-dom";
import SignupInputs from "./SignupInputs";
import api from "../../../api/apiServices";
import _ from "lodash"; 

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
      const res = await api.post(
        `users/signup`,
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

      if (res.data.status === "success"|| res.data.code === 200) {
        openNotification("topRight", "success", res.data.msg);
        dispatch(
          LoginActions.fetchSignup({
            fname: values.fName,
            lname: values.lName,
            email: values.email,
            mobile_no: phoneNumber,
            role: values.userType,
          })
        );
        navigate("/login");
      }
    } catch (error) {
      openNotification("topRight", "error", "Please try again later.");
      console.log("catch");
    }
  };
  const debouncedSignUp = useCallback(_.debounce(signUp, 300), [signUp]);
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
          onSubmit={(values) => debouncedSignUp(values)} 
          // {(values) => signUp(values)}
        >
          {({
            setFieldValue,
            handleBlur,
            errors,
            touched,
            values,
          }) => (
            <div className="row merged-10">
              <SignupInputs  
                          
                handleBlur={handleBlur}
                values={values}
                errors={errors}
                touched={touched}
                setFieldValue={setFieldValue}
              />
              <div className="col-lg-4 col-md-6 mt-2">
                <CommonButton
                onClick={() => debouncedSignUp(values)}
                  // onClick={() => signUp(values)}
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
