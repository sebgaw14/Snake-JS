import {food} from "./gameObjects.js";

let foodPos = {
    x: food.x,
    y: food.y
}
export let drawFood = (gameBoard) => {
    createFood(gameBoard);
}

export let updateFood = () => {

}

let createFood = (gameBoard) => {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = foodPos.x;
    foodElement.style.gridColumnStart = foodPos.y;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}
