import React, { Component } from "react";
import PropTypes from "prop-types";
import OwlCarousel from "react-owl-carousel3";
import ReactWOW from "react-wow";

export class Team extends Component {
  render() {
    //Start Team Loop
    const teamdata = this.props.teamsData.map((team, index) => (
      <div className="col-lg-12 col-md-12 col-sm-12" key={index}>
        <div className="single-team">
          <img src={team.img} alt="team-img" className="circular--square" />
          <ReactWOW>
            <ul className="member-social-links wow fadeInUp">
              {team.socialData.map((s, index) => (
                <li key={index}>
                  <a href={s.sociallink} className={s.socialicon}>
                    {" "}
                  </a>
                </li>
              ))}
            </ul>
          </ReactWOW>
          <h3>{team.name}</h3>
          <span>{team.profession}</span>
        </div>
      </div>
    ));
    //End Team Loop
    return (
      <React.Fragment>
        <section id="team" className="team-area ptb-100">
          <div className="container">
            <div className="section-title">
              <h2>
                {this.props.sectionTitle} <b>{this.props.sectionTitleSpan}</b>
              </h2>
              <p>{this.props.sectionContent}</p>
            </div>
            <div className="row">
              <OwlCarousel
                className="team-slides owl-theme"
                loop={true}
                autoplay={true}
                nav={false}
                mouseDrag={true}
                autoplayHoverPause={true}
                responsiveClass={true}
                dots={true}
                navText={[
                  "<i class='icon icon-Arrow'></i>",
                  "<i class='icon icon-Arrow'></i>"
                ]}
                responsive={{
                  0: {
                    items: 1
                  },
                  576: {
                    items: 2
                  },
                  768: {
                    items: 3
                  }
                  // 1200: {
                  //   items: 4
                  // }
                }}
              >
                {teamdata}
              </OwlCarousel>
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
          <div className="animation-box4">
            <img src={this.props.animationimg4} alt="animateimage" />
          </div>
        </section>
      </React.Fragment>
    );
  }
}
Team.PropsTypes = {
  sectionTitle: PropTypes.string,
  sectionTitleSpan: PropTypes.string,
  sectionContent: PropTypes.string,
  animationimg1: PropTypes.string,
  animationimg2: PropTypes.string,
  animationimg3: PropTypes.string,
  animationimg4: PropTypes.string,
  teamsData: PropTypes.array
};
Team.defaultProps = {
  sectionTitle: "Our",
  sectionTitleSpan: "Team",
  sectionContent:
    "With an expierenced staff with more than 10 years of knowledge, no project is too big for us.",
  animationimg1: require("../../src/assets/img/3.png"),
  animationimg2: require("../../src/assets/img/4.png"),
  animationimg3: require("../../src/assets/img/1.png"),
  animationimg4: require("../../src/assets/img/5.png"),
  teamsData: [
    {
      img: require("../../src/assets/img/adrian-nistor.jpg"),
      name: "Adrian Nistor",
      profession: "CEO & Founder",
      socialData: [
        {
          socialicon: "icofont-github",
          sociallink: "https://github.com/Arateckx"
        },
        {
          socialicon: "icofont-linkedin",
          sociallink: "https://www.linkedin.com/in/adrian-nistor-01831014a/"
        }
      ]
    },
    {
      img: require("../../src/assets/img/adrian.moloca.png"),
      name: "Adrian Moloca",
      profession: "Lead Developer",
      socialData: [
        {
          socialicon: "icofont-github",
          sociallink: "https://github.com/adymoloca"
        },
        {
          socialicon: "icofont-linkedin",
          sociallink: "#"
        }
      ]
    },
    {
      img: require("../../src/assets/img/Alex.png"),
      name: "Alex Serban",
      profession: "Full-stack Developer",
      socialData: [
        {
          socialicon: "icofont-github",
          sociallink: "https://github.com/AlexSerbanGit"
        },
        {
          socialicon: "icofont-linkedin",
          sociallink: "#"
        }
      ]
    },
    {
      img: require("../../src/assets/img/Bogdan.jpg"),
      name: "Bogdan Bardea",
      profession: "Full-stack Developer",
      socialData: [
        {
          socialicon: "icofont-github",
          sociallink: "https://github.com/BogdanBardea"
        },
        {
          socialicon: "icofont-linkedin",
          sociallink: "https://www.linkedin.com"
        }
      ]
    },
    {
      img: require("../../src/assets/img/Paul.png"),
      name: "Paul Tiplea",
      profession: "Junior front-end developer",
      socialData: [
        {
          socialicon: "icofont-github",
          sociallink: "#"
        },
        {
          socialicon: "icofont-linkedin",
          sociallink: "#"
        },
      ]
    }

    // {
    //   img: require("../../src/assets/img/corneliu-dumitru.jpg"),
    //   name: "Corneliu Dumitru",
    //   profession: "CTO & Co-Founder",
    //   socialData: [
    //     {
    //       socialicon: "icofont-github",
    //       sociallink: "#"
    //     },
    //     {
    //       socialicon: "icofont-linkedin",
    //       sociallink: "#"
    //     }
    //   ]
    // }
  ]
};
export default Team;