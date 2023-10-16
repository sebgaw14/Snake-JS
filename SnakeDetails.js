import {snake} from "./gameObjects.js";
import {getInputDirection} from "./movingSnake.js";

export let drawSnake = (board) => {
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
    const movingDirection = getInputDirection()
    for (let i = snake.snakeBody.length - 2; i >= 0; i--) {
        snake.snakeBody[i + 1] = {...snake.snakeBody[i]};
    }
    snake.snakeBody[0].x += movingDirection.x;
    snake.snakeBody[0].y += movingDirection.y;
}
