import "./postproperty.css";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { furnishingItems } from "../../helper/PostPropertyObj";

type FurnishingProps = {
  openFurnishingModal: boolean;
  setFurnishingItemsObj: any;
  setOpenFurnishingModal: any;
};

export default React.memo(function FurnishingStatusModal({
  openFurnishingModal,
  setFurnishingItemsObj,
  setOpenFurnishingModal,
}: FurnishingProps) {
  const [furnishingObj, setfurnishingObj] = useState(furnishingItems);
  
  const handleClose = () => {};
  const handleModalClose = () => {
    
    setFurnishingItemsObj(furnishingObj);
    setfurnishingObj(furnishingItems);
    setOpenFurnishingModal(false);
  };

  const handleIncrement = (key: string) => {
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
    setfurnishingObj(updatedArry);
  };

  const handleDecrement = (key: string) => {
    console.log("increment");
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
    setfurnishingObj(updatedArry);
  };

  const style = {
    position: "absolute" as "absolute",
    top: "38%",
    left: "49%",
    transform: "translate(-50%, -50%)",
    width: 300,
    height: 350,
    bgcolor: "background.paper",
    // boxShadow: 24,
    overflow: "auto",
    p: 4,
  };

  return (
    <Modal
      open={openFurnishingModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="furnishing__status__container">
          <div>
            <button
              className="furnishing__calcel_button"
              onClick={handleModalClose}
            >
              X
            </button>
          </div>
          <div>
            {furnishingObj.map((item: any) => (
              <div key={item.key} className="furnishing__status_wrapper">
                <h6 className="furnioshing__text">{item.label}</h6>
                <div>
                  <button
                    className="funrinishing__buttons"
                    onClick={() => handleDecrement(item.key)}
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
      </Box>
    </Modal>
  );
});
