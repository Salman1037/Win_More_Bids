import React from 'react';
import { Link } from 'react-router-dom';

const PricingPlansMain = () => {
	return (
		<>
				<div className="price__area section-padding">
					<div className="container">
						<div className="row">
							<div className="col-xl-4 col-md-6 xl-mb-25 wow fadeInUp" data-wow-delay=".4s">
								<div className="price__area-item">
									<div className="price__area-item-price">
										<span>Small Project</span>
										<h3>Small Project</h3>
										<h2>$299<span>/Per project</span></h2>
									</div>
									<div className="price__area-item-list">
										<ul>
											<li><i className="flaticon-checked"></i> Single-discipline takeoff</li>
											<li><i className="flaticon-checked"></i> Up to 1 drawing set</li>
											<li><i className="flaticon-checked"></i> Basic quantity summary</li>
											<li><i className="flaticon-checked"></i> 3 business day turnaround</li>
											<li><i className="flaticon-checked"></i> 1 revision</li>
										</ul>
									</div>
									<div className="price__area-item-btn">
										<Link className="build_button" to="/request-quote">Request Small Project Quote<i className="flaticon-right-up"></i></Link>
									</div>
								</div>
							</div>
							<div className="col-xl-4 col-md-6 md-mb-25 wow fadeInUp" data-wow-delay=".7s">
								<div className="price__area-item active">
									<div className="price__area-item-price">
										<span>Medium Project</span>
										<h3>Medium Project</h3>
										<h2>$799<span>/Per project</span></h2>
									</div>
									<div className="price__area-item-list">
										<ul>
											<li><i className="flaticon-checked"></i> Multi-discipline (up to 3 trades)</li>
											<li><i className="flaticon-checked"></i> Up to 5 drawing sheets</li>
											<li><i className="flaticon-checked"></i> Detailed material summary</li>
											<li><i className="flaticon-checked"></i> RSMeans unit-cost summary</li>
											<li><i className="flaticon-checked"></i> 5 business day turnaround, 2 revisions</li>
										</ul>
									
									</div>
									<div className="price__area-item-btn">
										<Link className="build_button" to="/request-quote">Request Medium Project Quote<i className="flaticon-right-up"></i></Link>
									</div>
								</div>
							</div>
							<div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="1s">
								<div className="price__area-item">
									<div className="price__area-item-price">
										<span>Large Project</span>
										<h3>Large Project</h3>
										<h2>$2,499<span>/Per project</span></h2>
									</div>
									<div className="price__area-item-list">
										<ul>
											<li><i className="flaticon-checked"></i> Full project takeoff, unlimited sheets</li>
											<li><i className="flaticon-checked"></i> Line-item quantity export (CSV/PDF)</li>
											<li><i className="flaticon-checked"></i> RSMeans benchmarking & PlanSwift markups</li>
											<li><i className="flaticon-checked"></i> Priority turnaround (7–10 business days)</li>
											<li><i className="flaticon-checked"></i> 3 revisions + estimation review call</li>
										</ul>                            
									</div>
									<div className="price__area-item-btn">
										<Link className="build_button" to="/request-quote">Request Large Project Quote<i className="flaticon-right-up"></i></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
		</>
	);
};

export default PricingPlansMain;