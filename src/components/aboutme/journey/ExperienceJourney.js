import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="June 2024 - July 2024"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
          Connect Infosystem
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
          Java Full Stack Developer
          </h6>
          <p>• Developed a full-featured e-commerce website specializing in computer accessories, boosting product visibility and customer engagement by 78%.</p>
          <p>• Collaborated with the team to implement SQL for data storage and designed HTML/CSS templates, enhancing user interface cleanliness and usability, resulting in a 80% increase in user satisfaction.</p>
          <p>• Implemented responsive web design using HTML, CSS, and JavaScript, enhancing user experience across devices and improving user engagement by 76%.</p>
          <p>• Collaborated with the development team to optimize website performance, reducing load times by 50% and significantly enhancing overall usability.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
