import React from "react";
import { Spin } from "antd";

type Props = {
  disabled?: boolean;
  loader?: boolean;
  onClick?: () => void;
  label?: string;
  style?: any;
  loaderColor?: string;
};

const CommonButton: React.FC<Props> = React.memo(
  ({ disabled, onClick, label, style, loader, loaderColor }) => {
    return (
      <>
        <button
          type="submit"
          className={`main-btn`}
          disabled={disabled}
          onClick={onClick}
          style={style}
        >
          {loader ? <Spin style={{ color: loaderColor }} /> : label}
        </button>
      </>
    );
  }
);

export default CommonButton;
