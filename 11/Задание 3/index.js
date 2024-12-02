const cardTextInput = document.getElementById("cardText");
const colorSelect = document.getElementById("colorSelect");
const card = document.getElementById("card");

// Обновляем текст на карте при вводе
cardTextInput.addEventListener("input", () => {
  card.textContent = cardTextInput.value || "Пример карты";
});

// Меняем стиль поля при получении фокуса
cardTextInput.addEventListener("focus", () => {
  cardTextInput.style.borderColor = "#007bff";
  cardTextInput.style.backgroundColor = "#f0f8ff";
});

// Возвращаем стиль поля при потере фокуса
cardTextInput.addEventListener("blur", () => {
  cardTextInput.style.borderColor = "#ccc";
  cardTextInput.style.backgroundColor = "white";
});

// Меняем цвет карты при выборе цвета
colorSelect.addEventListener("change", () => {
  card.style.backgroundColor = colorSelect.value;
});
