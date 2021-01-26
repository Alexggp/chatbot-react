import React, {Component} from 'react';

import classes from './ChatContainer.module.css';

class ChatContainer extends Component {

  state= {
    
  }

  render(){

    const chatContainer =(

        <div className={classes.ChatContainer}>
         
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