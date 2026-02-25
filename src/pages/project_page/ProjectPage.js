/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import Particle from "../../Particle";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import nyc from "../../images/OED.png";
import ci from "../../images/MDP.png";
import hd from "../../images/LR.png";
import pp from "../../images/ES.png";
import psm from "../../images/psm.jpg";
import sda from "../../images/sda.png";
import vp from "../../images/voidpark.jpg";
import { FaCode, FaPlay } from "react-icons/fa";
export default function ProjectPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <div
            className="d-flex justify-content-center"
            width="100%"
            style={{ backgroundColor: "#fbd9ad" }}
          >
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134 61 176" }}>PROJECTS</h1>
            </Zoom>
          </div>
          <div>
            <div>
              <Container fluid className="certificate-section" id="about">
                <Container>
                  <Row>
                    <Col md={12} className="mt-5">
                      <Row className="g-5">
                        <Col md={3} className="col-sm-12 col-md-4">
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
                                <img src={psm} alt="PitShop Mechanix" />
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
                                }}
                              >
                                Spring Boot, Java, MongoDB, React.js
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={2}
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
                                <img src={vp} alt="Void Park" />
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
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={3}
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
                                <img src={sda} alt="Smart Dam System" />
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
                        <Col md={3} className="col-sm-12 col-md-4">
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
                                  Online Examination System
                                </h5>
                                <img src={nyc} alt={nyc} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/naveen-m0804/Online-Examination-Using-Django.git"
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
                                  The Online Examination System is a web-based platform designed to conduct exams remotely and efficiently.
                                  It allows students to register, log in, and take exams from any location with internet access.
                                  Admins can create, update, and schedule exams with multiple-choice or descriptive questions.
                                  This system reduces administrative overhead and enhances accessibility for both students and institutions.
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
                                HTML, CSS, JavaScript, SQL, Django, Python
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
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
                                Plant-Leaf-Recognition
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
                                  The system analyzes features like shape, color, texture, and vein patterns 
                                  to classify the plant accurately.
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
                        <Col md={3} className="col-sm-12 col-md-4">
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
                                Melanoma Detection Using Machine Learning Techniques
                                </h5>
                                <img src={ci} alt={ci} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/naveen-m0804/Melanoma-Detection-Using-Machine-Learning-Techniques.git"
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
                                  The Melanoma Detection Using Machine Learning Techniques project aims 
                                  to identify skin cancer, particularly melanoma, through automated image 
                                  analysis. It leverages pre-trained deep learning models to detect and 
                                  classify skin lesions from dermoscopic images. By analyzing patterns, 
                                  color variations, and textures, the system provides accurate and early 
                                  diagnosis support.
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
                                Restnet, VGG16 & 19, HTML, CSS, JavaScript
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
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
                                Ecommerce Website 
                                </h5>
                                <img src={pp} alt={pp} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/naveen-m0804/E-commerce-website-Computer-Components.git"
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
                                  The E-commerce Website for Selling Computer Accessories is an
                                  online platform designed to offer a wide range of computer-related 
                                  products. It provides features like user registration, product browsing, 
                                  shopping cart, and secure payment options. Admins can manage inventory, 
                                  update product listings, and track orders through a dedicated dashboard
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
                                HTML, CSS, JavaScript
                              </div>
                            </div>
                          </Fade>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Container>
            </div>
          </div>
        </Container>
      </Container>
    </section>
  );
}
