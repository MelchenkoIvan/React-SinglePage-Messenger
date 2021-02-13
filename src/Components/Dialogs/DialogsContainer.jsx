import React from 'react'
import S from './Dialogs.module.css'

import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import StoreContext from '../../StoreContext'



const DialogsContainer = (props) => {




    return (<StoreContext.Consumer>
        { (store) => {
            let state = store.getState().dialogsPage;


            let onSendMessageClick = () => {

                store.dispatch(sendMessageCreator());
            }

            let updateNewMessageBody = (body) => {

                store.dispatch(updateNewMessageBodyCreator(body));
            }
            return (
                <Dialogs
                    updateNewMessageBody={updateNewMessageBody}
                    sendMessage={onSendMessageClick}
                    dialogsPage={state}
                />
            )
        }
        }
    </StoreContext.Consumer>
    )
}
export default DialogsContainer;