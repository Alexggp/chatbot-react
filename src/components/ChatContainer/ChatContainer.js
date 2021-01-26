import React, {Component} from 'react';

import classes from './ChatContainer.module.css';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatBody from './ChatBody/ChatBody';
import ChatFooter from './ChatFooter/ChatFooter';
class ChatContainer extends Component {

  state= {
    
  }

  render(){

    const chatContainer =(

        <div className={classes.ChatContainer}>
         <ChatHeader click={this.props.closeChat}/>
         <ChatBody />
         <ChatFooter />
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