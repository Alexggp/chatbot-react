import axios from 'axios';

import processResponse from './processResponse';

export class EvaMsg{
  constructor(text, code, context){
      this.text= text;
      this.code= code;
      this.context=context;
  }
}

class EvaConexion {

  context = {};

  evaConfig = {
    url: 'https://api-eu-showrooms.eva.bot/conversations/',
    headers: {
      "API-KEY": '9fb7809f-4859-4dea-bf0d-aff75e7933e5',
      "PROJECT":  'Orange BPO',
      "CHANNEL":  'Webchat',
      "USER-REF":  '111111',
      "OS": 'Windows',
      "LOCALE": 'es-ES',
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }

  sendInitialMessage = () =>{
    return new Promise((resolve, reject) => {
      this.sendMessage('%EVA_WELCOME_MSG')
      .then(response => resolve(response))
      .catch(err => reject(err));
    })
  }
    
  sendMessage = (text)=>{
    
    return new Promise ((resolve, reject) =>{
      const initialMsg = new EvaMsg('', text, this.context);
  
      axios.post(this.evaConfig.url, initialMsg, {headers: this.evaConfig.headers})
        .then(response => {
          const {messages, newContext} = processResponse(response);
          this.context = newContext;
          return resolve(messages);         
        })
        .catch(err => reject(err));
    });
  }

}


export default EvaConexion;


