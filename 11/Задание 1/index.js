const result = document.querySelector('#result')
result.style.display = "none"

document.querySelector("#form").addEventListener("submit", (e) => {
    e.preventDefault(); // Отменяем стандартную отправку формы

    // Получаем все поля формы
    let username = document.querySelector("#name").value.trim();
    let email = document.querySelector("#email").value.trim();
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let satisfied = document.querySelector("#satisfied").value;
    let interests = Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(el => el.value);
    let comments = document.querySelector("#comment").value.trim();

    result.style.display = "block"
    document.querySelector("#rname").textContent = username
    document.querySelector("#remail").textContent = email
    document.querySelector("#rgender").textContent = gender
    document.querySelector("#rsatisfied").textContent = satisfied
    document.querySelector("#rinterests").textContent = interests.join(", ")
    document.querySelector("#rcomments").textContent = comments
})