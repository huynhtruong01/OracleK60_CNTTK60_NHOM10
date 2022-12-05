import PropTypes from 'prop-types'
import React from 'react'
import StoriesNewsLeft from './components/StoriesNewsLeft'
import StoriesNewsRight from './components/StoriesNewsRight'
import './StoriesNews.css'

StoriesNews.propTypes = {}

function StoriesNews(props) {
    return (
        <section className="stories-news">
            <h2>Stories News</h2>
            <div className="stories-news__content">
                <div className="stories-news__left">
                    <StoriesNewsLeft />
                </div>
                <div className="stories-news__right">
                    <StoriesNewsRight />
                </div>
            </div>
        </section>
    )
}

export default StoriesNews
