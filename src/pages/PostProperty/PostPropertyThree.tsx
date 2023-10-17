import React, { useState } from "react";
import { ownerShipData } from "./helper/PostPropertyData";
import SectionHoc from "../../components/Property/SectionHoc";
import Chip from "../../components/Chip/Chip";
import { activateItemByKey } from "./helper/PostPropertyHelper";

type Props = {};

const PostPropertyThree: React.FC = (props: Props) => {
  const [ownerShip, setOwnerShip] = useState(ownerShipData);
  const [stepThreeData, setStepThreeData] = useState({
    ownership: "",
    negotiable: false,
    loan: false,
    poa: false,
    tax_excluded: false,
    annual_dues_pay: false,
    all_inclusive_price: false,
    token_amount: "",
    expected_price: "",
    maintainance_per_month: "",
    upload_through_whatsapp: false,
    upload_through_email: false,
    upload_through_sms: false,
    request_ar_vr: false,
  });
  return (
    <div>
      <SectionHoc title="Ownership Type">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {ownerShip?.map((item: any, i) => {
            return (
              <Chip
                item={item}
                key={i}
                onClick={() => {
                  setOwnerShip(activateItemByKey(ownerShip, item.key));
                  setStepThreeData({
                    ...stepThreeData,
                    ownership: item.key,
                  });
                }}
              />
            );
          })}
        </div>
      </SectionHoc>
    </div>
  );
};

export default PostPropertyThree;
