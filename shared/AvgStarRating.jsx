import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// expects a PropType of 'rating' to render the stars

const AvgStarRating = (props) => {

  let {rating} = props;
  if (rating > 5 ||
    rating < 1 ||
    rating === NaN ||
    rating === undefined) {
    return null
  };
  let starFull = {
    path: '../lib/img/Star_Full.png',
    alt: 'image of a fully filled-in star'
  };
  let star75 = {
    path: '../lib/img/Star75.png',
    alt: 'image of a 75 percent filled-in star'
  };
  let starHalf = {
    path: '../lib/img/Star_Half.png',
    alt: 'image of a half filled-in star'
  };
  let star25 = {
    path: '../lib/img/Star25.png',
    alt: 'image of a 25 percent filled-in star'
  };
  let starEmpty = {
    path: '../lib/img/StarEmpty.png',
    alt: 'image of an empty star'
  };

  // round to the nearest .25
  let rounded = (Math.round(rating * 4) / 4).toFixed(2);
  let stars = [];

  // loop 5 times
  for (var i = 5; i > 0; i--) {
    if (rounded >= 1) {
      rounded--;
      stars.push(starFull);
    } else if (rounded === 0.75) {
      rounded = 0;
      stars.push(star75);
    } else if (rounded === 0.5) {
      rounded = 0;
      stars.push(starHalf);
    } else if (rounded === 0.25) {
      rounded = 0;
      stars.push(star25);
    } else if (rounded === 0) {
      stars.push(starEmpty);
    }
  }

  return (
    <Row>
      {stars.map((star, index) => {
        return (
          <Col sm={1} key={'star' + index}>
            <img
              src={star.path}
              width="30px"
              height="30px"
              alt={star.alt}
            />
          </Col>
        )
      })}
    </Row>
  );
}

export default AvgStarRating;