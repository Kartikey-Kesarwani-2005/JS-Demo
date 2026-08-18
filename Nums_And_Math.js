// const num = 10;
// console.log(num.toString());

// const Balance = new Number(100);
// console.log(Balance);
// console.log(Balance.toString());
// console.log(Balance.valueOf());


// console.log(Balance.toFixed(2));

// const num2 = new Number(10.123456);
// console.log(num2.toPrecision(2));
// console.log(num2.toFixed(3));


/////////////////////////////MAth //////////////////////////////////////
// console.log(Math.PI);
// console.log(Math.round(4.7));  // It rounds the number to the nearest integer. If the decimal part is 0.5 or greater, it rounds up; otherwise, it rounds down.
// console.log(Math.floor(4.7));  // It rounds the number down to the nearest integer, regardless of the decimal part.
// console.log(Math.ceil(4.7));  // It rounds the number up to the nearest integer, regardless of the decimal part.
// console.log(Math.abs(-4.7)); // It returns the absolute value of a number, which is the non-negative value of the number without regard to its sign.
// console.log(Math.max(1, 2, 3, 4, 5)); // It returns the largest value among the provided numbers.
// console.log(Math.min(1, 2, 3, 4, 5)); // It returns the smallest value among the provided numbers.
// console.log(Math.random()); // It generates a random floating-point number between 0 (inclusive) and 1 (exclusive).

const Min = 100;
const Max = 200;
console.log(Math.floor(Math.random()*(Max - Min) + Min));
