import React, { Component } from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";

const API_KEY = "24180904-cdf25eb395cc9b94381638218";
const BASE_URL = "https://pixabay.com";

export default class App extends Component {
  state = {
    images: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const prevImages = prevProps.images;
    const nextImages = this.props.images;

    if (prevImages !== nextImages) {
      this.setState({ status: "pending" });

      this.setState({ loading: true });
      fetch(
        `${BASE_URL}/api/?image_type=photo&orientation=horizontal&q=${nextImages}&page=1&per_page=12&key=${API_KEY}`
      )
        .then((res) => res.json())
        .then((image) => this.setState({ image }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  handleFormSubmit = (images) => {
    this.setState({ images });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {/* <ImageGalleryItem image={this.state.imageName} /> */}
        <ImageGallery images={this.state.images} />
      </div>
    );
  }
}
