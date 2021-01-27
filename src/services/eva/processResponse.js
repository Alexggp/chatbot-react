import { TextMsg } from '../../components/chatElements/chatClasses';

const processResponse = (rowData) => {
  const context = rowData.data.context;
  const dataAnswers = rowData.data.answers;

  const messages =  [];

  for (let i=0; i < dataAnswers.length; i++){
    const text = dataAnswers[i].content;
    const newMsg = new TextMsg({fromUser: false, text: text});
    messages.push(newMsg);
  }
  return {messages, context};

}

export default processResponse;