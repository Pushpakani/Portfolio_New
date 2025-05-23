import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiHtml5,
  DiCss3,
  DiGit,
} from "react-icons/di";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiTestinglibrary,
  SiGithub,
  SiVercel,
  SiVisualstudiocode,
  SiPostman,
  SiGooglechrome,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
         {/* Programming Languages */}
         <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="JavaScript (ES6+)" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript title="TypeScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython title="Python" />
      </Col>

      {/* Frontend Technologies */}
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 title="HTML5" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 title="CSS3" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs title="Next.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss title="Tailwind CSS" />
      </Col>

      {/* Testing */}
      <Col xs={4} md={2} className="tech-icons">
        <SiTestinglibrary title="React Testing Library" />
      </Col>

      {/* Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub title="GitHub" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglechrome title="Chrome DevTools" />
      </Col>  
    </Row>
  );
}

export default Techstack;
