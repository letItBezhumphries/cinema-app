import axios from 'axios';

const REQUEST_URL = 'https://api.themoviedb.org/3';

export const IMAGE_URL = 'https://image.tmdb.org/t/p/original';

const API_KEY = import.meta.env.VITE_API_KEY;

console.log('API_KEY:', API_KEY);

// for now playing movies
export const MOVIE_API_URL = async (type, page) => {
  const response = await axios.get(`${REQUEST_URL}/movie/${type}?api_key=${API_KEY}&language=en-US&page=${page}`);
  return response;
};

// for searching movies
export const MOVIE_SEARCH_URL = async (query) => {
  const response = await axios.get(`${REQUEST_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`);
  return response;
};

export const MOVIE_DETAILS_URL = async (movieId) => {
  const response = await axios.get(`${REQUEST_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
  return response;
};

export const MOVIE_CREDITS_URL = async (movieId) => {
  const response = await axios.get(`${REQUEST_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
  return response;
};

export const MOVIE_IMAGES_URL = async (movieId) => {
  const response = await axios.get(`${REQUEST_URL}/movie/${movieId}/images?api_key=${API_KEY}&language=en-US&include_image_language=en`);
  return response;
};

export const MOVIE_TRAILERS_URL = async (movieId) => {
  const response = await axios.get(`${REQUEST_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`);
  return response;
};

export const MOVIE_REVIEWS_URL = async (movieId, page = 1) => {
  const response = await axios.get(`${REQUEST_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=${page}`);
  return response;
};
