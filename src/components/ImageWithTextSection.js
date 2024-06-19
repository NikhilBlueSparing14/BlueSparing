import React from "react";
import img1 from "../assets/images/img1.jpg";
//import img2 from "../assets/images/img2.jpg";

const ImageWithTextSection = () => {
  const content = [
    {
      img: img1,
      title: "We are the best agency to improve your work",
      description:
        "We are the best agency to improve your work. Specializing in insurance IT solutions, we enhance efficiency and customer engagement through innovative app development.",
    },
    // {
    //     img: img2,
    //     title: "Competitive research & Assurance",
    //     description: "Sed luctus orci sit amet tempor luctus. Nullam non felis massa. Phasellus vitae fringilla sapien, quis dictum mi. Quisque consectetur egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus orci sit amet tempor luctus. Nullam non felis massa. Phasellus vitae fringilla sapien."
    // }
  ];

  return (
    <section className="w3l-text-6 py-5">
      <div className="container pb-md-5 pb-4">
        {content.map((item, index) => (
          <div
            className={`row top-cont-grid align-items-center ${
              index % 2 === 0 ? "" : "top-space"
            } ${index === 1 ? "order-lg-first order-last" : ""}`}
            key={index}
          >
            <div
              className={`col-lg-5 ${
                index % 2 === 0 ? "" : "order-lg-last order-first"
              }`}
            >
              <div className="right-img">
                <img src={item.img} alt={item.title} className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6 mt-lg-0 mt-sm-5">
              <div className="left-cont">
                <h3 className="title-style">{item.title}</h3>
                <p className="mt-3 mb-2">{item.description}</p>
                <div className="w3l-progressblock mt-md-3">
                  <div className="progress-info info1">
                    <h6 className="progress-tittle">
                      Market Strategy <span className="">80%</span>
                    </h6>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped"
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="progress-info info2">
                    <h6 className="progress-tittle">
                      Financial Support <span className="">95%</span>
                    </h6>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped"
                        role="progressbar"
                        style={{ width: "95%" }}
                        aria-valuenow="95"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="progress-info info2">
                    <h6 className="progress-tittle">
                      Online reporting <span className="">90%</span>
                    </h6>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped"
                        role="progressbar"
                        style={{ width: "90%" }}
                        aria-valuenow="95"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  {/* <a href="services.html" className="btn btn-style mt-4">
                  Learn More
                </a> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageWithTextSection;
