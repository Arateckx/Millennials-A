import React, { Component } from "react";
import axios from "axios";
import { ValidationForm, TextInput } from "react-bootstrap4-form-validation";
import PropTypes from "prop-types";

export class ContactUs extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      successMsg: ""
    };
  }
  handleForm = e => {
    let that = this;
    axios
      .post("https://formcarry.com/s/0Y7AqW-PNnOt", this.state, {
        headers: { Accept: "application/json" }
      })
      .then(function(response) {
        document.getElementById("contactForm").reset();
        that.setState({
          successMsg: "We received your submission"
        });
        document.getElementById("contactForm").reset();
      })
      .catch(function(error) {});
  };

  handleFields = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    //Start ContactUs Loop
    const contactusdata = this.props.contactussData.map((contactus, index) => (
      <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
        <div className="contact-box">
          <div className="icon">
            <i className={contactus.boxicon} />
          </div>
          <h4>{contactus.boxtitle}</h4>
          <p>
            <a href={contactus.boxitem1link}>{contactus.boxitem1}</a>
          </p>
          <p>
            <a href={contactus.boxitem2link}>{contactus.boxitem2}</a>
          </p>
        </div>
      </div>
    ));
    //End ContactUs Loop
    return (
      <React.Fragment>
        <section id="contact" className="contact-area ptb-100">
          <div className="container">
            <div className="section-title">
              <h2>
                {this.props.sectionTitle} <b>{this.props.sectionTitleSpan}</b>
              </h2>
              <p>{this.props.sectionContent}</p>
            </div>
            <div className="row">
              {contactusdata}
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="get-in-touch">
                  <h3>{this.props.title}</h3>
                  <p className="m-0">{this.props.content1}</p>
                  <p className="m-0">{this.props.content2}</p>
                  <p>{this.props.content3}</p>
                  <ul>
                    <li>
                      <a href={this.props.fblink} className="icofont-facebook">
                        {" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href={this.props.twitterlink}
                        className="icofont-twitter"
                      >
                        {" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href={this.props.instagramlink}
                        className="icofont-instagram"
                      >
                        {" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href={this.props.linkedinlink}
                        className="icofont-linkedin"
                      >
                        {" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-8 col-md-12 col-sm-12">
                <ValidationForm
                  id="contactForm"
                  onSubmit={(e, formData, inputs) => {
                    e.preventDefault();
                    this.handleForm(formData);
                  }}
                >
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <TextInput
                          name="name"
                          id="name"
                          required
                          successMessage=""
                          errorMessage="Please enter your name"
                          className="form-control"
                          placeholder="Name"
                          autoComplete="off"
                          onChange={this.handleFields}
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <TextInput
                          name="email"
                          id="email"
                          type="email"
                          required
                          successMessage=""
                          errorMessage="Please enter your email address"
                          className="form-control"
                          placeholder="Email"
                          autoComplete="off"
                          onChange={this.handleFields}
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group">
                        <TextInput
                          name="message"
                          id="description"
                          multiline
                          placeholder="Your message"
                          className="form-control"
                          required
                          successMessage=""
                          errorMessage="Please write your message"
                          rows="5"
                          autoComplete="off"
                          onChange={this.handleFields}
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <button type="submit" className="btn btn-primary">
                        Send Message
                      </button>
                      <div
                        id="msgSubmit"
                        className="h3 text-center hidden"
                      ></div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </ValidationForm>
                {this.state.successMsg !== "" ? (
                  <h3 className="contactMsg">{this.state.successMsg}</h3>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
ContactUs.PropsTypes = {
  sectionTitle: PropTypes.string,
  sectionTitleSpan: PropTypes.string,
  sectionContent: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  fblink: PropTypes.string,
  twitterlink: PropTypes.string,
  instagramlink: PropTypes.string,
  linkedinlink: PropTypes.string,
  contactussData: PropTypes.array
};
ContactUs.defaultProps = {
  sectionTitle: "Contact",
  sectionTitleSpan: "Us",
  sectionContent:
    "We're at your disposal from monday until friday; Office hours daily from 8:00 am - 5:00 pm, Brussels time. We work with an international clientele so we can be flexible. ",
  title: "Get in Touch",
  content1: "We are Millennials.Agency,",
  content2: "We are here to digitalize your ideas!",
  content3: "Expect us!",
  fblink: "https://www.facebook.com/Millennials.digitalmarketing",
  instagramlink: "https://www.instagram.com/millennials.agency/",
  contactussData: [
    {
      boxicon: "icofont-location-pin",
      boxtitle: "Address",
      boxitem1link: "#",
      boxitem1: "Located in the buzzing city of",
      boxitem2link: "#",
      boxitem2: "Antwerp, Belgium"
    },
    {
      boxicon: "icofont-mail",
      boxtitle: "Email",
      boxitem1link: "mailto:Sales@millennials.agency",
      boxitem1: "Sales@Millennials.agency",
      boxitem2link: "mailto:Contact@millennials.agency",
      boxitem2: "Contact@millennials.agency"
    },
    {
      boxicon: "icofont-phone",
      boxtitle: "Phone",
      boxitem1link: "tel:003238087825",
      boxitem1: "+32 3 808 78 25",
      boxitem2link: "tel:0040740334560",
      boxitem2: "+40 740 334 560"
    }
  ]
};
export default ContactUs;
