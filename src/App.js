import React, { Component } from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Spiner from "./components/Loader/Loader";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";

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
    largeImageURL: "",
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;

    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    if (prevPage !== nextPage) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
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
    this.setState({ status: "pending" });
    const { query, page } = this.state;

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

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImageURL: "",
    }));
  };

  handleClickImage = (largeImageURL) => {
    this.setState({
      largeImageURL: largeImageURL,
      showModal: true,
    });
  };

  render() {
    const { images, status, showModal, largeImageURL } = this.state;

    if (status === "idle") {
      return <Searchbar onSubmit={this.onSearchQuery} />;
    }

    if (status === "pending") {
      return <Spiner />;
    }

    if (status === "rejected") {
      return <p> Please try again latter </p>;
    }

    if (status === "resolved") {
      return (
        <div>
          <Searchbar onSubmit={this.onSearchQuery} />
          <ImageGallery images={images} onClickImage={this.handleClickImage} />
          {images.length < 1 && (
            <p className="notification"> Nothing found :( </p>
          )}
          {showModal && (
            <Modal onClose={this.toggleModal}>
              <img src={largeImageURL} alt="" />
            </Modal>
          )}
          {images.length >= 12 ? <Button onSearch={this.fetchImages} /> : null}
          <ToastContainer />
        </div>
      );
    }
  }
}
