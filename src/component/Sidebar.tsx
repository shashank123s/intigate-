import React from 'react'
import { Link } from 'react-router-dom'
import { selectAuth } from '../Redux/authSlice';
import { useSelector } from 'react-redux';

export default function Sidebar() {
    const authState = useSelector(selectAuth);

    return (
        <div>
            <div>
                <Link to="/dashboard">Dashboard</Link>
            </div>
           {authState.user?.role !== 1 && <div>
                <Link to="/user">User</Link>
            </div>}
        </div>
    )
}
