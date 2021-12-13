import React, { Component } from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGalleryItem from "./components/ImageGalleryItem/ImageGalleryItem";

export default class App extends Component {
  state = {
    imageName: "",
  };

  handleFormSubmit = (imageName) => {
    this.setState({ imageName });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGalleryItem imageName={this.state.imageName} />
      </div>
    );
  }
}
