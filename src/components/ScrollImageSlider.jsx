import React, { useState, useEffect, useRef } from 'react';

const ScrollImageSlider = ({ images, scrollDuration = 4000, pauseDuration = 1500 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [translateY, setTranslateY] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const sliderRef = useRef(null);
    const imageRefs = useRef([]);

    useEffect(() => {
        let timeouts = [];
        let rAF = null;

        // Reset state for the new slide immediately
        setTranslateY(0);
        setIsAnimating(false);

        const runAnimationSequence = () => {
            const currentImg = imageRefs.current[currentIndex];
            const sliderContainer = sliderRef.current;

            if (currentImg && sliderContainer) {
                // Ensure image is loaded before calculating
                if (!currentImg.complete || currentImg.naturalHeight === 0) {
                    timeouts.push(setTimeout(runAnimationSequence, 100));
                    return;
                }

                const imgHeight = currentImg.offsetHeight;
                const containerHeight = sliderContainer.offsetHeight;

                // Only scroll if image is taller than container
                if (imgHeight > containerHeight) {
                    // Pause at top
                    timeouts.push(setTimeout(() => {
                        setIsAnimating(true);
                        const target = -(imgHeight - containerHeight);
                        setTranslateY(target);

                        // Wait for scroll to complete + pause at bottom
                        timeouts.push(setTimeout(() => {
                            // Move to next slide
                            setCurrentIndex((prev) => (prev + 1) % images.length);
                        }, scrollDuration + pauseDuration));

                    }, pauseDuration));
                } else {
                    // If image fits, just wait and switch
                    timeouts.push(setTimeout(() => {
                        setCurrentIndex((prev) => (prev + 1) % images.length);
                    }, pauseDuration * 2)); // Some generic delay
                }
            }
        };

        // Start the sequence
        timeouts.push(setTimeout(runAnimationSequence, 100));

        return () => {
            timeouts.forEach(clearTimeout);
            if (rAF) cancelAnimationFrame(rAF);
        };
    }, [currentIndex, images.length, scrollDuration, pauseDuration]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
        // Effect will handle the rest
    };

    return (
        <div className="scroll-image-slider" ref={sliderRef}>
            <div
                className="scroll-slider-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((img, index) => (
                    <div className="scroll-slider-item" key={index}>
                        <img
                            src={img}
                            alt={`Project Screenshot ${index + 1}`}
                            className="scroll-slider-img"
                            loading="lazy"
                            decoding="async"
                            ref={el => imageRefs.current[index] = el}
                            style={{
                                transform: index === currentIndex ? `translateY(${translateY}px)` : 'translateY(0px)',
                                transition: index === currentIndex && isAnimating
                                    ? `transform ${scrollDuration}ms linear`
                                    : 'transform 0s'
                            }}
                        />
                    </div>
                ))}
            </div>

            <div className="scroll-slider-dots">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`scroll-slider-dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ScrollImageSlider;
