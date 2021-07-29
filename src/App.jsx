import React from 'react';
import Overview from './overview/overview.jsx'
import QandA from './questions/QandA.jsx';
import RatingsReviews from './reviews/RatingsReviews.jsx';
import data from './overview/data.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Overview product={data[0]}/>
        <QandA/>
        <RatingsReviews />
      </div>
    );
  };
}

export default App;