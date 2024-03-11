const { Link } = ReactRouterDOM

import { BookPreview } from "./BookPreview.jsx"


export function BookList({ books, onRemoveBook, onUpdateBook, }) {

	if (!books.length) return <div>No books to show</div>
	return <ul className="book-list clean-list flex">
		{
			books.map(book => <li  key={book.id}>
				<Link to={`/book/${book.id}`}>
				<BookPreview book={book} />
				</Link>
				<div className="book-actions">
					<button className="remove-btn" onClick={() => onRemoveBook(book.id)}>X</button>
					<Link to={`/book/edit/${book.id}`}><button>Edit book</button></Link>
				</div>
			</li>)
		}
	</ul>
}