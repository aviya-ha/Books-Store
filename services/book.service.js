import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

import { demoBooks } from '../booksDemo.js'
// console.log('books:', books)

const BOOK_KEY = 'bookDB'
var gFilterBy 
_createBooks()

export const bookService = {
    query,
    get,
    remove,
    save,
    getEmptyBook,
    getNextBookId,
    getFilterBy,
    setFilterBy,
    getDefaultFilter
}

function query(filterBy = getDefaultFilter()) {
    return storageService.query(BOOK_KEY)
    .then(books => {
        if (filterBy.txt) {
            const regex = new RegExp(filterBy.txt, 'i')
            books = books.filter(book => regex.test(book.title))
        }
        if (filterBy.minPrice) {
            books = books.filter(book => book.listPrice.amount >= filterBy.minPrice)
        }
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
    return {
        id: '',
        title,
        subtitle: '',
        authors: [ "Barbara Cartland" ],
        publishedDate: utilService.getRandomIntInclusive(1980 , 2023),
        description: utilService.makeLorem(50),
        pageCount: utilService.getRandomIntInclusive(100 , 900),
        categories: [ "Computers", "Hack" ],
        thumbnail: "http://ca.org/books-photos/20.jpg",
        language: "en",
        listPrice: {
        amount,
        currencyCode: "EUR",
        isOnSale: false
        }
    }
}


function getDefaultFilter() {
    return { txt: '', minPrice: 50, desc: '' }
}

function getFilterBy() {
    return {...gFilterBy}
}

function setFilterBy(filterBy = {}) {
     if (filterBy.txt !== undefined) gFilterBy.txt = filterBy.txt
    if (filterBy.minPrice !== undefined) gFilterBy.minPrice = filterBy.minPrice
    return gFilterBy
}

function getNextBookId(bookId) {
    return storageService.query(BOOK_KEY)
        .then(books => {
            var idx = books.findIndex(book => book.id === bookId)
            if (idx === books.length - 1) idx = -1
            return books[idx + 1].id
        })
}


function _createBooks() {
    let books = utilService.loadFromStorage(BOOK_KEY)
    if (!books || !books.length) {
        books = booksDemo.demoBooks
        // books.push(_createBook('A man named Oba', 300))
        // books.push(_createBook('Trail of Wonders', 200))
        // books.push(_createBook('Eden', 100))
        // books.push(_createBook('Looking for Alaska', 90))
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

