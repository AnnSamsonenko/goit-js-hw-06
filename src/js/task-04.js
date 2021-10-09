//ЗАДАНИЕ

// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счетчика.
// Обновляй интерфейс новым значением переменной counterValue.

//РЕШЕНИЕ

const valueRef = document.querySelector("#value");
const buttonDecrement = document.querySelector(
  "#counter > button[data-action='decrement']"
);
const buttonIncrement = document.querySelector(
  "#counter > button[data-action='increment']"
);

let counterValue = 0;

const onDecrementCounterValue = () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};

const onIncrementCounterValue = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};

buttonDecrement.addEventListener("click", onDecrementCounterValue);
buttonIncrement.addEventListener("click", onIncrementCounterValue);
