// Функція для генерації випадкового цілого числа в заданому діапазоні
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Створення масиву на 20 елементів з псевдовипадковими цілими числами
let array = [];
for (let i = 0; i < 20; i++) {
  array.push(getRandomInt(1, 100)); // Генеруємо цілі числа від 1 до 100
}

// Сортування масиву за зростанням
array.sort((a, b) => a - b);

// Вивід вмісту масиву у консоль
console.log("Відсортований масив за зростанням:", array);
