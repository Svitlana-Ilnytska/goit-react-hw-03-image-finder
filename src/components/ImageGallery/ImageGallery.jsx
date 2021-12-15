import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, onClickImage }) => (
  <ul className={css.imageGallery}>
    {images.map((image) => {
      return (
        <li key={image.id} className={css.imageGalleryItem}>
          <ImageGalleryItem
            webformatURL={image.webformatURL}
            tags={image.tags}
            onClickImage={() => onClickImage(image.id)}
          />
        </li>
      );
    })}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string,
    }).isRequired
  ).isRequired,
  onClickImage: PropTypes.func,
};

export default ImageGallery;