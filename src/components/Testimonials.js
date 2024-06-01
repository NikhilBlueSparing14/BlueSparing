import React, { useState } from 'react';
import testi1 from "../assets/images/dummy6.jfif";
import testi2 from "../assets/images/dummy1.png";
import testi3 from "../assets/images/dummy3.png";
import testi4 from "../assets/images/dummy4.png";
import testi5 from "../assets/images/dummy5.png";
import testi6 from "../assets/images/dummy2.jfif";
import testi7 from "../assets/images/dummy7.jfif";
// import quoteImage from "../assets/images/quote.png";

const testimonialsData = [
    {
        name: "Theo Hall",
        subtitle: "Subtitle goes here",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: testi1,
        active: true,
        position: "position-1"
    },
    {
        name: "Olive Yew",
        subtitle: "Subtitle goes here",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: testi4,
        active: false,
        position: "position-2"
    },
    {
        name: "Maya Didas",
        subtitle: "Subtitle goes here",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: testi3,
        active: false,
        position: "position-3"
    },
    {
        name: "Brock Lee",
        subtitle: "Subtitle goes here",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: testi2,
        active: false,
        position: "position-4"
    },
    {
        name: "Shona Leer",
        subtitle: "Subtitle goes here",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: testi5,
        active: false,
        position: "position-5"
    },
    {
        name: "Dennis Lson",
        subtitle: "Subtitle goes here",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: testi6,
        active: false,
        position: "position-6"
    },
    {
        name: "Jenna John",
        subtitle: "Subtitle goes here",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: testi7,
        active: false,
        position: "position-7"
    }
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleTestimonialClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <section className="testimonial-area pt-5" id="testimonials">
            <div className="container pt-md-5 pt-4">
                <div className="title-heading-w3 text-center mx-auto mb-sm-5 mb-4" style={{ maxWidth: '500px' }}>
                    <h3 className="title-style">Testimonials</h3>
                </div>
                <div className="testi-wrap">
                    {testimonialsData.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`client-single ${index === activeIndex ? 'active' : 'inactive'} position-${index + 1}`}
                            data-position={`position-${index + 1}`}
                            onClick={() => handleTestimonialClick(index)}
                        >
                            <div className="client-img">
                                <img src={testimonial.image} alt={`${testimonial.name}'s testimonial`} />
                            </div>
                            <div className="client-info">
                                <h3>{testimonial.name}</h3>
                                <p>{testimonial.subtitle}</p>
                            </div>
                            <div className="client-comment">
                                <h3>{testimonial.comment}</h3>
                                {/* <img src={quoteImage} alt="quote" /> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
