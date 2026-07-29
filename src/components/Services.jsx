import React from 'react';
import ScrollNavigation from './ScrollNavigation';

const Services = () => {
    return (
        <section id='services' className="s-services">

            <div className="intro-wrap">
                <div className="row section-header has-bottom-sep light-sep" data-aos="fade-up">
                    <div className="col-full">
                        <h3 className="subhead">What We Do</h3>
                        <h1 className="display-2 display-2--light">We've got everything you need to launch and grow your business</h1>
                    </div>
                </div>
            </div>

            <div className="row services-list block-1-2 block-tab-full block-mob-full">

                <div className="col-block service-item" data-aos="fade-up">
                    <div className="service-icon">
                        <i className="icon-window"></i>
                    </div>
                    <div className="service-text">
                        <h3 className="h2">Web Application Development</h3>
                        <p>We build dynamic, high-performance web applications tailored to your business needs using Laravel, PHP, and modern frontend technologies like React.js.
                        </p>
                    </div>
                </div>

                <div className="col-block service-item" data-aos="fade-up">
                    <div className="service-icon">
                        <i className="icon-earth"></i>
                    </div>
                    <div className="service-text">
                        <h3 className="h2">API & Integration Services</h3>
                        <p>Design and development of robust, secure RESTful APIs, along with seamless integration of third-party APIs like payment gateways (Stripe, PayFast), tracking software, and messaging channels.
                        </p>
                    </div>
                </div>

                <div className="col-block service-item" data-aos="fade-up">
                    <div className="service-icon">
                        <i className="icon-database"></i>
                    </div>
                    <div className="service-text">
                        <h3 className="h2">Database Architecture</h3>
                        <p>Designing optimized relational databases with MySQL, ensuring data integrity, structuring complex schemas, and implementing caching systems for optimal load speeds.
                        </p>
                    </div>
                </div>

                <div className="col-block service-item" data-aos="fade-up">
                    <div className="service-icon"><i className="icon-gear"></i></div>
                    <div className="service-text">
                        <h3 className="h2">Maintenance & Support</h3>
                        <p>Providing proactive software maintenance, application enhancements, bug fixes, database optimizations, and system monitoring to keep portals stable and reliable.
                        </p>
                    </div>
                </div>

            </div>



        </section>
    );
};

export default Services;
