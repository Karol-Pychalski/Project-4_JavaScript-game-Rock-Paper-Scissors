
const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');

function buttonClicked(buttonName) {
  clearMessages();
  console.log(buttonName + ' button clicked');

  function getMoveName(moveId) {
    console.log('function getMoveName was called with argument: ' + moveId);
    if (moveId == 1) {
      return 'rock';
    } else if (moveId == 2) {
      return 'paper';
    } else if (moveId == 3) {
      return 'scissors';
    }
    printMessage(('I did not recognize the move. Please try again.'));
  }
  
  function displayResult(playerMove, computerMove) {
    console.log('function displayResults was called with arguments: ' + playerMove + ', ' + computerMove);
    if (playerMove == 'paper' && computerMove == 'rock') {
      printMessage('You win!');
    } else if (playerMove == 'rock' && computerMove == 'scissors') {
      printMessage('You win!');
    } else if (playerMove == 'scissors' && computerMove == 'paper') {
      printMessage('You win!');
    } else if (playerMove == computerMove) {
      printMessage('Draw!');
    } else {
      printMessage('You lose...');
    }
    printMessage('I played ' + computerMove + ', and you ' + playerMove);
  }
  
  const playerMove = buttonName;
  console.log('palyer move is: ' + playerMove);
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('drawn number : ' + randomNumber);
    
  const computerMove = getMoveName(randomNumber);
  console.log('computer move is: ' + computerMove);
  displayResult(playerMove, computerMove);
}

buttonRock.addEventListener('click', function(){ buttonClicked('rock'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('paper'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('scissors'); });
