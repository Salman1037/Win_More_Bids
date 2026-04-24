import React from 'react';

const FaqArea = () => {

    return (
        <div className="faq__page section-padding">
            <div className="container">
                <div className="row jc-center">
                    <div className="col-xl-10">
                        <div className="wow fadeInUp" data-wow-delay=".4s" id="accordionExample">
                            <div className="faq-item">
                                <h5 className="icon" data-bs-toggle="collapse" data-bs-target="#collapseOne">How accurate are your estimates?</h5>
                                <div id="collapseOne" className="faq-item-body collapse show" data-bs-parent="#accordionExample">
                                    <p>We use validated takeoffs, RSMeans benchmarks and QA checks. Accuracy depends on design completeness and is noted with each delivery.</p>
                                </div>
                            </div>
                            <div className="faq-item">
                                <h5 className="icon collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo">How long does an estimate take?</h5>
                                <div id="collapseTwo" className="faq-item-body collapse" data-bs-parent="#accordionExample">
                                    <p>Turnaround varies by plan: Small ~3 business days, Medium ~5 business days, Large ~7–10 business days. Expedited options available.</p>
                                </div>
                            </div>
                            <div className="faq-item">
                                <h5 className="icon collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree">Who can use Win Bids Co services?</h5>
                                <div id="collapseThree" className="faq-item-body collapse" data-bs-parent="#accordionExample">
                                    <p>Contractors, subcontractors, developers, and architects use our takeoffs and estimates for bidding, budgeting and value engineering.</p>
                                </div>
                            </div>
                            <div className="faq-item">
                                <h5 className="icon collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour">How do your services save money?</h5>
                                <div id="collapseFour" className="faq-item-body collapse" data-bs-parent="#accordionExample">
                                    <p>Our audits prevent quantity errors, reveal cost-saving opportunities, and apply RSMeans to protect margins and reduce overruns.</p>
                                </div>
                            </div>
                            <div className="faq-item">
                                <h5 className="icon collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFive">What if I need revisions?</h5>
                                <div id="collapseFive" className="faq-item-body collapse" data-bs-parent="#accordionExample">
                                    <p>Each plan includes a set number of revisions (1–3). Additional revisions are available and clearly priced; all changes are tracked.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqArea;