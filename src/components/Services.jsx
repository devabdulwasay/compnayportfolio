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
                        <i className="icon-group"></i>
                    </div>
                    <div className="service-text">
                        <h3 className="h2">Backend Development</h3>
                        <p>Specialists in building scalable server-side applications using PHP and Laravel. Proficient in MVC architecture, Eloquent ORM, secure authentication, and implementing complex business logic to drive modern web solutions.
                        </p>
                    </div>
                </div>

                <div className="col-block service-item" data-aos="fade-up">
                    <div className="service-icon">
                        <i className="icon-paint-brush"></i>
                    </div>
                    <div className="service-text">
                        <h3 className="h2">Frontend Development</h3>
                        <p>Expertise in creating responsive and dynamic user interfaces using React.js, HTML5, and CSS3. Focused on delivering seamless user experiences with modern component-based architecture and clean, maintainable code.
                        </p>
                    </div>
                </div>

                <div className="col-block service-item" data-aos="fade-up">
                    <div className="service-icon">
                        <i className="icon-cube"></i>
                    </div>
                    <div className="service-text">
                        <h3 className="h2">Database Management</h3>
                        <p>Deep expertise in database management systems with specialization in MySQL. Skilled in designing efficient database schemas, writing optimized queries, and implementing caching strategies to improve system performance.
                        </p>
                    </div>
                </div>

                <div className="col-block service-item" data-aos="fade-up">
                    <div className="service-icon"><i className="icon-lego-block"></i></div>
                    <div className="service-text">
                        <h3 className="h2">Git Version Control</h3>
                        <p>Robust version control workflows using Git and GitHub. Skilled in collaborative development, maintaining clean commit history, and ensuring code integrity for seamless project management.
                        </p>
                    </div>
                </div>

            </div>



        </section>
    );
};

export default Services;
