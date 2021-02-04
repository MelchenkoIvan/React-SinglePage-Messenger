import React from 'react'
import S from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={S.dialogs}>
            <div className={S.dialogs_items}>
                <div className={S.dialog}>
                    Ivan
                </div>
            </div>
            <div className={S.messages}>
                <div className={S.message}>How are You?</div>
            </div>
        </div>  
        )
}
export default Dialogs;