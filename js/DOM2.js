// Завдання 1
const categories = document.querySelectorAll("#categories .item");

console.log(`У списку ${categories.length} категорії.`);


categories.forEach(category => {
  const title = category.querySelector("h2").textContent;
  const elements = category.querySelectorAll("ul li").length;

  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${elements}`);
});


// Завдання 2

const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
  ];
  
 
  const list = document.getElementById("ingredients");
  

  const items = ingredients.map(item => {
    const li = document.createElement("li");
    li.textContent = item;
    return li;
  });
  
 
  list.append(...items);
  


  //Завдання 3

  const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];
  
  const galleryEl = document.querySelector('#gallery');
  
  const markup = images
    .map(
      ({ url, alt }) =>
        `<li class="gallery-item"><img src="${url}" alt="${alt}" class="gallery-image"></li>`
    )
    .join('');
  
  galleryEl.insertAdjacentHTML('beforeend', markup);
  