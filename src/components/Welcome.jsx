import React, { Component } from "react";
import Icofont from "react-icofont";
import PropTypes from "prop-types";

class Welcome extends Component {
  render() {
    //Welcome loop start
    const welcomedata = this.props.welcomesData.map((welcome, index) => (
      <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
        <div className="single-box">
          <Icofont icon={welcome.icon} />
          <h3>{welcome.title}</h3>
          <p>{welcome.content}</p>
        </div>
      </div>
    ));
    //Welcome loop END

    return (
      <React.Fragment>
        <section className="welcome-area ptb-100">
          <div className="container">
            <div className="section-title">
              <span>{this.props.sectiontopTitle}</span>
              <h2>
                {this.props.sectionTitle} <b>{this.props.sectionTitleSpan}</b>
              </h2>
              <p>{this.props.sectionContent}</p>
            </div>

            <div className="row">{welcomedata}</div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

Welcome.propTypes = {
  sectiontopTitle: PropTypes.string,
  sectionTitle: PropTypes.string,
  sectionTitleSpan: PropTypes.string,
  sectionContent: PropTypes.string,
  welcomesData: PropTypes.array
};

Welcome.defaultProps = {
  sectiontopTitle: "EXPECT US",
  sectionTitle: "We are here to digitalize",
  sectionTitleSpan: "your ideas",
  sectionContent:
    "Here is a conversation starter: with over 3.5 billion smartphones & 1.9 billion tablets worldwide is it worth it to make an app for your business?",
  welcomesData: [
    {
      icon: "icofont-magnet",
      title: "Attractive Design",
      content:
        "Simplicity is the ultimate sophistication. At least if we have to believe some guy called Da Vinci."
    },
    {
      icon: "icofont-laptop-alt",
      title: "Clean Codes",
      content:
        "All our applications are custom made to fit the clients expectations."
    },
    {
      icon: "icofont-headphone-alt-2",
      title: "Fast Support",
      content:
        "The cloud can never fall, neither can we're at your disposal 24/7."
    }
  ]
};
export default Welcome;
