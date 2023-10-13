import { Modal } from "antd";
import "./imagegallerymodal.css";
import { useSelector } from "react-redux";
import { useState } from "react";

interface ModalProps {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
}

const ImageGalleryModal = ({ openModal, setOpenModal }: ModalProps) => {
  //   const [open, setOpen] = useState(false);
  const data = useSelector(
    (state: any) => state?.userPropDetailsReducer?.userProperty
  );
  //   console.log("data from moadal", data);
  const [images, setImages] = useState([]);

  const groupedData = data.property?.image_gallery?.reduce(
    (result: any, item: any) => {
      const category = item.category;
      if (!result[category]) {
        result[category] = [];
      }
      result[category].push(item);
      return result;
    },
    {}
  );

  const setCategoryImages = (item: any) => {
    // console.log(groupedData[item]);
    if (groupedData[item]) {
      setImages(groupedData[item]);
    }
  };

  console.log(images);

  //   const array = Object.keys(groupedData);
  console.log("grouped data", groupedData);

  return (
    <>
      {/* <Button type="primary" onClick={() => setOpenModal(true)}>
        Open Modal of 1000px width
      </Button> */}
      <Modal
        centered
        open={openModal}
        onOk={() => setOpenModal(false)}
        onCancel={() => setOpenModal(false)}
        width={1200}
        footer={null}
        className="custom-modal"
      >
        <div className="container">
          <div className="chip__container">
            <div className="chip__wrapper">
              {Object.keys(groupedData).map((item, index) => (
                <div
                  className="chip"
                  key={index}
                  onClick={() => {
                    if (item) {
                      setCategoryImages(item);
                    }
                    setCategoryImages("others");
                  }}
                >
                  {item ? item : "other"}
                </div>
              ))}
            </div>
            <div className="image__container">
              <div className="row">
                {images &&
                  images.map((item: any) => (
                    <div className="col-lg-3 mt-3" key={item.id}>
                      <img className="property__img" src={item.serveruri} alt="" />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ImageGalleryModal;
