import React from "react";
import PropTypes from "prop-types";

import css from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ id, webformatURL, tags, onClickImage }) => (
  <img
    src={webformatURL}
    alt={tags}
    onClick={onClickImage}
    className={css.image}
  />
);

ImageGalleryItem.defaultProps = {
  tags: "",
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
  onClickImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
