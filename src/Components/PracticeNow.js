import React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { BsClockFill } from 'react-icons/bs';

const PracticeNow = () => {
    const location = useLocation();
    const event = location.state;
    console.log("events", event);

    return (
        <>
            <div className="w-100" style={{ height: '419px', backgroundColor: '#004455' }}>
                <Container className="d-flex flex-column align-items-left justify-content-center h-100">
                    <div className="bg-warning rounded-3 d-flex justify-content-center align-items-center p-3 mb-4" style={{ width: '464px' ,maxHeight:'20px'}}>
                       <BsClockFill className="me-2" style={{ color: 'black' }} />
                        <span className="text-black">
                            Starts on {event.date}
                        </span>
                    </div>
                    <h2 className="fw-bold text-white text-start" style={{ width: '100%' }}>
                        {event.title}
                    </h2>
                    <p className="text-white text-start mt-3 mb-4" style={{ width: '100%' }}>
                        {event.des}
                    </p>
                    <Button 
                        className="mb-5 bg-light text-dark border-0 rounded-pill" style={{ width: '80px' }}
                    >
                        {event.level}
                    </Button>
                </Container>
            </div>

            <Container fluid className="bg-light py-4 mt-3">
                <Row className="align-items-center mb-2">
                    <Col>
                        <h3 className="fw-bold mb-0 text-dark">
                            Overview
                        </h3>
                    </Col>
                    <Col className="text-end">
                        <Link to='/create-challenge' state={event} className="text-decoration-none">
                            <Button variant="success" className="me-2 px-4 py-2">
                                Edit
                            </Button>
                        </Link>
                        <Button variant="outline-danger" className="px-4 py-2">
                            Delete
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-5">
                        <p className="text-secondary">
                            {event.des}
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default PracticeNow;
