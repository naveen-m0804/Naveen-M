import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub,} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Naveen M</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Naveen M</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/naveen-m0804"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/naveen-m084/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:mnaveenm2004@gmail.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://leetcode.com/u/naveen_m0804/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", width: "20px", height: "24px" }}
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/leetcode.svg"
                  alt="LeetCode"
                  style={{
                    width: "80%",
                    height: "80%",
                    filter: "invert(100%) ",
                  }}
                />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
