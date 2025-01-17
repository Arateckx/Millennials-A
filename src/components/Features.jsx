import React, { Component } from "react";
import PropTypes from "prop-types";
import i from "react-icofont";

export class Features extends Component {
  render() {
    //Start Features Loop
    const featuresdata = this.props.featuresData.map((features, index) => (
      <div className="single-features" key={index}>
        <div className="icon">
          <i className={features.icon} />
        </div>
        <h3>{features.title}</h3>
        <p>{features.content}</p>
      </div>
    ));
    //End Features Loop
    return (
        <React.Fragment>
            <section className="features-area ptb-100">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="features-img">
                        <img src={this.props.featuresImage} alt="features" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12">{featuresdata}</div>
                    </div>
                </div>
                <div className="animation-box1">
                    <img src={this.props.animationimg1} alt="animateimage" />
                </div>
                <div className="animation-box2">
                    <img src={this.props.animationimg2} alt="animateimage" />
                </div>
                <div className="animation-box3">
                    <img src={this.props.animationimg3} alt="animateimage" />
                </div>
            </section>
        </React.Fragment>
    );
  }
}
Features.PropsTypes = {
  animationimg1: PropTypes.string,
  animationimg2: PropTypes.string,
  animationimg3: PropTypes.string,
  featuresImage: PropTypes.string,
  featuresData: PropTypes.array
};
Features.defaultProps = {
  featuresImage: require("../../src/assets/img/features-img.jpg"),
  animationimg1: require("../../src/assets/img/3.png"),
  animationimg2: require("../../src/assets/img/4.png"),
  animationimg3: require("../../src/assets/img/1.png"),
  featuresData: [
    {
      icon: "icofont-dashboard-web",
      title: "Full Service Development",
      content:
        "We offer a wide range of development services before, during and after an application's lifecycle."
    },
    {
      icon: "icofont-binary",
      title: "Clean & Unique Design",
      content:
        "All apps & software developed by Millennials Agency is custom coded."
    },
    {
      icon: "icofont-chart-bar-graph",
      title: "Digital Marketing",
      content:
        "Market your products to our own network with over 1200+ social media influencers from more than 50 countries."
    }
  ]
};
export default Features;
