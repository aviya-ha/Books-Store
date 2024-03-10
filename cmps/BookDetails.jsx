

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
