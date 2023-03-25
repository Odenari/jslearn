const n = 'James';

const person = {first: n};

console.log(person);

const sayHelloLinting = (fName) => {
	console.log(`Hello linting, ${fName}`);
};
sayHelloLinting(n);
sayHelloLinting('Anton');

const storeName = 'Fikibolt';
const storeDescription = {
	budget: 10000,
	employees: ['Budda', 'Krishna', 'Vishnu'],
	products: {
		chakra: 1000,
		mana: 1000
	},
	open: 'close'
};


console.log(typeof(NaN));