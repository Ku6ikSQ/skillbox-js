import { Delivery } from "./delivery.js";

export class EditDelivery extends Delivery {
  constructor(name, address, distance, status) {
    super(name, address, distance, status);
  }

  createEditForm(callback) {
    const form = document.createElement("form");
    form.classList.add("edit-form");

    // Поля формы
    form.innerHTML = `
        <input placeholder="Имя" type="text" name="name" value="${this.name}" />
        <input placeholder="Адрес" type="text" name="address" value="${
          this.address
        }" />
        <input placeholder="Расстояние" type="number" name="distance" value="${
          this.distance
        }" />
        <select placeholder="Статус" name="status">
          <option value="delivery" ${
            this.status === "delivery" ? "selected" : ""
          }>Доставляется</option>
          <option value="delivered" ${
            this.status === "delivered" ? "selected" : ""
          }>Доставлен</option>
          <option value="canceled" ${
            this.status === "canceled" ? "selected" : ""
          }>Отменён</option>
        </select>
      <button type="submit" class="btn btn-short">Сохранить</button>
    `;

    // Обработчик сохранения
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      this.name = formData.get("name");
      this.address = formData.get("address");
      this.distance = Number(formData.get("distance"));
      this.status = formData.get("status");
      callback();
    });

    return form;
  }
}
