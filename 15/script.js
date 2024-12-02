function handleFormSubmit(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const genre = document.getElementById("genre").value;
  const releaseYear = document.getElementById("releaseYear").value;
  const isWatched = document.getElementById("isWatched").checked;

  const film = {
    title: title,
    genre: genre,
    releaseYear: releaseYear,
    isWatched: isWatched,
  };

  addFilm(film);
  document.getElementById("film-form").reset();
}

async function addFilm(film) {
  await fetch("https://sb-film.skillbox.cc/films", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      email: "ovikdevil@gmail.com",
    },
    body: JSON.stringify(film),
  });
  renderTable();
}

async function renderTable() {
  const filmsResponse = await fetch("https://sb-film.skillbox.cc/films", {
    headers: {
      email: "ovikdevil@gmail.com",
    },
  });
  const films = await filmsResponse.json();
  const filmTableBody = document.getElementById("film-tbody");

  // Clear table body first
  filmTableBody.innerHTML = "";

  // Then add new rows
  films.forEach((film, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${film.title}</td>
        <td>${film.genre}</td>
        <td>${film.releaseYear}</td>
        <td>${film.isWatched ? "Да" : "Нет"}</td>
        <td><button class="delete-btn" onclick="deleteFilm('${
          film.id
        }')">Удалить</button></td>
      `;
    filmTableBody.appendChild(row);
  });
}

document
  .getElementById("film-form")
  .addEventListener("submit", handleFormSubmit);

// Display films on load
renderTable();

async function applyFilters() {
  const title = document.getElementById("filter-title").value.toLowerCase();
  const genre = document.getElementById("filter-genre").value.toLowerCase();
  const year = document.getElementById("filter-year").value;
  const watched = document.getElementById("filter-watched").value;

  const filmsResponse = await fetch("https://sb-film.skillbox.cc/films", {
    headers: {
      email: "ovikdevil@gmail.com",
    },
  });
  const films = await filmsResponse.json();

  const filteredFilms = films.filter((film) => {
    return (
      (title === "" || film.title.toLowerCase().includes(title)) &&
      (genre === "" || film.genre.toLowerCase().includes(genre)) &&
      (year === "" || film.releaseYear == year) &&
      (watched === "" || film.isWatched.toString() === watched)
    );
  });
  renderFilms(filteredFilms);
}

document
  .getElementById("apply-filters")
  .addEventListener("click", applyFilters);

async function deleteFilm(id) {
  await fetch(`https://sb-film.skillbox.cc/films/${id}`, {
    method: "DELETE",
    headers: {
      email: "ovikdevil@gmail.com",
    },
  });
  renderTable();
}

function renderFilms(films) {
  const filmTableBody = document.getElementById("film-tbody");

  filmTableBody.innerHTML = "";
  films.forEach((film) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${film.title}</td>
        <td>${film.genre}</td>
        <td>${film.releaseYear}</td>
        <td>${film.isWatched ? "Да" : "Нет"}</td>
        <td><button class="delete-btn" onclick="deleteFilm('${
          film.id
        }')">Удалить</button></td>
      `;
    filmTableBody.appendChild(row);
  });
}

async function deleteAllFilms() {
  await fetch("https://sb-film.skillbox.cc/films", {
    method: "DELETE",
    headers: {
      email: "ovikdevil@gmail.com",
    },
  });
  renderTable();
}

document.getElementById("delete-all").addEventListener("click", deleteAllFilms);
