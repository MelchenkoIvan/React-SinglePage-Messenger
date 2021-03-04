import React from 'react'
import { Field } from 'redux-form';
import { maxLengthCreator, requiredField } from '../../utils/Validators/Validators';
import { Input } from '../Common/FormsControls/FormsControls';
import style from '../Common/FormsControls/FormsControls.module.css'


const LoginForm = ({handleSubmit,error}) => {
    
    return(
        <form onSubmit={handleSubmit}>
                <div >
                    <Field placeholder={"Emeil"} name={"emeil"} validate= {[requiredField]}  component={Input}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} type={"password"} validate= {[requiredField]} component={Input}/>  
                </div>
                <div>
                    <Field type={"checkbox"} name={"remember_me"}  component={Input}/> remember me
                </div>
                {error && <div className={style.formSummaryError}>
                    {error}
                </div>}
                <div >
                    <button>Login</button>
                </div>
            </form>
    )
}

export default LoginForm;