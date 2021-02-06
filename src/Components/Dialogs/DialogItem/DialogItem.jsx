import React from 'react'
import S from './../Dialogs.module.css'
import { NavLink } from "react-router-dom"

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={S.dialog}>
            <NavLink to={path} activeClassName={S.active}> {props.name}</NavLink>
        </div>
    )
}
export default DialogItem;