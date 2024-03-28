import { USER_KEY } from "./CONSTANT.js";

export default class MovieService {
  static async search(title, type, page) {
    try {
      const url = `https://www.omdbapi.com/?apikey=${USER_KEY}&s=${title}&type=${type}&page=${page}`;
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok && data.Search) {
        return data.Search;
      } else {
        throw new Error("No movies found.");
      }
    } catch (ex) {
      console.error(ex);
      return null;
    }
  }

  static async getMovie(movieId) {
    try {
      const url = `https://www.omdbapi.com/?apikey=${USER_KEY}&i=${movieId}`;
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        throw new Error("Failed to fetch movie details.");
      }
    } catch (ex) {
      console.error(ex);
      return null;
    }
  }
}
