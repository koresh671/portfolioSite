const timerBlock = document.querySelector('.timer__time');
const deadline = '31 march 2022';

let interval;

const updateClock = () => { // текущее время
    const date = new Date().getTime(); // в миллисекундах
    const dateDeadline = new Date(deadline).getTime();
    const timeRemaining = (dateDeadline - date) / 1000; // в секундах

    const days = Math.floor(timeRemaining / 60 / 60 / 24);
    const hours = Math.floor((timeRemaining / 60 / 60) % 24);
    const minutes = Math.floor((timeRemaining / 60) % 60); // вычитание часов и получение остатка минут
    const seconds = Math.floor(timeRemaining % 60); // вычитание минут и получение остатка секунл

    const fdays = days < 10 ? "0" + days : days;
    const fHours = hours < 10 ? "0" + hours : hours;
    const fMinutes = minutes < 10 ? "0" + minutes : minutes;
    const fSeconds = seconds < 10 ? "0" + seconds : seconds;

    timerBlock.textContent = `${fdays}д:${fHours}ч:${fMinutes}:${fSeconds}`; 

    if (timeRemaining <= 0) {
        clearInterval(interval); // чистим таймер
        timerBlock.textContent = `00:00:00`; 
    }
};

updateClock();

interval = setInterval(updateClock, 500); // 500мс для более слабых процов

