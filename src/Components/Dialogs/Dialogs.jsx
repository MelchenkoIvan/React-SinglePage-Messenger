import React from 'react'
import S from './Dialogs.module.css'
import { NavLink } from "react-router-dom"

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={S.dialog}>
            <NavLink to={path} activeClassName={S.active}> {props.name}</NavLink>
        </div>
        )
}
const Message = (props) => {
    return (
        <div className={S.message}>{props.text}</div>
        )
}



const Dialogs = () => {
    let dialogsData = [
        { id: 1, name: 'Ivan' },
        { id: 2, name: 'Nazar' },
        { id: 3, name: 'Maks' },
        { id: 4, name: 'Alona' },
        { id: 5, name: 'Vlad' },
    ]
    let messagesData = [
        { id: 1, text: 'hi' },
        { id: 2, text: 'BlaBlaBla' },
        { id: 3, text: 'I am a dracula' },
        { id: 4, text: 'Yo' },
        { id: 5, text: 'no , I am a drakula' },
    ]
    let itemsDia = [] 
    let messDia = []
    for (let dialog of dialogsData) {
        itemsDia.push(<DialogItem name={dialog.name} id={dialog.id} />)
    }
    for (let message of messagesData) {
        messDia.push(<Message text={message.text} />)
    }

    return (
        <div className={S.dialogs}>
            <div className={S.dialogs_items}>
                {itemsDia}    
            </div>
            <div className={S.messages}>
                {messDia}
            </div>
        </div>  
        )
}
export default Dialogs;