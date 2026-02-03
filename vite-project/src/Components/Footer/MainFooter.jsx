import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import logo from '../../assets/Image/logo/logo.png'
import '../Footer/Footer.css'

function MainFooter() {
  return (
    <footer className='MainFooter'>
      <Container>
        <Row>
          <Col xs={12} sm={6} md={4} lg={4}  >
            <div className="footer-logo-section">
              <div className="footer-logo">
                <img src={logo} alt="footer-logo" />
              </div>

              <div className="footer-des">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quae sit ut molestiae id dolor minima ex sapiente atque.
                </p>
              </div>

              <div className="footer-icon">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </Col>

          <Col lg={2} sm={6} md={2} xs={12}>
            <div className="foter-menu">
              <h1 className='footer-title'>Menu</h1>
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/service">Service</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
            </div>
          </Col>

          <Col lg={2} sm={6} md={2} xs={12} >
            <div className="usefullink">
              <h1 className='footer-title'>Useful Link</h1>
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/service">Service</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
            </div>
          </Col>

          <Col lg={4} sm={6} md={4} xs={12}>
            <div className="contactinfo">
              <h1 className='footer-title'>Contact Info</h1>
              <h4>Phone: 01739820399</h4>
              <h4>Email: tamimiqbal896@gmail.com</h4>
              <h4>Address: 7 No Elephant Road, Dhaka</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default MainFooter
