// Створити розмітку з кнопкою та текстовим полем. За допомогою JavaScript отримати
// доступ до кнопки та текстового поля за їх
//  ідентифікаторами та змінити текст на кнопці на значення текстового поля.

const  button = document.getElementById("submit-btn");
const input = document.getElementById("name-input");

console.log(button);
console.log(input);

button.style.color = "blue"
button.style.backgroundColor = "white"
button.style.borderBlockColor = "blue"


button.addEventListener("click", function () {
    const text = input.value;         
    button.textContent = text;       
  })


//   Створити розмітку з заголовком та зображенням. За допомогою JavaScript отримати доступ до зображення та 
//   змінити значення атрибута "src" на шлях до іншого зображення.

const image = document.getElementById("dog-img");
const title = document.getElementById("image-title");
const button1 = document.getElementById("change-btn");

button1.addEventListener("click", function () {
  image.src = "./img/download-6.jpg"; 
  title.textContent = "Тепер інший песик ";
});



// Створити розмітку з посиланням та зображенням. За допомогою JavaScript отримати доступ до
//  посилання та змінити значення атрибута "href" на нову URL-адресу. Також отримати доступ до зображення та
//   додати новий атрибут "alt" з описом зображення.


const link = document.getElementById("my-link");
const image1 = document.getElementById("my-img");

link.href = "https://uk.wikipedia.org/wiki/%D0%9F%D0%B5%D1%81_%D1%81%D0%B2%D1%96%D0%B9%D1%81%D1%8C%D0%BA%D0%B8%D0%B9";
link.textContent = "Перейти на Вікіпедію";

image1.setAttribute("alt", "Милий собака на галявині");

// Створити розмітку зі списком елементів.
//  За допомогою JavaScript отримати доступ до
//   першого елемента списку та змінити його вміст на новий текст.

const list = document.getElementById("my-list");


const firstItem = list.firstElementChild;


firstItem.textContent = "Новий текст для першого пункту";
