import { getEntries, deleteEntry } from "./storage.js";
import { showLoader, hideLoader } from "./loader.js";

document.addEventListener("DOMContentLoaded", () => {
  showLoader();
  renderTable();
  hideLoader();

  const addButton = document.getElementById("add-button");
  addButton.addEventListener("click", () => {
    window.location.href = "./add_entry.html";
  });

  // Добавление событий сортировки на заголовки
  const headers = document.querySelectorAll("th.sortable");
  headers.forEach((header, index) => {
    header.addEventListener("click", () => {
      toggleSort(index);
    });
  });
});

let currentSort = {
  index: null,
  order: "asc", // or 'desc'
};

const renderTable = () => {
  const entries = getSortedEntries();
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";

  entries.forEach((entry, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${entry.name}</td>
      <td>${entry.shelf}</td>
      <td>${entry.weight}</td>
      <td>${entry.date}</td>
      <td><button class="delete-btn btn" data-index="${index}">Удалить</button></td>
    `;
    tableBody.appendChild(row);
  });

  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      deleteEntry(index);
      renderTable();
    });
  });
};

const getSortedEntries = () => {
  const entries = getEntries();
  if (currentSort.index === null) return entries;

  const keyMap = ["name", "shelf", "weight", "date"];
  const key = keyMap[currentSort.index];

  return entries.sort((a, b) => {
    const valueA = a[key];
    const valueB = b[key];

    if (typeof valueA === "number" && typeof valueB === "number") {
      return currentSort.order === "asc" ? valueA - valueB : valueB - valueA;
    }

    if (currentSort.order === "asc") {
      return valueA > valueB ? 1 : -1;
    } else {
      return valueA < valueB ? 1 : -1;
    }
  });
};

const toggleSort = (index) => {
  const headers = document.querySelectorAll("th.sortable");
  headers.forEach((header) =>
    header.classList.remove("sorted-asc", "sorted-desc")
  );

  if (currentSort.index === index) {
    currentSort.order = currentSort.order === "asc" ? "desc" : "asc";
  } else {
    currentSort.index = index;
    currentSort.order = "asc";
  }

  headers[index].classList.add(
    currentSort.order === "asc" ? "sorted-asc" : "sorted-desc"
  );

  renderTable();
};
