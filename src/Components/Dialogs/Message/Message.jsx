import React from 'react'
import S from './../Dialogs.module.css'

const Message = (props) => {
    return (
        <div className={S.message}>{props.text}</div>
    )
}
export default Message;