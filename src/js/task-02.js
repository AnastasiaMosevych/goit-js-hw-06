const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.getElementById('ingredients');
console.log(list);

for (const ingredient of ingredients) {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  list.append(li);
}

document.body.append(list);