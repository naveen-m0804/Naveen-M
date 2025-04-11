import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import ucsc from "../../images/CC.jpg";
import ufm from "../../images/AI-py.jpg";
import cbta from "../../images/GCC.png";
import dps from "../../images/DPS.jpg";
import IBM from "../../images/IBMh2s.png";
import IMD from "../../images/IMDB.png";
import RAG from "../../images/RAG.jpg";
import VAI from "../../images/VAI.jpg";
import Fade from "react-reveal/Fade";



export default function Certificate() {
  return (
    <div className="mt-5">
      <Container>
        {/* <Bounce left cascade> */}
        <Fade left cascade duration={1000} distance="20px">
          <Row className="g-5">
            <Col md={4}>
              <img
                src={ucsc}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img
                src={ufm}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img
                src={cbta}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img
                src={dps}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img
                src={IBM}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img src={RAG} alt="" style={{ width: "100%", height: "100%" }} />
            </Col>
            <Col md={4}>
              <img
                src={IMD}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img src={VAI} alt="" style={{ width: "100%", height: "100%" }} />
            </Col>
          </Row>
          {/* </Bounce> */}
        </Fade>
      </Container>
    </div>
  );
}
