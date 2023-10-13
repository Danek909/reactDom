import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";


let mapStateToPropsForRedirect = (state) => ({
    profile: state.profilePage.profile,
});

export const WithAuthredirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to="/login" />
            return <Component {...this.props} />
        }
    }
    
   let ConectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
    return ConectedAuthRedirectComponent;
}