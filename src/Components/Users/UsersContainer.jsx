
import { connect } from 'react-redux';
import { followAC, SetUsersAC, unfollowAC } from '../../redux/users-reduser';
import Users from './Users';

let mapStateToProps = (state) =>{
    
    return{
        users: state.usersPage.usersData
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        follow:(userId) => {
            dispatch(followAC(userId))
        },
        unfollow:(userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers:(users)=>{
            dispatch(SetUsersAC(users))
        }

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);