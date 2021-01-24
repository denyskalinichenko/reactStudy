import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs= (props)=> {
    return(
        <div className={s.dialogsMessages}>
            <div className = {s.dialogItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Ola</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Denis</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Alina</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Eba</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Junna</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6">Misha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/7">Lera</NavLink>
                </div>
           </div>
            <div className={s.messageItems}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hello</div>
                <div className={s.message}>Cześć</div>
           </div>
        </div>

    )
}

export default Dialogs;