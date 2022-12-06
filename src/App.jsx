import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Nav from './components/Nav'
import BlogListPage from './features/BlogListPage'
import DetailBlog from './features/DetailBlog'
import Home from './features/Home'

function App() {
    return (
        <>
            <Header />
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<BlogListPage />} />
                <Route path="/news/:id" element={<DetailBlog />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
