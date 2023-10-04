import React from "react";
import "./Input.css";
type Props = {
  onChange?:any;
  onBlur?: any;
  id?: string;
  name?: string;
  type?: string;
  value?: string;
  label?: string;
  placeholder?: string;
  errors?: any;
  touched?: any;
  disabled?: any;
  className?: string;
  checked?: boolean;
};

const CommonInput: React.FC<Props> = ({
  onBlur,
  onChange,
  id,
  name,
  type,
  value,
  label,
  placeholder,
  touched,
  errors,
  disabled,
  className,
  checked,
}) => {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        className={className}
        checked={checked}
      />
      {errors && touched && (
        <div className="error">
          <span className="error-star">{errors}</span>
        </div>
      )}
    </>
  );
};

export default React.memo(CommonInput);
