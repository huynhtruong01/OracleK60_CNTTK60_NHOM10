import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

Nav.propTypes = {}

function Nav() {
    const navList = [
        {
            name: 'Thời sự',
            link: 'thoi-su',
        },
        {
            name: 'Góc nhìn',
            link: 'goc-nhin',
        },
        {
            name: 'Thế giới',
            link: 'the-gioi',
        },
        {
            name: 'Video',
            link: 'video',
        },
        {
            name: 'Podcasts',
            link: 'podcasts',
        },
        {
            name: 'Kinh doanh',
            link: 'kinh-doanh',
        },
        {
            name: 'Khoa học',
            link: 'khoa-hoc',
        },
        {
            name: 'Giải trí',
            link: 'giai-tri',
        },
    ]

    return (
        <section id="section" className="section-nav">
            <nav className="main-nav">
                <ul className="nav-list">
                    <li className="nav-item nav__home">
                        <Link to="">
                            <i class="fa-solid fa-house-chimney"></i>
                        </Link>
                    </li>
                    {navList.map((nav) => (
                        <li className="nav-item" key={nav.link}>
                            <Link to={`/${nav.link}`}>{nav.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    )
}

export default Nav
