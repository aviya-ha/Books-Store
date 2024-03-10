

export function BookDetails({ book, onGoBack }) {

    // Render time methods
    // function getSpeedClass() {
    // 	if (car.maxSpeed > 100) return 'fast'
    // 	else if (car.maxSpeed < 80) return 'slow'
    // 	else return ''
    // }

    return <section className="book-details">
        <button onClick={onGoBack}>Go back</button>
        <h1>Title : {book.title}</h1>
        {/* <h5 className={getSpeedClass()}>Max speed: {car.maxSpeed}</h5> */}
        <img src={`assets/img/1.jpg`} alt={book.title} />
        <p>{book.description}</p>
        <p>Price: {book.listPrice.amount}{book.listPrice.currencyCode}</p>
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
