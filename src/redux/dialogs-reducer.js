
const UpdateNewMessageBody = 'UPDATE-NEW-MESSAGE-BODY'
const Send_Message = 'SEND-MESSAGE'


const dialogsReducer = (state, action) => {

    switch (action.type) {

        case UpdateNewMessageBody:
            state.newMessageBody = action.body;
            return state;

        case Send_Message:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({ id: 6, text: body });
            return state;

        default:
            return state;
    }
}

export const sendMessageCreator = () => {

    return {
        type: Send_Message
    }
}

export const updateNewMessageBodyCreator = (message) => {

    return {
        type: UpdateNewMessageBody,
        body: message
    }
}

export default dialogsReducer;