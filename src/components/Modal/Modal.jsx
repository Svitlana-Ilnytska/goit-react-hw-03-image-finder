import React from "react";
import PropTypes from "prop-types";

import css from "./Modal.module.css";

const Modal = ({ id, largeImageURL, tags, onClickImage }) => (
  <div className={css.overlay}>
    <div className={css.modal}>
      <img
        src={largeImageURL}
        alt={tags}
        onClick={onClickImage}
        className={css.image}
      />
    </div>
  </div>
);

Modal.defaultProps = {
  tags: "",
};

Modal.propTypes = {
  id: PropTypes.number,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
  onClickImage: PropTypes.func.isRequired,
};

export default Modal;
