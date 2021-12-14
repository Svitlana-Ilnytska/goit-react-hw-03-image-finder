import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, onClickImage }) => (
  <ul className={css.imageGallery}>
    {images.map(({ id, webformatURL, tags }) => {
      return (
        <ImageGalleryItem
          key={id}
          image={webformatURL}
          tags={tags}
          onClickImage={() => onClickImage(id)}
        />
      );
    })}
  </ul>
);

ImageGallery.defaultProps = {
  tags: "",
};

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
