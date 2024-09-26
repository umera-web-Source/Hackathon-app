import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import icon1 from "../assets/icons/carbon_notebook-reference.svg";
import icon2 from "../assets/icons/Vector.svg";
import icon3 from "../assets/icons/Robot.svg";
import icon4 from "../assets/icons/IdentificationCard.svg";

const CardsSection = () => {
    const cardObj = [
        { icon: icon1, title: "Prove your skills", descp: "Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions." },
        { icon: icon2, title: "Learn from community", descp: "One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them." },
        { icon: icon3, title: "Challenge yourself", descp: "There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder." },
        { icon: icon4, title: "Earn recognition", descp: "You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards." }
    ];

    return (
        <div className='card-section'>
            <h1>Why Participate in <span>AI Challenges?</span></h1>
            <Container className="my-5">
                <Row>
                    {cardObj.map((item, key) => (
                        <Col xs={12} md={6} key={key} className="mb-4">
                            <Card className="grid-card-items p-3">
                                <Card.Body className="text-left">
                                    <Card.Img src={item.icon} alt={`icon${key}`} style={{ width: "55px", height: "55px", margin: "0 auto" }} />
                                    <Card.Title className="mt-3 card-tittle ">{item.title}</Card.Title>
                                    <Card.Text className="card-text">{item.descp}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default CardsSection;
