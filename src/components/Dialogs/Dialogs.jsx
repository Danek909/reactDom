import React from 'react';
import { Form, Navigate } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { maxLenghtCreator, required } from '../../utils/validators';
import { TexArea } from './common/FormsControl';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';



const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem key={'dialogItem' + d.id} name={d.name} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message key={'mesage' + m.id} message={m.message} />);
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Navigate to="/login" />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <addNewMessage  onSubmit={addNewMessage}/>
            </div>
        </div>
    )
};


export default Dialogs;