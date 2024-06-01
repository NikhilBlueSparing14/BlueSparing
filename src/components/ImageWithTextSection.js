import React from 'react';
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";

const ImageWithTextSection = () => {
    const content = [
        {
            img: img1,
            title: "Investment planning & strategy",
            description: "Sed luctus orci sit amet tempor luctus. Nullam non felis massa. Phasellus vitae fringilla sapien, quis dictum mi. Quisque consectetur egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus orci sit amet tempor luctus. Nullam non felis massa. Phasellus vitae fringilla sapien."
        },
        {
            img: img2,
            title: "Competitive research & Assurance",
            description: "Sed luctus orci sit amet tempor luctus. Nullam non felis massa. Phasellus vitae fringilla sapien, quis dictum mi. Quisque consectetur egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus orci sit amet tempor luctus. Nullam non felis massa. Phasellus vitae fringilla sapien."
        }
    ];

    return (
        <section className="w3l-text-6 py-5">
            <div className="container pb-md-5 pb-4">
                {content.map((item, index) => (
                    <div className={`row top-cont-grid align-items-center ${index % 2 === 0 ? '' : 'top-space'} ${index === 1 ? 'order-lg-first order-last' : ''}`} key={index}>
                        <div className={`col-lg-5 ${index % 2 === 0 ? '' : 'order-lg-last order-first'}`}>
                            <div className="right-img">
                                <img src={item.img} alt={item.title} className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-6 mt-lg-0 mt-sm-5 mt-4">
                            <div className="left-cont">
                                <h3 className="title-style">{item.title}</h3>
                                <p className="mt-3 mb-2">{item.description}</p>
                                <a href="services.html" className="btn btn-style mt-4">Learn More</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ImageWithTextSection;
