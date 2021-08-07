import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

function Gallery (props) {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }

  return (
    <Carousel interval={null} activeIndex={index} onSelect={handleSelect} indicatorLabels={props.photos.map((item) => {
      return <Image src={item.thumbnail_url} thumbnail />
      })}>
      {props.photos.map((item, i) => {
        return <Carousel.Item key={i} >
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
