import React from 'react';

const Stats = () => {
    return (
        <section id="stats" className="s-stats target-section" style={{ backgroundColor: "#111111", padding: "12rem 0 10rem 0", borderBottom: "1px solid #1a1a1a" }}>
            <div className="row section-header" data-aos="fade-up">
                <div className="col-full">
                    <h3 className="subhead subhead--dark">Our Results</h3>
                    <h1 className="display-1 display-1--light" style={{ color: "#ffffff" }}>Trusted by Businesses</h1>
                </div>
            </div>

            <div className="row stats block-1-6 block-m-1-3 block-mob-1-2" data-aos="fade-up" style={{ textAlign: "center", marginTop: "6rem" }}>
                <div className="col-block stats__col">
                    <div className="stats__count" style={{ color: "#39b54a", fontSize: "6.4rem", fontWeight: 700, lineHeight: 1 }}>100+</div>
                    <h5 style={{ color: "#ffffff", fontSize: "1.2rem", letterSpacing: "0.2rem", textTransform: "uppercase", marginTop: "1.5rem" }}>Projects Completed</h5>
                </div>
                <div className="col-block stats__col">
                    <div className="stats__count" style={{ color: "#39b54a", fontSize: "6.4rem", fontWeight: 700, lineHeight: 1 }}>50+</div>
                    <h5 style={{ color: "#ffffff", fontSize: "1.2rem", letterSpacing: "0.2rem", textTransform: "uppercase", marginTop: "1.5rem" }}>Happy Clients</h5>
                </div>
                <div className="col-block stats__col">
                    <div className="stats__count" style={{ color: "#39b54a", fontSize: "6.4rem", fontWeight: 700, lineHeight: 1 }}>5+</div>
                    <h5 style={{ color: "#ffffff", fontSize: "1.2rem", letterSpacing: "0.2rem", textTransform: "uppercase", marginTop: "1.5rem" }}>Years Experience</h5>
                </div>
                <div className="col-block stats__col">
                    <div className="stats__count" style={{ color: "#39b54a", fontSize: "6.4rem", fontWeight: 700, lineHeight: 1 }}>24/7</div>
                    <h5 style={{ color: "#ffffff", fontSize: "1.2rem", letterSpacing: "0.2rem", textTransform: "uppercase", marginTop: "1.5rem" }}>Technical Support</h5>
                </div>
                <div className="col-block stats__col">
                    <div className="stats__count" style={{ color: "#39b54a", fontSize: "6.4rem", fontWeight: 700, lineHeight: 1 }}>98%</div>
                    <h5 style={{ color: "#ffffff", fontSize: "1.2rem", letterSpacing: "0.2rem", textTransform: "uppercase", marginTop: "1.5rem" }}>Client Satisfaction</h5>
                </div>
                <div className="col-block stats__col">
                    <div className="stats__count" style={{ color: "#39b54a", fontSize: "6.4rem", fontWeight: 700, lineHeight: 1 }}>15+</div>
                    <h5 style={{ color: "#ffffff", fontSize: "1.2rem", letterSpacing: "0.2rem", textTransform: "uppercase", marginTop: "1.5rem" }}>Tech Specialties</h5>
                </div>
            </div>
        </section>
    );
};

export default Stats;
