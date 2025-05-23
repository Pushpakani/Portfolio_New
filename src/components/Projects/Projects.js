import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import ecomImg from "../../Assets/Projects/ecomImg.webp";
import websiteImg from "../../Assets/Projects/website.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify UI"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/pushpakani/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
  <ProjectCard
    imgPath={ecomImg} 
    isBlog={false}
    title="E-Commerce Dashboard UI"
    description="Built a responsive e-commerce admin dashboard using Next.js and Tailwind CSS. Integrated Chart.js for dynamic sales analytics, improving insights for 500+ daily users. Optimized load speed by 30% with SSR and lazy loading. Deployed on Vercel with CI/CD for 99.9% uptime."
    ghLink="https://github.com/yourusername/ecommerce-dashboard" 
    
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    imgPath={websiteImg} 
    isBlog={false}
    title="Own Solutions Website"
    description="Developed a responsive company website using Next.js and Tailwind CSS. Implemented SEO best practices, Open Graph meta tags, and structured content for better search visibility. Integrated reusable UI components and optimized image loading for improved performance."
    ghLink="https://github.com/pushpakani/svrglobal-website" 
  />
</Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
