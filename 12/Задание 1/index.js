const giftArr = [
  {
    title: "Скидка 20% на первую покупку в нашем магазине!",
    icon: "./img/gift1.png",
  },
  {
    title: "Подарок при первой покупке в нашем магазине!",
    icon: "./img/gift2.png",
  },
  {
    title: "Подарок при первой покупке в нашем магазине!",
    icon: "./img/delivery.png",
  },
];

// Функция для выбора случайного подарка
function getRandomGift() {
  const randomIndex = Math.floor(Math.random() * giftArr.length);
  return giftArr[randomIndex];
}

// Функция для отображения попап-окна
function showGiftPopup() {
  const gift = getRandomGift();

  // Создаем элементы попапа
  const popup = document.createElement("div");
  popup.classList.add("popup");

  const icon = document.createElement("img");
  icon.src = gift.icon;
  icon.alt = "Иконка подарка";

  const title = document.createElement("h3");
  title.textContent = gift.title;

  const button = document.createElement("button");
  button.textContent = "Отлично!";
  button.addEventListener("click", () => {
    popup.remove(); // Удаляем попап при клике на кнопку
  });

  const textWrap = document.createElement("div");
  textWrap.appendChild(title);
  textWrap.appendChild(button);

  const iconWrap = document.createElement("div");
  iconWrap.appendChild(icon);

  popup.appendChild(iconWrap);
  popup.appendChild(textWrap);

  // Добавляем попап на страницу
  document.body.appendChild(popup);
}

// Показываем попап через 3 секунды после загрузки страницы
window.addEventListener("load", () => {
  setTimeout(showGiftPopup, 3000);
});
