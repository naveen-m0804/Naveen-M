import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import emailjs from "emailjs-com";
import { AiOutlineSend } from "react-icons/ai";
import { FiPhone, FiAtSign, FiMapPin, FiLinkedin } from "react-icons/fi";

export default function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!(formData.name && formData.email && formData.message)) {
      alert("Please fill all fields!");
      return;
    }

    emailjs.send(
      "service_r7tfdz1", 
      "template_ojcjnzi", 
      formData,
      "lNjeaaAtJPPOcLuio" 
    )
    .then((response) => {
      alert(`Thanks ${formData.name}, I will shortly connect with you!`);
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((err) => {
      console.error("FAILED...", err);
      alert("Something went wrong. Try again later.");
    });
  };

  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="certificate-description d-flex justify-content-start">
              <Zoom left cascade>
                <h1 className="aboutme-heading">Contact me</h1>
              </Zoom>
            </Col>
            <Col md={12} id="contact" className="mt-3">
              <Row>
                <Col md={4}>
                  <div className="contacts-form" data-aos="fade-up">
                    <form onSubmit={handleSubmit}>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="username" className="label-class">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-input input-class"
                          id="username"
                          name="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="email" className="label-class">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-input input-class"
                          name="email"
                          id="email"
                          placeholder="Enter email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="userMessage" className="label-class">
                          Message
                        </label>
                        <textarea
                          className="form-message input-class"
                          id="userMessage"
                          name="message"
                          rows="3"
                          placeholder="Enter message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="submit-btn">
                        <button type="submit" className="submitBtn">
                          Submit
                          <AiOutlineSend className="send-icon" />
                        </button>
                      </div>
                    </form>
                  </div>
                </Col>
                
                <Col md={7}>
                  <div className="contacts-details">

                    <a href="mailto:mnaveenm2004@gmail.com" className="personal-details">
                      <div className="detailsIcon">
                        <FiAtSign />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>mnaveenm2004@gmail.com</p>
                    </a>
                    
                    <a href="tel:+918667482293" className="personal-details">
                      <div className="detailsIcon">
                        <FiPhone />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>+91 8667482293</p>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/naveen-m084/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="personal-details"
                    >
                      <div className="detailsIcon">
                        <FiLinkedin />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>
                        LinkedIn
                      </p>
                    </a>
                    {/* Location Link to Google Maps */}
                    <a 
                      href="https://www.google.com/maps/place/Chennai,+Tamil+Nadu,+India" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="personal-details"
                    >
                      <div className="detailsIcon">
                        <FiMapPin />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>
                        Chennai, Tamil Nadu, India
                      </p>
                    </a>

                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}