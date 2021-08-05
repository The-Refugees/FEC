import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Tracker = (props) => {
  var trackerHandler = (e) => {
    console.log("Big brother sees you!\n Element: ", e.target);
  }

  return (
    <div onClick={trackerHandler}>
      {React.cloneElement(props.children)}
    </div>
  )
}

export default Tracker;