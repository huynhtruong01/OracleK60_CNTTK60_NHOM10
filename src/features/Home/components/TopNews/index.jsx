import React from 'react'
import BlogList from '../../../../components/BlogList'
import './TopNews.css'

TopNews.propTypes = {}

function TopNews(props) {
    return (
        <section id="section" className="section-topstory">
            <h2>Top News</h2>
            <div className="topstory__container">
                <div className="topstory-left">
                    <div className="topstory-left__img">
                        <img
                            src="https://i1-thethao.vnecdn.net/2022/11/29/ha-lan-jpeg-1669733050-1487-1669733091.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=rUYoMxvkeWUaZwXhOXSpJg"
                            alt=""
                        />
                    </div>
                    <div className="topstory-left__content">
                        <h3>Hà Lan - Qatar: Gakpo trước cột mốc đáng nhớ</h3>
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
                    <BlogList />
                </div>
            </div>
        </section>
    )
}

export default TopNews
