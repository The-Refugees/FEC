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

  const [styleInfo, setStyle] = useState({photos: [], sale_price: null});
  const [[ratingTotal, ratingAvg] , setRating] = useState([0,0]);

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

    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews/meta?product_id=${productID}`, {headers: {Authorization: AUTH_TOKEN }})
    .then( (response) => {
      var total = 0;
      var avg = 0;
      for(var key in response.data.ratings) {
        total += Number(response.data.ratings[key]);
        avg += Number(key)*Number(response.data.ratings[key]);
      }
      avg=avg/total;
      setRating([total, avg]);
    })
    .catch( (err) => {
      console.log('cant calculate review total: ' + err);
    });
  }, [solid]);


  return (
    <Container fluid>
      <Row sm={2} md={2} lg={2}>
        <Col >
          <Gallery photos={styleInfo.photos}/>
        </Col>
        <Col>
          <Row>
            <ProductInfo product={props.product} info={styleInfo} rating={[ratingTotal, ratingAvg]}/>
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