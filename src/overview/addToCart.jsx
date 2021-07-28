import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button'

class AddToCart extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  generateSizeList() {
    var sizeArray = [];
    //this.props.item.skus.somethingElse
    return sizeArray;
  }
  generateQuantityList() {
    var quantityArray = [];
    //this.props.item.skus.somethingElse
    return quantityArray;
  }
  render() {
    return (
      <div>
        4 nicely formatted buttons here
        <div>
          <DropdownButton as={ButtonGroup} title="SELECT SIZE">
            {this.generateSizeList().map( (size) => (
              <Dropdown.Item as="button">Another action</Dropdown.Item>))}
          </DropdownButton>
          <DropdownButton as={ButtonGroup} title="1">
            <Dropdown.Item as="button" active>1</Dropdown.Item>
            {this.generateQuantityList().map( (quantity) => (
              <Dropdown.Item >{quantity}</Dropdown.Item>))}
          </DropdownButton>
        </div>
        <div>
          <ButtonGroup>
            <Button title= "addToCart"> ADD TO CART</Button>
            <Button title="favorite"> STAR</Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

export default AddToCart;

