function progress(timeInSeconds) {
  const progressBar = document.getElementById("progress-bar");
  const timer = document.getElementById("timer");

  // Минимальное время - 2 секунды
  const time = Math.max(timeInSeconds, 2);

  // Сбрасываем начальные значения
  progressBar.style.transitionDuration = `${time}s`;
  progressBar.style.transform = "scaleX(0)";
  timer.textContent = "0 seconds";

  // Запускаем анимацию прогресс-бара
  setTimeout(() => {
    progressBar.style.transform = "scaleX(1)";
  }, 10);

  let secondsPassed = 0;
  const interval = setInterval(() => {
    secondsPassed++;
    timer.textContent = `${secondsPassed} seconds`;

    if (secondsPassed >= time) {
      clearInterval(interval);
    }
  }, 1000);
}

progress(5);
