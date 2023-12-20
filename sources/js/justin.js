const paddle = document.getElementById('paddle');
const ball = document.getElementById('ball');
const scoreDisplay = document.getElementById('score');

let score = 0;

// Set initial position of the paddle
let paddleX = 110;

// Set initial position of the ball
let ballX = 150;
let ballY = 200;

// Set initial direction of the ball
let ballDirectionX = 2;
let ballDirectionY = 2;

// Move paddle based on arrow keys
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft' && paddleX > 0) {
        paddleX -= 20;
    } else if (event.key === 'ArrowRight' && paddleX < 220) {
        paddleX += 20;
    }

    paddle.style.left = paddleX + 'px';
});

function updateGame() {
    // Move the ball
    ballX += ballDirectionX;
    ballY += ballDirectionY;

    // Check for collisions with walls
    if (ballX < 0 || ballX > 280) {
        ballDirectionX = -ballDirectionX;
    }

    if (ballY < 0) {
        ballDirectionY = -ballDirectionY;
    }

    // Check for collision with the paddle
    if (
        ballY > 370 &&
        ballX > paddleX &&
        ballX < paddleX + 80
    ) {
        ballDirectionY = -ballDirectionY;
        score++;
        scoreDisplay.innerText = 'Score: ' + score;
    }

    // Check if the ball falls below the paddle
    if (ballY > 400) {
        alert('Game Over! Your score is ' + score);
        resetGame();
    }

    // Update the ball position
    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';

    // Request the next animation frame
    requestAnimationFrame(updateGame);
}

function resetGame() {
    score = 0;
    scoreDisplay.innerText = 'Score: ' + score;

    // Reset ball and paddle positions
    ballX = 150;
    ballY = 200;
    paddleX = 110;

    // Reset ball direction
    ballDirectionX = 2;
    ballDirectionY = 2;

    // Update the paddle position
    paddle.style.left = paddleX + 'px';

    // Update the ball position
    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';
}

// Start the game loop
updateGame();
