import React from 'react';
import NavbarComp from './Navbar';
import { Container, Navbar, Nav, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
  return (
    <div>
      <section id="title">
        {/* Navbar */}
        <Navbar
          variant="light"
          style={{
            backgroundColor: '#E9EFC0',
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
              fontSize: '20px'
            }}
          >
            Sign Up now
          </Button>
        </Container>
      </section>

      <section id="features">
        <Container>
          <h1 className='text-center'>FEATURES</h1>
          <Row className="justify-content-around">
            <Col lg={3} className="feature-desc">
              Totally free. There's no need to pay any expense to store your notes
            </Col>
            <Col lg={3} className="justify-content-right">
              <i className="fa-solid fa-piggy-bank" style={{ fontSize: '50px' }} />
              <FontAwesomeIcon icon="fa-solid fa-piggy-bank" />
            </Col>
          </Row>
          <Row className="justify-content-around">
            {/* <Col lg={3}><i className="fa fa-piggy" style={{ fontSize: '50px' }} /></Col> */}
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
            <Col lg={3}>{/* <i className="fa fa-trash" style={{ fontSize: '50px' }} /> */}</Col>
          </Row>
        </Container>
      </section>

      <section id="testimonials">
        <Container>
          <h1 className='text-center'>TESTIMONIALS</h1>
          <Row className="justify-content-evenly mt-4">
            <Col lg={3} className="d-flex justify-content-evenly">
              <Card style={{ width: '18rem' }}>
                <Card.Body className="justify-items-center review-card">
                  <div>
                    <i className="fa fa-quote-left d-flex justify-content-start" style={{ fontSize: '25px' }} />
                    <Card.Text style={{ textAlign: 'start' }}>Best site ever! Easy 5 star.</Card.Text>
                  </div>
                  <Row>
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
                      <img src={require('../images/2821040788.jpg')} alt="" style={{ width: '75%', borderRadius: '50%', border: '2px solid #fff' }} />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} className="d-flex justify-content-evenly">
              <Card style={{ width: '18rem' }}>
                <Card.Body className="justify-items-center review-card">
                  <div>
                    <i className="fa fa-quote-left d-flex justify-content-start" style={{ fontSize: '25px' }} />
                    <Card.Text style={{ textAlign: 'start' }}>I'm amazed for this site.</Card.Text>
                  </div>
                  <Row>
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
                      <img src={require('../images/608eb6854cbba.jpg')} alt="" style={{ width: '75%', borderRadius: '50%' }} />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} className="d-flex justify-content-evenly">
              <Card style={{ width: '18rem' }}>
                <Card.Body className="justify-items-center review-card">
                  <div>
                    <i className="fa fa-quote-left d-flex justify-content-start" style={{ fontSize: '25px' }} />
                    <Card.Text style={{ textAlign: 'start' }}>It's ok. Although it still need some improvements here and there but nevertheles still an ok site for me.</Card.Text>
                  </div>
                  <Row className='mt-5'>
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
                      <img src={require('../images/index.jpg')} alt="" style={{ width: '75%', borderRadius: '50%' }} />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            {/* <Col lg={3} className="d-flex justify-content-evenly">
              <Card style={{ width: '18rem' }}>
                <Card.Body className="justify-items-center review-card">
                  <div>
                    <i className="fa fa-quote-left d-flex justify-content-start" style={{ fontSize: '25px' }} />
                    <Card.Text style={{ textAlign: 'start' }}>It's ok. Although it still need some improvements here and there but nevertheles still an ok site for me.</Card.Text>
                  </div>
                  <Row>
                    <Col className="align-self-center pt-5" style={{ textAlign: 'left' }}>
                      <Card.Title>Jack D</Card.Title>
                      <Card.Subtitle>Twitter</Card.Subtitle>
                      <div className="stars">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                    </Col>
                    <Col className="align-self-center">
                      <img src={require('../images/index.jpg')} alt="" style={{ width: '75%', borderRadius: '50%' }} />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col> */}
          </Row>
        </Container>
      </section>

      <section id="footer">
        <Container>
          <Row>
            <Col>My Note</Col>
            <Col>Copyright©2022</Col>
            <Col>
              <div className="d-flex justify-content-evenly" style={{ fontSize: '25px' }}>
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
