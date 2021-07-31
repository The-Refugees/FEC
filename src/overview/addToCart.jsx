import React, {useState} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button'

var AddToCart = (props) => {
  var skuList = Object.keys(props.info.skus);
  var sizeArray;
  var quantityArray;
  const [currentSize, setCurrentSize] = useState("SELECT SIZE");
  const [quantityTitle, setQuantityTitle] = useState("-");
  const [activity, setActivity] = useState('active');

  var generateSizeList = () => {
    //console.log('this is the sku list: ', skuList);
    sizeArray = ["SELECT SIZE"];
    quantityArray = [];
    for ( var i of skuList) {
      if (props.info.skus[i].quantity > 0) {
        sizeArray.push(props.info.skus[i].size);
        quantityArray.push(Math.min(props.info.skus[i].quantity,15));
      };
    }
    if (sizeArray.length === 1){
      //setActivity('disabled');
    }
    //console.log('this is the size Array: ', sizeArray);
    return sizeArray;
  }
  var generateQuantityList = (s) => {
    if (s === "SELECT SIZE"){
      return [];
    } else {
       return new Array(quantityArray[sizeArray.indexOf(s)-1]).fill(0);
    }
    //this.props.item.skus.somethingElse
    //return quantityArray;
  }
  var sizeClickHandler = (e) =>{
    e.preventDefault();
    //console.log('size Selected please update the state');
    if (e.target.name === "SELECT SIZE"){
      setCurrentSize(e.target.name);
      setQuantityTitle('-');
    } else {
      setCurrentSize(e.target.name);
      setQuantityTitle('1');
    }
  }

  var active = () => {
   if (true) {
    return (
      <div>
        <DropdownButton as={ButtonGroup} title="Out Of Stock" disabled>
        </DropdownButton>
        <DropdownButton as={ButtonGroup} title={quantityTitle} disabled>
        </DropdownButton>
      </div>
    );
  } else {
    return (
      <div>
        <DropdownButton as={ButtonGroup} title={currentSize}>
        {generateSizeList().map( (size, i) => (
          <Dropdown.Item onClick={sizeClickHandler} key={i} name={size} as="button">{size}</Dropdown.Item>))}
        </DropdownButton>
        <DropdownButton as={ButtonGroup} title={quantityTitle}>
        <Dropdown.Item as="button" active>1</Dropdown.Item>
        {generateQuantityList(currentSize).map( (quantity,i) => (
          <Dropdown.Item >{i+1}</Dropdown.Item>))}
        </DropdownButton>
      </div>
      );
    }
  }

  return (
    <div>
      {active()}
      <div>
        <ButtonGroup>
          <Button title= "addToCart"> ADD TO CART</Button>
          <Button title="favorite"> STAR</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default AddToCart;

