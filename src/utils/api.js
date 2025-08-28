import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const VITE_TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const fetchDataFromApi = async (url, params = {}) => {
  try {
    // Always include the API key in params
    const { data } = await axios.get(BASE_URL + url, {
      params: { api_key: VITE_TMDB_API_KEY, ...params },
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
