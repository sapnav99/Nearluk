import React, { useState, useRef, useMemo } from "react";
import {
  ownerShipData,
  proximityFeaturesData,
  propertyDocumentsData,
  imgCategory,
  playgroundfeaturesData,
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
import { AiOutlineCheck } from "react-icons/ai";
import moment from "moment";
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
  const [playgroundFeatures, setPlaygroundFeatures] = useState(
    playgroundfeaturesData
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
    price_per_sharing: "",
    food_charges: false,
    booking_amount: "",
    hourly_booking: "",
    per_day_booking: "",
    monthly_subcription: "",
    other_charges: "",
    event_spacing_price_per_hour: "",
    event_spacing_price_per_day: "",
    event_spacing_food_per_plate: "",
    event_spacing_decoration: "",
    event_spacing_photoshoot: "",
    event_spacing_dj: "",
    event_spacing_booking: "",
    event_spacing_other: "",
    advance_deposi: "",
  });

  const totalData = useSelector(
    (state: any) => state?.PostpropertyReducer?.propertyState
  );

  console.log("flatemate from step thrtee", totalData.iwant);

  const date = new Date();
  // const documentRef: any = useRef();
  const documentRefs: any = [];

  console.log(propertyDocuments);
  // console.log("total data at step three", totalData);

  const otherStepThreeData = useMemo(
    () => ({
      promimaty_feature: proximatyFeature.filter(
        (item: any) => item.active === true
      ),
      image_gallery: imagePreview,
      propertyy_document: propertyDocuments.filter(
        (item: any) => item.status === true
      ),
      playground_features: playgroundFeatures.filter(
        (item: any) => item.active === true
      ),
    }),
    [proximatyFeature, imagePreview, propertyDocuments, playgroundFeatures]
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
    const urlOfServer = await uploadtoServer(formData);
    // console.log(urlOfServer);
    // const urlOfServer = "image url";
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
  };

  const activateProximatyFeature = (key: any) => {
    const shallowCopy = [...proximatyFeature];
    const updatedArry = shallowCopy.map((item: any) => ({
      ...item,
      active: item.key === key ? !item.active : item.active,
    }));
    setProximatyFeature(updatedArry);
  };

  const activatePlaygroundFeature = (key: any) => {
    const shallowCopy = [...playgroundFeatures];
    const updatedArry = shallowCopy.map((item: any) => ({
      ...item,
      active: item.key === key ? !item.active : item.active,
    }));
    setPlaygroundFeatures(updatedArry);
  };

  const generateAiDescription = async () => {};

  const upLoadFiletoServer = async (file: File) => {
    try {
      const response = await Api.post("property/upload-pdf", file);
      // console.log("response", response);
      return response?.data?.data;
    } catch (err) {}
  };

  const uploadFileHandler = async (e: any, item: any) => {
    e.stopPropagation();
    // console.log("file", e.target.files[0]);
    // console.log(item);
    const formData: any = new FormData();
    formData.append("file", e.target.files[0]);
    const serverUri = await upLoadFiletoServer(formData);
    // console.log("serverUri", serverUri);
    if (serverUri) {
      const shallow = [...propertyDocuments];
      const mapped: any = shallow.map((child: any) => {
        if (child.key === item.key) {
          (child.uploaded = true),
            (child.status = true),
            (child.uploadOn = moment(date).format("YYYY-MM-DD")),
            (child.serverUri = serverUri);
        }
        return child;
      });
      setPropertyDocuments(mapped);
    }
  };

  const handleDeleteFile = (item: any) => {
    const shallow = [...propertyDocuments];
    const mapped: any = shallow.map((child: any) => {
      if (child.key === item.key) {
        (child.uploaded = false),
          (child.status = false),
          (child.uploadOn = ""),
          (child.serverUri = "");
      }
      return child;
    });
    setPropertyDocuments(mapped);
  };

  return (
    <div>
      {!(
        totalData.property_type === "parking" ||
        totalData.property_type === "play-ground" ||
        totalData.property_type === "event-spaces" ||
        totalData.property_type === "hostel"
      ) && (
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
      )}
      {totalData.property_type === "play-ground" && (
        <div className="playground__feature_container">
          <h6 className="property__title">Play Ground Features</h6>
          <div className="playgropund__feature_wrapper">
            {playgroundFeatures.map((item: any) => (
              <PropChipWithCheckBox
                item={item}
                key={item.key}
                onChange={() => activatePlaygroundFeature(item.key)}
              />
            ))}
          </div>
          <hr />
        </div>
      )}
      <div
        className="price__details"
        style={{
          display: totalData.property_type === "parking" ? "none" : "block",
        }}
      >
        <h6 className="property__title">Price Details</h6>
        <div className="price__detailing__container">
          {totalData.iwant === "find-a-flatemate" ? (
            <>
              <PropInput
                placeholder="Price per Sharing"
                value={stepThreeData.price_per_sharing}
                onChange={(e: any) => {
                  setStepThreeData({
                    ...stepThreeData,
                    price_per_sharing: e.target.value,
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
                placeholder="Booking Amount"
                value={stepThreeData.booking_amount}
                onChange={(e: any) => {
                  setStepThreeData({
                    ...stepThreeData,
                    booking_amount: e.target.value,
                  });
                }}
              />
            </>
          ) : totalData.property_type === "play-ground" ? (
            <>
              <PropInput
                placeholder="Hourly booking"
                value={stepThreeData.hourly_booking}
                onChange={(e: any) => {
                  setStepThreeData({
                    ...stepThreeData,
                    hourly_booking: e.target.value,
                  });
                }}
              />
              <PropInput
                placeholder="Per day booking"
                value={stepThreeData.per_day_booking}
                onChange={(e: any) => {
                  setStepThreeData({
                    ...stepThreeData,
                    per_day_booking: e.target.value,
                  });
                }}
              />
              <PropInput
                placeholder="Monthly subscription"
                value={stepThreeData.monthly_subcription}
                onChange={(e: any) => {
                  setStepThreeData({
                    ...stepThreeData,
                    monthly_subcription: e.target.value,
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
              <PropInput
                placeholder="Other Charges"
                value={stepThreeData.other_charges}
                onChange={(e: any) => {
                  setStepThreeData({
                    ...stepThreeData,
                    other_charges: e.target.value,
                  });
                }}
              />
            </>
          ) : totalData.property_type === "event-spaces" ? (
            <>
              <PropInput
                placeholder="Per Hour"
                value={stepThreeData.event_spacing_price_per_hour}
                onChange={(e: any) => {
                  setStepThreeData({
                    ...stepThreeData,
                    event_spacing_price_per_hour: e.target.value,
                  });
                }}
              />
              <PropInput
                placeholder="Per Day"
                value={stepThreeData.event_spacing_price_per_day}
                onChange={(e: any) => {
                  setStepThreeData({
                    ...stepThreeData,
                    event_spacing_price_per_day: e.target.value,
                  });
                }}
              />
              <PropInput
                placeholder="Food per Plate"
                value={stepThreeData.event_spacing_food_per_plate}
                onChange={(e: any) => {
                  setStepThreeData({
                    ...stepThreeData,
                    event_spacing_food_per_plate: e.target.value,
                  });
                }}
              />
              <PropInput
                placeholder="Decoration"
                value={stepThreeData.event_spacing_decoration}
                onChange={(e: any) => {
                  setStepThreeData({
                    ...stepThreeData,
                    event_spacing_decoration: e.target.value,
                  });
                }}
              />
              <PropInput
                placeholder="Photoshoot"
                value={stepThreeData.event_spacing_photoshoot}
                onChange={(e: any) => {
                  setStepThreeData({
                    ...stepThreeData,
                    event_spacing_photoshoot: e.target.value,
                  });
                }}
              />
              <PropInput
                placeholder="DJ"
                value={stepThreeData.event_spacing_dj}
                onChange={(e: any) => {
                  setStepThreeData({
                    ...stepThreeData,
                    event_spacing_dj: e.target.value,
                  });
                }}
              />
              <PropInput
                placeholder="Booking"
                value={stepThreeData.event_spacing_booking}
                onChange={(e: any) => {
                  setStepThreeData({
                    ...stepThreeData,
                    event_spacing_booking: e.target.value,
                  });
                }}
              />
              <PropInput
                placeholder="Booking"
                value={stepThreeData.event_spacing_other}
                onChange={(e: any) => {
                  setStepThreeData({
                    ...stepThreeData,
                    event_spacing_other: e.target.value,
                  });
                }}
              />
            </>
          ) : totalData.property_type === "hostel" ? (
            <>
              <PropInput
                placeholder="Price per Sharing"
                value={stepThreeData.price_per_sharing}
                onChange={(e: any) => {
                  setStepThreeData({
                    ...stepThreeData,
                    price_per_sharing: e.target.value,
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
              <PropInput
                placeholder="Advance Deposit"
                value={stepThreeData.advance_deposi}
                onChange={(e: any) => {
                  setStepThreeData({
                    ...stepThreeData,
                    advance_deposi: e.target.value,
                  });
                }}
              />
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
        <div className="price__details__checkbox_container">
          {totalData.iwant === "find-a-flatemate" ||
          totalData.property_type === "play-ground" ? (
            <>
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
                    food_charges: e.target.checked,
                  });
                }}
              >
                Food charges
              </Checkbox>
            </>
          ) : totalData.property_type === "event-spaces" ||
            totalData.property_type === "hostel" ? (
            <>
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
                    all_inclusive_price: e.target.checked,
                  });
                }}
              >
                All Inclusive Price
              </Checkbox>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>

      <hr />
      <div>
        <h6 className="property__title">Property Photo</h6>
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
        <h6 className="property__title">Property Description</h6>
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
        <h6 className="property__title">Property Highlights</h6>
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
              key={item.key}
              onChange={() => activateProximatyFeature(item.key)}
            />
          ))}
        </div>
        <hr />
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
              {propertyDocuments.map((item: any, index: number) => (
                <tr key={item.key}>
                  <td style={{ color: "#3FDBD1" }}>{item.label}</td>
                  <td>Otto</td>
                  <td>
                    {item.status ? <AiOutlineCheck color="green" /> : "--"}
                  </td>
                  <td>{item.uploadOn ? item.uploadOn : "--"}</td>
                  <td>
                    <input
                      ref={(ele) => (documentRefs[index] = ele)}
                      type="file"
                      style={{ display: "none" }}
                      onChange={(event) => uploadFileHandler(event, item)}
                    />
                    {item.status ? (
                      <AiFillDelete
                        style={{ cursor: "pointer", color: "red" }}
                        onClick={() => handleDeleteFile(item)}
                      />
                    ) : (
                      <FiUploadCloud
                        style={{ cursor: "pointer" }}
                        onClick={(e: any) => {
                          e.stopPropagation();
                          documentRefs[index].click();
                        }}
                      />
                    )}
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
