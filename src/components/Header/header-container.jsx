import React from 'react';
import Header from './header';
import { connect } from 'react-redux';
import { setAuthMe, setUserData, logout } from '../../redux/auth-reducer';



class HeaderContainer extends React.Component {

  
  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  email: state.auth.email
})

export default connect(mapStateToProps, { setUserData, setAuthMe, exit: logout })(HeaderContainer);