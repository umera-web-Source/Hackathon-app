import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/Group 21554.svg';

const Header = () => {
  return (
    <Container className="d-flex align-items-left">
      <Row className="w-100 p-3">
        <Col>
          <img src={logo} alt="logo" className="header-logo" />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
