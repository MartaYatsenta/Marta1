let timerInterval;
let gameActive = false;

document.getElementById('startButton').addEventListener('click', startGame);

function startGame() {
    const startPage = document.getElementById('startPage');
    const gamePage = document.getElementById('gamePage');
    const blockColor = document.getElementById('color').value;
    const difficulty = document.getElementById('difficulty').value;

    if (!blockColor || !difficulty) {
        alert("Please choose block color and difficulty");
        return;
    }

    startPage.style.display = 'none';
    gamePage.style.display = 'block';

    document.getElementById('block').style.backgroundColor = blockColor;

    let specifiedTime = 4;
    let blockSize = 50;
    let marginSize = 10;

    if (difficulty === 'easy') {
        specifiedTime = 3;
        blockSize = 50;
        marginSize = 10;
    } else if (difficulty === 'normal') {
        specifiedTime = 2;
        blockSize = 40;
        marginSize = 20;
    } else if (difficulty === 'hard') {
        specifiedTime = 1;
        blockSize = 30;
        marginSize = 30;
    }

    document.getElementById('block').style.width = blockSize + 'px';
    document.getElementById('block').style.height = blockSize + 'px';
    document.getElementById('block').style.margin = marginSize + 'px';

    startTimer(specifiedTime);
    moveBlock(difficulty);
    gameActive = true;
}

function startTimer(specifiedTime) {
    const timerElement = document.getElementById('timer');
    let remainingTime = specifiedTime;

    timerInterval = setInterval(function() {
        if (gameActive) {
            timerElement.textContent = 'Time left for click: ' + remainingTime + 's';
            if (remainingTime <= 0) {
                clearInterval(timerInterval);
                alert('Time\'s up! Your score: ' + document.getElementById('score').textContent + '\nCongratulations! To start a new game, please refresh the page.');
                gameActive = false;
            }
            remainingTime--;
        }
    }, 1000);
}

function moveBlock(difficulty) {
    const block = document.getElementById('block');

    const screenWidth = window.innerWidth - 2 * parseInt(block.style.margin) - block.offsetWidth;
    const screenHeight = window.innerHeight - 2 * parseInt(block.style.margin) - block.offsetHeight;

    let randomX, randomY;

    if (difficulty === 'easy') {
        const interval = 100;
        randomX = Math.floor(Math.random() * (screenWidth - interval));
        randomY = Math.floor(Math.random() * (screenHeight - interval));
    } else if (difficulty === 'normal') {
        const interval = 50;
        randomX = Math.floor(Math.random() * (screenWidth - interval));
        randomY = Math.floor(Math.random() * (screenHeight - interval));
    } else if (difficulty === 'hard') {
        const interval = 20;
        randomX = Math.floor(Math.random() * (screenWidth - interval));
        randomY = Math.floor(Math.random() * (screenHeight - interval));
    }

    block.style.left = randomX + 'px';
    block.style.top = randomY + 'px';

    block.onclick = function() {
        if (gameActive) {
            let currentScore = parseInt(document.getElementById('score').textContent.split(": ")[1]);
            currentScore++;
            document.getElementById('score').textContent = 'Score: ' + currentScore;
            clearInterval(timerInterval);
            startGame();
        }
    };
}
