import React from 'react';

const Home = () => {
    return (
        <section id="home" className="s-home target-section" data-parallax="scroll" data-image-src="images/hero-bg.jpg" data-natural-width="3000" data-natural-height="2000" data-position-y="center" style={{ backgroundImage: "url('images/hero-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>

            <div className="overlay"></div>
            <div className="shadow-overlay"></div>

            <div className="home-content">

                <div className="row home-content__main">

                    <h3>We are</h3>

                    <h1>
                        Innovate Tech<br />
                        Solutions<br />
                        Building Dynamic Web<br />
                        Applications
                    </h1>

                    <div className="home-content__buttons">
                        <a href="#contact" className="smoothscroll btn btn--stroke">
                            Hire Us
                        </a>
                        <a href="#works" className="smoothscroll btn btn--stroke">
                            View Portfolio
                        </a>
                    </div>

                </div>

                <div className="home-content__scroll">
                    <a href="#about" className="scroll-link smoothscroll">
                        <span>Scroll Down</span>
                    </a>
                </div>

                <div className="home-content__line"></div>

            </div>

            <ul className="home-social">
                <li>
                    <a href="#0" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i><span>LinkedIn</span></a>
                </li>
                <li>
                    <a href="#0" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" aria-hidden="true"></i><span>GitHub</span></a>
                </li>
                <li>
                    <a href="mailto:info@innovatetechsolutions.com"><i className="fa fa-envelope" aria-hidden="true"></i><span>Email</span></a>
                </li>
                <li>
                    <a href="#0" target="_blank" rel="noopener noreferrer"><i className="fa fa-whatsapp" aria-hidden="true"></i><span>WhatsApp</span></a>
                </li>
            </ul>

        </section>
    );
};

export default Home;
