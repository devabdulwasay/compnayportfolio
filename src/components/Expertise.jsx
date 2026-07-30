import React from 'react';

const Expertise = () => {
    return (
        <section id="expertise" className="s-services" style={{ backgroundColor: "#151515", padding: "12rem 0 10rem 0", borderBottom: "1px solid #1a1a1a" }}>
            <div className="row section-header" data-aos="fade-up">
                <div className="col-full">
                    <h3 className="subhead">Our Expertise</h3>
                    <h1 className="display-2 display-2--light" style={{ color: "#ffffff" }}>Technologies We Work With</h1>
                </div>
            </div>

            <div className="row services-list block-1-2 block-tab-full block-mob-full" data-aos="fade-up">

                {/* Card 1 */}
                <div className="col-block service-item">
                    <div className="service-icon">
                        <i className="icon-paint-brush"></i>
                    </div>
                    <div className="service-text">
                        <h3 className="h2">💻 Frontend Development</h3>
                        <p style={{ fontSize: "1.6rem", color: "#888888" }}>
                            React, Vue, HTML5, CSS3, Tailwind CSS
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-block service-item">
                    <div className="service-icon">
                        <i className="icon-gear"></i>
                    </div>
                    <div className="service-text">
                        <h3 className="h2">⚙️ Backend Development</h3>
                        <p style={{ fontSize: "1.6rem", color: "#888888" }}>
                            Laravel, PHP, Node.js, Express
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="col-block service-item">
                    <div className="service-icon">
                        <i className="icon-database"></i>
                    </div>
                    <div className="service-text">
                        <h3 className="h2">🗄️ Database</h3>
                        <p style={{ fontSize: "1.6rem", color: "#888888" }}>
                            MySQL, PostgreSQL, MongoDB
                        </p>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="col-block service-item">
                    <div className="service-icon">
                        <i className="icon-earth"></i>
                    </div>
                    <div className="service-text">
                        <h3 className="h2">☁️ Cloud & Hosting</h3>
                        <p style={{ fontSize: "1.6rem", color: "#888888" }}>
                            AWS, DigitalOcean, cPanel, Linux
                        </p>
                    </div>
                </div>

                {/* Card 5 */}
                <div className="col-block service-item">
                    <div className="service-icon">
                        <i className="icon-window"></i>
                    </div>
                    <div className="service-text">
                        <h3 className="h2">📦 CMS</h3>
                        <p style={{ fontSize: "1.6rem", color: "#888888" }}>
                            WordPress, Shopify
                        </p>
                    </div>
                </div>

                {/* Card 6 */}
                <div className="col-block service-item">
                    <div className="service-icon">
                        <i className="icon-group"></i>
                    </div>
                    <div className="service-text">
                        <h3 className="h2">📈 Marketing Tools</h3>
                        <p style={{ fontSize: "1.6rem", color: "#888888" }}>
                            Google Ads, Meta Ads, Analytics
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Expertise;
