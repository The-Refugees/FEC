import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import date from 'date-and-time';
const now = new Date();

const Tracker = (props) => {
  var trackerHandler = (e) => {
    console.log("Big brother sees you!\nTime: ",date.format(now, 'ddd, MMM DD YYYY HH:mm:ss') ,"\nElement: ", e.target);
  }

  return (
    <div onClick={trackerHandler}>
      {React.cloneElement(props.children)}
    </div>
  )
}

export default Tracker;