class Msg {
  constructor(type, fromUser, payload){
    this.type= type;
    this.fromUser= fromUser || false;
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

export class Button {
  constructor({title, value, action, type}){
      this.title = title;
      this.value= value;
      this.action= action;
      this.type= type;
  }
}

export class QuickReply extends Msg{
  constructor({payload}){
    super();   
    this.type= 'quick_reply';
    this.payload= payload
  }
}

