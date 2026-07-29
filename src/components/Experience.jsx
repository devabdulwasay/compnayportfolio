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
                                <h3 className="timeline__title">Mid-Level Software Developer</h3>
                                <h5 className="timeline__meta">Airsial</h5>
                                <p className="timeline__timeframe">October 2024 - Present</p>
                            </div>
                            <div className="timeline__desc">
                                <ul>
                                    <li>Managed and enhanced employee and HR portals to streamline internal workflows and improve user experience.</li>
                                    <li>Designed and implemented features to support human resource management processes, including employee onboarding and performance tracking.</li>
                                    <li>Collaborated with HR teams to align portal functionalities with organizational needs and compliance standards.</li>
                                    <li>Conducted regular maintenance and troubleshooting to ensure portal reliability and data integrity.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="timeline__block" data-aos="fade-up">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <h3 className="timeline__title">Laravel Developer</h3>
                                <h5 className="timeline__meta">Dot & Line</h5>
                                <p className="timeline__timeframe">June 2023 - September 2024</p>
                            </div>
                            <div className="timeline__desc">
                                <ul>
                                    <li>Developed and maintained scalable APIs.</li>
                                    <li>Collaborated with front-end developers to design and implement efficient and responsive server-side architecture.</li>
                                    <li>Strong understanding of database management systems, with expertise in MySQL.</li>
                                    <li>Analyzed and optimized database queries and implemented caching strategies to improve system performance.</li>
                                    <li>Initially joined with a focus on Laravel development, but expanded expertise to include React.js, enhancing skill set and versatility.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="timeline__block" data-aos="fade-up">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <h3 className="timeline__title">Laravel Developer</h3>
                                <h5 className="timeline__meta">TeamX Pakistan</h5>
                                <p className="timeline__timeframe">October 2022 - May 2023</p>
                            </div>
                            <div className="timeline__desc">
                                <ul>
                                    <li>Determined best approach for application code development, meeting customer’s current requirements and anticipated future enhancement needs.</li>
                                    <li>Worked closely with project managers and clients to obtain sign-off on functional specification.</li>
                                    <li>Conducted trial runs of programs and software applications, producing desired information and instructions.</li>
                                    <li>Created test plans and conducted unit testing for programming and integration assignments.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="timeline__block" data-aos="fade-up">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <h3 className="timeline__title">Laravel Developer</h3>
                                <h5 className="timeline__meta">Digital Consultants</h5>
                                <p className="timeline__timeframe">Aug 2020 - September 2022</p>
                            </div>
                            <div className="timeline__desc">
                                <ul>
                                    <li>Transformed client business requirements into full-stack solutions, integrating with existing systems and databases.</li>
                                    <li>Reviewed and implemented solutions for bugs and enhancements within software.</li>
                                    <li>Performed revision and repair of existing programs, increasing operating efficiency or adapting to new requirements.</li>
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
