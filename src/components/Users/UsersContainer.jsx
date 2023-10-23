import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers } from '../../redux/users-reducer';
import { WithAuthredirect } from '../Hoc/WithAuthRedirect';
import Users from './Users';


class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }


    onPageChanged = (pageNumder) => {
        this.props.getUsers(pageNumder, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.props.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
                setCurrentPage={this.props.setCurrentPage}
            />
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
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default compose(
    WithAuthredirect,
    (connect(mapStateToProps, {follow, unfollow, setCurrentPage,toggleFollowingProgress, getUsers,}))
)(UsersContainer)