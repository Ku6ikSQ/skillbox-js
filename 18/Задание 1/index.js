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
  return fetchImages(getRandomDelay(), urls);
}

function fetchImagesSet2() {
  const urls = [
    "https://as1.ftcdn.net/v2/jpg/02/73/16/24/1000_F_273162497_ShAAB1TH0vhM4UUWbhBuao8jtGBDubwD.jpg",
    "https://as1.ftcdn.net/v2/jpg/02/70/25/48/1000_F_270254841_otSDX3fPBgcbCiUdir82QjgyF8XSQwD5.jpg",
    "https://as1.ftcdn.net/v2/jpg/02/94/41/12/1000_F_294411202_GAGqtdy9EjlcGqwoQd2noZ5HiZaf7hQE.jpg",
  ];
  return fetchImages(getRandomDelay(), urls);
}

// Функция для отображения изображений
function displayImages(urls, container) {
  const row = document.createElement("div");
  row.classList.add("container");

  urls.forEach((url) => {
    const item = document.createElement("div");
    const img = document.createElement("img");
    img.src = url;
    img.style.marginRight = "10px";
    item.appendChild(img);
    row.appendChild(item);
  });

  container.appendChild(row);
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  // Вызов обеих функций
  const promise1 = fetchImagesSet1();
  const promise2 = fetchImagesSet2();

  promise1
    .then((urls) => displayImages(urls, root))
    .catch((error) => console.error("Error in promise1:", error));

  promise2
    .then((urls) => displayImages(urls, root))
    .catch((error) => console.error("Error in promise2:", error));
});
