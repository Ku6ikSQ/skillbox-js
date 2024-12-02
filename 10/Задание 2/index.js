const addBtn = document.querySelector('#add')
const removeBtn = document.querySelector('#remove')
const list = document.querySelector('#list')

const elems = []

addBtn.addEventListener("click", () => {
    const el = document.createElement("li")
    el.textContent = 'Новый элемент списка'
    list.appendChild(el)
    elems.push(el)
})

removeBtn.addEventListener("click", () => {
    if(elems.length <= 0)
        return
    list.removeChild(elems[elems.length-1]);
    elems.pop()
})