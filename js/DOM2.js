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