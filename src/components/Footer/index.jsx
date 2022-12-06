import PropTypes from 'prop-types'
import React from 'react'
import './Footer.css'

Footer.propTypes = {}

function Footer(props) {
    return (
        <div className="footer">
            <div className="container footer__container">
                <ul className="footer__menu-list">
                    <li className="footer__menu-item">
                        <a href="#">Trang chủ</a>
                    </li>
                    <li className="footer__menu-item">
                        <a href="#">Thời sự</a>
                    </li>
                    <li className="footer__menu-item">
                        <a href="#">Thể thao</a>
                    </li>
                    <li className="footer__menu-item">
                        <a href="#">Khoa học</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
