import React, { useEffect, useState } from 'react'
import blogsApi from '../../api/blogsApi'
import './BlogListPage.css'
import BlogPage from './components/BlogPage'

BlogListPage.propTypes = {}

function BlogListPage() {
    const [blogList, setBlogList] = useState([])
    const [filters, setFilters] = useState({
        size: 5,
        page: 0,
    })

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        ;(async () => {
            const res = await blogsApi.getAll()
            setBlogList(res._embedded.news)
        })()
    }, [filters])

    return (
        <div className="container blog-list__container">
            <div className="blog-list">
                {blogList.map((blog) => (
                    <BlogPage blog={blog} key={blog.id} />
                ))}
            </div>
        </div>
    )
}

export default BlogListPage
