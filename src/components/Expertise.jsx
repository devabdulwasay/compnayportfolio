import React from 'react';

const Expertise = () => {
    return (
        <section id="expertise" className="s-expertise target-section" style={{ backgroundColor: "#151515", padding: "12rem 0 10rem 0", borderBottom: "1px solid #1a1a1a" }}>
            <div className="row section-header" data-aos="fade-up">
                <div className="col-full">
                    <h3 className="subhead">Our Expertise</h3>
                    <h1 className="display-1 display-1--light" style={{ color: "#ffffff" }}>Technologies We Work With</h1>
                </div>
            </div>

            <div className="row expertise-cards block-1-3 block-m-1-2 block-mob-full" data-aos="fade-up" style={{ marginTop: "6rem" }}>
                
                {/* Card 1 */}
                <div className="col-block" style={{ marginBottom: "4rem" }}>
                    <div style={{ background: "#111111", padding: "4rem 3.5rem", borderRadius: "8px", border: "1px solid #222222", height: "100%", transition: "all 0.3s ease", boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }} className="expertise-card">
                        <h4 style={{ color: "#ffffff", fontSize: "2rem", marginBottom: "1.5rem", display: "flex", alignItems: "center" }}>
                            <span style={{ color: "#39b54a", marginRight: "1.2rem", fontSize: "2.4rem" }}>💻</span> Frontend Development
                        </h4>
                        <p style={{ color: "#888888", fontSize: "1.5rem", lineHeight: "1.8", margin: 0 }}>
                            React, Vue, HTML5, CSS3, Tailwind CSS
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-block" style={{ marginBottom: "4rem" }}>
                    <div style={{ background: "#111111", padding: "4rem 3.5rem", borderRadius: "8px", border: "1px solid #222222", height: "100%", transition: "all 0.3s ease", boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }} className="expertise-card">
                        <h4 style={{ color: "#ffffff", fontSize: "2rem", marginBottom: "1.5rem", display: "flex", alignItems: "center" }}>
                            <span style={{ color: "#39b54a", marginRight: "1.2rem", fontSize: "2.4rem" }}>⚙️</span> Backend Development
                        </h4>
                        <p style={{ color: "#888888", fontSize: "1.5rem", lineHeight: "1.8", margin: 0 }}>
                            Laravel, PHP, Node.js, Express
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="col-block" style={{ marginBottom: "4rem" }}>
                    <div style={{ background: "#111111", padding: "4rem 3.5rem", borderRadius: "8px", border: "1px solid #222222", height: "100%", transition: "all 0.3s ease", boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }} className="expertise-card">
                        <h4 style={{ color: "#ffffff", fontSize: "2rem", marginBottom: "1.5rem", display: "flex", alignItems: "center" }}>
                            <span style={{ color: "#39b54a", marginRight: "1.2rem", fontSize: "2.4rem" }}>🗄️</span> Database
                        </h4>
                        <p style={{ color: "#888888", fontSize: "1.5rem", lineHeight: "1.8", margin: 0 }}>
                            MySQL, PostgreSQL, MongoDB
                        </p>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="col-block" style={{ marginBottom: "4rem" }}>
                    <div style={{ background: "#111111", padding: "4rem 3.5rem", borderRadius: "8px", border: "1px solid #222222", height: "100%", transition: "all 0.3s ease", boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }} className="expertise-card">
                        <h4 style={{ color: "#ffffff", fontSize: "2rem", marginBottom: "1.5rem", display: "flex", alignItems: "center" }}>
                            <span style={{ color: "#39b54a", marginRight: "1.2rem", fontSize: "2.4rem" }}>☁️</span> Cloud & Hosting
                        </h4>
                        <p style={{ color: "#888888", fontSize: "1.5rem", lineHeight: "1.8", margin: 0 }}>
                            AWS, DigitalOcean, cPanel, Linux
                        </p>
                    </div>
                </div>

                {/* Card 5 */}
                <div className="col-block" style={{ marginBottom: "4rem" }}>
                    <div style={{ background: "#111111", padding: "4rem 3.5rem", borderRadius: "8px", border: "1px solid #222222", height: "100%", transition: "all 0.3s ease", boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }} className="expertise-card">
                        <h4 style={{ color: "#ffffff", fontSize: "2rem", marginBottom: "1.5rem", display: "flex", alignItems: "center" }}>
                            <span style={{ color: "#39b54a", marginRight: "1.2rem", fontSize: "2.4rem" }}>📦</span> CMS
                        </h4>
                        <p style={{ color: "#888888", fontSize: "1.5rem", lineHeight: "1.8", margin: 0 }}>
                            WordPress, Shopify
                        </p>
                    </div>
                </div>

                {/* Card 6 */}
                <div className="col-block" style={{ marginBottom: "4rem" }}>
                    <div style={{ background: "#111111", padding: "4rem 3.5rem", borderRadius: "8px", border: "1px solid #222222", height: "100%", transition: "all 0.3s ease", boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }} className="expertise-card">
                        <h4 style={{ color: "#ffffff", fontSize: "2rem", marginBottom: "1.5rem", display: "flex", alignItems: "center" }}>
                            <span style={{ color: "#39b54a", marginRight: "1.2rem", fontSize: "2.4rem" }}>📈</span> Marketing Tools
                        </h4>
                        <p style={{ color: "#888888", fontSize: "1.5rem", lineHeight: "1.8", margin: 0 }}>
                            Google Ads, Meta Ads, Analytics
                        </p>
                    </div>
                </div>

            </div>

            <style dangerouslySetInnerHTML={{__html: `
                .expertise-card:hover {
                    border-color: #39b54a !important;
                    transform: translateY(-5px);
                    box-shadow: 0 15px 40px rgba(57, 181, 74, 0.15) !important;
                }
            `}} />
        </section>
    );
};

export default Expertise;
