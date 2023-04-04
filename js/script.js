'use strict';

//!personalMovieDB.count == this.count
const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	private: false,
	start: function() {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');
		}
	},
	rememberUserFilms: function () {
		let counter = 0;
		start: do {
			const movieName = prompt('Один из просмотренных фильмов?', '').trim(),
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
	},
	userLvl: function () {
		if (personalMovieDB.count < 10) {
			console.log('Просмотрено довольно мало фильмов');
		} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
			console.log('Вы классический зритель');
		} else if (personalMovieDB.count >=  30) {
			console.log('Вы киноман');
		} else {console.log('Произошла ошибка!');}
	},
	showMyDB: function(hidden) {
		if(!hidden) {
			console.log(personalMovieDB);
		}
	},
	userGenres: function() {
		// for (let i = 1; i < 4; i++) {
		// 	this.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);

		// 	if (this.genres[i - 1] === null || this.genres[i - 1] === '') {

		// 		do {
		// 			personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
		// 		} while (!this.genres[i - 1]);

		// 	}
		// }	
		// personalMovieDB.genres.forEach((element, index) => {
		// 	console.log(`Любимый жанр ${index + 1} - это ${element}`);
		// });

		for (let i = 1; i < 2; i++) {
			let genres;
			genres = prompt('Введите любимые жанры через запятую').toLowerCase();
			if (genres === '' || genres === null) {
				console.log('Вы ввели неккоректные значения.');
				i--;
			} else {
				personalMovieDB.genres = genres.split(', ');
				personalMovieDB.genres.sort();
			}
		}
		
	},
	resetGenres: () => {
		this.genres = null;
	},
	toogleVisibleDB: function() {
		if (personalMovieDB.private) {
			personalMovieDB.private = false;
		} else {
			personalMovieDB.private = true;
		}
	}
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

