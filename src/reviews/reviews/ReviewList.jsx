import React from 'react';
import ReviewTile from './review_list/ReviewTile.jsx';


const ReviewList = (props) => {

  // map the review list into individual review tiles

  return (
    <div id="review-list">
      --Review List--
      <ReviewTile />
    </div>
  )
}

export default ReviewList;