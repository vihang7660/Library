let button = document.querySelector('button')
let title = document.querySelector('#title')
let author = document.querySelector('#author')
let pages = document.querySelector('#pages')
let table = document.querySelector('table')

let storedBooks = []

function Book(bookName, bookAuthor, bookPages) {
    this.bookName = bookName
    this.bookAuthor = bookAuthor
    this.bookPages = bookPages
    this.info = [bookName, bookAuthor, bookPages]
}

function booksInLibrary() {
    let book1 = new Book('American Kingpin', 'Nick Bilton', 180)
    let book2 = new Book('Shoe Dog', 'Phil Knight', 275)
    let book3 = new Book('With The Old Breed', 'Eugene Sledge', 310)

    storedBooks.push(book1)
    storedBooks.push(book2)
    storedBooks.push(book3)
}

function bookLog() {
    for (let i = 0; i < storedBooks.length; i++) {
        let rows = document.createElement('tr')
        table.appendChild(rows)

        for (let m = 0; m <= 2; m++) {
            let cell = document.createElement('td')
            cell.textContent = storedBooks[i]['info'][m]
            rows.appendChild(cell)
        }
        

    }

}

booksInLibrary()
bookLog()


console.log(storedBooks)