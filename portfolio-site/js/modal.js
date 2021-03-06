const modalButtons = document.querySelectorAll('.more');
const modal = document.querySelector('.modal');
const overlay = modal.querySelector('.overlay');
const closeButton = modal.querySelector('.modal__close');

modalButtons.forEach((btn) => {
    btn.addEventListener('click', () => { // открытие модального окна
        modal.classList.toggle('hidden');
    });
});

overlay.addEventListener('click', () => {
    modal.classList.toggle('hidden');
});

closeButton.addEventListener('click', () => {
    modal.classList.toggle('hidden');
});