import React from 'react';
import { Link } from 'react-router-dom';
import Count from '../../common/count';
import image from "../../../assets/img/page/skill.jpg";
    
const Advices = () => {
    const newLocal = <div className="col-lg-6">
        <div className="success__area-right">
            <img className="lg_img_full wow img_top_animation" src={image} alt="Bid advisory" />
            <div className="success__area-right-skill mt-40 wow fadeInUp" data-wow-delay=".5s">
                <div className="skill__area-item">
                    <div className="skill__area-item-content">
                        <h6>Estimate Accuracy</h6>
                        <span className="skill__area-item-count"><Count number={89} />%</span>
                    </div>
                    <div className="skill__area-item-inner">
                        <div className="skill__area-item-bar wow active_bar" style={{ width: '89%' }}></div>
                    </div>
                </div>
                <div className="skill__area-item">
                    <div className="skill__area-item-content">
                        <h6>Turnaround Speed</h6>
                        <span className="skill__area-item-count"><Count number={70} />%</span>
                    </div>
                    <div className="skill__area-item-inner">
                        <div className="skill__area-item-bar wow active_bar" style={{ width: '70%' }}></div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
    return (
        <div className="success__area section-padding">
            <div className="container">
                <div className="row al-center">
                    <div className="col-lg-6 lg-mb-25">
                        <div className="success__area-title mr-70 xl-mr-0">
                            <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">Bid Advisory</span>
                            <h2 className="mb-20 wow fadeInRight" data-wow-delay=".6s">Bid Strategy & Value Engineering</h2>
                            <p className="wow fadeInUp" data-wow-delay=".4s">We review estimates and scope to identify value-engineering opportunities and strengthen your bid position without sacrificing margins.</p>
                            <div className="wow fadeInDown" data-wow-delay="1.2s">
                                <Link className="build_button mt-25" to="/contact-us">Schedule a Review<i className="flaticon-right-up"></i></Link>
                            </div>
                        </div>
                    </div>
                    {newLocal}
                </div>
            </div>
        </div>
    );
};

export default Advices;