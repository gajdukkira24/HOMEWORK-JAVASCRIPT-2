// 1.Напиши скрипт в якому є три радіобатони зі значенями кольрів.
//  При обиранніна будь якого колір фону боді змінюється відповідно

const form = document.querySelector('form');
    
form.addEventListener('change', (event) => {
  if (event.target.name === 'color') {
    document.body.style.backgroundColor = event.target.value;
  }
});


document.body.style.backgroundColor = form.color.value;


// 2.Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input),
//  підставляє його поточне значення в span#name-output. якщо інпут порожній, в спані повинен відображатися рядок
//   'незнайомець'.

const input = document.querySelector('#validation-input');
const requiredLength = Number(input.dataset.length);

input.addEventListener('blur', () => {
  const currentLength = input.value.trim().length;
  input.classList.remove('valid', 'invalid');

  if (currentLength === requiredLength) {
    input.classList.add('valid');
  } else {
    input.classList.add('invalid');
  }

});

// 3. Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input)
//  і змінює інлайн-стиль span#text оновлюючи властивість font-size. В результаті при перетягуванні повзунка
//   змінюватиметься розмір тексту.

const fontSizeControl = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

const updateFontSize = () => {
  const size = fontSizeControl.value;
  textSpan.style.fontSize = `${size}px`;
};

fontSizeControl.addEventListener('input', updateFontSize);


updateFontSize();