
// 4. Для кожного элемента li.item у списку ul#categories, 
// знайде і виведе в консоль текст заголовку елемента(тегу < h2 >) 
// і кількість елементів в категорії(усіх < li >, вкладених в нього).

const categories = document.querySelectorAll('.item');
console.log("Number of categories:", categories.length);

categories.forEach((category) => {
    console.log('Category:', category.querySelector('h2').textContent);
    console.log("Elements:", category.querySelector('ul').children.length);
});

