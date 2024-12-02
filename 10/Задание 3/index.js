const ascBtn = document.querySelector("#asc")
const descBtn = document.querySelector("#desc")
const list = document.querySelector("#list")

function pricesRender(prices) {
    list.innerHTML = ''
    for(const price of prices) {
        const el = document.createElement('li')
        el.textContent = price
        list.appendChild(el)
    }
}
let prices = [100, 500, 250, 750, 300]
pricesRender(prices)

ascBtn.addEventListener("click", () => {
    prices = prices.sort((a, b) => a - b)
    pricesRender(prices)
})

descBtn.addEventListener("click", () => {
    prices = prices.sort((a, b) => b - a)
    pricesRender(prices)
})