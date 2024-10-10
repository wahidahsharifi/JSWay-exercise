// Move the block to the right, all the way to the end of the frame
const moveBlock = () => {
  // Convert the left position of the block (value of the form "XXpx") to a number
  const xBlock = parseFloat(getComputedStyle(blockElement).left);
  // Convert the width of the frame (value of the form "XXpx") to a number
  const xMax = parseFloat(getComputedStyle(frame).width);
  // If the block isn’t already to the end of the frame
  if (xBlock + blockWidth <= xMax) {
    // Block movement
    blockElement.style.left = (xBlock + movement) + "px";
    animationId = requestAnimationFrame(moveBlock);
  }
  else {
    // Cancel the animation
    cancelAnimationFrame(animationId);
  }
};

const blockElement = document.getElementById("block");
// Convert the block width (value of the form "XXpx") to a number
const blockWidth = parseFloat(getComputedStyle(block).width);

// Movement value in pixels
const movement = 7;

// Start the animation
let animationId = requestAnimationFrame(moveBlock);