let submitButton = document.querySelector('.submit')
let title = document.querySelector('#title')
let author = document.querySelector('#author')
let pages = document.querySelector('#pages')
let table = document.querySelector('table')
let form = document.querySelector('.form')
let addButton = document.querySelector('.add')
let storedBooks = []
let newBooks = []
let x = 6

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
        let toggleCell = document.createElement('td')
        rows.appendChild(toggleCell)

        let label = document.createElement('label')
        label.setAttribute('for', `${i}`)
        label.textContent = 'Read'
        toggleCell.appendChild(label)
        let toggle = document.createElement('input')
        toggle.setAttribute('type', 'checkbox')
        toggle.setAttribute('name', 'readOrNot')
        toggle.setAttribute('id', `${i}`)
        toggleCell.appendChild(toggle)

        let deleteCell = document.createElement('div')
        let picture = document.createElement('img')
        rows.appendChild(deleteCell)
        deleteCell.appendChild(picture)
        picture.src = './icons/delete.png'

        function removeBook() {
            table.removeChild(rows)
        }
        deleteCell.addEventListener('click', removeBook)
    }

}

booksInLibrary()
bookLog()


function newBooksInLibrary() {
    if (title.value == '' || author.value == '' || pages.value == '') {
        return false
    }
    else {
        let latestBook = new Book(title.value, author.value, pages.value)
        newBooks.push(latestBook)
        console.log(newBooks)
        return true
    }


}

function newBookLog() {
    if (newBooksInLibrary() == true) {
        let rows = document.createElement('tr')
        table.appendChild(rows)
        for (let i = 0; i <= 2; i++) {
            let cell = document.createElement('td')
            cell.textContent = newBooks[newBooks.length - 1]['info'][i]
            rows.appendChild(cell)
        }
        let toggleCell = document.createElement('td')
        rows.appendChild(toggleCell)

        let label = document.createElement('label')
        label.setAttribute('for', `${x}`)
        label.textContent = 'Read'
        toggleCell.appendChild(label)
        let toggle = document.createElement('input')
        toggle.setAttribute('type', 'checkbox')
        toggle.setAttribute('name', 'readOrNot')
        toggle.setAttribute('id', `${x}`)
        toggleCell.appendChild(toggle)
        x = x + 1


        let deleteCell = document.createElement('div')
        let picture = document.createElement('img')
        rows.appendChild(deleteCell)
        deleteCell.appendChild(picture)
        picture.src = './icons/delete.png'
    
        function removeNewBook() {
            table.removeChild(rows)
        }
        deleteCell.addEventListener('click', removeNewBook)
    }


}

function hideForm() {
    form.style.display = 'none'
}

submitButton.addEventListener('click', newBookLog)
submitButton.addEventListener('click', hideForm)


function showForm() {
    form.style.display = 'block'
}

addButton.addEventListener('click', showForm)

