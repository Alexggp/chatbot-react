import React from 'react';

import classes from './Carousel.module.css';
import Card from '../Card/Card';

const Carousel = (props) => {

  
  const messageClasses = [
    classes[`${props.origin}-message`],
    classes.Carousel
  ];
  const items = props.payload.items.map((item, index)=>(
    <Card 
      key={index} 
      payload={item.payload}
      selected = {props.selected} />
  ));

  return (
    <div className={messageClasses.join(' ')}>
     {items}
    </div>
  )
    
}


export default Carousel;