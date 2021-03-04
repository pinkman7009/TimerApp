class Timer {
  constructor(
    durationInput,
    startButton,
    pauseButton,
    alreadyClicked,
    callbacks
  ) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    this.alreadyClicked = alreadyClicked;

    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    this.startButton.addEventListener('click', this.start);

    this.pauseButton.addEventListener('click', this.pause);
  }

  start = () => {
    if (this.alreadyClicked === false) {
      if (this.onStart) {
        this.onStart(this.timeRemaining);
      }
    }
    if (this.alreadyClicked === false) {
      this.alreadyClicked = true;

      this.intervalID = setInterval(() => {
        this.tick();
      }, 20);
    }
  };

  pause = () => {
    this.alreadyClicked = false;
    clearInterval(this.intervalID);
  };

  tick = () => {
    if (this.timeRemaining <= 0) {
      if (this.onComplete) {
        this.alreadyClicked = false;
        this.onComplete();
      }
      this.pause();
    } else {
      this.timeRemaining = this.timeRemaining - 0.02;

      if (this.onTick) this.onTick(this.timeRemaining);
    }
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    durationInput.value = time.toFixed(2);
  }
}
