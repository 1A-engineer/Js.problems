// 1

let a = 6,
  b = 5,
  c = 6,
  p = a + b + c;
console.log(p);

// 2

let s = 3,
  h = s * s * s;
console.log(h);

// 3

let x = "3",
  urjver = 6,
  nemegdegch = 5;

y = urjver * x + nemegdegch;

console.log(y);

// 4

let x4 = 2,
  nemegdegch4 = 5,
  hasagdagch4 = 3,
  urjver4 = 4,
  solution4 = urjver4 * x4 * x4 - hasagdagch4 + nemegdegch4;
console.log(solution4);

// 5

let x5 = 13;

solution5 = x5 % 10;
console.log(solution5);

// 6

let x6 = 3675;
(solution6 = Math.floor((x6 % 100) / 10)), console.log(solution6);

// 7
let x7 = 43,
  lastdigit7 = x7 % 10,
  firstdigit7 = Math.round(x7 / 10);
console.log(lastdigit7 * firstdigit7);

// 8
let x8 = 123;
lastdigit8 = x8 % 10;
firstdigit8 = Math.round(x8 / 100);
middledigit8 = Math.round((x8 / 10) % 10);
console.log(lastdigit8 + firstdigit8 + middledigit8);

// 9
let x9 = 689;
let hours = Math.round(x9 / 60);
let minutes9 = x9 % 60;
console.log(hours, minutes9);

// 10
let x10 = 7204;
let hours10 = Math.floor(x10 / 60);
let minutes10 = x10 % 60;
let seconds10 = x10 % 3600;
console.log(hours10, minutes10, seconds10);

// 12 (smallest one in three numbers)
const num11 = 45;
const num12 = 40;
const num13 = 78;
let smallest;
if (num11 <= num12 && num11 <= num13) {
  smallest = num11;
} else if (num12 <= num11 && num12 <= num13) {
  smallest = num12;
} else {
  smallest = num13;
}
console.log("Smallest one is:", smallest);

// 13 (Sum of numbers more than 80)
const numbers = [50, 90, 30, 85, 60, 78, 100, 20];
let sum = 0;
for (let num of numbers) {
  if (num > 80) {
    sum += num;
  }
}
console.log("Sum of numbers more than 80:", sum);

// 14 (Multiplication of numbers lower than 5)
const givenNumbers = [3, 6, 2, 4];
let totalSum = 1;
for (let currentNumber of givenNumbers) {
  if (currentNumber < 5) {
    totalSum *= currentNumber;
  }
}
console.log("Sum of numbers lower than 5:", totalSum);

// 15 (Sum of even numbers)
function isEven(numbers15) {
  return numbers15 % 2 === 0;
}
const problem15 = [1, 2, 3, 4, 5, 6];
let sumOfEvens = 0;
for (let num15 of problem15) {
  if (isEven(num15)) {
    sumOfEvens += num15;
  }
}
console.log("Sum of even numbers:", sumOfEvens);

// 16 (Multiplication of odd numbers)
function multiplyOddNumbers(arr) {
  let product = 1;
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      product *= num;
    }
  });
  return product;
}
let numbers16 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(multiplyOddNumbers(numbers16));

// 17 (Add numbers that do not divide by 11)

const givenNumbers17 = [50, 99, 33, 85];
let sum17 = 0;
for (let num17 of givenNumbers17) {
  if (num17 % 11) {
    sum17 += num17;
  }
}

console.log("Additoin of numbers divisible by 11:", sum17);

//  Example problem

let age = 20;
if (age >= 18) {
  console.log("Your age:", age);
  console.log("You are adult.");
} else {
  console.log("YOu are not adult.");
}

// 18 YES or NO

const givenNumbers18 = [13, 9];
let solution18 = "";
if (givenNumbers18[0] >= 10) {
  solution18 = "YES";
} else {
  solution18 = "NO";
}
if (givenNumbers18[1] >= 10) {
  solution18 = "YES";
} else {
  solution18 = "NO";
}
console.log(solution18);

// 19

let print = "IOI";
console.log(print)



// /  Teams problems // /

// 1 Define even or odd

function classifyOddEven(arr) {
  // Filter for even numbers
  const evenNumbers = arr.filter(num => num % 2 === 0);
  
  // Filter for odd numbers
  const oddNumbers = arr.filter(num => num % 2 !== 0);
  
  return { evenNumbers, oddNumbers };
}

// Example usage
const tnumbers15 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = classifyOddEven(tnumbers15);

console.log("Even Numbers:", result.evenNumbers); // [2, 4, 6, 8]
console.log("Odd Numbers:", result.oddNumbers);   // [1, 3, 5, 7, 9]


