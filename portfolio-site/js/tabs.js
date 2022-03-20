const tabButtons = document.querySelectorAll('.design-list__item');
const tabDescriptions = document.querySelectorAll('.design__descr');
const tabImages = document.querySelectorAll('.design-images');
const tabBlockImages = document.querySelectorAll('.design-block__img');
const tabTitles = document.querySelectorAll('.design__title');
const titleSite = document.querySelector('title');

titleSite.textContent = tabTitles[0].textContent;

const changeContent = (array, value) => { // ф-я замены контента по кнопке
    array.forEach((elem) => { 
        if (elem.dataset.tabsField === value) {
            elem.classList.remove('hidden');
        } else {
            elem.classList.add('hidden');
        }
    });
};

tabButtons.forEach((tabButton, index) => {
    tabButton.addEventListener('click', (e) => { 
        const dataValue = tabButton.dataset.tabsHandler;
        
        changeContent(tabBlockImages, dataValue);
        changeContent(tabDescriptions, dataValue); // замена описания
        changeContent(tabImages, dataValue); // замена изображений

        tabTitles.forEach((title, i) => {
            if (index === i) {
                title.classList.remove('hidden');
                titleSite.textContent = title.textContent;
            } else {
                title.classList.add('hidden');
                
            }
        });

        tabButtons.forEach((btn) => { // меняем активную кнопку
            if (btn === e.target) {
                btn.classList.add('design-list__item_active');
            } else {
                btn.classList.remove('design-list__item_active');
            }
        });
    });
});

