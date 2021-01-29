import React, { useEffect, useRef } from 'react';

import classes from './ChatBody.module.css';

import TextMessage from '../../chatElements/TextMessage/TextMessage';
import QuickReply from '../../chatElements/QuickReply/QuickReply';

const ChatBody = (props) => {
  const chatBodyDiv = useRef(null);
  const selectionHandler = (text) => {
    props.sendMsg(text);
  }

  useEffect(() => {

    chatBodyDiv.current.scrollTop = chatBodyDiv.current.scrollHeight - chatBodyDiv.current.clientHeight;

  });


  const msgElements = props.messages.map((msg, index)=>{

    const origin = msg.fromUser ? 'User' : 'Bot';
    switch (msg.type){
      case 'text':
        return <TextMessage key={index} origin={origin} payload={msg.payload} />
      case 'quick_reply':
        return <QuickReply key={index} origin={origin} payload={msg.payload} selected={selectionHandler}/>
      default:
        return <TextMessage key={index} origin='Bot' payload={{text:'Ha ocurrido un error'}} />;
    }

  });

  return (
    <div className={classes.ChatBody} ref={chatBodyDiv}>
      <div className={classes.MessagesContainer}>
        {msgElements}
      </div>
    </div>
  )
}



export default ChatBody;