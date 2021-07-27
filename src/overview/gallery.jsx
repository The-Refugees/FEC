import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import PhotoItem from './PhotoItem.jsx';

function Gallery (props) {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {props.photos.map((item, i) => {
        return <PhotoItem picture={item} key={i} name={props.name}/>
      })}
    </Carousel>
  );
}

export default Gallery;



/*<PhotoItem picture = {this.state.photos[0]}/>*/