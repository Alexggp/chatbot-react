import React from 'react';

import classes from './ChatFooter.module.css';
import sendImage from '../../../assets/images/sendIcon.svg';


const ChatFooter = (props) => {

  return (
    <div className={classes.ChatFooter}>
      <input type="text" placeholder="Escribe algo aquí..."/>
      <div className={classes.SendButton}>
        <img src={sendImage} alt='Close'/>
      </div>
    </div>
  )
}



export default ChatFooter;