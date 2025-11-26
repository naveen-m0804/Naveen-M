
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import Typing from "./Typing";
import Tilt from "react-parallax-tilt";
import AboutmeContainer from "../../components/aboutme/aboutmeContainer";
import Fade from "react-reveal/Fade";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Certification from "../../components/certificate/Certification";
import Projects from "../../components/projects/Projects";
import Contactus from "../../components/contactus/Contactus";
import { FaEnvelope } from "react-icons/fa";


export default function Home() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">
              <h1
                style={{ paddingBottom: 15, fontSize: "175px" }}
                className="heading"
              >
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> NAVEEN M</strong>
              </h1>

              <div className="typing-homeclass">
                <Typing />
              </div>
              <div className="sociallink-home">
                <ul className="homeaboutsociallinks">
                  <li className="socialicons">
                    <a
                      href="https://github.com/naveen-m0804"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour  homesocialicons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="socialicons">
                    <a
                      href="https://www.linkedin.com/in/naveen-m084/"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour  homesocialicons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="socialicons">
                    <a
                      href="mailto:mnaveenm2004@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour homesocialicons"
                    >
                      <FaEnvelope/>
                    </a>
                  </li>
                  <li className="socialicons">
                      <a
                        href="https://leetcode.com/u/naveen_m0804/"
                        target="_blank"
                        rel="noreferrer"
                        className="iconcolour homesocialicons"
                      >
                        <img
                          src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/leetcode.svg"
                          alt="LeetCode"
                          style={{ width: "1.3em", height: "1.3em", filter: "invert(20%) sepia(90%) saturate(800%) hue-rotate(245deg)" }}
                        />
                      </a>
                    </li>
                </ul>
              </div>
            </Col>
            <Col md={4} style={{ paddingBottom: 20 }}>
              <div className="img-home-main">
                <Tilt>
                  <Fade cascade>
                    <img
                      src="profile.png"
                      alt="home pic"
                      className="img-fluid"
                    />
                  </Fade>
                </Tilt>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
                <div className="seeking">
                    Aspiring software developer with a solid foundation in 
                    Data Structures and Algorithms, seeking an opportunity to 
                    apply and grow my skills. Eager to contribute to tasks in 
                    a dynamic team environment. I want to be a part of your 
                    incredible growth journey and I will be able to add value to the organization.
                </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <AboutmeContainer />
      <Certification />
      <Projects />
      <Contactus />
    </section>
  );
}
