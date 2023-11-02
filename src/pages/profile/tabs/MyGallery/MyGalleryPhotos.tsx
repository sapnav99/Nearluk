import React from "react";
import CommonButton from "../../../../../components/common/button/CommonButton";
import room from "../../../../../assets/images/room3.jpg";
type AlbumGalleryViewProps = {
  isOpen?: boolean;
  onClose?: () => void;
  albumIndex?: number;
  images?:any; // Updated prop type
  onDeleteImage?:any;
};

const Photos: React.FC<AlbumGalleryViewProps> = ({
  isOpen,
  albumIndex,
  images,
  onDeleteImage,
}) => {
  if (!isOpen) return null;

  return (
    <div className="gallery-modal">
      <h2>Album Gallery</h2>
      <p>Gallery for Album {albumIndex}</p>

      {images.map((image:any) => (
        <div style={{ display: "inline-block" }} key={image.id}>
          <img
            src={room}
            alt=""
            style={{
              width: 150,
              height: 150,
              borderRadius: 18,
              padding: 10,
            }}
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* <div>
              <p>Image {image.id}</p>
            </div> */}
            <CommonButton
              label="Delete"
              onClick={() => onDeleteImage(image?.id)} // Corrected here
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Photos;
