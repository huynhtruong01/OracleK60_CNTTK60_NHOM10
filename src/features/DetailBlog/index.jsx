import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import blogsApi from '../../api/blogsApi'
import BlogItem from '../../components/BlogItem'
import Comment from './components/Comment'
import DetailBlogMain from './components/DetailBlogMain'
import './DetailBlog.css'

DetailBlog.propTypes = {}

function DetailBlog() {
    const [blog, setBlog] = useState(null)
    const [blogList, setBlogList] = useState([])
    const { id } = useParams()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [id])

    useEffect(() => {
        ;(async () => {
            try {
                const newBlog = await blogsApi.getBlog(id)
                const res = await blogsApi.getAll()
                const newBlogList = res._embedded.news.filter(
                    (x) => x.category_id === newBlog.category_id && x.id !== newBlog.id
                )
                setBlog(newBlog)
                setBlogList(newBlogList)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [id])

    return (
        <div className="detail-blog">
            <div className="container detail-blog__container">
                {blog && (
                    <div className="detail-main">
                        <DetailBlogMain blog={blog} />
                        <Comment blogId={id} />
                    </div>
                )}
                <div className="detail-blog-list">
                    {blogList.length > 0 &&
                        blogList.slice(0, 3).map((blog) => <BlogItem blog={blog} />)}
                </div>
            </div>
        </div>
    )
}

export default DetailBlog
