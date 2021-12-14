const API_KEY = "24180904-cdf25eb395cc9b94381638218";
const BASE_URL = "https://pixabay.com";

export function fetchImages(query, page) {
  return fetch(
    `${BASE_URL}/api/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${API_KEY}`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  });
}

const api = {
  fetchImages,
};

export default api;
