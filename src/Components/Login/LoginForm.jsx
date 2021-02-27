import React from 'react'
import { Field } from 'redux-form';
import { maxLengthCreator, requiredField } from '../../utils/Validators/Validators';
import { Input } from '../Common/FormsControls/FormsControls';


const LoginForm = (props) => {
    
    return(
        <form onSubmit={props.handleSubmit}>
                <div >
                    <Field placeholder={"Emeil"} name={"emeil"} validate= {[requiredField]}  component={Input}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} type={"password"} validate= {[requiredField]} component={Input}/>  
                </div>
                <div>
                    <Field type={"checkbox"} name={"remember_me"}  component={Input}/> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

export default LoginForm;