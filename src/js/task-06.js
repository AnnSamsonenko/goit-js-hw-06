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

const onValidSimbolsInInput = (event) => {
  if (event.currentTarget.value.length === 6) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.replace("invalid", "valid");
  } else {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.replace("valid", "invalid");
  }
};

inputRef.addEventListener("blur", onValidSimbolsInInput);
