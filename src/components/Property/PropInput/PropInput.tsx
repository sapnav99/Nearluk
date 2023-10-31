import React from "react";
import "./propinput.css";

type InputProps = {
  placeholder?: string;
  onChange?: any;
  value?: string;
  type?: string;
};

const PropInput: React.FC<InputProps> = ({
  placeholder,
  onChange,
  value,
  type,
}: InputProps) => {
  return (
    <div className="input__group">
      <div>
        <label className="input__label">{placeholder}</label>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        className="prop__input"
        onChange={onChange}
      />
    </div>
  );
};

export default PropInput;
