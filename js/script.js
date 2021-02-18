
const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');

function buttonClicked(buttonName) {
  clearMessages();
  console.log(buttonName + ' został kliknięty');

  function getMoveName(moveId) {
    console.log('function was called getMoveName with argument: ' + moveId);
    if (moveId == 1) {
      return 'kamień';
    } else if (moveId == 2) {
      return 'papier';
    } else if (moveId == 3) {
      return 'nożyce';
    }
    printMessage(('Nie rozpoznałem ruchu. Spróbuj jeszcze raz.'));
  }
  
  function displayResult(playerMove, computerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + playerMove + ', ' + computerMove);
    if (playerMove == 'papier' && computerMove == 'kamień') {
      printMessage('Wygrywasz');
    } else if (playerMove == 'kamień' && computerMove == 'nożyce') {
      printMessage('Wygrywasz');
    } else if (playerMove == 'nożyce' && computerMove == 'papier') {
      printMessage('Wygrywasz');
    } else if (playerMove == computerMove) {
      printMessage('Remis');
    } else {
      printMessage('Przegrywasz');
    }
    printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);
  }
  
  const playerMove = buttonName;
  console.log('ruch gracza to: ' + playerMove);
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
    
  const computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
}

buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });
