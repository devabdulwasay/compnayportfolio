import React from 'react';

const Process = () => {
    return (
        <section id="process" className="s-process target-section" style={{ backgroundColor: "#151515", padding: "12rem 0 10rem 0", borderBottom: "1px solid #1a1a1a" }}>
            <div className="row section-header" data-aos="fade-up">
                <div className="col-full">
                    <h3 className="subhead">Our Process</h3>
                    <h1 className="display-1 display-1--light" style={{ color: "#ffffff" }}>How We Work</h1>
                </div>
            </div>

            <div className="row process block-1-5 block-m-1-3 block-mob-full" data-aos="fade-up" style={{ marginTop: "6rem" }}>
                <div className="col-block process__col" style={{ position: "relative", marginBottom: "3rem" }}>
                    <div className="process__number" style={{ fontSize: "4.8rem", fontWeight: 700, color: "#39b54a", lineHeight: 1 }}>01</div>
                    <h4 style={{ color: "#ffffff", marginTop: "1.5rem", fontSize: "1.8rem" }}>Discovery & Consultation</h4>
                    <p style={{ color: "#888888", fontSize: "1.4rem", lineHeight: "1.8" }}>Understand your goals and business requirements.</p>
                </div>
                <div className="col-block process__col" style={{ position: "relative", marginBottom: "3rem" }}>
                    <div className="process__number" style={{ fontSize: "4.8rem", fontWeight: 700, color: "#39b54a", lineHeight: 1 }}>02</div>
                    <h4 style={{ color: "#ffffff", marginTop: "1.5rem", fontSize: "1.8rem" }}>Planning & Strategy</h4>
                    <p style={{ color: "#888888", fontSize: "1.4rem", lineHeight: "1.8" }}>Create a roadmap for design, development, and marketing.</p>
                </div>
                <div className="col-block process__col" style={{ position: "relative", marginBottom: "3rem" }}>
                    <div className="process__number" style={{ fontSize: "4.8rem", fontWeight: 700, color: "#39b54a", lineHeight: 1 }}>03</div>
                    <h4 style={{ color: "#ffffff", marginTop: "1.5rem", fontSize: "1.8rem" }}>Design & Development</h4>
                    <p style={{ color: "#888888", fontSize: "1.4rem", lineHeight: "1.8" }}>Build responsive, scalable, and user-friendly solutions.</p>
                </div>
                <div className="col-block process__col" style={{ position: "relative", marginBottom: "3rem" }}>
                    <div className="process__number" style={{ fontSize: "4.8rem", fontWeight: 700, color: "#39b54a", lineHeight: 1 }}>04</div>
                    <h4 style={{ color: "#ffffff", marginTop: "1.5rem", fontSize: "1.8rem" }}>Testing & Launch</h4>
                    <p style={{ color: "#888888", fontSize: "1.4rem", lineHeight: "1.8" }}>Ensure everything works perfectly before going live.</p>
                </div>
                <div className="col-block process__col" style={{ position: "relative", marginBottom: "3rem" }}>
                    <div className="process__number" style={{ fontSize: "4.8rem", fontWeight: 700, color: "#39b54a", lineHeight: 1 }}>05</div>
                    <h4 style={{ color: "#ffffff", marginTop: "1.5rem", fontSize: "1.8rem" }}>Support & Growth</h4>
                    <p style={{ color: "#888888", fontSize: "1.4rem", lineHeight: "1.8" }}>Maintain, improve, and grow your digital presence.</p>
                </div>
            </div>
        </section>
    );
};

export default Process;
