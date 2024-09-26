import React, { useState, useContext, useEffect } from 'react';
import { Container, Row, Col, Accordion, Card as BootstrapCard, Form, InputGroup, Button } from 'react-bootstrap';
import EventCard from './EventCard';
import { X } from 'react-bootstrap-icons';
import { EventContext } from '../App';
import { Link } from 'react-router-dom';

const CardsFilter = () => {
  const { events } = useContext(EventContext);
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [expanded, setExpanded] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [checkboxes, setCheckboxes] = useState({
    All: false,
    Active: false,
    Upcoming: false,
    Past: false,
    Easy: false,
    Medium: false,
    Hard: false,
  });

  const handleAccordionChange = (eventKey) => {
    setExpanded(eventKey === '0');
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes((prev) => {
      const updatedCheckboxes = { ...prev, [name]: checked };
      if (name === 'All') {
        Object.keys(updatedCheckboxes).forEach((key) => {
          updatedCheckboxes[key] = checked;
        });
      } else {
        updatedCheckboxes.All = Object.keys(updatedCheckboxes)
          .filter((key) => key !== 'All')
          .every((key) => updatedCheckboxes[key]);
      }
      filterEvents(updatedCheckboxes, searchInput);
      return updatedCheckboxes;
    });
  };

  const filterEvents = (updatedCheckboxes, searchValue) => {
    const activeStatusFilters = Object.keys(updatedCheckboxes).filter((key) => updatedCheckboxes[key] && ['Active', 'Upcoming', 'Past'].includes(key));
    const activeLevelFilters = Object.keys(updatedCheckboxes).filter((key) => updatedCheckboxes[key] && ['Easy', 'Medium', 'Hard'].includes(key));

    const filteredList = events.filter((event) => {
      const matchesStatus = activeStatusFilters.length ? activeStatusFilters.includes(event.status) : true;
      const matchesLevel = activeLevelFilters.length ? activeLevelFilters.includes(event.level) : true;
      const matchesSearch = event?.status?.toLowerCase().includes(searchValue.toLowerCase())
      return matchesStatus && matchesLevel && matchesSearch;
    });

    setFilteredEvents(filteredList);
  };

  const handleRemoveFilter = (filter) => {
    setCheckboxes((prev) => {
      const updatedCheckboxes = { ...prev, [filter]: false };
      filterEvents(updatedCheckboxes, searchInput);
      return updatedCheckboxes;
    });
  };

  const renderSelectedFilters = () => {
    return Object.keys(checkboxes)
      .filter((key) => checkboxes[key] && key !== 'All')
      .map((key) => (
        <Button key={key} 
          style={{ marginLeft: '40px', borderRadius: '30px', display: 'flex', alignItems: 'center', backgroundColor: '#6c757d' }}
        >
          {key}
          <X onClick={() => handleRemoveFilter(key)} style={{ marginLeft: '8px', cursor: 'pointer' }} />
        </Button>
      ));
  };

  const searchInputChange = (e) => {
    const searchValue = e.target.value;
    setSearchInput(searchValue);
    filterEvents(checkboxes, searchValue);
  };

  useEffect(() => {
    setFilteredEvents(events);
  }, [events]);

  return (
    <Container fluid>
      <div className="filter-page">
        <h1 className="text-center mb-4 mt-5">Explore Challenges</h1>
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col md={8}>
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="search-input"
                  value={searchInput}
                  onChange={searchInputChange}
                />
              </InputGroup>
            </Col>
            <Col md={3}>
              <div className={`filter-button ${expanded ? 'expanded' : ''}`}>
                <Accordion onSelect={handleAccordionChange}>
                  <BootstrapCard>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Filter</Accordion.Header>
                      <Accordion.Body>
                        <Form>
                          <Form.Group>
                            <Form.Label>Status</Form.Label>
                            <Form.Check type="checkbox" label="All" name="All" checked={checkboxes.All} onChange={handleCheckboxChange} />
                            <Form.Check type="checkbox" label="Active" name="Active" checked={checkboxes.Active} onChange={handleCheckboxChange} />
                            <Form.Check type="checkbox" label="Upcoming" name="Upcoming" checked={checkboxes.Upcoming} onChange={handleCheckboxChange} />
                            <Form.Check type="checkbox" label="Past" name="Past" checked={checkboxes.Past} onChange={handleCheckboxChange} />
                          </Form.Group>
                          <Form.Group  className="mt-3">
                            <Form.Label>Level</Form.Label>
                            <Form.Check type="checkbox" label="Easy" name="Easy" checked={checkboxes.Easy} onChange={handleCheckboxChange} />
                            <Form.Check type="checkbox" label="Medium" name="Medium" checked={checkboxes.Medium} onChange={handleCheckboxChange} />
                            <Form.Check type="checkbox" label="Hard" name="Hard" checked={checkboxes.Hard} onChange={handleCheckboxChange} />
                          </Form.Group>
                        </Form>
                      </Accordion.Body>
                    </Accordion.Item>
                  </BootstrapCard>
                </Accordion>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                {renderSelectedFilters()}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid className="challenge-cards">
        <Row>
          {filteredEvents.map((event, index) => (
            <Col xs={12} sm={6} md={4} key={index}>
              <Link to='/preview' state={event} style={{ textDecoration: 'none' }}>
                <EventCard
                  imageUrl={event.imageUrl}
                  status={event.status}
                  title={event.title}
                  date={event.date}
                  text={event.text}
                  buttonText={event.buttonText}
                />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default CardsFilter;
