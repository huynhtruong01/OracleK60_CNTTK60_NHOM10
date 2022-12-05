import PropTypes from 'prop-types'
import React from 'react'
import BlogItem from '../../../../../../components/BlogItem'
import './StoriesNewsRight.css'

StoriesNewsRight.propTypes = {}

function StoriesNewsRight(props) {
    const blogList = [
        {
            img: 'https://i1-kinhdoanh.vnecdn.net/2022/11/29/1200x800-1669723778-1669723785-7329-1669723875.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=iXe2G2ZuEYkUxn8ZwMl8gw',
            title: 'Thái Lan sẽ thu thuế giao dịch chứng khoán năm sau',
            description:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet',
        },
        {
            img: 'https://i1-kinhdoanh.vnecdn.net/2022/11/29/1200x800-1669723778-1669723785-7329-1669723875.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=iXe2G2ZuEYkUxn8ZwMl8gw',
            title: 'Thái Lan sẽ thu thuế giao dịch chứng khoán năm sau',
            description:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet',
        },
        {
            img: 'https://i1-kinhdoanh.vnecdn.net/2022/11/29/1200x800-1669723778-1669723785-7329-1669723875.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=iXe2G2ZuEYkUxn8ZwMl8gw',
            title: 'Thái Lan sẽ thu thuế giao dịch chứng khoán năm sau',
            description:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet',
        },
        {
            img: 'https://i1-kinhdoanh.vnecdn.net/2022/11/29/1200x800-1669723778-1669723785-7329-1669723875.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=iXe2G2ZuEYkUxn8ZwMl8gw',
            title: 'Thái Lan sẽ thu thuế giao dịch chứng khoán năm sau',
            description:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet',
        },
        {
            img: 'https://i1-kinhdoanh.vnecdn.net/2022/11/29/1200x800-1669723778-1669723785-7329-1669723875.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=iXe2G2ZuEYkUxn8ZwMl8gw',
            title: 'Thái Lan sẽ thu thuế giao dịch chứng khoán năm sau',
            description:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet',
        },
        {
            img: 'https://i1-kinhdoanh.vnecdn.net/2022/11/29/1200x800-1669723778-1669723785-7329-1669723875.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=iXe2G2ZuEYkUxn8ZwMl8gw',
            title: 'Thái Lan sẽ thu thuế giao dịch chứng khoán năm sau',
            description:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet',
        },
    ]

    return (
        <div className="stories-news__right-list">
            {blogList.map((blog) => (
                <article className="stories-news__right-item">
                    <div className="img">
                        <img src={blog.img} alt={blog.title} />
                    </div>
                    <div className="content">
                        <h3 className="title">{blog.title}</h3>
                        <p className="desc">{blog.description}</p>
                    </div>
                </article>
            ))}
        </div>
    )
}

export default StoriesNewsRight
