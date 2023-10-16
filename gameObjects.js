export let snake = {
    speed: 1,
    snakeBody: [{x: 11, y: 11}]
}

export let food = {
    x: Math.floor(Math.random() * 21) + 1,
    y: Math.floor(Math.random() * 21) + 1
}
