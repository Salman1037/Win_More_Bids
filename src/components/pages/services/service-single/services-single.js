import React from 'react';
import { Link } from 'react-router-dom';
import servicesData from '../../../data/services-data';
import ctaImage from '../../../assets/img/page/cta-1.jpg';
import image1 from '../../../assets/img/portfolio/portfolio-5.jpg';
import image2 from '../../../assets/img/portfolio/portfolio-8.jpg';

const ServicesSingleMain = ({singleData}) => {
    return (
        <>
            <div className="services__details section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 columns_sticky">
                            <div className="all__sidebar">                        
                                <div className="all__sidebar-item">
                                    <h4>Our Solutions</h4>
                                    <div className="all__sidebar-item-category">
                                        <ul>
                                            {servicesData.slice(0, 5).map((data, id) => (
                                                <li key={id}><Link to={`/services/${data.id}`}>{data.title}<i className="flaticon-right-up"></i></Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="all__sidebar-item-help mb-25" style={{backgroundImage: `url(${ctaImage})`}}>
                                    <h3>Ready for Your Next Construction?</h3>
                                    <Link className="build_button mt-20" to="/contact-us">Get an Advice<i className="flaticon-right-up"></i></Link>
                                </div>
                                <div className="all__sidebar-item">
                                    <h4>Download</h4>
                                    <div className="all__sidebar-item-download">
                                        <ul>
                                            <li><Link to="#">Company Details<span className="fal fa-arrow-to-bottom"></span></Link></li>
                                            <li><Link to="#">Our Brochures<span className="fal fa-arrow-to-bottom"></span></Link></li>
                                        </ul>                            
                                    </div>
                                </div>
                            </div>  
                        </div>
                        <div className="col-lg-8">
                            <div className="services__details-area">
                                <img src={singleData.image} alt={singleData.title} />
                                <h3 className="mt-25 mb-20">{singleData.title}</h3>
                                <p className="mb-20">{singleData.description}</p>
                                {singleData.longDescription && singleData.longDescription.map((p, idx) => (
                                    <p key={idx} className="mb-20">{p}</p>
                                ))}
                                {singleData.deliverables && (
                                    <>
                                        <h4 className="mb-20">Deliverables</h4>
                                        <ul className="services__details-area-list mb-25">
                                            {singleData.deliverables.map((d, i) => (
                                                <li key={i}><i className="flaticon-check-mark"></i>{d}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                                    {singleData.methodology && (
                                        <>
                                            <h4 className="mb-20">Our Methodology</h4>
                                            <ol className="services__details-area-list mb-25">
                                                {singleData.methodology.map((step, i) => (
                                                    <li key={i}><i className="flaticon-check-mark"></i>{step}</li>
                                                ))}
                                            </ol>
                                        </>
                                    )}
                                <h4 className="mb-20">Why clients choose this service</h4>
                                <p>{singleData.benefits ? singleData.benefits.join('; ') : 'Experienced estimators, consistent QA workflows, and tool-driven accuracy ensure bids are competitive and reliable.'}</p>
                                {/* <div className="row mt-40 mb-40">
                                    <div className="col-sm-6 sm-mb-25">
                                        <img className="img_full" src={image1} alt="sample 1" />
                                    </div>
                                    <div className="col-sm-6">
                                        <img className="img_full" src={image2} alt="sample 2" />
                                    </div>
                                </div> */}
                                {singleData.caseStudies && (
                                    <>
                                        <h4 className="mb-20">Case Studies & Impact</h4>
                                        <div className="row mb-30">
                                            {singleData.caseStudies.map((c, i) => (
                                                <div className="col-md-6" key={i}>
                                                    <div className="case-study-card">
                                                        <h5>{c.title}</h5>
                                                        <p>{c.summary}</p>
                                                        <p><strong>Impact:</strong> {c.impact}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}
                                <div className="row mb-30">
                                    <div className="col-md-6">
                                        {singleData.tools && (
                                            <>
                                                <h5>Tools & Standards</h5>
                                                <p>{singleData.tools}</p>
                                            </>
                                        )}
                                    </div>
                                    <div className="col-md-6">
                                        {singleData.turnaround && (
                                            <>
                                                <h5>Typical Turnaround</h5>
                                                <p>{singleData.turnaround}</p>
                                            </>
                                        )}
                                    </div>
                                </div>
                                {singleData.pricingNote && (
                                    <p className="mb-25"><em>{singleData.pricingNote}</em></p>
                                )}
                                <div className="row mt-40 mb-40">
                                    <div className="col-sm-6 sm-mb-25">
                                        <img className="img_full" src={image1} alt="sample 1" />
                                    </div>
                                    <div className="col-sm-6">
                                        <img className="img_full" src={image2} alt="sample 2" />
                                    </div>
                                </div>
                                <ul className="services__details-area-list">
                                    <li><i className="flaticon-check-mark"></i>Auditable quantities and CSV exports</li>
                                    <li><i className="flaticon-check-mark"></i>RSMeans benchmarking where applicable</li>
                                    <li><i className="flaticon-check-mark"></i>Clear turnaround timeline and revisions</li>
                                    <li><i className="flaticon-check-mark"></i>Dedicated estimator support and review call</li>
                                </ul>
                                <h3>Commonly Asked Questions</h3>
                                <div className="mt-30" id="accordionExample">
                                    {singleData.faqs && singleData.faqs.map((f, idx) => (
                                        <div className="faq-item" key={idx}>
                                            <h5 className={"icon " + (idx !== 0 ? 'collapsed' : '')} data-bs-toggle="collapse" data-bs-target={`#collapse${idx}`}>{idx+1}. {f.q}</h5>
                                            <div id={`collapse${idx}`} className={`faq-item-body collapse ${idx===0? 'show':''}`} data-bs-parent="#accordionExample">
                                                <p>{f.a}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>          
        </>
    );
};

export default ServicesSingleMain;