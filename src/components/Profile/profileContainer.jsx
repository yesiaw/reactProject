import React from 'react';
import Profile from './profile';
import { connect } from 'react-redux';
import { setUserProfile, renderProfile, getStatus, updateStatus } from '../../redux/profile-reducer'
import { Redirect, withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';







class ProfileContainer extends React.Component {

  setProfile(){
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 15456;
    }
    this.props.renderProfile(userId);
    this.props.getStatus(userId);
  }

  
  componentDidMount() {
    this.setProfile()
    

  }
  componentDidUpdate(){
    this.setProfile()
    
  }

  render() {
    return (
      <div className="content">

        <Profile  {...this.props} />


      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
})

export default compose(withRouter, connect(mapStateToProps, { setUserProfile, renderProfile, getStatus, updateStatus }), withAuthRedirect)(ProfileContainer);