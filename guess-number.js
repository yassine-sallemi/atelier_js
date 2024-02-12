const selectDifficulty = () => {
  let difficulty;
  difficulty = +prompt(
    "Select the difficulty level 🙂\n  1.Easy\n  2.Medium\n  3.Hard"
  );
  if (difficulty === 1 || difficulty === 2 || difficulty === 3) {
    return difficulty;
  } else if (difficulty === 0) {
    return 0;
  } else {
    alert("Invalid difficulty level ⛔");
    return NaN;
  }
};

const generateRandomNumber = (difficulty) => {
  if (difficulty === 1) {
    return Math.trunc(Math.random() * 10) + 1;
  } else if (difficulty === 2) {
    return Math.trunc(Math.random() * 50) + 1;
  } else if (difficulty === 3) {
    return Math.trunc(Math.random() * 100) + 1;
  }
};

const guessTheNumber = (difficulty, secretNumber) => {
  let attempts = 0;
  let maxAttempts;
  let maxNumber;
  if (difficulty === 1) {
    maxAttempts = 5;
    maxNumber = 10;
  } else if (difficulty === 2) {
    maxAttempts = 10;
    maxNumber = 50;
  } else if (difficulty === 3) {
    maxAttempts = 20;
    maxNumber = 100;
  }

  let guess;
  while (attempts < maxAttempts) {
    guess = prompt(
      `Guess the number between ${1} and ${maxNumber}\nYou have ${
        maxAttempts - attempts
      } attempts left 🧐`
    );
    if (guess === null) {
      alert("You have cancelled the game");
      return null;
    }
    guess = +guess;
    if (guess === NaN || guess < 1 || guess > maxNumber) {
      alert("Invalid input ⛔");
    } else {
      if (guess === secretNumber) {
        alert(`You guessed the number in ${attempts + 1} attempts 🎉🎉🎉`);
        break;
      } else if (guess < secretNumber) {
        alert("Too low 📉");
      } else if (guess > secretNumber) {
        alert("Too high 📈");
      }
      attempts++;
    }
  }
  if (attempts === maxAttempts) {
    alert(`You lost! The number was ${secretNumber} 😔`);
  }
};

const endGame = () => {
  alert("Sad to see you go 😔");
};

const startGame = () => {
  let playAgain = true;
  alert("Welcome to the number guessing game!🎉");
  while (playAgain) {
    let difficulty = null;
    secretNumber = null;

    while (!difficulty) {
      difficulty = selectDifficulty();
      if (difficulty === 0) {
        endGame();
        return;
      }
    }
    secretNumber = generateRandomNumber(difficulty);

    let guessedNumber = guessTheNumber(difficulty, secretNumber);
    if (guessedNumber === null) {
      endGame();
      return;
    }
    alert(guessedNumber);

    playAgain = confirm("Do you want to play again? 🤔");
  }
  alert("Thanks for playing! 😁");
};

const btn = document.getElementById("start-btn");
btn.addEventListener("click", function () {
  btn.innerText = "Playing...";
  btn.disabled = true;
  setTimeout(() => {
    startGame();
    btn.innerText = "Restart Game";
    btn.disabled = false;
  }, 1000);
});
