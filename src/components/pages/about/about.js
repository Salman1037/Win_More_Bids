import { Link } from 'react-router-dom';
import image from "../../assets/img/about/about-4.jpg";
import bgImage from "../../assets/img/portfolio/portfolio-8.jpg";


const AboutMain = () => {
    return (
        <>
            <div className="mission__area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 lg-mb-25">
                            <div className="mission__area-left mr-40 xl-mr-0">
                                <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">About Win Bids Co</span>
                                <h2 className="title_split_anim">Helping Contractors Win Profitable Bids</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mission__area-right">
                                <div className="row">
                                    <div className="col-md-6 md-mb-25 wow fadeInUp" data-wow-delay=".6s">
                                        <div className="experience__area-list-item">
                                            <i className="flaticon-team"></i>
                                            <div className="experience__area-list-item-content">
                                                <h4>Estimator Expertise</h4>
                                                <p>Experienced estimators performing accurate takeoffs and audits.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".9s">
                                        <div className="experience__area-list-item">
                                            <i className="flaticon-technology"></i>
                                            <div className="experience__area-list-item-content">
                                                <h4>Digital Takeoffs</h4>
                                                <p>PlanSwift and Bluebeam workflows for fast, auditable quantities.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about__five section-padding pt-0">
                <div className="container">
                    <div className="row al-center">
                        <div className="col-lg-5 lg-mb-25">
                            <div className="about__five-image wow img_left_animation">
                                <img src={image} alt="image" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="about__five-right ml-70 xl-ml-0">
                                <div className="about__five-right-title">
                                    <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">Why Choose Win Bids Co</span>
                                    <h2 className="title_split_anim">Precision Estimates. Proven Results.</h2>
                                </div>
                                <div className="features wow fadeInUp" data-wow-delay=".3s" style={{backgroundImage: `url(${bgImage})`}}>
                                    <h3>Accurate. Auditable.<br/>Actionable.</h3>
                                </div>
                                <p className="wow fadeInUp" data-wow-delay=".6s">Win Bids Co delivers fast, auditable estimates and material takeoffs using RSMeans, PlanSwift and Bluebeam. We produce bidder-ready estimates with clear assumptions, cost breakdowns, and auditable deliverables so you can submit competitive proposals with confidence. Our clients report faster bid turnaround, fewer omissions, and improved margins.</p>
                                <div className="item_bounce">
                                    <Link className="build_button mt-20" to="/contact-us">Schedule a Call<i className="flaticon-right-up"></i></Link>
                                </div>
                                <div className="mt-30">
                                    <h4>Our Process</h4>
                                    <ul>
                                        <li>1. Project intake & scope review</li>
                                        <li>2. Digital plan analysis & quantity takeoff</li>
                                        <li>3. RSMeans benchmarking and supplier pricing</li>
                                        <li>4. QA review, deliverable export (CSV/PDF), client review</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutMain;