const weddingDay = new Date("2021-02-20 23:30") - new Date();
let textDay = document.querySelector('.cd-day');
let textHour = document.querySelector('.cd-hour');
let textMin = document.querySelector('.cd-min');


const countdown = () => {
let daysLeft = Math.floor(weddingDay / (1000 * 60 * 60 * 24));
let hoursLeft = Math.floor((weddingDay / (1000 * 60 * 60)) % 24);
let minutesLeft = Math.floor((weddingDay / 1000) / 60 % 60);

let daysStr = daysLeft + 'd';
let hourStr = hoursLeft + 'h';
let minStr = minutesLeft + 'm';

textDay.textContent = daysStr;
textHour.textContent = hourStr;
textMin.textContent = minStr;


}

countdown();
setInterval(countdown, 60000);