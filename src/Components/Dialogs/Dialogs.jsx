import React from 'react'
import S from './Dialogs.module.css'

import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'




const Dialogs = (props) => {
    let state = props.dialogsPage;
    
    let dialogsElements = state.dialogsData.map((dialog) => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)
    let messagesElements = state.messagesData.map((message) => <Message text={message.text} key={message.id} id={message.id} />)
    let newMessagesBody = state.newMessageBody;

    let onSendMessageClick = () => {
      
        props.sendMessage();
    }
 
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
        
    }
    
   

    return (
        <div className={S.dialogs}>
            <div className={S.dialogs_items}>
                {dialogsElements}    
            </div>
            <div className={S.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessagesBody} onChange={onNewMessageChange} placeholder="Enter your message"></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div> 
                </div>
            </div>
        </div>  
        )
}
export default Dialogs;