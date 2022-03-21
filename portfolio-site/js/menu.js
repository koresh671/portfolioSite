const burger = document.querySelector('.humburger-menu');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu-list__link');

burger.addEventListener('click', () => { // открыть меню для мобильной версии
    menu.classList.toggle('menu-active');
});

menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        menu.classList.toggle('menu-active');
    });
});

document.addEventListener('click', (e) => { // закрыть меню при клике в любое другое место
    if (!(e.target.closest('.menu') || e.target.closest('.humburger-menu'))) {
        menu.classList.toggle('menu-active');
    }
});
