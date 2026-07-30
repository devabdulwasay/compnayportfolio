import React from 'react';

const Stats = () => {
    return (
        <section id="stats" className="s-experience target-section" style={{ marginBottom: "8rem" }}>
            <div className="intro-wrap">
                <div className="row section-header has-bottom-sep light-sep" data-aos="fade-up">
                    <div className="col-full">
                        <h3 className="subhead">Our Results</h3>
                        <h1 className="display-2 display-2--light">Trusted by Businesses</h1>
                    </div>
                </div>
            </div>

            <div className="row experience-content" style={{ marginTop: "-8rem", backgroundColor: "#ffffff", padding: "8rem 4rem", borderRadius: "8px", boxShadow: "0 10px 40px rgba(0,0,0,0.08)", position: "relative", zIndex: 2 }}>
                <div className="col-full">
                    <div className="row stats block-1-6 block-m-1-3 block-mob-1-2" data-aos="fade-up" style={{ textAlign: "center" }}>
                        <div className="col-block stats__col" style={{ borderRight: "1px solid #f0f0f0" }}>
                            <div className="stats__count" style={{ color: "#39b54a", fontSize: "5.4rem", fontWeight: 700, lineHeight: 1 }}>100+</div>
                            <h5 style={{ color: "#111111", fontSize: "1.2rem", letterSpacing: "0.2rem", textTransform: "uppercase", marginTop: "1.5rem" }}>Projects Completed</h5>
                        </div>
                        <div className="col-block stats__col" style={{ borderRight: "1px solid #f0f0f0" }}>
                            <div className="stats__count" style={{ color: "#39b54a", fontSize: "5.4rem", fontWeight: 700, lineHeight: 1 }}>50+</div>
                            <h5 style={{ color: "#111111", fontSize: "1.2rem", letterSpacing: "0.2rem", textTransform: "uppercase", marginTop: "1.5rem" }}>Happy Clients</h5>
                        </div>
                        <div className="col-block stats__col" style={{ borderRight: "1px solid #f0f0f0" }}>
                            <div className="stats__count" style={{ color: "#39b54a", fontSize: "5.4rem", fontWeight: 700, lineHeight: 1 }}>5+</div>
                            <h5 style={{ color: "#111111", fontSize: "1.2rem", letterSpacing: "0.2rem", textTransform: "uppercase", marginTop: "1.5rem" }}>Years Experience</h5>
                        </div>
                        <div className="col-block stats__col" style={{ borderRight: "1px solid #f0f0f0" }}>
                            <div className="stats__count" style={{ color: "#39b54a", fontSize: "5.4rem", fontWeight: 700, lineHeight: 1 }}>24/7</div>
                            <h5 style={{ color: "#111111", fontSize: "1.2rem", letterSpacing: "0.2rem", textTransform: "uppercase", marginTop: "1.5rem" }}>Technical Support</h5>
                        </div>
                        <div className="col-block stats__col" style={{ borderRight: "1px solid #f0f0f0" }}>
                            <div className="stats__count" style={{ color: "#39b54a", fontSize: "5.4rem", fontWeight: 700, lineHeight: 1 }}>98%</div>
                            <h5 style={{ color: "#111111", fontSize: "1.2rem", letterSpacing: "0.2rem", textTransform: "uppercase", marginTop: "1.5rem" }}>Client Satisfaction</h5>
                        </div>
                        <div className="col-block stats__col" style={{ borderRight: "none" }}>
                            <div className="stats__count" style={{ color: "#39b54a", fontSize: "5.4rem", fontWeight: 700, lineHeight: 1 }}>15+</div>
                            <h5 style={{ color: "#111111", fontSize: "1.2rem", letterSpacing: "0.2rem", textTransform: "uppercase", marginTop: "1.5rem" }}>Tech Specialties</h5>
                        </div>
                    </div>
                </div>
            </div>
            
            <style dangerouslySetInnerHTML={{__html: `
                @media only screen and (max-width: 1200px) {
                    .stats__col:nth-child(n) {
                        border-right: none !important;
                    }
                }
            `}} />
        </section>
    );
};

export default Stats;
