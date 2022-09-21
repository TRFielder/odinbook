import React, { useContext, useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Profile from './components/Profile';
import Login from './components/Login';
import { UserContext } from './utilities/UserContext';
import UserType from './utilities/UserType';
import Nav from './components/Nav';
import PostLogin from './components/PostLogin';
import ProtectedRoute, { ProtectedRouteProps } from './components/ProtectedRoute/ProtectedRoute';

// Basic style import
import './App.css';

// Protected route default props
const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
  authenticationPath: '/login',
};

function App() {
  const [user, setUser] = useState<UserType | null>(null);
  return (
    <HashRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Nav />
      </UserContext.Provider>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />}></Route>
        <Route
          path="/login"
          element={
            <UserContext.Provider value={{ user, setUser }}>
              <Login />
            </UserContext.Provider>
          }
        />
        <Route
          path="/profile/:id"
          element={
            <UserContext.Provider value={{ user, setUser }}>
              <ProtectedRoute {...defaultProtectedRouteProps} outlet={<Profile />} />
            </UserContext.Provider>
          }
        />
        <Route
          path="/postlogin"
          element={
            <UserContext.Provider value={{ user, setUser }}>
              <PostLogin />
            </UserContext.Provider>
          }
        />
        <Route
          path="/me"
          element={
            <UserContext.Provider value={{ user, setUser }}>
              <ProtectedRoute {...defaultProtectedRouteProps} outlet={<Navigate to={`/profile/${user?._id}`} />} />
            </UserContext.Provider>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
