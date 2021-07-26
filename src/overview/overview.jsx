import React from 'react';
import Gallery from './gallery.jsx';
import ProductInfo from './productInfo.jsx';
import StyleSelector from './styleSelector.jsx';
import AddToCart from './addToCart.jsx';

class Overview extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>Overview in the House!
        <Gallery />
        <ProductInfo />
        <StyleSelector />
        <AddToCart />
      </div>
    );
  }
}

export default Overview;