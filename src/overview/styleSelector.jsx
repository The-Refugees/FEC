import React from 'react';

class StyleSelector extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>STYLE > SELECTED STYLE</div>
        <div>a bunch of nicely formated buttons layed out in a grid that we can press to update style</div>
        <div>.</div>
      </div>
    );
  }
}

export default StyleSelector;