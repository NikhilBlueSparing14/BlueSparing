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
                        <h3 className="title-style mb-lg-4 mb-3">Digital Experience in the Talent Journey and Learning!</h3>
                        <p className="text-para">
                            Aurabitur id gravida risus. Fusce eget ex fermentum, ultricies nisi ac sed,
                            lacinia est. Quisque ut lectus consequat, venenatis eros et, sed commodo risus.
                        </p>
                        <a href="about.html" className="btn btn-style mt-sm-5 mt-4">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

const gridContent = [
    { icon: "fas fa-chart-line", title: "Our Approach", description: "Sed ut unde omnis iste natus error sit oluptatem accusa ntium dolo remque ladase.", active: false },
    { icon: "fas fa-business-time", title: "Our Experience", description: "Sed ut unde omnis iste natus error sit oluptatem accusa ntium dolo remque ladase.", active: true },
    { icon: "fas fa-users", title: "Our Clients", description: "Sed ut unde omnis iste natus error sit oluptatem accusa ntium dolo remque ladase.", active: false },
    { icon: "fas fa-city", title: "Our Office", description: "Sed ut unde omnis iste natus error sit oluptatem accusa ntium dolo remque ladase.", active: false },
];

export default ContentGrids;
