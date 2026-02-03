import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

// Images
import heroimage from '../../assets/Image/hero/hero-2.png';
import priceBadge from '../../assets/Image/hero/price-badge-yellow.png';

// CSS
import '../../Pages/Home/HomePage.css';

const HeroSection = () => {
  return (
    <section className="heroSection">
      <Container>
        <Row className="align-items-center">

          {/* LEFT IMAGE */}
          <Col lg={6} md={6} sm={12} xs={12}>
            <div className="heroimage">
              <img src={heroimage} alt="Hero Burger" />

              <div className="inerimage">
                <img src={priceBadge} alt="Price Badge" />
                <div className="price">
                  <h3>Only</h3>
                  <h3>$499</h3>
                </div>
              </div>
            </div>
          </Col>

          {/* RIGHT CONTENT */}
          <Col lg={6} md={6} sm={12} xs={12}>
            <div className="herorightcontent">
              <h1>New</h1>
              <h1>Burger</h1>
              <h4>With Onion</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Iure, accusantium.
              </p>
              <NavLink className="fullbtn" to="/cart" >Order Now</NavLink>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
