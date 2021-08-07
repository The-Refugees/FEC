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


var Overview = (props) => {
  const [styleList,setStyleList] = useState([]);
  const [styleInfo, setStyle] = useState({photos: [{url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"}], name: '', sale_price: null, skus: {}});
  const [[ratingTotal, ratingAvg] , setRating] = useState([0,0]);


  useEffect ( () => {
    var productID = props.product.id;
    axios.get(`/overview/${productID}`)
    .then( (response) => {
      setStyleList(response.data.styleList);
      setStyle(response.data.style);
      setRating(response.data.rating);
    })
    .catch( (err) => {
      console.log(err);
    });
  }, [props.product.id]);

  var updateStyle = (newStyle) => {
    for (var i of styleList) {
      if (i.name === newStyle) {
        setStyle(i);
        break;
      }
    }
  }

  return (
    <Container id="overview" style={{padding: "50px 12px 100px 12px"}}>
      <Row >
        <Col sm={6} md={6} lg={5} xl={5}>
          <Gallery photos={styleInfo.photos} product={props.product.name} style={styleInfo.name}/>
        </Col>
        <Col sm={6} md={6} lg={6}>
          <Row>
            <ProductInfo product={props.product} info={styleInfo} rating={[ratingTotal, ratingAvg]}/>
          </Row>
          <Row>
            <StyleSelector product={props.product} info={[styleInfo.name, styleList]} styleUpdater={updateStyle}/>
          </Row>
          <Row>
            <AddToCart info={styleInfo}/>
          </Row>
        </Col>
      </Row>
      <Row >
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