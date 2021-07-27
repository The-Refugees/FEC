import React from 'react';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';


const RatingsReviews = (props) => {



  return (
    <div id="ratingsreviews">
      <h2>Ratings and Reviews</h2>
      <Ratings />
      <Reviews />
    </div>
  )
}

export default RatingsReviews;