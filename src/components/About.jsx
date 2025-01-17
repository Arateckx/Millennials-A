import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel3";
import i from "react-icofont";
import PropTypes from "prop-types";

export class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about" className="about-area ptb-100 bg-f9f9f9">
          <div className="container">
            <div className="row">
              <div className="about-image">
                <img src={this.props.sectionImage} alt="about-img" />
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 offset-lg-6">
                <div className="row">
                  <OwlCarousel
                    className="about-slider owl-theme"
                    items={1}
                    nav={false}
                    dots={true}
                    touchDrag={false}
                    mouseDrag={false}
                    autoplay={false}
                    smartSpeed={700}
                    loop={true}
                    navText={[
                      "<i class='icon icon-Arrow'></i>",
                      "<i class='icon icon-Arrow'></i>"
                    ]}
                  >
                    <div className="col-lg-12">
                      <div className="about-title">
                        <h3>
                          {this.props.skillToptitle}{" "}
                          <b>{this.props.skillToptitlespan}</b>
                        </h3>
                        <h5>
                          {this.props.skillTitle}{" "}
                          <span>{this.props.skillTitlespan}</span>
                        </h5>
                        <p>{this.props.skillContent}</p>
                      </div>

                      <div className="our-skill">
                        <div className="single-progress">
                          <h3 className="progress-title">
                            {this.props.progressTitle1}
                          </h3>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              style={{ width: "95%" }}
                            >
                              <div className="progress-value">
                                {this.props.progressValue1}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="single-progress">
                          <h3 className="progress-title">
                            {this.props.progressTitle2}
                          </h3>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              style={{ width: "95%" }}
                            >
                              <div className="progress-value">
                                {this.props.progressValue2}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="single-progress">
                          <h3 className="progress-title">
                            {this.props.progressTitle3}
                          </h3>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              style={{ width: "95%" }}
                            >
                              <div className="progress-value">
                                {this.props.progressValue3}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="single-progress">
                          <h3 className="progress-title">
                            {this.props.progressTitle4}
                          </h3>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              style={{ width: "92%" }}
                            >
                              <div className="progress-value">
                                {this.props.progressValue4}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="about-title">
                        <h3>
                          {this.props.item2topTitle}{" "}
                          <b>{this.props.item2topTitlespan}</b>
                        </h3>
                        <h5>
                          {this.props.item2Title}
                          <span> {this.props.item2Titlespan}</span>
                        </h5>
                        <p>{this.props.item2ContentTop}</p>
                      </div>

                      <div className="our-mission">
                        <p>{this.props.item2ContentMiddle}</p>
                        <p>{this.props.item2ContentBottom}</p>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="about-title">
                        <h3>
                          {this.props.item3TopTitle}{" "}
                          <b>{this.props.item3TopTitleSpan}</b>
                        </h3>
                        <h5>
                          {this.props.item3Title}{" "}
                          <span>{this.props.item3TitleSpan}</span>
                        </h5>
                        <p>{this.props.item3Content}</p>
                      </div>

                      <div className="why-choose-us">
                        <div className="row m-0">
                          <div className="col-lg-4 col-md-4 p-0">
                            <div className="single-choose">
                              <i className={this.props.logo1} />
                              <h5>{this.props.log1Title}</h5>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-4 p-0">
                            <div className="single-choose">
                              <i className={this.props.logo2} />
                              <h5>{this.props.log2Title}</h5>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-4 p-0">
                            <div className="single-choose">
                              <i className={this.props.logo3} />
                              <h5>{this.props.log3Title}</h5>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-4 p-0">
                            <div className="single-choose">
                              <i className={this.props.logo4} />
                              <h5>{this.props.log4Title}</h5>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-4 p-0">
                            <div className="single-choose">
                              <i className={this.props.logo5} />
                              <h5>{this.props.log5Title}</h5>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-4 p-0">
                            <div className="single-choose">
                              <i className={this.props.logo6} />
                              <h5>{this.props.log6Title}</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
          <div className="animation-box1">
            <img src={this.props.animationImg1} alt="styleimage" />
          </div>
          <div className="animation-box2">
            <img src={this.props.animationImg2} alt="styleimage" />
          </div>
          <div className="animation-box3">
            <img src={this.props.animationImg3} alt="styleimage" />
          </div>
          <div className="animation-box6">
            <img src={this.props.animationImg4} alt="styleimage" />
          </div>
        </section>
      </React.Fragment>
    );
  }
}
About.propTypes = {
  sectionImage: PropTypes.string,

  animationImg1: PropTypes.string,
  animationImg2: PropTypes.string,
  animationImg3: PropTypes.string,
  animationImg4: PropTypes.string,

  skillToptitle: PropTypes.string,
  skillToptitlespan: PropTypes.string,
  skillTitle: PropTypes.string,
  skillTitlespan: PropTypes.string,
  skillContent: PropTypes.string,
  progressTitle1: PropTypes.string,
  progressValue1: PropTypes.string,
  progressTitle2: PropTypes.string,
  progressValue2: PropTypes.string,
  progressTitle3: PropTypes.string,
  progressValue3: PropTypes.string,
  progressTitle4: PropTypes.string,
  progressValue4: PropTypes.string,

  item2topTitle: PropTypes.string,
  item2topTitlespan: PropTypes.string,
  item2Title: PropTypes.string,
  item2Titlespan: PropTypes.string,
  item2ContentTop: PropTypes.string,
  item2ContentMiddle: PropTypes.string,
  item2ContentBottom: PropTypes.string,

  item3TopTitle: PropTypes.string,
  item3TopTitleSpan: PropTypes.string,
  item3Title: PropTypes.string,
  item3TitleSpan: PropTypes.string,
  item3Content: PropTypes.string,
  logo1: PropTypes.string,
  logo2: PropTypes.string,
  logo3: PropTypes.string,
  logo4: PropTypes.string,
  logo5: PropTypes.string,
  logo6: PropTypes.string,
  log1Title: PropTypes.string,
  log2Title: PropTypes.string,
  log3Title: PropTypes.string,
  log4Title: PropTypes.string,
  log5Title: PropTypes.string,
  log6Title: PropTypes.string
};
About.defaultProps = {
  sectionImage: require("../../src/assets/img/about-img.png"),

  animationImg1: require("../../src/assets/img/3.png"),
  animationImg2: require("../../src/assets/img/4.png"),
  animationImg3: require("../../src/assets/img/1.png"),
  animationImg4: require("../../src/assets/img/6.png"),

  skillToptitle: "About",
  skillToptitlespan: "Millennials",
  skillTitle: "What we do",
  skillTitlespan: "Development & Marketing",
  skillContent: "Skills speak for themselves so we don't have to.",
  progressTitle1: "Web Development",
  progressValue1: "95%",
  progressTitle2: "Mobile Development",
  progressValue2: "95%",
  progressTitle3: "Desktop Development",
  progressValue3: "95%",
  progressTitle4: "Marketing",
  progressValue4: "92%",

  item2topTitle: "Know About Our",
  item2topTitlespan: "Mission",
  item2Title: "We Are Millennials",
  item2Titlespan: "We're Here To Digitalize Your Ideas",
  item2ContentTop:
    "Millennials' Founder has been with his nose in the programming books since the young age of 12 years old. After perfecting his programming skills, he started to study marketing so he could market the projects he had been working on.",
  item2ContentMiddle:
    "Years later after few succesfull start-ups around the world it became time to open an full-service marketing agency that helps other people digitalizing their ideas. We've build an amazing network of influencers from all around the world.",
  item2ContentBottom:
    "Because we provide our services on a international scale, communication is key. That is why we do face-to-face meetings but also virtual meeting via skype are an option.",

  item3TopTitle: "Why Choose",
  item3TopTitleSpan: "Us",
  item3Title: "We Are",
  item3TitleSpan: "Creative",
  item3Content: "Quality software. On time. Every time.",
  logo1: "icofont-binary",
  log1Title: "Custom Clean Code",
  logo2: "icofont-ui-browser",
  log2Title: "UX/UI Design",
  logo3: "icofont-ui-user-group",
  log3Title: "Expert Team",
  logo4: "icofont-headphone-alt-2",
  log4Title: "Friendly Support",
  logo5: "icofont-cloudapp",
  log5Title: "Cloud Hosting",
  logo6: "icofont-laptop-alt",
  log6Title: "SEO & Marketing"
};
export default About;
