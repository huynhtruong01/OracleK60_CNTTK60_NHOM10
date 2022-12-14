import PropTypes from 'prop-types'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import blogsApi from '../../../../api/blogsApi'
import StoriesNewsLeft from './components/StoriesNewsLeft'
import StoriesNewsRight from './components/StoriesNewsRight'
import './StoriesNews.css'

StoriesNews.propTypes = {}

function StoriesNews(props) {
    const [blogList, setBlogList] = useState([])

    useEffect(() => {
        ;(async () => {
            try {
                const res = await blogsApi.getAll()
                const newBlogList = res._embedded.news.reverse()
                setBlogList(newBlogList)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    return (
        <section className="stories-news">
            <h2>Tin tức hằng ngày</h2>
            <div className="stories-news__content">
                <div className="stories-news__left">
                    <StoriesNewsLeft blogList={blogList.slice(0, 6)} />
                </div>
                <div className="stories-news__right">
                    <StoriesNewsRight blogList={blogList.slice(6, 12)} />
                </div>
            </div>
            <div className="stories-news-see-more">
                <button className="btn-see-more">
                    <Link to="/news">Xem thêm</Link>
                </button>
            </div>
        </section>
    )
}

export default StoriesNews
