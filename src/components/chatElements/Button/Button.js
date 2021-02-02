import React, { Component } from 'react';

import classes from './Button.module.css';


class Button extends Component{
  state={
    clicked: false
  }

  clickHandler = () => {
    if(!this.props.disabled){
      this.setState(prevState=>({
        clicked: !prevState.clicked
      }));
      if(this.value.action){
        window.open(this.value.action, '_blank');
      }
      this.props.click(this.props.value);
      
    }
  }

  render(){

    const buttonClasses = [
      // `button-${this.props.type}`,
      classes.Button
    ];

    if (this.state.clicked){
      buttonClasses.push(classes.ButtonClicked)
    }
    return (
      <div 
        className={buttonClasses.join(' ')} 
        onClick={this.clickHandler}>
        <span>{this.props.title}</span> 
      </div>
    )
  }
  
}



export default Button;