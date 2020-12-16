var countDownDate = new Date("Feb 20, 2021 23:30").getTime();
updateCountdown(); // Run once when the site is loaded.
var timerFunction = setInterval(updateCountdown, 1000);

var latestRandomIndex = 0;
function updateCountdown() {
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Display the result in the element with id="timer"
  document.querySelector('.countdown').innerHTML = buildDateString(distance);

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(timerFunction);
    document.querySelector('.countdown').innerHTML =
      "Grattis teamet! Förhoppningsvis brinner det inte allt för mycket!";
  }
}

function buildDateString(distance) {
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return `${days}d ${hours}h ${minutes}m`;
}
