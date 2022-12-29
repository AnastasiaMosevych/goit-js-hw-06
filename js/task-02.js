const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.getElementById('ingredients');

const listContent = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");

list.insertAdjacentHTML("beforeend", listContent);