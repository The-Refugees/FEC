import React, {useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'


var StyleSelector =(props) => {
  const [currentStyle, setStyle] = useState(props.info[0]);
  const solid = 0;

  useEffect(()=>{setStyle(props.info[0])}, [props.info[0]])

  var clickHandler = (e) => {
    e.preventDefault();
    //console.log('Click!');
    props.styleUpdater(e.target.name);
  }

  var selected = (stylename) =>{
    if (stylename === currentStyle) {
      return "true";
    } else {
      return "false";
    }
  }

  var grid = () => {
    var list = props.info[1]; //return to this line when i have a working git hub token
    var numRows = new Array(Math.ceil(list.length/4)).fill(0);
    return numRows.map( (row, i) => {
      return (
        <Row key={'row' + i} className="justify-content-start">
          {list.slice(i*4,i*4+4).map( (style, k)=>{
            return (
              <Col key={'col' + k} md={3} name={selected(style.name)}>
                <Image src={style.photos[0].thumbnail_url} thumbnail name={style.name} onClick={clickHandler} />
              </Col>
            );
          })}
        </Row>
      );
    });
  }
  return (
    <div>
      <div><b>STYLE</b> > {currentStyle}</div>
      {grid()}
    </div>
  );
}

export default StyleSelector;