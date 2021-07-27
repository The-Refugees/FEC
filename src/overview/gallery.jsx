import React from 'react';

class Gallery extends React.Component {
  constructor(props){
    super(props);
    this.state = {photos: [{},{},{}]};
  }
  componentDidMount() {
    this.setState({photos: this.props.photos})
  }
  render() {
    return (
      <div>Gallery in the House!
        {Object.keys(this.state.photos[0])}
      </div>
    );
  }
}

export default Gallery;