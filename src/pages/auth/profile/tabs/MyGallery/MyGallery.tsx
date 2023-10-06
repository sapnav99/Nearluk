import React, { useState } from "react";
import "./MyGallery.css";
import Photos from "./MyGalleryPhotos";
import CommonButton from "../../../../../components/common/button/CommonButton";
import { Popconfirm } from "antd";
import room from "../../../../../assets/images/room3.jpg";



function generateAlbums() {
  return Array.from({ length: 10 }).map((_, albumIndex) => ({
    name: `Album ${albumIndex + 1}`,
    images: Array.from({ length: 10 }).map((_, imageIndex) => ({
      id: `${albumIndex}-${imageIndex}`, // Use a unique identifier
      name: `Image ${imageIndex + 1}`,
    })),
  }));
}

const Gallery:React.FC= () => {
  const [activeTab, setActiveTab] = useState("album");
  const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null);
  // const [albumImages, setAlbumImages] = useState<string[]>([]);
  const [albums, setAlbums] = useState(generateAlbums());

  const albumsWithIds = albums.map((album, albumIndex) => ({
    ...album,
    images: album.images.map((image, imageIndex) => ({
      id: `${albumIndex}-${imageIndex}`, // Use a unique identifier
      name: image,
    })),
  }));


  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setSelectedAlbum(null);
    // setAlbumImages([]); // Clear album images when switching tabs
  };
  const handleDeleteAlbum = (albumIndex: number) => {
    const updatedAlbums = [...albums];
    updatedAlbums.splice(albumIndex, 1);
    setAlbums(updatedAlbums);
    setSelectedAlbum(null);
  };
  const handleDeleteImage = (albumIndex: number, imageId: string) => {
    const updatedAlbums = [...albums];
    const album = updatedAlbums[albumIndex];
    const imageIndex = album.images.findIndex((image) => image.id === imageId);

    if (imageIndex !== -1) {
      album.images.splice(imageIndex, 1);
      setAlbums(updatedAlbums);
    }
  };

  // const handleDeleteImage = (albumIndex: number, imageIndex: number) => {
  //   const updatedAlbums = [...albums];
  //   updatedAlbums[albumIndex].images.splice(imageIndex, 1);
  //   setAlbums(updatedAlbums);
  // };
  // const imageArray = Array.from({ length: 10 });

  const handleAlbumImageClick = (albumIndex: number) => {
    // Load album images when an album image is clicked
    setSelectedAlbum(albumIndex);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-2 leftContainer">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeTab === "photos" ? "active" : ""
                  }`}
                  aria-current="page"
                  href="#"
                  onClick={() => handleTabClick("photos")}
                >
                  Your Photos
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className={`nav-link ${
                    activeTab === "album" ? "active" : ""
                  }`}
                  href="#"
                  onClick={() => handleTabClick("album")}
                >
                  Your Album
                </a>
              </li>
            </ul>
          </div>
          <div className="col-10">
            {activeTab === "album" ? (
              // Render album images when the "Your Album" tab is active
              selectedAlbum !== null ? (
                <div>
                  <Photos
                    isOpen={selectedAlbum !== null}
                    onClose={() => setSelectedAlbum(null)}
                    albumIndex={selectedAlbum || 0}
                    images={albumsWithIds[selectedAlbum || 0].images}
                    onDeleteImage={(imageId: string) =>
                      handleDeleteImage(selectedAlbum || 0, imageId)
                    } // Pass the correct onDeleteImage function
                  />

                  <CommonButton
                    onClick={() => setSelectedAlbum(null)}
                    label="Back to Albums"
                    style={{ marginTop: 20 }}
                  />
                </div>
              ) : (
                <div
                  className="album-grid"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    marginLeft: "20px",
                  }}
                >
                  {albums.map((album, albumIndex) => (
                    <div
                      key={albumIndex}
                      style={{
                        flex: "0 0 33.33%",
                        marginTop: "10px",
                        marginLeft: "-20px",
                        justifyContent: "space-evenly",
                      }}
                      className="mainDiv"
                    >
                      <div className="album-square">
                        <div className="album-row">
                          {album.images.slice(0, 2).map((_:any, imageIndex) => (
                            <img
                              key={imageIndex}
                              src={room}
                              // src={`images/resources/user.jpg`} // Replace with the actual image source
                              alt=""
                              style={{
                                width: "45%",
                                height: "auto",
                                border: "solid 1px black",
                                borderRadius: "10px 10px 0 0 ",
                                // borderRadius: 18,
                                // margin: "2px", // Add some spacing between images
                              }}
                              onClick={() => {
                                handleAlbumImageClick(albumIndex);
                              }}
                            />
                          ))}
                        </div>
                        <div className="album-row">
                          {album.images.slice(2, 4).map((_, imageIndex) => (
                            <img
                              key={imageIndex}
                              src={room}
                              // src={`images/resources/user.jpg`}
                              alt=""
                              style={{
                                width: "45%",
                                height: "auto",
                                border: "solid 1px black",
                                // borderRadius:"0 0 10px 10px"
                                // borderRadius: 18,
                                // margin: "2px", // Add some spacing between images
                              }}
                              onClick={() => {
                                handleAlbumImageClick(albumIndex);
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="album-name">{album.name}</div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "25px",
                          marginBottom: "15px",
                          borderRadius: "0 0 10px 10px",
                        }}
                      >
                        <Popconfirm
                          title="Delete the Album"
                          description="Are you sure to delete this Album?"
                          okText="Yes"
                          cancelText="No"
                          onConfirm={() => {
                            handleDeleteAlbum(albumIndex);
                          }}
                          onCancel={() => {
                            console.log("Deletion canceled by the user");
                          }}
                        >
                          <CommonButton
                            label="Delete"
                            // onClick={() => {
                            //   handleDeleteAlbum(albumIndex);
                            // }}
                          />
                        </Popconfirm>
                      </div>
                    </div>
                  ))}
                </div>
              )
            ) : (
              <div>
                <p>Images for Your Album will be displayed here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
