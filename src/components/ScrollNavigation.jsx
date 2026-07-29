import React from 'react';

const ScrollNavigation = ({ prevSection, nextSection }) => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <>
            {nextSection && (
                <div className="section-scroll section-scroll--down">
                    <a
                        href={`#${nextSection}`}
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(nextSection);
                        }}
                        className="scroll-link"
                    >
                        <span>Scroll Down</span>
                    </a>
                </div>
            )}
            {prevSection && (
                <div className="section-scroll section-scroll--up">
                    <a
                        href={`#${prevSection}`}
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(prevSection);
                        }}
                        className="scroll-link"
                    >
                        <span>Scroll Up</span>
                    </a>
                </div>
            )}
            {(nextSection || prevSection) && <div className="section-scroll__line"></div>}
        </>
    );
};

export default ScrollNavigation;
