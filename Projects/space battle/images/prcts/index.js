const computerChoiceDisplay = document.getElementById('Random')
const userChoiceDisplay = document.getElementById('try')
const resultDisplay = document.getElementById('output')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
     const randomNumber = Math.floor(Math.random() * possibleChoices.length)+1  // or you can use possibleChoices.length
   console.log(randomNumber)
  if (randomNumber === 1) {
    computerChoice = 'go'
  }
  if (randomNumber === 2) {
    computerChoice = 'leave'
  }
  if (randomNumber === 3) {
    computerChoice = 'postpone'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'irra deebii!'
  }
  if (computerChoice === 'go' && userChoice === "leave") {
    result = 'deemi!'
  }
  if (computerChoice === 'go' && userChoice === "postpone") {
    result = 'hafi!'
  }
  if (computerChoice === 'postpone' && userChoice === "leave") {
    result = 'deemi!'
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
    result = 'you lose!'
  }
  if (computerChoice === 'scissors' && userChoice === "rock") {
    result = 'you win!'
  }
  if (computerChoice === 'scissors' && userChoice === "paper") {
    result = 'you lose!'
  }
  resultDisplay.innerHTML = result
 }