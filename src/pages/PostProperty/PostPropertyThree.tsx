import React, { useState, useRef, useMemo } from "react";
import {
  ownerShipData,
  proximityFeaturesData,
} from "./helper/PostPropertyData";
import SectionHoc from "../../components/Property/SectionHoc";
import Chip from "../../components/Chip/Chip";
import { activateItemByKey } from "./helper/PostPropertyHelper";
import PropInput from "../../components/Property/PropInput/PropInput";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import PropChipWithCheckBox from "../../components/Property/PropChipWithCheckBox/PropChipWithCheckBox";
import Api from "../../api/apiServices";
type Props = {};

const PostPropertyThree: React.FC = (props: Props) => {
  const [ownerShip, setOwnerShip] = useState(ownerShipData);
  const [imagePreview, setImagePreview] = useState<
    (File | { url: string; serveruri: any })[]
  >([]);
  const [proximatyFeature, setProximatyFeature] = useState(
    proximityFeaturesData
  );
  const [showCategory, setShowCategory] = useState({
    key: "",
    isOpened: false,
  });
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
    property_description: "",
    property_highlights: "",
  });

  const otherStepThreeData = useMemo(
    () => ({
      promimaty_feature: proximatyFeature.filter(
        (item: any) => item.active === true
      ),
    }),
    [proximatyFeature]
  );

  const hideInputRef: any = useRef();

  const uploadtoServer = async (file: File) => {
    try {
      const response = await Api.post("/property/uploadImage", file);
      return await response.data;
    } catch (err: any) {
      console.log(err.response);
    }
  };

  const handleImageSelect = async (e: any) => {
    const formData: any = new FormData();

    formData.append("file", e.target.files[0]);
    const urlOfServer = await uploadtoServer(formData);
    if (urlOfServer) {
      setImagePreview([
        ...imagePreview,
        {
          url: URL.createObjectURL(e.target.files[0]),
          serveruri: urlOfServer,
        },
      ]);
    }
  };

  const activateProximatyFeature = (key: any) => {
    const shallowCopy = [...proximatyFeature];
    const updatedArry = shallowCopy.map((item: any) => ({
      ...item,
      active: item.key === key ? !item.active : item.active,
    }));
    setProximatyFeature(updatedArry);
  };

  const generateAiDescription = async () => {
    
  }


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
          <PropInput
            placeholder="Expected Price"
            value={stepThreeData.expected_price}
            onChange={(e: any) => {
              setStepThreeData({
                ...stepThreeData,
                expected_price: e.target.value,
              });
            }}
          />
          <PropInput
            placeholder="Mainatinace per Month"
            value={stepThreeData.maintainance_per_month}
            onChange={(e: any) => {
              setStepThreeData({
                ...stepThreeData,
                maintainance_per_month: e.target.value,
              });
            }}
          />
          <PropInput
            placeholder="Token Amount"
            value={stepThreeData.token_amount}
            onChange={(e: any) => {
              setStepThreeData({
                ...stepThreeData,
                token_amount: e.target.value,
              });
            }}
          />
        </div>
        <div className="price__details__checkbox_container">
          <Checkbox
            onChange={(e: CheckboxChangeEvent) => {
              setStepThreeData({
                ...stepThreeData,
                negotiable: e.target.checked,
              });
            }}
          >
            Price Negotiable
          </Checkbox>
          <Checkbox
            onChange={(e: CheckboxChangeEvent) => {
              setStepThreeData({
                ...stepThreeData,
                loan: e.target.checked,
              });
            }}
          >
            Currently Under Loan
          </Checkbox>
          <Checkbox
            onChange={(e: CheckboxChangeEvent) => {
              setStepThreeData({
                ...stepThreeData,
                all_inclusive_price: e.target.checked,
              });
            }}
          >
            All Inclusive Price
          </Checkbox>
          <Checkbox
            onChange={(e: CheckboxChangeEvent) => {
              setStepThreeData({
                ...stepThreeData,
                annual_dues_pay: e.target.checked,
              });
            }}
          >
            Annual Dues Paid
          </Checkbox>
          <Checkbox
            onChange={(e: CheckboxChangeEvent) => {
              setStepThreeData({
                ...stepThreeData,
                tax_excluded: e.target.checked,
              });
            }}
          >
            Tax Excluded
          </Checkbox>
        </div>
        <hr />
        <div>
          <h6>Property Photo</h6>
          <div className="property__photo_button_container">
            <button
              className="property_photo__button"
              onClick={() => hideInputRef?.current.click()}
            >
              +Add picture
            </button>
            <input
              type="file"
              ref={hideInputRef}
              onChange={handleImageSelect}
              style={{ display: "none" }}
            />
            <p className="property_photo_text">
              Property Listings with more than 5 images get 3x more views.
              <br />
              More Images = Higher chances of Leads.
              <br />
              Accepted formats are .jpg, .gif, .bmp & .png and Maximum size
              allowed 10 MB
            </p>
          </div>
          <hr />
        </div>
        <div>
          <h6>Property Description</h6>
          <div className="property__description__container" >
            <p onClick={generateAiDescription} >Generate With Ai</p>
            <textarea
              name="postContent"
              rows={8}
              cols={70}
              className="textarea_text"
              style={{ backgroundColor: "#ECECEC" }}
              value={stepThreeData.property_description}
              onChange={(e) => {
                setStepThreeData({
                  ...stepThreeData,
                  property_description: e.target.value,
                });
              }}
            />
          </div>
          <hr />
        </div>
        <div>
          <h6>Property Highlights</h6>
          <textarea
            name="postContent"
            rows={8}
            cols={70}
            className="textarea_text"
            style={{ backgroundColor: "#ECECEC" }}
            value={stepThreeData.property_highlights}
            onChange={(e) => {
              setStepThreeData({
                ...stepThreeData,
                property_highlights: e.target.value,
              });
            }}
          />
          <hr />
        </div>
        <div>
          <div className="proximaty__feature__container">
            {proximatyFeature.map((item: any) => (
              <PropChipWithCheckBox
                item={item}
                onChange={() => activateProximatyFeature(item.key)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPropertyThree;
