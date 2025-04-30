// Elements
const welcomeScreen = document.getElementById('welcome-screen');
const gameScreen = document.querySelector('#game-screen');
const startGameButton = document.getElementById('start-game-button');
const userName = document.getElementById('username');
const userSelection = document.getElementById('user-selection');
const goButton = document.getElementById('go-button');
const scoreParagraph = document.getElementById('score');
const gameHistoryParagraph = document.getElementById('game-history');
const resetGameButton = document.getElementById('reset-game-button');
// instantiate the game object from the `RockPaperScissors` class.
let game;

// hide game screen
gameScreen.classList.add(`d-none`);

// updateScoreTallyUI
function updateScoreTallyUI(){
  scoreParagraph.textContent = `${game.username}: ${game.score.user}  v  CPU: ${game.score.cpu}`;
}

// updateGameHistoryUI
function updateGameHistoryUI(){
  // Clear the current history and replace with new content
  gameHistoryParagraph.textContent = game.gameHistoryLog.join('\n');
}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function (e) {
  e.preventDefault();
  const usernameValue = userName.value.trim();
  if (usernameValue === "") {
    alert("Please enter a username to start the game.");
    return;
  }
  game = new RockPaperScissors(usernameValue);
  welcomeScreen.classList.add('d-none');
  gameScreen.classList.remove('d-none');
  updateScoreTallyUI();
  updateGameHistoryUI();
});

// go-button EventListener
goButton.addEventListener(`click`, function () {
  const selectedOption = userSelection.value;

  if (!selectedOption) {
    alert("Please select Rock, Paper, or Scissors.");
    return;
  }

  game.play(selectedOption);  // Play the round
  updateScoreTallyUI();       // Update score display
  updateGameHistoryUI();      // Update game history display
});

// If you're doing the extra-credit, uncomment the below: reset-game-button
resetGameButton.addEventListener(`click`, function(e) { 
  game.reset();
  updateScoreTallyUI();
  updateGameHistoryUI();
});