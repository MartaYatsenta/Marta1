// Оголошуємо початковий стан дошки
let boardState = [
    [false, false, false],
    [false, false, false],
    [false, false, false]
];

// Функція, що перемикає стан певної клітинки та її сусідів
function toggleLights(row, col) {
    boardState[row][col] = !boardState[row][col]; // Перемикаємо клітинку

    // Перемикаємо сусідні клітинки (верх, низ, ліво, право)
    if (row > 0) boardState[row - 1][col] = !boardState[row - 1][col]; // Верхня клітинка
    if (row < 2) boardState[row + 1][col] = !boardState[row + 1][col]; // Нижня клітинка
    if (col > 0) boardState[row][col - 1] = !boardState[row][col - 1]; // Ліва клітинка
    if (col < 2) boardState[row][col + 1] = !boardState[row][col + 1]; // Права клітинка
}

// Функція перевірки виграшу
function checkWin() {
    // Перевіряємо, чи всі клітинки вимкнені
    return boardState.every(row => row.every(cell => !cell));
}

// Функція відображення дошки в HTML
function renderBoard() {
    const board = document.getElementById('board');
    board.innerHTML = '';

    for (let i = 0; i < boardState.length; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j < boardState[i].length; j++) {
            const cell = document.createElement('div');
            cell.className = `cell ${boardState[i][j] ? 'on' : 'off'}`;
            cell.addEventListener('click', () => {
                toggleLights(i, j);
                renderBoard();
                if (checkWin()) {
                    alert('Ви перемогли!');
                    resetBoard();
                }
            });
            row.appendChild(cell);
        }
        board.appendChild(row);
    }
}

// Функція скидання дошки в початковий стан
function resetBoard() {
    boardState = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    renderBoard();
}

// Викликаємо функцію відображення дошки після завантаження сторінки
window.onload = renderBoard;
