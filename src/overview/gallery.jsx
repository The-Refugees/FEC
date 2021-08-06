import React, { useState, useRef } from 'react';
import ImageGallery from 'react-image-gallery';
import Image from 'react-bootstrap/Image';
import Ratio from 'react-bootstrap/Ratio';

var Gallery = (props) => {
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
        items={props.photos.map((photoObj, index)=>{
        return {original: photoObj.thumbnail_url, thumbnail: photoObj.thumbnail_url, originalHeight: "700",originalWidth: "500", thumbnailHeight: "120", thumbnailWidth: "75",  originalAlt:`Picture of product ${props.product} style ${props.style} number ${index+1}`, thumbnailAlt: `Thumbnail of product ${props.product} style ${props.style} number ${index+1}`} // thumbnailWidth is not working
      })}/>
  );
}

export default Gallery;
