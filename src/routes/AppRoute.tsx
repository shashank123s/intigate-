import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import App from '../Login'
import { useSelector } from 'react-redux';
import { selectAuth } from '../Redux/authSlice';
import Layout from '../component/Layout';
import UserList from '../pages/UserList';

export default function AppRoute() {

    const authState = useSelector(selectAuth);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<App />} />
                    {authState.isAuthenticated &&
                        <Route element={<Layout />} >
                            <Route path='/dashboard' element={<Dashboard />} />
                            <Route path='/user' element={<UserList />} />
                        </Route>
                    }
                    <Route path="*" element={<App />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
