import React, {useState, useEffect} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button'

var AddToCart = (props) => {
  var skuList = Object.keys(props.info.skus);
  var sizeArray = ["SELECT SIZE"];
  var quantityArray;
  const [currentSize, setCurrentSize] = useState("SELECT SIZE");
  const [quantityTitle, setQuantityTitle] = useState("-");
  const [activity, setActivity] = useState(true);

  var generateSizeList = () => {
    console.log('this is the sku list: ', skuList);
    quantityArray = [];
    for ( var i of skuList) {
      console.log('this is the i: ', i);
      if (props.info.skus[i].quantity > 0) {
        console.log('am i making the list?');
        sizeArray.push(props.info.skus[i].size);
        quantityArray.push(Math.min(props.info.skus[i].quantity,15));
      };
    }
    if (sizeArray.length === 1){
      //setActivity('disabled');
    }
    console.log('this is the sizearray', sizeArray);
    return sizeArray;
  }
  var generateQuantityList = (s) => {
    if (s === "SELECT SIZE" || s === "Out Of Stock"){
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

  var addToCartHandler = (e) =>{
    e.preventDefault();
    if (currentSize === "SELECT SIZE") {
      document.getElementById("sizeDropDown").click();
    } else {
      console.log('Add these to the cart')
      console.log('Style is ', props.info.name);
      console.log('Size is ', currentSize);
      console.log('Quantity is ', quantityTitle);
    }
  }

  useEffect( () => {
    if (sizeArray.length === 1) {
      setActivity(false);
    } else {
      setActivity(true);
    }
  }, [sizeArray, skuList]) //i have an issue here

  var isActive = () => {
   if (!activity) {
    return (
      <div>
        <DropdownButton id="sizeDropDown" as={ButtonGroup} title="Out Of Stock" name={generateSizeList()} disabled>
        </DropdownButton>
        <DropdownButton as={ButtonGroup} title={quantityTitle}>
        </DropdownButton>
        <div>
          <ButtonGroup>
            <Button title= "addToCart" hidden> ADD TO CART</Button>
            <Button title="favorite"> STAR</Button>
          </ButtonGroup>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <DropdownButton id="sizeDropDown" as={ButtonGroup} title={currentSize}>
        {generateSizeList().map( (size, i) => (
          <Dropdown.Item onClick={sizeClickHandler} key={i} name={size} as="button">{size}</Dropdown.Item>))}
        </DropdownButton>
        <DropdownButton as={ButtonGroup} title={quantityTitle}>
        <Dropdown.Item as="button" active>1</Dropdown.Item>
        {generateQuantityList(currentSize).map( (quantity,i) => (
          <Dropdown.Item key={i}>{i+1}</Dropdown.Item>))}
        </DropdownButton>
        <div>
          <ButtonGroup>
            <Button title= "addToCart" onClick={addToCartHandler}> ADD TO CART</Button>
            <Button title="favorite"> STAR</Button>
          </ButtonGroup>
        </div>
      </div>
      );
    }
  }

  return (
    <div>
      {isActive()}
    </div>
  );
}

export default AddToCart;

