

export function BookDetails({ book, onGoBack }) {

    // Render time methods
    

    function getReadingType(){
        if (book.pageCount > 500) return 'Serious Reading'
        else if (book.pageCount > 200) return 'Descent Reading'
        else return 'Light Reading'
    }

function getPublishedDate(){
    const thisYear = new Date().getFullYear()
    const diff = thisYear - book.publishedDate
    if (diff >= 10) return 'Vintage'
    if (diff <= 1) return 'New'

}

function getPriceClass() {
    	if (book.listPrice.amount >= 150) return ' red'
    	else if (book.listPrice.amount <= 20) return ' green'
    	else return ''
    }
    
new Date().getFullYear
    return <section className="book-details">
        <button onClick={onGoBack}>Go back</button>
        <h1>Title : {book.title}</h1>
        <p>Authors: {book.authors.map(author => author + ' ')}</p>
        <h2>Subtitle: {book.subtitle}</h2>
        {/* <h5 className={getSpeedClass()}>Max speed: {car.maxSpeed}</h5> */}
        <img src={book.thumbnail} alt={book.title} />
        <div>
            <p>language: {book.language}</p>
            <p>{getPublishedDate()}</p>
            <p>{getReadingType()}</p>
            <p>categories: {book.categories.map(categorie => categorie + ' ')}</p>
        </div>
        <p>{book.description}</p><p></p>
        <p className={getPriceClass()}>Price: {book.listPrice.amount}{book.listPrice.currencyCode}</p>
        <p>{(book.listPrice.isOnSale) ? 'FOR SALE!' : 'NOT FOR SALE'}</p>
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
