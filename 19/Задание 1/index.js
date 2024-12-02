import { Delivery } from "./delivery.js";

const deliveryArr = [
  new Delivery("Ольга", "ул. Вымыслов, д. 12", 8),
  new Delivery("Дмитрий", "ул. Задачная, д. 7", 3),
  new Delivery("Оля", "ул. Ткачей, д. 43", 11),
];

// Рендер карточек на страницу
const renderDeliveries = (deliveries) => {
  const container = document.getElementById("delivery-container");

  deliveries.forEach((delivery) => {
    const card = delivery.createCard();
    container.appendChild(card);
  });
};

// Запуск рендера
document.addEventListener("DOMContentLoaded", () => {
  renderDeliveries(deliveryArr);
});
