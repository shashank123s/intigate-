import { useDispatch } from 'react-redux';
import {logout, selectAuth } from '../Redux/authSlice';
import { useSelector } from 'react-redux';

export default function Dashboard() {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    }
    const authState = useSelector(selectAuth);
    console.log(authState)
    return (
        <div>
            <h1>Dashboard</h1>
            <h1>{`UserName - ${authState.user.username}`}</h1>
            <h1>{`Role - ${authState.user.role === 3 ? "Supar admin" : authState.user.role === 2 ? "Superviser" : authState.user.role === 1 ? "User" : null}`}</h1>
            <div>
                <button style={{ color: "white", backgroundColor: "green", padding: "10px" }} onClick={handleLogout}>Log Out</button>
            </div>
        </div>
    )
}
