import React from 'react';
import './ImageContainer.css'; // Your CSS file

interface ImageProps {
  url: string;
}

const ImageComponent: React.FC<ImageProps> = ({ url }) => {
  return (
    <div className="image-container">
      <img src={url} alt="Property Image" className="contained-image" />
    </div>
  );
};

export default ImageComponent;
