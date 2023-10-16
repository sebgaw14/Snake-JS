import {snake} from "./gameObjects.js";

export let draw = (board) => {
    board.innerHTML = ''
    createSnake(board)
}

export let createSnake = (gameBoard) => {
    snake.snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}
export let snakeMove = () => {
    for (let i = snake.snakeBody.length - 2; i >= 0; i--) {
        snake.snakeBody[i + 1] = {...snake.snakeBody[i]};
    }
}
