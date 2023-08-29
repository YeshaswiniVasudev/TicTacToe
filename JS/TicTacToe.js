const CLASS_O = 'o'
const CLASS_X = 'x'
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const WinningMessageElement = document.getElementById('winningMessage')
const WinningText = document.querySelector('[data-winning-message-text]')
const restartButton = document.getElementById('restartButton')
const winningCombs = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let circleTurn

startGame()

restartButton.addEventListener('click', startGame)

function startGame(){
circleTurn = false
cellElements.forEach(cell => {
    cell.classList.remove(CLASS_O)
    cell.classList.remove(CLASS_X)
    cell.removeEventListener('click', handleClick)
    cell.addEventListener('click', handleClick, { once :true })
})
setBoardHoverClass()
WinningMessageElement.classList.remove('show')
}

function handleClick(e){
    const cell = e.target
    const current_class = circleTurn ? CLASS_O : CLASS_X
    placeMark(cell, current_class)
    if(checkWin(current_class)){
        endGame(false)
    }
    else if (isDraw()){
        endGame(true)
    }else{
        swapTurns()
        setBoardHoverClass() 
    }
}

function isDraw(){
    return [...cellElements].every(cell => {
        return cell.classList.contains(CLASS_O) || 
        cell.classList.contains(CLASS_X)
    })
}

function endGame(draw){
    if(draw){
        WinningText.innerText = 'Draw!'
    }
    else{
        WinningText.innerText = `${circleTurn ? "O" : "X"} Wins!`
    }
    WinningMessageElement.classList.add('show')

}

function placeMark(cell, current_class){
    cell.classList.add(current_class)
}

function swapTurns(){
    circleTurn = !circleTurn
}

function setBoardHoverClass(){
board.classList.remove(CLASS_O)
board.classList.remove(CLASS_X)
if(circleTurn){
    board.classList.add(CLASS_O)
}
else {
    board.classList.add(CLASS_X)
}
}

function checkWin(current_class){
    return winningCombs.some(combinations =>{
        return combinations.every((index => {
            return cellElements[index].classList.contains(current_class)
        }))
    })

}