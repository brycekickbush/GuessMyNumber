//Bryce Kickbush
//Credit given to Jonas Schmedtmann on udemy.com for starter files
//Link to his course -----> https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648429?start=0#overview
'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

/**
 * Updates the .message class
 *
 */
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let score = 20;
let highScore = 0;

console.log(secretNumber);
document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;

  //If else block accounts for all the different number scenarios
  //When there is not input or invalid input
  if (!guess) {
    displayMessage('No number entered.');
    //When guest guesses an invalid number
  } else if (guess > 20 || guess < 1) {
    displayMessage('Invalid number entered.');
    //When guest guesses correct
  } else if (guess == secretNumber) {
    displayMessage('Correct guess!');
    document.querySelector('body').style.backgroundColor = '#60b347'; //Changes background color when guess is made
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //When guest is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game :(');
    }
  }
});

//Function that resets game when the 'again' button is clicked by the user
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});
