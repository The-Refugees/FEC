import React, { useState, useRef } from 'react';
import ImageGallery from 'react-image-gallery';
import Image from 'react-bootstrap/Image';
import Ratio from 'react-bootstrap/Ratio';

function Gallery (props) {
  const [isFullScreen, setFullScreen] = useState(false);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }

  var fullScreenMode = () => {
    if (isFullScreen) {
      //ImageGallery.exitFullScreen();//this doesnt work
      //document.getElementsByClassName("image-gallery-fullscreen-button")[0].click();
    } else {
      document.getElementsByClassName("image-gallery-fullscreen-button")[0].click();
    }
  }

  // Customize this class name to customize each thumbnail bar  className="image-gallery-thumbnail-inner"
  // Customize this class name to customize each thumbnail className="image-gallery-thumbnail-image"

  return (
      <ImageGallery showPlayButton={false}
        id="Gallery"
        lazyload={true}

        //style={{cursor: "zoom-in;"}}
        onClick={fullScreenMode}
        //thumbnailPosition ="left"
        items={props.photos.map((photoObj)=>{
        return {original: photoObj.thumbnail_url, thumbnail: photoObj.thumbnail_url, originalWidth: "400px", originalHeight: "600px", thumbnailHeight: "100px", thumbnailWidth: "150px"} //  thumbnailHeight: "50px", thumbnailWidth: "50px"
      })}/>
  );
}

export default Gallery;

/*     <Carousel interval={null} activeIndex={index} onSelect={handleSelect} indicatorLabels={props.photos.map((item) => {
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
    </Carousel>*/
