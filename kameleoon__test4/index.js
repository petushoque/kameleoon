const game = document.querySelector('.game')
const randomNumberElement = document.querySelector('.random-number')
const userInput = document.querySelector('.user-input')
const tryButton = document.querySelector('.try-button')
const againButton = document.querySelector('.again-button')
const historyBlock = document.querySelector('.try-history')

let userTry
let tryHistory = []

function getRandomInt(max) {
        return Math.floor(Math.random() * max);
}
const randomNumber = getRandomInt(101)

function checkTry () {
        userTry = Number(userInput.value)
        if ((userTry < 0) || (userTry >100)) {
                alert('Please input only number from 0 to 100')
        }
        if (userTry > randomNumber) {
                userInput.value = '';
                tryHistory.push(userTry)
                alert('too high')
        }
        if (userTry < randomNumber) {
                userInput.value = '';
                tryHistory.push(userTry)
                alert('too low')
        }
        if (userTry === randomNumber) {
                userInput.value = '';
                tryHistory.push(userTry)
                randomNumberElement.textContent = randomNumber
                alert('you find the number')
                for (let i=0; i<tryHistory.length; i++) {
                        let output = document.createElement('p')
                        output.textContent = tryHistory[i]
                        historyBlock.appendChild(output)
                }
        }
}

tryButton.addEventListener('click', () => checkTry())

againButton.addEventListener('click', () => {window.location.reload()})
