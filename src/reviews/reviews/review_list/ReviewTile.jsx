import React from 'react';
import RatingTimestamp from './RatingTimestamp.jsx';
import ReviewBody from './ReviewBody.jsx';
import Helpfulness from './Helpfulness.jsx';



const ReviewTile = (props) => {


  return (
    <div id="review-tile-{reviewId}" key="somethingUnique">
      -Individual Review Tile-
      <RatingTimestamp />
      <ReviewBody />
      <Helpfulness />
    </div>
  )
}

export default ReviewTile;