import React, {useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import AvgStarRating from '../../shared/AvgStarRating.jsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

var ProductInfo = (props) => {

  var currentPrice = () => {
    if (props.info.sale_price !== null) {
      return <div><strike>${props.info.original_price}</strike>
      <span style={{color:"red"}}>    ${props.info.sale_price}</span>
      </div>;

    }
    return <div>${props.info.original_price}</div>;
  }

  return (
    <div>
      <Row className="justify-content-start">
        <Col md={3}>
          <AvgStarRating rating={props.rating[1].toFixed(1)}/>
        </Col>
        <Col>
          <Button variant="link" href="#ratingsreviews">Read all {props.rating[0]} reviews</Button>
        </Col>
      </Row>
      <div> <b>CATEGORY</b> > {props.product.category.toUpperCase()}</div>
      <h3>{props.product.name}</h3>
      {currentPrice()}
      <span id="fbbutton">
        <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&layout=button_count&size=small&width=96&height=20&appId"
        width={96} height={20} style={{border:"none",overflow:"hidden"}} scrolling="no" frameBorder={0} allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      </span>
      <a data-pin-do="buttonBookmark" data-pin-tall="true" data-pin-round="true" href="https://www.pinterest.com/pin/create/button/"><img src="http://assets.pinterest.com/images/pidgets/pinit_fg_en_round_red_32.png" /></a>
      <a className="twitter-share-button"
      href="https://twitter.com/intent/tweet?text=Hello%20world"
      data-size="large">
      Tweet</a>
    </div>
  );
}


export default ProductInfo;