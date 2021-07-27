import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import PhotoItem from './PhotoItem.jsx';
import Ratio from 'react-bootstrap/Ratio';

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
/*
  return (
    <div style={{ width: 660, height: 'auto' }}>
      <Ratio aspectRatio='1x1'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {props.photos.map((item, i) => {
            return <PhotoItem picture={item} key={i} name={props.name}/>
          })}
        </Carousel>
      </Ratio>
    </div>
  );*/
}

export default Gallery;



/*<PhotoItem picture = {this.state.photos[0]}/>*/