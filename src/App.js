import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContaier, { withRouter } from './components/Profile/ProfileContainer';
import HeaderComntainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { Component } from 'react';
import { connect } from 'react-redux';
import { initializeApp } from "./redux/app-reducer";
import { compose } from 'redux';
import { Preloader } from './components/Dialogs/common/preloader'


class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if(!this.props.initionlizet) {
      return <Preloader />
    }

    return (
      <div className='app-wrapper'>
        <HeaderComntainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' element={<DialogsContainer />} />
            <Route path='/profile/:userId?' element={<ProfileContaier />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  initionlizet: state.app.initionlizet
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);
