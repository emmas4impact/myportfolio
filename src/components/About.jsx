import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Container id="section2">
        <Row>
          <Col>
            <h1 style={{ textAlign: "center", paddingTop: "30px" }}>About</h1>
          </Col>
        </Row>
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
            style={{ paddingBottom: "30px", textAlign: "center" }}
          >
            <img
              alt="about"
              className="borderPicture"
              style={{
                borderRadius: "10px",
                width: "50%",
                border: "5px solid #fff",
              }}
              src="ema.jpeg"
            />
          </Col>
          <Col
            lg={6}
            md={6}
            sm={12}
            data-aos="fade-in"
            data-aos-duration="1000"
            style={{
              position: "relative",
              textAlign: "left",
              padding: "25px",
              background: "#131F55",
              color: "#fff",
              borderRadius: "10px",
            }}
          >
            <h4>
              Hi, I'm Emmanuel Adedeji, Automation Tester and Fullstack Web Developer
              professional. Nice to meet you.
            </h4>
            <h6>
              Never stop learning" is my mantra and I've proved it even to
              myself taking every opportunity that can lead me to learn
              something more. My excellent understanding of Software Development
              Lifecycle and the role of QA, will boost your projects, and thanks
              to my organizational and intercommunication skills I will
              definetly be a valuable team player.
            </h6>
            <a href="https://drive.google.com/file/d/1pK8Js1p0jbKN6H1EvitnsKbRUHgQK9kX/view?usp=sharing">
              <img
                alt="about"
                className="cv"
                style={{
                  position: "absolute",
                  width: "50px",
                  right: "-10px",
                  bottom: "-10px",
                }}
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjI5MyA1MTIuMjkzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMjkzIDUxMi4yOTM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNCQkRFRkI7IiBkPSJNNDAyLjE0OCwxNDkuNjA2QzM4NC4zMzgsNjMuMDU0LDI5OS43MzUsNy4zMjgsMjEzLjE4MywyNS4xMzgNCglDMTM5LjA3LDQwLjM4OSw4NS43NzQsMTA1LjQ3Miw4NS40MzQsMTgxLjEzNmMwLDMuNjA1LDAuMTQ5LDcuMjk2LDAuNDY5LDExLjJDMzMuMTc4LDE5Ny45MTctNS4wNCwyNDUuMTgzLDAuNTQxLDI5Ny45MDgNCgljNS4xNzMsNDguODcsNDYuNDE2LDg1Ljk0Myw5NS41NTksODUuODk1aDExLjJjLTAuMjU2LTMuNTQxLTAuNTMzLTcuMDYxLTAuNTMzLTEwLjY2N2MwLTc2LjU4Myw2Mi4wODMtMTM4LjY2NywxMzguNjY3LTEzOC42NjcNCglTMzg0LjEsMjk2LjU1MywzODQuMSwzNzMuMTM2YzAsMy42MDUtMC4yNzcsNy4xMjUtMC41MzMsMTAuNjY3aDExLjJjNjQuNzMsMC4xNzcsMTE3LjM0OC01Mi4xNTQsMTE3LjUyNS0xMTYuODg1DQoJQzUxMi40NjIsMjA0LjgwNyw0NjQuMTQ4LDE1My4zNDgsNDAyLjE0OCwxNDkuNjA2TDQwMi4xNDgsMTQ5LjYwNnoiLz4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6IzRDQUY1MDsiIGN4PSIyNDUuNDM0IiBjeT0iMzczLjEzNiIgcj0iMTE3LjMzMyIvPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZBRkFGQTsiIGQ9Ik0yNDUuNDM0LDQ0Ny44MDNjLTUuODkxLDAtMTAuNjY3LTQuNzc2LTEwLjY2Ny0xMC42Njd2LTEyOGMwLTUuODkxLDQuNzc2LTEwLjY2NywxMC42NjctMTAuNjY3DQoJCXMxMC42NjcsNC43NzYsMTAuNjY3LDEwLjY2N3YxMjhDMjU2LjEsNDQzLjAyNywyNTEuMzI1LDQ0Ny44MDMsMjQ1LjQzNCw0NDcuODAzeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGQUZBRkE7IiBkPSJNMjQ1LjQzNCw0NDcuODAzYy0yLjgzMSwwLjAwNS01LjU0OC0xLjExNS03LjU1Mi0zLjExNWwtNDIuNjY3LTQyLjY2Nw0KCQljLTQuMDkzLTQuMjM3LTMuOTc1LTEwLjk5LDAuMjYyLTE1LjA4M2M0LjEzNC0zLjk5MywxMC42ODctMy45OTMsMTQuODIxLDBsMzUuMTM2LDM1LjExNWwzNS4xMTUtMzUuMTE1DQoJCWM0LjIzNy00LjA5MywxMC45OS0zLjk3NSwxNS4wODMsMC4yNjJjMy45OTMsNC4xMzQsMy45OTMsMTAuNjg3LDAsMTQuODIxbC00Mi42NjcsNDIuNjY3DQoJCUMyNTAuOTY1LDQ0Ni42ODIsMjQ4LjI1Nyw0NDcuODAyLDI0NS40MzQsNDQ3LjgwM3oiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
              />
            </a>
          </Col>
        </Row>
        <Helmet>
          <meta charSet="utf-8" name="description" content="Hi, I'm Emmanuel Adedeji an Automation Tester and Fullstack Web Developer
              professional. Nice to meet you."/>
          <title>Emmanuel Adedeji, Fullstack developer</title>
          <link rel="canonical" href="https://fawtech.org/" />
        </Helmet>
      </Container>
    </div>
  );
};
export default About;
