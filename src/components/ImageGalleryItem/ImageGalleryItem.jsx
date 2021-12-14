import React from "react";
import PropTypes from "prop-types";

import css from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ image, onClickImage }) => (
  <li className={css.imageGalleryItem}>
    <img
      src={image.webformatURL}
      alt={image.tags}
      onClickImage={(e) => onClickImage(image.id)}
      className={css.image}
    />
  </li>
);

ImageGalleryItem.defaultProps = {
  tags: "",
};

ImageGalleryItem.propTypes = {
  image: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string,
    }).isRequired
  ).isRequired,
  onClickImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;

// const API_KEY = "24180904-cdf25eb395cc9b94381638218";
// const BASE_URL = "https://pixabay.com";
// export default class ImageGalleryItem extends Component {
//   state = {
//     image: null,
//     loading: false,
//     // error: null,
//     status: "idle",
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const prevName = prevProps.imageName;
//     const nextName = this.props.imageName;

//     if (prevName !== nextName) {
//       this.setState({ status: "pending" });

//       this.setState({ loading: true });
//       fetch(
//         `${BASE_URL}/api/?image_type=photo&orientation=horizontal&q=${nextName}&page=1&per_page=12&key=${API_KEY}`
//       )
//         .then((res) => res.json())
//         .then((image) => this.setState({ image }))
//         .finally(() => this.setState({ loading: false }));

//       //  ImageApi
//       //  .fetchImages(nextName)
//       //  .then(image => this.setState ({image, status:'resolved'}));
//       //  .catch(error => this.setState({error, status:'rejected'}))
//     }
//   }

//   render() {
//     const { image, loading } = this.state;
//     const { imageName } = this.props;

//     // if(status === 'idle') {
//     //     return <div>Введіть щось</div>
//     // }

//     // // ша(іефегі === 'pending') {
//     // //     return <Loader  />
//     // // }
//     return (
//       <div>
//         {loading && <div> Йде загрузка...</div>}
//         {/* <div> {this.props.imageName}</div> */}
//         {!imageName && <div>введіть назву</div>}
//         {image && (
//         //   <li className={css.imageGalleryItem }>
//             <img
//               src={image.hits.webformatURL}
//               alt={image.hits.tags}
//               className={css.image}
//             />
//         //   </li>
//         )}
//       </div>
//     );
//   }
// }
