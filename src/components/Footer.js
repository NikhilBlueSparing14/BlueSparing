import React from 'react';


const Footer = () => {
    return (
        <footer className="w3l-footer">
            <div className="shape-footer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
                    <path fillOpacity="1">
                        <animate attributeName="d" dur="20000ms" repeatCount="indefinite"
                            values="M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z; 
                                    M0,160L48,181.3C96,203,192,245,288,234.7C384,224,480,160,576,133.3C672,107,768,117,864,138.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z; 
                                    M0,64L48,74.7C96,85,192,107,288,133.3C384,160,480,192,576,170.7C672,149,768,75,864,80C960,85,1056,171,1152,181.3C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                                    M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;" />
                    </path>
                </svg>
            </div>
            <div className="w3l-footer-16 py-5">
                <div className="container">
                    <div className="row footer-p">
                        <div className="col-lg-4 pe-lg-5">
                            <h3>About Us</h3>
                            <p className="mt-3">We are the best IT software provider to improve your work. Specializing in insurance IT solutions, we enhance efficiency and customer engagement through innovative app development.</p>
                            <div className="columns-2 mt-4 pt-1">
                                <ul className="social">
                                    <li><a href="#facebook"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#linkedin"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#twitter"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#google"><i className="fab fa-google-plus-g"></i></a></li>
                                    <li><a href="#github"><i className="fab fa-github"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-5 mt-lg-0 mt-5">
                            <div className="row">
                                <div className="col-xl-5 col-6 column">
                                    <h3>Quick Link</h3>
                                    <ul className="footer-gd-16">
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="services.html">Services</a></li>
                                        <li><a href="#Testimonials">Testimonials</a></li>
                                        <li><a href="contact.html">Contact Us</a></li>
                                    </ul>
                                </div>
                                <div className="col-6 column">
                                    <h3>Contact Info</h3>
                                    <ul className="footer-contact-list">
                                    <li>505, 5th Floor, Royal Word, Sansar Chandra Road, Jaipur - 302001</li>
                                        <li className="mt-2"><a href="tel:+1223456790">+91 96490 09500</a></li>
                                        <li className="mt-2"><a href="mailto:info@example.com">support@bluesparing.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-7 col-sm-8 column mt-lg-0 mt-4 pl-xl-0">
                            <h3>Newsletter </h3>
                            <div className="end-column">
                                <form action="#" className="subscribe" method="post">
                                    <input type="email" name="email" placeholder="Email Address" required="" />
                                    <button><span className="fa fa-paper-plane" aria-hidden="true"></span></button>
                                </form>
                                <p className="mt-4">Subscribe to our mailing list and get updates to your email inbox.</p>
                            </div>
                        </div>
                    </div>
                    <div className="below-section text-center pt-lg-4 mt-5">
                    <p className="copy-text">&copy; 2024 Work Field. All rights reserved. Design by<span className="blinking-heart">❤️</span> Blue Sparing</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
