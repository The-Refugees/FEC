import React from 'react';
import ReviewList from './reviews/ReviewList.jsx'
import NewReview from './reviews/NewReview.jsx';


const Reviews = (props) => {


  return (
    <div id="reviews">
      <h3>Hello Reviews!</h3>
      <ReviewList />
      {true && <NewReview />}
    </div>
  )
}

export default Reviews;