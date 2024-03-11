const { useState } = React
const  Router  = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { BookIndex } from './pages/BookIndex.jsx'
import { BookEdit } from './pages/BookEdit.jsx'
import { BookDetails } from './cmps/BookDetails.jsx'

import { AppHeader } from './cmps/AppHeader.jsx'


export function App() {
    const [page, setPage] = useState('home')
 
 
    return <Router>
    <section className="app main-layout">
        <AppHeader />
    
        <main className="container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} >
                    <Route path="/about" element={<h1>This is default</h1>} />
                    {/* <Route path="/about/team" element={<Team />} /> */}
                    {/* <Route path="/about/vision" element={<Vision />} /> */}
                </Route>
    
                <Route path="/book" element={<BookIndex />} />
                <Route path="/book/edit" element={<BookEdit />} />
                <Route path="/book/edit/:bookId" element={<BookEdit />} />
                <Route path="/book/:bookId" element={<BookDetails />} />
            </Routes>
            {/* {page === 'home' && <Home />}
            {page === 'about' && <About />}
            {page === 'car' && <CarIndex />} */}
        </main>
    
        {/* <UserMsg /> */}
    </section>
    </Router>
}

