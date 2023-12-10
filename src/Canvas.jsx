import { useRef, useEffect } from 'react';

export function Canvas(props) {
  const canvasRef = useRef(null);

  useEffect(() => {
    // A browser animation that draws a rotating star with a gradient background
// Inspired by https://codepen.io/bradtraversy/pen/ExyZGzL

// Get the canvas element and its context
var canvas = canvasRef.current;
var ctx = canvas.getContext("2d");


// Define the colors for the gradient background
var colors = ["#000000", "#0f0f0f", "#1f1f1f", "#2f2f2f", "#3f3f3f", "#4f4f4f", "#5f5f5f", "#6f6f6f", "#7f7f7f", "#8f8f8f", "#9f9f9f", "#afafaf", "#bfbfbf", "#cfcfcf", "#dfdfdf", "#efefef", "#ffffff"];

// Define the number of points for the star
var points = 5;

// Define the radius of the star
var radius = 100;

// Define the angle of rotation for the star
var angle = 0;

// Define the speed of rotation for the star
var speed = 0.01;

// Define the color of the star
var starColor = "#ffff00";

// Define the function to draw the gradient background
function drawBackground() {
  // Create a linear gradient from top to bottom
  var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);

  // Add color stops for each color in the array
  for (var i = 0; i < colors.length; i++) {
    gradient.addColorStop(i / colors.length, colors[i]);
  }

  // Fill the canvas with the gradient
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Define the function to draw the star
function drawStar() {
  // Save the current context state
  ctx.save();

  // Translate the origin to the center of the canvas
  ctx.translate(canvas.width / 2, canvas.height / 2);

  // Rotate the context by the angle
  ctx.rotate(angle);

  // Begin a new path
  ctx.beginPath();

  // Move to the first point of the star
  ctx.moveTo(0, -radius);

  // Loop through the remaining points of the star
  for (var i = 0; i < points; i++) {
    // Calculate the coordinates of the inner point
    var x1 = radius * Math.sin((i + 0.5) * 2 * Math.PI / points);
    var y1 = -radius * Math.cos((i + 0.5) * 2 * Math.PI / points);

    // Draw a line to the inner point
    ctx.lineTo(x1, y1);

    // Calculate the coordinates of the outer point
    var x2 = radius * Math.sin((i + 1) * 2 * Math.PI / points);
    var y2 = -radius * Math.cos((i + 1) * 2 * Math.PI / points);

    // Draw a line to the outer point
    ctx.lineTo(x2, y2);
  }

  // Close the path
  ctx.closePath();

  // Set the fill style to the star color
  ctx.fillStyle = starColor;

  // Fill the star
  ctx.fill();

  // Restore the context state
  ctx.restore();
}

// Define the function to animate the star
function animate() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the background
  drawBackground();

  // Draw the star
  drawStar();

  // Increase the angle by the speed
  angle += speed;

  // Request the next animation frame
  requestAnimationFrame(animate);
}

// Start the animation
animate();

  }, []);

  return <canvas ref={canvasRef} width={props.width} height={props.height} />;
}