import { EditDelivery } from "./edit-delivery.js";

const deliveryArr = [
  new EditDelivery("Ольга", "ул. Вымыслов, д. 12", 8, "delivery"),
  new EditDelivery("Дмитрий", "ул. Задачная, д. 7", 3, "delivered"),
  new EditDelivery("Оля", "ул. Ткачей, д. 43", 11, "canceled"),
];

// Рендер списка доставок
const renderDeliveries = (deliveries) => {
  const container = document.getElementById("delivery-container");
  container.innerHTML = "";

  deliveries.forEach((delivery) => {
    const card = delivery.createCard();
    container.appendChild(card);

    // Обработчик кнопки редактирования
    const editButton = card.querySelector(".edit-button");
    editButton.addEventListener("click", () => {
      openEditModal(delivery, deliveries);
    });
  });
};

// Открытие модального окна для редактирования
const openEditModal = (delivery, deliveries) => {
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");

  modalContent.innerHTML = `<span id="close-modal" class="modal-close">&times;</span>`;

  // Создание формы редактирования
  const form = delivery.createEditForm(() => {
    closeModal();
    renderDeliveries(deliveries);
  });

  modalContent.appendChild(form);
  modal.style.display = "block"; // Показываем модальное окно

  const closeModalButton = document.getElementById("close-modal");
  closeModalButton.addEventListener("click", closeModal);
};

// Закрытие модального окна
const closeModal = () => {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
};

// Кнопка для расчёта общего расстояния
document.getElementById("calculate-distance").addEventListener("click", () => {
  const totalDistance = deliveryArr.reduce(
    (sum, delivery) => sum + delivery.distance,
    0
  );
  document.getElementById(
    "total-distance"
  ).textContent = `Общее расстояние: ${totalDistance} км`;
});

// Обработчик закрытия модального окна
document.getElementById("close-modal").addEventListener("click", closeModal);

// Запуск
document.addEventListener("DOMContentLoaded", () => {
  renderDeliveries(deliveryArr);
});
