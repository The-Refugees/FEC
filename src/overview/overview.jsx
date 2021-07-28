import React, {useState, useEffect }from 'react';
import Gallery from './gallery.jsx';
import ProductInfo from './productInfo.jsx';
import StyleSelector from './styleSelector.jsx';
import AddToCart from './addToCart.jsx';
import axios from 'axios';
import AUTH_TOKEN from '../config.js';


function Overview (props) {

  const [styleInfo, setStyle] = useState({photos: []});
  const solid = 0;
  useEffect ( () => {
    var productID = props.product.product_id;
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${productID}/styles?product_id=${productID}`, {headers: {Authorization: AUTH_TOKEN }})
    .then( (results) => {
      for (var i of results.data.results ) {
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
    <div>Overview in the House!
      <Gallery photos={styleInfo.photos}/>
      <ProductInfo />
      <StyleSelector />
      <AddToCart />
    </div>
  );
};

export default Overview;