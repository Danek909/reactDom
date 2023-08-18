const UPDETE_NEW_MESSAGE_BODY = 'UPDETE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is you it_kamasutra' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' },
    ],
    dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Danya' },
        { id: 3, name: 'Andrey' },
        { id: 4, name: 'Sveta' },
        { id: 5, name: 'Sasha' },
        { id: 6, name: 'Viktor' },
    ],

    newMessageBody: ""
}


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDETE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 6, message: body }]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDETE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;