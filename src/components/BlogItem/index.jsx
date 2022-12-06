import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import { formatTimes } from '../../utils/time'
import './BlogItem.css'

BlogItem.propTypes = {}

function BlogItem({ blog }) {
    return (
        <article className="blog-item">
            <div className="blog-item__img">
                <img src={blog.img} alt={blog.title} />
            </div>
            <div className="blog-item__content">
                <h3 className="blog-item__title">
                    <Link to={`/news/${blog.id}`}>{blog.title}</Link>
                </h3>
                <p className="blog-item__description">{blog.description}</p>
                <div className="blog-item__times-category">
                    <span className="category">The thao</span>
                    <span>{formatTimes('2022-12-04T19:27:51.000+00:00')}</span>
                </div>
            </div>
        </article>
    )
}

export default BlogItem
