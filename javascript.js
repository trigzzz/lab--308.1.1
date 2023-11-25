// PART 1

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Add up to 50
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(`Sum equals 50: ${isSum50}`);

// At least two odd numbers
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(`At least two odd numbers: ${isTwoOdd}`);

// No number larger than 25
const isUnderOrEqualTo25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
console.log(`All numbers are under or equal to 25: ${isUnderOrEqualTo25}`);

// All unique numbers
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// All numbers divisible by 5
const allDivisibleBy5 = n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;
console.log(`All numbers are divisible by 5: ${allDivisibleBy5}`);

// First number larger than last
const isFirstLargerThanLast = n1 > n4;
console.log(`The first number is larger than the last: ${isFirstLargerThanLast}`);

// Arithmetic chain
const result = ((n2 - n1) * n3) % n4;
console.log(`Arithmetic chain result: ${result}`);

// results in a single variable 
const isValid = isSum50 && isTwoOdd && !isUnderOrEqualTo25 && isUnique;

// Logged results
console.log(`Final Result: ${isValid}`);
console.log('---------------------------');
