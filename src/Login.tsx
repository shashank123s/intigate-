import React, { useState } from 'react';
import usersData from './user.json';
import { useDispatch } from 'react-redux';
import { login, logout, selectAuth } from './Redux/authSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

interface User {
  id: number;
  username: string;
  password: string;
  role: number;
}

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const authState = useSelector(selectAuth);


  console.log(authState)
  const handleLogin = () => {
    const user: User | undefined = usersData.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      setError(null);
      dispatch(login(user));
      console.log('Login successful');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  }


  return (
    <div>
      {authState.user && authState.user.role === 3 && (
        <>
        <button style={{color:"white", backgroundColor:"green", padding:"10px"}} onClick={handleLogout}>Log Out</button>
        <Link to="dashboard" >dahsboard</Link>
        </>
      )}
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default Login;
