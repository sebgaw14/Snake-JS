import {food} from "./gameObjects.js";
import {growSnake, onSnake} from "./snakeDetails.js";
import {randomGridPos} from "./grid.js";

let foodPos = {x: food.x, y: food.y};
const EXPANSION_RATE = 1;

export let draw = (gameBoard) => {
    createFood(gameBoard);
}

export let update = () => {
    if (onSnake(foodPos)) {
        growSnake(EXPANSION_RATE);
        foodPos = getRandomFoodPos();
    }
}

let createFood = (gameBoard) => {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = foodPos.y;
    foodElement.style.gridColumnStart = foodPos.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}

let getRandomFoodPos = () => {
    let newFoodPos;
    while (newFoodPos == null || onSnake(newFoodPos)) {
        newFoodPos = randomGridPos();
    }
    return newFoodPos;
}
