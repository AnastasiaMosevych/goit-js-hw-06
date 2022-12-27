// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, 
// збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, 
// а значення поля - значенням властивості.Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

// Alhorithm: 
// 1. Find login-form in DOM tree;
// 2. Find button login in DOM tree;
// 3. AddEventListener to login-form, event 'submit', callback function onSubmit.
// 4. onSubmit function includes preventDefault();
// 5. Add object called elements and put email and password (using property name) into it.
// 6. add to onSubmit function conditions to check if fields are filled out or empty. if (),
// 7. Remove form fields with reset.  

const form = document.querySelector('.login-form');
const loginBtn = document.querySelector('button');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();
    const {
    elements: { email, password }
    } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
    }
    
    console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
};

