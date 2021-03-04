const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const alreadyClicked = false;
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
let x = parseFloat(durationInput.value);
circle.setAttribute('stroke-dasharray', perimeter);

let perimeterLeft = 0;
let duration;

const timer = new Timer(
  durationInput,
  startButton,
  pauseButton,
  alreadyClicked,
  {
    onStart(totalDuration) {
      duration = totalDuration;
    },

    onTick(timeRemaining) {
      circle.setAttribute(
        'stroke-dashoffset',
        (perimeter * timeRemaining) / duration - perimeter
      );
    },
    onComplete() {
      console.log('Timer has stopped');
    },
  }
);
