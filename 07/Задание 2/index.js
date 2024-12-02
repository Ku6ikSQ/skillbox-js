const btnGreen = document.querySelector('.btn-green')
const btnOrange = document.querySelector('.btn-orange')
const growthsEl = document.querySelector('#growths')

function createGrowthsElement(growth, number) {
    const el = document.createElement('li')
    const content = document.createElement('span')
    content.textContent = number + ') ' + growth
    el.appendChild(content)
    return el

}

const growths = [164, 157, 160, 143, 170]
for(let i = 0; i < growths.length; i++) {
    const el = createGrowthsElement(growths[i], i+1)
    growthsEl.appendChild(el)
}

btnGreen.addEventListener("click", () => {
    const growth = prompt("Введите название книги")
    if(!growth.length) {
        alert("Рост не введен!")
        return
    }
    growths.push(growth)
    const el = createGrowthsElement(growth, growths.length)
    growthsEl.appendChild(el)
})

btnOrange.addEventListener("click", () => {
    const minGrowth = prompt("Введите минимальный рост")
    const growthsElements = document.querySelector("#growths").querySelectorAll("li")
    for(let i = 0; i < growthsElements.length; i++) {
        const growth = growths[i];
        if(growth >= minGrowth) {
            growthsElements[i].style.display = 'block'
        } else {
            growthsElements[i].style.display = 'none'
        }
    }
})