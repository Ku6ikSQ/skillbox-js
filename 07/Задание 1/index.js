const btnGreen = document.querySelector('.btn-green')
const btnBlue = document.querySelector('.btn-blue')
const booksEl = document.querySelector('#books')

function createBooksElement(bookName, number) {
    const el = document.createElement('li')
    const content = document.createElement('span')
    content.textContent = number + ') ' + bookName
    el.appendChild(content)
    return el

}

const books = ["Мастер и Маргарита", "Гарри Поттер", "За пропастью во ржи", "Властелин колец", "Дюна"]
for(let i = 0; i < books.length; i++) {
    const el = createBooksElement(books[i], i+1)
    booksEl.appendChild(el)
}

btnGreen.addEventListener("click", () => {
    const book = prompt("Введите название книги")
    if(!book.length) {
        alert("Название книги не введено!")
        return
    }
    books.push(book)
    const el = createBooksElement(book, books.length)
    booksEl.appendChild(el)
})

btnBlue.addEventListener("click", () => {
    const book = prompt("Введите название книги")
    const bookElements = document.querySelector("#books").querySelectorAll("li")
    let find = 0
    for(let i = 0; i < books.length; i++) {
        if(books[i] == book) {
            find = 1
            bookElements[i].classList.add('active')
        } else {
            bookElements[i].classList.remove('active')
        }
    }
    if(!find) {
        bookElements.forEach((el) => el.classList.remove('active'))
        alert("Книга не найдена")
    }
})