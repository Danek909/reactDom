import React from 'react';
import Profile from './Profile'
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer';
import { useLocation, useNavigate, useParams, } from "react-router-dom";
import { compose } from 'redux';
import { updeteStatus } from '../../redux/profile-reducer';
import { getStatus } from '../../redux/profile-reducer';

export function withRouter(Children) {
  return (props) => {

    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();


    const match = { params: params };
    return <Children {...props} match={match} router={{location, navigate, params }}/>
  }
}


class ProfileContaier extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizenUserId;
      if(!userId) {
        //this.props.history.push("/login");
      }
    }
  
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <Profile {...this.props} 
      profile={this.props.profile}
      status={this.props.status} 
      updeteStatus={this.props.updeteStatus} />
    )
  }
}


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizenUserId: state.auth.userId,
  isAuth: state.auth.isAuth,

});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus ,updeteStatus }),
  withRouter,
)(ProfileContaier);


