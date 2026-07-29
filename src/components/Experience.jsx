import React from 'react';

const Experience = () => {
    return (
        <section id='experience' className="s-experience">

            <div className="intro-wrap">
                <div className="row section-header has-bottom-sep light-sep" data-aos="fade-up">
                    <div className="col-full">
                        <h3 className="subhead">Our Track Record</h3>
                        <h1 className="display-2 display-2--light">Professional Experience</h1>
                    </div>
                </div>
            </div>

            <div className="row experience-content">
                <div className="col-full">

                    <div className="timeline">

                        <div className="timeline__block" data-aos="fade-up">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <h3 className="timeline__title">Enterprise Portal Engineering</h3>
                                <h5 className="timeline__meta">Airsial</h5>
                                <p className="timeline__timeframe">October 2024 - Present</p>
                            </div>
                            <div className="timeline__desc">
                                <ul>
                                    <li>Successfully managed and enhanced enterprise-level employee and HR portals to streamline internal workflows and improve user experience.</li>
                                    <li>Designed and implemented features to support automated human resource management processes, including onboarding and performance tracking.</li>
                                    <li>Collaborated with corporate teams to align portal functionalities with organizational needs and strict compliance standards.</li>
                                    <li>Conducted routine maintenance and proactive troubleshooting to ensure portal reliability and data integrity.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="timeline__block" data-aos="fade-up">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <h3 className="timeline__title">API & Backend Infrastructure</h3>
                                <h5 className="timeline__meta">Dot & Line</h5>
                                <p className="timeline__timeframe">June 2023 - September 2024</p>
                            </div>
                            <div className="timeline__desc">
                                <ul>
                                    <li>Developed, optimized, and maintained highly scalable backend APIs for dynamic web platforms.</li>
                                    <li>Partnered with frontend development teams to design and implement efficient, responsive server-side architecture.</li>
                                    <li>Designed relational database schemas with expert utilization of MySQL.</li>
                                    <li>Analyzed database queries, implemented advanced caching strategies, and improved overall system performance.</li>
                                    <li>Expanded technical stack integrations to include React.js, enhancing versatility in full-stack project deliveries.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="timeline__block" data-aos="fade-up">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <h3 className="timeline__title">Custom Application Development</h3>
                                <h5 className="timeline__meta">TeamX Pakistan</h5>
                                <p className="timeline__timeframe">October 2022 - May 2023</p>
                            </div>
                            <div className="timeline__desc">
                                <ul>
                                    <li>Determined best architectural patterns for application code development, meeting short-term requirements and facilitating future scaling.</li>
                                    <li>Collaborated with product managers and client representatives to finalize project functional specifications.</li>
                                    <li>Executed thorough testing and trial runs of programs to verify software stability and instruct user operations.</li>
                                    <li>Authored test cases and conducted unit testing for programming and system integration assignments.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="timeline__block" data-aos="fade-up">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <h3 className="timeline__title">Full-Stack Software Development</h3>
                                <h5 className="timeline__meta">Digital Consultants</h5>
                                <p className="timeline__timeframe">August 2020 - September 2022</p>
                            </div>
                            <div className="timeline__desc">
                                <ul>
                                    <li>Transformed client business requirements into stable full-stack solutions, integrating with existing systems and databases.</li>
                                    <li>Reviewed, diagnosed, and resolved application bugs and developed performance enhancements.</li>
                                    <li>Performed refactoring and optimizations of legacy programs, increasing operating efficiency and adaptability.</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </section>
    );
};

export default Experience;
