// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const counter = document.querySelector('#value');
const btnPlus = document.querySelector('button[data-action="increment"]');
const btnMin = document.querySelector('button[data-action="decrement"]');


btnPlus.addEventListener('click', () => {
  counterValue += 1;
    counter.textContent = counterValue;
})

btnMin.addEventListener('click', () => {
  counterValue -= 1;
  counter.textContent = counterValue;
})
