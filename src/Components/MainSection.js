import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import rocketLogo from '../assets/PicsArt_04-14-04.42 1.svg';
import icon1 from '../assets/icons/Group 1000002515.svg';
import icon2 from '../assets/icons/Group 1000002516.svg';
import icon3 from '../assets/icons/Group 1000002518.svg';
import { Link } from 'react-router-dom';


const MainSection= () => {
  const iconData = [
    { icon: icon1, count: '100K+', description: 'AI model submissions' },
    { icon: icon2, count: '50K+', description: 'Data Scientists' },
    { icon: icon3, count: '100+', description: 'AI Challenges hosted' }
  ];

  return (
    <Container fluid className="Section-page">
      <Row>
        <Col xs={1}>
          <div className="line-bar"></div>
        </Col>
        <Col xs={8}>
          <div className="p-1">
            <p>Accelerate Innovation with Global AI Challenges</p>
          </div>
          <div className="p-2">
            <p>
              AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.
            </p>
          </div>
          <Link to="/create-challenge">
            <Button className="create-btn">
              <span>Create Challenge</span>
            </Button>
          </Link>
        </Col>
        <Col xs={3}>
          <img src={rocketLogo} alt="Rocket Logo" className="rocket-img" />
        </Col>
      </Row>
      <Container className="section-2">
      <Row className="section2-item justify-content-center align-items-center">
        {iconData.map((item, index) => (
          <Col key={index} md={4} className="text-center obj-class d-flex align-items-center justify-content-center">
            <div className="content d-flex">
              <img src={item.icon} alt={`icon-${index}`} />
              <div className="p-3">
                <p className="count m-1">{item.count}</p>
                <p className="descp">{item.description}</p>
              </div>
            </div>
            {index < iconData.length - 1 && <div className="vertical-line"></div>}
          </Col>
        ))}
      </Row>
    </Container>
    </Container>
  );
};

export default MainSection;
