import React from 'react'
import preloader from '../../../Assets/Images/Spinner.svg'
import styles from '../../Users/Users.module.css'

let Preloader = (props) => {
    return (
        <div >
            <img className={styles.preloader} src={preloader} />
        </div>
    )

}
export default Preloader;