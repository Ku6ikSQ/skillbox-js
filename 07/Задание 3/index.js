const btnGreen = document.querySelector('.btn-green')
const productsEl = document.querySelector('#products')

let products = ["Арбуз", "Книга", "Кофе", "Макароны", "Сахар", "Яблоки"]
productsRender(products)

function createProductEl(productName, number) {
    const el = document.createElement('li')
    const content = document.createElement('span')
    el.appendChild(content)
    content.textContent = number + ') ' + productName
    return el
}

function productsAdd(product) {
    const newProducts = []
    let i = 0;
    while(product > products[i]) {
        newProducts.push(products[i])
        i++
    }
    newProducts.push(product)
    for(; i < products.length; i++)
        newProducts.push(products[i])
    return newProducts
}

function productsRender(products) {
    productsEl.innerHTML = "";
    for(let i = 0; i < products.length; i++) {
        const el = createProductEl(products[i], i+1)
        productsEl.appendChild(el);
    }
}

btnGreen.addEventListener("click", () => {
    const newProduct = prompt("Введите название товара")
    if(!newProduct.length) {
        alert("Название товара не введено!")
        return
    }
    products = productsAdd(newProduct)
    productsRender(products)
})