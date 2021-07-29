import React from 'react';
import ReviewList from './reviews/ReviewList.jsx'
import NewReview from './reviews/NewReview.jsx';
import Row from 'react-bootstrap/Row';



const Reviews = (props) => {




  return (
    <Row id="reviews">
      <h6>{props.reviewsCount} reviews, sorted by *RELEVANCE*</h6>
      <ReviewList reviews={props.reviews} />
      {props.newReviewClicked && <NewReview />}
    </Row>
  )
}

export default Reviews;