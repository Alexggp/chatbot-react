import React, { useRef } from 'react';

import classes from './ChatFooter.module.css';
import sendImage from '../../../assets/images/sendIcon.svg';


const ChatFooter = (props) => {

  const textInput = useRef(null);

  const clickHandler = () => {
    const inputText =  textInput.current.value;
    textInput.current.value = '';
    props.send(inputText);
  }

  return (
    <div className={classes.ChatFooter}>
      <input 
        type="text"
        placeholder="Escribe algo aquí..."
        ref={textInput}/>
      <div className={classes.SendButton} onClick={clickHandler}>
        <img src={sendImage} alt='Close'/>
      </div>
    </div>
  )
}



export default ChatFooter;