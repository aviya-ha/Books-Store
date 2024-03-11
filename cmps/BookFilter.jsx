const { useState, useEffect } = React



export function BookFilter({ onSetFilter, filterBy }) {
	const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

	useEffect(() => {
		onSetFilter(filterByToEdit)
	}, [filterByToEdit])

	function onFilter(ev) {
		ev.preventDefault()
		onSetFilter(filterByToEdit)
	}

	function handleChange({ target }) {
		let { value, name: field, type } = target
		if (type === 'number') value = +value
		setFilterByToEdit((prevFilterBy) => ({ ...prevFilterBy, [field]: value }))
	}

	return <section className="book-filter">
		<h2>Filter Our Books</h2>

		<form onSubmit={onFilter}>
			<label htmlFor="title">Title</label>
			<input type="text"
				
				id="title"
				name="txt"
				value={filterByToEdit.txt}

				onChange={handleChange}
				placeholder="By title" />

			<label htmlFor="minPrice">Min Price</label>
			<input type="number"
				
				id="minPrice"
				name="minPrice"
				value={filterByToEdit.minPrice}

				onChange={handleChange}
				placeholder="By min price" />

			<button>Filter</button>
		</form>
	</section>
}