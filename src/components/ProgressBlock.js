import React from 'react';

// ProgressBlock component
function ProgressBlock() {
    return (
        <section className="w3l-about-2 py-5">
            <div className="container py-md-5 py-4">
                <div className="row align-items-center">
                    <div className="col-lg-6 about-2-secs-left pe-lg-5 order-lg-first order-last">
                        <h3 className="title-style mb-3">We are the best agency to improve your work</h3>
                        <div className="w3l-progressblock mt-md-5 mt-4">
                            <div className="progress-info info1">
                                <h6 className="progress-tittle">Market Strategy <span className="">80%</span></h6>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '80%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="progress-info info2">
                                <h6 className="progress-tittle">Financial Support <span className="">95%</span></h6>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '95%' }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="progress-info info3 mb-0">
                                <h6 className="progress-tittle">Online reporting <span className="">90%</span></h6>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '90%' }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 about-2-secs-right mb-lg-0 mb-5 order-lg-last order-first">
                        <img src="../images/about4.jpg" alt="" className="img-fluid radius-image" />
                    </div>
                </div>
            </div>
        </section>
    );
}

// FeaturesBlock component
function FeaturesBlock() {
    return (
        <section className="w3l-features pb-5 pt-4" id="features">
            <div className="container pb-md-5 pb-4">
                <div className="title-heading-w3 text-center mx-auto mb-md-5 mb-4" style={{ maxWidth: '600px' }}>
                    <h3 className="title-style">Why Choose Work Field for your company?</h3>
                </div>
                <div className="row pt-4">
                    <div className="col-lg-3 col-sm-6">
                        <div className="feature-gd">
                            <div className="icon-featured">
                                <i className="fas fa-business-time"></i>
                            </div>
                            <div className="icon-info">
                                <h5><a href="about.html">The Business <span>Strategy</span></a></h5>
                                <p> Lorem ipsum dolor sit amet, dolor elit, sed eiusmod tempor init sit.</p>
                            </div>
                        </div>
                    </div>
                    {/* Add other feature items */}
                </div>
            </div>
        </section>
    );
}

function InnerBanner() {
    return (
        <section className="inner-banner py-5">
           <section class="inner-banner py-5">
        <div class="w3l-breadcrumb py-lg-5">
            <div class="container pt-4 pb-sm-4">
                <h4 class="inner-text-title font-weight-bold pt-sm-5 pt-4">About Us</h4>
                <ul class="breadcrumbs-custom-path">
                    <li><a href="index.html">Home</a></li>
                    <li class="active"><i class="fas fa-angle-right mx-2"></i>About</li>
                </ul>
            </div>
        </div>
        <div class="shape">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
                <path fill-opacity="1">
                    <animate attributeName="d" dur="20000ms" repeatCount="indefinite"
                        values="M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z; M0,160L48,181.3C96,203,192,245,288,234.7C384,224,480,160,576,133.3C672,107,768,117,864,138.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;												 M0,64L48,74.7C96,85,192,107,288,133.3C384,160,480,192,576,170.7C672,149,768,75,864,80C960,85,1056,171,1152,181.3C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                                                 M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;" />

                </path>
            </svg>
        </div>
    </section>
        </section>
    );
}
function AboutBlock() {
    return (
        <section className="w3l-homeblock1 py-5">
           <section class="w3l-homeblock1 py-5">
        <div class="container py-md-5 py-4">
            <div class="row align-items-center">
                <div class="col-lg-6 homeaboutimages">
                    <div class="row position-relative">
                        <div class="col-6">
                            <img src="../images/about1.jpg" alt="" class="img-fluid radius-image"/>
                        </div>
                        <div class="col-6 mt-4 ps-sm-3 ps-1">
                            <img src="../images/about2.jpg" alt="" class="img-fluid radius-image mb-sm-4 mb-3"/>
                            <img src="../images/about3.jpg" alt="" class="img-fluid radius-image"/>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 ps-xl-5 mt-lg-0 mt-5">
                    <h3 class="title-style mb-lg-4 mb-3">World's Best Business Agency Company Since 2006.</h3>
                    <p class="text-para">Aurabitur id gravida risus. Fusce eget ex fermentum, ultricies nisi ac sed,
                        lacinia est. Quisque ut lectus consequat.
                    </p>
                    <a href="about.html" class="btn btn-style mt-4">Learn More</a>
                </div>
            </div>
        </div>
    </section>
        </section>
    );
}
function TeamBlock() {
    return (
        <section className="w3l-team-main" id="team">
            <div className="team py-5">
                <div className="container py-md-5 py-4">
                    <div className="title-heading-w3 text-center mx-auto mb-md-5 mb-4" style={{maxWidth: '500px'}}>
                        <h3 className="title-style" style={{color: '#fff'}}>Meet our Team</h3>
                    </div>
                    <div className="row team-row mt-md-5 mt-4">
                        <div className="col-lg-3 col-6 team-wrap">
                            <div className="team-member text-center">
                                <div className="team-img">
                                    <img src="path_to_your_image_here" alt="" className="radius-image"/>
                                </div>
                                <a href="#url" className="team-title">Lern Victor</a>
                                <div className="team-details text-center">
                                    <div className="socials mt-20">
                                        <a href="#facebook">
                                            <span className="fab fa-facebook-f"></span>
                                        </a>
                                        <a href="#twitter">
                                            <span className="fab fa-twitter"></span>
                                        </a>
                                        <a href="#linkedin-in">
                                            <span className="fab fa-linkedin-in"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Add other team members */}
                    </div>
                </div>
            </div>
        </section>
    );
}
export { ProgressBlock, FeaturesBlock,InnerBanner,AboutBlock,TeamBlock };
