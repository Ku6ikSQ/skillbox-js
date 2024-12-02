export const showLoader = () => {
  const loader = document.createElement("div");
  loader.id = "loader";
  loader.textContent = "Загрузка...";
  document.body.appendChild(loader);
};

export const hideLoader = () => {
  const loader = document.getElementById("loader");
  if (loader) loader.remove();
};
