import React from 'react';

const statsContent = [
    { icon: "fab fa-r-project", count: 200, text: "Successful Projects" },
    { icon: "fas fa-smile", count: 100, text: "Happy Clients" },
    { icon: "fas fa-medal", count: 30, text: "Business Awards" },
    { icon: "fas fa-mug-hot", count: 130, text: "Cup Coffee" }
];

const Stats = () => {
    return (
        <section className="w3_stats py-5" id="stats">
            <div className="container py-md-5 py-5">
                <div className="title-heading-w3 text-center mx-auto mb-md-5 mb-4" style={{ maxWidth: "500px" }}>
                    <h3 className="title-style" style={{ color: "white" }}>We have over 10 years Experience</h3>
                </div>
                <div className="w3-stats text-center pt-lg-4">
                    <div className="row">
                        {statsContent.map((item, index) => (
                            <div className={`col-md-3 col-6 ${index % 2 === 0 ? 'mt-md-0 mt-4' : ''}`} key={index}>
                                <div className="counter">
                                    <i className={item.icon}></i>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <div className="timer" data-to={item.count} data-speed="1500"></div>
                                        <span className="stats-plus">{item.count}</span>
                                    </div>
                                    <p className="count-text">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
