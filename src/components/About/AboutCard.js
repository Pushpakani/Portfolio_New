import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pushpakani </span>
            from <span className="purple"> Tamil Nadu, India.</span>
            <br />
            I am currently working as a Frontend Developer, passionate about building responsive and modern web applications.
            <br />
            I have completed my MCA degree and gained hands-on experience through real-time projects and an internship in Next.js development.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Frontend Tools & Writing Notes
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Tech and Trends
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Live life once—so spread your wings and fly."{" "}
          </p>
          <footer className="blockquote-footer">Kiri</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
