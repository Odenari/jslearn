'use strict';


let numberOfFilms;
function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
	}
}
start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: true
};

// for (let i = 0; i < 2; i++) {
// 	const movieName = prompt('Один из просмотренных фильмов?', ''),
// 		movieRate =  prompt('Насколько его оцените?', '');
// 	if (movieName != null && movieRate != null && movieName != '' && movieRate != '' && movieName.length < 50) {
// 		personalMovieDB.movies[movieName] = movieRate;
// 		console.log('done');
// 	} else {
// 		console.log('error');
// 		i--;
// 	}
// }

// let promptCounter = 0;
// while (promptCounter < 3) {
// 	const movieName = prompt('Один из просмотренных фильмов?', ''),
// 		movieRate = prompt('Насколько его оцените?');
// 	if (movieName != null && movieRate != null && movieName != '' && movieRate != '' && movieName.length < 50) {
// 		personalMovieDB.movies[movieName] = movieRate;
// 		console.log('done');
// 		promptCounter++;
// 	} else {
// 		promptCounter--;
// 		globalThis.alert('Введите корректные значения');
// 	}
// }


function rememberUserFilms() {
	let counter = 0;
	start: do {
		const movieName = prompt('Один из просмотренных фильмов?', ''),
			movieRate = prompt('Насколько его оцените?');
		if (movieName != null && movieRate != null && movieName != '' && movieRate != '' && movieName.length < 50) {
			personalMovieDB.movies[movieName] = movieRate;
			console.log('done');
			counter++;
		} else {
			globalThis.alert('Введите корректные значения');
			counter--;
			continue start;
		}	
	} while (counter < 2);
}
rememberUserFilms();

function userLvl() {
	if (personalMovieDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
		console.log('Вы классический зритель');
	} else if (personalMovieDB.count >=  30) {
		console.log('Вы киноман');
	} else {console.log('Произошла ошибка!');}
}
userLvl();

function showMyDB(hidden) {
	if(!hidden) {
		console.log(personalMovieDB);
	}
}
showMyDB(personalMovieDB.private);

function userGenres() {
	for (let i = 1; i < 4; i++) {
		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
	}
}
userGenres();