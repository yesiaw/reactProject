import React from 'react';
import { AddMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './dialogs';
import './dialogs.css';
import { connect } from "react-redux"
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';





let mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage,
    auth: state.auth.isAuth
})

let mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (message) => {
            dispatch(onMessageChangeActionCreator(message))
        },
        addMessage: () => {
            dispatch(AddMessageActionCreator());
        }

    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);