let gameState = {
    currentGameIndex: 0,
    currentSteps: 0,
    games: {},
    startTime: null,
    timer: null,
    initialGameStates: {}
};

const fetching = async () => {
    try {
        const response = await fetch('gameLightOut.json');
        const data = await response.json();
        gameState.games = data;
        gameState.initialGameStates = Object.values(gameState.games).map(game => game.initial_state); 
        setupGame(gameState.currentGameIndex);
    } catch (error) {
        console.error('Failed to fetch game data:', error);
    }
};

const startGame = (game) => {
    clearInterval(gameState.timer);
    gameState.startTime = Date.now();
    gameState.timer = setInterval(updateTime, 1000);

    gameState.currentSteps = 0;
    updateSteps();

    document.getElementById('minSteps').textContent = game.minimum_steps_to_win;

    const board = document.getElementById('gameBoard');
    board.innerHTML = '';

    game.initial_state.forEach((row, r) => {
        let tr = board.insertRow();
        row.forEach((cell, c) => {
            let td = tr.insertCell();
            td.className = cell === 1 ? 'lightOn' : '';
            td.onclick = () => toggleLights(r, c, game.initial_state);
        });
    });
};

const toggleLights = (r, c, grid) => {
    const originalGrid = JSON.parse(JSON.stringify(grid)); 
    let changed = false; 

    const toggle = (r, c) => {
        if (r >= 0 && r < 5 && c >= 0 && c < 5) {
            grid[r][c] = 1 - grid[r][c];
            let cell = document.getElementById('gameBoard').rows[r].cells[c];
            cell.className = grid[r][c] === 1 ? 'lightOn' : '';
            changed = true; 
        }
    };

    toggle(r, c);
    toggle(r - 1, c);
    toggle(r + 1, c);
    toggle(r, c - 1);
    toggle(r, c + 1);

    let anyChanged = false;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] !== originalGrid[i][j]) {
                anyChanged = true;
                break;
            }
        }
        if (anyChanged) break;
    }

    if (!changed && !anyChanged && gameState.currentSteps % 2 === 0 && gameState.currentSteps !== 0) {
        gameState.currentSteps--; 
        updateSteps(); 
    } else if (changed || anyChanged) {
        gameState.currentSteps++; 
        updateSteps(); 
    }

    if (checkWin(grid)) {
        clearInterval(gameState.timer);
        setTimeout(() => {
            alert("Вітаємо! Ви перемогли!");
            restart();
        }, 1000);
    }
};

const checkWin = (grid) => {
    return grid.every(row => row.every(cell => cell === 0));
};

const changeCombination = () => {
    gameState.currentGameIndex = (gameState.currentGameIndex + 1) % Object.keys(gameState.games).length;
    setupGame(gameState.currentGameIndex);
};

const restart = () => {
    gameState.currentSteps = 0;
    resetToInitialState();
};

const updateSteps = () => {
    document.getElementById('currentSteps').textContent = gameState.currentSteps;
};

const updateTime = () => {
    let elapsed = Math.floor((Date.now() - gameState.startTime) / 1000);
    document.getElementById('gameTime').textContent = elapsed;
};

window.onload = fetching;

const setupGame = (index) => {
    const gameKey = Object.keys(gameState.games)[index];
    const game = gameState.games[gameKey];
    startGame(game);
};

const resetSteps = () => {
    gameState.currentSteps = 0;
    updateSteps();
};

const resetToInitialState = () => {
    const gameKey = Object.keys(gameState.games)[gameState.currentGameIndex];
    const initialState = gameState.initialGameStates[gameState.currentGameIndex];
    gameState.games[gameKey].initial_state = JSON.parse(JSON.stringify(initialState)); 
    startGame(gameState.games[gameKey]);
};

document.getElementById('newGameButton').addEventListener('click', changeCombination);
