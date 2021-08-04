import React from 'react';
import Overview from './overview/overview.jsx'
import QandA from './questions/QandA.jsx';
import RatingsReviews from './reviews/RatingsReviews.jsx';
import data from './overview/data.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import 'react-image-gallery/styles/css/image-gallery.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      currentProduct: {id:24156, category: '', slogan: '', name: ''},
      productList: [{id:24156, category: '', slogan: '', name: ''}]
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/products`)
    .then( (response) => {
      this.setState({productList: response.data});
    })
    .catch( (err) => {
      console.log(err);
    });
  }

  handleProductSubmit = (e) => {
    e.preventDefault();
    var newItem = this.state.productList.slice()[this.state.term];
    this.setState({currentProduct: newItem})
  }

  inputHandler = (e) => {
    e.preventDefault();
    this.setState({term: e.target.value})
  }

  render() {
    return (
      <div>
        <h1 >Hello User! </h1>
        <form onSubmit={this.handleProductSubmit}>
          What index do you want to see?
          <input type="number" name="productIndex" value={this.state.term} onChange={this.inputHandler}/>
          <button type="submit"  value="Get Product"/>
        </form>
        <Overview product={this.state.currentProduct}/>
        <QandA />
        <RatingsReviews productId='24156' />
      </div>
    );
  };
}

export default App;