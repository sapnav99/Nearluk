import React, { useState } from "react";
import { Modal } from "antd";
import { furnishingItems } from "../PostPropertyData";
import "./furnishingmodal.css";

type FurnishingProps = {
  openFurnishingModal: boolean;
  setOpenFurnishingModal: any;
  setFurnishingItemsObj: any
};

const FurnishingStatusModal: React.FC<FurnishingProps> = ({
  openFurnishingModal,
  setOpenFurnishingModal,
  setFurnishingItemsObj,
}: FurnishingProps) => {
  const [furnishingObj, setFurnishingObj] = useState(furnishingItems);
  //   const showModal = () => {
  //     setOpenFurnishingModal(true);
  //   };

  const handleOk = () => {
    setOpenFurnishingModal(false);
    setFurnishingItemsObj(furnishingObj);
  };

  const handleCancel = () => {
    setOpenFurnishingModal(false);
  };

  const handleIncrement = (key: any) => {
    console.log("increment");
    const newArry = [...furnishingObj];
    const updatedArry = newArry.map((item) => {
      if (item.key === key) {
        return {
          ...item,
          count: item.count + 1,
        };
      }
      return item;
    });
    setFurnishingObj(updatedArry);
  };

  const handleDecrement = (key: any) => {
    const newArry = [...furnishingObj];
    const updatedArry = newArry.map((item) => {
      if (item.key === key) {
        return {
          ...item,
          count: item.count - 1,
        };
      }
      return item;
    });
    setFurnishingObj(updatedArry);
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        open={openFurnishingModal}
        onOk={handleOk}
        onCancel={handleCancel}
        style={{ maxHeight: "80vh" }}
      >
        <div className="furnishing__status__container">
          <div style={{ overflowY: "auto", maxHeight: "calc(80vh - 110px)" }}>
            {furnishingObj.map((item: any) => (
              <div key={item.key} className="furnishing__status_wrapper">
                <h6 className="furnioshing__text">{item.label}</h6>
                <div>
                  <button
                    className="funrinishing__buttons"
                    onClick={() => handleDecrement(item.key)}
                    disabled={item.count == 0}
                  >
                    -
                  </button>
                  {item.count}
                  <button
                    className="funrinishing__buttons"
                    onClick={() => handleIncrement(item.key)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default FurnishingStatusModal;
