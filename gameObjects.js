import {GRID_SIZE} from "./grid.js";

export let snake = {
    speed: 5,
    snakeBody: [{x: 11, y: 11}],
    accelerate() {
        this.speed += 0.5;
    }
}

export let food = {
    x: Math.floor(Math.random() * GRID_SIZE) + 1,
    y: Math.floor(Math.random() * GRID_SIZE) + 1,
    points: 10,
    boostPoints() {
        this.points *= 2;
    }
}
