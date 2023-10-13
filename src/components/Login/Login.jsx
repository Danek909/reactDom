import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators";
import { Input } from "../Dialogs/common/FormsControl";
import { connect } from "react-redux";
import { redirect } from "react-router-dom";
import style from '../../components/Dialogs/common/FormsControl.module.css'

const Loginform = (props) => {
    return (
        <form onSubmit={props.hendleSubmit}>
            <div>
                <Field validate={[required]} 
                placeholder={"email"} 
                name={"email"} 
                component={Input} />
            </div>
            <div>
                <Field validate={[required]} 
                placeholder={"Password"} 
                name={"password"} 
                type={"password"} component={Input}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/>rember me
            </div>
           { props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginreduxForm = reduxForm ({form: 'login'})(Loginform)

const Login = (props) => {
    const onSubmit = (formData) => { 
        props.Login(formData.email, formData.password, formData.rememberMe);
    }

    if(props.isAuth) {
        return <redirect to={"/profile"} />
    }

    return <div>
        <h1>Login</h1>
        <LoginreduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {Login})(Login);