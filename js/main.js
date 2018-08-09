window.addEventListener('load', init);

const levels = {
  easy: 5,
  medium: 3,
  hard: 2,
};

// To change level
const currentLevel = levels.medium;

// Gloable variables
let time = currentLevel;
let score = 0;
let isPlaying;

// DOM
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition',
];

// Pick and show random word
function showWord() {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output a ranom word
  currentWord.innerHTML = words[randIndex];
}

function countDown() {
  if (time > 0) {
    time -= 1;
  } else if (time === 0) {
    isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;
}

function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!!!';
    score = -1;
  }
}

function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!!!';
    return true;
  }
  message.innerHTML = '';
  return false;
}

function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score += 1;
  }
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Initialize the Game
function init() {
  // Show number of seconds in UI
  seconds.innerHTML = currentLevel;
  // Load worf from array
  showWord(words);
  wordInput.addEventListener('input', startMatch);
  // Call countdown every second
  setInterval(countDown, 1000);
  setInterval(checkStatus, 50);
}
