// Підключення бібліотеки
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// Функція для створення повідомлення
function createNotification(message, type, delay) {
  iziToast[type]({
    title: type === "success" ? "✅ Fulfilled" : "❌ Rejected",
    message: `Promise in ${delay}ms`,
  });
  return
}

// Опрацювання сабміту форми
const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const delay = parseInt(form.elements.delay.value);
  const state = form.elements.state.value;

  // Створення промісу
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfilled") {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  // Опрацювання результату промісу
  promise
    .then((delay) => {
      createNotification("Fulfilled", "success", delay);
    })
    .catch((delay) => {
      createNotification("Rejected", "error", delay);
    });
});
