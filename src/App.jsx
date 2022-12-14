import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Nav from './components/Nav'
import BlogListPage from './features/BlogListPage'
import Categories from './features/Categories'
import DetailBlog from './features/DetailBlog'
import Home from './features/Home'
import NotFound from './features/NotFound'

function App() {
    return (
        <>
            <Header />
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<BlogListPage />} />
                <Route path="/news/:id" element={<DetailBlog />} />
                <Route path="/the-loai/:id" element={<Categories />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
