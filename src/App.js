import React from 'react';
import './App.css';
import './components/Header/header.css';
import './components/Navigation/navigation.css';
import './components/Profile/profile.css';
import Navigation from './components/Navigation/navigation';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import DialogsContainer from './components/DIalogs/dialogs-container';
import UsersContainer from './components/Users/users-container';
import ProfileContainer from './components/Profile/profileContainer';
import HeaderContainer from './components/Header/header-container';
import Login from './components/login/login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setAuthMe } from './redux/auth-reducer';
import { initiliazeApp } from './redux/app-reducer';
import Preloader from './components/common/preloader/preloader';







class App extends React.Component {

  componentDidMount() {
   this.props.initiliazeApp();
  }



  render() {
    
    if(!this.props.initialized){
      return <Preloader/>
    }
    
      return (
        <BrowserRouter>
          <div className="container">
            <HeaderContainer />
  
            <div className="intro">
              <Navigation />
              <div className='wrapper'>
  
                <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                <Route path='/dialogs' render={() => <DialogsContainer />} />
                <Route path='/users' render={() => <UsersContainer />} />
                <Route path='/login' render={() => <Login />} />
  
              </div>
            </div>
          </div>
        </BrowserRouter>
      )


    
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})


export default connect(mapStateToProps, {initiliazeApp})(App)
