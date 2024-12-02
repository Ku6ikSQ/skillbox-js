const form = document.getElementById("film-form");
const submitBtn = document.getElementById("submit-btn");
const updateBtn = document.getElementById("update-btn");
const cancelBtn = document.getElementById("cancel-btn");
const tbody = document.getElementById("film-tbody");
const sort = document.getElementById("sort");

function loadFilms() {
  const films = JSON.parse(localStorage.getItem("films")) || [];
  tbody.innerHTML = ""; // Очищаем таблицу перед загрузкой

  films.forEach((film, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${film.title}</td>
        <td>${film.genre}</td>
        <td>${film.releaseYear}</td>
        <td>${film.isWatched ? "Да" : "Нет"}</td>
        <td>
          <button class="edit-btn" data-index="${index}">Редактировать</button>
          <button class="delete-btn" data-index="${index}">Удалить</button>
        </td>
      `;
    tbody.appendChild(row);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadFilms();
});

tbody.addEventListener("click", (e) => {
  const films = JSON.parse(localStorage.getItem("films")) || [];
  if (e.target.classList.contains("delete-btn")) {
    const index = e.target.dataset.index;
    films.splice(index, 1);
    localStorage.setItem("films", JSON.stringify(films));
    loadFilms();
  }
});

tbody.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit-btn")) {
    const films = JSON.parse(localStorage.getItem("films")) || [];
    const index = e.target.dataset.index;
    const film = films[index];

    // Заполняем форму данными фильма
    document.getElementById("title").value = film.title;
    document.getElementById("genre").value = film.genre;
    document.getElementById("releaseYear").value = film.releaseYear;
    document.getElementById("isWatched").checked = film.isWatched;

    // Устанавливаем индекс редактируемого фильма
    form.dataset.editIndex = index;

    // Скрываем кнопку "Добавить", показываем кнопки "Обновить" и "Отменить редактирование"
    submitBtn.style.display = "none";
    cancelBtn.style.display = "inline-block";
    updateBtn.style.display = "inline-block";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value.trim();
  const genre = document.getElementById("genre").value.trim();
  const releaseYear = document.getElementById("releaseYear").value.trim();

  if (!title || !genre || !releaseYear) {
    alert("Все поля должны быть заполнены!");
    return;
  }

  const films = JSON.parse(localStorage.getItem("films")) || [];
  const newFilm = {
    title,
    genre,
    releaseYear,
    isWatched: document.getElementById("isWatched").checked,
  };

  films.push(newFilm);
  localStorage.setItem("films", JSON.stringify(films));

  resetForm();
  loadFilms();
});

sort.addEventListener("change", (e) => {
  const films = JSON.parse(localStorage.getItem("films")) || [];
  const sortBy = e.target.value;

  films.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return -1;
    if (a[sortBy] > b[sortBy]) return 1;
    return 0;
  });

  localStorage.setItem("films", JSON.stringify(films));
  loadFilms();
});

updateBtn.addEventListener("click", () => {
  const films = JSON.parse(localStorage.getItem("films")) || [];
  const editIndex = form.dataset.editIndex;

  // Создаём обновлённый объект фильма
  const updatedFilm = {
    title: document.getElementById("title").value.trim(),
    genre: document.getElementById("genre").value.trim(),
    releaseYear: document.getElementById("releaseYear").value.trim(),
    isWatched: document.getElementById("isWatched").checked,
  };

  // Обновляем массив фильмов
  films[editIndex] = updatedFilm;
  localStorage.setItem("films", JSON.stringify(films));

  // Сбрасываем форму и интерфейс
  resetForm();
  loadFilms();
});

cancelBtn.addEventListener("click", () => {
  resetForm();
});

function resetForm() {
  form.reset(); // Сбрасываем форму
  delete form.dataset.editIndex; // Убираем индекс редактируемого фильма

  // Скрываем кнопки "Обновить" и "Отменить редактирование", показываем "Добавить"
  submitBtn.style.display = "inline-block";
  updateBtn.style.display = "none";
  cancelBtn.style.display = "none";
}
