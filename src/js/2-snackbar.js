// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const delayInput = document.getElementById('delay-input');
const resultOptions = document.querySelectorAll('input[name="result"]');

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const delay = parseInt(delayInput.value, 10);
  const selectedResult = Array.from(resultOptions).find((option) => option.checked).value;

  const promise = new Promise((resolve, reject) => {
    if (selectedResult === 'success') {
      setTimeout(() => resolve(delay), delay);
    } else {
      setTimeout(() => reject(delay), delay);
    }
  });

  promise
    .then((delay) => {
      iziToast.success({
        title: '✅ Fulfilled!',
        message: `✅ Fulfilled promise in ${delay}ms`
,
        position: 'topRight',
      });
    })
    .catch((delay) => {
      iziToast.error({
        title: '❌ Rejected!',
       `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });
});
