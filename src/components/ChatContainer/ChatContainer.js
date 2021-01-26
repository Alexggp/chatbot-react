import React, { Component } from 'react';

import classes from './ChatContainer.module.css';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatBody from './ChatBody/ChatBody';
import ChatFooter from './ChatFooter/ChatFooter';

class ChatContainer extends Component {

  state= {
    messages:[
      {
        fromUser: false,
        type: 'text',
        payload: {
          text: "Hola soy un bot" 
        } 
      },
      {
        fromUser: true,
        type: 'text',
        payload: {
          text: "Hola me llamo alex" 
        } 
      }
    ]
  }

  addUserMessage = (text) => {
    const newMsg = {
      fromUser: true,
      type: 'text',
      payload: {
        text: text
      }
    };
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