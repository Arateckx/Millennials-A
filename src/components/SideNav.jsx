import React, { Component } from "react";
import { Nav, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import Icofont from "react-icofont";

export class SideNav extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <React.Fragment>
        <Nav.Link onClick={this.handleShow}>
          <span></span>
        </Nav.Link>

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          className="right"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className="logo">
              <a href="/">
                {this.props.logotext}
                <span>{this.props.logotextspan}</span>{" "}
              </a>
            </div>
            <p>{this.props.content}</p>
            <ul className="modal-contact-info">
              <li>
                <Icofont icon="icofont-google-map" />{" "}
                <b>{this.props.locationbolt}</b>
                {this.props.locationnormal}
              </li>
              <li>
                <Icofont icon="icofont-ui-call" /> <b>{this.props.phonebolt}</b>
                {this.props.phonenormal}
              </li>
              <li>
                <Icofont icon="icofont-envelope" />{" "}
                <b>{this.props.mailbolot}</b>
                {this.props.mailnormal}
              </li>
            </ul>

            <ul className="social-links">
              <li>
                <a href={this.props.facebooklink}>
                  <Icofont icon="icofont-facebook" />
                </a>
              </li>
              <li>
                <a href={this.props.instagramlink}>
                  <Icofont icon="icofont-instagram" />
                </a>
              </li>
            </ul>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    );
  }
}
SideNav.PropsTypes = {
  logotext: PropTypes.string,
  logotextspan: PropTypes.string,
  content: PropTypes.string,
  locationbolt: PropTypes.string,
  locationnormal: PropTypes.string,
  phonebolt: PropTypes.string,
  phonenormal: PropTypes.string,
  mailbolot: PropTypes.string,
  mailnormal: PropTypes.string,
  facebooklink: PropTypes.string,
  twitterlink: PropTypes.string,
  instagramlink: PropTypes.string,
  linkedinlink: PropTypes.string,
  pinterestlink: PropTypes.string
};
SideNav.defaultProps = {
  logotext: ".MILLEN",
  logotextspan: "NIALS.",
  content:
    "Millennials have much planned for the future, working with great clients and continued software development. If you'd like to join our team, then we'd also love to hear from you.",
  locationbolt: "Belgium",
  locationnormal: "Located in the buzzing city of Antwerp",
  phonebolt: "+31 684 769 904",
  phonenormal: "Give us a call",
  mailbolot: "contact@millennials.agency",
  mailnormal: "24/7 online support",
  facebooklink: "https://www.facebook.com/Millennials.digitalmarketing/",
  instagramlink: "https://www.instagram.com/millennials.agency/"
};
export default SideNav;
