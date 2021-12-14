import React, { Component } from "react";

import css from "./Searchbar.module.css";

export default class Searchbar extends Component {
  state = {
    images: "",
  };

  handleNameChange = (e) => {
    this.setState({ images: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.images.trim() === "") {
      return console.log("введіть щось");
    }

    this.props.onSubmit(this.state.imageName);
    this.setState({ images: "" });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form onSubmit={this.handleSubmit} className={css.form}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={this.state.images}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}
