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
let result = '';
let length = 7;
let spacesCount = 6;
for(let i = 0; i < length; i++) {	
	for(let k = 0; k <= spacesCount; k++) { 
		result += ' ';
	}
	for(let j = 0; j < 2 * i + 1; j++) {
		result += '*';
	}
	--spacesCount;
	result += '\n';
}
console.log(result);

