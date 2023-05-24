import axios from 'axios';

const API_KEY = '25510e2ecba168b3969766d5c3ce39fa';
const API_URL_TRENDING_MOVIE =
  'https://api.themoviedb.org/3/trending/movie/week';
const API_URL_MOVIE_ID = 'https://api.themoviedb.org/3/movie/';

const API_URL_SEARCH = 'https://api.themoviedb.org/3/search/movie';


export const fetchMoviesTrend = async page => {
  const { data } = await axios.get(API_URL_TRENDING_MOVIE, {
    params: {
      api_key: API_KEY,
      page: page,
      per_page: 6,
    },
  });
  return data;
};


export const fetchMovieByName = async (searchQuery, page) => {
  const {data } = await axios.get(API_URL_SEARCH, {
    params: {
      api_key: API_KEY,
      query: searchQuery,
      page: page,
    }
  })

  return data;
}


export const getMovieById = async id => {
  const { data } = await axios.get(`${API_URL_MOVIE_ID + String(id)}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

export const getReviews = async id => {
  const { data } = await axios.get(`${API_URL_MOVIE_ID + String(id)}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

export const getCredits = async id => {
  const { data } = await axios.get(`${API_URL_MOVIE_ID + String(id)}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};