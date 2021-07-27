import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

var PhotoItem  = React.forwardRef((props, ref) => {
  return (
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
      />
    </Carousel.Item>
  );
});


export default PhotoItem;
/*
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>{props.picture.url}</p>
      </Carousel.Caption>*/