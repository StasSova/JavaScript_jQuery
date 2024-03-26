const USER_KEY = "a763b2ff";

let movies = [];
let detail;

const fetchMovie = async (title, type, page) => {
  try {
    const url = `https://www.omdbapi.com/?apikey=${USER_KEY}&s=${title}&type=${type}&page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    if (response.ok && data.Search) {
      movies = data.Search;
    }
  } catch (ex) {
    console.log(ex);
  }
};

const getMovies = async (title, type, page = 1) => {
  try {
    await fetchMovie(title, type, page);
    console.log(movies);
    return movies;
  } catch (ex) {
    console.log(ex);
    return null;
  }
};

const getDetailMovie = async (id) => {
  try {
    const url = `https://www.omdbapi.com/?apikey=${USER_KEY}&i=${id}`;
    const response = await fetch(url);
    const data = await response.json();
    if (response.ok) {
      detail = data;
    }
  } catch (ex) {
    console.log(ex);
  }
};

const getDetail = async (id) => {
  try {
    await getDetailMovie(id);
    console.log(detail);
    return detail;
  } catch (ex) {
    console.log(ex);
    return null;
  }
};
