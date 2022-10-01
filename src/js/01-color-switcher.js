console.log(896)

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let timerId = null;
stopButton.disabled = true;

startButton.addEventListener('click', startChangingColor);
stopButton.addEventListener('click', stopChangingColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function startChangingColor() {
    startButton.disabled = true;
    stopButton.disabled = false;
    
    timerId = setInterval(() => {
        document.body.style.background = getRandomHexColor();
    }, 1000);
};

function stopChangingColor() {
    clearInterval(timerId);
    startButton.disabled = false;
    stopButton.disabled = true;
};
