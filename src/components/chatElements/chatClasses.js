class Msg {
  constructor(type, fromUser, payload){
    this.type= type;
    this.fromUser= fromUser;
    this.payload= payload;
  }
}

export class TextMsg extends Msg{
  constructor({fromUser, text}){
    super();
    this.type= 'text';
    this.fromUser= fromUser;
    this.payload = {
      text: text
    }
  }
}

