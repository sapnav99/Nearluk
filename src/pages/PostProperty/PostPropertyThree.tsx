import React, { useState, useRef, useMemo } from "react";
import {
  ownerShipData,
  proximityFeaturesData,
  propertyDocumentsData,
  imgCategory,
} from "./helper/PostPropertyData";
import SectionHoc from "../../components/Property/SectionHoc";
import Chip from "../../components/Chip/Chip";
import { activateItemByKey } from "./helper/PostPropertyHelper";
import PropInput from "../../components/Property/PropInput/PropInput";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import PropChipWithCheckBox from "../../components/Property/PropChipWithCheckBox/PropChipWithCheckBox";
import Api from "../../api/apiServices";
import { Button, message, Select } from "antd";
import { useSelector } from "react-redux";
import { FiUploadCloud } from "react-icons/fi";
import { AiFillStar, AiOutlineStar, AiFillDelete } from "react-icons/ai";
type stepThreeProps = {
  current: any;
  steps: any;
  setCurrent: any;
};

const PostPropertyThree: React.FC<stepThreeProps> = ({
  current,
  steps,
  setCurrent,
}: stepThreeProps) => {
  const [imageLoader, setImageLoader] = useState(false);
  const [ownerShip, setOwnerShip] = useState(ownerShipData);
  const [imagePreview, setImagePreview] = useState<
    (
      | File
      | {
          url: string;
          serveruri: string;
          category: string;
          id: number;
          featured: boolean;
        }
    )[]
  >([]);
  const [proximatyFeature, setProximatyFeature] = useState(
    proximityFeaturesData
  );
  const [propertyDocuments, setPropertyDocuments] = useState(
    propertyDocumentsData
  );
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

  const totalData = useSelector(
    (state: any) => state?.PostpropertyReducer?.propertyState
  );

  const documentRef: any = useRef();

  // console.log("total data at step three", totalData);

  const otherStepThreeData = useMemo(
    () => ({
      promimaty_feature: proximatyFeature.filter(
        (item: any) => item.active === true
      ),
      image_gallery: imagePreview,
    }),
    [proximatyFeature, imagePreview]
  );

  const hideInputRef: any = useRef();
  // console.log(imagePreview);

  const uploadtoServer = async (file: File) => {
    try {
      const response = await Api.post("/property/uploadImage", file);
      // console.log("response", response);
      return response.data.data;
    } catch (err: any) {
      setImageLoader(false);
      // console.log(err.response);
    }
  };

  const handleImageSelect = async (e: any) => {
    setImageLoader(true);
    const formData: any = new FormData();
    // console.log("image file", e.target.files[0]);

    formData.append("file", e.target.files[0]);
    // const urlOfServer = await uploadtoServer(formData);
    // console.log(urlOfServer);
    const urlOfServer = "image url";
    setTimeout(() => {
      if (urlOfServer) {
        setImageLoader(false);
        setImagePreview([
          ...imagePreview,
          {
            url: URL.createObjectURL(e.target.files[0]),
            serveruri: urlOfServer,
            category: "",
            id: Math.ceil(Math.random() * 10009),
            featured: false,
          },
        ]);
      }
    }, 1500);
  };

  const activateProximatyFeature = (key: any) => {
    const shallowCopy = [...proximatyFeature];
    const updatedArry = shallowCopy.map((item: any) => ({
      ...item,
      active: item.key === key ? !item.active : item.active,
    }));
    setProximatyFeature(updatedArry);
  };

  const generateAiDescription = async () => {};

  const upLoadFiletoServer = async (file: File) => {
    try {
      const response = await Api.post("property/upload-pdf", file);
      return response?.data?.data;
    } catch (err) {}
  };

  const uploadFileHandler = async (e: any, item: any) => {
    console.log("file", e.target.files[0]);
    console.log(item);
    const formData: any = new FormData();
    formData.append("file", e.target.files[0]);
    // const serverUri = await upLoadFiletoServer(formData);
  };

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
            <Button
              className="property_photo__button"
              onClick={() => hideInputRef?.current.click()}
              loading={imageLoader}
            >
              +Add picture
            </Button>
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
          <div
            style={{
              marginTop: 20,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              overflowX: "scroll",
              overflowY: "hidden",
            }}
          >
            {imagePreview.map((item: any) => {
              return (
                <div>
                  <div
                    style={{
                      width: 150,
                      height: 150,
                      backgroundImage: `url(${item.url})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {item.category && (
                      <p
                        style={{
                          position: "relative",
                          top: 10,
                          left: 1,
                          backgroundColor: "white",
                          padding: 2,
                          borderRadius: 10,
                          width: "auto",
                          textAlign: "center",
                          color: "#000",
                          fontSize: 12,
                          fontWeight: 800,
                        }}
                      >
                        {item.category}
                      </p>
                    )}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: 10,
                      marginTop: 10,
                      gap: 8,
                    }}
                  >
                    <Select
                      style={{ width: 100 }}
                      placeholder="Search to Select"
                      defaultValue={{
                        label: "Select Fllor No ",
                        value: "",
                        key: "",
                      }}
                      filterOption={(input, option) =>
                        (option?.label ?? "").includes(input)
                      }
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? "")
                          .toLowerCase()
                          .localeCompare((optionB?.label ?? "").toLowerCase())
                      }
                      onChange={(e) => {
                        const shallow = [...imagePreview];
                        const mapped = shallow.map((child: any) => {
                          if (item.id === child.id) {
                            child.category = e;
                          }
                          return child;
                        });
                        setImagePreview(mapped);
                      }}
                      options={imgCategory}
                    />
                    <div>
                      {item.featured ? (
                        <AiFillStar
                          style={{
                            fontSize: 20,
                            margin: 0,
                          }}
                          onClick={() => {
                            const shallow = [...imagePreview];
                            const filtered = shallow.map((child: any) => ({
                              ...child,
                              featured: item.id === child.id,
                            }));
                            // console.log(filtered);
                            setImagePreview(filtered);
                          }}
                        />
                      ) : (
                        <AiOutlineStar
                          style={{
                            fontSize: 20,
                            margin: 0,
                          }}
                          onClick={() => {
                            const shallow = [...imagePreview];
                            const filtered = shallow.map((child: any) => ({
                              ...child,
                              featured: item.id === child.id,
                            }));
                            // console.log(filtered);
                            setImagePreview(filtered);
                          }}
                          title="Set as Feature Image"
                        />
                      )}
                    </div>
                    <div>
                      <AiFillDelete
                        style={{
                          fontSize: 20,
                          margin: 0,
                        }}
                        onClick={() => {
                          const shallow = [...imagePreview];
                          const filtered = shallow.filter(
                            (child: any) => item.id !== child.id
                          );
                          // console.log(filtered);
                          setImagePreview(filtered);
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <hr />
        </div>
        <div>
          <h6>Property Description</h6>
          <div className="property__description__container">
            <p onClick={generateAiDescription}>Generate With Ai</p>
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
          <hr />
        </div>
      </div>
      <div className="document__contianer">
        <div className="document__wrapper">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Document Name</th>
                <th scope="col">Type</th>
                <th scope="col">Status</th>
                <th scope="col">Uploaded at</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {propertyDocuments.map((item: any) => (
                <tr key={item.key}>
                  <td style={{ color: "#3FDBD1" }}>{item.label}</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>- -</td>
                  <td>
                    <input
                      ref={documentRef}
                      type="file"
                      style={{ display: "none" }}
                      onChange={(event) => uploadFileHandler(event, item)}
                    />
                    <FiUploadCloud
                      style={{ cursor: "pointer" }}
                      onClick={(e: any) => {
                        e.stopPropagation();
                        documentRef.current.click();
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => setCurrent((prev: any) => prev + 1)}
          >
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{ margin: "0 8px" }}
            onClick={() => setCurrent((prev: any) => prev - 1)}
          >
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};

export default PostPropertyThree;
