import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import image from "../../../assets/img/shape/content.png";
import bannerVideo from "../../../assets/img/banner/banner.mp4";
import poster from "../../../assets/img/banner/banner.jpg";
// brand image imports removed — replaced by stats/trust bar
import './banner.css';

const CountUp = ({ end = 0, duration = 1400, format = 'int', suffix = '' }) => {
    const ref = React.useRef(null);
    const [display, setDisplay] = React.useState('0');
    const started = React.useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const onIntersect = (entries, io) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    const start = performance.now();
                    const from = 0;

                    const step = (now) => {
                        const t = Math.min(1, (now - start) / duration);
                        const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // easeInOut
                        const value = from + (end - from) * eased;

                        // formatting
                        let out = '';
                        if (format === 'percent') out = Math.round(value) + '%';
                        else if (format === 'one-decimal') out = value.toFixed(1) + suffix;
                        else if (format === 'kplus') {
                            const k = Math.round(value / 1000);
                            out = k + 'K+';
                        } else out = Math.round(value).toString() + suffix;

                        setDisplay(out);
                        if (t < 1) requestAnimationFrame(step);
                    };

                    requestAnimationFrame(step);
                    io.disconnect();
                }
            });
        };

        const io = new IntersectionObserver(onIntersect, { threshold: 0.3 });
        io.observe(el);
        return () => io.disconnect();
    }, [end, duration, format, suffix]);

    return <div ref={ref} className="stat-number">{display}</div>;
};

const BannerFour = () => {
    const videoRef = useRef(null);
    const [showVideo, setShowVideo] = useState(true);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.innerWidth < 480) {
            setShowVideo(false);
            return;
        }

        const vid = videoRef.current;
        if (!vid) {
            setShowVideo(false);
            return;
        }

        const playPromise = vid.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => setShowVideo(false));
        }

        const onError = () => setShowVideo(false);
        vid.addEventListener('error', onError);
        return () => vid.removeEventListener('error', onError);
    }, []);

    return (
        <div className="banner__four" style={!showVideo ? { backgroundImage: `url(${poster})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}>
            {showVideo && (
                <div className="bg-video">
                    <video ref={videoRef} autoPlay muted loop playsInline preload="auto" poster={poster} aria-hidden="true">
                        <source src={bannerVideo} type="video/mp4" />
                    </video>
                </div>
            )}
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="banner__four-content">
                            <span className="subtitle wow fadeInLeft" data-wow-delay=".3s">Estimating</span>
                                <h1 className="wow fadeInRight" data-wow-delay=".6s" style={{color: 'var(--primary-color-1)'}}>Win More Bids</h1>
                                <h2 className="wow fadeInRight" data-wow-delay=".9s">Fast. Accurate. Profitable.</h2>
                   <h2 className="wow fadeInRight" data-wow-delay=".9s">Helping Contractors Win Profitable Bids</h2>
                                <div className="wow fadeInDown" data-wow-delay="1.2s">
                                    <Link className="build_button" to="/contact-us">Schedule a Call<i className="flaticon-right-up"></i></Link>
                                </div>
                            <Link to="/request-quote"><img className="h_rotate" src={image} alt="image" /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="banner__four-brand">
                            <div className="title">
                                <h4>Trusted by Contractors</h4>
                            </div>
                            <div className="trust-stats">
                                <div className="stat">
                                    <CountUp end={12000} format="kplus" duration={1400} />
                                    <div className="stat-label">Projects Estimated</div>
                                </div>
                                <div className="stat">
                                    <CountUp end={78} format="percent" duration={1200} />
                                    <div className="stat-label">Average Bid Win Rate</div>
                                </div>
                                <div className="stat">
                                    <CountUp end={4.9} format="one-decimal" suffix="/5" duration={1200} />
                                    <div className="stat-label">Average Contractor Rating</div>
                                </div>
                                <div className="stat">
                                    <CountUp end={98} format="percent" duration={1200} />
                                    <div className="stat-label">Support Satisfaction</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerFour;