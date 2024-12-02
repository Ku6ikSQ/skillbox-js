export class Delivery {
  constructor(name, address, distance) {
    this._name = name;
    this._address = address;
    this._distance = distance;
  }

  // Геттеры и сеттеры для имени
  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === "string" && newName.trim().length > 0) {
      this._name = newName;
    } else {
      console.error("Некорректное имя");
    }
  }

  // Геттеры и сеттеры для адреса
  get address() {
    return this._address;
  }

  set address(newAddress) {
    if (typeof newAddress === "string" && newAddress.trim().length > 0) {
      this._address = newAddress;
    } else {
      console.error("Некорректный адрес");
    }
  }

  // Геттеры и сеттеры для расстояния
  get distance() {
    return this._distance;
  }

  set distance(newDistance) {
    if (typeof newDistance === "number" && newDistance >= 0) {
      this._distance = newDistance;
    } else {
      console.error("Некорректное расстояние");
    }
  }

  createCard() {
    // Создание контейнера для карточки
    const card = document.createElement("div");
    card.classList.add("card");

    // Наполнение карточки содержимым
    card.innerHTML = `
      <p><strong>Имя:</strong> ${this.name}</p>
      <p><strong>Адрес:</strong> ${this.address}</p>
      <p><strong>Расстояние:</strong> ${this.distance} км</p>
    `;

    return card;
  }
}
