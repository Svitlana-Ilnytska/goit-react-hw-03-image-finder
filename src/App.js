import React, { Component } from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Spiner from "./components/Loader/Loader";
import Button from "./components/Button/Button";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ToastContainer, toast } from "react-toastify";
import * as api from "./services/api";

import * as styles from "./App.css";

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
  onSearchQuery = (query) => {
    this.setState({
      images: [],
      query: query,
      page: 1,
    });
  };

  fetchImages = () => {
    this.setState({ isLoading: true });
    const { query, page } = this.state;
    
    api
      .fetchImages(query, page)
      .then(({ hits }) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...hits],
          page: prevState.page + 1,
        }))
      )
      .catch((error) =>
        this.setState(toast("Trouble. Something is wrong :("), { error })
      )
      .finally(() => this.setState({ isLoading: false }));
  };

  handleFormSubmit = (images) => {
    this.setState({ images });
  };

  render() {
    const { images, isLoading } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.onSearchQuery} />
        {/* {images.length < 1 && (
          <>
            <p>No more</p>
          </>
        )} */}
        {isLoading ? (
          <Spiner />
        ) : (
          <>
            <ImageGallery images={images} />

            {images.length >= 12 && <Button onSearch={this.fetchImages} />}
          </>
        )}
        <ToastContainer />
      </div>
    );
  }
}
