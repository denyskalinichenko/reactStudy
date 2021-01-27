import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem.jsx';
import Message from './Messages/Message.jsx';

const Dialogs = (props) => {

    // ----------------DIALOGS-----------------
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />
    );

    // ----------------MESSAGES------------------
    let messagesElements = props.messages.map(m => <Message message={m.message} />
    );

    return (
        <div className={s.dialogsMessages}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messageItems}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;