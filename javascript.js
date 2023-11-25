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

// PART 2

// Constants for the road trip scenario
const totalDistance = 1500; // distance of the road trip
const fuelBudget = 175; // fuel budget
const costPerGallon = 3; // gas price
const speeds = [55, 60, 75]; // miles per hour (speed)
const efficiencies = [30, 28, 23]; // miles per gallon

// Function to calculate fuel needed for the entire trip
function calculateTotalFuel(speed, efficiency) {
  return totalDistance / efficiency;
}

// Function to calculate trip duration
function calculateDuration(speed) {
  return totalDistance / speed;
}

// Function to check if budget is enough
function isBudgetEnough(totalFuelNeeded) {
  return totalFuelNeeded * costPerGallon <= fuelBudget;
}

// Calculations and log results for each speed
for (let i = 0; i < speeds.length; i++) {
  const speed = speeds[i];
  const efficiency = efficiencies[i];

  const totalFuelNeeded = calculateTotalFuel(speed, efficiency);
  const tripDuration = calculateDuration(speed);
  const budgetEnough = isBudgetEnough(totalFuelNeeded);

  console.log(`Results for traveling at ${speed} mph:`);
  console.log(`- Total gallons of fuel needed for the entire trip: ${totalFuelNeeded.toFixed(2)}`);
  console.log(`- Trip duration: ${tripDuration.toFixed(2)} hours`);
  console.log(`- Will budget cover fuel expense? ${budgetEnough ? 'Yes' : 'No'}`);
  
}
console.log('---------------------------');

// PART 3

let optimalSpeed = 0;

for (let i = 0; i < speeds.length; i++) {
  const speed = speeds[i];
  const efficiency = efficiencies[i];

  const totalFuelNeeded = calculateTotalFuel(speed, efficiency);
  const budgetEnough = isBudgetEnough(totalFuelNeeded);

  if (budgetEnough && (optimalSpeed === 0 || totalFuelNeeded < calculateTotalFuel(optimalSpeed, efficiencies[speeds.indexOf(optimalSpeed)]))) {
    optimalSpeed = speed;
  }
}

console.log(`Optimal speed within budget: ${optimalSpeed} mph`);