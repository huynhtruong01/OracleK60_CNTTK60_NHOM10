import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import blogsApi from '../../api/blogsApi'
import BlogItem from '../../components/BlogItem'
import DetailBlogMain from './components/DetailBlogMain'
import './DetailBlog.css'

DetailBlog.propTypes = {}

function DetailBlog() {
    const [blog, setBlog] = useState({})
    const { id } = useParams()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        ;(async () => {
            const newBlog = await blogsApi.getBlog(id)
            setBlog(newBlog)
        })()
    }, [])

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
        {
            id: 7,
            img: 'https://i1-kinhdoanh.vnecdn.net/2022/11/29/1200x800-1669723778-1669723785-7329-1669723875.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=iXe2G2ZuEYkUxn8ZwMl8gw',
            title: 'Thái Lan sẽ thu thuế giao dịch chứng khoán năm sau',
            description:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet',
        },
    ]

    return (
        <div className="detail-blog">
            <div className="container detail-blog__container">
                <div className="detail-main">
                    <DetailBlogMain
                        blog={{
                            img: 'https://i1-kinhdoanh.vnecdn.net/2022/11/29/1200x800-1669723778-1669723785-7329-1669723875.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=iXe2G2ZuEYkUxn8ZwMl8gw',
                            title: 'Thái Lan sẽ thu thuế giao dịch chứng khoán năm sau',
                            description:
                                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet',
                        }}
                    />
                </div>
                <div className="detail-blog-list">
                    {blogList.slice(0, 3).map((blog) => (
                        <BlogItem blog={blog} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DetailBlog
