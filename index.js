let firstCard = 10
let secondCard = 2
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

// 1. Store the message-el paragraph in a variable called messageEl
 let messageEl =document.getElementById("message-el")
 let sumEl = document.getElementById("sum-el")
 let cardEl = document.getElementById("cards-el");

function startGame(){
    renderGame()
}


function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    // 2. Display the message in the messageEl using messageEl.textContent
       
    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
    cardEl.textContent = "Cards: " + firstCard + " " + secondCard
}

function newCard() {
    console.log("Drawing a new card from the deck")
    let card = 4
    sum += card
    renderGame()
}

Math.random()