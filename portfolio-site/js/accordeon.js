const accordeon = document.querySelector('.feature-list');
const accordeonButtons = document.querySelectorAll('.feature__link');

accordeonButtons.forEach((button) => { // открытие списков и закрытие списков
    button.addEventListener('click', () => {
        // accordeonButtons.forEach((btn) => { // открыт один - закрыты другие
        //     btn.classList.remove('feature__link_active');
        //     btn.nextElementSibling.classList.add('hidden');
        // });

        button.classList.toggle('feature__link_active');
        button.nextElementSibling.classList.toggle('hidden');
    });
});