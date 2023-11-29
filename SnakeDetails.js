import {snake} from "./gameObjects.js";
import {getInputDirection} from "./movingSnake.js";

let newSegment = 0;

export let draw = (gameBoard) => {
    createSnake(gameBoard);
}

export let snakeMove = () => {
    addSegments();
    const movingDirection = getInputDirection()
    for (let i = snake.snakeBody.length - 2; i >= 0; i--) {
        snake.snakeBody[i + 1] = {...snake.snakeBody[i]};
    }

    snake.snakeBody[0].x += movingDirection.x;
    snake.snakeBody[0].y += movingDirection.y;
}

let createSnake = (gameBoard) => {
    snake.snakeBody.forEach(segment => {
        const snakeElem = document.createElement('div');
        snakeElem.style.gridRowStart = segment.y;
        snakeElem.style.gridColumnStart = segment.x;
        snakeElem.classList.add('snake');
        gameBoard.appendChild(snakeElem);
    })
}

export let growSnake = (amount) => {
    newSegment += amount;
}

export let onSnake = (position, {ignoreHead = false} = {}) => {
    return snake.snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false;
        return equalPos(segment, position);
    })
}

let equalPos = (pos1, pos2) => {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

let addSegments = () => {
    for (let i = 0; i < newSegment; i++) {
        snake.snakeBody.push({...snake.snakeBody[snake.snakeBody.length - 1]})
    }
    newSegment = 0;
}

export let getSnakeHead = () => {
    return snake.snakeBody[0];
}

export let snakeIntersection = () => {
    return onSnake(snake.snakeBody[0], {ignoreHead: true})
}