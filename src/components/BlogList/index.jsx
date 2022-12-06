import React from 'react'
import BlogItem from '../BlogItem'
import './BlogList.css'

BlogList.propTypes = {}

function BlogList({ blogList = [], start = 0, end = 0 }) {
    // const blogList = [
    //     {
    //         id: 1,
    //         img: 'https://i1-kinhdoanh.vnecdn.net/2022/11/29/1200x800-1669723778-1669723785-7329-1669723875.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=iXe2G2ZuEYkUxn8ZwMl8gw',
    //         title: 'Thái Lan sẽ thu thuế giao dịch chứng khoán năm sau',
    //         description:
    //             'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet',
    //     },
    //     {
    //         id: 2,
    //         img: 'https://i1-kinhdoanh.vnecdn.net/2022/11/29/1200x800-1669723778-1669723785-7329-1669723875.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=iXe2G2ZuEYkUxn8ZwMl8gw',
    //         title: 'Thái Lan sẽ thu thuế giao dịch chứng khoán năm sau',
    //         description:
    //             'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet',
    //     },
    //     {
    //         id: 3,
    //         img: 'https://i1-kinhdoanh.vnecdn.net/2022/11/29/1200x800-1669723778-1669723785-7329-1669723875.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=iXe2G2ZuEYkUxn8ZwMl8gw',
    //         title: 'Thái Lan sẽ thu thuế giao dịch chứng khoán năm sau',
    //         description:
    //             'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet',
    //     },
    //     {
    //         id: 4,
    //         img: 'https://i1-kinhdoanh.vnecdn.net/2022/11/29/1200x800-1669723778-1669723785-7329-1669723875.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=iXe2G2ZuEYkUxn8ZwMl8gw',
    //         title: 'Thái Lan sẽ thu thuế giao dịch chứng khoán năm sau',
    //         description:
    //             'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet',
    //     },
    //     {
    //         id: 5,
    //         img: 'https://i1-kinhdoanh.vnecdn.net/2022/11/29/1200x800-1669723778-1669723785-7329-1669723875.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=iXe2G2ZuEYkUxn8ZwMl8gw',
    //         title: 'Thái Lan sẽ thu thuế giao dịch chứng khoán năm sau',
    //         description:
    //             'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet',
    //     },
    //     {
    //         id: 6,
    //         img: 'https://i1-kinhdoanh.vnecdn.net/2022/11/29/1200x800-1669723778-1669723785-7329-1669723875.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=iXe2G2ZuEYkUxn8ZwMl8gw',
    //         title: 'Thái Lan sẽ thu thuế giao dịch chứng khoán năm sau',
    //         description:
    //             'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet',
    //     },
    // ]

    return (
        <div className="blog-list">
            {start !== 0 &&
                end !== 0 &&
                blogList
                    .slice(start, end)
                    .map((blog) => <BlogItem blog={blog} key={blog.id} />)}
            {end === 0 &&
                start === 0 &&
                blogList.map((blog) => <BlogItem blog={blog} key={blog.id} />)}
            {end !== 0 &&
                start === 0 &&
                blogList
                    .slice(0, end)
                    .map((blog) => <BlogItem blog={blog} key={blog.id} />)}
        </div>
    )
}

export default BlogList
