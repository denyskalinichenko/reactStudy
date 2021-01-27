import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem.jsx';
import Message from './Messages/Message.jsx';

const Dialogs = (props) => {

    // ----------------DIALOGS-----------------
    let dialogs = [
        { id: 1, name: 'Ola' },
        { id: 2, name: 'Denis' },
        { id: 3, name: 'Junna' },
        { id: 4, name: 'Misha' },
        { id: 5, name: 'Lera' },
        { id: 6, name: 'Eba' },
        { id: 7, name: 'Alina' }
    ]

    let dialogsElements = dialogs.map(
        d => <DialogItem name={d.name} id={d.id} />
    );

    // ----------------MESSAGES------------------
    let messages = [
        { id: 1, message: 'HEllo' },
        { id: 2, message: 'hi' },
        { id: 3, message: 'How are you?&' },
        { id: 4, message: 'What"s up man?' }
    ]
    let messagesElements = messages.map(
        m => <Message message={m.message} />
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