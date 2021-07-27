import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

var PhotoItem  = React.forwardRef((props, ref) => {
  return (
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src={props.picture.url}
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>{props.picture.url}</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
});


export default PhotoItem;