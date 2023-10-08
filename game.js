let lastRenderTime = 0
const board = document.querySelector('#game-board')
    
const initGame = (currentTime) => {
    window.requestAnimationFrame(initGame)
    
    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondSinceLastRender < 1 / snake.speed) return
    
    lastRenderTime = currentTime
    draw()
}   

let draw = () => {
    board.innerHTML = ''
    createSnake(board)
}

let createSnake = (gameBoard) => {
    snake.snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}

let snake = {
    speed: 1,
    snakeBody: [{x: 11, y: 11},
        {x: 12, y:11},
        {x: 13, y:11}]
}

window.requestAnimationFrame(initGame)
