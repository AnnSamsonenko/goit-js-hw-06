//ЗАДАНИЕ

// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

// РЕШЕНИЕ

const inputRef = document.querySelector("#validation-input");

const onValidSimbolsInInput = ({ target: { value, dataset } }) => {
  if (value.length === parseInt(dataset.length)) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
};

inputRef.addEventListener("blur", onValidSimbolsInInput);

//Этот вариант ментор подсказал))

// const inputRef = document.querySelector("#validation-input");
// const datasetLength = parseInt(inputRef.dataset.length);
// inputRef.addEventListener("change", (event) => {
//   event.target.value.length === datasetLength
//     ? event.target.classList.remove("invalid") &
//       event.target.classList.add("valid")
//     : event.target.classList.add("invalid");
// });
