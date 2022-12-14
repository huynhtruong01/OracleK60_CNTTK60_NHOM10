import PropTypes from 'prop-types'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import categoriesApi from '../../../../../../api/categoriesApi'
import BlogItem from '../../../../../../components/BlogItem'
import { formatTimes } from '../../../../../../utils/time'
import StoriesBlogItem from '../../../StoriesBlogItem'
import './StoriesNewsRight.css'

StoriesNewsRight.propTypes = {}

function StoriesNewsRight({ blogList = [] }) {
    const [category, setCategory] = useState('')
    useEffect(() => {
        ;(async () => {
            try {
                const category = await categoriesApi.getCategory(blog)
            } catch (error) {
                console.log(error)
            }
        })()
    })

    return (
        <div className="stories-news__right-list">
            {blogList.map((blog) => (
                <StoriesBlogItem blog={blog} key={blog.id} />
            ))}
        </div>
    )
}

export default StoriesNewsRight
