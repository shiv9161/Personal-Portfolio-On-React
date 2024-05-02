import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/movieBuff.png";
// import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/anjaniCreation.png";
import netflix from "../../Assets/Projects/netflix.png";

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
              title="Movie Buff"
              description="Introducing a dynamic movie recommendation platform crafted with HTML, CSS, Bootstrap, and PHP. This website seamlessly combines sleek design with robust functionality, offering users a personalized experience to discover their next favorite films. Explore curated lists, browse genres, and engage with a community-driven movie database like never before."
              ghLink="/"
              demoLink="http://movie-buff.000.pe/?i=1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Anjani Creations"
              description="Anjani Creations presents a cutting-edge website, meticulously crafted with HTML, CSS, JavaScript, React, and Next.js. Our platform showcases innovative designs and seamless user experiences, reflecting our commitment to creativity and excellence. Explore our portfolio, engage with our latest projects, and discover the artistry behind every creation."
              ghLink="/"
              demoLink="https://www.anjanicreations.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Clone"
              description="Revolutionary React-powered Netflix clone, offering seamless streaming experience with a sleek UI. Developed with cutting-edge technology, it delivers personalized content recommendations, user profiles, and seamless playback. Built for scalability and performance, this clone mirrors Netflix's functionality while providing a customizable platform for content distribution."
              ghLink="https://github.com/shiv9161/Netflx-Clone"
              demoLink="https://netflx-clone-six.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
