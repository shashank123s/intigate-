import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function Layout() {
    return (
        <div style={{display:'flex', padding:"20px"}}>
            <div  style={{width:"254px"}}>
                <Sidebar />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}
