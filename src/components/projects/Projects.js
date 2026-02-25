import React from "react";
//import Particle from "../../Particle";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import psm from "../../images/psm.jpg";
import sda from "../../images/sda.png";
import hd from "../../images/LR.png";
import vp from "../../images/voidpark.jpg";
import { FaCode, FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Projects() {
  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Projects</h1>
              </Zoom>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                    PitShop Mechanix
                    </h5>
                    <img src={psm} alt={psm} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://github.com/naveen-m0804/PitShop-Mechanix.git"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                      <a
                        href={"https://pitshop-mechanix.onrender.com/login"}
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`live`}
                      >
                        <FaPlay
                          id={`live`}
                          className={"icon"}
                          aria-label="Live"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      PitShop-Mechanix is a comprehensive digital platform designed to streamline 
                      vehicle maintenance and emergency repair services through a modern web interface. 
                      Built with a React frontend and a Java Spring Boot backend, it efficiently connects 
                      vehicle owners with professional mechanics to ensure reliable and timely automotive 
                      assistance.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}>
                    Spring Boot, Java, MongoDB, React.js
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                    Void Park
                    </h5>
                    <img src={vp} alt={vp} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://github.com/naveen-m0804/VoidPark.git"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                      <a
                        href={"https://void-park.onrender.com/"}
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`live`}
                      >
                        <FaPlay
                          id={`live`}
                          className={"icon"}
                          aria-label="Live"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      In urban areas like Chennai and other metropolitan cities, finding a parking spot 
                      is a daily struggle for commuters, delivery personnel, and visitors. At the same time, 
                      thousands of homeowners and landowners have unused private parking areas — driveways, empty plots, 
                      or compound spaces — that sit idle for most of the day.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    React.js, Express.js, PostgreSQL, JavaScript
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                    Smart Dam System - IoT + ML + Computer Vision
                    </h5>
                    <img src={sda} alt={sda} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://github.com/naveen-m0804/Smart-Dam-System-Using-IOT-ML-CV.git"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                      <a
                        href={"https://damflow.vercel.app/"}
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`live`}
                      >
                        <FaPlay
                          id={`live`}
                          className={"icon"}
                          aria-label="Live"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      An intelligent, automated dam monitoring and control platform that combines ESP32-based 
                      IoT sensors, Machine Learning rainfall prediction, and Computer Vision human detection 
                      with a real-time web dashboard for remote monitoring and automated gate control.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    Python, ML, Computer Vision, React.js, JavaScript
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                    Plant Leaf Recognition
                    </h5>
                    <img src={hd} alt={hd} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://github.com/naveen-m0804/Plant-Leaf-Recognition-main.git"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                      <a
                        href={""}
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`live`}
                      >
                        <FaPlay
                          id={`live`}
                          className={"icon"}
                          aria-label="Live"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      The Plant Leaf Recognition system is designed to identify plant 
                      species based on images of their leaves using machine learning or 
                      deep learning techniques. It helps in automating the process of plant 
                      identification, making it useful for botanists, farmers, and researchers. 
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    DDLA, Densnet & MobileNet, Python, HTML, CSS
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>
          <div className="blog--viewAll">
            <Link to="/projectspage">
              <button className="btn btn-primary">
                View All
                <HiArrowRight className="viewArr" />
              </button>
            </Link>
          </div>
        </Container>
      </Container>
    </div>
  );
}

