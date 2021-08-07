import React, {useState} from 'react';
import {avgRating, percentRecommended, percentRating} from '../../shared/helpers.js';
import AvgStarRating from '../../shared/AvgStarRating.jsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ProductBreakdown from './ProductBreakdown.jsx';


const Ratings = (props) => {
  const {ratings, recommended, characteristics} = props.ratings;
  let rating = avgRating(ratings);
  let recommendedAverage = percentRecommended(recommended);
  let percentRatings = percentRating(ratings);


  return (
    <React.Fragment>
      <Row>
        <Col sm={4} style={{fontSize: "40px", fontWeight: "bold"}}>
          {rating}
        </Col>
        <Col sm={8} style={{margin: "auto"}}>
          <AvgStarRating rating={rating} />
        </Col>
      </Row>

      {percentRatings.map((star) => (

        <Row key={star.star + 'star-bar'}>
          <Col sm={3} style={{padding: "0 0 0 12px"}}>
            {star.star} Stars
          </Col>
          <Col sm={8} style={{margin: "auto", padding: "0px", justifyContent: "left"}}>
            <ProgressBar variant="success" now={star.percent} />
          </Col>
          <Col sm={1} style={{padding: "0 0 0 12px", justifyContent: "left"}}>
            {'(' + star.ratings + ')'}
          </Col>
        </Row>

      ))}

      <Row>
        <p id="recommend" style={{fontSize: "14px", padding: "20px 12px"}}>
          {recommendedAverage}% of reviewers recommend this product
        </p>
      </Row>

      <Row>
        <ProductBreakdown characteristics={characteristics} />
      </Row>

    </React.Fragment>

  )
}

export default Ratings;