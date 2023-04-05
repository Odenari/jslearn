const shoppingMallData = {
	shops: [
		{
			width: 10,
			length: 5
		},
		{
			width: 15,
			length: 7
		},
		{
			width: 20,
			length: 5
		},
		{
			width: 8,
			length: 10
		}
	],
	height: 5,
	moneyPer1m3: 30,
	budget: 0000,
	// mallAreaCalc: function(shops) {
	// 	let area = 0;
	// 	shops.forEach(({width, length}) => {
	// 		area += width * length;
	// 	});
	// 	return this.mallArea = area;
	// },
	// volCalc: function(mallArea, height) {
	// 	return this.volume = height * mallArea;
	// },
	// isBudgetEnough: function() {

	// 	if (this.budget / this.volume >= 0) {
	// 		return 'Бюджета достаточно';
	// 	} else {
	// 		return 'Бюджета недостаточно';
	// 	}
	// }
	isBudgetEnough: function(data) {
		let area = 0;
		let volume = 0;
		let isEnough= 0;
		data.shops.forEach(({width, length}) => {
			area += width * length;
		});
		volume = data.height * area;
		isEnough = data.moneyPer1m3 * volume;
		if (data.budget >= isEnough) {
			return 'Бюджета достаточно';
		} else {
			return 'Бюджета недостаточно';
		}
	}
};
