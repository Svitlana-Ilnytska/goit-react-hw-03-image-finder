const API_KEY = "24180904-cdf25eb395cc9b94381638218";
const BASE_URL = "https://pixabay.com";

function fetchImages(image) {
  return fetch(
    `${BASE_URL}/api/?image_type=photo&orientation=horizontal&q=${this.props.imageName}&page=${this.page}&per_page=12&key=${API_KEY}`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Error`));
  });
}

const api = {
  fetchImages,
};

export default api;
