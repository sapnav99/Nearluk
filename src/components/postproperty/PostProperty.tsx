import  { Dispatch, SetStateAction, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PostPropertyOne from "./PostPropertyOne";
import { data } from "../../helper/PostPropertyObj";
import PostPropertyTwo from "./PostPropertyTwo";
import "./postproperty.css";
import  { SelectChangeEvent } from "@mui/material/Select";

interface ModalProps {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

export default function PostProperty({ openModal, setOpenModal }: ModalProps) {
  const [stepOne, setStepOne] = useState(true);
  const [stepTwo, setStepTwo] = useState(false);
  const [stepOneData, setStepOneData] = useState({});
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 600,
    bgcolor: "background.paper",
    // border: '1px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: "auto",
    overflowX: "hidden",
  };

  const handleClose = (event: SelectChangeEvent, reason: string) => {
    if (reason && reason == "backdropClick") return;
    setOpenModal(false);
  };

  const handleCloseButton = () => {
    setOpenModal(false);
    setStepTwo(false);
    setStepOne(true);
  };

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ marginBottom: "5px" }}
            >
              Sell or Rent Your Property for Free
            </Typography>
            <button className="cancle__button" onClick={handleCloseButton}>
              X
            </button>
          </div>
          {stepOne && (
            <PostPropertyOne
              data={data}
              setStepOne={setStepOne}
              setStepTwo={setStepTwo}
            />
          )}
          {stepTwo && (
            <PostPropertyTwo
              setStepOne={setStepOne}
              setStepTwo={setStepTwo}
              stepOneData={stepOneData}
              setOpenModal={setOpenModal}
            />
          )}
        </Box>
      </Modal>
    </div>
  );
}
