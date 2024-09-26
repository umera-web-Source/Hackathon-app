import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';

const EventCard = ({ imageUrl, status, title, text, date, buttonText }) => {
  const isActive = status === 'Active';

  return (
    <Container>
      <Card className="mb-3 shadow" style={{ width: '354px', height: '473px', borderRadius:'12px' }}>
        <Card.Img
          variant="top"
          src={imageUrl}
          alt={title}
          style={{ height: '140px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px',}}
        />
        <Card.Body
          className="text-center"
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '25px 50px',
          }}
        >
          <Button
            style={{
              backgroundColor:
                status === 'Active'
                  ? '#A2F5A4' 
                  : status === 'Upcoming'
                  ? '#FFA07A' 
                  : status === 'Past'
                  ? '#FFB6C1' 
                  : '#ffc107',
            }}className="mb-3 brg-btn"
          >
            {status}
          </Button>
          <Card.Title className="fw-bold ff-Poppins" style={{fontSize: '18px', fontWeight: '700' }}>
            {title}
          </Card.Title>
          <Card.Text className="text-muted fw-bold" style={{ fontFamily: 'Poppins', fontSize: '18px', lineHeight: '28px' }}>
            {text}
          </Card.Text>
          <Card.Text className="text-muted fw-bold">{date}</Card.Text>
          <Button
            variant="success"
            className="rounded-pill px-4 py-2"
            style={{ fontWeight: 'bold', marginTop: '20px', width: '100%' }}
          >
            {buttonText}
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EventCard;
