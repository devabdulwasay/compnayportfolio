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
                        <i className="icon-earth"></i>
                    </div>
                    <div className="service-text">
                        <h3 className="h2">🌐 Web Development</h3>
                        <p>We build fast, secure, and scalable websites tailored to your business goals. From custom web applications to e-commerce platforms, our solutions are designed for performance, reliability, and future growth.
                        </p>
                    </div>
                </div>

                <div className="col-block service-item" data-aos="fade-up">
                    <div className="service-icon">
                        <i className="icon-paint-brush"></i>
                    </div>
                    <div className="service-text">
                        <h3 className="h2">🎨 Web Design & UI/UX</h3>
                        <p>Our team creates modern, responsive, and user-friendly designs that leave a lasting impression. We focus on intuitive user experiences that increase engagement and turn visitors into customers.
                        </p>
                    </div>
                </div>

                <div className="col-block service-item" data-aos="fade-up">
                    <div className="service-icon">
                        <i className="icon-settings"></i>
                    </div>
                    <div className="service-text">
                        <h3 className="h2">⚙️ Software Management</h3>
                        <p>Keep your software running smoothly with our comprehensive management services. We handle updates, maintenance, performance optimization, and ongoing technical support so you can focus on your business.
                        </p>
                    </div>
                </div>

                <div className="col-block service-item" data-aos="fade-up">
                    <div className="service-icon">
                        <i className="icon-group"></i>
                    </div>
                    <div className="service-text">
                        <h3 className="h2">📱 Social Media Marketing</h3>
                        <p>Strengthen your online presence with strategic social media marketing. We create engaging content, manage campaigns, and help your brand reach the right audience to generate meaningful results.
                        </p>
                    </div>
                </div>

                <div className="col-block service-item" data-aos="fade-up">
                    <div className="service-icon">
                        <i className="icon-globe"></i>
                    </div>
                    <div className="service-text">
                        <h3 className="h2">🚀 SEO & Digital Marketing</h3>
                        <p>Increase your visibility and attract more customers through effective SEO and digital marketing strategies. We optimize your online presence to improve search rankings, drive traffic, and boost conversions.
                        </p>
                    </div>
                </div>

                <div className="col-block service-item" data-aos="fade-up">
                    <div className="service-icon">
                        <i className="icon-database"></i>
                    </div>
                    <div className="service-text">
                        <h3 className="h2">☁️ Website Maintenance & Hosting</h3>
                        <p>Ensure your website remains secure, fast, and always available with our maintenance and hosting services. We provide regular updates, backups, security monitoring, and reliable hosting for uninterrupted performance.
                        </p>
                    </div>
                </div>

            </div>



        </section>
    );
};

export default Services;
