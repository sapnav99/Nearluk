
import PropertyChip from "../../helper/PropertyChip";




interface PropertyChipProps {
  data: any;
  setPtype?: any;
  forLable: string;
  propertyTypes: any;
  setPropertyTypes: any;
}
// interface PropertyChipProps {
//   data: Category[];
//   setPtype?: Dispatch<SetStateAction<Category[]>> | undefined;
//   forLable: string;
//   propertyTypes: any;
//   setPropertyTypes: any;
// }

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
