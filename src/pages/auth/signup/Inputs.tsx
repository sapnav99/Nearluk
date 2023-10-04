// CommonFormInputs.tsx
import React from "react";
import CommonInput from "../../../components/common/input/CommonInput";
import { RadioValues } from "../../Constants/EnumValue";
interface CommonFormInputsProps {
  handleChange: any;
  handleBlur: any;
  values: any;
  errors: any;
  touched: any;
  setFieldValue: any;
}

const Inputs: React.FC<CommonFormInputsProps> = ({
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  setFieldValue,
}) => {
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
  return (
    <>
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
          {years.map((year: any) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <label>Month</label>
        <select className="mb-2">
          {months.map((month: any, index: any) => (
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
      {["Male", "Female", "Custom"].map((gender) => (
        <div key={gender} className="radio">
          <label>
            <CommonInput
              type="radio"
              name="gender"
              value={gender}
              checked={values.gender === gender}
              onChange={() => setFieldValue("gender", gender)}
            />
            <i className="check-box"></i>
            {gender}
          </label>
        </div>
      ))}
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
                  onChange={() => setFieldValue("userType", RadioValues.BUYER)}
                />
                <i className="check-box"></i>Buyer
              </label>
            </div>
            <div className="radio">
              <label>
                <CommonInput
                  type="radio"
                  name="userType"
                  value={RadioValues.SELLER}
                  checked={values.userType === RadioValues.SELLER}
                  onChange={() => setFieldValue("userType", RadioValues.SELLER)}
                />
                <i className="check-box"></i>Seller
              </label>
            </div>
            <div className="radio">
              <label>
                <CommonInput
                  type="radio"
                  name="userType"
                  value={RadioValues.BUSINESS_OWNER}
                  checked={values.userType === RadioValues.BUSINESS_OWNER}
                  onChange={() =>
                    setFieldValue("userType", RadioValues.BUSINESS_OWNER)
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
              By clicking Sign Up, you agree to our Terms, Data Policy and
              Cookie Policy. You may receive SMS notifications from us and can
              opt out at any time.
            </span>
          </label>
        </div>
      </div>
    </>
  );
};

export default React.memo(Inputs);
