// const n = 'James';

// const person = {first: n};

// console.log(person);

// const sayHelloLinting = (fName) => {
// 	console.log(`Hello linting, ${fName}`);
// };
// sayHelloLinting(n);
// sayHelloLinting('Anton');

// const storeName = 'Fikibolt';
// const storeDescription = {
// 	budget: 10000,
// 	employees: ['Budda', 'Krishna', 'Vishnu'],
// 	products: {
// 		chakra: 1000,
// 		mana: 1000
// 	},
// 	open: 'close'
// };

// * вложенный цикл рисует треугольник из зведочек
// let result = '';
// let length = 7;
// for(let i = 1; i < length; i++) {
// 	for(let j = 0; j < i; j++) { //переменная j сбрасывается до ноля при каждой новой итерации верхнего охватывающего цикла 
// 		result += '*';			 //внутренний цикл срабатывает каждый раз больше на один раз потому что i растет на 1  а j начинается с ноля
// 		// console.log(j)
// 	}
// 	result += '\n';
// }
// console.log(result);

// // * Тройной уровень вложенности - и метки
// outer: for (let i = 0; i <= 4; i++) {
// 	console.log(`First level: ${i}`);
// 	for (let j = 0; j <=2; j++){
// 		console.log(`Second level: ${j}`);
// 		for( let k = 0; k < 2; k++) {
// 			// if (k === 7) {continue outer;}
// 			console.log(`Third level: ${k}`)
// 		}
// 	}
// }

//      *
//     ***
//    *****
//   *******
//  *********
// ***********
// ? Мог ли я решить это сам? Не знаю, но условие второго цикла пришлось подсмотреть =\
// let result = '';
// let length = 7;
// let spacesCount = 6;
// for(let i = 0; i < length; i++) {	
// 	for(let k = 0; k <= spacesCount; k++) { 
// 		result += ' ';
// 	}
// 	for(let j = 0; j < 2 * i + 1; j++) {
// 		result += '*';
// 	}
// 	--spacesCount;
// 	result += '\n';
// }
// console.log(result);


// *1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба
// *(тоже базовая математика, иногда используется в создании анимаций). 
// *Эта функция принимает в себя целое число со значением длины ребра куба. 
// *Ответ выведите в формате строки, который изображен в примерах.	
// *Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"
// *НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.

// Формула нахождения объёма куба:
// ? V = a^3, где а - ребро куба.

// Формула нахождения площади поверхности куба:
// ? S = 6a^2, где а - ребро куба.

//*Объем и площадь куба!
// function calculateVolumeAndArea(length) {
// 	if (length < 0 || !(Number.isInteger(length) || isNaN(length))) {
// 		return 'При вычислении произошла ошибка';
// 	}
// 	let vol = length;
// 	let area = 6 * (length * length);
// 	for (let i = 1; i < 3; i++) {
// 		vol *= length;
// 	}
// 	return `Объем куба: ${vol}, площадь всей поверхности: ${area}`;	
// }
// const res = calculateVolumeAndArea(5.0003);
// console.log(res);

//* Находит купе по номеру места
// Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Наглядно:
// Функция принимает только целое число от 1 до 36.
// Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:
// "Ошибка. Проверьте правильность введенного номера места"
// Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"
// function getCoupeNumber(num) {
// 	if (num < 0 || !(Number.isInteger(num) || isNaN(num))) {
// 		return 'Ошибка. Проверьте правильность введенного номера места';
// 	} else if (num === 0 || num > 36) {
// 		return 'Таких мест в вагоне не существует';
// 	} else {
// 		switch(num) {
// 		case 1: case 2: case 3: case 4:
// 			return 1;
// 		case 5: case 6: case 7: case 8:
// 			return 2;
// 		case 9: case 10: case 11: case 12:
// 			return 3;
// 		case 13: case 14: case 15: case 16:
// 			return 4;
// 		case 17: case 18: case 19: case 20:
// 			return 5;
// 		case 21: case 22: case 23: case 24:
// 			return 6;
// 		case 25: case 26: case 27: case 28:
// 			return 7;
// 		case 29: case 30: case 31: case 32:
// 			return 8;
// 		case 33: case 34: case 35: case 36:
// 			return 9;
// 		}
// 	}
// }
// console.log(getCoupeNumber(22));

//* Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"
// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.
// function getTimeFromMinutes(value) {
// 	if (value < 0 || value > 600 || isNaN(value) || !(Number.isInteger(value))) {
// 		return 'Ошибка, проверьте данные';
// 	} 
// 	let hours = Math.floor(value / 60);
// 	let minuts = value % 60;
// 	let hourType= 0;
// 	const hoursList = ['час', 'часа', 'часов'];
// 	if (value < 60) {
// 		hours = 0;
// 		minuts = value;
// 		hourType = 2;
// 	} else if (value === 60) {
// 		hours = 1;
// 	} else if (value > 60 && value < 300) {
// 		hourType = 1;
// 	} else {
// 		hourType = 2;
// 	}
// 	return `Это ${hours} ${hoursList[hourType]} и ${minuts} минут`;
// }
// const res = getTimeFromMinutes(0);
// console.log(res);

// * Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

function findMaxNumber(a, b, c, d) {
	
}