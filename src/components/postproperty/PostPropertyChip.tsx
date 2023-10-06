// import React from "react";
import PropertyChip from "../../helper/PropertyChip";
// import { Dispatch, SetStateAction } from "react";



interface PropertyChipProps {
  data: any;
  setPtype?: any;
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
