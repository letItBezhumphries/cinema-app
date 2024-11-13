import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { REQUEST_URL } from '../constants';

const API_KEY = import.meta.API_KEY;

// Define a service using a base URL and expected endpoints
export const moviesDatabaseApi = createApi({
  reducerPath: 'moviesDatabaseApi',
  baseQuery: fetchBaseQuery({ baseUrl: REQUEST_URL }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: (type, page) => `${REQUEST_URL}/movie/${type}?api_key=${API_KEY}&language=en-US&page=${page}`,
    }),
    movieSearch: builder.query({
      query: (term) =>
        `${REQUEST_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${term}`,
    }),
    getMovieDetails: builder.query({
      query: (movieId) =>
        `${REQUEST_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
    }),
    getMovieCredits: builder.query({
      query: (movieId) =>
        `${REQUEST_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
    }),
    getMovieImages: builder.query({
      query: (movieId) =>
        `${REQUEST_URL}/movie/${movieId}/images?api_key=${API_KEY}&language=en-US&include_image_language=en`,
    }),
    getMovieTrailers: builder.query({
      query: (movieId) =>
        `${REQUEST_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`,
    }),
    getMovieReviews: builder.query({
      query: (movieId, page = 1) =>
        `${REQUEST_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=${page}`,
    }),
    keepUnusedDataFor: 5,
  }),
});


export const {
  useGetMoviesQuery,
  useMovieSearchQuery,
  useGetMovieDetailsQuery,
  useGetMovieCreditsQuery,
  useGetMovieImagesQuery,
  useGetMovieTrailersQuery,
  useGetMovieReviewQuery,
} = moviesDatabaseApi;