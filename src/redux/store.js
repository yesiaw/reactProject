import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

export let store = {
     _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hi, what are you do?'},
                {id: 2, message: 'Hi, im die'},
            ],
            newPostText: 'it-kamasutra'
        },
        messagesPage: {
            dialogsData: [
                {id: 1, name: 'Alex'},
                {id: 2, name: 'Natalya'},
                {id: 3, name: 'Viktor'},
                {id: 4, name: 'Artem'},
                ],
                messageData: [
                {id: 1, message: 'Hey Alex'},
                {id: 2, message: 'Hey Natalya'},
                {id: 3, message: 'Hey Viktor'},
                {id: 4, message: 'Hey Artem'},
                ],
                newMessageText: 'example'
        }

     },
     _callsub(){

    },
     
     getState(){
        return this._state;
     },
     subscribe(observer){
        this._callsub = observer;
    },

   dispatch(action){
       this._state.profilePage = (profileReducer(this._state.profilePage, action));
       this._state.messagesPage = (dialogsReducer(this._state.messagesPage, action));
       this._callsub(this._state)
   },
}






export default store;
