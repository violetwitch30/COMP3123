// exercise 1
const people = ["Randy Savage", "Ultimate Warrior", "Hulk Hogan"];

const greet = () => {
    for (const name of people) {
        console.log('Hello ' + name);
    }
};

greet();


// exercise 2
const capitalize = (str) => {
    let [first, ...rest] = str;
    return first.toUpperCase() + rest.join('').toLowerCase();
};

console.log(capitalize("fooBar")); // Foobar
console.log(capitalize("nodeJs")); // Nodejs


// exercise 3
const colors = ["red", "green", "blue"];

const capitalizedColors = colors.map(color => capitalize(color));

console.log(capitalizedColors); // ['Red', 'Green', 'Blue']


// exercise 4
const numbers = [1, 60, 34, 30, 20, 5];

const filterLessThan20 = numbers.filter(num => num < 20);

console.log(filterLessThan20); // [1, 5]


// exercise 5
const array = [1, 2, 3, 4];

const calculateSum = array.reduce((a, b) => a + b, 0);
const calculateProduct = array.reduce((a, b) => a * b, 1);

console.log(calculateSum); // 10
console.log(calculateProduct); // 24


// exercise 6
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    details() {
        return "Model: " + this.model + " | Engine " + this.year;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }

    info() {
        return this.model + " has a balance of $" + this.balance.toFixed(2);
    }
}

const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());