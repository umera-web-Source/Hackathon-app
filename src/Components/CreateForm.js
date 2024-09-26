import React, { useContext } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { EventContext } from '../App';
import { useLocation, useNavigate } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  challengeName: Yup.string().required('Challenge Name is required'),
  startDate: Yup.date().required('Start Date is required'),
  endDate: Yup.date().required('End Date is required'),
  description: Yup.string().required('Description is required'),
  imageUrl: Yup.mixed().required('Image is required'),
  difficulty: Yup.string().required('Difficulty level is required'),
});

const CreateForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const eventEdited = location.state; 
  const { events, setEvents } = useContext(EventContext); 

  const initialValues = {
    challengeName: eventEdited?.title || '',
    startDate: eventEdited?.date || '',
    endDate: eventEdited?.date || '',
    description: eventEdited?.des || '',
    imageUrl: '',
    difficulty: eventEdited?.difficulty || 'Easy',
  };

  const onSubmit = (values) => {
    const newEvent = {
      imageUrl: URL.createObjectURL(values.imageUrl), 
      status: 'Upcoming',
      title: values.challengeName,
      date: `Starts on: ${values.startDate}`,
      buttonText: 'Participate Now',
      difficulty: values.difficulty,
    };

    if (eventEdited) {
      const updatedEvents = events.map((event) =>
        event.title === eventEdited.title ? newEvent : event
      );
      setEvents(updatedEvents);
      alert('Challenge Updated Successfully!');
    } else {
      setEvents([...events, newEvent]);
      alert('Challenge Created Successfully!');
    }
    navigate("/");
  };

  return (
    <div>
      <div className="main-head">
        <h1 className="main-h1">Challenge Details</h1>
      </div>
      <Container className="mt-5">
        <Row className="justify-content-left">
          <Col md={8}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ values, errors, touched, handleChange, handleSubmit, setFieldValue }) => (
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Challenge Name</Form.Label>
                    <Form.Control
                     className='form-input'
                      type="text"
                      name="challengeName"
                      value={values.challengeName}
                      onChange={handleChange}
                      placeholder="Enter challenge name"
                      isInvalid={touched.challengeName && errors.challengeName}
                    />
                    {touched.challengeName && errors.challengeName && (
                      <div className="error-message">{errors.challengeName}</div>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control
                      className='form-input'
                      type="date"
                      name="startDate"
                      value={values.startDate}
                      onChange={handleChange}
                    />
                    {touched.startDate && errors.startDate && (
                      <div className="error-message">{errors.startDate}</div>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>End Date</Form.Label>
                    <Form.Control
                      className='form-input'
                      type="date"
                      name="endDate"
                      value={values.endDate}
                      onChange={handleChange}
                    />
                    {touched.endDate && errors.endDate && (
                      <div className="error-message">{errors.endDate}</div>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      className='form-des'
                      as="textarea"
                      name="description"
                      value={values.description}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Enter challenge description"
                      isInvalid={touched.description && errors.description}
                    />
                    {touched.description && errors.description && (
                      <div className="error-message">{errors.description}</div>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Upload Image</Form.Label>
                    <Form.Control
                      className='form-img'
                      type="file"
                      name="imageUrl"
                      onChange={(e) => setFieldValue('imageUrl', e.target.files[0])}
                    />
                    {touched.imageUrl && errors.imageUrl && (
                      <div className="error-message">{errors.imageUrl}</div>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Level</Form.Label>
                    <Form.Select
                    className='form-img'
                      name="difficulty"
                      value={values.difficulty}
                      onChange={handleChange}
                    >
                      <option value="Easy">Easy</option>
                      <option value="Medium">Medium</option>
                      <option value="Hard">Hard</option>
                    </Form.Select>
                  </Form.Group>

                  <Button className="form-btn" variant="success" type="submit">
                    {eventEdited ? 'Update Challenge' : 'Create Challenge'}
                  </Button>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CreateForm;
