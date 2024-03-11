const { useState, useEffect } = React
const { Link } = ReactRouterDOM

import { bookService } from "../services/book.service.js"
import { BookList } from "../cmps/BookList.jsx"
import { BookDetails } from "../cmps/BookDetails.jsx"
import { BookFilter } from "../cmps/BookFilter.jsx"


export function BookIndex() {
    const [books, setBooks] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())
    // const [userMsg, setUserMsg] = useState('')

    useEffect(() => {
        loadBook()
    }, [filterBy])

    function onSetFilter(fieldsToUpdate) {
        setFilterBy(prevFilter => ({ ...prevFilter, ...fieldsToUpdate }))
    }

    function loadBook() {
        bookService.query(filterBy)
            .then((books) => {
                setBooks(books)
            })
    }

    function onRemoveBook(bookId) {
        bookService.remove(bookId)
            .then(() => {
                setBooks((prevBook) => prevBook.filter(book => book.id !== bookId))
                // flashMsg(`Book removed successfully (${bookId})`)
            })
            .catch((err) => {
                console.log('Had issues removing book', err)
                // flashMsg(`Could not remove Book (${bookId})`)
            })
    }

    function onUpdateBook(bookToUpdate) {
        bookService.save(bookToUpdate)
        .then((savedBook) => {
            setBooks(prevBooks => prevBooks.map(book => book.id === savedBook.id ? savedBook : car))
            // showSuccessMsg(`Car updated successfully (${bookToUpdate.id})`)
            // flashMsg(`Car updated successfully (${bookToUpdate.id})`)
        })
        .catch(err => {
            console.log('Had issues with updating car', err)
            // flashMsg()
            // showErrorMsg(`Could not update car (${bookToUpdate.id})`)
        })
}

    

    function flashMsg(txt) {
        setUserMsg(txt)
        setTimeout(() => {
            setUserMsg('')
        }, 3000)
    }

    // console.log('cars from car index', cars)
    // console.log('selectedCar from car index', selectedCar)
    if (!books) return <div>loading...</div>
    return <section className="book-index">
        {
            <React.Fragment>
                <BookFilter
                    onSetFilter={onSetFilter}
                    filterBy={filterBy} />

                <Link to="/book/edit"><button>Add a book</button></Link>

                <BookList
                    books={books}
                    onRemoveBook={onRemoveBook}
                    onUpdateBook={onUpdateBook}
                    //  onUpdateCar={onSelectCar}
                    // onSelectBook={onSelectBook}
                />
            </React.Fragment>
        }

     

        {/* <UserMsg msg={userMsg} /> */}
    </section >
}

// return <section className="car-index">
//     <CarFilter
//         onSetFilter={onSetFilter}
//         filterBy={filterBy} />

//     <Link to="/car/edit"><button>Add a car</button></Link>
//     <CarList
//         cars={cars}
//         onRemoveCar={onRemoveCar}
//         onUpdateCar={onUpdateCar}
//     />

// </section >