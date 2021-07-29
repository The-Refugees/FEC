import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import { Row } from 'react-bootstrap';


const ReviewList = (props) => {

  // map the review list into individual review tiles
  let {reviews} = props;

  return (

    <Row id="review-list">
      {reviews.map((review) => {
        return (
          <ReviewTile key={review.review_id} review={review} />
        );
      })}
    </Row>

  )
}

export default ReviewList;