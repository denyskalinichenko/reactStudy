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
    return (
        <div className={s.dialogsMessages}>
            <div className={s.dialogItems}>
                <DialogItem name="Ola" id="1" />
                <DialogItem name="Denis" id="2" />
                <DialogItem name="Junna" id="3" />
                <DialogItem name="Misha" id="4" />
                <DialogItem name="Lera" id="5" />
                <DialogItem name="Eba" id="6" />
                <DialogItem name="Alina" id="7" />
            </div>
            <div className={s.messageItems}>
                <MessageItem message = "Hi"/>
                <MessageItem message = "Hello"/>
                <MessageItem message = "Cześć"/>
            </div>
        </div>

    )
}

export default Dialogs;