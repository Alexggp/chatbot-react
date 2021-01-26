import React, {Component} from 'react';

import WidgetButton from './components/WidgetButton/WidgetButton';
import ChatContainer from './components/ChatContainer/ChatContainer';
import './App.css';

class App extends Component {

  state= {
    chatIsOpen: true
  }

  toggleChatHandler = () =>{
    this.setState(prevState => (
      {chatIsOpen: !prevState.chatIsOpen}
      )
    )
  }

  render(){
    return (
        <div className="App">
          <WidgetButton 
            show={!this.state.chatIsOpen}
            click={this.toggleChatHandler} />
          <ChatContainer 
            show= {this.state.chatIsOpen}
            closeChat = {this.toggleChatHandler} />  
        </div>
      );
    }
  }


export default App;
