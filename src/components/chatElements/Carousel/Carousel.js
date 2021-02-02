import React, { Component, createRef } from 'react';

import classes from './Carousel.module.css';
import arrowIcon from '../../../assets/images/arrow-icon.png';
import Card from '../Card/Card';

class Carousel extends Component {

  constructor(props) {
    super(props);
    this.itemsContainerRef = createRef();
  }
  
  state={
    showLeftArroy: false,
    showRightArrow: true
  }

  mouseDown= null;

  
  mouseUpHandler = () =>{
    clearInterval(this.mouseDown);
  }

  scrollLeftHandler = () =>{
    this.mouseDown = setInterval(()=>{
        this.itemsContainerRef.current.scrollLeft = this.itemsContainerRef.current.scrollLeft - 5;
        if(this.itemsContainerRef.current.scrollLeft <=0 ) {
          this.setState({showLeftArroy: false});
          this.mouseUpHandler(); // mouseUp cause button desapears and mouseUp event deseapears as well
        }
        if(this.itemsContainerRef.current.scrollLeft < this.itemsContainerRef.current.scrollWidth) this.setState({showRightArrow: true})
    },5);
  }

  scrollRightHandler = () =>{
    this.mouseDown = setInterval(()=>{
      console.log(this.itemsContainerRef.current.scrollLeft,this.itemsContainerRef.current.scrollWidth)
      this.itemsContainerRef.current.scrollLeft = this.itemsContainerRef.current.scrollLeft + 5;
      if(this.itemsContainerRef.current.scrollLeft > 0) this.setState({showLeftArroy: true});
      if(this.itemsContainerRef.current.scrollLeft >= this.itemsContainerRef.current.scrollWidth-this.itemsContainerRef.current.clientWidth) {
        this.setState({showRightArrow: false})
        this.mouseUpHandler(); // mouseUp cause button desapears and mouseUp event deseapears as well
      }
    },5);
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
      <div 
        className={[classes.Arrow, classes.ArrowLeft].join(' ')}
        onMouseDown={this.scrollLeftHandler}
        onMouseUp={this.mouseUpHandler}> 
        <img src={arrowIcon} alt=''/>
      </div>
    )

    const rightArrow = (
      <div 
        className={[classes.Arrow, classes.ArrowRight].join(' ')}
        onMouseDown={this.scrollRightHandler}
        onMouseUp={this.mouseUpHandler}> 
        <img src={arrowIcon} alt=''/>
      </div>
    )

    return (
      <div className={messageClasses.join(' ')}>
        {this.state.showLeftArroy ? leftArrow : ''}
        <div className={classes.ItemsContainer} ref={this.itemsContainerRef} >
          {items}
        </div>
        {this.state.showRightArrow ? rightArrow : ''}
      </div>
    )
  }
    
}


export default Carousel;