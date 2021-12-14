import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, onClickImage }) => (
  <ul className={css.imageGallery}>
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
