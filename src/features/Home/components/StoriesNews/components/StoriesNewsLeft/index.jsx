import React from 'react'
import { Link } from 'react-router-dom'
import './StoriesNewsLeft.css'

StoriesNewsLeft.propTypes = {}

function StoriesNewsLeft(props) {
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
        <div className="stories-news__left-list">
            {blogList.map((blog) => (
                <div className="stories-news__left-item" key={blog.id}>
                    <h3>
                        <Link to={`/news/${blog.id}`}>{blog.title}</Link>
                    </h3>
                    <div className="content">
                        <div className="img">
                            <img src={blog.img} alt={blog.title} />
                        </div>
                        <p className="desc">{blog.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default StoriesNewsLeft
