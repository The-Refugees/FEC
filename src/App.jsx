import React from 'react';
import Overview from './overview/overview.jsx';
import QandA from './questions/QandA.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div> Hello World
        <Overview />
        <QandA/>
      </div>
      // Questions and Answers
      // Ratings and Reviews
    );
  };
}

export default App;