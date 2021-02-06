import React from 'react'
import S from './Dialogs.module.css'

import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


const Dialogs = (props) => {
    
    
    let dialogsElements = props.state.dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />)
    let messagesElements = props.state.messagesData.map((message) => <Message text={message.text} id={message.id} />)


 

    return (
        <div className={S.dialogs}>
            <div className={S.dialogs_items}>
                {dialogsElements}    
            </div>
            <div className={S.messages}>
                {messagesElements}
            </div>
        </div>  
        )
}
export default Dialogs;