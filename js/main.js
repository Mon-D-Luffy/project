"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let questionFirst = prompt("один из последних просмотренных фильмов?", "");
let questionSecond = prompt("На сколько оцените его?", "");

personalMovieDB.movies[questionFirst] = questionSecond;
