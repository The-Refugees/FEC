import React from 'react';
import Button from 'react-bootstrap/Button';

var ProductInfo = (props) =>{
  return (
    <div>
      <div>
        <span>Star Rating Component</span>
        <Button variant="link">Read all reviews</Button>
      </div>
      <div> CATEGORY</div>
      <h3>{props.info.name}</h3>
      <div>{props.info.original_price}</div>
      <h8>.</h8>
    </div>
  );
}


export default ProductInfo;