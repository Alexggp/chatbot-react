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
      this.props.click(this.props.value, this.props.action);
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
          {this.props.title}
      </div>
    )
  }
  
}



export default Button;