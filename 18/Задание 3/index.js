// Мок-функция для имитации запроса с задержкой
function fetchImages(delay, urls) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(urls), delay);
  });
}

// Генерация случайного времени в диапазоне 2000–5000 мс
function getRandomDelay() {
  return Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;
}

function fetchImagesSet1() {
  const urls = [
    "https://as1.ftcdn.net/v2/jpg/02/36/99/22/1000_F_236992283_sNOxCVQeFLd5pdqaKGh8DRGMZy7P4XKm.jpg",
    "https://as2.ftcdn.net/v2/jpg/03/03/62/45/1000_F_303624505_u0bFT1Rnoj8CMUSs8wMCwoKlnWlh5Jiq.jpg",
    "https://as2.ftcdn.net/v2/jpg/02/66/72/41/1000_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg",
  ];
  return fetchImages(0, urls);
}

function fetchImagesSet2() {
  const urls = [
    "https://as1.ftcdn.net/v2/jpg/02/73/16/24/1000_F_273162497_ShAAB1TH0vhM4UUWbhBuao8jtGBDubwD.jpg",
    "https://as1.ftcdn.net/v2/jpg/02/70/25/48/1000_F_270254841_otSDX3fPBgcbCiUdir82QjgyF8XSQwD5.jpg",
    "https://as1.ftcdn.net/v2/jpg/02/94/41/12/1000_F_294411202_GAGqtdy9EjlcGqwoQd2noZ5HiZaf7hQE.jpg",
  ];
  return fetchImages(0, urls);
}

// Функция для создания прогресс-бара
function createProgressBar(container, timeInSeconds) {
  const progressBarContainer = document.createElement("div");
  progressBarContainer.classList.add("progress-container");

  const progressBar = document.createElement("div");
  progressBar.classList.add("progress-bar");
  progressBarContainer.appendChild(progressBar);

  const timer = document.createElement("div");
  timer.textContent = "0 seconds";

  container.appendChild(progressBarContainer);
  container.appendChild(timer);

  progressBar.style.transitionDuration = `${timeInSeconds}s`;
  progressBar.style.transform = "scaleX(0)";

  setTimeout(() => {
    progressBar.style.transform = "scaleX(1)";
  }, 10);

  let secondsPassed = 0;
  const interval = setInterval(() => {
    secondsPassed++;
    timer.textContent = `${secondsPassed} seconds`;

    if (secondsPassed >= timeInSeconds) {
      clearInterval(interval); // Прекращаем обновление времени
    }
  }, 1000);

  // Возвращаем Promise, который завершится после того, как прогресс-бар будет завершен
  return new Promise((resolve) => {
    setTimeout(resolve, timeInSeconds * 1000); // Ждем окончания анимации
  });
}

// Функция для отображения изображений
function displayImages(urls, container) {
  const row = document.createElement("div");
  row.classList.add("row");

  urls.forEach((url) => {
    const img = document.createElement("img");
    img.src = url;
    row.appendChild(img);
  });

  container.appendChild(row);
}

// Основная логика
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  // Создаём первый прогресс-бар, и только после завершения его анимации загружаем и показываем изображения
  const delay1 = getRandomDelay() / 1000; // Получаем случайную задержку для первого набора
  createProgressBar(root, delay1) // Создаём первый прогресс-бар
    .then(() => fetchImagesSet1()) // После завершения прогресс-бара загружаем первый набор изображений
    .then((urls) => {
      displayImages(urls, root); // Выводим первый ряд изображений сразу после завершения прогресс-бара

      const delay2 = getRandomDelay() / 1000; // Получаем задержку для второго набора
      return createProgressBar(root, delay2); // После первого ряда создаём второй прогресс-бар
    })
    .then(() => fetchImagesSet2()) // После второго прогресс-бара загружаем второй набор изображений
    .then((urls) => {
      displayImages(urls, root); // Выводим второй ряд изображений сразу после второго прогресс-бара
    })
    .catch((error) => console.error("Error:", error));
});
