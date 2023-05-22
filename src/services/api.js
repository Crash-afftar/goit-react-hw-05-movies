import axios from 'axios';

const API_KEY = '25510e2ecba168b3969766d5c3ce39fa';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = { api_key: API_KEY };


export async function fetchMoviesTrend() {
  const { data } = await axios.get('/trending/movie/week');
  return data;
};

export async function fetchMovieByName(query, page = 1) {
  const params = { query, language: 'en-US', page };
  const { data } = await axios.get('/search/movie', { params });
  return data;
};

export async function getMovieById(id) {
  const { data } = await axios.get(`/movie/${id}`);
  return data;
}

export async function fetchMovieCast(id) {
  const { data } = await axios.get(`/movie/${id}/credits`);
  return data.cast;
}

export async function fetchMovieReviews(id) {
  const { data } = await axios.get(`/movie/${id}/reviews`);
  return data.results;
}