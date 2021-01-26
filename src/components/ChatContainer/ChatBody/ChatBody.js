import React from 'react';

import classes from './ChatBody.module.css';

import TextMessage from '../../chatElements/TextMessage/TextMessage';

const ChatBody = (props) => {

  const msgElements = props.messages.map((msg, index)=>{

    const origin = msg.fromUser ? 'User' : 'Bot';
    switch (msg.type){
      case 'text':
        return <TextMessage key={index} origin={origin} payload={msg.payload} />
      default:
        return <TextMessage key={index} origin='Bot' payload={{text:'Ha ocurrido un error'}} />;
    }

  });

  return (
    <div className={classes.ChatBody}>
      <div className={classes.MessagesContainer}>
        {msgElements}
      </div>
    </div>
  )
}



export default ChatBody;