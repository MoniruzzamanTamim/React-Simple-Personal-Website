import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


// Images
import Pizza from "../../assets/Image/AboutPage/pizza.png";
import Salad from "../../assets/Image/AboutPage/salad.png";
import Delivery from "../../assets/Image/AboutPage/delivery-bike.png";

// CSS
import '../../Pages/Home/HomePage.css';

// Mock Data
const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph:
      "Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus",
  },
  {
    image: Salad,
    title: "Quality Foods",
    paragraph:
      "Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus",
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph:
      "Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus",
  },
];

function AboutSection() {
  return (
    <>
      {/* TOP CONTENT */}
      <section className="about-section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }}>
              <div className="about-section-content text-center">
                <h1>
                  The burger tastes better when you eat it with your family
                </h1>
                <p>
                  Porta semper lacus cursus, feugiat primis ultrice a ligula
                  risus auctor an tempus feugiat dolor lacinia cubilia curae
                  integer orci congue and metus integer primis in integer metus
                </p>
                <NavLink className="allbtn" to="/menu">
                  Explore Full Menu
                </NavLink>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CARDS */}
      <section className="about-section-wraper">
        <Container>
          <Row>
            {mockData.map((data, i) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={i}>
                <div className="aboutcard-design">
                  <div className="cardImage">
                    <img src={data.image} alt={data.title} />
                  </div>
                  <div className="cardContent">
                    <h1>{data.title}</h1>
                    <p>{data.paragraph}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default AboutSection;
