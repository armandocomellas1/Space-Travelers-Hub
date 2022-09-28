import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import Rockets from './components/Rockets';
import Missions from './components/Missions';

const Navegation = () => (
  <div className="nav_main_cont">
    <div className="nav_container">
      <div className="menu_container">
        <div className="menu_img" />
        <h1>Space Traveler&apos;s Hub</h1>
      </div>
      <nav className="nav_menu">
        <NavLink
          to="/rockets"
          style={({ isActive }) => ({
            textDecoration: isActive ? 'underline 2px' : 'none',
          })}
        >
          Rockets
        </NavLink>
        <NavLink
          to="/missions"
          style={({ isActive }) => ({
            textDecoration: isActive ? 'underline 2px' : 'none',
          })}
        >
          Missions
        </NavLink>
        <NavLink
          to="/myprofile"
          style={({ isActive }) => ({
            textDecoration: isActive ? 'underline 2px' : 'none',
          })}
        >
          My Profile
        </NavLink>
      </nav>
    </div>
    <div className="line_menu">
      <hr />
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Navegation />
      <Routes>
        <Route path="/*" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
