
const UpdateNewMessageBody = 'UPDATE-NEW-MESSAGE-BODY'
const Send_Message = 'SEND-MESSAGE'

let initialState ={
    dialogsData: [
        { id: 1, name: 'Ivan' },
        { id: 2, name: 'Nazar' },
        { id: 3, name: 'Maks' },
        { id: 4, name: 'Alona' },
        { id: 5, name: 'Vlad' }
    ],
    messagesData: [
        { id: 1, text: 'hi' },
        { id: 2, text: 'BlaBlaBla' },
        { id: 3, text: 'I am a dracula' },
        { id: 4, text: 'Yo' },
        { id: 5, text: 'no , I am a drakula' }
    ],
    newMessageBody: "sd"

};

const dialogsReducer = (state = initialState , action) => {


    switch (action.type) {

        case UpdateNewMessageBody:{
            let stateCopy = {...state}
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        }
        case Send_Message:{
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody:'',
                messagesData:[...state.messagesData,{ id: 6, text: body }]
            }
            
            
        }
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