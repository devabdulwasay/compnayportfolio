import React from 'react';
import ScrollNavigation from './ScrollNavigation';
import ImageSlider from './ImageSlider';
import ScrollImageSlider from './ScrollImageSlider';

const Works = () => {
    // Baitmayar project images for slider
    const baitmayarImages = [
        'images/portfolio_images/baitmayar/1FireShot Capture 044 - Online Shopping for Grocery & Beauty & Fashion - Bait El Mair_ - staging.baitelmair.ae.png',
        'images/portfolio_images/baitmayar/2FireShot Capture 050 - Shop Now - baitelmair.ae.png',
        'images/portfolio_images/baitmayar/3FireShot Capture 045 - House coloring game - staging.baitelmair.ae.png',
        'images/portfolio_images/baitmayar/4FireShot Capture 048 - Orders - staging.baitelmair.ae.png',
        'images/portfolio_images/baitmayar/5FireShot Capture 049 - Checkout - staging.baitelmair.ae.png',
        'images/portfolio_images/baitmayar/6FireShot Capture 046 - Dashboard - Find convenience at Bat El Mair and shop for groceries, b_ - staging.baitelmair.ae.png',
        'images/portfolio_images/baitmayar/7FireShot Capture 047 - Orders - Find convenience at Bat El Mair and shop for groceries, beau_ - staging.baitelmair.ae.png'
    ];

    // AlBarjeel project images
    const barjeelImages = [
        'images/portfolio_images/barjeel/1.png',
        'images/portfolio_images/barjeel/2FireShot Capture 037 - AlBarjeel - albarjeel.com.png',
        'images/portfolio_images/barjeel/3FireShot Capture 038 - AlBarjeel - albarjeel.com.png',
        'images/portfolio_images/barjeel/4FireShot Capture 040 - AlBarjeel - albarjeel.com.png',
        'images/portfolio_images/barjeel/5FireShot Capture 039 - AlBarjeel - albarjeel.com.png',
        'images/portfolio_images/barjeel/6FireShot Capture 041 - AlBarjeel - albarjeel.com.png',
        'images/portfolio_images/barjeel/7FireShot Capture 043 - Dashboard - albarjeel.com.png',
        'images/portfolio_images/barjeel/8FireShot Capture 044 - لوحة التحكم - albarjeel.com.png'
    ];

    // LawMent project images
    const lawmentImages = [
        'images/portfolio_images/lawyer/1FireShot Capture 014 - LawMent - Home - 127.0.0.1_page-0001.jpg',
        'images/portfolio_images/lawyer/2FireShot Capture 016 - LawMent - Service - 127.0.0.1_page-0001.jpg',
        'images/portfolio_images/lawyer/3FireShot Capture 015 - LawMent - About - 127.0.0.1_page-0001.jpg',
        'images/portfolio_images/lawyer/4FireShot Capture 018 - LawMent - Contact - 127.0.0.1_page-0001.jpg',
        'images/portfolio_images/lawyer/5FireShot Capture 019 - LawMent - appointment - 127.0.0.1_page-0001.jpg',
        'images/portfolio_images/lawyer/6FireShot Capture 020 - Dashboard - 127.0.0.1_page-0001.jpg',
        'images/portfolio_images/lawyer/7FireShot Capture 029 - lawyer Dashboard - 127.0.0.1_page-0001.jpg',
        'images/portfolio_images/lawyer/8FireShot Capture 030 - lawyer  Appointment History - 127.0.0.1_page-0001.jpg',
        'images/portfolio_images/lawyer/9FireShot Capture 033 - lawyer Message - 127.0.0.1_page-0001.jpg'
    ];

    // Thrivon project images
    const thrivonImages = [
        'images/portfolio_images/thrivon/2FireShot Capture 031 - Thrivon - Empowering Students, Elevating Companies - thrivon.co.png',
        'images/portfolio_images/thrivon/3FireShot Capture 030 - Thrivon - Empowering Students, Elevating Companies - thrivon.co.png',
        'images/portfolio_images/thrivon/4FireShot Capture 032 - Thrion -- Admin jobs - thrivon.co.png',
        'images/portfolio_images/thrivon/5FireShot Capture 033 - Thrion -- Admin Users - thrivon.co.png',
        'images/portfolio_images/thrivon/1FireShot Capture 005 - SendGrid - mc.sendgrid.com.png'
    ];

    // Falcon project images
    const falconImages = [
        'images/portfolio_images/falcon/falcon.png',
        'images/portfolio_images/falcon/falcon1.png',
        'images/portfolio_images/falcon/falcon2.png',
        'images/portfolio_images/falcon/falcon3.png',
        'images/portfolio_images/falcon/falcon4.png'
    ];

    // Donation project images
    const donateImages = [
        'images/portfolio_images/donate/donate.png',
        'images/portfolio_images/donate/donate1.png',
        'images/portfolio_images/donate/donate2.png'
    ];

    return (
        <section id='works' className="s-works">

            <div className="intro-wrap">

                <div className="row section-header has-bottom-sep light-sep" data-aos="fade-up">
                    <div className="col-full">
                        <h3 className="subhead">Our Portfolio</h3>
                        <h1 className="display-2 display-2--light">Featured Projects We've Built</h1>
                    </div>
                </div>

            </div>

            <div className="row works-content">
                <div className="col-full masonry-wrap">
                    <div className="masonry">

                        {/* Project 1: Baitmayar */}
                        <div className="masonry__brick" data-aos="fade-up">
                            <div className="item-folio">
                                <div className="item-folio__thumb">
                                    <ScrollImageSlider images={baitmayarImages} scrollDuration={8000} pauseDuration={1500} />
                                </div>
                                <div className="item-folio__text">
                                    <h3 className="item-folio__title">Bait El Mair</h3>
                                    <p className="item-folio__cat">E-commerce Platform</p>
                                </div>
                                <div className="item-folio__caption">
                                    <p>Multi-vendor e-commerce platform with Stripe integration. Vendors purchase monthly subscriptions with automated billing. Customers browse multiple vendor products and checkout securely. Complete payment processing, subscription management, and vendor dashboard included.</p>
                                </div>
                            </div>
                        </div>

                        {/* Project 2: AlBarjeel */}
                        <div className="masonry__brick" data-aos="fade-up">
                            <div className="item-folio">
                                <div className="item-folio__thumb">
                                    <ScrollImageSlider images={barjeelImages} scrollDuration={8000} pauseDuration={1500} />
                                </div>
                                <div className="item-folio__text">
                                    <h3 className="item-folio__title">AlBarjeel</h3>
                                    <p className="item-folio__cat">Content Management System</p>
                                </div>
                                <div className="item-folio__caption">
                                    <p>Dual-language CMS supporting English and Arabic content management. Full dashboard control for news publishing in both languages. Automated daily PDF newspaper generation. Email delivery system sends PDFs to subscribers every morning.</p>
                                </div>
                            </div>
                        </div>

                        {/* Project 3: LawMent */}
                        <div className="masonry__brick custom_margin" data-aos="fade-up">
                            <div className="item-folio">
                                <div className="item-folio__thumb">
                                    <ScrollImageSlider images={lawmentImages} scrollDuration={8000} pauseDuration={1500} />
                                </div>
                                <div className="item-folio__text">
                                    <h3 className="item-folio__title">haqooq.pk</h3>
                                    <p className="item-folio__cat">Legal Services Platform</p>
                                </div>
                                <div className="item-folio__caption">
                                    <p>Professional platform connecting lawyers with clients. Lawyers create detailed profiles showcasing expertise. Clients browse profiles and hire lawyers for cases. Built-in chat system enables direct communication. Complete case management and appointment scheduling.</p>
                                </div>
                            </div>
                        </div>

                        {/* Project 4: Thrivon */}
                        <div className="masonry__brick" data-aos="fade-up">
                            <div className="item-folio">
                                <div className="item-folio__thumb">
                                    <ScrollImageSlider images={thrivonImages} scrollDuration={8000} pauseDuration={1500} />
                                </div>
                                <div className="item-folio__text">
                                    <h3 className="item-folio__title">Thrivon</h3>
                                    <p className="item-folio__cat">Student Empowerment Portal</p>
                                </div>
                                <div className="item-folio__caption">
                                    <p>Comprehensive job portal with admin job posting capabilities. Users create profiles and apply to positions. Admin dashboard for managing listings and tracking applications. Review system for candidate evaluation and direct contact with qualified applicants.</p>
                                </div>
                            </div>
                        </div>

                        {/* Project 5: Falcon */}
                        <div className="masonry__brick" data-aos="fade-up">
                            <div className="item-folio">
                                <div className="item-folio__thumb">
                                    <ScrollImageSlider images={falconImages} scrollDuration={8000} pauseDuration={1500} />
                                </div>
                                <div className="item-folio__text">
                                    <h3 className="item-folio__title">Falcon</h3>
                                    <p className="item-folio__cat">Logistics & Parcel Tracking System</p>
                                </div>
                                <div className="item-folio__caption">
                                    <p>Built a hybrid tracking platform with WordPress frontend and Laravel backend API. Users can track parcels in real-time through unique tracking numbers. Developed RESTful APIs to bridge WordPress with Laravel for seamless data flow.</p>
                                </div>
                            </div>
                        </div>

                        {/* Project 6: Donation Platform */}
                        <div className="masonry__brick" data-aos="fade-up">
                            <div className="item-folio">
                                <div className="item-folio__thumb">
                                    <ScrollImageSlider images={donateImages} scrollDuration={8000} pauseDuration={1500} />
                                </div>
                                <div className="item-folio__text">
                                    <h3 className="item-folio__title">Donation Platform</h3>
                                    <p className="item-folio__cat">Payment & Donation System</p>
                                </div>
                                <div className="item-folio__caption">
                                    <p>Built a Laravel-based donation platform allowing users to contribute custom amounts via bank transfer (with screenshot verification) or PayFast payment gateway. Developed an admin dashboard for real-time transaction tracking and management.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </section>
    );
};

export default Works;
