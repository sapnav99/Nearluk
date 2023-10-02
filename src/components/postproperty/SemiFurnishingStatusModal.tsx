import "./postproperty.css";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { furnishingItems } from "../../helper/PostPropertyObj";

type SemiFurnishProps = {
  openFurnishingModal: boolean;
  setOpenFurnishingModal: any;
  setSemiFurnishingItemsObj: any;
};

const SemiFurnishingStatusModal = ({
  openFurnishingModal,
  setOpenFurnishingModal,
  setSemiFurnishingItemsObj,
}: SemiFurnishProps) => {
  const [furnishingObj, setFurnishingObj] = useState(furnishingItems);

  const handleClose = () => {};

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

  const handleModalClose = () => {
    const finalArry = furnishingObj.filter((item) => item.count > 0);
    setSemiFurnishingItemsObj(finalArry);
    setFurnishingObj(furnishingItems);
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
    setFurnishingObj(updatedArry);
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
    setFurnishingObj(updatedArry);
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
              <div className="furnishing__status_wrapper">
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
};

export default React.memo(SemiFurnishingStatusModal);
