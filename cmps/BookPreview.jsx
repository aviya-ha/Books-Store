
export function BookPreview({ book , idex}) {
	return <article className="book-preview">
		<h2>{book.title}</h2>
		<h5>price : {book.listPrice.amount}{book.listPrice.currencyCode}</h5>
		<img  src={`assets/img/${idex + 1}.jpg`} alt= {book.title} />
	</article>
}
