import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import categoriesApi from '../../api/categoriesApi'
import { formatTimes } from '../../utils/time'
import './BlogItem.css'

BlogItem.propTypes = {}

function BlogItem({ blog }) {
    const [category, setCategory] = useState('')

    useEffect(() => {
        ;(async () => {
            const category = await categoriesApi.getCategory(blog.category_id)
            setCategory(category.category_name)
        })()
    }, [])

    return (
        <article className="blog-item">
            <div className="blog-item__img">
                <img src={blog.urlimage} alt={blog.title} />
            </div>
            <div className="blog-item__content">
                <h3 className="blog-item__title">
                    <Link to={`/news/${blog.id}`}>{blog.title}</Link>
                </h3>
                <p className="blog-item__description">{blog.brief}</p>
                <div className="blog-item__times-category">
                    <span className="category">{category}</span>
                    <span>{formatTimes(blog.date_public)}</span>
                </div>
            </div>
        </article>
    )
}

export default BlogItem
