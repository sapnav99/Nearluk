import React from 'react'


type Props = {
  item?: any;
  onClick?: any;
  width?: any;
  style?: any;
  containerStyle?: any;
};

const Chip = ({
  item,
  onClick

}: Props) => {
  return (
    <div className="chip" style={{
      color: item?.active ? "black" : "gray",
    }}
    onClick={onClick}>
        {item.label}
    </div>
  )
}

export default Chip