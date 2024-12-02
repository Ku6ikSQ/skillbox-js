function validateInputs(name, weight, distance) {
  let isValid = true;

  // Валидация названия
  if (!name || name.length < 2) {
    document.getElementById("nameError").textContent =
      "Название должно содержать минимум 2 символа";
    isValid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Валидация веса
  if (weight <= 0) {
    document.getElementById("weightError").textContent =
      "Вес должен быть больше 0";
    isValid = false;
  } else {
    document.getElementById("weightError").textContent = "";
  }

  // Валидация расстояния
  if (distance <= 0) {
    document.getElementById("distanceError").textContent =
      "Расстояние должно быть больше 0";
    isValid = false;
  } else {
    document.getElementById("distanceError").textContent = "";
  }

  return isValid;
}

function addProduct() {
  // Получаем значения из полей ввода
  const name = document.getElementById("productName").value.trim();
  const weight = parseFloat(document.getElementById("productWeight").value);
  const distance = parseInt(document.getElementById("deliveryDistance").value);

  // Проверяем корректность данных
  if (!validateInputs(name, weight, distance)) {
    return;
  }

  // Рассчитываем стоимость доставки
  const deliveryCost = (weight * distance) / 10;

  // Добавляем товар в таблицу
  const table = document.getElementById("productList");
  const row = table.insertRow();
  row.innerHTML = `
        <td>${name}</td>
        <td>${weight.toFixed(0)}</td>
        <td>${distance}</td>
        <td>${deliveryCost.toFixed(2)} ₽</td>
    `;

  // Очищаем форму
  document.getElementById("product-form").reset();
}

document.getElementById("product-form").addEventListener("submit", (e) => {
  e.preventDefault();
  addProduct();
});
