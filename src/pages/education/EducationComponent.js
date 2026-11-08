import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import EducationImg from "./EducationImg";
import { competitiveSites } from "../../portfolio";
import { certifications } from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                {/* <img
									src={require("../../assets/images/education.svg")}
									alt=""
								/> */}
                <EducationImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Education
                </h1>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Qualifications & Certifications
                </h3>
                <CompetitiveSites logos={competitiveSites.competitiveSites} />
              </div>
            </div>
          </Fade>
          <Educations theme={this.props.theme} />
          <section className="main" style={{color:theme.text}}><h2>Certifications</h2><ul style={{fontSize:18,lineHeight:2}}><li>Python for Data Science (Top 5%, Silver Medal) - NPTEL / IIT Madras · Aug 2025</li><li>OCI 2025 Generative AI Professional - Oracle University · Jul 2025</li><li>Introduction to NLP - Infosys Springboard · May 2025</li><li>Networking Basics - Cisco Networking Academy · Aug 2026</li></ul><h2>Achievements</h2><ul style={{fontSize:18,lineHeight:2}}><li>Finalist - Cognizant Technoverse Hackathon 2026</li><li>Finalist - Makethon 3.0 · 2026</li><li>SIH 2026 - Top 50 college team, St. Joseph's College of Engineering</li></ul></section>
          {certifications.certifications.length > 0 ? (
            <Certifications theme={this.props.theme} />
          ) : null}
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
