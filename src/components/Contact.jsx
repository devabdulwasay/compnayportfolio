import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("mlggbvnd");

    return (
        <section id="contact" className="s-contact">

            <div className="overlay"></div>
            <div className="contact__line"></div>

            <div className="row section-header" data-aos="fade-up">
                <div className="col-full">
                    <h3 className="subhead">Contact Us</h3>
                    <h1 className="display-2 display-2--light">Reach out for a new project or just say hello</h1>
                </div>
            </div>

            <div className="row contact-content" data-aos="fade-up">

                <div className="contact-primary">

                    <h3 className="h6">Send Us A Message</h3>

                    {state.succeeded ? (
                        <div className="message-success" style={{ display: 'block' }}>
                            Your message was sent, thank you!<br />
                        </div>
                    ) : (
                        <form id="contactForm" onSubmit={handleSubmit}>
                            <fieldset>

                                <div className="form-field">
                                    <input name="name" type="text" id="contactName" placeholder="Your Name" minLength="2" required="" aria-required="true" className="full-width" />
                                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                                </div>
                                <div className="form-field">
                                    <input name="email" type="email" id="contactEmail" placeholder="Your Email" required="" aria-required="true" className="full-width" />
                                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                                </div>
                                <div className="form-field">
                                    <input name="subject" type="text" id="contactSubject" placeholder="Subject" className="full-width" />
                                    <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                                </div>
                                <div className="form-field">
                                    <textarea name="message" id="contactMessage" placeholder="Your Message" rows="10" cols="50" required="" aria-required="true" className="full-width"></textarea>
                                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                                </div>
                                <div className="form-field">
                                    <button className="full-width btn--primary" disabled={state.submitting}>Submit</button>
                                    {state.submitting && (
                                        <div className="submit-loader" style={{ display: 'block' }}>
                                            <div className="text-loader">Sending...</div>
                                            <div className="s-loader">
                                                <div className="bounce1"></div>
                                                <div className="bounce2"></div>
                                                <div className="bounce3"></div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                            </fieldset>
                        </form>
                    )}

                </div>

                <div className="contact-secondary">
                    <div className="contact-info">

                        <h3 className="h6 hide-on-fullwidth">Contact Info</h3>

                        <div className="cinfo">
                            <h5>Where to Find Us</h5>
                            <p>
                                Shah Faisal Colony<br />
                                Karachi<br />
                                Pakistan
                            </p>
                        </div>

                        <div className="cinfo">
                            <h5>Email Us At</h5>
                            <p>
                                info@innovatetechsolutions.com
                            </p>
                        </div>

                        <div className="cinfo">
                            <h5>Call Us At</h5>
                            <p>
                                Phone: 0345-2584500
                            </p>
                        </div>

                        <ul className="contact-social">
                            <li>
                                <a href="#0" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="#0" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="mailto:info@innovatetechsolutions.com"><i className="fa fa-envelope" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="#0" target="_blank" rel="noopener noreferrer"><i className="fa fa-whatsapp" aria-hidden="true"></i></a>
                            </li>
                        </ul>

                    </div>
                </div>

            </div>

        </section>
    );
};

export default Contact;
