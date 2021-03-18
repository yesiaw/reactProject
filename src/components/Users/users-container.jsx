
import React from 'react';
import { connect } from 'react-redux';
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, setIsFetching, toogleFollow, getUsersThunkCreator, UnFollowThunkCreator, FollowThunkCreator } from '../../redux/users-reducer';
import Preloader from '../common/preloader/preloader';
import Users from './Users';
import './users.css'



class UsersApiContainer extends React.Component {



    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
        
    }
    


    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber);
    }


    render() {
        return <>
            {this.props.isFetching === true ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                FollowingInProgress = {this.props.FollowingInProgress}
                UnFollowThunkCreator = {this.props.UnFollowThunkCreator}
                FollowThunkCreator = {this.props.FollowThunkCreator} />
        </>

    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        FollowingInProgress: state.usersPage.FollowingInProgress
    }

}


const UsersContainer = connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching, toogleFollow, getUsersThunkCreator, UnFollowThunkCreator, FollowThunkCreator
})(UsersApiContainer);
export default UsersContainer;