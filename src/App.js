import React, { Component } from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import * as api from "./services/api";

export default class App extends Component {
  state = {
    images: [],
    query: "",
    page: 1,
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ query: "" });
  }
  fetchImages = (query) => {
    this.setState({ isLoading: true });

    api
      .fetchImages(query)
      .then(({ hits }) => this.setState({ images: hits }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  // componentDidUpdate(prevProps, prevState) {
  //   const prevImages = prevProps.images;
  //   const nextImages = this.props.images;

  //   if (prevImages !== nextImages) {
  //     this.setState({ status: "pending" });

  //     this.setState({ loading: true });
  //     fetch(
  //       `${BASE_URL}/api/?image_type=photo&orientation=horizontal&q=${nextImages}&page=1&per_page=12&key=${API_KEY}`
  //     )
  //       .then((res) => res.json())
  //       .then((image) => this.setState({ image }))
  //       .finally(() => this.setState({ loading: false }));
  //   }
  // }

  handleFormSubmit = (images) => {
    this.setState({ images });
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.fetchImages} />

        {isLoading ? (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        ) : (
          <ImageGallery images={images} />
        )}
      </div>
    );
  }
}
