import React from 'react'
import S from './Dialogs.module.css'

import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, requiredField } from '../../utils/Validators/Validators'
import { Textarea } from '../Common/FormsControls/FormsControls'




const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map((dialog) => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)
    let messagesElements = state.messagesData.map((message) => <Message text={message.text} key={message.id} id={message.id} />)
    
    
 
    let addNewMessage = (values) => {
       props.sendMessage(values.newMessagesBody);
    }

    return (
        <div className={S.dialogs}>
            <div className={S.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={S.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const maxLength50 = maxLengthCreator(50);
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={Textarea} validate={[requiredField,maxLength50]} name={"newMessagesBody"} placeholder="Enter your message"></Field></div>
            <div><button >Send</button></div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;