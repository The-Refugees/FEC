import React from 'react';
import SummaryRec from './ratings/SummaryRec.jsx'
import RatingBreakdown from './ratings/RatingBreakdown.jsx';
import ProductBreakdown from './ratings/ProductBreakdown.jsx';
import {avgRating} from './helpers.js';



const Ratings = (props) => {


  return (
    <div id="ratings">
      <h1>{avgRating(props.ratings)}</h1>
      <SummaryRec />
      <RatingBreakdown />
      <ProductBreakdown />
    </div>
  )
}

export default Ratings;