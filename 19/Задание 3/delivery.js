export class Delivery {
  constructor(name, address, distance, status = "delivery") {
    this._name = name;
    this._address = address;
    this._distance = distance;
    this._status = status;
  }

  // Геттеры и сеттеры
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName.trim();
  }

  get address() {
    return this._address;
  }

  set address(newAddress) {
    this._address = newAddress.trim();
  }

  get distance() {
    return this._distance;
  }

  set distance(newDistance) {
    this._distance = newDistance > 0 ? newDistance : 0;
  }

  get status() {
    return this._status;
  }

  set status(newStatus) {
    const validStatuses = ["delivery", "delivered", "canceled"];
    if (validStatuses.includes(newStatus)) {
      this._status = newStatus;
    } else {
      console.error("Недопустимый статус");
    }
  }

  createCard() {
    const card = document.createElement("div");
    card.classList.add("card", this._status);

    // Содержимое карточки
    card.innerHTML = `
      <p><strong>Имя:</strong> ${this.name}</p>
      <p><strong>Адрес:</strong> ${this.address}</p>
      <p><strong>Расстояние:</strong> ${this.distance} км</p>
      <button class="edit-button">Изменить</button>
    `;

    return card;
  }
}
