import React, {useState, useEffect} from 'react';

var StyleSelector =(props) => {
  const [currentStyle, setStyle] = useState(props.info[0]);
  const solid = 0;
  useEffect(()=>{

  },[solid])
  var grid = () => {
    return (
      props.info[1].map( () => {
        return (<div>Hello</div>);
      })
    )
  }
  return (
    <div>
      <div><b>STYLE</b> > {currentStyle.name}</div>
      <div>a bunch of nicely formated buttons layed out in a grid that we can press to update style</div>
      {grid()}
      <div>.</div>
    </div>
  );
}

export default StyleSelector;