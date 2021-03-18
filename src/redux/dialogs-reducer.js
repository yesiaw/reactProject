const ADD_MESSAGE = 'add-message';
const NEW_MESSAGE_TEXT = 'new-message-text';

let initialState = {
    dialogsData: [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Natalya' },
        { id: 3, name: 'Viktor' },
        { id: 4, name: 'Artem' },
    ],
    messageData: [
        { id: 1, message: 'Hey Alex' },
        { id: 2, message: 'Hey Natalya' },
        { id: 3, message: 'Hey Viktor' },
        { id: 4, message: 'Hey Artem' },
    ],
    newMessageText: 'example'
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                newMessageText: '',
                messageData: [...state.messageData, { id: 5, message: state.newMessageText }]
            }
        case NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessage,
            }
        default: return state;
    }

}

export const onMessageChangeActionCreator = (message) => ({ type: 'new-message-text', newMessage: message })
export const AddMessageActionCreator = () => ({ type: 'add-message' })


export default dialogsReducer;

