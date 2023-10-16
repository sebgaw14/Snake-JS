import {drawSnake, snakeMove} from "./SnakeDetails.js";
import {snake} from "./gameObjects.js";
import {drawFood} from "./foodDetails.js";

let lastRenderTime = 0
const board = document.querySelector('#game-board')

const initGame = (currentTime) => {
    window.requestAnimationFrame(initGame)
    
    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondSinceLastRender < 1 / snake.speed) return
    
    lastRenderTime = currentTime

    updateSnake()
    draw()
}

let draw = () => {
    snakeMove()
    drawSnake(board)
    drawFood(board)

}

let updateSnake = () => {
    snakeMove()
}

window.requestAnimationFrame(initGame)
