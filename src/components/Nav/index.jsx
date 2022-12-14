import PropTypes from 'prop-types'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import categoriesApi from '../../api/categoriesApi'
import './Nav.css'

Nav.propTypes = {}

function Nav() {
    const [navList, setNavList] = useState([])
    // const navList = [
    //     {
    //         name: 'Thời sự',
    //         link: 'thoi-su',
    //     },
    //     {
    //         name: 'Góc nhìn',
    //         link: 'goc-nhin',
    //     },
    //     {
    //         name: 'Thế giới',
    //         link: 'the-gioi',
    //     },
    //     {
    //         name: 'Video',
    //         link: 'video',
    //     },
    //     {
    //         name: 'Podcasts',
    //         link: 'podcasts',
    //     },
    //     {
    //         name: 'Kinh doanh',
    //         link: 'kinh-doanh',
    //     },
    //     {
    //         name: 'Khoa học',
    //         link: 'khoa-hoc',
    //     },
    //     {
    //         name: 'Giải trí',
    //         link: 'giai-tri',
    //     },
    // ]

    useEffect(() => {
        ;(async () => {
            try {
                const res = await categoriesApi.getAll()
                setNavList(res._embedded.categories)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    return (
        <section id="section" className="section-nav">
            <nav className="main-nav">
                <ul className="nav-list">
                    <li className="nav-item nav__home">
                        <Link to="">
                            <i class="fa-solid fa-house-chimney"></i>
                        </Link>
                    </li>
                    {navList.length > 0 &&
                        navList.map((nav) => (
                            <li className="nav-item" key={nav.category_name}>
                                <Link to={`/the-loai/${nav.id}`}>
                                    {nav.category_name}
                                </Link>
                            </li>
                        ))}
                </ul>
            </nav>
        </section>
    )
}

export default Nav
