import React, { useState } from "react";
import { ownerShipData } from "./helper/PostPropertyData";
import SectionHoc from "../../components/Property/SectionHoc";
import Chip from "../../components/Chip/Chip";
import { activateItemByKey } from "./helper/PostPropertyHelper";
import PropInput from "../../components/Property/PropInput/PropInput";
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
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
      <div className="price__details">
        <h6>Price Details</h6>
          <div className="price__detailing__container">
            <PropInput placeholder="Expected Price" value={stepThreeData.expected_price} onChange={(e: any) => {
              setStepThreeData({
                ...stepThreeData,
                expected_price: e.target.value
              })
            } } />
            <PropInput placeholder="Mainatinace per Month" value={stepThreeData.maintainance_per_month} onChange={(e: any) => {
              setStepThreeData({
                ...stepThreeData,
                maintainance_per_month: e.target.value
              })
            } } />
            <PropInput placeholder="Token Amount" value={stepThreeData.token_amount} onChange={(e: any) => {
              setStepThreeData({
                ...stepThreeData,
                token_amount: e.target.value
              })
            } } />
          </div>
          <div className="price__details__checkbox_container">
            <Checkbox onChange={(e: CheckboxChangeEvent) => {
              setStepThreeData({
                ...stepThreeData,
                negotiable: e.target.checked
              })
            }} >Price Negotiable</Checkbox>
            <Checkbox onChange={(e: CheckboxChangeEvent) => {
              setStepThreeData({
                ...stepThreeData,
                loan: e.target.checked
              })
            }} >Currently Under Loan</Checkbox>
            <Checkbox onChange={(e: CheckboxChangeEvent) => {
              setStepThreeData({
                ...stepThreeData,
                all_inclusive_price: e.target.checked
              })
            }} >All Inclusive Price</Checkbox>
            <Checkbox onChange={(e: CheckboxChangeEvent) => {
              setStepThreeData({
                ...stepThreeData,
                annual_dues_pay: e.target.checked
              })
            }} >Annual Dues Paid</Checkbox>
            <Checkbox onChange={(e: CheckboxChangeEvent) => {
              setStepThreeData({
                ...stepThreeData,
                tax_excluded: e.target.checked
              })
            }} >Tax Excluded</Checkbox>
          </div>
      </div>
    </div>
  );
};

export default PostPropertyThree;
