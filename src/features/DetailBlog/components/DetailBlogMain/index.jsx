import PropTypes from 'prop-types'
import React from 'react'
import { formatFullTimes } from '../../../../utils/time'
import './DetailBlogMain.css'

DetailBlogMain.propTypes = {}

function DetailBlogMain({ blog }) {
    return (
        <div className="detail-blog-main">
            <div className="detail-blog-main-header">
                <small>
                    <span>The thao</span> {' > '} <span> Đời sống</span>
                </small>
                <small>{formatFullTimes('2022-12-04T19:27:51.000+00:00')}</small>
            </div>
            <h1>{blog.title}</h1>
            <p>{blog.description}</p>
        </div>
    )
}

export default DetailBlogMain
