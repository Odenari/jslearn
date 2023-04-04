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
	budget: 50000,
	mallAreaCalc: function(shops) {
		let area = 0;
		shops.forEach(({width, length}) => {
			area += width * length;
		});
		return this.mallArea = area;
	},
	volCalc: function(mallArea, height) {
		return this.volume = height * mallArea;
	},
	isBudgetEnough: function() {

		if (this.budget / this.volume >= 0) {
			return 'Бюджета достаточно';
		} else {
			return 'Бюджета недостаточно';
		}
	}
};
shoppingMallData.mallAreaCalc(shoppingMallData.shops);
console.log(shoppingMallData.mallArea);
shoppingMallData.volCalc(shoppingMallData.mallArea, shoppingMallData.height);
console.log(shoppingMallData.volume);
const theAnswer = shoppingMallData.isBudgetEnough();
console.log(theAnswer);