import React from 'react';
import { Redirect } from 'react-router-dom';
import { AddMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogs-reducer';
import './dialogs.css';
import Dialogsname from './dialogsItem/dialogsName';
import Message from './Message/messages';    




const Dialogs = (props) => {    

    

    let dialogsElement = props.dialogsPage.dialogsData.map((dialog) => {
        return <Dialogsname name = {dialog.name} id = {dialog.id} />
    })

    

    let messageText = props.dialogsPage.messageData.map((message) => {
        return <Message text = {message.message}/>
    })

    

    let onMessageChange = (e) => {
        let message = e.target.value;
        props.onMessageChange(message);

    }
    
    let addMessage = () => {
        props.addMessage();
    }

    if (!props.auth) return <Redirect to = {'/login'}/>


    return (
        <div className = "dialogs">
            <div className="dialogs-item">
                {dialogsElement}
                <input  value = {props.dialogsPage.newMessageText} onChange = {onMessageChange}></input>
                <button className = 'button_1' onClick = {addMessage}>Написать</button>
            </div>

            <div className="messages">
                <div className="message_name">
                    {messageText}
                    
                </div>

            </div>
        </div>
        
    )
}
export default Dialogs;