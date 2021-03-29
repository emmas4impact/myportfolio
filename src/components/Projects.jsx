import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import { Helmet } from "react-helmet";

const Projects = () => {
  return (
    <div style={{ background: "#F2F2F2", marginTop: "60px" }}>
      <Container style={{ padding: "60px 20px" }}>
        <Row
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Col
            lg={6}
            md={6}
            sm={12}
            style={{ textAlign: "center", marginBottom: "30px" }}
          >
            <CountUp end={50} duration={8} style={{ fontSize: "80px" }} />
          </Col>

          <Col lg={6} md={6} sm={12}>
            <h2>PROJECTS COMPLETED</h2>
            <p>
              Over the past ten years, I have completed over 50 full stack
              projects using React.js, Java, JS, PostgreSQL, MongoDB, Node.js,
              Express.js, Heroku, Git, Github, HTML, CSS, Webpack
            </p>
          </Col>
        </Row>

        <Helmet>
          <meta
            charSet="utf-8"
            name="description"
            content="Emmanuel Adedeji have completed over 50 full stack
            projects using React.js, Java, Spring Boot, Javascript, SEO, PostgreSQL, MongoDB, Node.js,
            Express.js, Heroku, Jenkins, GIT, Github, HTML, CSS, Webpack"
          />
          <title>MERN STACK PROJECT</title>
          <link rel="canonical" href="https://fawtech.org/" />
        </Helmet>
      </Container>
    </div>
  );
};

export default Projects;
