"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Один из последних просмотренных фильмов?", ""),
    b = prompt("На сколько оцените его?", "");

  if (a !== null && b !== null && a.length <= 50 && a !== "" && b !== "") {
    personalMovieDB.movies[a] = b;
  } else {
    i--;
  }
}

let count = personalMovieDB.count;

if (count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (count > 10 && count < 30) {
  console.log("Вы классический зритель");
} else {
  console.log("Вы киноман");
}
