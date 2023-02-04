// Get references to the image and form elements
const image = document.getElementById("map");
const form = document.querySelector("form");

// Get references to the answer input and result elements
const answerInput = document.getElementById("answer");
const result = document.getElementById("result");

// Get references to the correct and incorrect count elements
const correctCount = document.getElementById("correct");
const incorrectCount = document.getElementById("incorrect");

// Define an array of image file names and corresponding answers
const maps = [
  { file: "map1.png", answer: "Malaysia" },
  { file: "map2.png", answer: "Australia" },
  { file: "map3.png", answer: "Brazil" },
  { file: "map4.png", answer: "Canada" },
  { file: "map5.png", answer: "China" },
  { file: "map6.png", answer: "USA" },
  { file: "map7.png", answer: "Indonesia" },
  { file: "map8.png", answer: "India" },
  { file: "map9.png", answer: "Russia" },
  { file: "map10.png", answer: "Italy" }
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
    correctCount.textContent = parseInt(correctCount.textContent) + 1;
  } else {
    result.textContent = "Incorrect. The correct answer is: " + currentMap.answer;
    incorrectCount.textContent = parseInt(incorrectCount.textContent) + 1;
  }
  answerInput.value = "";
  currentMap = getRandomMap();
  image.src = "images/" + currentMap.file;
}

// Set the source of the image element and answer to a randomly selected map
let currentMap = getRandomMap();
image.src = "images/" + currentMap.file;

// Add an event listener to the form to check the user's answer when the form is submitted
form.addEventListener("submit", checkAnswer);
