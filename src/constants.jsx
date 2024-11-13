export const REQUEST_URL = 'https://api.themoviedb.org/3';

export const IMAGE_URL = 'https://image.tmdb.org/t/p/original';

const API_KEY = import.meta.API_KEY;

export const MOVIE_API_URL = `${REQUEST_URL}/movie/${type}?api_key=${API_KEY}&language=en-US&page=${page}`;

export const MOVIE_SEARCH_URL = `${REQUEST_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`;

export const MOVIE_DETAILS_URL = `${REQUEST_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`;

export const MOVIE_CREDITS_URL = `${REQUEST_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;

export const MOVIE_IMAGES_URL = `${REQUEST_URL}/movie/${movieId}/images?api_key=${API_KEY}&language=en-US&include_image_language=en`;

export const MOVIE_TRAILERS_URL = `${REQUEST_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`;

export const MOVIE_REVIEWS_URL = `${REQUEST_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=${page}`;


