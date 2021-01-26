import React from 'react';

import classes from './ChatHeader.module.css';
import logoImage from '../../../assets/images/widgetImg.svg';
import closeImage from '../../../assets/images/closeIcon.svg';


const ChatHeader = (props) => {

  return (
    <div className={classes.ChatHeader}>
      <div className= {classes.Logo}>
        <img src={logoImage} alt='ChatBot'/>
      </div>
      <div className= {classes.Title}>
        ChatBot
      </div>
      <div className= {classes.CloseButton} onClick={props.click}>
        <img src={closeImage} alt='Close'/>
      </div>
    </div>
  )
}



export default ChatHeader;