import React from 'react';

class Gallery extends React.Component {
  constructor(props){
    super(props);
    this.state = {current: null};
  }

  render() {
    return (
      <div>Gallery in the House!</div>
    );
  }
}

export default Gallery;