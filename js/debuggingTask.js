'use strict';
const restorantData = {
	menu: [
		{
			name: 'Salad Caesar',
			price: '14$'
		},
		{
			name: 'Pizza Diavola',
			price: '9$'
		},
		{
			name: 'Beefsteak',
			price: '17$'
		},
		{
			name: 'Napoleon',
			price: '7$'
		}
	],
	waitors: [
		{name: 'Alice', age: 22}, {name: 'John', age: 24}
	],
	averageLunchPrice: '20$',
	openNow: true
};

// function isOpen(prop) {
// 	let answer;
// 	!prop ? answer = 'Закрыто' : answer = 'Открыто';
// 	return answer;
// }

// console.log(isOpen(restorantData.openNow));

// function isAverageLunchPriceTrue(fDish, sDish, average) {
// 	let sumOfDishes = +fDish.price.slice(0, -1) + +sDish.price.slice(0, -1);
// 	let averagePrice = average.slice(0, -1);
// 	if ( sumOfDishes < averagePrice) {
// 		return 'Цена ниже средней';
// 	} else {
// 		return 'Цена выше средней';
// 	}
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
	// const newData = {...data}; Правильный метод копирования объекта ! ! !
	// newData.waitors[0] = {name: 'Mike', age: 32};
	// return newData;
	const newData = {};
	const newWaitorsList = [];
	data.waitors.forEach(element => {
		newWaitorsList.push(element);
	});
	newWaitorsList[0] = {name: 'Mike', age: 32};
	newData.waitors = newWaitorsList;
	return newData;
}

console.log(transferWaitors(restorantData));