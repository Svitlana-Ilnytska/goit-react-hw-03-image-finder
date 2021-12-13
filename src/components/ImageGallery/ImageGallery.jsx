import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images, onClickImage }) =>
  images.length > 0 && (
    <ul>
      {images.map((image) => {
        return (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onClickImage={() => onClickImage(image.id)}
          />
        );
      })}
    </ul>
  );

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onClickImage: PropTypes.func.isRequired,
};

export default ImageGallery;
