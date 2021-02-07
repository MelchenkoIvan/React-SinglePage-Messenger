import React from 'react'
import N from './Friend.module.css';

const Friend = (props) => {

    return (
        <div className={N.friend}>
            <img src={props.img } />
            <div className={N.name}>
                {props.name}
            </div>
        </div>
        )
} 

export default Friend;