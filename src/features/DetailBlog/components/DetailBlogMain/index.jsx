import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import blogsApi from '../../../../api/blogsApi'
import categoriesApi from '../../../../api/categoriesApi'
import { formatFullTimes } from '../../../../utils/time'
import './DetailBlogMain.css'

DetailBlogMain.propTypes = {}

function DetailBlogMain({ blog }) {
    const [category, setCategory] = useState('')

    useEffect(() => {
        ;(async () => {
            const newCategory = await categoriesApi.getCategory(blog.category_id)
            setCategory(newCategory.category_name)
        })()
        // ;(async () => {
        //     const url = `http://localhost:8000/api/news/increase/?post_id=${blog.id}`
        //     const requestOptions = {
        //         method: 'PUT',
        //         headers: {
        //             Authorization: `user`,
        //             'Content-Type': 'application/json',
        //         },
        //     }

        //     const quantityUpdateResponse = await fetch(url, requestOptions)
        //     if (!quantityUpdateResponse.ok) {
        //         throw new Error('Something went wrong!')
        //     }
        // })()
    }, [])

    return (
        <div className="detail-blog-main">
            <div className="detail-blog-main-header">
                <small>
                    <span>
                        <Link to={`/the-loai/${blog.category_id}`}>{category}</Link>
                    </span>{' '}
                    {' > '} <span> {blog.tags}</span>
                </small>
                <small>{formatFullTimes(blog.date_public)}</small>
            </div>
            <h1>
                <Link to={`/news/${blog.id}`}>{blog.title}</Link>
            </h1>
            <p>{blog.content_post}</p>
            <div className="detail-blog-view-post">
                <i>{blog.view_post} lượt xem</i>
            </div>
        </div>
    )
}

export default DetailBlogMain
