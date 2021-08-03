import React from 'react';
import Overview from './overview/overview.jsx'
import QandA from './questions/QandA.jsx';
import RatingsReviews from './reviews/RatingsReviews.jsx';
import data from './overview/data.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      currentProductIndex: 0,
      productList: [{id:24156, category: '', slogan: '', name: ''}]};
  }

  componentDidMount() {
    console.log("Hello bud what are we doing?");
    axios.get(`http://localhost:3001/products`)
    .then( (response) => {
      console.log("setting the app state :) ", response.data)
      this.setState({productList: response.data});
    })
    .catch( (err) => {
      console.log(err);
    });
  }

  handleProductSubmit = (e) => {
    e.preventDefault();
    console.log('is this the right thing: ', this.state.term);
    this.setState({currentProductIndex: this.state.term, term: ''})
  }

  inputHandler = (e) => {
    e.preventDefault();
    console.log('is this the right thing: ', e.target.input);
    this.setState({term: e.target.value})
  }

  render() {
    return (
      <div>
        <h1 >Hello User! </h1>
        <form onSubmit={this.handleProductSubmit}>
          What index do you want to see?
          <input type="text" name="productIndex" value={this.state.term} onChange={this.inputHandler}/>
          <button type="submit"  value="Get Product"/>
        </form>
        <Overview product={this.state.productList[this.state.currentProductIndex]}/>
        <QandA/>
        <RatingsReviews />
      </div>
    );
  };
}

export default App;