let randomNumber = Math.floor(Math.random() * 100) + 1
console.log(randomNumber);

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

const demo = document.querySelector('.demo')

let guessCount = 1;
let resetButton;

function checkGuess() {
  // alert('I am a placeholder');

  const userGuess = Number(guessField.value)
  console.log(userGuess);

  if(guessCount === 1) {
    guessCount.textContent = 'Previous guesses: '
  }
  guesses.textContent += `${userGuess} `

  // conditional block
  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'darkgreen';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    lowOrHi.textContent = '';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'crimson';
    if (userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }
  // console.log(userGuess);
  guessCount++;
  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess)

function setGameOver() {
  guessField.disabled = true
  guessSubmit.disabled = true
  resetButton = document.createElement('button')
  resetButton.textContent = 'Start new game'

  demo.appendChild(resetButton)
  resetButton.addEventListener('click', resetGame)
}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll('.resultParas p');
  for (const resetPara of resetParas) {
    resetPara.textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = '#5c6784';

  randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber);
}