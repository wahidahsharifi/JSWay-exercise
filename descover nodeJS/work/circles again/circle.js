// circle.js

// Function to calculate the circumference of a circle
function circumference(radius) {
   return 2 * Math.PI * radius;
}

// Function to calculate the area of a circle
function area(radius) {
   return Math.PI * Math.pow(radius, 2);
}

// Export the functions
module.exports = {
   circumference,
   area
};
