const { useState } = React


import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { BookIndex } from './pages/BookIndex.jsx'

import { AppHeader } from './cmps/AppHeader.jsx'


export function App() {
    const [page, setPage] = useState('home')
 
 
    return <section className="app">
         <AppHeader setPage={setPage} />
       
        <main className="container">
            {page === 'home' && <Home />}
            {page === 'about' && <About />}
            {page === 'book' && <BookIndex />}
        </main>
    </section>
}