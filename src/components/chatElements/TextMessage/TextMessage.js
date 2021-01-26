import React from 'react';

import classes from './TextMessage.module.css';


const TextMessage = (props) => {

  const messageClasses = [
    classes[`${props.origin}-message`],
    classes.TextMessage
  ];

  return (
    <div className={messageClasses.join(' ')}>
      <span>{props.payload.text}</span>
    </div>
  )
}



export default TextMessage;