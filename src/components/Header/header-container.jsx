import React from 'react';
import Header from './header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setAuthMe, setUserData, logout } from '../../redux/auth-reducer';
import { usersAPI } from '../../api/api';


class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.setAuthMe();
  }
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