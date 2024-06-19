import React from 'react';


const ContentGrids = () => {
    return (
        <section className="home-about-w3l pt-lg-5 pb-5" id="features">
            <div className="container py-md-5 py-4">
                <div className="row align-items-center">
                    <div className="col-xl-7 col-lg-8 mt-lg-0 mt-5">
                        <div className="row">
                            {gridContent.map((item, index) => (
                                <div className={`col-sm-6 ${index % 2 !== 0 ? 'mt-sm-5 mt-4' : 'mt-sm-0 mt-4'}`} key={index}>
                                    <div className={`grids-1 ${item.active ? 'active' : ''}`}>
                                        <div className="icon-style">
                                            <i className={item.icon}></i>
                                        </div>
                                        <h4 className="title-head mb-2"><a href="about.html">{item.title}</a></h4>
                                        <p>{item.description}</p>
                                        <a href="about.html" className="btn btn-style btn-style-primary mt-4">
                                            Read More<i className="fas fa-arrow-right ms-1"></i>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-4 ps-lg-5 mt-lg-0 mt-5">
                        <h3 className="title-style mb-lg-4 mb-3">Innovative IT Solutions For Your Business</h3>
                        <p className="text-para">
                        At Blue Sparing, we specialize in providing innovative IT solution with a focus on the insurance industry. our mission is to empower insurance companies through cutting-edge technology, enhancing efficiency and customer engagement. Our expertise in developing robust, user-friendly insurance apps allows our clients to streamline their operations and provide exceptional service to their customers. Trust us to be your partner in digital transformation and innovation.
                        </p>
                        <a href="about.html" className="btn btn-style mt-sm-5 mt-4">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

const gridContent = [
    { icon: "fas fa-desktop", title: "Web Development", description:"We create tailored software solutions that address your specific business challenges. Our development process ensures high-quality, scalable, and maintainable software.", active: false },
    { icon: "fas fa-mobile", title: "App Development", description: "Engage your customers on the go with our innovative mobile app development services. We create high-performance, user-friendly mobile applications for both iOS and Android platforms.", active: true },
    { icon: "fas fa-users", title: "Consulting", description: "Our IT consulting services help you navigate the complex technology landscape. We provide strategic advice to optimize your IT infrastructure and operations.", active: false },
    { icon: "fas fa-city", title: "Graphic Designing", description: "Enhance your brand's appeal with our expert graphic design solutions. From logos to digital assets, we create captivating visuals tailored to your brand.", active: false },
];

export default ContentGrids;
