import { getEntries, saveEntries } from "./storage.js";
import { showLoader, hideLoader } from "./loader.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("add-entry-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    showLoader();

    const name = document.getElementById("name").value.trim();
    const shelf = document.getElementById("shelf").value.trim();
    const weight = parseFloat(document.getElementById("weight").value.trim());
    const date = document.getElementById("date").value;

    if (!name || !shelf || isNaN(weight) || !date) {
      alert("Заполните все поля корректно!");
      hideLoader();
      return;
    }

    const entries = getEntries();
    entries.push({ name, shelf, weight, date });
    saveEntries(entries);

    hideLoader();
    window.location.href = "./warehouse.html";
  });
});
