import React from 'react'
import S from './Dialogs.module.css'

import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'



const DialogsContainer = (props) => {
    
    let state = props.store.getState().dialogsPage;
   

    let onSendMessageClick = () => {
      
        props.store.dispatch(sendMessageCreator());
    }
 
    let updateNewMessageBody = (body) => {
       
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
 

    return (
        <Dialogs 
            updateNewMessageBody={updateNewMessageBody} 
            sendMessage={onSendMessageClick}
            dialogsPage ={state}
        /> 
        )
}
export default DialogsContainer;