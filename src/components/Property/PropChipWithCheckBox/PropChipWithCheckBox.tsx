import React from "react";
import { Checkbox } from "antd";

type checkBoxProps = {
  item: any;
  onChange: any;
};

const PropChipWithCheckBox: React.FC<checkBoxProps> = ({
  item,
  onChange,
}: checkBoxProps) => {
  return (
    <div
      style={{
        backgroundColor: item?.active ? "gray" : "#D2D2D2",
        background: "gray",
        padding: "10px", // Add 'px' for the padding
        borderRadius: "25px", // Add 'px' for the border radius
        boxShadow: "3px 3px 5px 0px rgba(0,0,0,0.75)", // Add a shadow effect
        borderWidth: "2px", // Add 'px' for the border width
        margin: "10px",
      }}
    >
      <Checkbox onChange={onChange} checked={item.active}>
        {item.label}
      </Checkbox>
    </div>
  );
};

export default PropChipWithCheckBox;
