import axios from "axios";
const API_KEY = "12355de9ae36d576f407c0d316008e50";
const BASE_URL = "https://api.themoviedb.org/3/";

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = { api_key: API_KEY, language: "en-US" };

export const GetTrendingFilms = async (page) => {
  return await axios.get(`/trending/movie/day?page=${page}`);
};

export const FetchGenres = async () => {
  return await axios.get(`/genre/movie/list`);
};

export const GetFilmByID = async (id) => {
  return await axios.get(`/movie/${id}`);
};

export const GetActorsByFilmId = async (id) => {
  return await axios.get(`/movie/${id}/credits`);
};

export const GetVideoByFilmId = async (id) => {
  return await axios.get(`/movie/${id}/videos`);
};

export const GetReviewsByFilmId = async (id) => {
  return await axios.get(`/movie/${id}/reviews`, {
    params: {
      page: 1,
    },
  });
};

export const SearchFilmByName = async (query, page) => {
  return await axios.get(`/search/movie?page=${page}`, {
    params: {
      query,
      page,
      include_adult: false,
    },
  });
};
