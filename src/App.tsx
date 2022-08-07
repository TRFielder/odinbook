import React, { useContext, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Login from './components/Login';
import { UserContext } from './utilities/UserContext';
import UserType from './utilities/UserType';
import Nav from './components/Nav';

// Basic style import
import './App.css';

function App() {
  const [user, setUser] = useState<UserType | null>(null);
  return (
    <HashRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Nav />
      </UserContext.Provider>
      <Routes>
        <Route
          path="/"
          element={
            <UserContext.Provider value={{ user, setUser }}>
              <Login />
            </UserContext.Provider>
          }
        />
        <Route
          path="/profile"
          element={
            <UserContext.Provider value={{ user, setUser }}>
              <Profile />
            </UserContext.Provider>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
