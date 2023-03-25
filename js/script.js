'use strict';

/* eslint-disable no-unused-vars */

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const movieName = prompt('Один из просмотренных фильмов?', '');
const movieRate =  prompt('Насколько его оцените?', '');

const movieName_1 = prompt('Один из просмотренных фильмов?', '');
const movieRate_1 =  prompt('Насколько его оцените?', '');

personalMovieDB.movies[movieName] = movieRate;
personalMovieDB.movies[movieName_1] = movieRate_1;

console.log(personalMovieDB);