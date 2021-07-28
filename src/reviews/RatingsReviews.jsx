import React from 'react';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';
import {Container, Row, Col} from 'react-bootstrap';


const RatingsReviews = (props) => {



  return (
    <Container id="ratingsreviews">
      <Row>
        <h2>Ratings and Reviews</h2>
      </Row>
      <Row>
        <Col md={6}>
          <Ratings />
        </Col>
        <Col md={6}>
          <Reviews />
        </Col>
      </Row>
    </Container>
  )
}

export default RatingsReviews;