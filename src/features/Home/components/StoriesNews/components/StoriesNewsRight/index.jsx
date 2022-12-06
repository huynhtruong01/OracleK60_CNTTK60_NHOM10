import PropTypes from 'prop-types'
import React from 'react'
import BlogItem from '../../../../../../components/BlogItem'
import { formatTimes } from '../../../../../../utils/time'
import './StoriesNewsRight.css'

StoriesNewsRight.propTypes = {}

function StoriesNewsRight(props) {
    const blogList = [
        {
            id: 1,
            img: 'https://i1-kinhdoanh.vnecdn.net/2022/11/29/1200x800-1669723778-1669723785-7329-1669723875.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=iXe2G2ZuEYkUxn8ZwMl8gw',
            title: 'Thái Lan sẽ thu thuế giao dịch chứng khoán năm sau',
            description:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet',
        },
        {
            id: 2,
            img: 'https://i1-kinhdoanh.vnecdn.net/2022/11/29/1200x800-1669723778-1669723785-7329-1669723875.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=iXe2G2ZuEYkUxn8ZwMl8gw',
            title: 'Thái Lan sẽ thu thuế giao dịch chứng khoán năm sau',
            description:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet',
        },
        {
            id: 3,
            img: 'https://i1-kinhdoanh.vnecdn.net/2022/11/29/1200x800-1669723778-1669723785-7329-1669723875.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=iXe2G2ZuEYkUxn8ZwMl8gw',
            title: 'Thái Lan sẽ thu thuế giao dịch chứng khoán năm sau',
            description:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet',
        },
        {
            id: 4,
            img: 'https://i1-kinhdoanh.vnecdn.net/2022/11/29/1200x800-1669723778-1669723785-7329-1669723875.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=iXe2G2ZuEYkUxn8ZwMl8gw',
            title: 'Thái Lan sẽ thu thuế giao dịch chứng khoán năm sau',
            description:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet',
        },
        {
            id: 5,
            img: 'https://i1-kinhdoanh.vnecdn.net/2022/11/29/1200x800-1669723778-1669723785-7329-1669723875.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=iXe2G2ZuEYkUxn8ZwMl8gw',
            title: 'Thái Lan sẽ thu thuế giao dịch chứng khoán năm sau',
            description:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet',
        },
        {
            id: 6,
            img: 'https://i1-kinhdoanh.vnecdn.net/2022/11/29/1200x800-1669723778-1669723785-7329-1669723875.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=iXe2G2ZuEYkUxn8ZwMl8gw',
            title: 'Thái Lan sẽ thu thuế giao dịch chứng khoán năm sau',
            description:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet',
        },
    ]

    return (
        <div className="stories-news__right-list">
            {blogList.map((blog) => (
                <article className="stories-news__right-item" key={blog.id}>
                    <div className="img">
                        <img src={blog.img} alt={blog.title} />
                    </div>
                    <div className="content">
                        <h3 className="title">{blog.title}</h3>
                        <p className="desc">{blog.description}</p>
                        <div className="times-category">
                            <span className="category">The thao</span>
                            <span className="time">
                                {formatTimes('2022-12-04T19:27:51.000+00:00')}
                            </span>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    )
}

export default StoriesNewsRight
