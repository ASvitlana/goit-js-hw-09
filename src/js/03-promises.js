import Notiflix from 'notiflix';

const delay = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');
const btnCreatePromise = document.querySelector('button[type="submit"]');

btnCreatePromise.addEventListener('click', e => {
    e.preventDefault();

    let firstDelay = Number(delay.value);
    let delayStep = Number(step.value);
    for (let i = 0; i < amount.value; i += 1) {
      createPromise(1 + i, firstDelay + i * delayStep)
        .then(onSusccess)
        .catch(onError);
    }
  });

  const onSusccess = ({ position, delay }) => {
    Notiflix.Notify.success(
      `✅ Fulfilled promise ${position} in ${delay}ms`
    );
  };
  
  const onError = ({ position, delay }) => {
    Notiflix.Notify.failure(
      `❌ Rejected promise ${position} in ${delay}ms`
    );
  };


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  }); 
}