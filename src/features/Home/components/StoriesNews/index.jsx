import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import StoriesNewsLeft from './components/StoriesNewsLeft'
import StoriesNewsRight from './components/StoriesNewsRight'
import './StoriesNews.css'

StoriesNews.propTypes = {}

function StoriesNews(props) {
    return (
        <section className="stories-news">
            <h2>Tin tức hằng ngày</h2>
            <div className="stories-news__content">
                <div className="stories-news__left">
                    <StoriesNewsLeft />
                </div>
                <div className="stories-news__right">
                    <StoriesNewsRight />
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
