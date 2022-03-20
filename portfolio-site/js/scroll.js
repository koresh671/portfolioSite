const links = document.querySelectorAll('.menu-list__link');
const btn = document.querySelector('.main__button');
const btnMain = document.querySelector('.main__scroll');

const allLinks = [...links, btn, btnMain]; 

allLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const id = link.getAttribute('href').substring(1);
        const section = document.getElementById(id);
        
        if (section) {
            seamless.scrollIntoView(section, { // метод из библиотеки для скролла у кроссбраузерных платформ
                behavior: "smooth",
                block: "center",
                inline: "center",
            });
        //     section.scrollIntoView({ // scroll до секции
        //         block: 'start', // start - верх экрана секции
        //         behavior: 'smooth' // smooth - плавный скролл
        //     });
        }
    });
});