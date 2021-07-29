import React, {useState, useEffect }from 'react';
import Gallery from './gallery.jsx';
import ProductInfo from './productInfo.jsx';
import StyleSelector from './styleSelector.jsx';
import AddToCart from './addToCart.jsx';
import axios from 'axios';
import AUTH_TOKEN from '../config.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Overview (props) {

  const [styleInfo, setStyle] = useState({photos: []});
  const solid = 0;
  useEffect ( () => {
    var productID = props.product.id;
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${productID}/styles?product_id=${productID}`, {headers: {Authorization: AUTH_TOKEN }})
    .then( (response) => {
      for (var i of response.data.results ) {
        if(i['default?']) {
          setStyle(i);
          break;
        }
      }
    })
    .catch( (err) => {
      console.log('Houston we have this problem: ' + err);
    });
  }, [solid]);


  return (
    <Container fluid>
      <Row sm={2} md={2} lg={2}>
        <Col >
          <Gallery photos={styleInfo.photos}/>
        </Col>
        <Col sm={3} md={3} lg={3}>
          <Row>
            <ProductInfo product={props.product} info={styleInfo}/>
          </Row>
          <Row>
            <StyleSelector />
          </Row>
          <Row>
            <AddToCart info={styleInfo}/>
          </Row>
        </Col>
      </Row>
      <Row sm={2} md={2} lg={2}>
        <Col>
          <div> {props.product.slogan} </div>
          <p>{props.product.description}</p>
        </Col>
        <Col>
          <div>100% Egyptian Silk</div>
          <div>Vegan</div>
          <div>GMO and Pesticide Free</div>
        </Col>

      </Row>
    </Container>
  );
};

export default Overview;