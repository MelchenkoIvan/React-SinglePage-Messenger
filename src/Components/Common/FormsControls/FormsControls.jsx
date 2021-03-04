import React from 'react'
import styles from './FormsControls.module.css'



// Деструктуризация достаём те объекты которые нужно с помощью рест оператора ({}), 
// а спомощью spread оператора ... оставляем остальные в пропсах
const FormControl = ({input, meta,children}) => {

    const hasError = meta.touched && meta.error;
    
    return(
        <div className={styles.formControl +" "+ (hasError ? styles.error : "")}>
            <div>{children}</div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const Textarea = (props) => {
    const {input, meta,child, ...restProps} =props;
    return<FormControl {...props}><textarea {...input} {...restProps}></textarea></FormControl>    
}
export const Input = (props) => {
    const {input, meta,child, ...restProps} =props;
    return<FormControl {...props}><input {...input} {...restProps}></input></FormControl>       
}



