import React from 'react';


const HeroSlider = () => {
    return (
        <div className="banner-wrap">
            <div className="row m-0">
                <div className="col-md-6 banner-left pt-md-0 pt-5 pb-md-0 pb-sm-4">
                    <div className="container pt-md-0 pt-5">
                        <div className="banner-info ps-xxl-5 ps-xl-0 ps-5 ms-lg-5 py-md-0 py-5">
                        <p className="mb-1">Empowering Your Business</p>
                        <h3>Next-Gen IT Solutions</h3>
                            <a className="btn btn-style btn-style-2 mt-sm-5 mt-4" href="about.html">Get Started</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 banner-right">
                    <div className="text-center py-5">
                        <a href="/" className="popup-with-zoom-anim play-view text-center">
                            <span className="video-play-icon">
                                <span className="fa fa-play"></span>
                            </span>
                        </a>
                        <div id="small-dialog" className="zoom-anim-dialog mfp-hide">
                            <iframe></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
                    <path fillOpacity="1">
                        <animate attributeName="d" dur="20000ms" repeatCount="indefinite"
                            values="M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z; M0,160L48,181.3C96,203,192,245,288,234.7C384,224,480,160,576,133.3C672,107,768,117,864,138.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;												 M0,64L48,74.7C96,85,192,107,288,133.3C384,160,480,192,576,170.7C672,149,768,75,864,80C960,85,1056,171,1152,181.3C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                                                 M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;" />
                    </path>
                </svg>
            </div>
        </div>
    );
};

export default HeroSlider;
