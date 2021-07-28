import React from 'react';

class AddToCart extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        4 nicely formatted buttons here
        <div>
          <span>SELECT SIZE DROPDOWN</span>
          <span>SELECT QUANTITY DROPDOWN</span>
        </div>
        <div>
          <span>ADD TO CART BUTTON</span>
          <span>FAVORITE THIS ITEM BUTTOM</span>
        </div>
      </div>
    );
  }
}

export default AddToCart;