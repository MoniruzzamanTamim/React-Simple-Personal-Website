
import React from 'react';
import { Container, Row, Col,Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import Carousel  from 'react-bootstrap/Carousel';

// CSS
import '../../Pages/Home/HomePage.css';

// Images
import EShop from '../../assets/Image/brands/e-shop.png';
import GPlay from '../../assets/Image/brands/googleplay.png';
import AStore from '../../assets/Image/brands/appstore.png';
import Brand1 from "../../assets/Image/brands/brand-11.png";
import Brand2 from "../../assets/Image/brands/brand-12.png";
import Brand3 from "../../assets/Image/brands/brand-13.png";
import Brand4 from "../../assets/Image/brands/brand-14.png";
import Brand5 from "../../assets/Image/brands/brand-15.png";
import Brand6 from "../../assets/Image/brands/brand-16.png";
import Brand7 from "../../assets/Image/brands/brand-17.png";
import Brand8 from "../../assets/Image/brands/brand-18.png";



function Brand() {
  return (
    <>


    <section className='brand-promotion-section'>
        <Container>
            <Row className='align-items-center'>
                <Col lg={6} md={6} sm={6}>
                <div className="brand-promotion-left">
                    <h3>Download Mobile App And</h3>
                    <h1>Save Up TO 20%</h1>
                    <p>Aliquem a angue sunscript, luctus neque ipsum and dolar primis libero, blandit varius</p>
                <div className="promotion-left-image">
                <a href="#"><img src={GPlay} alt="GPlay" /></a>
                <a href="#"><img src={AStore} alt="AStore" /></a>

                </div>
                </div>
                </Col>
                <Col lg={6} md={6} sm={6}>
                <div className="brand-promotion-right">
                    <img src={EShop} alt="EShop" className='img-fluid' />
                </div>
                </Col>
            </Row>
        </Container>

    </section>
    <section className='brand-hightlight-section'>
        <Container>
        <Row>
             <Carousel>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="brand_img">
                      <img src={Brand1} className="img-fluid" alt="brand-1" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand2} className="img-fluid" alt="brand-2" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand3} className="img-fluid" alt="brand-3" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand4} className="img-fluid" alt="brand-4" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand5} className="img-fluid" alt="brand-5" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand6} className="img-fluid" alt="brand-6" />
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="brand_img">
                      <img src={Brand3} className="img-fluid" alt="brand-3" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand4} className="img-fluid" alt="brand-4" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand5} className="img-fluid" alt="brand-5" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand6} className="img-fluid" alt="brand-6" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand7} className="img-fluid" alt="brand-7" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand8} className="img-fluid" alt="brand-8" />
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
        </Row>
        </Container>
    </section>
    
    
    
    
    </>
  )
}

export default Brand