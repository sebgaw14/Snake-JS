import {snake} from "./gameObjects.js";
import {snakeMove, draw as drawSnake, getSnakeHead, snakeIntersection} from "./snakeDetails.js";
import {draw as drawFood, update as updateFood} from "./foodDetails.js"
import {outsideGrid} from "./grid.js";

// window.requestAnimationFrame(initGame);

const board = document.getElementById('game-board');

let lastRenderTime = 0;
let gameOver = false;

function initGame(currentTime) {
    if (gameOver){
        if(confirm('you lost. press ok to start again')){
            window.location = '/freestyle-javascript-game-javascript-sebgaw12/index.html?level=1';
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
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

const btn = document.getElementById('submit');
const startMenu = document.getElementById('start-menu');

btn.addEventListener('click', (e) =>{
    startMenu.setAttribute('style', 'display: none');
    window.requestAnimationFrame(initGame);
    e.preventDefault();
})