import React, { Component } from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Spiner from "./components/Loader/Loader";
import Button from "./components/Button/Button";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ToastContainer, toast } from "react-toastify";
import * as api from "./services/api";

import "./App.css";

export default class App extends Component {
  state = {
    images: [],
    query: "",
    page: 1,
    status: "idle",
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

  scrollToBottom = () => {
    window.scrollBy({ top: -50, left: 0, behavior: "smooth" });
  };

  fetchImages = () => {
    this.setState({ status: "pending" });
    const { query, page } = this.state;

    if (page !== 1) {
      this.scrollToBottom();
    }

    api
      .fetchImages(query, page)
      .then(({ hits }) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...hits],
          page: prevState.page + 1,
          status: "resolved",
        }))
      )

      .catch((error) =>
        this.setState(toast("Trouble. Something is wrong :("), {
          error,
          status: "rejected",
        })
      );
  };

  handleFormSubmit = (images) => {
    this.setState({ images });
  };

  render() {
    const { images, status } = this.state;

    if (status === "idle") {
      return <Searchbar onSubmit={this.onSearchQuery} />;
    }

    if (status === "pending") {
      return <Spiner />;
    }

    if (status === "rejected") {
      return <p>No more</p>;
    }

    if (status === "resolved") {
      return (
        <div>
          <Searchbar onSubmit={this.onSearchQuery} />
          <ImageGallery images={images} />
          {images.length >= 12 && <Button onSearch={this.fetchImages} />}
          <ToastContainer />
        </div>
      );
    }
  }
}
