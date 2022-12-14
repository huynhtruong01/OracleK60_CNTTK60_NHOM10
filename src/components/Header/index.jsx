import React from 'react'
import { Link } from 'react-router-dom'
import { formatFullTimes } from '../../utils/time'
import './Header.css'

Header.propTypes = {}

function Header() {
    return (
        <header id="header">
            <div className="container header__container">
                <Link to="">
                    {/* <img
                        src="https://s1.vnecdn.net/vnexpress/restruct/i/v681/v2_2019/pc/graphics/logo.svg"
                        alt=""
                    /> */}
                    <span className="logo">NEWSVNs</span>
                </Link>
                <span className="header__time-now">{formatFullTimes(new Date())}</span>
                <div className="header__right">
                    <div className="header__social-list">
                        <div className="header__social-item">
                            <i className="fa-regular fa-clock"></i>
                            <span>Mới nhất</span>
                        </div>
                        <div className="header__social-item">
                            <i className="fa-solid fa-location-dot"></i>
                            <span>Tin theo khu vực</span>
                        </div>
                        <div className="header__social-item">
                            <i className="fa-brands fa-yandex-international"></i>
                            <span>International</span>
                        </div>
                    </div>
                    <form className="header__form">
                        <input type="text" placeholder="Tìm kiếm" />
                        <button type="submit" className="btn-search">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                </div>
            </div>
        </header>
    )
}

export default Header
