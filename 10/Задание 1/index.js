const bigItem = document.querySelector('#big-item')

document.querySelectorAll(".list > div > img").forEach((item) => {
    item.addEventListener("click", () => {
        bigItem.setAttribute('src', item.getAttribute('src'))
    })
})