import React from 'react';
import Button from 'react-bootstrap/Button';

var ProductInfo = (props) =>{
  var currentPrice = () => {
    //props.info can be used to update default price to current price here.
    return props.info.original_price;
  }

  return (
    <div>
      <div>
        <span>Star Rating Component</span>
        <Button variant="link">Read all reviews</Button>
      </div>
      <div> {props.product.category}</div>
      <h3>{props.product.name}</h3>
      <div>{currentPrice()}</div>
      <div>.</div>
    </div>
  );
}


export default ProductInfo;