const countDownDate = new Date("Jul 03, 2021 23:30").getTime();
updateCountdown(); // Run once when the site is loaded.
var timerFunction = setInterval(updateCountdown, 1000);

function buildDateString(distance) {
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return `
    <span class="countdown">${days}d</span>
    <span class="countdown">${hours}h</span>
    <span class="countdown">${minutes}m</span>
  `;
}

function updateCountdown() {
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Display the result in the element with id="timer"
  document.querySelector('.counter').innerHTML = buildDateString(distance);

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(timerFunction);
    document.querySelector('.countdown').innerHTML =
      "¡Felicidades a los novios!";
  }
}


const burguer = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const closeMenu = `<svg class="w-12 h-12 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>`;
const openMenu = `<svg class="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"> </path> </svg>`;
const navItem = document.querySelectorAll('.nav-item');
const nav = document.querySelector('nav');

burguer.addEventListener('click', () => {
    if(menu.classList.contains('hidden')) {
        menu.classList.remove('hidden'); 
        burguer.innerHTML = closeMenu;
        nav.classList.add('bg-indigo-100')
    } else {
        menu.classList.add('hidden');
        burguer.innerHTML = (openMenu);
        nav.classList.remove('bg-indigo-100')
    }
});

for (const item of navItem) {
  item.addEventListener('click', () => {
  if(menu.classList.contains('hidden')) {
      menu.classList.remove('hidden'); 
      burguer.innerHTML = closeMenu;
      nav.classList.add('bg-indigo-100')
  } else {
      menu.classList.add('hidden');
      burguer.innerHTML = (openMenu);
      nav.classList.remove('bg-indigo-100')
  }
});
}