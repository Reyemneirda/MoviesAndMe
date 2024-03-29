// API/TMDBApi.js

const API_TOKEN = "f2ba5649613a32eb5aabd6c53cc2464a";

export function getFilmsFromApiWithSearchedText(text, page) {
  const url =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    API_TOKEN +
    "&language=fr&query=" +
    text +
    "&page=" +
    page;
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.error(error));
}

export function getImageFromApi(name) {
  return "https://image.tmdb.org/t/p/w300" + name;
}

export function getFilmDetailFromApi(idFilm) {
  const url =
    "https://api.themoviedb.org/3/movie/" +
    idFilm +
    "?api_key=" +
    API_TOKEN +
    "&language=fr";
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.error(error));
}
