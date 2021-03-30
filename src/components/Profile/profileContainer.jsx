import React from 'react';
import Profile from './profile';
import { connect } from 'react-redux';
import { setUserProfile, renderProfile, getStatus, updateStatus } from '../../redux/profile-reducer'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';







class ProfileContainer extends React.Component {

  

  
  componentDidMount() {

    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.userId;
    }
    this.props.renderProfile(userId);
    this.props.getStatus(userId);
    

  }
  // componentDidUpdate(){
  //   debugger;
  //   this.setProfile()
    
  // }

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
  status: state.profilePage.status,
  userId: state.auth.userId
})

export default compose(withRouter, connect(mapStateToProps, { setUserProfile, renderProfile, getStatus, updateStatus }), withAuthRedirect)(ProfileContainer);