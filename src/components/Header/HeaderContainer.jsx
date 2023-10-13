import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Header from './Header'
import { getAuthUserData, logout } from "../../redux/auth-reducer";

class HeaderComntainer extends React.Component {
  render() {
    return <Header {...this.props} />
  }
};

const MapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(MapStateToProps, {logout })(HeaderComntainer);