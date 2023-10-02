import React from "react";
import PropertyChip from "../../helper/PropertyChip";
import { Dispatch, SetStateAction } from "react";

interface Category {
  label: string;
  child: any[]; // You can specify a more specific type if needed
  key: string;
}

interface PropertyChipProps {
  data: Category[];
  setPtype?: Dispatch<SetStateAction<Category[]>> | undefined;
  forLable: string;
  propertyTypes: any;
  setPropertyTypes: any;
}

export default function PostPropertyChip({
  data,
  setPtype,
  forLable,
  setPropertyTypes,
  propertyTypes,
}: PropertyChipProps) {
  // console.log(data)
  return (
    <div>
      <PropertyChip
        data={data}
        setPtype={setPtype}
        forLable={forLable}
        propertyTypes={propertyTypes}
        setPropertyTypes={setPropertyTypes}
      />
    </div>
  );
}
