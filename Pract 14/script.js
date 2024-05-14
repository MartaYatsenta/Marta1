let timer;
let time;
let movesCount = 0;

const startGame = function ({ target, fieldPattern }) {
    movesCount = 0;
    setGameTarget(target);
    resetMoveCount();
    const restartButton = document.getElementById("restart-btn");
    const fieldPatternCopy = fieldPattern.map((arr) => arr.slice());
    let field = constructField(fieldPatternCopy);
    attachClickEventsToCells(field, fieldPatternCopy);
    startTimer();
    restartButton.removeEventListener("click", restartGame(fieldPattern));
    restartButton.addEventListener("click", restartGame(fieldPattern));
};

const restartGame = function(fieldPattern){
    return (event) => {
        const fieldPatternCopy = fieldPattern.map((arr) => arr.slice());
        if (timer) {
            stopGameTimer();
        }
        startTimer();
        let field = constructField(fieldPatternCopy);
        movesCount = 0;
        resetMoveCount();
        attachClickEventsToCells(field, fieldPatternCopy);
    }
};

const constructField = function (fieldPattern) {
    const fieldContainer = document.getElementById("field-cont");
    clearContainer(fieldContainer);
    const field = [];
    for (let i = 0; i < fieldPattern.length; i++) {
        const fieldRow = [];
        for (let j = 0; j < fieldPattern[0].length; j++) {
            const cell = createGameCell(fieldPattern[i][j], i, j);
            fieldContainer.appendChild(cell);
            fieldRow.push(cell);
        }
        field.push(fieldRow);
    }
    return field;
};

const clearContainer = function (container) {
    container.innerHTML = "";
};

const createGameCell = function (state, i, j) {
    const cell = document.createElement("div");
    cell.id = `${i}_${j}`;
    state && cell.classList.add("active");
    return cell;
};

const startTimer = function () {
    stopGameTimer();
    time = 0;
    const timerContainer = document.getElementById("timer");
    timerContainer.textContent = "00:00";
    timer = setInterval(() => {
        time++;
        timerContainer.textContent =
            Math.floor((time % 3600) / 60)
                .toString()
                .padStart(2, "0") +
            ":" +
            Math.floor(time % 60)
                .toString()
                .padStart(2, "0");
    }, 1000);
};

const attachClickEventsToCells = function (field, fieldPattern) {
    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[0].length; j++) {
            field[i][j].addEventListener("click", (event) => {
                toggleCellState(fieldPattern, i, j);
                toggleCellState(fieldPattern, i + 1, j);
                toggleCellState(fieldPattern, i - 1, j);
                toggleCellState(fieldPattern, i, j + 1);
                toggleCellState(fieldPattern, i, j - 1);
                checkIfAllCellsAreZeroes(fieldPattern) && endTheGame();
                updateMoveCount();
            });
        }
    }
};

const toggleCellState = function (fieldPattern, i, j) {
    const cell = document.getElementById(`${i}_${j}`);
    if (cell) {
        fieldPattern[i][j] = !fieldPattern[i][j];
        cell.classList.toggle("active");
    }
};

const checkIfAllCellsAreZeroes = function (fieldPattern) {
    let allZeroes = true;
    fieldPattern.forEach((row) => {
        row.forEach((cell) => {
            allZeroes = !cell && allZeroes ? true : false;
        });
    });
    return allZeroes;
};

const endTheGame = function () {
    stopGameTimer();
    setTimeout(() => {
        if (!alert("Congratulation! You're N...")) {
        }
    }, 500);
};

constructField([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
]);

const updateMoveCount = function () {
    movesCount++;
    document.getElementById("moves").textContent = movesCount;
};

const resetMoveCount = function () {
    document.getElementById("moves").textContent = 0;
};

const stopGameTimer = function () {
    clearInterval(timer);
};

const setGameTarget = function (target) {
    document.getElementById("target").textContent = target;
};

const getRandomField = async () => {
    const fields = ["gameLightOut1.json", "gameLightOut2.json", "gameLightOut3.json"];
    const randomField = fields[Math.floor(Math.random() * fields.length)];
    try {
        const response = await fetch(randomField);
        const object = await response.json();
        startGame(object);
    } catch (error) {
        console.log(error);
    }
};

const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", getRandomField);
