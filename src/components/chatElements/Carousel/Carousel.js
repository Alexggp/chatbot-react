import React, { Component } from 'react';

import classes from './Carousel.module.css';
import arrowIcon from '../../../assets/images/arrow-icon.png';
import Card from '../Card/Card';

class Carousel extends Component {

  state={
    showLeftArroy: true,
    showRightArrow: true
  }

  render(){

    const messageClasses = [
      classes[`${this.props.origin}-message`],
      classes.Carousel
    ];

    const items = this.props.payload.items.map((item, index)=>(

      <Card 
        key={index} 
        payload={item.payload}
        selected = {this.props.selected} />
 
      
    ));

    const leftArrow = (
      <div className={[classes.Arrow, classes.ArrowLeft].join(' ')}> 
        <img src={arrowIcon} alt=''/>
      </div>
    )

    const rightArrow = (
      <div className={[classes.Arrow, classes.ArrowRight].join(' ')}> 
        <img src={arrowIcon} alt=''/>
      </div>
    )

    return (
      <div className={messageClasses.join(' ')}>
        {this.state.showLeftArroy ? leftArrow : ''}
        <div className={classes.ItemsContainer}>
          {items}
        </div>
        {this.state.showRightArrow ? rightArrow : ''}
      </div>
    )
  }
    
}


export default Carousel;