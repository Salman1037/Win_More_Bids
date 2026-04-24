import React from 'react';

const RequestQuoteMain = () => {
	return (
		<>
			<div className="request__quote section-padding-three">
				<div className="container">
					<div className="row">
						<div className="col-xl-12">
							<div className="section-title text-center mb-40">
								<h2>Request a Win Bids Co Estimate</h2>
								<p>Tell us about your project and which estimate services you need — our team delivers bid-ready takeoffs, detailed material lists, and defensible estimates to help you win more work.</p>
							</div>
							<form action="#">
								<div className="row">
									<div className="col-md-6 mt-30">
										<div className="request__quote-item">
											<label>First Name<span> *</span></label>
											<input type="text" name="firstName" placeholder="First name" />
										</div>
									</div>
									<div className="col-md-6 mt-30">
										<div className="request__quote-item">
											<label>Last Name</label>
											<input type="text" name="lastName" placeholder="Last name" />
										</div>
									</div>
									<div className="col-md-6 mt-30">
										<div className="request__quote-item">
											<label>Email Address<span> *</span></label>
											<input type="email" name="email" placeholder="you@company.com" />
										</div>
									</div>
									<div className="col-md-6 mt-30">
										<div className="request__quote-item">
											<label>Phone<span> *</span></label>
											<input type="tel" name="phone" placeholder="+1 772 677 9103" />
										</div>
									</div>
									<div className="col-md-6 mt-30">
										<div className="request__quote-item">
											<label>Company / Organization</label>
											<input type="text" name="company" placeholder="Company or owner" />
										</div>
									</div>
									<div className="col-md-6 mt-30">
										<div className="request__quote-item">
											<label>Project Website (optional)</label>
											<input type="text" name="website" placeholder="http://example.com (optional)" />
										</div>
									</div>
									<div className="col-md-12 mt-30">
										<p className="mb-10">Which estimate services do you need?<span> *</span></p>
										<div className="row">
											<div className="col-md-4">
												<div className="request__quote-services">
													<label><input className="mr-10" type="checkbox" name="services" value="bid-ready-takeoff" />Bid-Ready Takeoff</label>
													<label><input className="mr-10" type="checkbox" name="services" value="material-lists" />Material Lists</label>
													<label><input className="mr-10" type="checkbox" name="services" value="bid-ready-estimates" />Bid-Ready Estimates</label>
												</div>
											</div>
											<div className="col-md-4">
												<div className="request__quote-services">
													<label><input className="mr-10" type="checkbox" name="services" value="estimate-audit" />Estimate Audit</label>
													<label><input className="mr-10" type="checkbox" name="services" value="rsmeans-benchmarking" />RSMeans Benchmarking</label>
													<label><input className="mr-10" type="checkbox" name="services" value="estimator-as-a-service" />Estimator-as-a-Service</label>
												</div>
											</div>
											<div className="col-md-4">
												<div className="request__quote-services">
													<label><input className="mr-10" type="checkbox" name="services" value="rsmeans-additional" />RSMeans Data Integration</label>
													<label><input className="mr-10" type="checkbox" name="services" value="custom-scope" />Custom Scope & Pricing</label>
													<label><input className="mr-10" type="checkbox" name="services" value="other" />Other</label>
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-12 mt-30">
										<div className="request__quote-item">
											<label>Project Details / Message<span> *</span></label>
											<textarea name="message" placeholder="Briefly describe the project, scope, location, and target bid date."></textarea>
										</div>
									</div>
									<div className="col-lg-12 text-center">
										<button className="build_button mt-30" type="submit">Request Estimate<i className="flaticon-right-up"></i></button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default RequestQuoteMain;