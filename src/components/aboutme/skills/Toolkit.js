import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import vs from "../../../images/Vs.png";
import pc from "../../../images/pc.png";
import git from "../../../images/git.png";
import github from "../../../images/github.png";
import cb from "../../../images/cb.png";
import pm from "../../../images/pm.png";
import ap from "../../../images/AdobePhotoshop.png";
import ard from "../../../images/Arduino.png";
import bl from "../../../images/Blender.png";
import can from "../../../images/Canva.png";
import doc from "../../../images/Docker.png";
import ecl from "../../../images/EclipseIDE.png";
import fig from "../../../images/Figma.png";
import fb from "../../../images/Firebase.png";
import mdb from "../../../images/MongoDB.png";
import mysql from "../../../images/MySQL.png";
import sqlD from "../../../images/SQLDeveloper.png";
import unity from "../../../images/Unity.png";
import ur from "../../../images/Unreal Engine.png";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

export default function Toolkit() {
  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalSkill">
          Technical Skill
        </Link>
        <Link className="btn btn-primary me-3" to="/personalskill">
          Personal Skill
        </Link>
        <Link className="btn btn-primary " to="/toolkit">
          Toolkit
        </Link>
      </div>
      <Zoom left cascade>
        <h1 className="mt-4">Tools I Use</h1>
      </Zoom>
      <Container className="mt-4">
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <img src={vs} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={pc} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={git} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={github} alt="" style={{width: "85%", height: "85%", filter: "grayscale(1) invert(1)",}}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={cb} alt="" style={{ width: "95%", height: "95%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={pm} alt="" style={{ width: "95%", height: "95%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={ap} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={bl} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={ard} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={can} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={doc} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={ecl} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={fig} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={fb} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={mdb} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={mysql} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={sqlD} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={unity} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={ur} alt="" style={{ width: "85%", height: "85%", filter: "grayscale(1) invert(1)", }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
