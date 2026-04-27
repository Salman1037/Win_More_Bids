import logo from "../../assets/img/logo-2.png";
import { Link } from 'react-router-dom';
import Social from "../../data/social";

const FooterThree = () => {
    return (
        <>
        <div className="cta__area">
            <div className="container">
                <div className="row al-center">
                    <div className="col-lg-7 lg-mb-30 lg-t-center title_split_anim">
                        <h2>Create Your Dream Space — Let’s Get Going!</h2>
                    </div>
                    <div className="col-lg-5 t-right lg-t-center wow fadeInDown" data-wow-delay="1.2s">
                        <Link className="build_button" to="/contact-us">Book Appointment<i className="flaticon-right-up"></i></Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer__one">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="footer__one-area">
                            <div className="row">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="footer__one-widget mr-40">
                                        <Link className="logo" to="/"><img src={logo} alt="logo"/></Link>
                                        <h5>We’re Solutions for all construction</h5>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 sm-mt-30">
                                    <div className="footer__one-widget address">
                                        <h4>Address</h4>
                                        <div className="footer__one-widget-address">
                                            <h6><Link to="https://www.google.com/maps">5550 Glades Road Suite 500-1047, Boca Raton FL 33431</Link></h6>
                                            <h4><Link to="tel:+17726779103">+1 772 677 9103</Link></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 lg-mt-30">
                                    <div className="footer__one-widget ml-40 lg-ml-0">
                                        <h4>Quick links</h4>
                                            <div className="footer-widget-menu">
                                            <ul>
                                                <li><Link to="/about-us">About Us</Link></li>
                                                <li><Link to="/blog">Blog</Link></li>
                                                <li><Link to="/testimonial">Testimonials</Link></li>
                                                <li><Link to="/contact-us">Contact Us</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-sm-6 lg-mt-30">
                                    <div className="footer__one-widget address">
                                        <h4>Support</h4>
                                            <div className="footer-widget-menu">
                                                <ul>
                                                    <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
                                                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                                </ul>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright__area">
            <div className="container">
                <div className="row al-center">
                    <div className="col-md-7">
                            <div className="copyright__area-content md-t-center md-mb-10">
                            <p>Copyright {new Date().getFullYear()} – All Rights Reserved By <a href="https://99estimators.com/" target="_blank" rel="noopener noreferrer">99 Estimators</a></p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        {/* <div className="copyright__area-social t-right md-t-center">
                            <Social />						
                        </div> */}
                    </div>
                </div>
            </div>
        </div>         
        </>
    );
};

export default FooterThree;