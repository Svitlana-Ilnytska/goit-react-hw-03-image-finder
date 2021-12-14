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

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;

    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
  }

  fetchImages = (query, page) => {
    this.setState({ isLoading: true });

    api
      .fetchImages(query, page)
      .then(({ hits }) =>
        this.setState((prevState) => ({
          images: hits,
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

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
