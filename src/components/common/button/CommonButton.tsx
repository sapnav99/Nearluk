import React from "react";
import { Spin } from "antd";
type Props = {
  disabled?: boolean;
  loader?: boolean;
  onClick?: () => void;
  onChange?: (e: any) => void;
  label?: string;
  style?: any;
  loaderColor?: string;
};

const CommonButton: React.FC<Props> = ({
  disabled,
  onClick,
  onChange,
  label,
  style,
  loader,
  loaderColor,
}) => {
  return (
    <>
      <button
        type="submit"
        className={`main-btn`}
        disabled={disabled}
        onClick={onClick}
        onChange={onChange}
        style={style}
      >
        {loader ? <Spin style={{ color: loaderColor }} /> : label}
      </button>
    </>
  );
};

export default CommonButton;
