import React from 'react';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {reviews, ratings} from './reviewsData.js';


const RatingsReviews = (props) => {

  let [newReviewClicked, newReviewClickedSet] = React.useState(true);

  let reviewsCount = Object.values(ratings.ratings).reduce((acc, val) => acc + Number(val), 0);

  return (
    <Container id="ratingsreviews">
      <Row>
        <h3>Ratings and Reviews</h3>
      </Row>
      <Row className="justify-content-start">

        <Col sm={4} id="ratings">
          <Ratings ratings={ratings} reviewsCount={reviewsCount}/>
          <Row>
            <Col sm={10}>
              <Button variant="light" style={{backgroundColor: 'rgb(189, 228, 255)'}}>More Reviews</Button>
            </Col>
          </Row>
          <Row>
            <Col sm={10}>
             <Button variant="light" style={{backgroundColor: 'rgb(140, 206, 250)'}}>Write New Review</Button>
            </Col>
          </Row>
        </Col>

        <Col sm={8}>
          <Reviews reviews={reviews} reviewsCount={reviewsCount} newReviewClicked={newReviewClicked}/>
        </Col>

      </Row>

    </Container>
  )
}

export default RatingsReviews;