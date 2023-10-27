import axios from 'axios';

const API_KEY = '04b6898fe2a359221b661cde8da125b3';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function serviceTrendingMovies() {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data;
}

export async function serviceSearchMovies(query, page = 1) {
  const params = new URLSearchParams({
    api_key: API_KEY,
    query: query,
    page: page,
  });

  const response = await axios.get(`/search/movie?${params}`);
  return response.data;
}

export async function serviceMovieDetails(movieId) {
  const response = await axios.get(`/movie/${movieId}`);
  return response.data;
}

export async function serviceMovieCredits(movieId) {
  const response = await axios.get(`/movie/${movieId}/credits`);
  return response.data;
}

export async function serviceMovieReviews(movieId) {
  const response = await axios.get(`/movie/${movieId}/reviews`);
  return response.data;
}
