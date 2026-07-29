import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="image-slider">
            <div className="slider-container">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`slider-slide ${index === currentIndex ? 'active' : ''}`}
                        style={{
                            backgroundImage: `url(${image})`,
                            display: index === currentIndex ? 'block' : 'none'
                        }}
                    />
                ))}
            </div>
            <div className="slider-dots">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
