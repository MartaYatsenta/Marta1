window.onload = function() {
    // Вибір елементів з DOM
    const heightSelect = document.getElementById("heightSelect");
    const generateButton = document.getElementById("generateButton");
    const generatedDiv = document.getElementById("generatedDiv");

    // Функція для генерації елементу div з характеристиками
    function generateDiv() {
        const selectedHeight = heightSelect.value + "px";
        const generatedHTML = `<div id="generatedBlock" style="background-color: blue; width: 30px; height: ${selectedHeight};"></div>`;
        generatedDiv.innerHTML = generatedHTML;

        // Додаємо кнопки "Посунути вліво" і "Посунути вправо"
        const moveLeftButton = document.createElement("button");
        moveLeftButton.textContent = "Посунути вліво";
        moveLeftButton.addEventListener("click", function() {
            moveBlock(-20);
        });

        const moveRightButton = document.createElement("button");
        moveRightButton.textContent = "Посунути вправо";
        moveRightButton.addEventListener("click", function() {
            moveBlock(20);
        });

        generatedDiv.appendChild(moveLeftButton);
        generatedDiv.appendChild(moveRightButton);
    }

    // Додати обробник подій на кнопку "Згенерувати"
    generateButton.addEventListener("click", generateDiv);

    // Функція для переміщення блоку
    function moveBlock(offset) {
        const generatedBlock = document.getElementById("generatedBlock");
        const currentLeft = parseInt(window.getComputedStyle(generatedBlock).left || 0);
        generatedBlock.style.left = (currentLeft + offset) + "px";
    }

    // Викликати функцію generateDiv() для відображення елементу div зі значенням, вибраним за замовчуванням
    generateDiv();
};

