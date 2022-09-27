import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
import Rockets from './components/Rockets';

const Navegation = () => (
  <div className="nav_main_cont">
    <div className="nav_container">
      <div>
        <h1>Space Traveler&apos;s Hub</h1>
      </div>
      <nav>
        <NavLink
          to="/rockets"
          style={({ isActive }) => ({
            color: isActive ? 'red' : 'blue',
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          Rockets
        </NavLink>
        <NavLink
          to="/missions"
          style={({ isActive }) => ({
            color: isActive ? 'red' : 'blue',
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          Missions
        </NavLink>
        <NavLink
          to="/myprofile"
          style={({ isActive }) => ({
            color: isActive ? 'red' : 'blue',
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          My Profile
        </NavLink>
      </nav>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Navegation />
      <Routes>
        <Route path="/*" element={<Rockets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
