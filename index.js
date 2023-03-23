const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// Variable to hold sum of all batteries

const totalBatteries = batteryBatches.reduce(
  (accumulator, currentCount) => accumulator + currentCount, 0
);

// Console log to test solution
console.log(totalBatteries);
