import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators";
import { Input } from "../Dialogs/common/FormsControl";
import { connect } from "react-redux";
import style from '../../components/Dialogs/common/FormsControl.module.css'
import { login } from "../../redux/auth-reducer";
import { redirect } from "react-router-dom";

const Loginform = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
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

const LoginReduxForm = reduxForm ({form: 'login'})(Loginform)

const Login = (props) => {

    console.log(props, "props")
    const onSubmit = (formData) => { 
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return redirect ("/profile");
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
    
})
export default connect(mapStateToProps, {login}) (Login);
