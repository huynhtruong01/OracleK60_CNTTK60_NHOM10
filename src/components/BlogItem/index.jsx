import PropTypes from 'prop-types'
import React from 'react'
import './BlogItem.css'

BlogItem.propTypes = {}

function BlogItem({ blog }) {
    return (
        <article className="blog-item">
            <div className="blog-item__img">
                <img src={blog.img} alt={blog.title} />
            </div>
            <div className="blog-item__content">
                <h3 className="blog-item__title">{blog.title}</h3>
                <p className="blog-item__description">{blog.description}</p>
            </div>
        </article>
    )
}

export default BlogItem
