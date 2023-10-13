import React from 'react';
import { sendMessageCreator } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { compose } from 'redux';
import { WithAuthredirect } from '../Hoc/WithAuthRedirect';

let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        },
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthredirect
)(Dialogs);