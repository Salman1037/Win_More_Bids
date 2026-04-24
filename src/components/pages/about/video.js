import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import portfolioData from '../../data/portfolio-data';
import servicesData from '../../data/services-data';
import videoBg from "../../assets/img/service/service-1.jpg";
import icon2 from '../../assets/img/icon/star-dark.svg';

const Video = () => {
    const [openVideo, setOpenVideo] = useState(false);
    const openVideoModal = () => {
        setOpenVideo(true);
    };
    return (
        <>
            <div className="video__two" style={{backgroundImage: `url(${videoBg})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="video__two-icon item_bounce">
                                <div className="video-caption t-center mb-20">
                                    <h3 style={{color:'white'}}>How Win Bids Co Estimates</h3>
                                    <p style={{color:'white'}}>Watch a short walkthrough of our estimating process and deliverables.</p>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className="scroll__slider">
                    <div className="text-slide">
                        <div className="sliders text_scroll">
                            <ul>
                                {servicesData?.map((s, id) => (
                                    <li key={s.id}><img src={icon2} alt="icon"/><Link to={`/services/${s.id}`}>{s.title}</Link></li>
                                ))}
                            </ul>
                        </div>
                        <div className="sliders text_scroll">
                            <ul>
                                {servicesData?.map((s, id) => (
                                    <li key={s.id}><img src={icon2} alt="icon"/><Link to={`/services/${s.id}`}>{s.title}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <ModalVideo className='video-modal' channel="youtube" autoplay isOpen={openVideo} videoId="SZEflIVnhH8" onClose={() => setOpenVideo(false)} />
        </>
    );
};

export default Video;