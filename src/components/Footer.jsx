import React from 'react';

const Footer = () => {
    return (
        <footer>

            <div className="row footer-main">

                <div className="col-full footer-connect">

                    <h4>Get In Touch</h4>
                    <p>We're available for new projects and collaborations. Let's build something remarkable.</p>

                    <div className="subscribe-form">
                        <ul className="contact-social">
                            <li>
                                <a href="#0" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="#0" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="mailto:info@innovatetechsolutions.com"><i className="fa fa-envelope" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="#0" target="_blank" rel="noopener noreferrer"><i className="fa fa-whatsapp" aria-hidden="true"></i></a>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>

            <div className="row footer-bottom">

                <div className="col-twelve">
                    <div className="copyright">
                        <span>© Copyright Innovate Tech Solutions {new Date().getFullYear()}</span>

                    </div>

                    <div className="go-top">
                        <a className="smoothscroll" title="Back to Top" href="#top"><i className="icon-arrow-up" aria-hidden="true"></i></a>
                    </div>
                </div>

            </div>

        </footer>
    );
};

export default Footer;
