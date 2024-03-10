import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const BOOK_KEY = 'bookDB'
var gFilterBy = { txt: '', minSpeed: 0 }
_createBooks()

export const bookService = {
    query,
    get,
    remove,
    save,
    getEmptyBook,
    // getNextBookId,
    // getFilterBy,
    // setFilterBy
}

function query() {
    return storageService.query(BOOK_KEY)
        .then(books => {
            // if (gFilterBy.txt) {
            //     const regex = new RegExp(gFilterBy.txt, 'i')
            //     books = books.filter(book => regex.test(book.vendor))
            // }
            // if (gFilterBy.minSpeed) {
            //     books = books.filter(book => book.maxSpeed >= gFilterBy.minSpeed)
            // }
            return books
        })
}

function get(bookId) {
    return storageService.get(BOOK_KEY, bookId)
}

function remove(bookId) {
    return storageService.remove(BOOK_KEY, bookId)
}

function save(book) {
    if (book.id) {
        return storageService.put(BOOK_KEY, book)
    } else {
        return storageService.post(BOOK_KEY, book)
    }
}

function getEmptyBook(title = '', amount = 0) {
    // return { id: '', title, listPrice }
    return {
        id: '',
        title,
        description: '',
        thumbnail: `http://coding-academy.org/books-photos/20.jpg`,
        listPrice: {
            amount,
            currencyCode: "EUR",
            isOnSale: false
        }

    }
}

// function getFilterBy() {
//     return {...gFilterBy}
// }

// function setFilterBy(filterBy = {}) {
//      if (filterBy.txt !== undefined) gFilterBy.txt = filterBy.txt
//     if (filterBy.minSpeed !== undefined) gFilterBy.minSpeed = filterBy.minSpeed
//     return gFilterBy
// }

// function getNextBookId(bookId) {
//     return storageService.query(BOOK_KEY)
//         .then(books => {
//             var idx = books.findIndex(book => book.id === bookId)
//             if (idx === books.length - 1) idx = -1
//             return books[idx + 1].id
//         })
// }


function _createBooks() {
    let books = utilService.loadFromStorage(BOOK_KEY)
    if (!books || !books.length) {
        books = []
        books.push(_createBook('A man named Oba', 300))
        books.push(_createBook('Trail of Wonders', 200))
        books.push(_createBook('Eden', 100))
        books.push(_createBook('Looking for Alaska', 90))
        utilService.saveToStorage(BOOK_KEY, books)
    }
}

function _createBook(title, listPrice = 250) {
    const book = getEmptyBook(title, listPrice)
    book.id = utilService.makeId()
    return book
}

// function _createListPrise(amount = 109, currencyCode = "EUR", isOnSale = false) {
//     return {
//         amount,
//         currencyCode,
//         isOnSale
//     }

// }

// {
//     "id": "OXeMG8wNskc",
//     "title": "metus hendrerit",
//     "description": "placerat nisi sodales suscipit tellus",
//     "thumbnail": “http://coding-academy.org/books-photos/
//    20.jpg",
//     "listPrice": {
//     "amount": 109,
//     "currencyCode": "EUR",
//     "isOnSale": false
//     }
//     }