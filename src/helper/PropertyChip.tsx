import React, { useState, useEffect } from "react";
import Chip from "@mui/material/Chip";

interface Category {
  active: any;
  label: string;
  child: any[]; // You can specify a more specific type if needed
  key: string;
}

interface ChipProps {
  data: Category[];
  setPtype: React.Dispatch<React.SetStateAction<Category[]>>;
  forLable: string;
  propertyTypes: any;
  setPropertyTypes: any;
}
export default function PropertyChip({
  data,
  setPtype,
  forLable,
  setPropertyTypes,
  propertyTypes,
}: ChipProps) {
  const [chipData, setChipData] = useState(data);

  useEffect(() => {
    setChipData(data);
  }, [data]);

  const handleClick = (key: string, child: Category[]) => {
    const updatedData = chipData.map((item) => ({
      ...item,
      active: item.key === key,
    }));
    setChipData(updatedData);

    switch (forLable) {
      case "iwant":
        setPropertyTypes({
          ...propertyTypes,
          iwant: key,
          property_type: "",
          property_sub_type: "",
        });
        break;
      case "property_type":
        setPropertyTypes({
          ...propertyTypes,
          property_type: key,
          property_sub_type: "",
        });
        break;
      case "property_sub_type":
        setPropertyTypes({ ...propertyTypes, property_sub_type: key });
        break;
    }

    setPtype(child);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {chipData.map((item) => {
        return (
          <Chip
            style={{
              margin: "8px",
              backgroundColor: item.active ? "#82D7E0" : "",
            }}
            key={item.key}
            label={item.label}
            onClick={() => {
              handleClick(item.key, item.child);
            }}
          />
        );
      })}
    </div>
  );
}
