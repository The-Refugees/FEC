import React from 'react';
import SummaryRec from './ratings/SummaryRec.jsx'
import RatingBreakdown from './ratings/RatingBreakdown.jsx';
import ProductBreakdown from './ratings/ProductBreakdown.jsx';
import {avgRating} from './helpers.js';
import AvgStarRating from '../star_rating/AvgStarRating.jsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Ratings = (props) => {
  let rating = avgRating(props.ratings);

  return (
    <React.Fragment>
      <Row>
        <Col sm={3} style={{fontSize: "xxl"}}>
          {rating}
        </Col>
        <AvgStarRating rating={3.5} />
      </Row>

      <SummaryRec />
      <RatingBreakdown />
      <ProductBreakdown />
    </React.Fragment>
  )
}

export default Ratings;