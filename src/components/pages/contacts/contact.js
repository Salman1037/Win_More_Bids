import React from 'react';
import { Link } from 'react-router-dom';
import FormArea from './form';

const ContactMain = () => {
    return (
        <>
            <div className="contact__area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 lg-mb-25">
                            <div className="contact__area-left mr-40 xl-mr-0">
                                <div className="title">
                                    <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">Contact Us</span>
                                    <h2 className="title_split_anim mb-25">Get a Fast, Accurate Estimate</h2>
                                    <p className="wow fadeInUp" data-wow-delay=".4s">Schedule a free consultation to review plans and get a tailored quote. Most estimates complete within 3–10 business days depending on scope.</p>
                                </div>
                                <div className="contact__area-left-contact wow fadeInUp" data-wow-delay=".7s">
                                    <div className="contact__area-left-contact-item">
                                        <div className="contact__area-left-contact-item-icon">
                                            <i className="flaticon-phone"></i>
                                        </div>
                                        <div className="contact__area-left-contact-item-content">
                                            <span>Phone:</span>
                                            <h6><Link to="tel:+17726779103">+1 772 677 9103</Link></h6>
                                        </div>
                                    </div>
                                    <div className="contact__area-left-contact-item">
                                        <div className="contact__area-left-contact-item-icon">
                                            <i className="flaticon-email-3"></i>
                                        </div>
                                        <div className="contact__area-left-contact-item-content">
                                            <span>Email Address:</span>
                                            <h6><Link to="mailto:info@99estimators.com">info@99estimators.com</Link></h6>
                                        </div>
                                    </div>
                                    <div className="contact__area-left-contact-item">
                                        <div className="contact__area-left-contact-item-icon">
                                            <i className="flaticon-location-1"></i>
                                        </div>
                                        <div className="contact__area-left-contact-item-content">
                                            <span>Location:</span>
                                            <h6>5550 Glades Road Suite 500-1047, Boca Raton FL 33431</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 wow fadeInRight" data-wow-delay=".4s">
                            <div className="contact__area-form">
                                <h4>Send Message</h4>
                                <FormArea />
                            </div>
                        </div>
                    </div>
                </div>
            </div>         
        </>
    );
};

export default ContactMain;