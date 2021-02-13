import React, { Component } from "react";
import PropTypes from "prop-types";
import OwlCarousel from "react-owl-carousel3";

class Partners extends Component {
  render() {
    //Partner loop start
    const partnerData = this.props.partnersData.map((partner, index) => (
      <div className="col-lg-12 col-md-12" key={index}>
        <a href={partner.partnerLink}>
          <img
            src={partner.partnerLogo}
            alt="partner"
            style={{ objectFit: "scale-down", height: "100px" }}
          />
        </a>
      </div>
    ));
    //Partner loop END
    return (
      <React.Fragment>
        <div className="partner-area ptb-100 bg-f9f9f9">
          <div className="container">
            <div className="section-title">
              <h2>
                {this.props.sectionTitle} <b>{this.props.sectionTitleSpan}</b>
              </h2>
            </div>
            <div className="row">
              <OwlCarousel
                className="owl-theme partner-slides"
                loop
                autoplay={true}
                nav={false}
                mouseDrag={true}
                autoplayHoverPause={true}
                responsiveClass={true}
                dots={false}
                responsive={{
                  0: { items: 2 },
                  768: {
                    items: 4
                  },
                  1200: {
                    items: 6
                  }
                }}
              >
                {partnerData}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Partners.propTypes = {
  sectionName: PropTypes.string,
  sectionTitle: PropTypes.string,
  sectionDescription: PropTypes.string,
  partnersData: PropTypes.array
};

Partners.defaultProps = {
  sectionName: "",
  sectionTitle: "Our",
  sectionTitleSpan: "Clients",
  sectionDescription: "",
  partnersData: [
    {
      partnerLogo: require("../../src/assets/img/introvoke.jpg"),
      partnerLink: "https://introvoke.com/"
    },
    {
      partnerLogo: require("../../src/assets/img/partner-4.png"),
      partnerLink: "https://www.facebook.com/"
    },
    {
      partnerLogo: require("../../src/assets/img/partner-5.png"),
      partnerLink: "https://www.technics-group.be"
    },
    {
      partnerLogo: require("../../src/assets/img/partner-6.png"),
      partnerLink: "https://www.tndramendeuren.be/"
    },
    {
      partnerLogo: require("../../src/assets/img/microsoft-logo.png"),
      partnerLink: "https://www.microsoft.com/"
    },
    {
      partnerLogo: require("../../src/assets/img/powerodIT.png"),
      partnerLink: "https://powerodit.com/"
    },
    {
      partnerLogo: require("../../src/assets/img/futurize.png"),
      partnerLink: "https://www.futurize.be/"
    },
    {
      partnerLogo: require("../../src/assets/img/partner-3.png"),
      partnerLink: "https://www.vvkvmvzw.be/"
    }
  ]
};
export default Partners;
