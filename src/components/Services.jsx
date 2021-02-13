import React, { Component } from "react";
import Icofont from "react-icofont";
import PropTypes from "prop-types";

export class Services extends Component {
  render() {
    //Start Services Loop
    const servicedata = this.props.servicesData.map((services, index) => (
      <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
        <div className="single-services">
          <Icofont icon={services.icon} />
          <h3>{services.title}</h3>
          <p>{services.content}</p>

          <div className="bg-number">{services.bgnumber}</div>
        </div>
      </div>
    ));
    //End Services Loop
    return (
      <React.Fragment>
        <section id="services" className="services-area ptb-100">
          <div className="container">
            <div className="section-title">
              <h2>
                {this.props.sectionTitle} <b>{this.props.sectionTitleSpan}</b>
              </h2>
              <p>{this.props.sectionContent}</p>
            </div>
            <div className="row">{servicedata}</div>
          </div>
          <div className="animation-box5">
            <img
              src={this.props.animationImg}
              className="rotateme"
              alt="vector"
            />
          </div>
        </section>
      </React.Fragment>
    );
  }
}
Services.propsTypes = {
  sectionTitle: PropTypes.string,
  sectionTitleSpan: PropTypes.string,
  sectionContent: PropTypes.string,
  animationImg: PropTypes.string,
  servicesData: PropTypes.array
};
Services.defaultProps = {
  sectionTitle: "Our",
  sectionTitleSpan: "Services",
  sectionContent:
    "Millennials is your one-stop shop for web, mobile, software and cloud solutions. From analysis to maintenance, we provide full end-to-end software services for clients in various fields of business.",
  animationImg: require("../../src/assets/img/vector-bg.png"),

  servicesData: [
    {
      icon: "icofont-computer",
      title: "Web Application Development",
      content:
        "Your next web-app doesn't have to be a headache, let us guide you throughout the entire process.",
      bgnumber: "1"
    },
    {
      icon: "icofont-brand-apple",
      title: "Mobile App Development",
      content:
        "Since the number of mobile users will only rise the coming years, you'll want to start thinking if you want a mobile app for your business.",
      bgnumber: "2"
    },
    {
      icon: "icofont-gears",
      title: "Software Development",
      content:
        "Each business is unique, that is why most businesses are keen to develop their own custom software to help improve their productivity.",
      bgnumber: "3"
    },
    {
      icon: "icofont-pen-alt-3",
      title: "User Experience Design",
      content:
        "Your apps will have a better chance to succeed if you have an intuitive design that anticipates user needs",
      bgnumber: "4"
    },
    {
      icon: "icofont-chart-growth",
      title: "International Marketing",
      content:
        "You want to market your product to reach the other side of the world? Well...Let's talk!",
      bgnumber: "5"
    },
    {
      icon: "icofont-tick-boxed",
      title: "Social Media Marketing",
      content:
        "Content is King. That's why it is very important to not overlook social media when setting up your marketing plan.",
      bgnumber: "6"
    },
    {
      icon: "icofont-pencil-alt-1",
      title: "Search Engine Optimization",
      content:
        "On-page SEO, off-page SEO, backlinks and many more. We cannot express how important all aspects of SEO are for your business.",
      bgnumber: "7"
    },
    {
      icon: "icofont-cloudapp",
      title: "Cloud Hosting Solutions",
      content:
        "Scale your app on the cloud, it will have the ability to easily scale your server resources up-and-down on an as-needed basis",
      bgnumber: "8"
    }
  ]
};
export default Services;
