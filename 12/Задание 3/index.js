const promocodeArr = [
  {
    promocode: "PROM10",
    gift: "Скидка 10%",
  },
  {
    promocode: "PROM50",
    gift: "Скидка 50%",
  },
  {
    promocode: "GIFT",
    gift: "Подарок в корзине",
  },
];

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

function containsPromo(promo) {
  return promocodeArr.find((p) => p.promocode === promo);
}

// Проверка и активация промокода
function checkPromo() {
  const input = document.getElementById("promoInput").value.trim();
  const message = document.getElementById("promoMessage");
  const findedPromo = containsPromo(input);
  if (findedPromo) {
    // Если промокод верный
    message.textContent = `Активирован! ${findedPromo.gift}`;
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
  const findedPromo = containsPromo(cookies.promoCode);

  if (findedPromo) {
    promoInput.value = cookies.promoCode;
    message.textContent = `Активирован! ${findedPromo.gift}`;
    promoInput.classList.add("activated");
  }
};

document.getElementById("activateBtn").addEventListener("click", checkPromo);
