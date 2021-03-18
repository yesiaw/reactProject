import React from 'react';
import './App.css';
import './components/Header/header.css';
import './components/Navigation/navigation.css';
import './components/Profile/profile.css';
import Navigation from './components/Navigation/navigation';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/DIalogs/dialogs-container';
import UsersContainer from './components/Users/users-container';
import ProfileContainer from './components/Profile/profileContainer';
import HeaderContainer from './components/Header/header-container';
import Login from './components/login/login';







const App = (props) => {




  return (
    <BrowserRouter>
      <div className="container">
        <HeaderContainer/>

        <div className="intro">
          <Navigation />
          <div className='wrapper'>

            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/dialogs' render={() => <DialogsContainer store={props.store} />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/login' render={() => <Login />} />

          </div>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
