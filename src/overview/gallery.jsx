import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Gallery (props) {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }
  
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {props.photos.map((item, i) => {
        return <Carousel.Item>
          <img
          className="d-block w-100"
          src={item.url}
          />
        </Carousel.Item>
        })}
    </Carousel>
  );
}

export default Gallery;
