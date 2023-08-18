import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';



const Dialogs = (props) => {

    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem key={'dialogItem' + d.id} name={d.name} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message key={'mesage' + m.id} message={m.message} />);
    let newMessageBody = state.messagebody;

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div className={s.divDialogsTextarea}><textarea value={newMessageBody}
                        placeholder='Enter your message'
                        onChange={onNewMessageChange}>
                        </textarea>
                    </div>

                    <div><button className={s.dialogsButton} onClick={onSendMessageClick} >send</button></div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;