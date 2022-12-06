import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import categoriesApi from '../../../../api/categoriesApi'
import { formatTimes } from '../../../../utils/time'
import './BlogPage.css'

BlogPage.propTypes = {}

function BlogPage({ blog }) {
    const [category, setCategory] = useState('')

    useEffect(() => {
        ;(async () => {
            const newCategory = await categoriesApi.getCategory(blog.category_id)
            setCategory(newCategory)
        })()
    }, [])

    return (
        <div className="blog">
            <div className="blog__img">
                <img src={blog.urlimage} alt={blog.title} />
            </div>
            <div className="blog__content">
                <div className="blog__time-category">
                    <span className="category">The thao</span>
                    <span className="time">{formatTimes(blog.date_public)}</span>
                </div>
                <h3 className="blog__title">
                    <Link to={`/news/${blog.id}`}>{blog.title}</Link>
                </h3>
                <p className="blog__desc">{blog.content_post}</p>
            </div>
        </div>
    )
}

export default BlogPage
