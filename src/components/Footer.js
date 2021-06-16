import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <Link to="/">
                <h1 className="footer-headline">TRVL</h1>
            </Link>
            <div className="copyright-container">
                <span className="footer-copyright">TRVL © 2021</span>
            </div>
            <div className="footer-socials">
                <i className="fab fa-facebook-f footer-social"></i>
                <i className="fab fa-instagram footer-social"></i>
                <i className="fab fa-youtube footer-social"></i>
                <i className="fab fa-twitter footer-social"></i>
                <i className="fab fa-linkedin footer-social"></i>
            </div>
        </footer>
    )
}

export default Footer;