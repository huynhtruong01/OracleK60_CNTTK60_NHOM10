import React from 'react'
import { Link } from 'react-router-dom'
import BlogList from '../../../../components/BlogList'
import './TopNews.css'

TopNews.propTypes = {}

function TopNews(props) {
    return (
        <section id="section" className="section-topstory">
            <h2>TOP TIN TỨC</h2>
            <div className="topstory__container">
                <div className="topstory-left">
                    <div className="topstory-left__img">
                        <img
                            src="https://i1-thethao.vnecdn.net/2022/11/29/ha-lan-jpeg-1669733050-1487-1669733091.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=rUYoMxvkeWUaZwXhOXSpJg"
                            alt=""
                        />
                    </div>
                    <div className="topstory-left__content">
                        <h3>
                            <Link to={`/news/2`}>
                                Hà Lan - Qatar: Gakpo trước cột mốc đáng nhớ
                            </Link>
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                            temporibus excepturi eaque possimus at quis consectetur
                            blanditiis, fuga laborum, minima voluptatem. Sapiente fugiat
                            ducimus pariatur, laborum consectetur laudantium ad
                            consequatur.
                        </p>
                    </div>
                </div>
                <div className="topstory-right">
                    <BlogList end={3} />
                    <div className="see-more">
                        <button className="btn-see-more">
                            <Link to="news">Xem thêm</Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopNews
