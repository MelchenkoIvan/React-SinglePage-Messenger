import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import LoginForm from './LoginForm'
import { login, logout } from '../../redux/auth-reduser'
import { Redirect } from 'react-router-dom'

//форма редакс помогает в оброботке форм
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {

        props.login(formData.emeil, formData.password, formData.remember_me)
    }
    if(props.isAuth){
        return<Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    };
};
export default connect(mapStateToProps, { login })(Login);
