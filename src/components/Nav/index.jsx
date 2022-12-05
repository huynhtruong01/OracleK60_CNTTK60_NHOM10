import PropTypes from 'prop-types'
import React from 'react'
import './Nav.css'

Nav.propTypes = {}

function Nav() {
    return (
        <section id="section" className="section-nav">
            <nav className="main-nav">
                <ul className="nav-list">
                    <li className="nav-item nav__home">
                        <a href="#">
                            <i class="fa-solid fa-house-chimney"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="">Thời sự</a>
                    </li>
                    <li className="nav-item">
                        <a href="">Góc nhìn</a>
                    </li>
                    <li className="nav-item">
                        <a href="">Thế giới</a>
                    </li>
                    <li className="nav-item">
                        <a href="">Video</a>
                    </li>
                    <li className="nav-item">
                        <a href="">Podcasts</a>
                    </li>
                    <li className="nav-item">
                        <a href="">Kinh doanh</a>
                    </li>
                    <li className="nav-item">
                        <a href="">Khoa học</a>
                    </li>
                    <li className="nav-item">
                        <a href="">Giải trí</a>
                    </li>
                    <li className="nav-item">
                        <a href="">Thể thao</a>
                    </li>
                    <li className="nav-item">
                        <a href="">Pháp luật</a>
                    </li>
                    <li className="nav-item">
                        <a href="">Giáo dục</a>
                    </li>
                    <li className="nav-item">
                        <a href="">Sức khỏe</a>
                    </li>
                    <li className="nav-item">
                        <a href="">Đời sống</a>
                    </li>
                    <li className="nav-item">
                        <a href="">Du lịch</a>
                    </li>
                    <li className="nav-item">
                        <a href="">Xe</a>
                    </li>
                    <li className="nav-item">
                        <a href="">Tâm sự</a>
                    </li>
                    <li className="nav-item">
                        <a href="">Hài</a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default Nav
