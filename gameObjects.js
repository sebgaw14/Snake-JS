import {GRID_SIZE} from "./grid.js";

export let snake = {
    speed: 0,
    snakeBody: [{x: 11, y: 11}]
}

export let food = {
    x: Math.floor(Math.random() * GRID_SIZE) + 1,
    y: Math.floor(Math.random() * GRID_SIZE) + 1
}
