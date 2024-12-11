// // 1

// let a = 6,
//   b = 5,
//   c = 6,
//   p = a + b + c;
// console.log(p);

// // 2

// let s = 3,
//   h = s * s * s;
// console.log(h);

// // 3

// let x = "3",
//   urjver = 6,
//   nemegdegch = 5;

// y = urjver * x + nemegdegch;

// console.log(y);

// // 4

// let x4 = 2,
//   nemegdegch4 = 5,
//   hasagdagch4 = 3,
//   urjver4 = 4,
//   solution4 = urjver4 * x4 * x4 - hasagdagch4 + nemegdegch4;
// console.log(solution4);

// // 5

// let x5 = 13;

// solution5 = x5 % 10;
// console.log(solution5);

// // 6

// let x6 = 3675;
// (solution6 = Math.floor((x6 % 100) / 10)), console.log(solution6);

// // 7
// let x7 = 43,
//   lastdigit7 = x7 % 10,
//   firstdigit7 = Math.round(x7 / 10);
// console.log(lastdigit7 * firstdigit7);

// // 8
// let x8 = 123;
// lastdigit8 = x8 % 10;
// firstdigit8 = Math.round(x8 / 100);
// middledigit8 = Math.round((x8 / 10) % 10);
// console.log(lastdigit8 + firstdigit8 + middledigit8);

// // 9
// let x9 = 689;
// let hours = Math.round(x9 / 60);
// let minutes9 = x9 % 60;
// console.log(hours, minutes9);

// // 10
// let x10 = 7204;
// let hours10 = Math.floor(x10 / 60);
// let minutes10 = x10 % 60;
// let seconds10 = x10 % 3600;
// console.log(hours10, minutes10, seconds10);

// // 12 (smallest one in three numbers)
// const num11 = 45;
// const num12 = 40;
// const num13 = 78;
// let smallest;
// if (num11 <= num12 && num11 <= num13) {
//   smallest = num11;
// } else if (num12 <= num11 && num12 <= num13) {
//   smallest = num12;
// } else {
//   smallest = num13;
// }
// console.log("Smallest one is:", smallest);

// // 13 (Sum of numbers more than 80)
// const numbers = [50, 90, 30, 85, 60, 78, 100, 20];
// let sum = 0;
// for (let num of numbers) {
//   if (num > 80) {
//     sum += num;
//   }
// }
// console.log("Sum of numbers more than 80:", sum);

// // 14 (Multiplication of numbers lower than 5)
// const givenNumbers = [3, 6, 2, 4];
// let totalSum = 1;
// for (let currentNumber of givenNumbers) {
//   if (currentNumber < 5) {
//     totalSum *= currentNumber;
//   }
// }
// console.log("Sum of numbers lower than 5:", totalSum);

// // 15 (Sum of even numbers)
// function isEven(numbers15) {
//   return numbers15 % 2 === 0;
// }
// const problem15 = [1, 2, 3, 4, 5, 6];
// let sumOfEvens = 0;
// for (let num15 of problem15) {
//   if (isEven(num15)) {
//     sumOfEvens += num15;
//   }
// }
// console.log("Sum of even numbers:", sumOfEvens);

// // 16 (Multiplication of odd numbers)
// function multiplyOddNumbers(arr) {
//   let product = 1;
//   arr.forEach((num) => {
//     if (num % 2 !== 0) {
//       product *= num;
//     }
//   });
//   return product;
// }
// let numbers16 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(multiplyOddNumbers(numbers16));

// // 17 (Add numbers that do not divide by 11)

// const givenNumbers17 = [50, 99, 33, 85];
// let sum17 = 0;
// for (let num17 of givenNumbers17) {
//   if (num17 % 11) {
//     sum17 += num17;
//   }
// }

// console.log("Additoin of numbers divisible by 11:", sum17);

// //  Example problem

// let age = 20;
// if (age >= 18) {
//   console.log("Your age:", age);
//   console.log("You are adult.");
// } else {
//   console.log("YOu are not adult.");
// }

// // 18 YES or NO

// const givenNumbers18 = [13, 9];
// let solution18 = "";
// if (givenNumbers18[0] >= 10) {
//   solution18 = "YES";
// } else {
//   solution18 = "NO";
// }
// console.log(solution18);
// if (givenNumbers18[1] >= 10) {
//   solution18 = "YES";
// } else {
//   solution18 = "NO";
// }
// console.log(solution18);

// // 19

// let print = "IOI";
// console.log(print);

// // /  <----------------------* Teams problems *------------------------> // /

// // 1. Define even or odd

// function classifyOddEven(arr) {
//   const evenNumbers = arr.filter((num) => num % 2 === 0);
//   const oddNumbers = arr.filter((num) => num % 2 !== 0);

//   return { evenNumbers, oddNumbers };
// }
// const tnumbers15 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = classifyOddEven(tnumbers15);

// console.log("Even Numbers:", result.evenNumbers);
// console.log("Odd Numbers:", result.oddNumbers);

// // 2. Classify numbers as positive, negative, and zero.

// function classifyposnegzero(arr) {
//   const positivenumbers = arr.filter((num) => num > 0);
//   const negativenumbers = arr.filter((num) => num < 0);
//   const zeronumbers = arr.filter((num) => (num = 0));
//   return { positivenumbers, negativenumbers, zeronumbers };
// }

// const tnumbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// const result2 = classifyposnegzero(tnumbers2);

// console.log("Positive:", result2.positivenumbers);
// console.log("Negative:", result2.negativenumbers);

// // 3. Evaluate grades

// let grade = 90;
// if (grade >= 95) {
//   console.log("Your grade is 95");
//   console.log("You took +A");
// } else if (grade < 95 && grade >= 90) {
//   console.log("YOur grade is 90");
//   console.log("You take -A");
// }

// //  4. Franheit to Celsius

// function celsiusToFahrenheit(celsius) {
//   const fahrenheit = (celsius * 9) / 5 + 32;
//   return fahrenheit;
// }
// const celsius = 25;
// const fahrenheit = celsiusToFahrenheit(celsius);
// console.log(`${celsius}°C is equal to ${fahrenheit}°F`);

// // 5 Whether or not it could be traingle.

// const side1 = 15;
// const side2 = 23;
// const side3 = 40;
// if (side1 + side2 > side3 && side3 + side2 > side1 && side1 + side3 > side2) {
//   console.log("It could be traingle");
// } else {
//   console.log("It could not be traingle");
// }

// // 6 A discount calculator
// function adiscountcalculator(spending) {
//   const discount = spending * 0.1;

//   return discount;
// }

// const spending = 60;
// const discount = adiscountcalculator(spending);
// console.log("Your deserved discount:", discount);
// console.log("Total cost:", spending - discount);

// // 7 Leap year

// function isLeapYear(year) {
//   if (year % 4 !== 0) return false;
//   else if (year % 100 === 0) {
//     if (year % 400 === 0) return true;
//     else return false;
//   }
//   else return true;
// }
// console.log(isLeapYear(2024)); // true
// console.log(isLeapYear(1900)); // false
// console.log(isLeapYear(2000)); // true

// // Add hundred n times.

// function add100NTimes(n) {
//   let result = 0;
//   for (let i = 0; i < n; i++) {
//       result += 100;
//   }
//   return result;
// }

// let n = parseInt("Enter the number of times to add 100:",);
// let result100 = add100NTimes(n);
// console.log(`100 added ${n} times is: ${result100}`);

// // Multiply number n times.
// function mltiplynumberntimes(numbern, davtalt) {
//   let result = 1;
//   for (let i = 0;  i < davtalt; i++) {
//     result *= numbern;
//   }
//   return  result;
// }
// let numbern = (5);
// let davtalt = (10);
// let resultn = mltiplynumberntimes(davtalt, numbern);
// console.log(`multiply 5 ${davtalt} times is: ${resultn}`);

// // n times of number A

// function ntimesofa(atoo, repeatn) {
//   let result = 1;
//   for (let i = 0; i < repeatn; i++) {
//     result *=atoo
//   }
//   return result;
// }

// let atoo = parseInt(10);
// let repeatn = parseInt(11);
// let result99 = ntimesofa(atoo, repeatn);
// console.log(`${atoo}'s  ${repeatn}st power is: ${result99}`)

// // Multiplication table

// function generateMultiplicationTable(number) {
//   for (let i = 1; i <= 10; i++) {
//       let result = number * i;
//       console.log(`${number} * ${i} = ${result}`);
//   }
// }
// let number = parseInt(5);
// generateMultiplicationTable(number);

// // Power of multiplication table

// function generatePowerTable(number, maxPower) {
//   for (let i = 1; i <= maxPower; i++) {
//       let result = Math.pow(number, i);
//       console.log(`${number}^${i} = ${result}`);
//   }
// }
// let numberm =(3);
// let maxPower =(10);

// generatePowerTable(numberm, maxPower);

// // // Expression

// // let al = prompt("Enter  a:")
// // let bl = prompt("Enter  b:")
// // let cl = prompt("Enter  c:")

// // let xl = al * bl - cl;

// // console.log(xl)

// // The end of first page.

// // RGB7582 - ЭЕШ

// const numbersy = [40, 50, 92, 50, 40];

// let namedNumbers = numbersy.map((num, index) => ({
//     name: index + 1,
//     value: num
// }));
// namedNumbers.sort((a, b) => b.value - a.value);

// let sortedNames = namedNumbers.map(item => item.name);

// sortedNames.forEach(name => {
//     console.log(name);
// });

// // Palindrome

// function palindromeCheck(number) {
//   let numStr = number.toString();
//   let numArr = numStr.split('');
//   return numArr.every((num, index) =>
//       num === numArr[numArr.length - 1 - index]);
// }

// console.log(palindromeCheck(121));


// // Biggest digit in number

// function findBiggestDigit(num) {
//   const numStr = num.toString();
//   let maxDigit = 0;

//   for (let i = 0; i < numStr.length; i++) {
//       const digit = parseInt(numStr[i]);

//       if (digit > maxDigit) {
//           maxDigit = digit;
//       }
//   }

//   return maxDigit;
// }

// console.log(findBiggestDigit(12345));
// console.log(findBiggestDigit(9876));
// console.log(findBiggestDigit(345));

// Turn into upper letter

// let text = "Hello World!";
// let resultt = text.toUpperCase();
// console.log(resultt)

// let input = "IOI";
// for (let  i = 0; i < 3; i++) {
//     console.log(input);
// }

// //  Classify odd  and even numbers

// const collector = [12, 42, 32, 41, 91, 12, 64, 22, 61, 59, 47];
// let colevennumbers = [];
// let coloddnumbers = [];
// for (let i = 0; i < collector.length; i++) {
//     if (collector[i] % 2 === 0)
// {
//     colevennumbers.push(collector[i]);
// } else {
//     coloddnumbers.push(collector[i]);
// }}
// console.log("Even numbers:", colevennumbers);
// console.log("Odd numbers:",  coloddnumbers);

// // Which is more in quantity even or odd. If it is odd say "yes"; otherwise, say "no".

// let bar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenCount = 0;
// let oddCount = 0;

// for (let i = 0; i < bar.length; i++) {
//     if (bar[i] % 2 === 0) {
//         evenCount++;
//     } else {
//         oddCount++;
//     }
// }

// if (oddCount > evenCount) {
//     console.log("YES");
// } else {
//     console.log("NO");
// }

// //

// let too = prompt("Enter a number:");
// too = parseInt(too);

// if (too >= 3 && too <= 5)
//     console.log("tentssen");
//  else if (too >= 2 && too < 3)
//     console.log("tentseegui");
//  else
//     console.log("Yu yriad bgan be hoorhno?");

//     // Sesion

//     let sar = prompt();

//     if (sar >=2 && sar < 6)
//       console.log("It's spring")

//     if (sar >= 6 && sar <=9)
//      console.log("It is summer")

//  if (sar > 9 && sar <=11 )
//   console.log( 'it is autumn')
//  if ( sar == 12 || sar == 1){
//   let st;
//   st[0].charCodeAt()=st[0].charCodeAt()-32;
//   console.log(st);
//  }

// //
// let str = "hello world";
// let targetLetter = 'd';

// let result = str.replace(targetLetter, targetLetter.toUpperCase());

// console.log(result);

// // 2.2

// function findApartmentLocation(apartmentNumber, numFloors, apartmentsPerFloor, numEntrances) {

//   let apartmentsPerEntrance = numFloors * apartmentsPerFloor;

//   let entranceNumber = Math.floor((apartmentNumber - 1) / apartmentsPerEntrance) + 1;

//   let apartmentInEntrance = (apartmentNumber - 1) % apartmentsPerEntrance + 1;

//   let floorNumber = Math.floor((apartmentInEntrance - 1) / apartmentsPerFloor) + 1;

//   return { entrance: entranceNumber, floor: floorNumber };
// }
// let result = findApartmentLocation(10, 5, 4, 2);
// console.log(`Apartment 10 is in Entrance ${result.entrance}, Floor ${result.floor}`);

// //
// const n = parseInt(prompt("the number of elenents:", 5));

// const elements = prompt(1, 2, 3, 4, 5 ).split(' ').map(Number);

// console.log(` ${n}`);
// console.log(`${elements.join(', ')}`);

// //  Hypotenuse

// function findHypotenuse(adjacent, opposite) {
//   return Math.sqrt(adjacent * adjacent + opposite * opposite);
// }
// let adjacent = 12;
// let opposite = 15;

// let hypotenuse = findHypotenuse(adjacent, opposite);

// console.log("The length of the hypotenuse is: " + hypotenuse);

// // Gap between two point

// function calculateDistance(x1, y1, x2, y2) {
//   return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
// }
// let x1 = 2, y1 = 3;
// let x2 = 5, y2 = 7;
// let distance = calculateDistance(x1, y1, x2, y2);
// console.log("The distance between the two points is: " + distance);

// // Sort Numbers

// let numberstosort = [10, 2, 35, 4, 57, 8];
// numberstosort.sort((a, c) => a - c );
// console.log(numberstosort);

// // Array methods

// const exp1 = [2, 34, 4, 6, 7, 6];
// let new1 = exp1.map((num) => num * 2);
// console.log(new1);

// const exp2 = [2, 34, 4, 6, 7, 6];

// let new2 = exp1.reduce((old, cur) => old + cur);
// console.log(new2);

// const exp3 = [2, 34, 4, 6, 7, 6];
// let new3 = exp3.findIndex((num) => num > 10);
// console.log(new3);

// const exp4 = [2, 34, 4, 6, 7, 6];
// let new4 = exp4.indexOf(7);
// console.log(new4);

// const exp5 = [2, 34, 4, 6, 7, 6];
// let new5 = exp5.filter((num) => num % 2 !== 0);
// console.log(new5);
// let new6 = exp5.filter((num) => num % 2 === 0);
// console.log(new6);

// // Function

// function convertToGPA(percentage) {
//   let gpa;
//   let grade;

//   if (percentage >= 90) {
//     gpa = 4.0;
//     grade = "A";
//   } else if (percentage >= 80) {
//     gpa = 3.7;
//     grade = "B";
//   } else if (percentage >= 70) {
//     gpa = 3.0;
//     grade = "C";
//   } else if (percentage >= 60) {
//     gpa = 2.0;
//     grade = "D";
//   } else if (percentage >= 50) {
//     gpa = 1.0;
//     grade = "E";
//   } else {
//     gpa = 0.0;
//     grade = "F";
//   }

//   return [gpa, grade];
// }

// const percentage = 85;
// const result = convertToGPA(percentage);

// const gpa = result[0];
// const grade = result[1];
// console.log(`Percentage: ${percentage}% => GPA: ${gpa} => Grade: ${grade}`);



// // 


// function countOccurrences(arr, target) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       count++;
//     }
//   }

//   return count;
// }
// console.log(countOccurrences([1, 2, 3, 4, 2, 2, 5], 2));  
// console.log(countOccurrences(['apple', 'banana', 'orange', 'apple'], 'apple')); 
// console.log(countOccurrences([true, false, true, false, true], true));  
// console.log(countOccurrences([10, 20, 30, 40, 50], 100));  




// // --------------------------------------------------------------------------------***** >>    Leet code problems   << *****--------------------------------------------------------------------------------


// // Two sum

// var twoSum = function (nums, target) {
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//       map.set(nums[i], i);
//   }
//   for (let i = 0; i < nums.length; i++) {
//       const complement = target - nums[i];
//       if (map.has(complement) && map.get(complement) !== i) {
//           return [i, map.get(complement)];
//       }
//   }
//   return [];
// };


// // 28. Find the Index of the First occurance in a String

// var strStr = function(haystack, needle) {
//   return haystack.indexOf(needle); 
// };
// console.log(strStr("hello", "ll"));  



//   //Prime number


//   function primenumber(num) {
//     if( num <=0 )
//     { return false;

//     }
//     if (num === 2 || num === 3)
//       {return false;

//       }
//     if (num % 2 === 0){
//       return false;
//     }
//     for (let i = 3; i <= Math.sqrt(num); i += 2) {
//       if (num % i === 0) {
//           return false; 
//       }
    
//   }
//    return true;
// }
//    console.log(primenumber(29));  
// console.log(primenumber(25)); 
// console.log(primenumber(100)); 

// // Square root of (x)

// const num = ;
// let sqrt = (Math.floor(Math.sqrt(num)));
// console.log(sqrt);



                                                                                                     
// // Container with most water

// var maxArea = function(height) {
//   let left = 0;        
//   let right = height.length - 1;  
//   let maxWater = 0;       
//   while (left < right) {
//       let width = right - left;
//       let h = Math.min(height[left], height[right]);
//       let area = width * h;
//       maxWater = Math.max(maxWater, area);
//       if (height[left] < height[right]) {
//           left++;
//       } else {
//           right--;
//       }
//   }
//   return maxWater;
// };
// let height1 = [1,8,6,2,5,4,8,3,7];
// console.log(maxArea(height1)); 
// let height2 = [1,1];
// console.log(maxArea(height2));  


 

// // Add digits

// function checkNumber() {
//   const numb = Number(prompt());
//   if (numb > Math.pow(2, 31) - 1 || numb < -Math.pow(2, 31)) {
//       return 0; 
//   }

//   let sum = 0;
//   const array = [1, 2, 3, 4, 5];
//   for (let i = 0; i < array.length; i++) {
//       sum += array[i];
//   }
  
//   return sum;  
// }

// console.log(checkNumber());


// Email transformation

function transformEmail(mail) {


  let username = mail.split('@')[0];   
  let parts = username.split('.'); 
     
  
  
  let firstName = parts[parts.length - 1].charAt(0).toUpperCase() + parts[parts.length - 1].slice(1); 

  let lastName = parts[0].charAt(0).toUpperCase() + parts[0].slice(1); 


  return `${firstName}. ${lastName}`;
}

console.log(transformEmail('bat.a@gmail.com'));  
console.log(transformEmail('bat.kh@gmail.com'));  


// Binary search

function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (nums[mid] === target) {
      return mid;  
    }
    if (nums[mid] < target) {
      left = mid + 1;  
    } else {
      right = mid - 1; 
    }
  }
  
  return left;  
}


