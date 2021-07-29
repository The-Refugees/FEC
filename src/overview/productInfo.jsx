import React, {useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import AUTH_TOKEN from '../config.js';

var ProductInfo = (props) =>{

  var currentPrice = () => {
    //props.info can be used to update default price to current price here.
    if(props.info.sale_price !== null) {
      console.log('I see a sale! ' + props.info.sale_price);
    }
    return props.info.original_price;
  }

  return (
    <div>
      <div>
        <span>Star Rating Component = {props.rating[1].toFixed(1)}</span>
        <Button variant="link" href="#ratingsreviews">Read all {props.rating[0]} reviews</Button>
      </div>
      <div> <b>CATEGORY</b> > {props.product.category.toUpperCase()}</div>
      <h3>{props.product.name}</h3>
      <div>{currentPrice()}</div>
      <span id="fbbutton">
        <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&layout=button_count&size=small&width=96&height=20&appId"
        width={96} height={20} style={{border:"none",overflow:"hidden"}} scrolling="no" frameBorder={0} allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      </span>
      <a data-pin-do="buttonBookmark" data-pin-tall="true" data-pin-round="true" href="https://www.pinterest.com/pin/create/button/"><img src="http://assets.pinterest.com/images/pidgets/pinit_fg_en_round_red_32.png" /></a>
      <a class="twitter-share-button"
      href="https://twitter.com/intent/tweet?text=Hello%20world"
      data-size="large">
      Tweet</a>
    </div>
  );
}


export default ProductInfo;