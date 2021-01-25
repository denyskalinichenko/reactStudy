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
    
    let dialogsData = [
        {id:1, name:'Ola'},
        {id:2, name:'Denis'},
        {id:3, name:'Junna'},
        {id:4, name:'Misha'},
        {id:5, name:'Lera'},
        {id:6, name:'Eba'},
        {id:7, name:'Alina'}
    ]

    let messagesData = [
        {id:1, message:'HEllo'},
        {id:2, message:'hi'},
        {id:3, message:'How are you?'},
        {id:4, message:'What"s up man?'}
    ]

    return (
        <div className={s.dialogsMessages}>
            <div className={s.dialogItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name="Junna" id="3" />
                <DialogItem name="Misha" id="4" />
                <DialogItem name="Lera"  id="5" />
                <DialogItem name="Eba"   id="6" />
                <DialogItem name="Alina" id="7" />
            </div>
            <div className={s.messageItems}>
                <MessageItem message = {messagesData[0].message}/>
                <MessageItem message = {messagesData[1].message}/>
                <MessageItem message = {messagesData[2].message}/>
                <MessageItem message = {messagesData[3].message}/>
            </div>
        </div>

    )
}

export default Dialogs;