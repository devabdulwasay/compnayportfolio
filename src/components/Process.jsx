import React from 'react';

const Process = () => {
    return (
        <section id="process" className="s-experience target-section" style={{ marginBottom: "8rem" }}>
            
            <div className="intro-wrap">
                <div className="row section-header has-bottom-sep light-sep" data-aos="fade-up">
                    <div className="col-full">
                        <h3 className="subhead">Our Process</h3>
                        <h1 className="display-2 display-2--light">How We Work</h1>
                    </div>
                </div>
            </div>

            <div className="row experience-content" style={{ marginTop: "-8rem", backgroundColor: "#ffffff", padding: "14rem 4rem 6rem 4rem", borderRadius: "8px", boxShadow: "0 10px 40px rgba(0,0,0,0.08)", position: "relative", zIndex: 2 }}>
                <div className="col-full">
                        
                    <style dangerouslySetInnerHTML={{__html: `
                        .process-container {
                            position: relative;
                            padding: 2rem 0;
                        }
                        
                        /* Desktop Wavy Timeline */
                        @media (min-width: 1024px) {
                            .process-container {
                                min-height: 300px;
                            }
                            
                            .wavy-timeline {
                                position: relative;
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                width: 100%;
                                padding: 0 30px;
                            }
                            
                            /* The background SVG path connector */
                            .wavy-line-svg {
                                position: absolute;
                                top: 50%;
                                left: 0;
                                width: 100%;
                                height: 120px;
                                transform: translateY(-50%);
                                z-index: 1;
                                pointer-events: none;
                            }
                            
                            .process-step {
                                position: relative;
                                width: 18%;
                                z-index: 2;
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                text-align: center;
                                transition: all 0.3s ease;
                            }
                            
                            /* Alternating positions: Odd steps go UP, Even steps go DOWN */
                            .process-step.step-odd {
                                transform: translateY(-70px);
                            }
                            
                            .process-step.step-even {
                                transform: translateY(70px);
                            }
                            
                            .step-node {
                                position: relative;
                                width: 60px;
                                height: 60px;
                                background: #ffffff;
                                border: 3px solid #39b54a;
                                border-radius: 50%;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                font-weight: 700;
                                font-size: 1.8rem;
                                color: #39b54a;
                                box-shadow: 0 0 20px rgba(57, 181, 74, 0.15);
                                cursor: pointer;
                                transition: all 0.3s ease;
                                margin: 15px 0;
                            }
                            
                            .process-step:hover .step-node {
                                background: #39b54a;
                                color: #ffffff;
                                box-shadow: 0 0 30px rgba(57, 181, 74, 0.4);
                                transform: scale(1.15);
                            }
                            
                            .step-content {
                                position: absolute;
                                width: 240px;
                            }
                            
                            .step-odd .step-content {
                                bottom: 80px; /* Above the node */
                            }
                            
                            .step-even .step-content {
                                top: 40px; /* Below the node */
                            }
                        }
                        
                        /* Mobile / Tablet Vertical Timeline */
                        @media (max-width: 1023px) {
                            .wavy-line-svg {
                                display: none;
                            }
                            
                            .wavy-timeline {
                                position: relative;
                                display: flex;
                                flex-direction: column;
                                padding-left: 40px;
                                border-left: 2px dashed #dddddd;
                                margin-left: 20px;
                            }
                            
                            .process-step {
                                position: relative;
                                margin-bottom: 5rem;
                                text-align: left;
                            }
                            
                            .step-node {
                                position: absolute;
                                left: -61px;
                                top: 0;
                                width: 40px;
                                height: 40px;
                                background: #ffffff;
                                border: 2px solid #39b54a;
                                border-radius: 50%;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                font-weight: 700;
                                font-size: 1.4rem;
                                color: #39b54a;
                                z-index: 2;
                            }
                            
                            .step-content {
                                padding-left: 10px;
                            }
                        }
                        
                        /* Typography Styling */
                        .step-title {
                            font-size: 1.8rem;
                            color: #111111;
                            margin-bottom: 0.8rem;
                            font-weight: 600;
                        }
                        
                        .step-desc {
                            font-size: 1.4rem;
                            color: #555555;
                            line-height: 1.6;
                            margin: 0;
                        }
                    `}} />

                    <div className="process-container">
                        <div className="wavy-timeline">
                            
                            {/* SVG Wavy Connecting Path for Desktop */}
                            <svg className="wavy-line-svg" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                                <path 
                                    d="M 50,60 C 150,0 200,120 300,60 C 400,0 450,120 550,60 C 650,0 700,120 800,60 C 900,0 950,120 1050,60 C 1150,0 1150,60 1150,60" 
                                    fill="transparent" 
                                    stroke="#e5e5e5" 
                                    strokeWidth="3" 
                                    strokeDasharray="6,6"
                                />
                                <path 
                                    d="M 50,60 C 150,0 200,120 300,60 C 400,0 450,120 550,60 C 650,0 700,120 800,60 C 900,0 950,120 1050,60 C 1150,0 1150,60 1150,60" 
                                    fill="transparent" 
                                    stroke="#39b54a" 
                                    strokeWidth="3" 
                                    strokeDasharray="6,6"
                                    strokeDashoffset="12"
                                    style={{ animation: "dash 15s linear infinite" }}
                                />
                            </svg>

                            {/* Step 1 */}
                            <div className="process-step step-odd">
                                <div className="step-node">01</div>
                                <div className="step-content">
                                    <h4 className="step-title">Discovery & Consultation</h4>
                                    <p className="step-desc">Understand your goals and business requirements.</p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="process-step step-even">
                                <div className="step-node">02</div>
                                <div className="step-content">
                                    <h4 className="step-title">Planning & Strategy</h4>
                                    <p className="step-desc">Create a roadmap for design, development, and marketing.</p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="process-step step-odd">
                                <div className="step-node">03</div>
                                <div className="step-content">
                                    <h4 className="step-title">Design & Development</h4>
                                    <p className="step-desc">Build responsive, scalable, and user-friendly solutions.</p>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="process-step step-even">
                                <div className="step-node">04</div>
                                <div className="step-content">
                                    <h4 className="step-title">Testing & Launch</h4>
                                    <p className="step-desc">Ensure everything works perfectly before going live.</p>
                                </div>
                            </div>

                            {/* Step 5 */}
                            <div className="process-step step-odd">
                                <div className="step-node">05</div>
                                <div className="step-content">
                                    <h4 className="step-title">Support & Growth</h4>
                                    <p className="step-desc">Maintain, improve, and grow your digital presence.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* CSS Animation Keyframes */}
                    <style dangerouslySetInnerHTML={{__html: `
                        @keyframes dash {
                            to {
                                stroke-dashoffset: -1000;
                            }
                        }
                    `}} />

                </div>
            </div>

        </section>
    );
};

export default Process;
