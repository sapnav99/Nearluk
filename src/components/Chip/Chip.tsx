import "./chip.css";

type Props = {
  item?: any;
  onClick?: any;
  width?: any;
  style?: any;
  containerStyle?: any;
};

const Chip = ({ item, onClick }: Props) => {
  return (
    <div
      className="chips"
      style={{
        color: item?.active ? "black" : "#A1A1A1",
        backgroundColor: item?.active ? "#3FDBD1" : "",
      }}
      onClick={onClick}
    >
      {item.label}
    </div>
  );
};

export default Chip;
