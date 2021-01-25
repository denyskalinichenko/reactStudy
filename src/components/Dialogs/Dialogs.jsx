import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";


// -----------COMPONENTS---------------
const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const MessageItem = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

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
        m => <MessageItem message={m.message} />
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