import React from "react";
import { useCountUp } from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const propsDefaults = {
  projects: 100,
  customers: 25,
  mobileApps: 20,
  experience: 10
};

const Experience = () => {
  const {
    countUp: projects,
    start: startProjects,
    reset: resetProjects
  } = useCountUp({
    start: 0,
    end: propsDefaults.projects
  });

  const {
    countUp: customers,
    start: startCustomers,
    reset: resetCustomers
  } = useCountUp({
    start: 0,
    end: propsDefaults.customers,
    duration: 4
  });

  const {
    countUp: mobileApps,
    start: startMobileApps,
    reset: resetMobileApps
  } = useCountUp({
    start: 0,
    end: propsDefaults.mobileApps,
    duration: 6
  });

  const {
    countUp: experience,
    start: startExperience,
    reset: resetExperience
  } = useCountUp({
    start: 0,
    end: propsDefaults.experience,
    duration: 9
  });

  const onEnterViewport = () => {
    resetProjects();
    resetCustomers();
    resetMobileApps();
    resetExperience();

    startProjects();
    startCustomers();
    startMobileApps();
    startExperience();
  };

  return (
    <React.Fragment>
      <section className="work-with-us ptb-100">
        <div className="container">
          <ScrollTrigger onEnter={onEnterViewport}>
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6">
                <h3>{projects} +</h3>
                <span>Successful projects</span>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
                <h3>{customers} +</h3>
                <span>Satisfied customers</span>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
                <h3>{mobileApps} +</h3>
                <span>Mobile apps</span>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
                <h3>{experience} +</h3>
                <span>Years of experience</span>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </section>
    </React.Fragment>
  );
};
// Experience.defaultProps = {
//   workTitle: "Want to work with us?",
//   worksmallTitle: "Lets talk about project",
//   btnlink: "",
//   btnName: "get Started",
//   animationimg1: require("../../src/assets/img/3.png"),
//   animationimg2: require("../../src/assets/img/4.png"),
//   animationimg3: require("../../src/assets/img/1.png")
// };
export default Experience;
