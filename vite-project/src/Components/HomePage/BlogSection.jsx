import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import blogData from '../../Pages/Blog/BlogData';

function BlogSection() {
  return (
    <section className='blogSection'>
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <div className="blogtitle text-center my-5">
              <h1>Our Blog</h1>
              <p>
                It is a long established fact that a reader will be of a page
                when established fact looking at its layout.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
         {blogData.slice(0, 4).map((data) => (
  <Col lg={3} key={data.id}>
    <div className="blogData">
      <div className="img">
        <img src={data.image} alt={data.title} />
      </div>

      <div className="blogMeta d-flex justify-content-between">
        <span>{data.author}</span>
        <span>{new Date().toLocaleDateString()}</span>
      </div>

      <h2>{data.title}</h2>
      <p>{data.description.slice(0, 90)}</p>

      <Nav.Link
        as={Link}
        to={`/blog/${encodeURIComponent(data.title)}`}
        className="blogbtn"
      >
        See more
      </Nav.Link>
    </div>
  </Col>
))}

        </Row>
      </Container>
    </section>
  );
}

export default BlogSection;
