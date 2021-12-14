import React from "react";
import PropTypes from "prop-types";

import css from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ image, onClickImage }) => (
  <li className={css.imageGalleryItem}>
    <img
      src={image}
      alt={image.tags}
      onClickImage={(e) => onClickImage(image.id)}
      className={css.image}
    />
  </li>
);

ImageGalleryItem.defaultProps = {
  tags: "",
};

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  id: PropTypes.number,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,

  onClickImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
