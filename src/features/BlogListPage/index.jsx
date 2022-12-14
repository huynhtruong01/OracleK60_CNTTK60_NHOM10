import React, { useEffect, useState } from 'react'
import blogsApi from '../../api/blogsApi'
import categoriesApi from '../../api/categoriesApi'
import Loading from '../../components/Loading'
import './BlogListPage.css'
import BlogPage from './components/BlogPage'
import Pagination from './components/Filters/Pagination'
import Search from './components/Filters/Search'
import SelectCategory from './components/Filters/SelectCategory'

BlogListPage.propTypes = {}

function BlogListPage() {
    const [blogList, setBlogList] = useState([])
    const [loading, setLoading] = useState(false)
    const [filters, setFilters] = useState({
        size: 5,
        page: 0,
    })
    const [categoryList, setCategoryList] = useState([])
    const [categoryId, setCategoryId] = useState('')
    const [search, setSearch] = useState('')
    const [pagination, setPagination] = useState(null)

    const handleScrollTop = () => {
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        handleScrollTop()
    }, [])

    useEffect(() => {
        ;(async () => {
            try {
                const res = await categoriesApi.getAll()
                setCategoryList(res._embedded.categories)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    useEffect(() => {
        ;(async () => {
            try {
                setLoading(true)
                let res = await blogsApi.getAll(filters)
                let newBlogList = res._embedded.news
                console.log(newBlogList)
                if (categoryId !== '') {
                    res = await blogsApi.getAll()
                    newBlogList = res._embedded.news.filter(
                        (x) => x.category_id === Number.parseInt(categoryId)
                    )
                }
                if (search !== '') {
                    res = await blogsApi.getAll()
                    newBlogList = res._embedded.news.filter((x) =>
                        x.title.toLowerCase().includes(search.toLowerCase())
                    )
                }
                console.log(newBlogList, res.page)
                setBlogList(newBlogList)
                setPagination(res.page)
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        })()
    }, [filters, categoryId, search])

    const handlePaginationChange = (page) => {
        handleScrollTop()
        setFilters((prev) => ({ ...prev, page }))
    }

    const handleSelectChange = (newCategoryId) => {
        console.log(newCategoryId)
        setCategoryId(newCategoryId)
    }

    const handleSearchChange = (value) => {
        setSearch(value)
    }

    return (
        <div className="container blog-list__container">
            {loading && <Loading />}
            {categoryList.length > 0 && (
                <div className="filter">
                    <SelectCategory list={categoryList} onChange={handleSelectChange} />
                    <Search onChange={handleSearchChange} />
                </div>
            )}
            <div className="blog-list">
                {blogList.map((blog) => (
                    <BlogPage blog={blog} key={blog.id} />
                ))}
            </div>
            {pagination && (
                <Pagination pagination={pagination} onChange={handlePaginationChange} />
            )}
        </div>
    )
}

export default BlogListPage
