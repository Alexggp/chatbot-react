import React, { Component } from 'react';

import classes from './ChatContainer.module.css';
import { TextMsg } from '../chatElements/chatClasses';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatBody from './ChatBody/ChatBody';
import ChatFooter from './ChatFooter/ChatFooter';



class ChatContainer extends Component {

  state= {
    messages:[]
  }

  addUserMessage = (text) => {
    const newMsg = new TextMsg(true, text);
    this.addNewMessage(newMsg);
  }

  addNewMessage = (newMsg) => {
    const currentMsgs = [...this.state.messages];
    currentMsgs.push(newMsg);
    this.setState({
      messages: currentMsgs
    })
  }

  render(){

    const chatContainer = (

        <div className={classes.ChatContainer}>
         <ChatHeader close={this.props.closeChat}/>
         <ChatBody messages={this.state.messages}/>
         <ChatFooter send={this.addUserMessage}/>
        </div>
    
    )

    return (
      <React.Fragment>
        {this.props.show ? chatContainer : ''}
      </React.Fragment>
    );

  }
}


export default ChatContainer;