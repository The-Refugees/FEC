import React from 'react';
import SummaryRec from './ratings/SummaryRec.jsx'
import RatingBreakdown from './ratings/RatingBreakdown.jsx';
import ProductBreakdown from './ratings/ProductBreakdown.jsx';


const Ratings = (props) => {


  return (
    <div id="ratings">
      <h3>Hello Ratings!</h3>
      <SummaryRec />
      <RatingBreakdown />
      <ProductBreakdown />
    </div>
  )
}

export default Ratings;