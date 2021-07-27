import React from 'react';
import Overview from './overview/overview.jsx';
import QandA from './questions/QandA.jsx';
import RatingsReviews from './reviews/RatingsReviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Overview />
        <QandA/>
        <RatingsReviews />
      </div>
      // Questions and Answers
    );
  };
}

export default App;