import React from 'react';
import ScrollNavigation from './ScrollNavigation';

const About = () => {
    return (
        <section id='about' className="s-about">

            <div className="row section-header has-bottom-sep" data-aos="fade-up">
                <div className="col-full">
                    <h3 className="subhead subhead--dark">About Us</h3>
                    <h1 className="display-1 display-1--light">Innovate Tech Solutions</h1>
                </div>
            </div>

            <div className="row about-desc" data-aos="fade-up">
                <div className="col-full">
                    <p>
                        We are a team of Laravel and PHP developers with extensive experience in designing and delivering dynamic, feature-rich web applications. We are proficient in integrating third-party services, implementing secure authentication mechanisms, and ensuring a seamless user experience. Skilled in full-stack development, we craft intuitive user interfaces using HTML, CSS, and JavaScript, while collaborating closely with our clients to achieve high-quality outcomes. We stay updated with emerging technologies to deliver innovative, scalable, and professional-grade solutions that consistently exceed expectations.
                    </p>
                </div>
            </div>

            <div className="about__line"></div>



        </section>
    );
};

export default About;
