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

    const editButton = card.querySelector(".edit-button");
    editButton.addEventListener("click", () => {
      openEditModal(delivery, deliveries);
    });
  });
};

// Открытие модального окна
const openEditModal = (delivery, deliveries) => {
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");

  modalContent.innerHTML = `<span id="close-modal" class="modal-close">&times;</span>`;

  const form = delivery.createEditForm(() => {
    closeModal();
    renderDeliveries(deliveries);
  });

  modalContent.appendChild(form);
  modal.style.display = "block";

  document.getElementById("close-modal").addEventListener("click", closeModal);
};

const closeModal = () => {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
};

// Кнопка для расчёта расстояния
document.getElementById("calculate-distance").addEventListener("click", () => {
  const totalDistance = EditDelivery.getTotalDistance(deliveryArr);
  document.getElementById(
    "total-distance"
  ).textContent = `Общее расстояние: ${totalDistance} км`;
});

// Запуск
document.addEventListener("DOMContentLoaded", () => {
  renderDeliveries(deliveryArr);
});
