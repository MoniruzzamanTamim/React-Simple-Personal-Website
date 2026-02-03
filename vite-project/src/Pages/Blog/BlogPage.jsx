import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MainLayout from '../../Layouts/MainLayout'
import BlogData from './BlogData'
import { Col, Container, Row } from 'react-bootstrap'
import Loader from '../../Components/Loader/Loader'
// CSS
import './BlogPage.css';

function BlogPage() {

  
  const { title } = useParams()

  const [blog, setBlog] = useState(null)

  useEffect(() => {
    const foundBlog = BlogData.find(
      (item) => item.title === title
    )
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBlog(foundBlog)
  }, [title])

  // Configure Loader................
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // 👉 Website load simulate (API / assets / components)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 250); // 2 seconds loader

    return () => clearTimeout(timer);
  }, []);

  // 🔁 Loader show
  if (loading) {
    return <Loader />;
  }

  if (!blog) {
    return (
      <MainLayout>
        <h2 style={{ textAlign: "center" }}>
          Blog not found
        </h2>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
     <section className='blogDetails-Section'>
       <Container>
        <Row>
             <Col lg={8} >
                <Row>
                  <Col lg={12}>
                      <div className="blogImage">
                         <img src={blog.image} alt={blog.title} />
                      </div>
                      <div className="blogContent">
                        <h1>{blog.title}</h1>
                        <p>{blog.description.slice(0,300)}</p>
                        <p>{blog.description.slice(301, )}</p>
                       </div>
                    </Col>
                </Row>
          
              </Col>
              <Col lg={4}></Col>
        </Row>
       </Container>
     </section>
    </MainLayout>
  )
}

export default BlogPage
