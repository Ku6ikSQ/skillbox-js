const promocodeObj = {
  promocode: "PROM50",
  gift: "Скидка 50%",
};

// Функция для получения значения из cookie
function getCookie() {
  return document.cookie.split("; ").reduce((acc, item) => {
    const [name, value] = item.split("=");
    acc[name] = value;
    return acc;
  }, {});
}

// Функция для установки cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

// Проверка и активация промокода
function checkPromo() {
  const input = document.getElementById("promoInput").value.trim();
  const message = document.getElementById("promoMessage");

  if (input === promocodeObj.promocode) {
    // Если промокод верный
    message.textContent = `Активирован! ${promocodeObj.gift}`;
    setCookie("promoCode", input, 30); // Сохранение промокода в cookie на 30 дней
    promoInput.classList.add("activated");
  } else {
    // Если промокод неверный
    message.textContent = "";
    document.getElementById("promoInput").classList.remove("activated");
  }
}

// Проверка на наличие промокода в cookie при загрузке страницы
window.onload = function () {
  const cookies = getCookie();
  const promoInput = document.getElementById("promoInput");
  const message = document.getElementById("promoMessage");

  if (cookies.promoCode === promocodeObj.promocode) {
    promoInput.value = cookies.promoCode;
    message.textContent = `Активирован! ${promocodeObj.gift}`;
    promoInput.classList.add("activated");
  }
};

document.getElementById("activateBtn").addEventListener("click", checkPromo);
