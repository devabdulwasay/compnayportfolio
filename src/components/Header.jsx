import React from 'react';

const Header = () => {

    const toggleMenu = (e) => {
        e.preventDefault();
        document.body.classList.toggle('menu-is-open');
    };

    const closeMenu = (e) => {
        if (e.currentTarget.getAttribute('href') === '#0') e.preventDefault();
        document.body.classList.remove('menu-is-open');
    };

    return (
        <header className="s-header">


            <nav className="header-nav">
                <a href="#0" className="header-nav__close" title="close" onClick={closeMenu}><span>Close</span></a>

                <div className="header-nav__content">
                    <h3>Navigation</h3>

                    <ul className="header-nav__list">
                        <li className="current"><a className="smoothscroll" href="#home" title="home">Home</a></li>
                        <li><a className="smoothscroll" href="#about" title="about">About</a></li>
                        <li><a className="smoothscroll" href="#experience" title="experience">Experience</a></li>
                        <li><a className="smoothscroll" href="#services" title="services">Services</a></li>
                        <li><a className="smoothscroll" href="#works" title="works">Works</a></li>
                        <li><a className="smoothscroll" href="#contact" title="contact">Contact</a></li>
                    </ul>

                    <p>PHP & Laravel Development Agency specializing in building dynamic web applications. Passionate about creating innovative solutions and delivering high-quality code.</p>

                    <ul className="header-nav__social">
                        <li>
                            <a href="#0" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
                        </li>
                        <li>
                            <a href="#0" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
                        </li>
                        <li>
                            <a href="mailto:info@innovatetechsolutions.com"><i className="fa fa-envelope"></i></a>
                        </li>
                        <li>
                            <a href="#0" target="_blank" rel="noopener noreferrer"><i className="fa fa-whatsapp"></i></a>
                        </li>
                    </ul>

                </div>
            </nav>

            <a className="header-menu-toggle" href="#0" onClick={toggleMenu}>
                <span className="header-menu-text">Menu</span>
                <span className="header-menu-icon"></span>
            </a>
        </header>
    );
};

export default Header;
