import React from 'react';
import '../common/preloader/FormsControl/formsControl.css'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../redux/auth-reducer';
import { HocControls } from '../common/preloader/FormsControl/formsControl';
import { maxSymbols, required } from '../validators/validators';

const LoginForm = (props) => {

    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={HocControls} name={'email'} placeholder={'Email'} validate={[required]} nameComponent={'input'} />
                </div>
                <div>
                    <Field component={HocControls} name={'password'} placeholder={'Password'} type={'password'} validate={[required]} nameComponent={'input'} />
                </div>
                <div>
                    <Field component={HocControls} name={'rememberMe'} type={'checkbox'} validate={[required]} nameComponent={'input'} /> remember me
                </div>
                {props.error && <div className = 'some-error'>
                    {props.error}
                </div>}
                

                <div>
                    <button>LOGIN</button>
                </div>
            </form>
        </>

    )

}


const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth === true) {
        return (
            <Redirect to={'/profile'} />
        )
    }
    return (
        <>

            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </>
    )
}

const mapStatetoProps = (state) => {
    return {
        isAuth: state.auth.isAuth

    }
}

export default connect(mapStatetoProps, { login })(Login);