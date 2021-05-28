const menuBurger = document.querySelector('.menu-button');
const menu = document.querySelector('.navbar');
const closeButton = document.querySelector('.close-button');
console.log(menuBurger);

const toggleMenu = () => {
    menu.classList.toggle('is-open')
}

menuBurger.addEventListener('click', toggleMenu)

closeButton.addEventListener('click', toggleMenu)