const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.getElementById('ingredients');

// for (const ingredient of ingredients) {
//   const li = document.createElement('li');
//   li.textContent = ingredient;
//   li.classList.add('item');
//   list.append(li);
// }

const listContent = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");

list.insertAdjacentHTML("beforeend", listContent);