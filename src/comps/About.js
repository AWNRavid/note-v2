import React from 'react'
import NavbarComp from './Navbar'
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import './About.css'

function About() {
  return (
    <div>
      <NavbarComp />
      <Container>
        <Row className='justify-content-around'>
          <Col lg={4}>Lorem ipsum dolor sit amet.</Col>
          <Col lg={4}>Lorem, ipsum dolor.</Col>
        </Row>
      </Container>
    </div>
  )
}

export default About