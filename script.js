const choices = document.querySelectorAll('#choices button');
const result = document.getElementById('result');

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const userChoice = choice.id;
    const computerChoice = getComputerChoice();
    const winner = determineWinner(userChoice, computerChoice);

    result.textContent = `You chose: ${userChoice}. Computer chose: ${computerChoice}. ${winner}`;
  });
});

function getComputerChoice() {
  const options = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
             (userChoice === 'paper' && computerChoice === 'rock') ||
             (userChoice === 'scissors' && computerChoice === 'paper')) {
    return 'You win!';
  } else {
    return 'You lose!';
  }
}