// Get a reference to the image element
const image = document.getElementById("map");

// Get a reference to the form element
const form = document.querySelector("form");

// Get a reference to the answer input element
const answerInput = document.getElementById("answer");

// Get a reference to the result element
const result = document.getElementById("result");

// Define an array of image file names and corresponding answers
const maps = [
  { file: "map1.png", answer: "Malaysia" },
  { file: "map2.png", answer: "Australia" },
  { file: "map3.png", answer: "Brazil" },
  { file: "map4.png", answer: "Canada" },
  { file: "map5.png", answer: "China" },
  { file: "map6.png", answer: "Mexico"},
  { file: "map7.png", answer: "Singapore"}
];

// Function to randomly select an image and answer from the maps array
function getRandomMap() {
  const randomIndex = Math.floor(Math.random() * maps.length);
  return maps[randomIndex];
}

// Function to check the user's answer
function checkAnswer(event) {
  event.preventDefault();
  const answer = answerInput.value.trim().toLowerCase();
  if (answer === currentMap.answer.toLowerCase()) {
    result.textContent = "Correct!";
  } else {
    result.textContent = "Incorrect. The correct answer is: " + currentMap.answer;
  }
  answerInput.value = "";
}

// Set the source of the image element and answer to a randomly selected map
let currentMap = getRandomMap();
image.src = "images/" + currentMap.file;

// Add an event listener to the form to check the user's answer when the form is submitted
form.addEventListener("submit", checkAnswer);
