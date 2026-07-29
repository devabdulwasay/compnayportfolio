import React from 'react';
import ScrollNavigation from './ScrollNavigation';

const Education = () => {
    return (
        <section id='education' className="s-education">

            <div className="intro-wrap">
                <div className="row section-header has-bottom-sep light-sep" data-aos="fade-up">
                    <div className="col-full">
                        <h3 className="subhead">Our Foundation</h3>
                        <h1 className="display-2 display-2--light">Academic Credentials</h1>
                    </div>
                </div>
            </div>

            <div className="row education-content">
                <div className="col-full">

                    <div className="timeline">

                        <div className="timeline__block" data-aos="fade-up">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <h3 className="timeline__title">Master of Science in Cyber Security</h3>
                                <h5 className="timeline__meta">National University of Sciences and Technology (NUST)</h5>
                                <p className="timeline__timeframe">Ongoing</p>
                            </div>
                            <div className="timeline__desc">
                                <p>Pursuing advanced studies in cybersecurity, focusing on network security, cryptography, ethical hacking, and secure software development practices.</p>
                            </div>
                        </div>

                        <div className="timeline__block" data-aos="fade-up">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <h3 className="timeline__title">Bachelor of Science in Computer Science</h3>
                                <h5 className="timeline__meta">Federal Urdu University of Arts, Sciences & Technology</h5>
                                <p className="timeline__timeframe">January 2019 - April 2023</p>
                            </div>
                            <div className="timeline__desc">
                                <p>Completed comprehensive studies in computer science fundamentals, software engineering, database systems, and web development technologies.</p>
                            </div>
                        </div>

                        <div className="timeline__block" data-aos="fade-up">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <h3 className="timeline__title">Intermediate in Computer Science</h3>
                                <h5 className="timeline__meta">Govt. Degree College Malir Cantt</h5>
                                <p className="timeline__timeframe">October 2016 - September 2018</p>
                            </div>
                            <div className="timeline__desc">
                                <p>Studied computer science fundamentals, mathematics, and programming basics, building a strong foundation for higher education.</p>
                            </div>
                        </div>

                        <div className="timeline__block" data-aos="fade-up">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <h3 className="timeline__title">Matriculation</h3>
                                <h5 className="timeline__meta">CAA Model School and College</h5>
                                <p className="timeline__timeframe">January 2014 - May 2016</p>
                            </div>
                            <div className="timeline__desc">
                                <p>Completed secondary education with a focus on science subjects, laying the groundwork for a career in technology.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>



        </section>
    );
};

export default Education;
