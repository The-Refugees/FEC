import React from 'react';
import Overview from './overview/overview.jsx'
import data from './overview/data.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div> Hello World
        <Overview product={data.results} style={0}/>
      </div>
      // Questions and Answers
      // Ratings and Reviews
    );
  };
}

export default App;