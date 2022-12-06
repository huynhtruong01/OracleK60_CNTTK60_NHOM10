import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import blogsApi from '../../../../api/blogsApi'
import BlogList from '../../../../components/BlogList'
import Loading from '../../../../components/Loading'
import './TopNews.css'

TopNews.propTypes = {}

function TopNews(props) {
    const [blogList, setBlogList] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        ;(async () => {
            try {
                setLoading(true)
                const res = await blogsApi.getAll()
                setBlogList(res._embedded.news)
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        })()
    }, [])

    return (
        <section id="section" className="section-topstory">
            <h2>TOP TIN TỨC</h2>
            <div className="topstory__container">
                {loading && <Loading />}
                {blogList.length > 0 && (
                    <>
                        <div className="topstory-left">
                            <div className="topstory-left__img">
                                <img src={blogList[0].urlimage} alt={blogList[0].title} />
                            </div>
                            <div className="topstory-left__content">
                                <h3>
                                    <Link to={`/news/${blogList[0].id}`}>
                                        {blogList[0].title}
                                    </Link>
                                </h3>
                                <p>{blogList[0].brief}</p>
                            </div>
                        </div>
                        <div className="topstory-right">
                            <BlogList blogList={blogList.slice(1)} end={3} />
                            <div className="see-more">
                                <button className="btn-see-more">
                                    <Link to="news">Xem thêm</Link>
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}

export default TopNews
