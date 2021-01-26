import React from 'react';

import widgetImage from '../../assets/images/widgetImg.svg';
import classes from './WidgetButton.module.css';

const widgetButton = (props) => {
  let widget = '';

  if (props.show){
    widget = (
      <div className={classes.WidgetButton} onClick={props.click}>
        <img src={widgetImage} alt='Open ChatBot'/>
      </div>
    )
  }

  return (
    <React.Fragment>
      {widget}
    </React.Fragment>
    )
  }



export default widgetButton;