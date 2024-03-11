const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouter
const { Link } = ReactRouterDOM

import { LongTxt } from "../cmps/LongTxt.jsx";
import { bookService } from "../services/book.service.js";


export function BookDetails() {
    const [isLoading, setIsLoading] = useState(true)
    const [book, setBook] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadBook()
    }, [params.bookId])

    function loadBook() {
        setIsLoading(true)
        bookService.get(params.bookId)
            .then(book => setBook(book))
            .catch(err => {
                console.log('Had issues loading book', err)
                navigate('/book')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    function getReadingType() {
        if (book.pageCount > 500) return 'Serious Reading'
        else if (book.pageCount > 200) return 'Descent Reading'
        else return 'Light Reading'
    }

    function getPublishedDate() {
        const thisYear = new Date().getFullYear()
        const diff = thisYear - book.publishedDate
        if (diff >= 10) return 'Vintage'
        if (diff <= 1) return 'New'
        return book.publishedDate

    }

    function getPriceClass() {
        if (book.listPrice.amount >= 150) return ' red'
        else if (book.listPrice.amount <= 20) return ' green'
        else return ''
    }

    if (isLoading) return <div>Loading details..</div>
    return <section className="book-details">
        <h3>{book.listPrice.isOnSale && <img className="on-sale" src="/assets/sale-img/1.png" />}</h3>
        <header className="book-details-header">
            <Link to="/book"><button className="btn-go-back">Go back</button></Link>
            <h1>Title : {book.title}</h1>
            <p>Authors: {book.authors.join(', ')}</p>
            <h2>Subtitle: {book.subtitle}</h2>
        </header>

        <main className="book-details-main">
            <img src={book.thumbnail} alt={book.title} />
            <aside className="book-details-aside">
                <p>language: {book.language}</p>
                <p>{getPublishedDate()}</p>
                <p>{getReadingType()}</p>
                <p>categories: {book.categories.join(', ')}</p>
                <LongTxt txt={book.description} />
                <p className={getPriceClass()}>Price: {book.listPrice.amount}{book.listPrice.currencyCode}</p>
            </aside>
        </main>
        <div className="nav-books">
            <Link to={`/book/${book.prevBookId}`}><button>Prev</button></Link>
            <Link to={`/book/edit/${book.id}`}><button>Edit book</button></Link>
            <Link to={`/book/${book.nextBookId}`}><button>Next</button></Link>
        </div>

    </section>

}

// "id": "OXeMG8wNskc",
// "title": "metus hendrerit",
// "subtitle": "mi est eros convallis auctor arcu dapibus himenaeos",
// "authors": [
//   "Barbara Cartland"
// ],
// "publishedDate": 1999,
// "description": "placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse",
// "pageCount": 713,
// "categories": [
//   "Computers",
//   "Hack"
// ],
// "thumbnail": "http://coding-academy.org/books-photos/20.jpg",
// "language": "en",
// "listPrice": {
//   "amount": 109,
//   "currencyCode": "EUR",
//   "isOnSale": false
// }
