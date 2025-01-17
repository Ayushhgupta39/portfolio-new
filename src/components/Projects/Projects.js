import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              title="ex-chain-finance"
              description="A cross-chain crypto bridge and swap platform using Next.js, LI.FI Protocol, and Tailwind CSS, supporting over
15 blockchains and 500+ tokens and coins."
              ghLink="https://github.com/Ayushhgupta39/ex-chain-finance"
              demoLink="https://ex-chain-finance.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Streamflix"
              description="A full-stack streaming site using Next.js, enabling seamless movie streaming."
              ghLink="https://github.com/Ayushhgupta39/Streamflix-project"
              demoLink="https://streamflix-movies.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="CryptoMart"
              description="A feature-rich cryptocurrency tracking web application."
              ghLink="https://github.com/Ayushhgupta39/cryptomart"
              demoLink="https://cryptomart-ten.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
