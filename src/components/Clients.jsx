import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Clients = () => {
    const clientSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const testimonialSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false // Assuming testimonials usually don't have arrows or they might clash
    };

    return (
        <section id="clients" className="s-clients">

            <div className="row section-header" data-aos="fade-up">
                <div className="col-full">
                    <h3 className="subhead">Our Clients</h3>
                    <h1 className="display-2">Glint has been honored to
                        partner up with these clients</h1>
                </div>
            </div>

            <div className="row clients-outer" data-aos="fade-up">
                <div className="col-full">
                    <Slider {...clientSettings} className="clients">
                        <a href="#0" title="" className="clients__slide"><img src="images/clients/apple.png" alt="Apple" /></a>
                        <a href="#0" title="" className="clients__slide"><img src="images/clients/atom.png" alt="Atom" /></a>
                        <a href="#0" title="" className="clients__slide"><img src="images/clients/blackberry.png" alt="Blackberry" /></a>
                        <a href="#0" title="" className="clients__slide"><img src="images/clients/dropbox.png" alt="Dropbox" /></a>
                        <a href="#0" title="" className="clients__slide"><img src="images/clients/envato.png" alt="Envato" /></a>
                        <a href="#0" title="" className="clients__slide"><img src="images/clients/firefox.png" alt="Firefox" /></a>
                        <a href="#0" title="" className="clients__slide"><img src="images/clients/joomla.png" alt="Joomla" /></a>
                        <a href="#0" title="" className="clients__slide"><img src="images/clients/magento.png" alt="Magento" /></a>
                    </Slider>
                </div>
            </div>

            <div className="row clients-testimonials" data-aos="fade-up">
                <div className="col-full">
                    <Slider {...testimonialSettings} className="testimonials">
                        <div className="testimonials__slide">
                            <p>Qui ipsam temporibus quisquam vel. Maiores eos cumque distinctio nam accusantium ipsum.
                                Laudantium quia consequatur molestias delectus culpa facere hic dolores aperiam. Accusantium quos qui praesentium corpori.
                                Excepturi nam cupiditate culpa doloremque deleniti repellat.</p>
                            <img src="images/avatars/user-01.jpg" alt="Author image" className="testimonials__avatar" />
                            <div className="testimonials__info">
                                <span className="testimonials__name">Tim Cook</span>
                                <span className="testimonials__pos">CEO, Apple</span>
                            </div>
                        </div>

                        <div className="testimonials__slide">
                            <p>Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci.
                                Nisi eaque consequatur. Quasi voluptas eius distinctio. Atque eos maxime. Qui ipsam temporibus quisquam vel.</p>
                            <img src="images/avatars/user-05.jpg" alt="Author image" className="testimonials__avatar" />
                            <div className="testimonials__info">
                                <span className="testimonials__name">Sundar Pichai</span>
                                <span className="testimonials__pos">CEO, Google</span>
                            </div>
                        </div>

                        <div className="testimonials__slide">
                            <p>Repellat dignissimos libero. Qui sed at corrupti expedita voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam.
                                Autem eaque officia cum exercitationem sunt voluptatum accusamus. Quasi voluptas eius distinctio.</p>
                            <img src="images/avatars/user-02.jpg" alt="Author image" className="testimonials__avatar" />
                            <div className="testimonials__info">
                                <span className="testimonials__name">Satya Nadella</span>
                                <span className="testimonials__pos">CEO, Microsoft</span>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>

        </section>
    );
};

export default Clients;
