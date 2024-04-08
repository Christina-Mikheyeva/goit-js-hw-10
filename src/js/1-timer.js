// Підключення бібліотек
import flatpickr from "flatpickr";
import iziToast from "izitoast";
import "flatpickr/dist/flatpickr.min.css";
import "izitoast/dist/css/iziToast.min.css";

// Змінні
let userSelectedDate = null;
let intervalId = null;

// Функція для форматування часу
function addLeadingZero(value) {
  return value.toString().padStart(2, "0");
}

// Функція для перетворення мілісекунд у час
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// Ініціалізація flatpickr
flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (!selectedDates.length) return;

    const chosenDate = selectedDates[0];
    const now = new Date();

    if (chosenDate < now) {
      iziToast.error({
        title: "Error",
        message: "Please choose a date in the future",
      });
      disableStartButton();
      return;
    }

    userSelectedDate = chosenDate;
    enableStartButton();
  },
});

// Функція для запуску таймера
function startTimer() {
  const startTime = new Date();
  const endTime = userSelectedDate;

  intervalId = setInterval(() => {
    const msLeft = endTime - new Date();
    const timeLeft = convertMs(msLeft);

    if (msLeft <= 0) {
      clearInterval(intervalId);
      stopTimer();
      return;
    }

    updateTimer(timeLeft);
  }, 1000);
}

// Функція для зупинки таймера
function stopTimer() {
  disableStartButton();
  updateTimer({ days: 0, hours: 0, minutes: 0, seconds: 0 });
}

// Функція для оновлення інтерфейсу таймера
function updateTimer({ days, hours, minutes, seconds }) {
  document.querySelector('[data-days]').textContent = addLeadingZero(days);
  document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
  document.querySelector('[data-minutes]').textContent = addLeadingZero(minutes);
  document.querySelector('[data-seconds]').textContent = addLeadingZero(seconds);
}

// Функція для активації кнопки Start
function enableStartButton() {
  document.querySelector('[data-start]').removeAttribute("disabled");
}

// Функція для деактивації кнопки Start
function disableStartButton() {
  document.querySelector('[data-start]').setAttribute
}


// Навішення подій

const startBtn = document.querySelector("button[data-start]");
startBtn.addEventListener("click", startTimer)