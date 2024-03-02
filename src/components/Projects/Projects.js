import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import flights from "../../Assets/Projects/flight.png";
import itsa from "../../Assets/Projects/itsa.png";
import bigdata from "../../Assets/Projects/bigdata.png";
import fyp from "../../Assets/Projects/fyp.png";
import itsaProject from"../../Assets/Projects/itsa.pptx"
import bigdataProject from"../../Assets/Projects/bigdata.pdf"
import ninjawoo from"../../Assets/Projects/ninjawoo.png"
import esd from"../../Assets/Projects/esd.png"


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
              imgPath={flights}
              isBlog={false}
              title="Flight"
              description="Flight tracker to display flight information in real time. Data is scraped using Selenium and displayed in Reactjs. "
              ghLink="hhttps://github.com/smaranan2019/flightTracker"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={itsa}
              isBlog={false}
              title="Credit Card point system on AWS"
              description="Worked with Ascenda to build a full stack application and deploy it on AWS. Built the AWS architecture using 3 logical and physical computing tiers - React, S3, Route 53, CloudFront, API Gateway, ECS, Lambda, Springboot, MYSQL, DynamoDB, Aurora"
              ghLink="https://github.com/cs301-itsa/project-2022-23t1-project-2022-23t1-g3-t3"
              demoLink={itsaProject}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bigdata}
              isBlog={false}
              title="Sentiment Analysis on SafeVR"
              description="Worked with SafeVR to run a market analysis on VR in Singapore and display the results in a dashboard deployed on AWS. Analysis included automatic data acquisition, sentiment mining, topic extraction, social network analysis and price trend analysis."
              ghLink="https://github.com/smaranan2019/bigDataRepo"
              demoLink={bigdataProject}              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fyp}
              isBlog={false}
              title="Fake News Analysis on Twitter"
              description="Deployed on a big data pipeline in AWS in a batch processing format - S3, EMR, Neo4j. 77k tweets scraped, analysed and plotted on a graph data for user analysis."
              ghLink="https://github.com/smaranan2019/projectEase"
              demoLink="https://silver-florentine-902740.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ninjawoo}
              isBlog={false}
              title="Ninjavan Hackathon - Telegram Bot"
              description="Developed an integrated chatbot solution utilizing Telegram, Dialogflow, ReactJS, and Firebase to bridge the communication gap between drivers and Ninjavan's central team, streamlining operations and enhancing efficiency."
              ghLink="https://github.com/smaranan2019/ninjawoo"
              demoLink="https://splendorous-youtiao-278709.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={esd}
              isBlog={false}
              title="Microservice Architecture Pokemon Card Trading platform"
              description="Designed and developed a Pokemon Trading Card Game (TCG) platform as a school project, showcasing proficiency in microservices architecture, full-stack development, and project execution. The platform caters to three user roles: buyer, seller, and admin, indicating an understanding of user needs and access control. Utilized Docker containers to deploy a scalable and maintainable system with Flask Python for backend services and vanilla JavaScript for the frontend."
              ghLink="https://github.com/smaranan2019/esd_BattleFrontier"
              demoLink="https://65e3009c5c008ca3593ec52b--tranquil-licorice-88fc6e.netlify.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
