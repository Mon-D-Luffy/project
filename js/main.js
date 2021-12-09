"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (
    numberOfFilms === "" ||
    numberOfFilms === null ||
    isNaN(numberOfFilms)
  ) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", "");

    if (a !== null && b !== null && a.length <= 50 && a !== "" && b !== "") {
      personalMovieDB.movies[a] = b;
    } else {
      i--;
    }
  }
}

rememberMyFilms();

function detectPerrrsonalLevel() {
  let count = personalMovieDB.count;

  if (count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (count > 10 && count < 30) {
    console.log("Вы классический зритель");
  } else {
    console.log("Вы киноман");
  }
}

detectPerrrsonalLevel();

function showMyDB(obj) {
  if (!obj.privat) {
    console.log(obj);
  }
}

function writeYouGenres(obj) {
  for (let i = 1; i < 4; i++) {
    obj.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
  }
}

writeYouGenres(personalMovieDB);
