import React from 'react'
import { useSelector } from 'react-redux';
import { selectAuth } from '../Redux/authSlice';
import usersData from '../user.json';
export default function UserList() {
    const authState = useSelector(selectAuth);

    const filterData = usersData.filter((item) => {
        const userRole = authState.user?.role;
        return userRole === 3 ? item.role === 2 || item.role === 1 : userRole === 2 ? item.role === 2 : item.role === 0;
      });
      

  return (
    <div>
{
    filterData?.map((item: any, i:number) => {
        return (
            <p key={i}>{item.username}</p>
        )
    })
}
    </div>
  )
}
