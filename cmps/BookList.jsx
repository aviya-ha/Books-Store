import { BookPreview } from "./BookPreview.jsx"


export function BookList({ books, onRemoveCar, onUpdateCar, onSelectBook }) {

	// function onChangeSpeed(car) {
	// 	car = { ...car, maxSpeed: car.maxSpeed + 10 }
	// 	onUpdateCar(car)
	// }

	if (!books.length) return <div>No books to show</div>
	return <ul className="book-list clean-list flex">
		{
			books.map((book ,idex) => <li  key={book.id}>
				<BookPreview book={book} idex = {idex}/>
				<div className="book-actions">
					<button className="remove-btn" onClick={() => onRemoveBook(book.id)}>X</button>
					<button onClick={() => { onChangePrice(book) }}>Change price</button>
					<button onClick={() => { onSelectBook(book) }}>Book details</button>
				</div>
			</li>)
		}
	</ul>
}