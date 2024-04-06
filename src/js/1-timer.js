
// Library

import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (!selectedDates.length) return;
    const userSelectedDate = selectedDates[0];

    if (userSelectedDate < new Date()) {
      alert("Please choose a date in the future");
      return;
    }
      
    startBtn.disabled = false;
  },
};

flatpickr("#datetime-picker", options);
iziToast.show()

// Timer

const startBtn = document.querySelector("button[data-start]");
startBtn.addEventListener("click", makeTimerWork)
function makeTimerWork() { 
   const timer = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const userInputDate = date.selectedDates[0];
      const currentTime = new Date();
      const timeOff = userInputDate - currentTime;
      const time = convertMs(timeOff);
      updateInterfaceTimer(time);
      if (
        time.days === 0 &&
        time.hours === 0 &&
        time.minutes === 0 &&
        time.seconds === 0
      ) {
        this.stop();
      }
    }, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    refs.btn.disabled = true;
  },
}; 
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}




