import React from 'react';
import Count from '../../common/count';
import { Link } from 'react-router-dom';
import image from "../../../assets/img/page/cta.jpg";
import icon from "../../../assets/img/icon/star-dark.svg";
import content from "../../../assets/img/shape/content-1.png";
import servicesData from '../../../data/services-data';

const TextSlide = () => {
    return (
        <div className="text__slide section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 lg-mb-30">
                        <div className="text__slide-title mt-35 lg-mt-0">
                            <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">Estimating Solutions</span>
                            <h2 className="wow fadeInRight" data-wow-delay=".6s">Accurate takeoffs. Faster bids.</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="text__slide-right">
                            <img className="wow img_left_animation" src={image} alt="image" />
                            <div className="text__slide-right-counter wow fadeInDown" data-wow-delay="1.2s" style={{backgroundImage: `url(${content})`}}>
                                <h2><Count number={29}/>+</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll__slider">
                <div className="text-slide">
                    <div className="sliders text_scroll">
                        <ul>
                            {servicesData?.filter(s => s.active).map((s) => (
                                <li key={s.id}><img src={icon} alt="icon" /><Link to={`/services/${s.id}`}>{s.title}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div className="sliders text_scroll">
                        <ul>
                            {servicesData?.filter(s => s.active).map((s) => (
                                <li key={s.id + '-2'}><img src={icon} alt="icon" /><Link to={`/services/${s.id}`}>{s.title}</Link></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextSlide;