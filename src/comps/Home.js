import React, { useEffect } from 'react';
// import NavbarComp from './Navbar';
import { Container, Navbar, Nav, Row, Col, Card, Button/* , Carousel */ } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
import 'font-awesome/css/font-awesome.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import free_icon from '../images/free-icon.png';
import easy_to_use from '../images/easy-to-use.png';
import use_anywhere from '../images/responsive.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
// import mark_z from '../images/2821040788.jpg';

function Home() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <div>
      <section id="title">
        {/* Navbar */}
        <Navbar
          variant="light"
          style={{
            /* backgroundColor: '#E9EFC0' */
            backgroundColor: 'linear-gradient(to right, #d4eb3d , #E9EFC0)',
          }}
        >
          <Container>
            <Navbar.Brand as={Link} to="/" className="nav-brand">
              My Note
            </Navbar.Brand>

            <Nav className="me-auto nav">
              <Nav.Link as={Link} to="/" className="nav-link">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav>

            <Nav className="nav">
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              {/* <Nav.Link as={Link} to="/register">
                Register
              </Nav.Link> */}
            </Nav>
          </Container>
        </Navbar>

        <Container className="introduction">
          <Row className="introduction-first-row">
            <Col>
              <h1>Dont forget to save your notes here</h1>
            </Col>
          </Row>
          <Row className="introduction-second-row">
            <Col className="d-flex justify-content-center">
              <h2>Have no fear because with My Note, you can easily save what's important to you</h2>
            </Col>
          </Row>
          <Button
            className="btn-dark"
            style={{
              marginTop: '100px',
              paddingLeft: '30px',
              paddingRight: '30px',
              paddingTop: '20px',
              paddingBottom: '20px',
              fontSize: '20px',
            }}
          >
            Sign Up now
          </Button>
        </Container>
      </section>

      <section id="features">
        <Container>
          <h1 className="text-center">FEATURES</h1>
          {/* <Row className="justify-content-around">
            <Col lg={3} className="feature-desc">
              Totally free. There's no need to pay any expense to store your notes
            </Col>
            <Col lg={3} className="justify-content-right">
              <img src={free_icon} alt="" style={{width: '50%'}}/>
            </Col>
          </Row>
          <Row className="justify-content-around">
            <Col lg={3}>
              <i className="fa-solid fa-piggy-bank"></i>
            </Col>

            <Col lg={3} className="feature-desc-2">
              Easy Just sign up and you're ready to go
            </Col>
          </Row>
          <Row className="justify-content-around">
            <Col lg={3} className="feature-desc">
              Can be used anywhere and everywhere
            </Col>
          </Row> */}

          <Row className="text-center mb-5">
            <Col data-aos="fade-right" data-aos-duration="2000">
              <img src={free_icon} alt="" style={{ width: '25%' }} />
            </Col>
            <Col className="d-flex flex-column justify-content-around" data-aos="fade-left" data-aos-duration="2000">
              <h3 className="h3-features">Free</h3>
              <p className="features-p">Totally free. There's no need to pay any expense to store your notes</p>
            </Col>
          </Row>

          <Row className="text-center mb-5">
            <Col className="d-flex flex-column justify-content-around" data-aos="fade-right" data-aos-duration="2000">
              <h3 className="h3-features">Easy to use</h3>
              <p className="features-p">Just sign up and you're ready to go</p>
            </Col>
            <Col data-aos="fade-left" data-aos-duration="2000">
              <img src={easy_to_use} alt="" style={{ width: '25%' }} />
            </Col>
          </Row>

          <Row className="text-center">
            <Col data-aos="fade-right" data-aos-duration="2000">
              <img src={use_anywhere} alt="" style={{ width: '25%' }} />
            </Col>
            <Col className="d-flex flex-column justify-content-around" data-aos="fade-left" data-aos-duration="2000">
              <h3 className="h3-features">Guaranteed to work.</h3>
              <p className="features-p">Find the love of your dog's life or your money back.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="testimonials">
        <h1 className="text-center mb-5">Reviews</h1>
        <Row className="justify-content-evenly mt-4">
          <Col lg={3} className="d-flex justify-content-evenly" data-aos="fade-up" data-aos-duration="2000">
            <Card style={{ width: '18rem', borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', border: '5px solid #B6E388' }}>
              <Card.Body className="justify-items-center review-card">
                <div>
                  <i className="fa fa-quote-left d-flex justify-content-start" style={{ fontSize: '25px' }} />
                  <Card.Text style={{ textAlign: 'start' }}>Best site ever! Easy 5 star.</Card.Text>
                </div>
                <Row style={{ borderTop: '1px solid black', paddingTop: '10px' }}>
                  <Col className="align-self-center" style={{ textAlign: 'left' }}>
                    <Card.Title>Mark Z</Card.Title>
                    <Card.Subtitle>Facebook</Card.Subtitle>
                    <div className="stars">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                  </Col>
                  <Col className="align-self-center">
                    <img src={require('../images/2821040788.jpg')} alt="" style={{ width: '75%', borderRadius: '50%', border: '5px solid #B6E388' }} />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} className="d-flex justify-content-evenly" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100">
            <Card style={{ width: '18rem', borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', border: '5px solid #B6E388' }}>
              <Card.Body className="justify-items-center review-card">
                <div>
                  <i className="fa fa-quote-left d-flex justify-content-start" style={{ fontSize: '25px' }} />
                  <Card.Text style={{ textAlign: 'start' }}>SHOCKING.</Card.Text>
                </div>
                <Row style={{ borderTop: '1px solid black', paddingTop: '10px' }}>
                  <Col className="align-self-center" style={{ textAlign: 'left' }}>
                    <Card.Title>Jeff B</Card.Title>
                    <Card.Subtitle>Amazon</Card.Subtitle>
                    <div className="stars">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                  </Col>
                  <Col className="align-self-center">
                    <img src={require('../images/608eb6854cbba.jpg')} alt="" style={{ width: '75%', borderRadius: '50%', border: '5px solid #B6E388' }} />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} className="d-flex justify-content-evenly" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200">
            <Card style={{ width: '18rem', borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', border: '5px solid #B6E388' }}>
              <Card.Body className="justify-items-center review-card">
                <div>
                  <i className="fa fa-quote-left d-flex justify-content-start" style={{ fontSize: '25px' }} />
                  <Card.Text style={{ textAlign: 'start' }}>It's ok. Although it still need some improvements here and there but nevertheles still an ok site for me.</Card.Text>
                </div>
                <Row className="mt-5" style={{ borderTop: '1px solid black', paddingTop: '10px' }}>
                  <Col className="align-self-center" style={{ textAlign: 'left' }}>
                    <Card.Title>Jeff B</Card.Title>
                    <Card.Subtitle>Amazon</Card.Subtitle>
                    <div className="stars">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                  </Col>
                  <Col className="align-self-center">
                    <img src={require('../images/index.jpg')} alt="" style={{ width: '75%', borderRadius: '50%', border: '5px solid #B6E388' }} />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      <section id="footer">
        <Container>
          <Row>
            <Col className="text-center">My Note</Col>
            <Col className="text-center">Copyright©2022</Col>
            <Col className="d-flex justify-content-center">
              <div className="d-flex justify-content-evenly" style={{ fontSize: '25px', width: '50%' }}>
                <i className="fa fa-facebook"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-instagram"></i>
                <i className="fa fa-envelope"></i>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;
