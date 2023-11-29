import {snake} from "./gameObjects.js";
import {draw as drawSnake, getSnakeHead, snakeIntersection, snakeMove} from "./snakeDetails.js";
import {draw as drawFood, update as updateFood} from "./foodDetails.js"
import {isSnakeOutsideGrid} from "./grid.js";

const board = document.getElementById('game-board');

let lastRenderTime = 0;
let gameOver = false;
const PATH = '/Snake-JS/index.html?level=1';

function initGame(currentTime) {
    if (gameOver) {
        if (confirm('you lost. press ok to start again')) {
            window.location = PATH;
        }
        return;
    }
    window.requestAnimationFrame(initGame);
    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondSinceLastRender < 1 / snake.speed) return;
    lastRenderTime = currentTime;

    update();
    draw();

}

let draw = () => {
    board.innerHTML = ' ';
    drawSnake(board);
    drawFood(board);

}

let update = () => {
    snakeMove();
    updateFood();
    checkDeath();
}

let checkDeath = () => {
    gameOver = isSnakeOutsideGrid(getSnakeHead()) || snakeIntersection();
}

const btn = document.getElementById('submit');

let selectLevel = () => {
    let levelEasy = document.getElementById('level-easy').checked;
    let levelMedium = document.getElementById('level-medium').checked;
    let levelHard = document.getElementById('level-hard').checked;

    if (levelEasy === true) {
        snake.speed = 5;
    } else if (levelMedium === true) {
        snake.speed = 10;
    } else if (levelHard === true) {
        snake.speed = 25;
    } else {
        if (confirm('you need to choose level')) {
            window.location = PATH;
        }
    }
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const form = document.getElementById('form');
    form.setAttribute('style', 'display: none');
    selectLevel();
    window.requestAnimationFrame(initGame);

})
