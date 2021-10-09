//ЗАДАНИЕ

// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

//РЕШЕНИЕ

const boxesContainer = document.querySelector("#boxes");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");
let inputValue = 0;

const onCreateBoxes = () => {
  const boxesArray = [];
  let boxSize = 30;
  for (let i = 1; i <= inputValue; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = `${getRandomHexColor()}`;
    boxesArray.push(box);
    boxSize += 10;
  }
  boxesContainer.append(...boxesArray);
};

const onDestroyBoxes = () => (boxesContainer.innerHTML = "");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

input.addEventListener("change", (event) => {
  inputValue = event.currentTarget.value;
});
buttonCreate.addEventListener("click", onCreateBoxes);
buttonDestroy.addEventListener("click", onDestroyBoxes);
