


export function AppHeader({ setPage }) {

	function onSetPage(ev, page) {
		ev.preventDefault()
		setPage(page)
	}

	return <header className="app-header full flex align-center justify-between">
		<h1>Miss Store</h1>

		<nav className="app-nav">
			<a href="" onClick={(ev) => onSetPage(ev, 'home')} >Home</a> |
			<a href="" onClick={(ev) => onSetPage(ev, 'about')} >About</a> |
			<a href="" onClick={(ev) => onSetPage(ev, 'book')}>Books</a>
		</nav>
	</header>
}