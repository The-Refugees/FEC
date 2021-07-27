import React from 'react';
import Gallery from './gallery.jsx';
import ProductInfo from './productInfo.jsx';
import StyleSelector from './styleSelector.jsx';
import AddToCart from './addToCart.jsx';
import axios from 'axios';
//import AUTH_TOKEN from '../config.js';
import data from './data.js';

class Overview extends React.Component {
  constructor(props){
    super(props);
    this.state = {currentStyle: 0};
  }
  componentDidMount () {
    this.setState({currentStyle: this.props.style});
    /*
    var config = {
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/24156/?product_id=24156',
      headers: {'Authorization': AUTH_TOKEN,
                'Origin' : 'http://Users/portiajones/Work/FEC/dist/index.html'
        }
      }
    axios.get(config)
    .then( (results) => {
      console.log('These are the results: ' + results);
    })
    .catch( (err) => {
      console.log('Houston we have this problem: ' + err);
    });*/
  }

  render() {
    return (
      <div>Overview in the House! {this.props.product[this.state.currentStyle].name}
        <Gallery photos={this.props.product[this.state.currentStyle].photos}/>
        <ProductInfo />
        <StyleSelector />
        <AddToCart />
      </div>
    );
  }
}

export default Overview;