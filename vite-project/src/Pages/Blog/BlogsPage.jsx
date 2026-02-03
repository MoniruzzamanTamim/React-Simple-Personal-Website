import React from 'react'
import MainLayout from '../../Layouts/MainLayout'
import { Col, Container, Row } from 'react-bootstrap'
import BlogData from './BlogData'
import { Link } from 'react-router-dom'

function BlogsPage() {
  return (
    <MainLayout>
      <section className="blogPage-blog">
        <Container>
          <Row>
            {BlogData.map((data) => (
              <Col lg={3} key={data.id}>
                <div className="blogDatasection">
                  <div className="blogImage">
                    <img src={data.image} alt={data.title} />
                  </div>

                  <div className="blogContent">
                    <div className='d-flex justify-content-between'>
                      <span>{data.date}</span>
                    <span>{data.author}</span>
                    </div>
                    <h4>{data.title}</h4>
                    <p>{data.description.slice(0,150)}</p>
                    <Link className='blogBtn' to={`/blog/${data.title}`}>
                      Learn More
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </MainLayout>
  )
}

export default BlogsPage
