// index.js

// Import the circle module using the relative path
const circle = require('./circle');

// Test the circumference and area functions
const radius = 5;
console.log(`For a circle with radius ${radius}:`);
console.log(`Circumference: ${circle.circumference(radius)}`);
console.log(`Area: ${circle.area(radius)}`);
